import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class IndexController extends Controller {
  @tracked data = this.model;
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

  @action
  parseTimetable() {
    //     id,flight_AD,flight_datetime,flight_AL_Synchron_code,flight_number,flight_ID,flight_AP,flight_AC_Synchron_code,flight_AC_PAX_capacity_total,flight_PAX,Aircraft_Stand,flight_terminal,empty_spaces,air_classes,count_date,type_mc,flight_datetime_start,flight_datetime_finish,C_vc,index
    // 0,D,2019-05-17 00:05:00,SU,1424,D,CEK,32A,158,87,86,1,71,Narrow_Body,4,away,2019-05-16 23:00:00,2019-05-17 00:05:00,1550,504
    // 1,A,2019-05-17 00:05:00,SU,1493,D,MMK,SU9,87,80,86,1,7,Regional,4,away,2019-05-17 00:05:00,2019-05-17 00:55:00,1250,547
    console.log(this.timetableCSV);
    const strings = this.timetableCSV.split('\n');

    this.store.unloadAll('post').then(() => {
      strings.slice(1).forEach((str) => {


      });
    })






  }
}
