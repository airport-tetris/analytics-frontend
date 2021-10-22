import Controller from '@ember/controller';
// import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';
import { A } from '@ember/array';
import { tracked } from 'tracked-built-ins';

export default class IndexController extends Controller {
  @tracked data;
  @service store;

  columnSets = [
    // {
    //   label: 'Extended',
    //   showColumns: [
    //     'state',
    //     'signal.name',
    //     'signal.asset.id',
    //     'signal.asset.criticality',
    //     'signal.asset.healthIndex',
    //     'graph',
    //     'actions',
    //   ],
    //   hideOtherColumns: false
    // }
  ];

  // @attr('boolean') isArrival;
  // @attr('date') time;
  // @attr('string') airline;
  // @attr('string') synchronCode;
  // @attr('string') flightType;
  // @attr('string') airport;
  // @attr('number') pax;
  // @attr('number') paxCapTotal;

  // @attr('number') terminalId;
  // @attr('number') standId;
  // get pseudoAcCode(){

  columns = [
    { propertyName: 'pseudoAcCode' },
    { propertyName: 'isArrival' },
    { propertyName: 'time' },
    { propertyName: 'airline' },
    { propertyName: 'synchronCode' },
    { propertyName: 'flightType' },
    { propertyName: 'airport' },
    { propertyName: 'pax' },
    { propertyName: 'paxCapTotal' },
    { propertyName: 'terminalId' },
    { propertyName: 'standId' },

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

  timetableCSV = `,flight_AD,flight_datetime,flight_AL_Synchron_code,flight_number,flight_ID,flight_AP,flight_AC_Synchron_code,flight_AC_PAX_capacity_total,flight_PAX,Aircraft_Stand,flight_terminal,empty_spaces,air_classes,count_date,type_mc,flight_datetime_start,flight_datetime_finish,C_mc,C_away_jet,C_vc,handling_time,index
  0,D,2019-05-17 00:05:00,SU,1424,D,CEK,32A,158,87,1,1,71,Narrow_Body,4,away,2019-05-16 23:00:00,2019-05-17 00:05:00,150,1550,1700,65,504
  1,A,2019-05-17 00:05:00,SU,1493,D,MMK,SU9,87,80,1,1,7,Regional,4,away,2019-05-17 00:05:00,2019-05-17 00:55:00,150,1250,1400,50,547
  2,A,2019-05-17 00:05:00,AF,1144,I,CDG,319,143,129,2,5,14,Narrow_Body,4,away,2019-05-17 00:05:00,2019-05-17 01:10:00,150,1400,1550,65,317
  3,D,2019-05-17 00:05:00,SU,1334,D,ARH,SU9,87,72,1,1,15,Regional,4,away,2019-05-16 23:15:00,2019-05-17 00:05:00,150,1000,1150,50,442
  4,D,2019-05-17 00:10:00,SU,1954,I,SCO,SU9,87,63,3,2,24,Regional,5,away,2019-05-16 23:20:00,2019-05-17 00:10:00,150,1000,1150,50,680
  5,D,2019-05-17 00:10:00,SU,1948,I,AKX,SU9,87,38,4,2,49,Regional,5,away,2019-05-16 23:20:00,2019-05-17 00:10:00,150,1000,1150,50,678
  6,A,2019-05-17 00:10:00,SU,2469,I,BUD,320,140,71,1,3,69,Narrow_Body,5,away,2019-05-17 00:10:00,2019-05-17 01:15:00,150,1300,1450,65,881
  7,D,2019-05-17 00:10:00,SU,1478,D,ABA,73H,158,140,1,3,18,Narrow_Body,5,away,2019-05-16 23:05:00,2019-05-17 00:10:00,150,1350,1500,65,536
  8,A,2019-05-17 00:10:00,SU,2097,I,BEG,73H,158,74,1,3,84,Narrow_Body,5,away,2019-05-17 00:10:00,2019-05-17 01:15:00,150,1300,1450,65,733
  9,A,2019-05-17 00:20:00,SU,517,I,TLV,321,170,123,3,3,47,Narrow_Body,2,away,2019-05-17 00:20:00,2019-05-17 01:25:00,150,1350,1500,65,194
  10,A,2019-05-17 00:20:00,SU,1427,D,CEK,73H,158,75,4,1,83,Narrow_Body,2,away,2019-05-17 00:20:00,2019-05-17 01:25:00,150,1300,1450,65,507
  11,A,2019-05-17 00:25:00,SU,2125,I,SKG,32B,183,116,5,3,67,Narrow_Body,2,away,2019-05-17 00:25:00,2019-05-17 01:30:00,150,1350,1500,65,747
  12,A,2019-05-17 00:25:00,SU,31,D,LED,73H,158,97,6,1,61,Narrow_Body,2,away,2019-05-17 00:25:00,2019-05-17 01:30:00,150,1550,1700,65,27
  13,D,2019-05-17 00:30:00,EO,563,D,OSW,E90,110,60,7,3,50,Regional,1,away,2019-05-16 23:40:00,2019-05-17 00:30:00,150,1000,1150,50,211
  14,D,2019-05-17 00:35:00,SU,1132,D,AER,SU9,87,33,8,1,54,Regional,3,away,2019-05-16 23:45:00,2019-05-17 00:35:00,150,1000,1150,50,307
  15,A,2019-05-17 00:35:00,N4,378,I,EVN,73H,189,152,7,2,37,Narrow_Body,3,away,2019-05-17 00:35:00,2019-05-17 01:40:00,150,1450,1600,65,162
  16,A,2019-05-17 00:35:00,SU,2539,I,OSL,73H,158,68,8,3,90,Narrow_Body,3,away,2019-05-17 00:35:00,2019-05-17 01:40:00,150,1300,1450,65,908
  17,D,2019-05-17 00:40:00,SU,1638,D,OMS,32A,158,150,9,3,8,Narrow_Body,4,away,2019-05-16 23:35:00,2019-05-17 00:40:00,150,1350,1500,65,592
  18,D,2019-05-17 00:40:00,SU,46,D,LED,73H,158,155,10,1,3,Narrow_Body,4,away,2019-05-16 23:35:00,2019-05-17 00:40:00,150,1550,1700,65,40
  19,D,2019-05-17 00:40:00,FV,6167,D,REN,73H,189,145,11,3,44,Narrow_Body,4,away,2019-05-16 23:35:00,2019-05-17 00:40:00,150,1350,1500,65,968
  20,D,2019-05-17 00:40:00,SU,1428,D,MQF,73H,158,83,12,1,75,Narrow_Body,4,jetbridge,2019-05-16 23:50:00,2019-05-17 00:40:00,300,1250,1550,50,508`;

  chartOptions = tracked({
    minY: '',
    maxY: '',
    minX: '2019-05-17 00:00:00',
    maxX: '2019-05-17 23:59:59',
  });

  // @tracked maxY = '';

  @action
  changeChartOptions() {

    console.log(this.chartOptions);
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
        let [id, ad, datetime, alSyn, flightNumber, fId, ap, acSyn, paxTotal, pax, airStand, terminal, , , , , start, finish, cost, ...rest] = timetable;
        allModels.push(
          this.store.createRecord('timetable', {
            // id: Number(id) + 1,
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
          })
        );
      });
      this.data = A(allModels);
    }
  }
}
