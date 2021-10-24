import Component from '@glimmer/component';
import moment from 'moment';

export default class EmtDatetimeFormatStartComponent extends Component {
  get formatedDate() {
    return moment(this.args.record.end).format();
  }
}
