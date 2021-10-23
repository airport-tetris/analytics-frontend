import Controller from '@ember/controller';
// import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';
import { A } from '@ember/array';
import { tracked } from 'tracked-built-ins';
import moment from 'moment';

export default class IndexController extends Controller {
  @tracked data;
  @service store;

  @tracked
  expandedItems = [];

  columnSets = [];

  // @attr('boolean') isArrival;
  // @attr('date') time;
  // @attr('date') start;
  // @attr('date') end;
  // @attr('string') airline;
  // @attr('string') synchronCode;
  // @attr('string') flightType;
  // @attr('string') airport;
  // @attr('number') pax;
  // @attr('number') paxCapTotal;
  // @attr('number') index;
  // @attr('number') terminalId;
  // @attr('number') standId;
  // @attr('number') cost;
  // @attr('number') optStand;
  // @attr('number') optCost;

  columns = [
    { propertyName: 'isArrival' },
    { propertyName: 'pseudoAcCode' },
    {
      propertyName: 'start',
      sortFunction: function sortBefore(i1, i2) {
        return moment(i1).diff(i2);
      },
    },
    { propertyName: 'end' },
    { propertyName: 'airline', isHidden: true },
    { propertyName: 'index', isHidden: true },
    { propertyName: 'cost' },
    { propertyName: 'optCost' },
    { propertyName: 'airport' },
    { propertyName: 'pax' },
    { propertyName: 'paxCapTotal', isHidden: true },
    {
      propertyName: 'diffFromOpt',
      sortFunction: function sortBefore(i1, i2) {
        return Number(i2) - Number(i1);
      },
    },
    // { propertyName: 'paxCapTotal' },
    { propertyName: 'terminalId' },
    { propertyName: 'optStand' },

    {
      propertyName: 'standId',
      filterFunction(val, filterVal) {
        return filterVal === val;
      },
    },

    // { propertyName: 'signal', title: "Signal Trend", component: 'emt/alarms-graph-cell', className: 'emt-alarms-readings-graph-cell' },
  ];

  showComponentFooter = true;
  showColumnsDropdown = true;
  useFilteringByColumns = true;
  showGlobalFilter = true;
  useNumericPagination = true;
  showPageSize = true;
  filteringIgnoreCase = true;
  doFilteringByHiddenColumns = false;
  showCurrentPageNumberSelect = true;
  collapseNumPaginationForPagesCount = 1;
  multipleColumnsSorting = true;

  timetableCSV = defaultCSV;

  chartOptions = tracked({
    minY: '',
    maxY: '',
    minX: '2019-05-17 00:00:00',
    maxX: '2019-05-17 23:59:59',
  });

  @tracked
  showErrors = false;

  @tracked
  showChartOptions = false;


  @tracked
  incorrectLines = [];

  get stands() {
    let stands = {};
    // const incorrectLines = [];
    if (!this.data) {
      return [];
    }
    this.data.forEach((line, idx) => {
      const standId = line.standId;
      if (typeof standId === 'undefined') {
        console.warn(`Undefined stand for line ${line}`);
      } else {
        if (typeof stands[standId] === 'undefined') {
          stands[standId] = [];
        }
        stands[standId].push(idx);
      }
    });
    const standStructure = Object.keys(stands).map((key) => {
      // let result = false;
      // let incorrectLines = [];
      let standLineIds = stands[key].sort((a, b) => {
        return moment(this.data[a].start).diff(this.data[b].start, 'minutes');
      });
      return {
        standId: key,
        lines: standLineIds.map((id) => {
          return this.data[id];
        }),
      };
    });
    return standStructure;
  }

  get totalDuration() {
    return moment.duration(24, 'hours').asMinutes();
  }

  get standsUtilization() {
    const totalD = this.totalDuration;
    return this.stands
      .map((stand) => {
        const standUtilization = stand.lines.reduce((prev, line) => {
          prev = prev + moment(line.end).diff(line.start, 'minutes');
          return prev;
        }, 0);
        return {
          stand: stand.standId,
          utilisation: standUtilization / totalD,
        };
      })
      .sort((a, b) => {
        return b.utilisation - a.utilisation;
      });
  }

  get totalStandsUtilization() {
    const len = this.standsUtilization.length;
    return this.standsUtilization.reduce((prev, val) => {
      prev = prev + val.utilisation / len;
      return prev;
    }, 0);
  }

