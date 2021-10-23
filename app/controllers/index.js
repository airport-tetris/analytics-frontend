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

  columns = [
    { propertyName: 'isArrival' },
    { propertyName: 'pseudoAcCode', isHidden: true },
    {
      propertyName: 'start',
      sortFunction: function sortBefore(i1, i2) {
        return moment(i1).diff(i2);
      },
      component: 'emt/datetime-format-start',
    },
    {
      propertyName: 'end',
      sortFunction: function sortBefore(i1, i2) {
        return moment(i1).diff(i2);
      },
      component: 'emt/datetime-format-start',
    },
    { propertyName: 'duration' },
    { propertyName: 'airline', isHidden: true },
    { propertyName: 'index', isHidden: true },
    { propertyName: 'cost' },
    { propertyName: 'optCost' },
    { propertyName: 'airport', isHidden: true },
    { propertyName: 'pax', isHidden: true },
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
    minX: '2019-08-17 00:00:00',
    maxX: '2019-08-17 23:59:59',
  });

  @tracked
  showErrors = false;

  @tracked
  showChartOptions = false;

  @tracked
  incorrectLines = [];

  @tracked
  calcCost = 0;

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

  get totalOptCostsViaStands() {
    const optimalStands = this.model.optimalStands;
    return Object.keys(optimalStands).reduce((prev, key) => {
      prev = prev + optimalStands[key][0].Cost;
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

  @action
  calculateCosts() {
    const calcCost = this.data.reduce((prev, timeline) => {
      const stand = this.model.stands[timeline.standId];
      const isAway = stand['jetbridgeType'] === 'N';

      const busRate = +this.model.rates['Bus_Cost_per_Minute'];
      const busTime = calcTime(stand, timeline.terminalId);
      const busCount = Math.ceil(+timeline.pax / 80);
      const busCost = isAway ? busCount * busTime * busRate : 0;

      const standRate = isAway
        ? +this.model.rates['Away_Aircraft_Stand_Cost_per_Minute']
        : +this.model.rates['JetBridge_Aircraft_Stand_Cost_per_Minute'];

      const standTime =
        this.model.times[timeline.airClass][isAway ? 'awayTime' : 'jbTime'];
      const standCost = standRate * standTime;

      const taxiingRate = this.model.rates['Aircraft_Taxiing_Cost_per_Minute'];
      const taxiingTime = +stand['taxiingTime'];
      const taxiingCost = taxiingRate * taxiingTime;

      const totalCost = busCost + taxiingCost + standCost;

      prev = prev + totalCost;
      return prev;
    }, 0);
    this.calcCost = calcCost;
  };

}

function calcTime(stand, terminal) {
  return Number(stand[`timeToTerminal${terminal}`]);
}

const defaultCSV = `,flight_AD,flight_datetime,flight_AL_Synchron_code,flight_number,flight_ID,flight_AP,flight_AC_Synchron_code,flight_AC_PAX_capacity_total,flight_PAX,Aircraft_Stand,flight_terminal,empty_spaces,air_classes,count_date,opt_mc,opt_min_cost_value,type_mc,flight_datetime_start,flight_datetime_finish,C_vc,index
0,D,2019-08-17 02:00:00,SU,1188,D,VOG,73H,158,151,205,1,7,Narrow_Body,1,205,2095,away,2019-08-17 00:50:00,2019-08-17 01:55:00,2095,247
1,D,2019-08-17 02:40:00,SU,1300,D,MRV,32A,158,139,217,1,19,Narrow_Body,1,205,2095,away,2019-08-17 01:30:00,2019-08-17 02:35:00,2095,292
2,D,2019-08-17 02:30:00,N4,1801,I,AYT,77W,486,389,48,2,97,Wide_Body,1,48,3610,jetbridge,2019-08-17 01:10:00,2019-08-17 02:10:00,3610,884
3,D,2019-08-17 07:55:00,SU,2306,I,FRA,32B,183,178,10,3,5,Narrow_Body,1,10,2095,away,2019-08-17 06:45:00,2019-08-17 07:50:00,2095,815
4,D,2019-08-17 01:40:00,SU,1234,D,UFA,32A,158,149,190,1,9,Narrow_Body,1,205,2095,away,2019-08-17 00:29:00,2019-08-17 01:34:00,2125,272
5,D,2019-08-17 03:50:00,RL,7743,I,BCN,763,330,330,48,2,0,Wide_Body,1,48,3250,jetbridge,2019-08-17 02:30:00,2019-08-17 03:30:00,3250,899
6,D,2019-08-17 01:20:00,SU,1632,D,SIP,32A,158,127,217,1,31,Narrow_Body,1,205,2095,away,2019-08-17 00:10:00,2019-08-17 01:15:00,2095,402
7,D,2019-08-17 02:55:00,SU,1674,D,ROV,320,140,86,10,3,54,Narrow_Body,1,10,1915,away,2019-08-17 01:45:00,2019-08-17 02:50:00,1915,916
8,A,2019-08-17 03:55:00,SU,2619,I,BRU,32A,158,114,10,5,44,Narrow_Body,1,10,2095,away,2019-08-17 04:00:00,2019-08-17 05:05:00,2095,546
9,A,2019-08-17 02:35:00,SU,2305,I,FRA,320,140,112,11,3,28,Narrow_Body,1,10,1915,away,2019-08-17 02:41:00,2019-08-17 03:46:00,1945,942
10,A,2019-08-17 05:20:00,SU,1129,D,AER,73H,158,157,205,1,1,Narrow_Body,1,205,2095,away,2019-08-17 05:25:00,2019-08-17 06:30:00,2095,216
11,D,2019-08-17 02:05:00,SU,1864,I,EVN,32A,158,136,11,3,22,Narrow_Body,1,10,1915,away,2019-08-17 00:54:00,2019-08-17 01:59:00,1945,432
12,A,2019-08-17 00:15:00,SU,1897,I,EVN,32B,183,147,10,3,36,Narrow_Body,1,10,2095,away,2019-08-17 00:20:00,2019-08-17 01:25:00,2095,783
13,A,2019-08-17 03:25:00,JU,656,I,BEG,319,138,115,1,5,23,Narrow_Body,1,10,2095,away,2019-08-17 03:30:00,2019-08-17 04:35:00,2140,1024
14,A,2019-08-17 03:35:00,SU,2497,I,CPH,73H,158,121,34,5,37,Narrow_Body,1,10,2095,jetbridge,2019-08-17 03:50:00,2019-08-17 04:40:00,2215,528
15,A,2019-08-17 03:45:00,AZ,596,I,FCO,320,180,129,39,5,51,Narrow_Body,1,29,2380,jetbridge,2019-08-17 04:01:00,2019-08-17 04:51:00,2425,1005
16,A,2019-08-17 03:20:00,KM,560,I,MLA,320,180,139,40,5,41,Narrow_Body,1,29,2380,jetbridge,2019-08-17 03:37:00,2019-08-17 04:27:00,2455,1002
17,D,2019-08-17 11:30:00,SU,16,D,LED,73H,158,136,205,1,22,Narrow_Body,1,205,2095,away,2019-08-17 10:20:00,2019-08-17 11:25:00,2095,134
18,D,2019-08-17 00:30:00,EO,563,D,OSW,E90,110,64,11,3,46,Regional,1,10,1570,away,2019-08-16 23:34:00,2019-08-17 00:24:00,1600,750
19,A,2019-08-17 11:35:00,EO,228,D,VOG,E90,110,88,10,3,22,Regional,1,10,1570,away,2019-08-17 11:40:00,2019-08-17 12:30:00,1570,741
20,A,2019-08-17 05:10:00,SU,1323,D,MMK,32A,158,146,217,1,12,Narrow_Body,1,205,2095,away,2019-08-17 05:15:00,2019-08-17 06:20:00,2095,303
21,A,2019-08-17 02:45:00,FV,6152,D,SIP,77W,457,454,16,3,3,Wide_Body,1,10,2980,jetbridge,2019-08-17 02:56:00,2019-08-17 03:56:00,2995,1074
22,A,2019-08-17 03:15:00,SU,2595,I,MUC,320,140,134,8,3,6,Narrow_Body,1,10,1915,away,2019-08-17 03:24:00,2019-08-17 04:29:00,2080,987
23,A,2019-08-17 00:20:00,SU,1427,D,CEK,32A,158,155,191,1,3,Narrow_Body,1,205,2095,away,2019-08-17 00:26:00,2019-08-17 01:31:00,2125,331
24,A,2019-08-17 11:15:00,RL,7544,I,DLM,752,224,220,77,2,4,Wide_Body,1,77,2830,away,2019-08-17 11:23:00,2019-08-17 12:43:00,2830,1090
25,D,2019-08-17 03:30:00,RL,7701,I,AYT,77W,492,490,55,2,2,Wide_Body,1,48,3610,jetbridge,2019-08-17 02:09:00,2019-08-17 03:09:00,3640,1082
26,A,2019-08-17 11:10:00,SU,1357,D,RTW,SU9,87,82,217,1,5,Regional,2,205,1750,away,2019-08-17 11:15:00,2019-08-17 12:05:00,1750,55
27,A,2019-08-17 04:15:00,SU,2475,I,NCE,320,140,125,2,5,15,Narrow_Body,2,10,2095,away,2019-08-17 04:20:00,2019-08-17 05:25:00,2230,977
28,A,2019-08-17 04:15:00,SU,2453,I,CDG,321,170,134,11,3,36,Narrow_Body,2,10,2095,away,2019-08-17 04:21:00,2019-08-17 05:26:00,2125,859
29,A,2019-08-17 05:30:00,JD,475,I,HGH,332,264,242,48,2,22,Wide_Body,2,48,3070,jetbridge,2019-08-17 05:50:00,2019-08-17 06:50:00,3070,896
30,A,2019-08-17 15:40:00,SU,2185,I,VIE,32B,183,178,10,5,5,Narrow_Body,2,29,2380,away,2019-08-17 15:45:00,2019-08-17 16:50:00,2395,812
31,A,2019-08-17 22:30:00,N4,134,D,SIP,73H,189,152,10,3,37,Narrow_Body,2,10,2095,away,2019-08-17 22:35:00,2019-08-17 23:40:00,2095,637
32,A,2019-08-17 04:00:00,SU,2423,I,VCE,320,140,124,3,3,16,Narrow_Body,2,10,1915,away,2019-08-17 04:08:00,2019-08-17 05:13:00,2095,970
33,D,2019-08-17 00:50:00,RL,7745,I,PMI,738,189,188,77,2,1,Narrow_Body,2,77,2485,away,2019-08-16 23:37:00,2019-08-17 00:42:00,2485,711
34,A,2019-08-17 05:30:00,N4,730,D,REN,73H,189,166,10,3,23,Narrow_Body,2,10,2095,away,2019-08-17 05:35:00,2019-08-17 06:40:00,2095,674
35,A,2019-08-17 12:35:00,SU,1201,D,PEE,32A,158,155,205,1,3,Narrow_Body,2,205,2095,away,2019-08-17 12:40:00,2019-08-17 13:45:00,2095,255
36,D,2019-08-17 00:50:00,RL,7537,I,LCA,738,189,152,78,2,37,Narrow_Body,2,77,2485,away,2019-08-16 23:39:00,2019-08-17 00:44:00,2500,708
37,A,2019-08-17 12:35:00,KL,901,I,AMS,73W,142,131,10,5,11,Narrow_Body,2,10,2095,away,2019-08-17 12:40:00,2019-08-17 13:45:00,2095,1040
38,A,2019-08-17 12:45:00,SU,1421,D,CEK,32A,158,150,217,1,8,Narrow_Body,2,205,2095,away,2019-08-17 12:50:00,2019-08-17 13:55:00,2095,325
39,A,2019-08-17 05:55:00,SU,1845,I,KIV,320,140,112,11,3,28,Narrow_Body,2,10,1915,away,2019-08-17 06:01:00,2019-08-17 07:06:00,1945,918
40,D,2019-08-17 11:50:00,SU,2100,I,RIX,SU9,87,83,11,3,4,Regional,2,10,1570,away,2019-08-17 10:54:00,2019-08-17 11:44:00,1600,114
41,A,2019-08-17 17:10:00,SU,2091,I,BEG,320,140,127,78,2,13,Narrow_Body,2,78,2170,away,2019-08-17 17:16:00,2019-08-17 18:21:00,2170,929
42,A,2019-08-17 04:40:00,SU,2405,I,FCO,320,140,119,1,3,21,Narrow_Body,2,10,1915,away,2019-08-17 04:45:00,2019-08-17 05:50:00,1960,961
43,A,2019-08-17 04:35:00,SU,1397,D,SCW,SU9,87,70,190,1,17,Regional,2,205,1750,away,2019-08-17 04:41:00,2019-08-17 05:31:00,1780,85
44,D,2019-08-17 12:10:00,EO,453,I,CAN,763,290,232,48,2,58,Wide_Body,2,48,3070,jetbridge,2019-08-17 10:50:00,2019-08-17 11:50:00,3070,872
45,D,2019-08-17 09:10:00,SU,1460,D,OVB,73H,158,147,205,1,11,Narrow_Body,2,205,2095,away,2019-08-17 08:00:00,2019-08-17 09:05:00,2095,346
46,D,2019-08-17 00:35:00,SU,1132,D,AER,SU9,87,82,205,1,5,Regional,2,205,1750,away,2019-08-16 23:40:00,2019-08-17 00:30:00,1750,11
47,A,2019-08-17 11:10:00,SU,1943,I,ALA,32B,183,182,78,2,1,Narrow_Body,2,77,2485,away,2019-08-17 11:16:00,2019-08-17 12:21:00,2500,786
48,A,2019-08-17 00:35:00,SU,2535,I,OSL,73H,158,93,1,3,65,Narrow_Body,2,10,1915,away,2019-08-17 00:40:00,2019-08-17 01:45:00,1960,536
49,A,2019-08-17 05:55:00,SU,513,I,IKA,32A,158,147,78,2,11,Narrow_Body,2,78,2170,away,2019-08-17 06:01:00,2019-08-17 07:06:00,2170,168
50,D,2019-08-17 11:55:00,U6,439,D,SVX,320,160,159,190,1,1,Narrow_Body,2,205,2095,away,2019-08-17 10:44:00,2019-08-17 11:49:00,2125,2
51,A,2019-08-17 04:35:00,SU,2093,I,BEG,320,140,114,78,2,26,Narrow_Body,2,78,2170,away,2019-08-17 04:41:00,2019-08-17 05:46:00,2170,930
52,D,2019-08-17 01:05:00,SU,1562,D,IKT,73H,158,146,89,1,12,Narrow_Body,2,205,2095,away,2019-08-16 23:55:00,2019-08-17 01:00:00,2140,386
53,D,2019-08-17 11:40:00,SU,1490,D,SLY,32A,158,115,191,1,43,Narrow_Body,2,205,2095,away,2019-08-17 10:29:00,2019-08-17 11:34:00,2125,358
54,D,2019-08-17 12:10:00,SU,2514,I,BCN,32B,183,180,1,3,3,Narrow_Body,2,10,2095,away,2019-08-17 11:00:00,2019-08-17 12:05:00,2170,832
55,A,2019-08-17 04:55:00,SU,2591,I,DUB,320,140,125,8,3,15,Narrow_Body,2,10,1915,away,2019-08-17 05:04:00,2019-08-17 06:09:00,2080,985
56,D,2019-08-17 11:55:00,SU,42,D,LED,32A,158,153,89,1,5,Narrow_Body,2,205,2095,away,2019-08-17 10:45:00,2019-08-17 11:50:00,2140,158
57,A,2019-08-17 04:55:00,SU,1315,D,MRV,73H,158,152,191,1,6,Narrow_Body,2,205,2095,away,2019-08-17 05:01:00,2019-08-17 06:06:00,2125,301
58,D,2019-08-17 02:10:00,N4,1835,I,DLM,772,440,352,55,2,88,Wide_Body,2,48,3430,jetbridge,2019-08-17 00:49:00,2019-08-17 01:49:00,3460,877`;
