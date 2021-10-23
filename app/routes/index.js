import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import { getOwner } from '@ember/application';

export default class IndexRoute extends Route {
  @service store;
  model() {
    // return this.store.findAll('timetable');
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