  get totalCost() {
    return this.stands.reduce((prev, item) => {
      prev =
        prev +
        item.lines.reduce((prev2, line) => {
          prev2 = prev2 + Number(line.cost);
          return prev2;
        }, 0);
      return prev;
    }, 0);
  }

  get totalOptCost() {
    return this.stands.reduce((prev, item) => {
      prev =
        prev +
        item.lines.reduce((prev2, line) => {
          prev2 = prev2 + Number(line.optCost);
          return prev2;
        }, 0);
      return prev;
    }, 0);
  }

  get optimalRatio() {
    return this.totalCost / this.totalOptCost;
  }

  get incorrectData() {
    const stands = this.stands;
    const incorrectLines = stands.filter((stand) => {
      const intersectedLines = stand.lines.filter((line, i) => {
        const condBefore = stand.lines.slice(0, i).some((lineBefore) => {
          return moment(line.start).isBetween(lineBefore.start, lineBefore.end);
        });
        if (condBefore) return true;
        const condAfter = stand.lines.slice(i + 1).some((lineAfter) => {
          return moment(line.start).isBetween(lineAfter.start, lineAfter.end);
        });
        return condAfter;
      });
      return intersectedLines.length > 0;
    });
    return incorrectLines;
  }

  @action
  toggleShowOptions() {
    this.showChartOptions = !this.showChartOptions;
  }

  @action
  deleteTimetable() {
    this.store.unloadAll('timetable');
  }

  @action
  parseTimetable() {
    //     ,flight_AD,flight_datetime,flight_AL_Synchron_code,flight_number,flight_ID,flight_AP,flight_AC_Synchron_code,flight_AC_PAX_capacity_total,flight_PAX,Aircraft_Stand,flight_terminal,empty_spaces,air_classes,count_date,type_mc,flight_datetime_start,flight_datetime_finish,C_vc,index
    // 0,D,2019-05-17 00:05:00,SU,1424,D,CEK,32A,158,87,86,1,71,Narrow_Body,4,away,2019-05-16 23:00:00,2019-05-17 00:05:00,1550,504
    // 1,A,2019-05-17 00:05:00,SU,1493,D,MMK,SU9,87,80,86,1,7,Regional,4,away,2019-05-17 00:05:00,2019-05-17 00:55:00,1250,547
    // console.log(this.timetableCSV);
    const strings = this.timetableCSV.split('\n');
    let allModels = [];
    if (strings.slice(0, 1).slice(0, 20) === ',flight_AD,flight_da') {
      alert('Header is incorrect');
    } else {
      strings.slice(1).forEach((str) => {
        const timetable = str.split(',');
        let [id, ad, datetime, alSyn, flightNumber, fId, ap, acSyn, paxTotal, pax, airStand, terminal, , , , optStand, optCost, , start, finish, cost, index, ...rest] = timetable;
        allModels.push(
          this.store.createRecord('timetable', {
            index,
            isArrival: ad === 'A',
            time: datetime,
            airline: alSyn,
            synchronCode: flightNumber,
            flightType: fId,
            terminalId: terminal,
            airport: ap,
            pax: pax,
            paxCapTotal: paxTotal,
            standId: airStand,
            start: start,
            end: finish,
            cost: cost,
            optStand,
            optCost,
          })
        );
      });
      this.data = A(allModels);
    }
  }

  @action
  toggleShowErrors() {
    this.showErrors = !this.showErrors;
  }

}

