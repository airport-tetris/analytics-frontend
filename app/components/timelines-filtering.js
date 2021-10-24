import { tracked } from 'tracked-built-ins';
import Component from '@glimmer/component';
import { action } from '@ember/object';

// const alarmNameToValue = function (name) {
//   let result = '';
//   switch (name) {
//     case 'Low Warning':
//       result = 'W'
//       break;
//     case 'High Warning':
//       result = 'W'
//       break;
//     case 'Low Alarm':
//       result = 'A'
//       break;
//     case 'High Alarm':
//       result = 'A'
//       break;
//     case 'Critical':
//       result = 'C'
//       break;
//   }
//   return result;
// }

export default class TimelineFilteringContextComponent extends Component {
  terminalFilters = [
    tracked({ value: 1, label: 1, enabled: false }),
    tracked({ value: 2, label: 2, enabled: true }),
    tracked({ value: 3, label: 3, enabled: false }),
    tracked({ value: 4, label: 4, enabled: true }),
    tracked({ value: 5, label: 5, enabled: true }),
  ]

  airClassFilters = [
    tracked({ value: 'Wide_Body', label: 'Wide', enabled: true }),
    tracked({ value: 'Narrow_Body', label: 'Narrow', enabled: true }),
    tracked({ value: 'Regional', label: 'Regional', enabled: false }),
  ]

  // alarmTypeFilters = [
  //   tracked({ value: "W", label: "Warning", enabled: false }),
  //   tracked({ value: "A", label: "Alarm", enabled: true }),
  //   tracked({ value: "C", label: "Critical", enabled: true })
  // ]

  get terminalValues() {
    return this.terminalFilters
      .filter(item => item.enabled === true)
      .map(item => item.value)
  }

  get airClassValues() {
    return this.airClassFilters
      .filter(item => item.enabled === true)
      .map(item => item.value)
  }

  @action
  toggleFilter(filter) {
    // this.assetCriticalityFilters[ind].enabled = ! this.assetCriticalityFilters[ind].enabled
    // console.log(filter)
    filter.enabled = !filter.enabled;
    // this.assetCriticalityFilters = this.assetCriticalityFilters;
  }

  get outputData() {
    return this.args.inputData.filter(timeline => {
      return this.terminalValues.includes(+timeline.terminalId)
        && this.airClassValues.includes(timeline.airClass);
    });
  }
}
