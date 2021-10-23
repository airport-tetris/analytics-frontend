import Model, { attr } from '@ember-data/model';

export default class TimetableModel extends Model {
  // {"id":"1","isArrival":true,"time":"2019-05-17 11:05:00","airline":"U6","synchronCode":"320","flightType":"D","terminalId":"3","airport":"SVX","pax":"130","paxCapTotal":"160","standId":""},{"id":"2","isArrival":false,"time":"2019-05-17
  @attr('boolean') isArrival;
  @attr('date') time;
  @attr('date') start;
  @attr('date') end;
  @attr('string') airline;
  @attr('string') synchronCode;
  @attr('string') flightType;
  @attr('string') airport;
  @attr('number') pax;
  @attr('number') paxCapTotal;
  @attr('number') index;
  @attr('number') terminalId;
  @attr('number') standId;
  @attr('number') cost;
  @attr('number') optStand;
  @attr('number') optCost;
  get diffFromOpt() {
    return this.cost / this.optCost;
  }
  get pseudoAcCode() {
    return `${this.airline}-${this.paxCapTotal}-${this.synchronCode}-${this.terminalId}`;
  }
}