const defaultCSV = `,flight_AD,flight_datetime,flight_AL_Synchron_code,flight_number,flight_ID,flight_AP,flight_AC_Synchron_code,flight_AC_PAX_capacity_total,flight_PAX,Aircraft_Stand,flight_terminal,empty_spaces,air_classes,count_date,opt_mc,opt_min_cost_value,type_mc,flight_datetime_start,flight_datetime_finish,C_vc,index
0,A,2019-05-17 11:05:00,U6,1,D,SVX,320,160,130,1,3,30,Narrow_Body,3,1,1600,away,2019-05-17 11:10:00,2019-05-17 12:15:00,1600,0
1,D,2019-05-17 07:15:00,SU,1320,D,MMK,32A,158,78,86,1,80,Narrow_Body,6,86,1550,away,2019-05-17 06:05:00,2019-05-17 07:10:00,1550,433
2,A,2019-05-17 12:55:00,SU,1321,D,MMK,32A,158,156,86,1,2,Narrow_Body,2,86,1750,away,2019-05-17 13:00:00,2019-05-17 14:05:00,1750,434
3,D,2019-05-17 23:20:00,SU,1322,D,MMK,32A,158,60,86,1,98,Narrow_Body,2,86,1550,away,2019-05-17 22:10:00,2019-05-17 23:15:00,1550,435
4,A,2019-05-17 05:10:00,SU,1323,D,MMK,32A,158,127,87,1,31,Narrow_Body,1,86,1750,away,2019-05-17 05:15:00,2019-05-17 06:20:00,1750,436
5,D,2019-05-17 15:10:00,SU,1324,D,MMK,32A,158,136,87,1,22,Narrow_Body,6,86,1750,away,2019-05-17 14:00:00,2019-05-17 15:05:00,1750,437
6,A,2019-05-17 21:05:00,SU,1325,D,MMK,32A,158,127,87,1,31,Narrow_Body,3,86,1750,away,2019-05-17 21:10:00,2019-05-17 22:15:00,1750,438
7,D,2019-05-17 16:20:00,SU,1330,D,ARH,SU9,87,85,86,1,2,Regional,3,86,1450,away,2019-05-17 15:25:00,2019-05-17 16:15:00,1450,439
8,A,2019-05-17 04:55:00,SU,1315,D,MRV,SU9,87,63,86,1,24,Regional,3,86,1250,away,2019-05-17 05:00:00,2019-05-17 05:50:00,1250,432
9,D,2019-05-17 08:10:00,SU,1332,D,ARH,SU9,87,70,86,1,17,Regional,4,86,1250,away,2019-05-17 07:15:00,2019-05-17 08:05:00,1250,440
10,D,2019-05-17 00:05:00,SU,1334,D,ARH,SU9,87,72,86,1,15,Regional,4,86,1250,away,2019-05-16 23:10:00,2019-05-17 00:00:00,1250,442
11,A,2019-05-17 04:50:00,SU,1335,D,ARH,SU9,87,72,88,1,15,Regional,4,86,1250,away,2019-05-17 04:55:00,2019-05-17 05:45:00,1250,443
12,D,2019-05-17 18:30:00,SU,1338,D,ARH,SU9,87,66,86,1,21,Regional,5,86,1250,away,2019-05-17 17:35:00,2019-05-17 18:25:00,1250,444
13,A,2019-05-17 23:45:00,SU,1339,D,ARH,SU9,87,70,86,1,17,Regional,6,86,1250,away,2019-05-17 23:50:00,2019-05-18 00:40:00,1250,445
14,D,2019-05-17 20:25:00,SU,1340,D,GOJ,32A,158,143,86,1,15,Narrow_Body,5,86,1750,away,2019-05-17 19:15:00,2019-05-17 20:20:00,1750,446
15,A,2019-05-17 23:45:00,SU,1341,D,GOJ,32A,158,50,87,1,108,Narrow_Body,6,86,1550,away,2019-05-17 23:50:00,2019-05-18 00:55:00,1550,447
16,D,2019-05-17 08:55:00,SU,1350,D,VOZ,SU9,87,82,87,1,5,Regional,6,86,1450,away,2019-05-17 08:00:00,2019-05-17 08:50:00,1450,448
17,A,2019-05-17 13:00:00,SU,1333,D,ARH,SU9,87,74,87,1,13,Regional,4,86,1250,away,2019-05-17 13:05:00,2019-05-17 13:55:00,1250,441
18,D,2019-05-17 20:55:00,SU,1314,D,MRV,73H,158,137,87,1,21,Narrow_Body,6,86,1750,away,2019-05-17 19:45:00,2019-05-17 20:50:00,1750,431
19,A,2019-05-17 19:45:00,SU,1313,D,MRV,73H,158,116,88,1,42,Narrow_Body,5,86,1750,away,2019-05-17 19:50:00,2019-05-17 20:55:00,1750,430
20,D,2019-05-17 13:55:00,SU,1312,D,MRV,73H,158,112,88,1,46,Narrow_Body,5,86,1750,away,2019-05-17 12:45:00,2019-05-17 13:50:00,1750,429
21,A,2019-05-17 15:00:00,SU,1287,D,ULV,SU9,87,71,88,1,16,Regional,5,86,1250,away,2019-05-17 15:05:00,2019-05-17 15:55:00,1250,412
22,D,2019-05-17 01:50:00,SU,1288,D,ULV,SU9,87,72,86,1,15,Regional,3,86,1250,away,2019-05-17 00:55:00,2019-05-17 01:45:00,1250,413
23,A,2019-05-17 06:55:00,SU,1289,D,ULV,SU9,87,76,87,1,11,Regional,4,86,1250,away,2019-05-17 07:00:00,2019-05-17 07:50:00,1250,414
24,D,2019-05-17 16:55:00,SU,1292,D,IJK,SU9,87,77,87,1,10,Regional,4,86,1250,away,2019-05-17 16:00:00,2019-05-17 16:50:00,1250,415
25,A,2019-05-17 21:50:00,SU,1293,D,IJK,SU9,87,81,88,1,6,Regional,6,86,1450,away,2019-05-17 21:55:00,2019-05-17 22:45:00,1450,416
26,D,2019-05-17 23:25:00,SU,1294,D,IJK,SU9,87,78,87,1,9,Regional,6,86,1250,away,2019-05-17 22:30:00,2019-05-17 23:20:00,1250,417
27,A,2019-05-17 04:20:00,SU,1295,D,IJK,SU9,87,74,89,1,13,Regional,3,86,1250,away,2019-05-17 04:25:00,2019-05-17 05:15:00,1250,418
28,D,2019-05-17 07:40:00,SU,1296,D,IJK,SU9,87,82,88,1,5,Regional,6,86,1450,away,2019-05-17 06:45:00,2019-05-17 07:35:00,1450,419
29,A,2019-05-17 12:45:00,SU,1297,D,IJK,SU9,87,76,89,1,11,Regional,2,86,1250,away,2019-05-17 12:50:00,2019-05-17 13:40:00,1250,420
30,D,2019-05-17 01:25:00,SU,1300,D,MRV,SU9,87,63,87,1,24,Regional,3,86,1250,away,2019-05-17 00:30:00,2019-05-17 01:20:00,1250,421
31,A,2019-05-17 09:35:00,SU,1301,D,MRV,SU9,87,71,86,1,16,Regional,6,86,1250,away,2019-05-17 09:40:00,2019-05-17 10:30:00,1250,422
32,D,2019-05-17 16:30:00,SU,1302,D,MRV,73H,158,132,89,1,26,Narrow_Body,5,86,1750,away,2019-05-17 15:20:00,2019-05-17 16:25:00,1750,423
33,A,2019-05-17 22:15:00,SU,1303,D,MRV,73H,158,120,89,1,38,Narrow_Body,5,86,1750,away,2019-05-17 22:20:00,2019-05-17 23:25:00,1750,424
34,D,2019-05-17 07:45:00,SU,1304,D,MRV,32A,158,97,89,1,61,Narrow_Body,7,86,1750,away,2019-05-17 06:35:00,2019-05-17 07:40:00,1750,425
35,A,2019-05-17 13:30:00,SU,1305,D,MRV,32A,158,113,90,1,45,Narrow_Body,5,86,1750,away,2019-05-17 13:35:00,2019-05-17 14:40:00,1750,426
36,D,2019-05-17 01:05:00,SU,1306,D,OVB,73H,158,127,88,1,31,Narrow_Body,2,86,1750,away,2019-05-16 23:55:00,2019-05-17 01:00:00,1750,427
37,A,2019-05-17 10:25:00,SU,1307,D,OVB,73H,158,146,87,1,12,Narrow_Body,4,86,1750,away,2019-05-17 10:30:00,2019-05-17 11:35:00,1750,428
38,A,2019-05-17 12:20:00,SU,1351,D,VOZ,SU9,87,80,90,1,7,Regional,4,86,1250,away,2019-05-17 12:25:00,2019-05-17 13:15:00,1250,449
39,D,2019-05-17 10:45:00,SU,1286,D,ULV,SU9,87,46,88,1,41,Regional,3,86,1250,away,2019-05-17 09:50:00,2019-05-17 10:40:00,1250,411
40,D,2019-05-17 23:50:00,SU,1352,D,VOZ,SU9,87,78,88,1,9,Regional,7,86,1250,away,2019-05-17 22:55:00,2019-05-17 23:45:00,1250,450
41,D,2019-05-17 06:35:00,SU,1356,D,RTW,SU9,87,47,89,1,40,Regional,3,86,1250,away,2019-05-17 05:40:00,2019-05-17 06:30:00,1250,452
42,D,2019-05-17 13:55:00,SU,1388,D,ULV,SU9,87,50,190,1,37,Regional,5,86,1250,away,2019-05-17 13:00:00,2019-05-17 13:50:00,1250,474
43,A,2019-05-17 18:05:00,SU,1389,D,ULV,SU9,87,77,87,1,10,Regional,5,86,1250,away,2019-05-17 18:10:00,2019-05-17 19:00:00,1250,475
44,D,2019-05-17 08:40:00,SU,1390,D,SCW,SU9,87,82,88,1,5,Regional,4,86,1450,away,2019-05-17 07:45:00,2019-05-17 08:35:00,1450,476
45,A,2019-05-17 13:50:00,SU,1391,D,SCW,SU9,87,81,88,1,6,Regional,4,86,1450,away,2019-05-17 13:55:00,2019-05-17 14:45:00,1450,477
46,D,2019-05-17 12:50:00,SU,1392,D,PEE,SU9,87,67,86,1,20,Regional,4,86,1250,away,2019-05-17 11:55:00,2019-05-17 12:45:00,1250,478
47,A,2019-05-17 22:15:00,SU,1393,D,PEE,SU9,87,70,90,1,17,Regional,5,86,1250,away,2019-05-17 22:20:00,2019-05-17 23:10:00,1250,479
48,D,2019-05-17 22:20:00,SU,1394,D,PEE,32A,158,151,89,1,7,Narrow_Body,6,86,1750,away,2019-05-17 21:10:00,2019-05-17 22:15:00,1750,480
49,A,2019-05-17 08:05:00,SU,1383,D,HMA,32A,158,144,86,1,14,Narrow_Body,6,86,1750,away,2019-05-17 08:10:00,2019-05-17 09:15:00,1750,473
50,A,2019-05-17 08:00:00,SU,1395,D,PEE,32A,158,132,89,1,26,Narrow_Body,4,86,1750,away,2019-05-17 08:05:00,2019-05-17 09:10:00,1750,481
51,A,2019-05-17 04:35:00,SU,1397,D,SCW,SU9,87,80,90,1,7,Regional,2,86,1250,away,2019-05-17 04:40:00,2019-05-17 05:30:00,1250,483
52,D,2019-05-17 08:30:00,SU,1400,D,SVX,32A,158,104,90,1,54,Narrow_Body,4,86,1750,away,2019-05-17 07:20:00,2019-05-17 08:25:00,1750,484
53,A,2019-05-17 14:30:00,SU,1401,D,SVX,32A,158,144,104,1,14,Narrow_Body,4,86,1750,away,2019-05-17 14:40:00,2019-05-17 15:45:00,1750,485
54,D,2019-05-17 11:20:00,SU,1402,D,SVX,73H,158,114,89,1,44,Narrow_Body,4,86,1750,away,2019-05-17 10:10:00,2019-05-17 11:15:00,1750,486
55,A,2019-05-17 17:30:00,SU,1403,D,SVX,73H,158,132,88,1,26,Narrow_Body,5,86,1750,away,2019-05-17 17:35:00,2019-05-17 18:40:00,1750,487
56,D,2019-05-17 15:20:00,SU,1404,D,SVX,32A,158,135,86,1,23,Narrow_Body,3,86,1750,away,2019-05-17 14:10:00,2019-05-17 15:15:00,1750,488
57,A,2019-05-17 21:35:00,SU,1405,D,SVX,32A,158,134,104,1,24,Narrow_Body,5,86,1750,away,2019-05-17 21:45:00,2019-05-17 22:50:00,1750,489
58,D,2019-05-17 22:40:00,SU,1396,D,SCW,32A,158,103,105,1,55,Narrow_Body,3,86,1750,away,2019-05-17 21:25:00,2019-05-17 22:30:00,1750,482
59,D,2019-05-17 01:00:00,SU,1382,D,HMA,32A,158,98,89,1,60,Narrow_Body,3,86,1750,away,2019-05-16 23:50:00,2019-05-17 00:55:00,1750,472
60,A,2019-05-17 23:35:00,SU,1375,D,EGO,SU9,87,77,89,1,10,Regional,7,86,1250,away,2019-05-17 23:40:00,2019-05-18 00:30:00,1250,471
61,D,2019-05-17 19:40:00,SU,1374,D,EGO,SU9,87,79,88,1,8,Regional,4,86,1250,away,2019-05-17 18:45:00,2019-05-17 19:35:00,1250,470
62,A,2019-05-17 11:10:00,SU,1357,D,RTW,SU9,87,66,88,1,21,Regional,1,86,1250,away,2019-05-17 11:15:00,2019-05-17 12:05:00,1250,453
63,D,2019-05-17 19:15:00,SU,1358,D,RTW,SU9,87,71,89,1,16,Regional,5,86,1250,away,2019-05-17 18:20:00,2019-05-17 19:10:00,1250,454
64,A,2019-05-17 23:35:00,SU,1359,D,RTW,SU9,87,68,90,1,19,Regional,7,86,1250,away,2019-05-17 23:40:00,2019-05-18 00:30:00,1250,455
65,D,2019-05-17 09:45:00,SU,1360,D,RTW,SU9,87,54,88,1,33,Regional,5,86,1250,away,2019-05-17 08:50:00,2019-05-17 09:40:00,1250,456
66,A,2019-05-17 14:05:00,SU,1361,D,RTW,SU9,87,72,89,1,15,Regional,4,86,1250,away,2019-05-17 14:10:00,2019-05-17 15:00:00,1250,457
67,D,2019-05-17 16:40:00,SU,1362,D,RTW,SU9,87,79,90,1,8,Regional,5,86,1250,away,2019-05-17 15:45:00,2019-05-17 16:35:00,1250,458
68,A,2019-05-17 21:05:00,SU,1363,D,RTW,SU9,87,82,86,1,5,Regional,3,86,1450,away,2019-05-17 21:10:00,2019-05-17 22:00:00,1450,459
69,D,2019-05-17 17:45:00,SU,1364,D,STW,SU9,87,72,89,1,15,Regional,5,86,1250,away,2019-05-17 16:50:00,2019-05-17 17:40:00,1250,460
70,A,2019-05-17 23:15:00,SU,1365,D,STW,SU9,87,81,104,1,6,Regional,4,86,1450,away,2019-05-17 23:25:00,2019-05-18 00:15:00,1450,461
71,D,2019-05-17 09:00:00,SU,1366,D,STW,SU9,87,80,190,1,7,Regional,5,86,1250,away,2019-05-17 08:05:00,2019-05-17 08:55:00,1250,462
72,A,2019-05-17 14:25:00,SU,1367,D,STW,SU9,87,71,190,1,16,Regional,4,86,1250,away,2019-05-17 14:30:00,2019-05-17 15:20:00,1250,463
73,D,2019-05-17 21:10:00,SU,1368,D,STW,SU9,87,77,89,1,10,Regional,3,86,1250,away,2019-05-17 20:15:00,2019-05-17 21:05:00,1250,464
74,A,2019-05-17 05:15:00,SU,1369,D,STW,SU9,87,34,190,1,53,Regional,2,86,1250,away,2019-05-17 05:20:00,2019-05-17 06:10:00,1250,465
75,D,2019-05-17 10:25:00,SU,1370,D,EGO,SU9,87,77,87,1,10,Regional,4,86,1250,away,2019-05-17 09:30:00,2019-05-17 10:20:00,1250,466
76,A,2019-05-17 14:20:00,SU,1371,D,EGO,SU9,87,74,191,1,13,Regional,4,86,1250,away,2019-05-17 14:25:00,2019-05-17 15:15:00,1250,467
77,D,2019-05-17 23:55:00,SU,1372,D,EGO,SU9,87,75,190,1,12,Regional,5,86,1250,away,2019-05-17 23:00:00,2019-05-17 23:50:00,1250,468
78,A,2019-05-17 04:10:00,SU,1373,D,EGO,SU9,87,35,87,1,52,Regional,3,86,1250,away,2019-05-17 04:15:00,2019-05-17 05:05:00,1250,469`;
