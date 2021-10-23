'use strict';

define("svo-aircraft-tetris/tests/integration/components/d3/timetable-chart-test", ["qunit", "ember-qunit", "@ember/test-helpers"], function (_qunit, _emberQunit, _testHelpers) {
  "use strict";

  (0, _qunit.module)('Integration | Component | d3/timetable-chart', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });
      await (0, _testHelpers.render)(Ember.HTMLBars.template(
      /*
        <D3::TimetableChart />
      */
      {
        "id": "dXYzrY31",
        "block": "{\"symbols\":[],\"statements\":[[8,\"d3/timetable-chart\",[],[[],[]],null]],\"hasEval\":false,\"upvars\":[]}",
        "moduleName": "(unknown template module)"
      }));
      assert.equal(this.element.textContent.trim(), ''); // Template block usage:

      await (0, _testHelpers.render)(Ember.HTMLBars.template(
      /*
        
            <D3::TimetableChart>
              template block text
            </D3::TimetableChart>
          
      */
      {
        "id": "f1BAZoZP",
        "block": "{\"symbols\":[],\"statements\":[[2,\"\\n      \"],[8,\"d3/timetable-chart\",[],[[],[]],[[\"default\"],[{\"statements\":[[2,\"\\n        template block text\\n      \"]],\"parameters\":[]}]]],[2,\"\\n    \"]],\"hasEval\":false,\"upvars\":[]}",
        "moduleName": "(unknown template module)"
      }));
      assert.equal(this.element.textContent.trim(), 'template block text');
    });
  });
});
define("svo-aircraft-tetris/tests/integration/components/emt/expanded-line-test", ["qunit", "ember-qunit", "@ember/test-helpers"], function (_qunit, _emberQunit, _testHelpers) {
  "use strict";

  (0, _qunit.module)('Integration | Component | emt/expanded-line', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });
      await (0, _testHelpers.render)(Ember.HTMLBars.template(
      /*
        <Emt::ExpandedLine />
      */
      {
        "id": "ynAmd06E",
        "block": "{\"symbols\":[],\"statements\":[[8,\"emt/expanded-line\",[],[[],[]],null]],\"hasEval\":false,\"upvars\":[]}",
        "moduleName": "(unknown template module)"
      }));
      assert.equal(this.element.textContent.trim(), ''); // Template block usage:

      await (0, _testHelpers.render)(Ember.HTMLBars.template(
      /*
        
            <Emt::ExpandedLine>
              template block text
            </Emt::ExpandedLine>
          
      */
      {
        "id": "RXcZOjOD",
        "block": "{\"symbols\":[],\"statements\":[[2,\"\\n      \"],[8,\"emt/expanded-line\",[],[[],[]],[[\"default\"],[{\"statements\":[[2,\"\\n        template block text\\n      \"]],\"parameters\":[]}]]],[2,\"\\n    \"]],\"hasEval\":false,\"upvars\":[]}",
        "moduleName": "(unknown template module)"
      }));
      assert.equal(this.element.textContent.trim(), 'template block text');
    });
  });
});
define("svo-aircraft-tetris/tests/test-helper", ["svo-aircraft-tetris/app", "svo-aircraft-tetris/config/environment", "qunit", "@ember/test-helpers", "qunit-dom", "ember-qunit"], function (_app, _environment, QUnit, _testHelpers, _qunitDom, _emberQunit) {
  "use strict";

  (0, _testHelpers.setApplication)(_app.default.create(_environment.default.APP));
  (0, _qunitDom.setup)(QUnit.assert);
  (0, _emberQunit.start)();
});
define("svo-aircraft-tetris/tests/unit/adapters/application-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Adapter | application', function (hooks) {
    (0, _emberQunit.setupTest)(hooks); // Replace this with your real tests.

    (0, _qunit.test)('it exists', function (assert) {
      let adapter = this.owner.lookup('adapter:application');
      assert.ok(adapter);
    });
  });
});
define("svo-aircraft-tetris/tests/unit/controllers/index-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Controller | index', function (hooks) {
    (0, _emberQunit.setupTest)(hooks); // TODO: Replace this with your real tests.

    (0, _qunit.test)('it exists', function (assert) {
      let controller = this.owner.lookup('controller:index');
      assert.ok(controller);
    });
  });
});
define("svo-aircraft-tetris/tests/unit/instance-initializers/emt-inject-test", ["svo-aircraft-tetris/instance-initializers/emt-inject", "qunit", "ember-resolver"], function (_emtInject, _qunit, _emberResolver) {
  "use strict";

  (0, _qunit.module)('Unit | Instance Initializer | emt-inject', function (hooks) {
    hooks.beforeEach(function () {
      this.TestApplication = class TestApplication extends Ember.Application {};
      this.TestApplication.instanceInitializer({
        name: 'initializer under test',
        initialize: _emtInject.initialize
      });
      this.application = this.TestApplication.create({
        autoboot: false,
        Resolver: _emberResolver.default
      });
      this.instance = this.application.buildInstance();
    });
    hooks.afterEach(function () {
      Ember.run(this.instance, 'destroy');
      Ember.run(this.application, 'destroy');
    }); // TODO: Replace this with your real tests.

    (0, _qunit.test)('it works', async function (assert) {
      await this.instance.boot();
      assert.ok(true);
    });
  });
});
define("svo-aircraft-tetris/tests/unit/models/aircraft-stand-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Model | aircraft stand', function (hooks) {
    (0, _emberQunit.setupTest)(hooks); // Replace this with your real tests.

    (0, _qunit.test)('it exists', function (assert) {
      let store = this.owner.lookup('service:store');
      let model = store.createRecord('aircraft-stand', {});
      assert.ok(model);
    });
  });
});
define("svo-aircraft-tetris/tests/unit/models/timetable-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Model | timetable', function (hooks) {
    (0, _emberQunit.setupTest)(hooks); // Replace this with your real tests.

    (0, _qunit.test)('it exists', function (assert) {
      let store = this.owner.lookup('service:store');
      let model = store.createRecord('timetable', {});
      assert.ok(model);
    });
  });
});
define("svo-aircraft-tetris/tests/unit/routes/index-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Route | index', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);
    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:index');
      assert.ok(route);
    });
  });
});
define('svo-aircraft-tetris/config/environment', [], function() {
  var prefix = 'svo-aircraft-tetris';
try {
  var metaName = prefix + '/config/environment';
  var rawConfig = document.querySelector('meta[name="' + metaName + '"]').getAttribute('content');
  var config = JSON.parse(decodeURIComponent(rawConfig));

  var exports = { 'default': config };

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

});

require('svo-aircraft-tetris/tests/test-helper');
EmberENV.TESTS_FILE_LOADED = true;
//# sourceMappingURL=tests.map
