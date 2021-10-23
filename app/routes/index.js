import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import { getOwner } from '@ember/application';
import fetch from 'fetch';

export default class IndexRoute extends Route {
  @service store;
  async model() {
    const response = await fetch('/S_private_3.json');
    const S = await response.json();
    Object.keys(S).forEach((lineKey) => {
      const orderedCost = Object.keys(S[lineKey])
        .map((standKey) => {
          return S[lineKey][standKey];
        })
        .sort((a, b) => {
          return a.Cost - b.Cost;
        })
        .slice(0, 20);
      S[lineKey] = orderedCost;
    });

    const responseStands = await fetch('/data/aircraft-stands.json');
    let stands = await responseStands.json();
    stands = stands.reduce((prev, val) => {
      prev[val['id']] = val;
      return prev;
    }, {});

    const responseRates = await fetch('/data/handling-rates.json');
    let rates = await responseRates.json();
    rates = rates.reduce((prev, val) => {
      prev[val.Name] = +val.Value;
      return prev;
    }, {});
    const responseTimes = await fetch('/data/handling-times.json');
    let times = await responseTimes.json();

    times = times.reduce((prev, val) => {
      prev[val['Aircraft_Class']] = {
        jbTime: +val['JetBridge_Handling_Time'],
        awayTime: +val['Away_Handling_Time'],
      };
      return prev;
    }, {});

    return {
      optimalStands: S,
      stands,
      rates,
      times,
    };
  }
  setupController(controller) {
    super.setupController(...arguments);
    const owner = getOwner(this);
    const theme = owner.lookup('component:models-table').themeInstance;
    controller.columns.unshiftObject({
      component: theme.expandToggleComponent,
      componentForFilterCell: theme.expandAllToggleComponent,
      mayBeHidden: false,
    });
  }
}
