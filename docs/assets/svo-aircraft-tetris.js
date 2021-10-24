'use strict';



;define("svo-aircraft-tetris/adapters/-json-api", ["exports", "@ember-data/adapter/json-api"], function (_exports, _jsonApi) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _jsonApi.default;
    }
  });
});
;define("svo-aircraft-tetris/adapters/application", ["exports", "@babel/runtime/helpers/esm/defineProperty", "@ember-data/adapter/rest"], function (_exports, _defineProperty2, _rest) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  class ApplicationAdapter extends _rest.default {
    constructor(...args) {
      super(...args);
      (0, _defineProperty2.default)(this, "namespace", 'api');
    }

  }

  _exports.default = ApplicationAdapter;
});
;define("svo-aircraft-tetris/app", ["exports", "@babel/runtime/helpers/esm/defineProperty", "ember-resolver", "ember-load-initializers", "svo-aircraft-tetris/config/environment"], function (_exports, _defineProperty2, _emberResolver, _emberLoadInitializers, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  class App extends Ember.Application {
    constructor(...args) {
      super(...args);
      (0, _defineProperty2.default)(this, "modulePrefix", _environment.default.modulePrefix);
      (0, _defineProperty2.default)(this, "podModulePrefix", _environment.default.podModulePrefix);
      (0, _defineProperty2.default)(this, "Resolver", _emberResolver.default);
    }

  }

  _exports.default = App;
  (0, _emberLoadInitializers.default)(App, _environment.default.modulePrefix);
});
;define("svo-aircraft-tetris/component-managers/glimmer", ["exports", "@glimmer/component/-private/ember-component-manager"], function (_exports, _emberComponentManager) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _emberComponentManager.default;
    }
  });
});
;define("svo-aircraft-tetris/components/-dynamic-element-alt", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  // This component is not needed anymore. However we can only safely remove it once we have an Embroider release that
  // has the special dependency rule for this addon removed:
  // https://github.com/embroider-build/embroider/blob/4fad67f16f811e7f93199a1ee92dba8254c42978/packages/compat/src/addon-dependency-rules/ember-element-helper.ts
  var _default = Ember.Component.extend();

  _exports.default = _default;
});
;define("svo-aircraft-tetris/components/-dynamic-element", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  // This component is not needed anymore. However we can only safely remove it once we have an Embroider release that
  // has the special dependency rule for this addon removed:
  // https://github.com/embroider-build/embroider/blob/4fad67f16f811e7f93199a1ee92dba8254c42978/packages/compat/src/addon-dependency-rules/ember-element-helper.ts
  var _default = Ember.Component.extend();

  _exports.default = _default;
});
;define("svo-aircraft-tetris/components/bs-accordion", ["exports", "ember-bootstrap/components/bs-accordion"], function (_exports, _bsAccordion) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _bsAccordion.default;
    }
  });
});
;define("svo-aircraft-tetris/components/bs-accordion/item", ["exports", "ember-bootstrap/components/bs-accordion/item"], function (_exports, _item) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _item.default;
    }
  });
});
;define("svo-aircraft-tetris/components/bs-accordion/item/body", ["exports", "ember-bootstrap/components/bs-accordion/item/body"], function (_exports, _body) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _body.default;
    }
  });
});
;define("svo-aircraft-tetris/components/bs-accordion/item/title", ["exports", "ember-bootstrap/components/bs-accordion/item/title"], function (_exports, _title) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _title.default;
    }
  });
});
;define("svo-aircraft-tetris/components/bs-alert", ["exports", "ember-bootstrap/components/bs-alert"], function (_exports, _bsAlert) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _bsAlert.default;
    }
  });
});
;define("svo-aircraft-tetris/components/bs-button-group", ["exports", "ember-bootstrap/components/bs-button-group"], function (_exports, _bsButtonGroup) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _bsButtonGroup.default;
    }
  });
});
;define("svo-aircraft-tetris/components/bs-button-group/button", ["exports", "ember-bootstrap/components/bs-button-group/button"], function (_exports, _button) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _button.default;
    }
  });
});
;define("svo-aircraft-tetris/components/bs-button", ["exports", "ember-bootstrap/components/bs-button"], function (_exports, _bsButton) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _bsButton.default;
    }
  });
});
;define("svo-aircraft-tetris/components/bs-carousel", ["exports", "ember-bootstrap/components/bs-carousel"], function (_exports, _bsCarousel) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _bsCarousel.default;
    }
  });
});
;define("svo-aircraft-tetris/components/bs-carousel/slide", ["exports", "ember-bootstrap/components/bs-carousel/slide"], function (_exports, _slide) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _slide.default;
    }
  });
});
;define("svo-aircraft-tetris/components/bs-collapse", ["exports", "ember-bootstrap/components/bs-collapse"], function (_exports, _bsCollapse) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _bsCollapse.default;
    }
  });
});
;define("svo-aircraft-tetris/components/bs-dropdown", ["exports", "ember-bootstrap/components/bs-dropdown"], function (_exports, _bsDropdown) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _bsDropdown.default;
    }
  });
});
;define("svo-aircraft-tetris/components/bs-dropdown/button", ["exports", "ember-bootstrap/components/bs-dropdown/button"], function (_exports, _button) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _button.default;
    }
  });
});
;define("svo-aircraft-tetris/components/bs-dropdown/menu", ["exports", "ember-bootstrap/components/bs-dropdown/menu"], function (_exports, _menu) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _menu.default;
    }
  });
});
;define("svo-aircraft-tetris/components/bs-dropdown/menu/divider", ["exports", "ember-bootstrap/components/bs-dropdown/menu/divider"], function (_exports, _divider) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _divider.default;
    }
  });
});
;define("svo-aircraft-tetris/components/bs-dropdown/menu/item", ["exports", "ember-bootstrap/components/bs-dropdown/menu/item"], function (_exports, _item) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _item.default;
    }
  });
});
;define("svo-aircraft-tetris/components/bs-dropdown/toggle", ["exports", "ember-bootstrap/components/bs-dropdown/toggle"], function (_exports, _toggle) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _toggle.default;
    }
  });
});
;define("svo-aircraft-tetris/components/bs-form", ["exports", "ember-bootstrap/components/bs-form"], function (_exports, _bsForm) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _bsForm.default;
    }
  });
});
;define("svo-aircraft-tetris/components/bs-form/element", ["exports", "ember-bootstrap/components/bs-form/element"], function (_exports, _element) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _element.default;
    }
  });
});
;define("svo-aircraft-tetris/components/bs-form/element/control", ["exports", "ember-bootstrap/components/bs-form/element/control"], function (_exports, _control) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _control.default;
    }
  });
});
;define("svo-aircraft-tetris/components/bs-form/element/control/checkbox", ["exports", "ember-bootstrap/components/bs-form/element/control/checkbox"], function (_exports, _checkbox) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _checkbox.default;
    }
  });
});
;define("svo-aircraft-tetris/components/bs-form/element/control/input", ["exports", "ember-bootstrap/components/bs-form/element/control/input"], function (_exports, _input) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _input.default;
    }
  });
});
;define("svo-aircraft-tetris/components/bs-form/element/control/radio", ["exports", "ember-bootstrap/components/bs-form/element/control/radio"], function (_exports, _radio) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _radio.default;
    }
  });
});
;define("svo-aircraft-tetris/components/bs-form/element/control/switch", ["exports", "ember-bootstrap/components/bs-form/element/control/switch"], function (_exports, _switch) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _switch.default;
    }
  });
});
;define("svo-aircraft-tetris/components/bs-form/element/control/textarea", ["exports", "ember-bootstrap/components/bs-form/element/control/textarea"], function (_exports, _textarea) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _textarea.default;
    }
  });
});
;define("svo-aircraft-tetris/components/bs-form/element/errors", ["exports", "ember-bootstrap/components/bs-form/element/errors"], function (_exports, _errors) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _errors.default;
    }
  });
});
;define("svo-aircraft-tetris/components/bs-form/element/feedback-icon", ["exports", "ember-bootstrap/components/bs-form/element/feedback-icon"], function (_exports, _feedbackIcon) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _feedbackIcon.default;
    }
  });
});
;define("svo-aircraft-tetris/components/bs-form/element/help-text", ["exports", "ember-bootstrap/components/bs-form/element/help-text"], function (_exports, _helpText) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _helpText.default;
    }
  });
});
;define("svo-aircraft-tetris/components/bs-form/element/label", ["exports", "ember-bootstrap/components/bs-form/element/label"], function (_exports, _label) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _label.default;
    }
  });
});
;define("svo-aircraft-tetris/components/bs-form/element/layout/horizontal", ["exports", "ember-bootstrap/components/bs-form/element/layout/horizontal"], function (_exports, _horizontal) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _horizontal.default;
    }
  });
});
;define("svo-aircraft-tetris/components/bs-form/element/layout/horizontal/checkbox", ["exports", "ember-bootstrap/components/bs-form/element/layout/horizontal/checkbox"], function (_exports, _checkbox) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _checkbox.default;
    }
  });
});
;define("svo-aircraft-tetris/components/bs-form/element/layout/inline", ["exports", "ember-bootstrap/components/bs-form/element/layout/inline"], function (_exports, _inline) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _inline.default;
    }
  });
});
;define("svo-aircraft-tetris/components/bs-form/element/layout/inline/checkbox", ["exports", "ember-bootstrap/components/bs-form/element/layout/inline/checkbox"], function (_exports, _checkbox) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _checkbox.default;
    }
  });
});
;define("svo-aircraft-tetris/components/bs-form/element/layout/vertical", ["exports", "ember-bootstrap/components/bs-form/element/layout/vertical"], function (_exports, _vertical) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _vertical.default;
    }
  });
});
;define("svo-aircraft-tetris/components/bs-form/element/layout/vertical/checkbox", ["exports", "ember-bootstrap/components/bs-form/element/layout/vertical/checkbox"], function (_exports, _checkbox) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _checkbox.default;
    }
  });
});
;define("svo-aircraft-tetris/components/bs-form/element/legend", ["exports", "ember-bootstrap/components/bs-form/element/legend"], function (_exports, _legend) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _legend.default;
    }
  });
});
;define("svo-aircraft-tetris/components/bs-form/group", ["exports", "ember-bootstrap/components/bs-form/group"], function (_exports, _group) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _group.default;
    }
  });
});
;define("svo-aircraft-tetris/components/bs-link-to", ["exports", "ember-bootstrap/components/bs-link-to"], function (_exports, _bsLinkTo) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _bsLinkTo.default;
    }
  });
});
;define("svo-aircraft-tetris/components/bs-modal-simple", ["exports", "ember-bootstrap/components/bs-modal-simple"], function (_exports, _bsModalSimple) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _bsModalSimple.default;
    }
  });
});
;define("svo-aircraft-tetris/components/bs-modal", ["exports", "ember-bootstrap/components/bs-modal"], function (_exports, _bsModal) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _bsModal.default;
    }
  });
});
;define("svo-aircraft-tetris/components/bs-modal/body", ["exports", "ember-bootstrap/components/bs-modal/body"], function (_exports, _body) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _body.default;
    }
  });
});
;define("svo-aircraft-tetris/components/bs-modal/dialog", ["exports", "ember-bootstrap/components/bs-modal/dialog"], function (_exports, _dialog) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _dialog.default;
    }
  });
});
;define("svo-aircraft-tetris/components/bs-modal/footer", ["exports", "ember-bootstrap/components/bs-modal/footer"], function (_exports, _footer) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _footer.default;
    }
  });
});
;define("svo-aircraft-tetris/components/bs-modal/header", ["exports", "ember-bootstrap/components/bs-modal/header"], function (_exports, _header) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _header.default;
    }
  });
});
;define("svo-aircraft-tetris/components/bs-modal/header/close", ["exports", "ember-bootstrap/components/bs-modal/header/close"], function (_exports, _close) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _close.default;
    }
  });
});
;define("svo-aircraft-tetris/components/bs-modal/header/title", ["exports", "ember-bootstrap/components/bs-modal/header/title"], function (_exports, _title) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _title.default;
    }
  });
});
;define("svo-aircraft-tetris/components/bs-nav", ["exports", "ember-bootstrap/components/bs-nav"], function (_exports, _bsNav) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _bsNav.default;
    }
  });
});
;define("svo-aircraft-tetris/components/bs-nav/item", ["exports", "ember-bootstrap/components/bs-nav/item"], function (_exports, _item) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _item.default;
    }
  });
});
;define("svo-aircraft-tetris/components/bs-navbar", ["exports", "ember-bootstrap/components/bs-navbar"], function (_exports, _bsNavbar) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _bsNavbar.default;
    }
  });
});
;define("svo-aircraft-tetris/components/bs-navbar/content", ["exports", "ember-bootstrap/components/bs-navbar/content"], function (_exports, _content) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _content.default;
    }
  });
});
;define("svo-aircraft-tetris/components/bs-navbar/link-to", ["exports", "ember-bootstrap/components/bs-navbar/link-to"], function (_exports, _linkTo) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _linkTo.default;
    }
  });
});
;define("svo-aircraft-tetris/components/bs-navbar/nav", ["exports", "ember-bootstrap/components/bs-navbar/nav"], function (_exports, _nav) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _nav.default;
    }
  });
});
;define("svo-aircraft-tetris/components/bs-navbar/toggle", ["exports", "ember-bootstrap/components/bs-navbar/toggle"], function (_exports, _toggle) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _toggle.default;
    }
  });
});
;define("svo-aircraft-tetris/components/bs-popover", ["exports", "ember-bootstrap/components/bs-popover"], function (_exports, _bsPopover) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _bsPopover.default;
    }
  });
});
;define("svo-aircraft-tetris/components/bs-popover/element", ["exports", "ember-bootstrap/components/bs-popover/element"], function (_exports, _element) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _element.default;
    }
  });
});
;define("svo-aircraft-tetris/components/bs-progress", ["exports", "ember-bootstrap/components/bs-progress"], function (_exports, _bsProgress) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _bsProgress.default;
    }
  });
});
;define("svo-aircraft-tetris/components/bs-progress/bar", ["exports", "ember-bootstrap/components/bs-progress/bar"], function (_exports, _bar) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _bar.default;
    }
  });
});
;define("svo-aircraft-tetris/components/bs-tab", ["exports", "ember-bootstrap/components/bs-tab"], function (_exports, _bsTab) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _bsTab.default;
    }
  });
});
;define("svo-aircraft-tetris/components/bs-tab/pane", ["exports", "ember-bootstrap/components/bs-tab/pane"], function (_exports, _pane) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _pane.default;
    }
  });
});
;define("svo-aircraft-tetris/components/bs-tooltip", ["exports", "ember-bootstrap/components/bs-tooltip"], function (_exports, _bsTooltip) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _bsTooltip.default;
    }
  });
});
;define("svo-aircraft-tetris/components/bs-tooltip/element", ["exports", "ember-bootstrap/components/bs-tooltip/element"], function (_exports, _element) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _element.default;
    }
  });
});
;define("svo-aircraft-tetris/components/d3/stand-utilisation", ["exports", "@babel/runtime/helpers/esm/defineProperty", "@babel/runtime/helpers/esm/applyDecoratedDescriptor", "@glimmer/component", "d3", "moment"], function (_exports, _defineProperty2, _applyDecoratedDescriptor2, _component, _d, _moment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _dec, _dec2, _class;

  const __COLOCATED_TEMPLATE__ = Ember.HTMLBars.template(
  /*
    <svg
    id={{this.svgId}}
    preserveAspectRatio="xMinYMin meet"
    width="100%" height="100%"
    viewBox="0 0 {{this.width}} {{this.height}}"
    {{did-insert this.initialRender}}
    {{did-update this.update @data @chartOptions}}
  >
  </svg>
  */
  {
    "id": "wJlrWV3H",
    "block": "{\"symbols\":[\"@chartOptions\",\"@data\"],\"statements\":[[11,\"svg\"],[16,1,[32,0,[\"svgId\"]]],[24,\"preserveAspectRatio\",\"xMinYMin meet\"],[24,\"width\",\"100%\"],[24,\"height\",\"100%\"],[16,\"viewBox\",[31,[\"0 0 \",[32,0,[\"width\"]],\" \",[32,0,[\"height\"]]]]],[4,[38,0],[[32,0,[\"initialRender\"]]],null],[4,[38,1],[[32,0,[\"update\"]],[32,2],[32,1]],null],[12],[2,\"\\n\"],[13]],\"hasEval\":false,\"upvars\":[\"did-insert\",\"did-update\"]}",
    "moduleName": "svo-aircraft-tetris/components/d3/stand-utilisation.hbs"
  });

  let D3StandsUtilisationComponent = (_dec = Ember._action, _dec2 = Ember._action, (_class = class D3StandsUtilisationComponent extends _component.default {
    constructor() {
      super(...arguments);
      (0, _defineProperty2.default)(this, "margin", {
        top: 15,
        right: 15,
        bottom: 40,
        left: 25
      });
      this.svgId = `d3-stand-utilisation-${Math.floor(Math.random() * 10000)}`;
    }

    get aspectRatio() {
      return this.args.aspectRatio || 0.5;
    }

    get width() {
      const argWidth = Number(this.args.width);
      return isNaN(argWidth) ? 150 : argWidth;
    }

    get height() {
      return this.width * this.aspectRatio;
    }

    get minX() {
      // const option = this.args.chartOptions.minX;
      // const momentObj = moment(option);
      return 1;
    }

    get maxX() {
      // const option = this.args.chartOptions.maxX;
      // const momentObj = moment(option);
      return 280;
    }

    get minY() {
      // const option = this.args.chartOptions.minY;
      // if (option === '' || Number.isNaN(Number(option))) {
      //   const data = this.chartData.map((val) => { return val.y });
      //   return min(data);
      // } else {
      //   return Number(option);
      // }
      return 0;
    }

    get maxY() {
      // const option = this.args.chartOptions.maxY;
      // if (option === '' || Number.isNaN(Number(option))) {
      //   const data = this.chartData.map((val) => { return val.y });
      //   return max(data);
      // } else {
      //   return Number(option);
      // }
      return 1.2;
    }

    get xScale() {
      const width = this.width - this.margin.right - this.margin.left;
      return (0, _d.scaleLinear)().range([0, width]).domain([this.minX, this.maxX]);
    }

    get yScale() {
      const height = this.height - this.margin.top - this.margin.bottom;
      return (0, _d.scaleLinear)().range([height, 0]).domain([this.minY, this.maxY]);
    }

    get chartData() {
      const data = this.args.data || [];
      return data.map(value => {
        // const time = moment(value.time);
        let result = {
          x: value.stand,
          y: value.utilisation
        };
        return result;
      });
    }

    update() {
      const {
        svgId,
        margin,
        width,
        height,
        xScale,
        yScale
      } = this; // const gMarg = select(`svg#${svgId} .margin-group`);
      // gMarg.remove();
      // gMarg.selectAll('line').remove();
      // gMarg.selectAll('circle').remove();

      const svg = (0, _d.select)(`svg#${svgId}`);
      svg.select('.margin-group').remove();
      svg.select('#axis--x').remove();
      svg.select('#axis--y').remove();
      const gMarg = svg.append('g').attr('transform', 'translate(' + margin.left + ',' + margin.top + ')').attr('class', 'margin-group');
      let xAxis = (0, _d.axisBottom)(xScale).ticks(10).tickSize(4, 1);
      let yAxis = (0, _d.axisLeft)(yScale).ticks(10).tickSize(4, 1);
      svg.append('g').attr('transform', 'translate(' + margin.left + ',' + (height - margin.bottom) + ')').attr('class', 'x axis').attr('id', 'axis--x').call(xAxis);
      svg.append('g').attr('class', 'y axis').attr('transform', 'translate(' + margin.left + ',' + margin.top + ')').attr('id', 'axis--y').call(yAxis);
      gMarg.append('line').attr('x1', () => xScale(1)).attr('y1', () => yScale(1)).attr('x2', () => xScale(300)).attr('y2', () => yScale(1)).attr('class', `bar-stand-maximum`);
      this.chartData.forEach(value => {
        gMarg.append('rect').attr('x', () => xScale(value.x)).attr('y', () => yScale(value.y)).attr('width', () => 3).attr('height', () => height - margin.top - margin.bottom - yScale(value.y)).attr('class', `bar-stand-utilisation`); // gMarg
        //   .append('line')
        //   .attr('x1', () => xScale(timeline.start))
        //   .attr('y1', () => yScale(timeline.y))
        //   .attr('x2', () => xScale(timeline.end))
        //   .attr('y2', () => yScale(timeline.y))
        //   .attr('class', `time-line-element-${timeline.terminal}`);
        // gMarg
        //   .append('circle')
        //   .attr('cx', () => xScale(timeline.dot))
        //   .attr('cy', () => yScale(timeline.y))
        //   .attr('r', 2)
        //   .attr('class', `time-line-dot-${timeline.terminal}`);
        // gMarg
        //   .append('text')
        //   .attr('class', 'line-text')
        //   .attr('x', 0)
        //   .attr('y', () => yScale(th.value))
        //   .attr('dx', 10)
        //   .attr('dy', -5)
        //   .attr('class', th.type)
        //   .text(format('.0f')(th.value));
      });
    }

    initialRender() {
      this.update();
    }

  }, ((0, _applyDecoratedDescriptor2.default)(_class.prototype, "update", [_dec], Object.getOwnPropertyDescriptor(_class.prototype, "update"), _class.prototype), (0, _applyDecoratedDescriptor2.default)(_class.prototype, "initialRender", [_dec2], Object.getOwnPropertyDescriptor(_class.prototype, "initialRender"), _class.prototype)), _class));
  _exports.default = D3StandsUtilisationComponent;

  Ember._setComponentTemplate(__COLOCATED_TEMPLATE__, D3StandsUtilisationComponent);
});
;define("svo-aircraft-tetris/components/d3/stands-optimal-prices", ["exports", "@babel/runtime/helpers/esm/defineProperty", "@babel/runtime/helpers/esm/applyDecoratedDescriptor", "@glimmer/component", "d3", "moment"], function (_exports, _defineProperty2, _applyDecoratedDescriptor2, _component, _d, _moment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _dec, _dec2, _class;

  const __COLOCATED_TEMPLATE__ = Ember.HTMLBars.template(
  /*
    <svg
    id={{this.svgId}}
    preserveAspectRatio="xMinYMin meet"
    width="100%" height="100%"
    viewBox="0 0 {{this.width}} {{this.height}}"
    {{did-insert this.initialRender}}
    {{did-update this.update @data @chartOptions}}
  >
  </svg>
  */
  {
    "id": "2rorCrfn",
    "block": "{\"symbols\":[\"@chartOptions\",\"@data\"],\"statements\":[[11,\"svg\"],[16,1,[32,0,[\"svgId\"]]],[24,\"preserveAspectRatio\",\"xMinYMin meet\"],[24,\"width\",\"100%\"],[24,\"height\",\"100%\"],[16,\"viewBox\",[31,[\"0 0 \",[32,0,[\"width\"]],\" \",[32,0,[\"height\"]]]]],[4,[38,0],[[32,0,[\"initialRender\"]]],null],[4,[38,1],[[32,0,[\"update\"]],[32,2],[32,1]],null],[12],[2,\"\\n\"],[13]],\"hasEval\":false,\"upvars\":[\"did-insert\",\"did-update\"]}",
    "moduleName": "svo-aircraft-tetris/components/d3/stands-optimal-prices.hbs"
  });

  let D3StandsOptimalPricesComponent = (_dec = Ember._action, _dec2 = Ember._action, (_class = class D3StandsOptimalPricesComponent extends _component.default {
    constructor() {
      super(...arguments);
      (0, _defineProperty2.default)(this, "margin", {
        top: 15,
        right: 15,
        bottom: 40,
        left: 25
      });
      this.svgId = `d3-stand-optimal-prices-${Math.floor(Math.random() * 10000)}`;
    }

    get aspectRatio() {
      return this.args.aspectRatio || 0.5;
    }

    get width() {
      const argWidth = Number(this.args.width);
      return isNaN(argWidth) ? 150 : argWidth;
    }

    get height() {
      return this.width * this.aspectRatio;
    }

    get minX() {
      // const option = this.args.chartOptions.minX;
      // const momentObj = moment(option);
      return 1;
    }

    get maxX() {
      // const option = this.args.chartOptions.maxX;
      // const momentObj = moment(option);
      const data = this.args.data;
      return data ? data.length : 100;
    }

    get minY() {
      // const option = this.args.chartOptions.minY;
      // if (option === '' || Number.isNaN(Number(option))) {
      //   const data = this.chartData.map((val) => { return val.y });
      //   return min(data);
      // } else {
      //   return Number(option);
      // }
      return 0;
    }

    get maxY() {
      // const option = this.args.chartOptions.maxY;
      // if (option === '' || Number.isNaN(Number(option))) {
      //   const data = this.chartData.map((val) => { return val.y });
      //   return max(data);
      // } else {
      //   return Number(option);
      // }
      return 2;
    }

    get xScale() {
      const width = this.width - this.margin.right - this.margin.left;
      return (0, _d.scaleLinear)().range([0, width]).domain([this.minX, this.maxX]);
    }

    get yScale() {
      const height = this.height - this.margin.top - this.margin.bottom;
      return (0, _d.scaleLinear)().range([height, 0]).domain([this.minY, this.maxY]);
    }

    get chartData() {
      const data = this.args.data || [];
      return data.map((value, i) => {
        // const time = moment(value.time);
        let result = {
          x: i + 1,
          y: value.timeline
        };
        return result;
      });
    }

    update() {
      const {
        svgId,
        margin,
        width,
        height,
        xScale,
        yScale
      } = this; // const gMarg = select(`svg#${svgId} .margin-group`);
      // gMarg.remove();
      // gMarg.selectAll('line').remove();
      // gMarg.selectAll('circle').remove();

      const svg = (0, _d.select)(`svg#${svgId}`);
      svg.select('.margin-group').remove();
      svg.select('#axis--x').remove();
      svg.select('#axis--y').remove();
      const gMarg = svg.append('g').attr('transform', 'translate(' + margin.left + ',' + margin.top + ')').attr('class', 'margin-group');
      let xAxis = (0, _d.axisBottom)(xScale).ticks(10).tickSize(4, 1);
      let yAxis = (0, _d.axisLeft)(yScale).ticks(10).tickSize(4, 1);
      svg.append('g').attr('transform', 'translate(' + margin.left + ',' + (height - margin.bottom) + ')').attr('class', 'x axis').attr('id', 'axis--x').call(xAxis);
      svg.append('g').attr('class', 'y axis').attr('transform', 'translate(' + margin.left + ',' + margin.top + ')').attr('id', 'axis--y').call(yAxis);
      this.chartData.forEach(value => {
        gMarg.append('rect').attr('x', () => xScale(value.x)).attr('y', () => yScale(value.y.diffFromOpt)).attr('width', () => 3).attr('height', () => height - margin.top - margin.bottom - yScale(value.y.diffFromOpt)).attr('class', `bar-stand-utilisation`);
      });
      gMarg.append('line').attr('x1', () => xScale(1)).attr('y1', () => yScale(1)).attr('x2', () => xScale(this.chartData.length)).attr('y2', () => yScale(1)).attr('class', `bar-stand-maximum`);
    }

    initialRender() {
      this.update();
    }

  }, ((0, _applyDecoratedDescriptor2.default)(_class.prototype, "update", [_dec], Object.getOwnPropertyDescriptor(_class.prototype, "update"), _class.prototype), (0, _applyDecoratedDescriptor2.default)(_class.prototype, "initialRender", [_dec2], Object.getOwnPropertyDescriptor(_class.prototype, "initialRender"), _class.prototype)), _class));
  _exports.default = D3StandsOptimalPricesComponent;

  Ember._setComponentTemplate(__COLOCATED_TEMPLATE__, D3StandsOptimalPricesComponent);
});
;define("svo-aircraft-tetris/components/d3/timetable-chart", ["exports", "@babel/runtime/helpers/esm/defineProperty", "@babel/runtime/helpers/esm/applyDecoratedDescriptor", "@glimmer/component", "d3", "moment"], function (_exports, _defineProperty2, _applyDecoratedDescriptor2, _component, _d, _moment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _dec, _dec2, _class;

  const __COLOCATED_TEMPLATE__ = Ember.HTMLBars.template(
  /*
    <svg
    id={{this.svgId}}
    preserveAspectRatio="xMinYMin meet"
    width="100%" height="100%"
    viewBox="0 0 {{this.width}} {{this.height}}"
    {{did-insert this.initialRender}}
    {{did-update this.update @data @chartOptions}}
  >
  </svg>
  */
  {
    "id": "snHeozEl",
    "block": "{\"symbols\":[\"@chartOptions\",\"@data\"],\"statements\":[[11,\"svg\"],[16,1,[32,0,[\"svgId\"]]],[24,\"preserveAspectRatio\",\"xMinYMin meet\"],[24,\"width\",\"100%\"],[24,\"height\",\"100%\"],[16,\"viewBox\",[31,[\"0 0 \",[32,0,[\"width\"]],\" \",[32,0,[\"height\"]]]]],[4,[38,0],[[32,0,[\"initialRender\"]]],null],[4,[38,1],[[32,0,[\"update\"]],[32,2],[32,1]],null],[12],[2,\"\\n\"],[13]],\"hasEval\":false,\"upvars\":[\"did-insert\",\"did-update\"]}",
    "moduleName": "svo-aircraft-tetris/components/d3/timetable-chart.hbs"
  });

  let D3TimetableChartComponent = (_dec = Ember._action, _dec2 = Ember._action, (_class = class D3TimetableChartComponent extends _component.default {
    constructor() {
      super(...arguments);
      (0, _defineProperty2.default)(this, "margin", {
        top: 15,
        right: 15,
        bottom: 40,
        left: 25
      });
      this.svgId = `d3-timetable-chart-${Math.floor(Math.random() * 10000)}`;
    }

    get aspectRatio() {
      return this.args.aspectRatio || 0.5;
    }

    get width() {
      const argWidth = Number(this.args.width);
      return isNaN(argWidth) ? 150 : argWidth;
    }

    get height() {
      return this.width * this.aspectRatio;
    }

    // get minY() {
    //   const data = this.chartData.map((val) => { return val.y });
    //   return this.args.chartOptions.minX || min(data);
    // }
    get minX() {
      const option = this.args.chartOptions.minX;
      const momentObj = (0, _moment.default)(option);
      return momentObj.isValid() ? momentObj : (0, _moment.default)('2019-05-17 00:00:00', "YYYY-MM-DD hh:mm:ss");
    }

    get maxX() {
      const option = this.args.chartOptions.maxX;
      const momentObj = (0, _moment.default)(option);
      return momentObj.isValid() ? momentObj : (0, _moment.default)('2019-05-17 23:59:59', "YYYY-MM-DD hh:mm:ss");
    }

    get minY() {
      const option = this.args.chartOptions.minY;

      if (option === '' || Number.isNaN(Number(option))) {
        const data = this.chartData.map(val => {
          return val.y;
        });
        return (0, _d.min)(data);
      } else {
        return Number(option);
      }
    }

    get maxY() {
      const option = this.args.chartOptions.maxY;

      if (option === '' || Number.isNaN(Number(option))) {
        const data = this.chartData.map(val => {
          return val.y;
        });
        return (0, _d.max)(data);
      } else {
        return Number(option);
      }
    }

    get xScale() {
      const width = this.width - this.margin.right - this.margin.left;
      return (0, _d.scaleTime)().range([0, width]).domain([this.minX, this.maxX]);
    }

    get yScale() {
      const height = this.height - this.margin.top - this.margin.bottom;
      return (0, _d.scaleLinear)().range([height, 0]).domain([this.minY, this.maxY]);
    }

    get chartData() {
      const data = this.args.data || [];
      return data.map(value => {
        // const time = moment(value.time);
        let result = {};
        result['start'] = (0, _moment.default)(value.start);
        result['end'] = (0, _moment.default)(value.end);
        result['dot'] = (0, _moment.default)(value.time); // result['y'] = Number(value.id);

        result['y'] = Number(value.standId);
        result['standType'] = value.flightType;
        result['terminal'] = value.terminalId;
        return result;
      });
    }

    update() {
      const {
        svgId,
        margin,
        width,
        height,
        xScale,
        yScale
      } = this; // const gMarg = select(`svg#${svgId} .margin-group`);
      // gMarg.remove();
      // gMarg.selectAll('line').remove();
      // gMarg.selectAll('circle').remove();

      const svg = (0, _d.select)(`svg#${svgId}`);
      svg.select('.margin-group').remove();
      svg.select('#axis--x').remove();
      svg.select('#axis--y').remove();
      const gMarg = svg.append('g').attr('transform', 'translate(' + margin.left + ',' + margin.top + ')').attr('class', 'margin-group');
      let xAxis = (0, _d.axisBottom)(xScale).ticks(6).tickSize(4, 1);
      let yAxis = (0, _d.axisLeft)(yScale).ticks(5).tickSize(4, 1);
      svg.append('g').attr('transform', 'translate(' + margin.left + ',' + (height - margin.bottom) + ')').attr('class', 'x axis').attr('id', 'axis--x').call(xAxis);
      svg.append('g').attr('class', 'y axis').attr('transform', 'translate(' + margin.left + ',' + margin.top + ')').attr('id', 'axis--y').call(yAxis);
      this.chartData.forEach(timeline => {
        // gMarg
        //   .append('rect')
        //   .attr('x', () => xScale(timeline.start))
        //   .attr('y', () => yScale(timeline.y) - 2)
        //   .attr('width', () => xScale(timeline.end) - xScale(timeline.start))
        //   .attr('height', () => 4)
        //   .attr('class', `time-line-type-${timeline.standType}`);
        gMarg.append('line').attr('x1', () => xScale(timeline.start)).attr('y1', () => yScale(timeline.y)).attr('x2', () => xScale(timeline.end)).attr('y2', () => yScale(timeline.y)).attr('class', `time-line-element-${timeline.terminal}`);
        gMarg.append('circle').attr('cx', () => xScale(timeline.dot)).attr('cy', () => yScale(timeline.y)).attr('r', 2).attr('class', `time-line-dot-${timeline.terminal}`); // gMarg
        //   .append('text')
        //   .attr('class', 'line-text')
        //   .attr('x', 0)
        //   .attr('y', () => yScale(th.value))
        //   .attr('dx', 10)
        //   .attr('dy', -5)
        //   .attr('class', th.type)
        //   .text(format('.0f')(th.value));
      });
    }

    initialRender() {
      this.update();
    }

  }, ((0, _applyDecoratedDescriptor2.default)(_class.prototype, "update", [_dec], Object.getOwnPropertyDescriptor(_class.prototype, "update"), _class.prototype), (0, _applyDecoratedDescriptor2.default)(_class.prototype, "initialRender", [_dec2], Object.getOwnPropertyDescriptor(_class.prototype, "initialRender"), _class.prototype)), _class));
  _exports.default = D3TimetableChartComponent;

  Ember._setComponentTemplate(__COLOCATED_TEMPLATE__, D3TimetableChartComponent);
});
;define("svo-aircraft-tetris/components/ember-popper-targeting-parent", ["exports", "ember-popper/components/ember-popper-targeting-parent"], function (_exports, _emberPopperTargetingParent) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _emberPopperTargetingParent.default;
    }
  });
});
;define("svo-aircraft-tetris/components/ember-popper", ["exports", "ember-popper/components/ember-popper"], function (_exports, _emberPopper) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _emberPopper.default;
    }
  });
});
;define("svo-aircraft-tetris/components/emt/datetime-format-end", ["exports", "@glimmer/component", "moment"], function (_exports, _component, _moment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  const __COLOCATED_TEMPLATE__ = Ember.HTMLBars.template(
  /*
    {{this.formatedDate}}
  */
  {
    "id": "dO7aBQcr",
    "block": "{\"symbols\":[],\"statements\":[[1,[32,0,[\"formatedDate\"]]]],\"hasEval\":false,\"upvars\":[]}",
    "moduleName": "svo-aircraft-tetris/components/emt/datetime-format-end.hbs"
  });

  class EmtDatetimeFormatStartComponent extends _component.default {
    get formatedDate() {
      return (0, _moment.default)(this.args.record.end).format();
    }

  }

  _exports.default = EmtDatetimeFormatStartComponent;

  Ember._setComponentTemplate(__COLOCATED_TEMPLATE__, EmtDatetimeFormatStartComponent);
});
;define("svo-aircraft-tetris/components/emt/datetime-format-start", ["exports", "@glimmer/component", "moment"], function (_exports, _component, _moment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  const __COLOCATED_TEMPLATE__ = Ember.HTMLBars.template(
  /*
    {{this.formatedDate}}
  */
  {
    "id": "4xKHCBQc",
    "block": "{\"symbols\":[],\"statements\":[[1,[32,0,[\"formatedDate\"]]]],\"hasEval\":false,\"upvars\":[]}",
    "moduleName": "svo-aircraft-tetris/components/emt/datetime-format-start.hbs"
  });

  class EmtDatetimeFormatStartComponent extends _component.default {
    get formatedDate() {
      return (0, _moment.default)(this.args.record.start).format('DD HH:mm');
    }

  }

  _exports.default = EmtDatetimeFormatStartComponent;

  Ember._setComponentTemplate(__COLOCATED_TEMPLATE__, EmtDatetimeFormatStartComponent);
});
;define("svo-aircraft-tetris/components/emt/expanded-line", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  const __COLOCATED_TEMPLATE__ = Ember.HTMLBars.template(
  /*
    <p>Expanded row for record with id = <span class="id">{{this.record.time}}</span>.</p>
  
  {{yield}}
  */
  {
    "id": "tnS67WfM",
    "block": "{\"symbols\":[\"&default\"],\"statements\":[[10,\"p\"],[12],[2,\"Expanded row for record with id = \"],[10,\"span\"],[14,0,\"id\"],[12],[1,[32,0,[\"record\",\"time\"]]],[13],[2,\".\"],[13],[2,\"\\n\\n\"],[18,1,null]],\"hasEval\":false,\"upvars\":[]}",
    "moduleName": "svo-aircraft-tetris/components/emt/expanded-line.hbs"
  });

  var _default = Ember._setComponentTemplate(__COLOCATED_TEMPLATE__, Ember.Component.extend({}));

  _exports.default = _default;
});
;define("svo-aircraft-tetris/components/models-table-server-paginated", ["exports", "ember-models-table/components/models-table-server-paginated"], function (_exports, _modelsTableServerPaginated) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _modelsTableServerPaginated.default;
    }
  });
});
;define("svo-aircraft-tetris/components/models-table", ["exports", "ember-models-table/components/models-table"], function (_exports, _modelsTable) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _modelsTable.default;
  _exports.default = _default;
});
;define("svo-aircraft-tetris/components/models-table/cell-column-summary", ["exports", "ember-models-table/components/models-table/cell-column-summary"], function (_exports, _cellColumnSummary) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _cellColumnSummary.default;
    }
  });
});
;define("svo-aircraft-tetris/components/models-table/cell-content-display", ["exports", "ember-models-table/components/models-table/cell-content-display"], function (_exports, _cellContentDisplay) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _cellContentDisplay.default;
    }
  });
});
;define("svo-aircraft-tetris/components/models-table/cell-content-edit", ["exports", "ember-models-table/components/models-table/cell-content-edit"], function (_exports, _cellContentEdit) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _cellContentEdit.default;
    }
  });
});
;define("svo-aircraft-tetris/components/models-table/cell-edit-toggle", ["exports", "ember-models-table/components/models-table/cell-edit-toggle"], function (_exports, _cellEditToggle) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _cellEditToggle.default;
    }
  });
});
;define("svo-aircraft-tetris/components/models-table/cell", ["exports", "ember-models-table/components/models-table/cell"], function (_exports, _cell) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _cell.default;
    }
  });
});
;define("svo-aircraft-tetris/components/models-table/columns-dropdown", ["exports", "ember-models-table/components/models-table/columns-dropdown"], function (_exports, _columnsDropdown) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _columnsDropdown.default;
    }
  });
});
;define("svo-aircraft-tetris/components/models-table/columns-hidden", ["exports", "ember-models-table/components/models-table/columns-hidden"], function (_exports, _columnsHidden) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _columnsHidden.default;
    }
  });
});
;define("svo-aircraft-tetris/components/models-table/data-group-by-select", ["exports", "ember-models-table/components/models-table/data-group-by-select"], function (_exports, _dataGroupBySelect) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _dataGroupBySelect.default;
    }
  });
});
;define("svo-aircraft-tetris/components/models-table/expand-all-toggle", ["exports", "ember-models-table/components/models-table/expand-all-toggle"], function (_exports, _expandAllToggle) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _expandAllToggle.default;
    }
  });
});
;define("svo-aircraft-tetris/components/models-table/expand-toggle", ["exports", "ember-models-table/components/models-table/expand-toggle"], function (_exports, _expandToggle) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _expandToggle.default;
    }
  });
});
;define("svo-aircraft-tetris/components/models-table/footer", ["exports", "ember-models-table/components/models-table/footer"], function (_exports, _footer) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _footer.default;
    }
  });
});
;define("svo-aircraft-tetris/components/models-table/global-filter", ["exports", "ember-models-table/components/models-table/global-filter"], function (_exports, _globalFilter) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _globalFilter.default;
    }
  });
});
;define("svo-aircraft-tetris/components/models-table/group-summary-row", ["exports", "ember-models-table/components/models-table/group-summary-row"], function (_exports, _groupSummaryRow) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _groupSummaryRow.default;
    }
  });
});
;define("svo-aircraft-tetris/components/models-table/grouped-header", ["exports", "ember-models-table/components/models-table/grouped-header"], function (_exports, _groupedHeader) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _groupedHeader.default;
    }
  });
});
;define("svo-aircraft-tetris/components/models-table/no-data", ["exports", "ember-models-table/components/models-table/no-data"], function (_exports, _noData) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _noData.default;
    }
  });
});
;define("svo-aircraft-tetris/components/models-table/page-size-select", ["exports", "ember-models-table/components/models-table/page-size-select"], function (_exports, _pageSizeSelect) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _pageSizeSelect.default;
    }
  });
});
;define("svo-aircraft-tetris/components/models-table/pagination-numeric", ["exports", "ember-models-table/components/models-table/pagination-numeric"], function (_exports, _paginationNumeric) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _paginationNumeric.default;
    }
  });
});
;define("svo-aircraft-tetris/components/models-table/pagination-simple", ["exports", "ember-models-table/components/models-table/pagination-simple"], function (_exports, _paginationSimple) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _paginationSimple.default;
    }
  });
});
;define("svo-aircraft-tetris/components/models-table/row-expand", ["exports", "ember-models-table/components/models-table/row-expand"], function (_exports, _rowExpand) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _rowExpand.default;
    }
  });
});
;define("svo-aircraft-tetris/components/models-table/row-filtering-cell", ["exports", "ember-models-table/components/models-table/row-filtering-cell"], function (_exports, _rowFilteringCell) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _rowFilteringCell.default;
    }
  });
});
;define("svo-aircraft-tetris/components/models-table/row-filtering", ["exports", "ember-models-table/components/models-table/row-filtering"], function (_exports, _rowFiltering) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _rowFiltering.default;
    }
  });
});
;define("svo-aircraft-tetris/components/models-table/row-group-toggle", ["exports", "ember-models-table/components/models-table/row-group-toggle"], function (_exports, _rowGroupToggle) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _rowGroupToggle.default;
    }
  });
});
;define("svo-aircraft-tetris/components/models-table/row-grouping", ["exports", "ember-models-table/components/models-table/row-grouping"], function (_exports, _rowGrouping) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _rowGrouping.default;
    }
  });
});
;define("svo-aircraft-tetris/components/models-table/row-select-all-checkbox", ["exports", "ember-models-table/components/models-table/row-select-all-checkbox"], function (_exports, _rowSelectAllCheckbox) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _rowSelectAllCheckbox.default;
    }
  });
});
;define("svo-aircraft-tetris/components/models-table/row-select-checkbox", ["exports", "ember-models-table/components/models-table/row-select-checkbox"], function (_exports, _rowSelectCheckbox) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _rowSelectCheckbox.default;
    }
  });
});
;define("svo-aircraft-tetris/components/models-table/row-sorting-cell", ["exports", "ember-models-table/components/models-table/row-sorting-cell"], function (_exports, _rowSortingCell) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _rowSortingCell.default;
    }
  });
});
;define("svo-aircraft-tetris/components/models-table/row-sorting", ["exports", "ember-models-table/components/models-table/row-sorting"], function (_exports, _rowSorting) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _rowSorting.default;
    }
  });
});
;define("svo-aircraft-tetris/components/models-table/row", ["exports", "ember-models-table/components/models-table/row"], function (_exports, _row) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _row.default;
    }
  });
});
;define("svo-aircraft-tetris/components/models-table/select", ["exports", "ember-models-table/components/models-table/select"], function (_exports, _select) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _select.default;
    }
  });
});
;define("svo-aircraft-tetris/components/models-table/summary", ["exports", "ember-models-table/components/models-table/summary"], function (_exports, _summary) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _summary.default;
    }
  });
});
;define("svo-aircraft-tetris/components/models-table/table-body", ["exports", "ember-models-table/components/models-table/table-body"], function (_exports, _tableBody) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _tableBody.default;
    }
  });
});
;define("svo-aircraft-tetris/components/models-table/table-footer", ["exports", "ember-models-table/components/models-table/table-footer"], function (_exports, _tableFooter) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _tableFooter.default;
    }
  });
});
;define("svo-aircraft-tetris/components/models-table/table-header", ["exports", "ember-models-table/components/models-table/table-header"], function (_exports, _tableHeader) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _tableHeader.default;
    }
  });
});
;define("svo-aircraft-tetris/components/models-table/table", ["exports", "ember-models-table/components/models-table/table"], function (_exports, _table) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _table.default;
    }
  });
});
;define("svo-aircraft-tetris/components/models-table/themes/bootstrap3/row-select-all-checkbox", ["exports", "ember-models-table/components/models-table/themes/bootstrap3/row-select-all-checkbox"], function (_exports, _rowSelectAllCheckbox) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _rowSelectAllCheckbox.default;
    }
  });
});
;define("svo-aircraft-tetris/components/models-table/themes/bootstrap4/columns-dropdown", ["exports", "ember-models-table/components/models-table/themes/bootstrap4/columns-dropdown"], function (_exports, _columnsDropdown) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _columnsDropdown.default;
    }
  });
});
;define("svo-aircraft-tetris/components/models-table/themes/bootstrap4/data-group-by-select", ["exports", "ember-models-table/components/models-table/themes/bootstrap4/data-group-by-select"], function (_exports, _dataGroupBySelect) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _dataGroupBySelect.default;
    }
  });
});
;define("svo-aircraft-tetris/components/models-table/themes/bootstrap4/global-filter", ["exports", "ember-models-table/components/models-table/themes/bootstrap4/global-filter"], function (_exports, _globalFilter) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _globalFilter.default;
    }
  });
});
;define("svo-aircraft-tetris/components/models-table/themes/bootstrap4/row-filtering-cell", ["exports", "ember-models-table/components/models-table/themes/bootstrap4/row-filtering-cell"], function (_exports, _rowFilteringCell) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _rowFilteringCell.default;
    }
  });
});
;define("svo-aircraft-tetris/components/models-table/themes/ember-bootstrap-v3/columns-dropdown", ["exports", "ember-models-table/components/models-table/themes/ember-bootstrap-v3/columns-dropdown"], function (_exports, _columnsDropdown) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _columnsDropdown.default;
    }
  });
});
;define("svo-aircraft-tetris/components/models-table/themes/ember-bootstrap-v3/data-group-by-select", ["exports", "ember-models-table/components/models-table/themes/ember-bootstrap-v3/data-group-by-select"], function (_exports, _dataGroupBySelect) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _dataGroupBySelect.default;
    }
  });
});
;define("svo-aircraft-tetris/components/models-table/themes/ember-bootstrap-v3/global-filter", ["exports", "ember-models-table/components/models-table/themes/ember-bootstrap-v3/global-filter"], function (_exports, _globalFilter) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _globalFilter.default;
    }
  });
});
;define("svo-aircraft-tetris/components/models-table/themes/ember-bootstrap-v3/row-filtering-cell", ["exports", "ember-models-table/components/models-table/themes/ember-bootstrap-v3/row-filtering-cell"], function (_exports, _rowFilteringCell) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _rowFilteringCell.default;
    }
  });
});
;define("svo-aircraft-tetris/components/models-table/themes/ember-bootstrap-v3/row-select-all-checkbox", ["exports", "ember-models-table/components/models-table/themes/ember-bootstrap-v3/row-select-all-checkbox"], function (_exports, _rowSelectAllCheckbox) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _rowSelectAllCheckbox.default;
    }
  });
});
;define("svo-aircraft-tetris/components/models-table/themes/ember-bootstrap-v3/summary", ["exports", "ember-models-table/components/models-table/themes/ember-bootstrap-v3/summary"], function (_exports, _summary) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _summary.default;
    }
  });
});
;define("svo-aircraft-tetris/components/models-table/themes/ember-bootstrap-v4/columns-dropdown", ["exports", "ember-models-table/components/models-table/themes/ember-bootstrap-v4/columns-dropdown"], function (_exports, _columnsDropdown) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _columnsDropdown.default;
    }
  });
});
;define("svo-aircraft-tetris/components/models-table/themes/ember-bootstrap-v4/data-group-by-select", ["exports", "ember-models-table/components/models-table/themes/ember-bootstrap-v4/data-group-by-select"], function (_exports, _dataGroupBySelect) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _dataGroupBySelect.default;
    }
  });
});
;define("svo-aircraft-tetris/components/models-table/themes/ember-bootstrap-v4/global-filter", ["exports", "ember-models-table/components/models-table/themes/ember-bootstrap-v4/global-filter"], function (_exports, _globalFilter) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _globalFilter.default;
    }
  });
});
;define("svo-aircraft-tetris/components/models-table/themes/ember-bootstrap-v4/row-filtering-cell", ["exports", "ember-models-table/components/models-table/themes/ember-bootstrap-v4/row-filtering-cell"], function (_exports, _rowFilteringCell) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _rowFilteringCell.default;
    }
  });
});
;define("svo-aircraft-tetris/components/models-table/themes/ember-bootstrap-v4/summary", ["exports", "ember-models-table/components/models-table/themes/ember-bootstrap-v4/summary"], function (_exports, _summary) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _summary.default;
    }
  });
});
;define("svo-aircraft-tetris/components/models-table/themes/ember-paper/cell-content-edit", ["exports", "ember-models-table/components/models-table/themes/ember-paper/cell-content-edit"], function (_exports, _cellContentEdit) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _cellContentEdit.default;
    }
  });
});
;define("svo-aircraft-tetris/components/models-table/themes/ember-paper/cell-edit-toggle", ["exports", "ember-models-table/components/models-table/themes/ember-paper/cell-edit-toggle"], function (_exports, _cellEditToggle) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _cellEditToggle.default;
    }
  });
});
;define("svo-aircraft-tetris/components/models-table/themes/ember-paper/columns-dropdown", ["exports", "ember-models-table/components/models-table/themes/ember-paper/columns-dropdown"], function (_exports, _columnsDropdown) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _columnsDropdown.default;
    }
  });
});
;define("svo-aircraft-tetris/components/models-table/themes/ember-paper/data-group-by-select", ["exports", "ember-models-table/components/models-table/themes/ember-paper/data-group-by-select"], function (_exports, _dataGroupBySelect) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _dataGroupBySelect.default;
    }
  });
});
;define("svo-aircraft-tetris/components/models-table/themes/ember-paper/expand-all-toggle", ["exports", "ember-models-table/components/models-table/themes/ember-paper/expand-all-toggle"], function (_exports, _expandAllToggle) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _expandAllToggle.default;
    }
  });
});
;define("svo-aircraft-tetris/components/models-table/themes/ember-paper/expand-toggle", ["exports", "ember-models-table/components/models-table/themes/ember-paper/expand-toggle"], function (_exports, _expandToggle) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _expandToggle.default;
    }
  });
});
;define("svo-aircraft-tetris/components/models-table/themes/ember-paper/global-filter", ["exports", "ember-models-table/components/models-table/themes/ember-paper/global-filter"], function (_exports, _globalFilter) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _globalFilter.default;
    }
  });
});
;define("svo-aircraft-tetris/components/models-table/themes/ember-paper/page-size-select", ["exports", "ember-models-table/components/models-table/themes/ember-paper/page-size-select"], function (_exports, _pageSizeSelect) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _pageSizeSelect.default;
    }
  });
});
;define("svo-aircraft-tetris/components/models-table/themes/ember-paper/pagination-numeric", ["exports", "ember-models-table/components/models-table/themes/ember-paper/pagination-numeric"], function (_exports, _paginationNumeric) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _paginationNumeric.default;
    }
  });
});
;define("svo-aircraft-tetris/components/models-table/themes/ember-paper/pagination-simple", ["exports", "ember-models-table/components/models-table/themes/ember-paper/pagination-simple"], function (_exports, _paginationSimple) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _paginationSimple.default;
    }
  });
});
;define("svo-aircraft-tetris/components/models-table/themes/ember-paper/row-filtering-cell", ["exports", "ember-models-table/components/models-table/themes/ember-paper/row-filtering-cell"], function (_exports, _rowFilteringCell) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _rowFilteringCell.default;
    }
  });
});
;define("svo-aircraft-tetris/components/models-table/themes/ember-paper/row-select-all-checkbox", ["exports", "ember-models-table/components/models-table/themes/ember-paper/row-select-all-checkbox"], function (_exports, _rowSelectAllCheckbox) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _rowSelectAllCheckbox.default;
    }
  });
});
;define("svo-aircraft-tetris/components/models-table/themes/ember-paper/row-select-checkbox", ["exports", "ember-models-table/components/models-table/themes/ember-paper/row-select-checkbox"], function (_exports, _rowSelectCheckbox) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _rowSelectCheckbox.default;
    }
  });
});
;define("svo-aircraft-tetris/components/models-table/themes/ember-paper/row-sorting-cell", ["exports", "ember-models-table/components/models-table/themes/ember-paper/row-sorting-cell"], function (_exports, _rowSortingCell) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _rowSortingCell.default;
    }
  });
});
;define("svo-aircraft-tetris/components/models-table/themes/ember-paper/select", ["exports", "ember-models-table/components/models-table/themes/ember-paper/select"], function (_exports, _select) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _select.default;
    }
  });
});
;define("svo-aircraft-tetris/components/models-table/themes/ember-paper/summary", ["exports", "ember-models-table/components/models-table/themes/ember-paper/summary"], function (_exports, _summary) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _summary.default;
    }
  });
});
;define("svo-aircraft-tetris/components/models-table/themes/plain-html/columns-dropdown", ["exports", "ember-models-table/components/models-table/themes/plain-html/columns-dropdown"], function (_exports, _columnsDropdown) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _columnsDropdown.default;
    }
  });
});
;define("svo-aircraft-tetris/components/models-table/themes/plain-html/global-filter", ["exports", "ember-models-table/components/models-table/themes/plain-html/global-filter"], function (_exports, _globalFilter) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _globalFilter.default;
    }
  });
});
;define("svo-aircraft-tetris/components/models-table/themes/plain-html/row-filtering-cell", ["exports", "ember-models-table/components/models-table/themes/plain-html/row-filtering-cell"], function (_exports, _rowFilteringCell) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _rowFilteringCell.default;
    }
  });
});
;define("svo-aircraft-tetris/components/models-table/themes/plain-html/summary", ["exports", "ember-models-table/components/models-table/themes/plain-html/summary"], function (_exports, _summary) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _summary.default;
    }
  });
});
;define("svo-aircraft-tetris/components/timelines-filtering", ["exports", "@babel/runtime/helpers/esm/defineProperty", "@babel/runtime/helpers/esm/applyDecoratedDescriptor", "tracked-built-ins", "@glimmer/component"], function (_exports, _defineProperty2, _applyDecoratedDescriptor2, _trackedBuiltIns, _component) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _dec, _class;

  const __COLOCATED_TEMPLATE__ = Ember.HTMLBars.template(
  /*
    {{yield
    (hash
      outputData=this.outputData
      terminalFilters=this.terminalFilters
      airClassFilters=this.airClassFilters
      toggleFilter=this.toggleFilter
    )
  }}
  */
  {
    "id": "RMcCaI4l",
    "block": "{\"symbols\":[\"&default\"],\"statements\":[[18,1,[[30,[36,0],null,[[\"outputData\",\"terminalFilters\",\"airClassFilters\",\"toggleFilter\"],[[32,0,[\"outputData\"]],[32,0,[\"terminalFilters\"]],[32,0,[\"airClassFilters\"]],[32,0,[\"toggleFilter\"]]]]]]]],\"hasEval\":false,\"upvars\":[\"hash\"]}",
    "moduleName": "svo-aircraft-tetris/components/timelines-filtering.hbs"
  });

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
  let TimelineFilteringContextComponent = (_dec = Ember._action, (_class = class TimelineFilteringContextComponent extends _component.default {
    constructor(...args) {
      super(...args);
      (0, _defineProperty2.default)(this, "terminalFilters", [(0, _trackedBuiltIns.tracked)({
        value: 1,
        label: 1,
        enabled: false
      }), (0, _trackedBuiltIns.tracked)({
        value: 2,
        label: 2,
        enabled: true
      }), (0, _trackedBuiltIns.tracked)({
        value: 3,
        label: 3,
        enabled: false
      }), (0, _trackedBuiltIns.tracked)({
        value: 4,
        label: 4,
        enabled: true
      }), (0, _trackedBuiltIns.tracked)({
        value: 5,
        label: 5,
        enabled: true
      })]);
      (0, _defineProperty2.default)(this, "airClassFilters", [(0, _trackedBuiltIns.tracked)({
        value: 'Wide_Body',
        label: 'Wide',
        enabled: true
      }), (0, _trackedBuiltIns.tracked)({
        value: 'Narrow_Body',
        label: 'Narrow',
        enabled: true
      }), (0, _trackedBuiltIns.tracked)({
        value: 'Regional',
        label: 'Regional',
        enabled: false
      })]);
    }

    // alarmTypeFilters = [
    //   tracked({ value: "W", label: "Warning", enabled: false }),
    //   tracked({ value: "A", label: "Alarm", enabled: true }),
    //   tracked({ value: "C", label: "Critical", enabled: true })
    // ]
    get terminalValues() {
      return this.terminalFilters.filter(item => item.enabled === true).map(item => item.value);
    }

    get airClassValues() {
      return this.airClassFilters.filter(item => item.enabled === true).map(item => item.value);
    }

    toggleFilter(filter) {
      // this.assetCriticalityFilters[ind].enabled = ! this.assetCriticalityFilters[ind].enabled
      // console.log(filter)
      filter.enabled = !filter.enabled; // this.assetCriticalityFilters = this.assetCriticalityFilters;
    }

    get outputData() {
      return this.args.inputData.filter(timeline => {
        return this.terminalValues.includes(+timeline.terminalId) && this.airClassValues.includes(timeline.airClass);
      });
    }

  }, ((0, _applyDecoratedDescriptor2.default)(_class.prototype, "toggleFilter", [_dec], Object.getOwnPropertyDescriptor(_class.prototype, "toggleFilter"), _class.prototype)), _class));
  _exports.default = TimelineFilteringContextComponent;

  Ember._setComponentTemplate(__COLOCATED_TEMPLATE__, TimelineFilteringContextComponent);
});
;define("svo-aircraft-tetris/components/welcome-page", ["exports", "ember-welcome-page/components/welcome-page"], function (_exports, _welcomePage) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _welcomePage.default;
    }
  });
});
;define("svo-aircraft-tetris/controllers/index", ["exports", "@babel/runtime/helpers/esm/initializerDefineProperty", "@babel/runtime/helpers/esm/defineProperty", "@babel/runtime/helpers/esm/applyDecoratedDescriptor", "@babel/runtime/helpers/esm/initializerWarningHelper", "tracked-built-ins", "moment"], function (_exports, _initializerDefineProperty2, _defineProperty2, _applyDecoratedDescriptor2, _initializerWarningHelper2, _trackedBuiltIns, _moment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _class, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7;

  let IndexController = (_dec = Ember.inject.service, _dec2 = Ember._action, _dec3 = Ember._action, _dec4 = Ember._action, _dec5 = Ember._action, _dec6 = Ember._action, _dec7 = Ember._action, _dec8 = Ember._action, (_class = class IndexController extends Ember.Controller {
    constructor(...args) {
      super(...args);
      (0, _initializerDefineProperty2.default)(this, "data", _descriptor, this);
      (0, _initializerDefineProperty2.default)(this, "store", _descriptor2, this);
      (0, _initializerDefineProperty2.default)(this, "expandedItems", _descriptor3, this);
      (0, _defineProperty2.default)(this, "columnSets", []);
      (0, _defineProperty2.default)(this, "columns", [{
        propertyName: 'isArrival'
      }, {
        propertyName: 'pseudoAcCode',
        isHidden: true
      }, {
        propertyName: 'start',
        sortFunction: function sortBefore(i1, i2) {
          return (0, _moment.default)(i1).diff(i2);
        } // component: 'emt/datetime-format-start',

      }, {
        propertyName: 'end',
        sortFunction: function sortBefore(i1, i2) {
          return (0, _moment.default)(i1).diff(i2);
        } // component: 'emt/datetime-format-start',

      }, {
        propertyName: 'duration'
      }, {
        propertyName: 'airline',
        isHidden: true
      }, {
        propertyName: 'index',
        isHidden: true
      }, {
        propertyName: 'cost'
      }, {
        propertyName: 'optCost'
      }, {
        propertyName: 'airport',
        isHidden: true
      }, {
        propertyName: 'pax',
        isHidden: true
      }, {
        propertyName: 'paxCapTotal',
        isHidden: true
      }, {
        propertyName: 'diffFromOpt',
        sortFunction: function sortBefore(i1, i2) {
          return Number(i2) - Number(i1);
        }
      }, // { propertyName: 'paxCapTotal' },
      {
        propertyName: 'terminalId'
      }, {
        propertyName: 'optStand'
      }, {
        propertyName: 'standId',

        filterFunction(val, filterVal) {
          return filterVal === val;
        }

      } // { propertyName: 'signal', title: "Signal Trend", component: 'emt/alarms-graph-cell', className: 'emt-alarms-readings-graph-cell' },
      ]);
      (0, _defineProperty2.default)(this, "showComponentFooter", true);
      (0, _defineProperty2.default)(this, "showColumnsDropdown", true);
      (0, _defineProperty2.default)(this, "useFilteringByColumns", true);
      (0, _defineProperty2.default)(this, "showGlobalFilter", true);
      (0, _defineProperty2.default)(this, "useNumericPagination", true);
      (0, _defineProperty2.default)(this, "showPageSize", true);
      (0, _defineProperty2.default)(this, "filteringIgnoreCase", true);
      (0, _defineProperty2.default)(this, "doFilteringByHiddenColumns", false);
      (0, _defineProperty2.default)(this, "showCurrentPageNumberSelect", true);
      (0, _defineProperty2.default)(this, "collapseNumPaginationForPagesCount", 1);
      (0, _defineProperty2.default)(this, "multipleColumnsSorting", true);
      (0, _defineProperty2.default)(this, "timetableCSV", defaultCSV);
      (0, _defineProperty2.default)(this, "chartOptions", (0, _trackedBuiltIns.tracked)({
        minY: '',
        maxY: '',
        minX: '2019-08-17 00:00:00',
        maxX: '2019-08-17 23:59:59'
      }));
      (0, _initializerDefineProperty2.default)(this, "showErrors", _descriptor4, this);
      (0, _initializerDefineProperty2.default)(this, "showChartOptions", _descriptor5, this);
      (0, _initializerDefineProperty2.default)(this, "incorrectLines", _descriptor6, this);
      (0, _initializerDefineProperty2.default)(this, "calcCost", _descriptor7, this);
    }

    get stands() {
      let stands = {}; // const incorrectLines = [];

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
      const standStructure = Object.keys(stands).map(key => {
        // let result = false;
        // let incorrectLines = [];
        let standLineIds = stands[key].sort((a, b) => {
          return (0, _moment.default)(this.data[a].start).diff(this.data[b].start, 'minutes');
        });
        return {
          standId: key,
          lines: standLineIds.map(id => {
            return this.data[id];
          })
        };
      });
      return standStructure;
    }

    get totalDuration() {
      return _moment.default.duration(24, 'hours').asMinutes();
    }

    get standsUtilization() {
      const totalD = this.totalDuration;
      return this.stands.map(stand => {
        const standUtilization = stand.lines.reduce((prev, line) => {
          prev = prev + (0, _moment.default)(line.end).diff(line.start, 'minutes');
          return prev;
        }, 0);
        return {
          stand: stand.standId,
          utilisation: standUtilization / totalD
        };
      }).sort((a, b) => {
        return b.utilisation - a.utilisation;
      });
    }

    get timelinesByDiffFromOpt() {
      const data = this.data || [];
      return data.map(timeline => {
        return {
          timeline: timeline,
          diff: timeline.diffFromOpt
        };
      }).sort((a, b) => {
        return b.diff - a.diff;
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
        prev = prev + item.lines.reduce((prev2, line) => {
          prev2 = prev2 + Number(line.cost);
          return prev2;
        }, 0);
        return prev;
      }, 0);
    }

    get totalOptCost() {
      return this.stands.reduce((prev, item) => {
        prev = prev + item.lines.reduce((prev2, line) => {
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

    costsOptArray() {
      const result = this.data.map(timeline => {
        return {
          index: timeline.index,
          cost: this.model.optimalStands[timeline.index][0].Cost
        };
      }).sort((a, b) => {
        return b.cost - a.cost;
      }).map(i => i.index);
      console.log(result);
    }

    get optimalRatio() {
      return this.totalCost / this.totalOptCost;
    }

    get incorrectData() {
      const stands = this.stands;
      const incorrectLines = stands.filter(stand => {
        const intersectedLines = stand.lines.filter((line, i) => {
          const condBefore = stand.lines.slice(0, i).some(lineBefore => {
            return (0, _moment.default)(line.start).isBetween(lineBefore.start, lineBefore.end);
          });
          if (condBefore) return true;
          const condAfter = stand.lines.slice(i + 1).some(lineAfter => {
            return (0, _moment.default)(line.start).isBetween(lineAfter.start, lineAfter.end);
          });
          return condAfter;
        });
        return intersectedLines.length > 0;
      });
      return incorrectLines;
    }

    toggleShowOptions() {
      this.showChartOptions = !this.showChartOptions;
    }

    deleteTimetable() {
      this.store.unloadAll('timetable');
    }

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
        strings.slice(1).forEach(str => {
          const timetable = str.split(',');
          let [id, ad, datetime, alSyn, flightNumber, fId, ap, acSyn, paxTotal, pax, airStand, terminal,,,, optStand, optCost,, start, finish, cost, index, ...rest] = timetable;
          allModels.push(this.store.createRecord('timetable', {
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
            optCost
          }));
        });
        this.data = Ember.A(allModels);
      }
    }

    arrageTimelines() {
      let processedLines = this.data.map(timeline => {
        const isArrival = timeline.isArrival;
        const isDomestic = timeline.flightType;
      });
      this.data = Ember.A(processedLines);
    }

    toggleShowErrors() {
      this.showErrors = !this.showErrors;
    }

    calculateTimesPerTimelineStand(timeline, standId) {
      const stand = this.model.stands[standId];
      const isAway = stand['jetbridgeType'] === 'N';
      const busTime = calcTime(stand, timeline.terminalId);
      const standTime = this.model.times[timeline.airClass][isAway ? 'awayTime' : 'jbTime'];
      const taxiingTime = +stand['taxiingTime'];
      return {
        busTime,
        standTime,
        taxiingTime
      };
    }

    calculateCostPerTimelineStand(timeline, standId) {
      const stand = this.model.stands[standId];
      const isAway = stand['jetbridgeType'] === 'N';
      const busRate = +this.model.rates['Bus_Cost_per_Minute'];
      const busTime = calcTime(stand, timeline.terminalId);
      const busCount = Math.ceil(+timeline.pax / 80);
      const busCost = isAway ? busCount * busTime * busRate : 0;
      const standRate = isAway ? +this.model.rates['Away_Aircraft_Stand_Cost_per_Minute'] : +this.model.rates['JetBridge_Aircraft_Stand_Cost_per_Minute'];
      const standTime = this.model.times[timeline.airClass][isAway ? 'awayTime' : 'jbTime'];
      const standCost = standRate * standTime;
      const taxiingRate = this.model.rates['Aircraft_Taxiing_Cost_per_Minute'];
      const taxiingTime = +stand['taxiingTime'];
      const taxiingCost = taxiingRate * taxiingTime;
      const totalCost = busCost + taxiingCost + standCost;
      return totalCost;
    }

    calculateCosts() {
      const calcCost = this.data.reduce((prev, timeline) => {
        const totalCost = this.calculateCostPerTimelineStand(timeline, timeline.standId);
        prev = prev + totalCost;
        return prev;
      }, 0);
      this.calcCost = calcCost;
    }

  }, (_descriptor = (0, _applyDecoratedDescriptor2.default)(_class.prototype, "data", [_trackedBuiltIns.tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return [];
    }
  }), _descriptor2 = (0, _applyDecoratedDescriptor2.default)(_class.prototype, "store", [_dec], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor3 = (0, _applyDecoratedDescriptor2.default)(_class.prototype, "expandedItems", [_trackedBuiltIns.tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return [];
    }
  }), _descriptor4 = (0, _applyDecoratedDescriptor2.default)(_class.prototype, "showErrors", [_trackedBuiltIns.tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return false;
    }
  }), _descriptor5 = (0, _applyDecoratedDescriptor2.default)(_class.prototype, "showChartOptions", [_trackedBuiltIns.tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return false;
    }
  }), _descriptor6 = (0, _applyDecoratedDescriptor2.default)(_class.prototype, "incorrectLines", [_trackedBuiltIns.tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return [];
    }
  }), _descriptor7 = (0, _applyDecoratedDescriptor2.default)(_class.prototype, "calcCost", [_trackedBuiltIns.tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return 0;
    }
  }), (0, _applyDecoratedDescriptor2.default)(_class.prototype, "costsOptArray", [_dec2], Object.getOwnPropertyDescriptor(_class.prototype, "costsOptArray"), _class.prototype), (0, _applyDecoratedDescriptor2.default)(_class.prototype, "toggleShowOptions", [_dec3], Object.getOwnPropertyDescriptor(_class.prototype, "toggleShowOptions"), _class.prototype), (0, _applyDecoratedDescriptor2.default)(_class.prototype, "deleteTimetable", [_dec4], Object.getOwnPropertyDescriptor(_class.prototype, "deleteTimetable"), _class.prototype), (0, _applyDecoratedDescriptor2.default)(_class.prototype, "parseTimetable", [_dec5], Object.getOwnPropertyDescriptor(_class.prototype, "parseTimetable"), _class.prototype), (0, _applyDecoratedDescriptor2.default)(_class.prototype, "arrageTimelines", [_dec6], Object.getOwnPropertyDescriptor(_class.prototype, "arrageTimelines"), _class.prototype), (0, _applyDecoratedDescriptor2.default)(_class.prototype, "toggleShowErrors", [_dec7], Object.getOwnPropertyDescriptor(_class.prototype, "toggleShowErrors"), _class.prototype), (0, _applyDecoratedDescriptor2.default)(_class.prototype, "calculateCosts", [_dec8], Object.getOwnPropertyDescriptor(_class.prototype, "calculateCosts"), _class.prototype)), _class));
  _exports.default = IndexController;

  function calcTime(stand, terminal) {
    return Number(stand[`timeToTerminal${terminal}`]);
  }

  const defaultCSV = `,flight_AD,flight_datetime,flight_AL_Synchron_code,flight_number,flight_ID,flight_AP,flight_AC_Synchron_code,flight_AC_PAX_capacity_total,flight_PAX,Aircraft_Stand,flight_terminal,empty_spaces,air_classes,count_date,opt_mc,opt_min_cost_value,type_mc,flight_datetime_start,flight_datetime_finish,C_vc,index
0,D,2019-08-17 03:30:00,RL,7701,I,AYT,77W,492,490,48,2,2,Wide_Body,1,13,1800,jetbridge,2019-08-17 02:10:00,2019-08-17 03:10:00,2100,1082
1,A,2019-08-17 23:50:00,RL,7706,I,AYT,77W,492,489,48,2,3,Wide_Body,7,13,1800,jetbridge,2019-08-18 00:10:00,2019-08-18 01:10:00,2100,1086
2,D,2019-08-17 15:45:00,RL,7705,I,AYT,77W,492,486,48,2,6,Wide_Body,4,13,1800,jetbridge,2019-08-17 14:25:00,2019-08-17 15:25:00,2100,1085
3,D,2019-08-17 13:50:00,N4,1723,I,MIR,77W,486,479,48,2,7,Wide_Body,3,13,1800,jetbridge,2019-08-17 12:30:00,2019-08-17 13:30:00,2100,882
4,A,2019-08-17 02:45:00,FV,6152,D,SIP,77W,457,454,10,3,3,Wide_Body,1,13,1800,away,2019-08-17 02:50:00,2019-08-17 04:10:00,2530,1074
5,A,2019-08-17 14:50:00,FV,6298,D,KHV,77W,457,452,10,3,5,Wide_Body,6,13,1800,away,2019-08-17 14:55:00,2019-08-17 16:15:00,2530,1078
6,A,2019-08-17 15:55:00,FV,6286,D,PKC,77W,457,451,13,3,6,Wide_Body,6,13,1800,jetbridge,2019-08-17 16:05:00,2019-08-17 17:05:00,1800,1076
7,D,2019-08-17 08:25:00,FV,6151,D,SIP,77W,457,447,13,3,10,Wide_Body,6,13,1800,jetbridge,2019-08-17 07:15:00,2019-08-17 08:15:00,1800,1073
8,D,2019-08-17 18:30:00,FV,6287,D,KHV,77W,457,445,13,3,12,Wide_Body,6,13,1800,jetbridge,2019-08-17 17:20:00,2019-08-17 18:20:00,1800,1077
9,A,2019-08-17 12:30:00,FV,6288,D,KHV,74E,447,445,10,3,2,Wide_Body,3,13,1800,away,2019-08-17 12:35:00,2019-08-17 13:55:00,2530,1079
10,D,2019-08-17 21:05:00,FV,6297,D,KHV,74E,447,444,13,3,3,Wide_Body,4,13,1800,jetbridge,2019-08-17 19:55:00,2019-08-17 20:55:00,1800,1080
11,D,2019-08-17 14:05:00,RL,7505,I,NBE,77W,492,444,77,2,48,Wide_Body,4,13,1800,away,2019-08-17 12:37:00,2019-08-17 13:57:00,2980,1081
12,A,2019-08-17 10:45:00,N4,1612,I,HER,772,440,439,48,2,1,Wide_Body,5,13,1800,jetbridge,2019-08-17 11:05:00,2019-08-17 12:05:00,2100,876
13,D,2019-08-17 14:10:00,N4,7649,I,DJE,772,440,437,78,2,3,Wide_Body,5,13,1800,away,2019-08-17 12:44:00,2019-08-17 14:04:00,3010,880
14,D,2019-08-17 01:25:00,N4,1611,I,HER,772,440,437,48,2,3,Wide_Body,3,13,1800,jetbridge,2019-08-17 00:05:00,2019-08-17 01:05:00,2100,875
15,D,2019-08-17 15:15:00,N4,2735,I,CXR,772,440,434,45,2,6,Wide_Body,5,13,1800,away,2019-08-17 13:44:00,2019-08-17 15:04:00,3070,879
16,D,2019-08-17 19:50:00,FV,6285,D,PKC,77W,457,428,13,3,29,Wide_Body,6,13,1800,jetbridge,2019-08-17 18:40:00,2019-08-17 19:40:00,1800,1075
17,A,2019-08-17 23:30:00,ZF,9010,I,AYT,77W,531,425,55,2,106,Wide_Body,5,13,1800,jetbridge,2019-08-17 23:51:00,2019-08-18 00:51:00,2130,1094
18,D,2019-08-17 02:50:00,ZF,9007,I,AYT,77W,531,425,55,2,106,Wide_Body,3,13,1800,jetbridge,2019-08-17 01:29:00,2019-08-17 02:29:00,2130,1093
19,A,2019-08-17 11:20:00,N4,1836,I,DLM,772,440,413,55,2,27,Wide_Body,5,13,1800,jetbridge,2019-08-17 11:41:00,2019-08-17 12:41:00,2130,878
20,D,2019-08-17 12:30:00,SU,200,I,PEK,77W,402,400,10,3,2,Wide_Body,3,13,1800,away,2019-08-17 11:05:00,2019-08-17 12:25:00,2440,567
21,A,2019-08-17 10:35:00,SU,1711,D,KHV,77W,402,400,11,3,2,Wide_Body,4,13,1800,away,2019-08-17 10:41:00,2019-08-17 12:01:00,2470,589
22,D,2019-08-17 15:40:00,SU,1700,D,VVO,77W,402,399,11,3,3,Wide_Body,2,13,1800,away,2019-08-17 14:14:00,2019-08-17 15:34:00,2470,586
23,A,2019-08-17 16:35:00,SU,291,I,HAN,77W,402,398,19,3,4,Wide_Body,5,13,1800,jetbridge,2019-08-17 16:45:00,2019-08-17 17:45:00,1800,582
24,D,2019-08-17 09:20:00,SU,100,I,JFK,77W,402,398,19,3,4,Wide_Body,5,13,1800,jetbridge,2019-08-17 08:10:00,2019-08-17 09:10:00,1800,561
25,D,2019-08-17 17:15:00,SU,1710,D,KHV,77W,402,396,16,3,6,Wide_Body,4,13,1800,jetbridge,2019-08-17 16:04:00,2019-08-17 17:04:00,1830,588
26,D,2019-08-17 21:20:00,SU,204,I,PEK,77W,402,394,19,3,8,Wide_Body,4,13,1800,jetbridge,2019-08-17 20:10:00,2019-08-17 21:10:00,1800,569
27,D,2019-08-17 20:45:00,SU,250,I,ICN,77W,402,394,23,3,8,Wide_Body,6,13,1800,jetbridge,2019-08-17 19:33:00,2019-08-17 20:33:00,1860,577
28,A,2019-08-17 18:30:00,RL,7704,I,AYT,77W,492,394,48,2,98,Wide_Body,6,13,1800,jetbridge,2019-08-17 18:50:00,2019-08-17 19:50:00,2100,1084
29,D,2019-08-17 16:45:00,SU,1730,D,PKC,77W,402,394,1,3,8,Wide_Body,6,13,1800,away,2019-08-17 15:20:00,2019-08-17 16:40:00,2515,590
30,D,2019-08-17 10:35:00,RL,7703,I,AYT,77W,492,394,48,2,98,Wide_Body,4,13,1800,jetbridge,2019-08-17 09:15:00,2019-08-17 10:15:00,2100,1083
31,D,2019-08-17 08:50:00,SU,502,I,TLV,77W,402,393,23,3,9,Wide_Body,4,13,1800,jetbridge,2019-08-17 07:38:00,2019-08-17 08:38:00,1860,583
32,D,2019-08-17 12:00:00,SU,106,I,LAX,77W,402,391,1,3,11,Wide_Body,5,13,1800,away,2019-08-17 10:35:00,2019-08-17 11:55:00,2515,565
33,A,2019-08-17 23:40:00,N4,1724,I,MIR,77W,486,389,58,2,97,Wide_Body,6,13,1800,jetbridge,2019-08-18 00:01:00,2019-08-18 01:01:00,2130,883
34,A,2019-08-17 22:30:00,N4,1804,I,AYT,77W,486,389,48,2,97,Wide_Body,2,13,1800,jetbridge,2019-08-17 22:50:00,2019-08-17 23:50:00,2100,887
35,D,2019-08-17 13:15:00,N4,1803,I,AYT,77W,486,389,80,2,97,Wide_Body,3,13,1800,away,2019-08-17 11:50:00,2019-08-17 13:10:00,2890,886
36,A,2019-08-17 10:55:00,N4,1802,I,AYT,77W,486,389,77,2,97,Wide_Body,4,13,1800,away,2019-08-17 11:03:00,2019-08-17 12:23:00,2830,885
37,D,2019-08-17 07:40:00,N4,355,I,CUN,77W,486,389,48,2,97,Wide_Body,5,13,1800,jetbridge,2019-08-17 06:20:00,2019-08-17 07:20:00,2100,881
38,D,2019-08-17 02:30:00,N4,1801,I,AYT,77W,486,389,58,2,97,Wide_Body,1,13,1800,jetbridge,2019-08-17 01:09:00,2019-08-17 02:09:00,2130,884
39,A,2019-08-17 18:45:00,SU,503,I,TLV,77W,402,386,10,3,16,Wide_Body,5,13,1800,away,2019-08-17 18:50:00,2019-08-17 20:10:00,2440,584
40,A,2019-08-17 16:05:00,SU,263,I,NRT,77W,402,386,23,3,16,Wide_Body,5,13,1800,jetbridge,2019-08-17 16:17:00,2019-08-17 17:17:00,1860,580
41,A,2019-08-17 14:45:00,SU,205,I,PEK,77W,402,386,8,3,16,Wide_Body,4,13,1800,away,2019-08-17 14:54:00,2019-08-17 16:14:00,2635,570
42,A,2019-08-17 04:40:00,SU,505,I,TLV,77W,402,386,19,3,16,Wide_Body,2,13,1800,jetbridge,2019-08-17 04:50:00,2019-08-17 05:50:00,1800,585
43,D,2019-08-17 14:15:00,SU,102,I,JFK,77W,402,385,11,3,17,Wide_Body,5,13,1800,away,2019-08-17 12:49:00,2019-08-17 14:09:00,2470,563
44,D,2019-08-17 20:05:00,SU,208,I,PVG,77W,402,379,77,2,23,Wide_Body,5,13,1800,away,2019-08-17 18:37:00,2019-08-17 19:57:00,2830,573
45,A,2019-08-17 12:40:00,SU,1731,D,PKC,77W,402,379,1,3,23,Wide_Body,4,13,1800,away,2019-08-17 12:45:00,2019-08-17 14:05:00,2515,591
46,A,2019-08-17 05:45:00,SU,207,I,PVG,77W,402,379,10,3,23,Wide_Body,3,13,1800,away,2019-08-17 05:50:00,2019-08-17 07:10:00,2440,572
47,D,2019-08-17 09:30:00,SU,206,I,PVG,77W,402,378,48,2,24,Wide_Body,4,13,1800,jetbridge,2019-08-17 08:10:00,2019-08-17 09:10:00,2100,571
48,D,2019-08-17 19:20:00,SU,212,I,HKG,77W,402,377,55,2,25,Wide_Body,5,13,1800,jetbridge,2019-08-17 17:59:00,2019-08-17 18:59:00,2130,575
49,A,2019-08-17 05:35:00,SU,201,I,PEK,77W,402,374,77,2,28,Wide_Body,3,13,1800,away,2019-08-17 05:43:00,2019-08-17 07:03:00,2830,568
50,A,2019-08-17 16:20:00,SU,209,I,PVG,77W,402,373,48,2,29,Wide_Body,3,13,1800,jetbridge,2019-08-17 16:40:00,2019-08-17 17:40:00,2100,574
51,A,2019-08-17 15:45:00,FV,6274,D,UUS,773,373,373,11,3,0,Wide_Body,4,13,1800,away,2019-08-17 15:51:00,2019-08-17 17:11:00,2470,1065
52,A,2019-08-17 14:00:00,FV,6282,D,VVO,773,373,373,3,3,0,Wide_Body,5,13,1800,away,2019-08-17 14:08:00,2019-08-17 15:28:00,2680,1067
53,A,2019-08-17 12:25:00,FV,6284,D,UUS,773,373,372,8,3,1,Wide_Body,5,13,1800,away,2019-08-17 12:34:00,2019-08-17 13:54:00,2635,1069
54,A,2019-08-17 16:40:00,SU,213,I,HKG,77W,402,371,58,2,31,Wide_Body,5,13,1800,jetbridge,2019-08-17 17:01:00,2019-08-17 18:01:00,2130,576
55,D,2019-08-17 19:00:00,SU,260,I,NRT,77W,402,370,29,3,32,Wide_Body,5,13,1800,jetbridge,2019-08-17 17:43:00,2019-08-17 18:43:00,2010,579
56,D,2019-08-17 20:20:00,FV,6273,D,UUS,773,373,369,11,3,4,Wide_Body,3,13,1800,away,2019-08-17 18:54:00,2019-08-17 20:14:00,2470,1064
57,D,2019-08-17 18:25:00,FV,6281,D,VVO,773,373,368,10,3,5,Wide_Body,6,13,1800,away,2019-08-17 17:00:00,2019-08-17 18:20:00,2440,1066
58,D,2019-08-17 19:55:00,FV,6289,D,GDX,773,373,365,1,3,8,Wide_Body,5,13,1800,away,2019-08-17 18:30:00,2019-08-17 19:50:00,2515,1070
59,D,2019-08-17 17:05:00,FV,6283,D,UUS,773,373,361,3,3,12,Wide_Body,6,13,1800,away,2019-08-17 15:37:00,2019-08-17 16:57:00,2680,1068
60,A,2019-08-17 14:10:00,FV,6290,D,GDX,773,373,359,5,3,14,Wide_Body,5,13,1800,away,2019-08-17 14:17:00,2019-08-17 15:37:00,2725,1071
61,D,2019-08-17 02:10:00,N4,1835,I,DLM,772,440,352,46,2,88,Wide_Body,2,13,1800,jetbridge,2019-08-17 00:47:00,2019-08-17 01:47:00,2190,877
62,D,2019-08-17 19:25:00,SU,290,I,HAN,77W,402,350,8,3,52,Wide_Body,5,13,1800,away,2019-08-17 17:56:00,2019-08-17 19:16:00,2635,581
63,A,2019-08-17 13:20:00,SU,107,I,LAX,77W,402,337,2,3,65,Wide_Body,4,13,1800,away,2019-08-17 13:25:00,2019-08-17 14:45:00,2740,566
64,A,2019-08-17 11:45:00,SU,103,I,JFK,77W,402,337,3,3,65,Wide_Body,6,13,1800,away,2019-08-17 11:53:00,2019-08-17 13:13:00,2680,564
65,D,2019-08-17 03:50:00,RL,7743,I,BCN,763,330,330,77,2,0,Wide_Body,1,13,1800,away,2019-08-17 02:22:00,2019-08-17 03:42:00,2830,899
66,A,2019-08-17 09:50:00,EO,1806,I,AYT,763,340,329,78,2,11,Wide_Body,5,13,1800,away,2019-08-17 09:56:00,2019-08-17 11:16:00,2845,1057
67,A,2019-08-17 22:35:00,RL,506,I,TPE,763,330,326,58,2,4,Wide_Body,3,13,1800,jetbridge,2019-08-17 22:56:00,2019-08-17 23:56:00,2130,898
68,A,2019-08-17 10:15:00,SU,1701,D,VVO,77W,402,322,8,3,80,Wide_Body,3,13,1800,away,2019-08-17 10:24:00,2019-08-17 11:44:00,2635,587
69,A,2019-08-17 16:30:00,SU,251,I,ICN,77W,402,320,2,3,82,Wide_Body,5,13,1800,away,2019-08-17 16:35:00,2019-08-17 17:55:00,2590,578
70,D,2019-08-17 09:10:00,SU,2550,I,AMS,77W,402,320,55,2,82,Wide_Body,2,13,1800,jetbridge,2019-08-17 07:49:00,2019-08-17 08:49:00,2130,592
71,A,2019-08-17 16:15:00,FV,6266,I,CMB,773,373,305,8,3,68,Wide_Body,4,13,1800,away,2019-08-17 16:24:00,2019-08-17 17:44:00,2530,1063
72,A,2019-08-17 15:50:00,SU,1703,D,VVO,333,302,299,5,3,3,Wide_Body,5,13,1800,away,2019-08-17 15:57:00,2019-08-17 17:17:00,2590,601
73,A,2019-08-17 06:25:00,SU,101,I,JFK,77W,402,298,11,3,104,Wide_Body,6,13,1800,away,2019-08-17 06:31:00,2019-08-17 07:51:00,2380,562
74,D,2019-08-17 20:35:00,SU,1702,D,VVO,333,302,296,3,3,6,Wide_Body,5,13,1800,away,2019-08-17 19:07:00,2019-08-17 20:27:00,2560,600
75,D,2019-08-17 08:00:00,SU,252,I,ICN,333,296,294,1,3,2,Wide_Body,5,13,1800,away,2019-08-17 06:35:00,2019-08-17 07:55:00,2410,618
76,A,2019-08-17 16:45:00,SU,275,I,HKT,333,296,293,77,2,3,Wide_Body,6,13,1800,away,2019-08-17 16:53:00,2019-08-17 18:13:00,2680,623
77,A,2019-08-17 07:05:00,SU,1871,I,TAS,333,296,293,8,3,3,Wide_Body,6,13,1800,away,2019-08-17 07:14:00,2019-08-17 08:34:00,2530,630
78,A,2019-08-17 19:10:00,SU,2579,I,LHR,333,296,292,8,3,4,Wide_Body,6,13,1800,away,2019-08-17 19:19:00,2019-08-17 20:39:00,2530,633
79,D,2019-08-17 09:35:00,SU,104,I,IAD,333,302,292,10,3,10,Wide_Body,6,13,1800,away,2019-08-17 08:10:00,2019-08-17 09:30:00,2350,594
80,A,2019-08-17 04:25:00,8L,881,I,KMG,333,303,292,48,2,11,Wide_Body,3,13,1800,jetbridge,2019-08-17 04:45:00,2019-08-17 05:45:00,2100,1034
81,D,2019-08-17 18:45:00,CA,910,I,PEK,333,301,290,78,2,11,Wide_Body,5,13,1800,away,2019-08-17 17:19:00,2019-08-17 18:39:00,2680,1017
82,A,2019-08-17 04:20:00,SU,2549,I,TFS,333,296,290,55,2,6,Wide_Body,4,13,1800,jetbridge,2019-08-17 04:41:00,2019-08-17 05:41:00,2130,631
83,D,2019-08-17 17:55:00,EO,443,I,SJW,763,290,289,80,2,1,Wide_Body,4,13,1800,away,2019-08-17 16:30:00,2019-08-17 17:50:00,2710,871
84,D,2019-08-17 20:45:00,SU,1870,I,TAS,333,296,288,2,3,8,Wide_Body,6,13,1800,away,2019-08-17 19:20:00,2019-08-17 20:40:00,2590,629
85,D,2019-08-17 06:15:00,8L,882,I,KMG,333,303,288,58,2,15,Wide_Body,5,13,1800,jetbridge,2019-08-17 04:54:00,2019-08-17 05:54:00,2130,1035
86,D,2019-08-17 18:40:00,SU,504,I,TLV,333,296,286,11,3,10,Wide_Body,5,13,1800,away,2019-08-17 17:14:00,2019-08-17 18:34:00,2380,626
87,D,2019-08-17 19:40:00,SU,122,I,JFK,333,296,285,5,3,11,Wide_Body,5,13,1800,away,2019-08-17 18:13:00,2019-08-17 19:33:00,2590,612
88,A,2019-08-17 12:45:00,EO,440,I,TYN,763,290,285,81,2,5,Wide_Body,2,13,1800,away,2019-08-17 12:50:00,2019-08-17 14:10:00,2770,870
89,A,2019-08-17 11:00:00,SU,1443,D,IKT,333,302,285,2,3,17,Wide_Body,4,13,1800,away,2019-08-17 11:05:00,2019-08-17 12:25:00,2590,599
90,A,2019-08-17 05:25:00,SU,235,I,DEL,333,302,285,8,3,17,Wide_Body,3,13,1800,away,2019-08-17 05:34:00,2019-08-17 06:54:00,2530,597
91,A,2019-08-17 09:05:00,SU,233,I,DEL,333,302,282,11,3,20,Wide_Body,6,13,1800,away,2019-08-17 09:11:00,2019-08-17 10:31:00,2380,596
92,A,2019-08-17 16:25:00,SU,221,I,CAN,333,296,281,45,2,15,Wide_Body,4,13,1800,away,2019-08-17 16:36:00,2019-08-17 17:56:00,2770,617
93,D,2019-08-17 15:35:00,SU,202,I,PEK,333,296,281,4,3,15,Wide_Body,6,13,1800,away,2019-08-17 14:07:00,2019-08-17 15:27:00,2620,614
94,D,2019-08-17 18:50:00,SU,232,I,DEL,333,302,280,81,2,22,Wide_Body,5,13,1800,away,2019-08-17 17:25:00,2019-08-17 18:45:00,2770,595
95,A,2019-08-17 18:05:00,HU,7985,I,PEK,333,292,280,45,5,12,Wide_Body,4,13,1800,away,2019-08-17 18:16:00,2019-08-17 19:36:00,2710,1091
96,A,2019-08-17 16:55:00,CA,909,I,PEK,333,301,280,82,2,21,Wide_Body,5,13,1800,away,2019-08-17 17:02:00,2019-08-17 18:22:00,2770,1016
97,D,2019-08-17 01:00:00,SU,1482,D,KJA,333,296,278,10,3,18,Wide_Body,3,13,1800,away,2019-08-16 23:35:00,2019-08-17 00:55:00,2350,627
98,D,2019-08-17 14:40:00,VN,62,I,HAN,789,274,274,9,3,0,Wide_Body,5,13,1800,away,2019-08-17 13:10:00,2019-08-17 14:30:00,2620,559
99,D,2019-08-17 19:05:00,MU,592,I,PVG,333,298,272,69,2,26,Wide_Body,3,13,1800,away,2019-08-17 17:33:00,2019-08-17 18:53:00,2800,1011
100,D,2019-08-17 01:10:00,EO,1805,I,AYT,763,340,272,77,2,68,Wide_Body,2,13,1800,away,2019-08-16 23:42:00,2019-08-17 01:02:00,2680,1056
101,D,2019-08-17 20:20:00,3U,610,I,CTU,333,301,271,78,2,30,Wide_Body,3,13,1800,away,2019-08-17 18:54:00,2019-08-17 20:14:00,2680,1015
102,A,2019-08-17 18:25:00,3U,609,I,CTU,333,301,271,80,2,30,Wide_Body,6,13,1800,away,2019-08-17 18:30:00,2019-08-17 19:50:00,2710,1014
103,D,2019-08-17 12:15:00,SU,2548,I,TFS,333,302,271,45,5,31,Wide_Body,3,13,1800,away,2019-08-17 10:44:00,2019-08-17 12:04:00,2710,604
104,D,2019-08-17 19:10:00,MU,5010,I,PVG,333,298,270,75,2,28,Wide_Body,6,13,1800,away,2019-08-17 17:42:00,2019-08-17 19:02:00,2800,1013
105,D,2019-08-17 19:55:00,HU,7986,I,PEK,333,292,269,7,5,23,Wide_Body,5,13,1800,away,2019-08-17 18:27:00,2019-08-17 19:47:00,2740,1092
106,A,2019-08-17 05:15:00,SU,253,I,ICN,333,296,266,3,3,30,Wide_Body,3,13,1800,away,2019-08-17 05:23:00,2019-08-17 06:43:00,2560,619
107,D,2019-08-17 21:25:00,SU,1442,D,IKT,333,302,264,1,3,38,Wide_Body,3,13,1800,away,2019-08-17 20:00:00,2019-08-17 21:20:00,2410,598
108,A,2019-08-17 17:25:00,MU,591,I,PVG,333,298,262,44,2,36,Wide_Body,4,13,1800,away,2019-08-17 17:36:00,2019-08-17 18:56:00,2830,1010
109,D,2019-08-17 19:05:00,SU,220,I,CAN,333,296,258,83,2,38,Wide_Body,3,13,1800,away,2019-08-17 17:38:00,2019-08-17 18:58:00,2830,616
110,A,2019-08-17 17:45:00,SU,2551,I,AMS,77W,402,256,84,2,146,Wide_Body,5,13,1800,away,2019-08-17 17:55:00,2019-08-17 19:15:00,2860,593
111,D,2019-08-17 21:10:00,CZ,656,I,CAN,332,260,255,33,3,5,Wide_Body,5,13,1800,jetbridge,2019-08-17 19:52:00,2019-08-17 20:52:00,2040,1027
112,D,2019-08-17 19:10:00,SU,270,I,BKK,333,296,254,3,3,42,Wide_Body,6,13,1800,away,2019-08-17 17:42:00,2019-08-17 19:02:00,2560,620
113,A,2019-08-17 08:55:00,SU,203,I,PEK,333,296,254,1,3,42,Wide_Body,5,13,1800,away,2019-08-17 09:00:00,2019-08-17 10:20:00,2410,615
114,A,2019-08-17 17:20:00,SU,123,I,JFK,333,296,252,4,3,44,Wide_Body,5,13,1800,away,2019-08-17 17:28:00,2019-08-17 18:48:00,2620,613
115,D,2019-08-17 18:55:00,KE,924,I,ICN,789,269,249,9,3,20,Wide_Body,5,13,1800,away,2019-08-17 17:25:00,2019-08-17 18:45:00,2620,1043
116,A,2019-08-17 12:55:00,EO,496,I,LHW,763,290,249,82,2,41,Wide_Body,4,13,1800,away,2019-08-17 13:02:00,2019-08-17 14:22:00,2770,873
117,D,2019-08-17 21:55:00,SU,320,I,MLE,333,296,246,48,2,50,Wide_Body,5,13,1800,jetbridge,2019-08-17 20:35:00,2019-08-17 21:35:00,2100,624
118,A,2019-08-17 05:30:00,JD,475,I,HGH,332,264,242,78,2,22,Wide_Body,2,13,1800,away,2019-08-17 05:36:00,2019-08-17 06:56:00,2680,896
119,A,2019-08-17 17:15:00,SU,321,I,MLE,333,296,237,42,2,59,Wide_Body,4,13,1800,away,2019-08-17 17:25:00,2019-08-17 18:45:00,2725,625
120,A,2019-08-17 16:00:00,SU,271,I,BKK,333,296,237,75,2,59,Wide_Body,5,13,1800,away,2019-08-17 16:08:00,2019-08-17 17:28:00,2620,621
121,A,2019-08-17 12:05:00,SU,1483,D,KJA,333,296,237,5,3,59,Wide_Body,4,13,1800,away,2019-08-17 12:12:00,2019-08-17 13:32:00,2455,628
122,D,2019-08-17 12:10:00,EO,453,I,CAN,763,290,232,81,2,58,Wide_Body,2,13,1800,away,2019-08-17 10:45:00,2019-08-17 12:05:00,2575,872
123,A,2019-08-17 19:15:00,CZ,655,I,CAN,332,260,228,4,3,32,Wide_Body,4,13,1800,away,2019-08-17 19:23:00,2019-08-17 20:43:00,2485,1026
124,A,2019-08-17 09:00:00,SU,151,I,HAV,332,229,225,2,3,4,Wide_Body,5,13,1800,away,2019-08-17 09:05:00,2019-08-17 10:25:00,2440,608
125,D,2019-08-17 08:55:00,JD,476,I,HGH,332,264,225,78,2,39,Wide_Body,5,13,1800,away,2019-08-17 07:29:00,2019-08-17 08:49:00,2515,897
126,D,2019-08-17 13:40:00,RL,7525,I,GZP,752,224,224,45,2,0,Wide_Body,4,13,1800,away,2019-08-17 12:09:00,2019-08-17 13:29:00,2620,1087
127,D,2019-08-17 09:50:00,SU,2578,I,LHR,333,296,223,3,3,73,Wide_Body,5,13,1800,away,2019-08-17 08:22:00,2019-08-17 09:42:00,2440,632
128,A,2019-08-17 22:00:00,RL,7526,I,GZP,752,224,222,55,2,2,Wide_Body,4,13,1800,jetbridge,2019-08-17 22:21:00,2019-08-17 23:21:00,2130,1088
129,D,2019-08-17 03:05:00,RL,7543,I,DLM,752,224,221,78,2,3,Wide_Body,4,13,1800,away,2019-08-17 01:39:00,2019-08-17 02:59:00,2515,1089
130,A,2019-08-17 11:15:00,RL,7544,I,DLM,752,224,220,78,2,4,Wide_Body,1,13,1800,away,2019-08-17 11:21:00,2019-08-17 12:41:00,2515,1090
131,A,2019-08-17 06:45:00,VN,63,I,HAN,789,274,220,2,3,54,Wide_Body,4,13,1800,away,2019-08-17 06:50:00,2019-08-17 08:10:00,2440,560
132,D,2019-08-17 15:05:00,SU,234,I,DEL,332,229,217,6,3,12,Wide_Body,4,13,1800,away,2019-08-17 13:37:00,2019-08-17 14:57:00,2530,609
133,D,2019-08-17 11:00:00,SU,110,I,MIA,332,229,214,10,3,15,Wide_Body,4,13,1800,away,2019-08-17 09:35:00,2019-08-17 10:55:00,2260,605
134,D,2019-08-17 15:15:00,AF,1045,I,CDG,321,212,209,7,5,3,Narrow_Body,5,13,1550,away,2019-08-17 14:02:00,2019-08-17 15:07:00,2230,1049
135,D,2019-08-17 08:55:00,SU,2380,I,GVA,333,302,209,77,2,93,Wide_Body,5,13,1800,away,2019-08-17 07:27:00,2019-08-17 08:47:00,2530,602
136,D,2019-08-17 18:20:00,EO,147,D,LED,73J,209,206,1,3,3,Narrow_Body,6,13,1550,away,2019-08-17 17:10:00,2019-08-17 18:15:00,1960,713
137,A,2019-08-17 08:40:00,SU,331,I,ULN,332,229,204,8,3,25,Wide_Body,5,13,1800,away,2019-08-17 08:49:00,2019-08-17 10:09:00,2425,611
138,A,2019-08-17 17:00:00,MU,5009,I,PVG,333,298,200,43,2,98,Wide_Body,7,13,1800,away,2019-08-17 17:15:00,2019-08-17 18:35:00,2740,1012
139,A,2019-08-17 16:10:00,EO,188,D,ROV,73J,209,195,4,3,14,Narrow_Body,6,13,1550,away,2019-08-17 16:18:00,2019-08-17 17:23:00,2140,719
140,D,2019-08-17 18:45:00,AF,1745,I,CDG,321,212,194,6,5,18,Narrow_Body,5,13,1550,away,2019-08-17 17:32:00,2019-08-17 18:37:00,2275,1051
141,A,2019-08-17 16:50:00,KE,923,I,ICN,789,269,190,7,3,79,Wide_Body,5,13,1800,away,2019-08-17 16:58:00,2019-08-17 18:18:00,2530,1042
142,D,2019-08-17 07:10:00,SU,150,I,HAV,332,229,190,5,3,39,Wide_Body,5,13,1800,away,2019-08-17 05:43:00,2019-08-17 07:03:00,2455,607
143,D,2019-08-17 17:00:00,FV,6157,D,SIP,73H,189,189,9,3,0,Narrow_Body,7,13,1550,away,2019-08-17 15:45:00,2019-08-17 16:50:00,2155,685
144,A,2019-08-17 14:30:00,FV,6142,D,SIP,73H,189,189,42,3,0,Narrow_Body,5,13,1550,away,2019-08-17 14:40:00,2019-08-17 15:45:00,2290,684
145,A,2019-08-17 10:50:00,EO,178,D,LED,73J,209,189,5,3,20,Narrow_Body,4,13,1550,away,2019-08-17 10:57:00,2019-08-17 12:02:00,2110,717
146,A,2019-08-17 13:55:00,FV,6138,D,KRR,73H,189,188,44,3,1,Narrow_Body,5,13,1550,away,2019-08-17 14:06:00,2019-08-17 15:11:00,2365,680
147,A,2019-08-17 12:15:00,SU,111,I,MIA,332,229,188,4,3,41,Wide_Body,3,13,1800,away,2019-08-17 12:23:00,2019-08-17 13:43:00,2485,606
148,A,2019-08-17 09:45:00,FV,6158,D,SIP,73H,189,188,3,3,1,Narrow_Body,6,13,1550,away,2019-08-17 09:53:00,2019-08-17 10:58:00,2095,686
149,D,2019-08-17 00:50:00,RL,7745,I,PMI,738,189,188,78,2,1,Narrow_Body,2,13,1550,away,2019-08-16 23:39:00,2019-08-17 00:44:00,2170,711
150,A,2019-08-17 17:50:00,N4,278,I,EVN,73H,189,186,59,2,3,Narrow_Body,6,13,1550,jetbridge,2019-08-17 18:11:00,2019-08-17 19:01:00,1880,657
151,D,2019-08-17 09:25:00,FV,6187,D,MRV,73H,189,186,5,3,3,Narrow_Body,4,13,1550,away,2019-08-17 08:13:00,2019-08-17 09:18:00,2110,699
152,A,2019-08-17 15:50:00,N4,302,D,BQS,772,440,185,6,3,255,Wide_Body,5,13,1800,away,2019-08-17 15:58:00,2019-08-17 17:18:00,2530,874
153,A,2019-08-17 15:20:00,FV,6188,D,MRV,73H,189,185,14,3,4,Narrow_Body,3,13,1550,jetbridge,2019-08-17 15:33:00,2019-08-17 16:23:00,1640,700
154,D,2019-08-17 11:40:00,N4,245,D,AER,73H,189,185,4,3,4,Narrow_Body,2,13,1550,away,2019-08-17 10:27:00,2019-08-17 11:32:00,2140,654
155,D,2019-08-17 10:40:00,N4,203,I,FEG,73H,189,185,77,2,4,Narrow_Body,4,13,1550,away,2019-08-17 09:27:00,2019-08-17 10:32:00,2185,647
156,A,2019-08-17 08:10:00,FV,6164,D,KGD,73H,189,185,4,3,4,Narrow_Body,5,13,1550,away,2019-08-17 08:18:00,2019-08-17 09:23:00,2140,690
157,D,2019-08-17 23:55:00,N4,171,I,KSQ,73H,189,184,59,2,5,Narrow_Body,7,13,1550,jetbridge,2019-08-17 22:44:00,2019-08-17 23:34:00,1880,640
158,A,2019-08-17 22:20:00,FV,6184,D,ROV,73H,189,184,10,3,5,Narrow_Body,5,13,1550,away,2019-08-17 22:25:00,2019-08-17 23:30:00,1915,696
159,D,2019-08-17 07:15:00,EO,177,D,LED,73J,209,184,13,3,25,Narrow_Body,7,13,1550,jetbridge,2019-08-17 06:15:00,2019-08-17 07:05:00,1550,716
160,D,2019-08-17 21:45:00,SU,1882,I,FRU,32B,183,183,10,3,0,Narrow_Body,5,13,1550,away,2019-08-17 20:35:00,2019-08-17 21:40:00,1915,781
161,A,2019-08-17 20:00:00,EO,616,D,AER,73H,189,183,5,3,6,Narrow_Body,6,13,1550,away,2019-08-17 20:07:00,2019-08-17 21:12:00,2110,670
162,D,2019-08-17 11:00:00,SU,2522,I,ALC,32B,183,183,5,3,0,Narrow_Body,4,13,1550,away,2019-08-17 09:48:00,2019-08-17 10:53:00,2110,834
163,A,2019-08-17 07:35:00,SU,1947,I,ALA,32B,183,183,80,2,0,Narrow_Body,5,13,1550,away,2019-08-17 07:40:00,2019-08-17 08:45:00,2185,788
164,A,2019-08-17 03:05:00,OK,898,I,PRG,73H,189,183,48,2,6,Narrow_Body,4,13,1550,jetbridge,2019-08-17 03:25:00,2019-08-17 04:15:00,1850,677
165,A,2019-08-17 23:20:00,SU,1863,I,EVN,32B,183,182,11,3,1,Narrow_Body,3,13,1550,away,2019-08-17 23:26:00,2019-08-18 00:31:00,1945,778
166,D,2019-08-17 16:15:00,SU,1862,I,EVN,32B,183,182,2,3,1,Narrow_Body,4,13,1550,away,2019-08-17 15:05:00,2019-08-17 16:10:00,2095,777
167,A,2019-08-17 11:10:00,SU,1943,I,ALA,32B,183,182,82,2,1,Narrow_Body,2,13,1550,away,2019-08-17 11:17:00,2019-08-17 12:22:00,2245,786
168,A,2019-08-17 11:05:00,RL,7746,I,PMI,738,189,182,75,2,7,Narrow_Body,3,13,1550,away,2019-08-17 11:13:00,2019-08-17 12:18:00,2275,712
169,D,2019-08-17 09:50:00,SU,2390,I,ZRH,32B,183,182,46,2,1,Narrow_Body,5,13,1550,jetbridge,2019-08-17 08:37:00,2019-08-17 09:27:00,1940,819
170,D,2019-08-17 09:35:00,SU,2648,I,BCN,32B,183,182,9,3,1,Narrow_Body,6,13,1550,away,2019-08-17 08:20:00,2019-08-17 09:25:00,2155,844
171,A,2019-08-17 07:15:00,SU,1451,D,KEJ,32B,183,182,6,3,1,Narrow_Body,7,13,1550,away,2019-08-17 07:23:00,2019-08-17 08:28:00,2185,774
172,A,2019-08-17 17:35:00,SU,2639,I,BCN,32B,183,181,74,3,2,Narrow_Body,5,13,1550,away,2019-08-17 17:44:00,2019-08-17 18:49:00,2440,843
173,D,2019-08-17 15:10:00,SU,1324,D,MMK,32B,183,181,205,1,2,Narrow_Body,5,13,1550,away,2019-08-17 14:00:00,2019-08-17 15:05:00,2095,771
174,D,2019-08-17 13:40:00,SU,2582,I,LHR,32B,183,181,6,3,2,Narrow_Body,4,13,1550,away,2019-08-17 12:27:00,2019-08-17 13:32:00,2185,836
175,A,2019-08-17 09:40:00,N4,162,D,KRR,73H,189,181,9,3,8,Narrow_Body,5,13,1550,away,2019-08-17 09:50:00,2019-08-17 10:55:00,2155,639
176,D,2019-08-17 01:35:00,SU,500,I,TLV,32B,183,181,11,3,2,Narrow_Body,4,13,1550,away,2019-08-17 00:24:00,2019-08-17 01:29:00,1945,760
177,A,2019-08-17 19:50:00,SU,2649,I,BCN,32B,183,180,9,3,3,Narrow_Body,6,13,1550,away,2019-08-17 20:00:00,2019-08-17 21:05:00,2155,845
178,D,2019-08-17 16:45:00,SU,2048,I,SPU,32B,183,180,19,3,3,Narrow_Body,6,13,1550,jetbridge,2019-08-17 15:45:00,2019-08-17 16:35:00,1550,798
179,D,2019-08-17 12:10:00,SU,2514,I,BCN,32B,183,180,6,3,3,Narrow_Body,2,13,1550,away,2019-08-17 10:57:00,2019-08-17 12:02:00,2185,832
180,A,2019-08-17 10:25:00,SU,1537,D,TOF,32B,183,180,7,3,3,Narrow_Body,4,13,1550,away,2019-08-17 10:33:00,2019-08-17 11:38:00,2185,776
181,A,2019-08-17 07:50:00,N4,478,I,EVN,73H,189,180,81,2,9,Narrow_Body,6,13,1550,away,2019-08-17 07:55:00,2019-08-17 09:00:00,2230,664
182,D,2019-08-17 07:20:00,SU,2638,I,BCN,32B,183,180,4,3,3,Narrow_Body,5,13,1550,away,2019-08-17 06:07:00,2019-08-17 07:12:00,2140,842
183,D,2019-08-17 23:50:00,SU,1956,I,TSE,32B,183,179,46,2,4,Narrow_Body,7,13,1550,jetbridge,2019-08-17 22:37:00,2019-08-17 23:27:00,1940,789
184,A,2019-08-17 15:35:00,SU,2307,I,FRA,32B,183,179,7,3,4,Narrow_Body,6,13,1550,away,2019-08-17 15:43:00,2019-08-17 16:48:00,2185,816
185,A,2019-08-17 18:00:00,SU,2391,I,ZRH,32B,183,178,70,2,5,Narrow_Body,4,13,1550,away,2019-08-17 18:15:00,2019-08-17 19:20:00,2395,820
186,A,2019-08-17 15:40:00,SU,2185,I,VIE,32B,183,178,42,5,5,Narrow_Body,2,13,1550,away,2019-08-17 15:50:00,2019-08-17 16:55:00,2245,812
187,D,2019-08-17 07:55:00,SU,2306,I,FRA,32B,183,178,9,3,5,Narrow_Body,1,13,1550,away,2019-08-17 06:40:00,2019-08-17 07:45:00,2155,815
188,A,2019-08-17 07:50:00,FB,643,I,BOJ,320,180,178,82,2,2,Narrow_Body,6,13,1550,away,2019-08-17 07:57:00,2019-08-17 09:02:00,2245,1006
189,D,2019-08-17 06:55:00,SU,2052,I,TIV,32B,183,178,6,3,5,Narrow_Body,5,13,1550,away,2019-08-17 05:42:00,2019-08-17 06:47:00,2185,800
190,D,2019-08-17 14:45:00,RL,7545,I,GZP,738,189,177,80,2,12,Narrow_Body,4,13,1550,away,2019-08-17 13:35:00,2019-08-17 14:40:00,2185,710
191,A,2019-08-17 14:15:00,AF,1044,I,CDG,321,212,177,43,5,35,Narrow_Body,5,13,1550,away,2019-08-17 14:30:00,2019-08-17 15:35:00,2395,1048
192,D,2019-08-17 13:20:00,SU,508,I,TLV,32B,183,177,7,3,6,Narrow_Body,4,13,1550,away,2019-08-17 12:07:00,2019-08-17 13:12:00,2185,762
193,D,2019-08-17 10:50:00,FV,6637,I,ORY,73H,189,177,6,3,12,Narrow_Body,4,13,1550,away,2019-08-17 09:37:00,2019-08-17 10:42:00,2185,705
194,A,2019-08-17 07:25:00,SU,401,I,CAI,32B,183,177,7,3,6,Narrow_Body,5,13,1550,away,2019-08-17 07:33:00,2019-08-17 08:38:00,2185,759
195,D,2019-08-17 06:40:00,SU,2500,I,MAD,32B,183,177,2,3,6,Narrow_Body,5,13,1550,away,2019-08-17 05:30:00,2019-08-17 06:35:00,2095,828
196,A,2019-08-17 22:15:00,SU,2515,I,BCN,32B,183,176,1,3,7,Narrow_Body,4,13,1550,away,2019-08-17 22:20:00,2019-08-17 23:25:00,1960,833
197,D,2019-08-17 21:00:00,SU,1946,I,ALA,32B,183,176,6,3,7,Narrow_Body,5,13,1550,away,2019-08-17 19:47:00,2019-08-17 20:52:00,2185,787
198,A,2019-08-17 20:35:00,SU,2127,I,HER,32B,183,176,3,5,7,Narrow_Body,5,13,1550,away,2019-08-17 20:43:00,2019-08-17 21:48:00,2230,808
199,D,2019-08-17 19:20:00,SU,2512,I,BCN,32B,183,176,2,3,7,Narrow_Body,5,13,1550,away,2019-08-17 18:10:00,2019-08-17 19:15:00,2095,830
200,D,2019-08-17 17:00:00,KL,904,I,AMS,73H,186,176,44,5,10,Narrow_Body,7,13,1550,away,2019-08-17 15:44:00,2019-08-17 16:49:00,2275,1038
201,A,2019-08-17 12:00:00,SU,501,I,TLV,32B,183,176,42,3,7,Narrow_Body,5,13,1550,away,2019-08-17 12:10:00,2019-08-17 13:15:00,2290,761
202,D,2019-08-17 07:35:00,SU,2452,I,CDG,32B,183,176,7,3,7,Narrow_Body,5,13,1550,away,2019-08-17 06:22:00,2019-08-17 07:27:00,2185,823
203,A,2019-08-17 23:10:00,SU,2583,I,LHR,32B,183,175,8,3,8,Narrow_Body,3,13,1550,away,2019-08-17 23:19:00,2019-08-18 00:24:00,2080,837
204,A,2019-08-17 22:05:00,EO,148,D,LED,73J,209,175,11,3,34,Narrow_Body,4,13,1550,away,2019-08-17 22:11:00,2019-08-17 23:16:00,1945,714
205,A,2019-08-17 17:50:00,SU,2501,I,MAD,32B,183,175,79,3,8,Narrow_Body,6,13,1550,away,2019-08-17 17:58:00,2019-08-17 19:03:00,2455,829
206,D,2019-08-17 11:45:00,SU,2462,I,CDG,32B,183,175,42,3,8,Narrow_Body,6,13,1550,away,2019-08-17 10:30:00,2019-08-17 11:35:00,2290,826
207,D,2019-08-17 22:15:00,SU,1198,D,KZN,32B,183,174,205,1,9,Narrow_Body,4,13,1550,away,2019-08-17 21:05:00,2019-08-17 22:10:00,2095,770
208,D,2019-08-17 21:25:00,SU,1450,D,KEJ,32B,183,174,7,3,9,Narrow_Body,3,13,1550,away,2019-08-17 20:12:00,2019-08-17 21:17:00,2185,773
209,A,2019-08-17 17:15:00,SU,2111,I,ATH,32B,183,174,76,2,9,Narrow_Body,4,13,1550,away,2019-08-17 17:24:00,2019-08-17 18:29:00,2395,803
210,A,2019-08-17 05:45:00,EO,180,D,CEK,73H,189,174,42,3,15,Narrow_Body,3,13,1550,away,2019-08-17 05:55:00,2019-08-17 07:00:00,2290,643
211,A,2019-08-17 22:05:00,SU,2523,I,ALC,32B,183,173,2,3,10,Narrow_Body,4,13,1550,away,2019-08-17 22:10:00,2019-08-17 23:15:00,2095,835
212,D,2019-08-17 09:05:00,SU,2184,I,VIE,32B,183,173,45,5,10,Narrow_Body,6,13,1550,away,2019-08-17 07:49:00,2019-08-17 08:54:00,2230,811
213,D,2019-08-17 08:45:00,FB,644,I,BOJ,320,180,173,75,2,7,Narrow_Body,5,13,1550,away,2019-08-17 07:32:00,2019-08-17 08:37:00,2275,1007
214,D,2019-08-17 00:55:00,SU,1942,I,ALA,32B,183,173,80,2,10,Narrow_Body,4,13,1550,away,2019-08-16 23:45:00,2019-08-17 00:50:00,2185,785
215,D,2019-08-17 19:55:00,SU,2414,I,MXP,32B,183,172,82,3,11,Narrow_Body,5,13,1550,away,2019-08-17 18:43:00,2019-08-17 19:48:00,2470,821
216,D,2019-08-17 19:45:00,SU,2192,I,AMS,32B,183,172,76,5,11,Narrow_Body,5,13,1550,away,2019-08-17 18:31:00,2019-08-17 19:36:00,2575,813
217,D,2019-08-17 18:50:00,SU,274,I,HKT,333,296,172,61,2,124,Wide_Body,5,13,1800,away,2019-08-17 17:13:00,2019-08-17 18:33:00,2800,622
218,A,2019-08-17 16:15:00,OK,894,I,PRG,73H,189,172,83,2,17,Narrow_Body,4,13,1550,away,2019-08-17 16:22:00,2019-08-17 17:27:00,2290,675
219,A,2019-08-17 23:05:00,SU,509,I,TLV,32B,183,171,3,3,12,Narrow_Body,3,13,1550,away,2019-08-17 23:13:00,2019-08-18 00:18:00,2095,763
220,D,2019-08-17 18:35:00,SU,330,I,ULN,332,229,171,71,3,58,Wide_Body,3,13,1800,away,2019-08-17 17:03:00,2019-08-17 18:23:00,3055,610
221,D,2019-08-17 17:05:00,OK,895,I,PRG,73H,189,171,78,2,18,Narrow_Body,6,13,1550,away,2019-08-17 15:54:00,2019-08-17 16:59:00,2170,676
222,D,2019-08-17 16:00:00,FB,660,I,BOJ,320,180,171,77,2,9,Narrow_Body,5,13,1550,away,2019-08-17 14:47:00,2019-08-17 15:52:00,2185,1009
223,D,2019-08-17 07:45:00,SU,1138,D,AER,32B,183,171,205,1,12,Narrow_Body,6,13,1550,away,2019-08-17 06:35:00,2019-08-17 07:40:00,2095,764
224,A,2019-08-17 06:55:00,SU,1937,I,KGF,32B,183,171,83,2,12,Narrow_Body,5,13,1550,away,2019-08-17 07:02:00,2019-08-17 08:07:00,2290,784
225,D,2019-08-17 00:55:00,SU,1536,D,TOF,32B,183,171,1,3,12,Narrow_Body,4,13,1550,away,2019-08-16 23:45:00,2019-08-17 00:50:00,1960,775
226,D,2019-08-17 23:30:00,EO,173,D,SVX,73J,209,170,5,3,39,Narrow_Body,5,13,1550,away,2019-08-17 22:18:00,2019-08-17 23:23:00,2110,715
227,A,2019-08-17 18:10:00,SU,2143,I,AYT,32B,183,170,68,3,13,Narrow_Body,4,13,1550,away,2019-08-17 18:21:00,2019-08-17 19:26:00,2725,810
228,A,2019-08-17 17:45:00,AF,1744,I,CDG,321,212,170,73,5,42,Narrow_Body,5,13,1550,away,2019-08-17 17:59:00,2019-08-17 19:04:00,2725,1050
229,A,2019-08-17 16:20:00,SU,260,I,CDG,32B,183,170,74,3,13,Narrow_Body,3,13,1550,away,2019-08-17 16:29:00,2019-08-17 17:34:00,2440,757
230,D,2019-08-17 07:10:00,OK,899,I,PRG,73H,189,170,80,2,19,Narrow_Body,5,13,1550,away,2019-08-17 06:00:00,2019-08-17 07:05:00,2185,678
231,D,2019-08-17 06:55:00,EO,615,D,AER,73H,189,170,44,3,19,Narrow_Body,5,13,1550,away,2019-08-17 05:39:00,2019-08-17 06:44:00,2365,669
232,A,2019-08-17 05:35:00,SU,2513,I,BCN,32B,183,170,75,3,13,Narrow_Body,3,13,1550,away,2019-08-17 05:43:00,2019-08-17 06:48:00,2410,831
233,A,2019-08-17 05:25:00,SU,2605,I,MAD,32B,183,170,43,3,13,Narrow_Body,3,13,1550,away,2019-08-17 05:40:00,2019-08-17 06:45:00,2440,841
234,A,2019-08-17 18:45:00,SU,2073,I,LCA,321,170,169,42,5,1,Narrow_Body,5,13,1550,away,2019-08-17 18:55:00,2019-08-17 20:00:00,2245,849
235,A,2019-08-17 17:35:00,N4,246,D,AER,73H,189,169,72,3,20,Narrow_Body,5,13,1550,away,2019-08-17 17:49:00,2019-08-17 18:54:00,2725,655
236,D,2019-08-17 14:35:00,N4,377,I,EVN,73H,189,169,75,2,20,Narrow_Body,4,13,1550,away,2019-08-17 13:22:00,2019-08-17 14:27:00,2275,661
237,A,2019-08-17 07:40:00,SU,1883,I,FRU,32B,183,169,42,3,14,Narrow_Body,5,13,1550,away,2019-08-17 07:50:00,2019-08-17 08:55:00,2290,782
238,A,2019-08-17 21:10:00,N4,204,I,FEG,73H,189,168,58,2,21,Narrow_Body,5,13,1550,jetbridge,2019-08-17 21:31:00,2019-08-17 22:21:00,1880,648
239,D,2019-08-17 18:15:00,SU,2604,I,MAD,32B,183,168,68,3,15,Narrow_Body,4,13,1550,away,2019-08-17 16:59:00,2019-08-17 18:04:00,2725,840
240,D,2019-08-17 10:30:00,N4,277,I,EVN,73H,189,168,80,2,21,Narrow_Body,4,13,1550,away,2019-08-17 09:20:00,2019-08-17 10:25:00,2185,656
241,D,2019-08-17 09:35:00,SU,2142,I,AYT,32B,183,168,83,2,15,Narrow_Body,6,13,1550,away,2019-08-17 08:23:00,2019-08-17 09:28:00,2290,809
242,A,2019-08-17 21:05:00,SU,1325,D,MMK,32B,183,167,217,1,16,Narrow_Body,4,13,1550,away,2019-08-17 21:10:00,2019-08-17 22:15:00,2095,772
243,A,2019-08-17 13:35:00,FV,6162,D,KGD,73H,189,167,74,3,22,Narrow_Body,4,13,1550,away,2019-08-17 13:44:00,2019-08-17 14:49:00,2440,688
244,A,2019-08-17 10:10:00,N4,294,D,KJA,73H,189,167,44,3,22,Narrow_Body,5,13,1550,away,2019-08-17 10:21:00,2019-08-17 11:26:00,2365,660
245,D,2019-08-17 09:15:00,SU,1190,D,KZN,32B,183,167,205,1,16,Narrow_Body,6,13,1550,away,2019-08-17 08:05:00,2019-08-17 09:10:00,2095,766
246,D,2019-08-17 19:35:00,SU,2460,I,CDG,321,170,166,62,3,4,Narrow_Body,5,13,1550,away,2019-08-17 18:12:00,2019-08-17 19:17:00,2755,860
247,D,2019-08-17 08:05:00,SU,2110,I,ATH,32B,183,166,69,2,17,Narrow_Body,5,13,1550,away,2019-08-17 06:48:00,2019-08-17 07:53:00,2305,802
248,A,2019-08-17 05:30:00,N4,730,D,REN,73H,189,166,74,3,23,Narrow_Body,2,13,1550,away,2019-08-17 05:39:00,2019-08-17 06:44:00,2440,674
249,A,2019-08-17 05:00:00,SU,2415,I,MXP,32B,183,166,11,3,17,Narrow_Body,5,13,1550,away,2019-08-17 05:06:00,2019-08-17 06:11:00,1945,822
250,D,2019-08-17 11:50:00,EO,187,D,ROV,73J,209,165,43,3,44,Narrow_Body,2,13,1550,away,2019-08-17 10:30:00,2019-08-17 11:35:00,2440,718
251,D,2019-08-17 05:00:00,AZ,595,I,FCO,320,180,165,1,5,15,Narrow_Body,5,13,1550,away,2019-08-17 03:50:00,2019-08-17 04:55:00,2140,1004
252,A,2019-08-17 00:25:00,SU,2125,I,SKG,32B,183,165,8,3,18,Narrow_Body,3,13,1550,away,2019-08-17 00:34:00,2019-08-17 01:39:00,2080,806
253,D,2019-08-17 19:10:00,SU,263,I,LHR,321,170,162,67,3,8,Narrow_Body,6,13,1550,away,2019-08-17 17:48:00,2019-08-17 18:53:00,2770,846
254,A,2019-08-17 18:55:00,SU,2471,I,NCE,321,170,162,44,5,8,Narrow_Body,5,13,1550,away,2019-08-17 19:06:00,2019-08-17 20:11:00,2275,862
255,A,2019-08-17 17:25:00,SU,2381,I,GVA,333,302,161,64,2,141,Wide_Body,4,13,1800,away,2019-08-17 17:44:00,2019-08-17 19:04:00,2860,603
256,D,2019-08-17 16:40:00,AZ,549,I,FCO,320,180,161,34,5,19,Narrow_Body,5,13,1550,jetbridge,2019-08-17 15:35:00,2019-08-17 16:25:00,1700,1001
257,A,2019-08-17 16:35:00,SU,2581,I,LHR,321,170,161,79,3,9,Narrow_Body,5,13,1550,away,2019-08-17 16:43:00,2019-08-17 17:48:00,2455,864
258,A,2019-08-17 04:20:00,SU,2113,I,ATH,32B,183,161,59,2,22,Narrow_Body,4,13,1550,jetbridge,2019-08-17 04:41:00,2019-08-17 05:31:00,1880,805
259,A,2019-08-17 22:40:00,SU,2361,I,NCE,321,170,160,7,5,10,Narrow_Body,4,13,1550,away,2019-08-17 22:48:00,2019-08-17 23:53:00,2065,858
260,A,2019-08-17 18:20:00,U6,440,D,SIP,320,160,160,205,1,0,Narrow_Body,6,13,1550,away,2019-08-17 18:25:00,2019-08-17 19:30:00,1945,3
261,D,2019-08-17 10:05:00,SU,2454,I,CDG,32B,183,160,7,3,23,Narrow_Body,3,13,1550,away,2019-08-17 08:52:00,2019-08-17 09:57:00,2035,824
262,D,2019-08-17 11:55:00,U6,439,D,SVX,320,160,159,205,1,1,Narrow_Body,2,13,1550,away,2019-08-17 10:45:00,2019-08-17 11:50:00,1945,2
263,A,2019-08-17 04:30:00,SU,2017,I,PRG,32B,183,159,10,5,24,Narrow_Body,3,13,1550,away,2019-08-17 04:35:00,2019-08-17 05:40:00,1945,794
264,A,2019-08-17 00:25:00,SU,2047,I,SPU,32B,183,159,2,3,24,Narrow_Body,3,13,1550,away,2019-08-17 00:30:00,2019-08-17 01:35:00,1945,797
265,D,2019-08-17 23:35:00,EO,179,D,CEK,73H,189,158,4,3,31,Narrow_Body,5,13,1550,away,2019-08-17 22:22:00,2019-08-17 23:27:00,2005,642
266,A,2019-08-17 22:00:00,SU,27,D,LED,32A,158,158,89,1,0,Narrow_Body,4,13,1550,away,2019-08-17 22:05:00,2019-08-17 23:10:00,1975,145
267,D,2019-08-17 21:40:00,SU,1950,I,CIT,32A,158,158,78,2,0,Narrow_Body,4,13,1550,away,2019-08-17 20:29:00,2019-08-17 21:34:00,2005,445
268,D,2019-08-17 21:35:00,SU,1172,D,ASF,32A,158,158,89,1,0,Narrow_Body,6,13,1550,away,2019-08-17 20:25:00,2019-08-17 21:30:00,1975,239
269,D,2019-08-17 19:35:00,SU,2316,I,SXF,32A,158,158,65,3,0,Narrow_Body,5,13,1550,away,2019-08-17 18:14:00,2019-08-17 19:19:00,2575,497
270,A,2019-08-17 17:20:00,SU,21,D,LED,32A,158,158,217,1,0,Narrow_Body,5,13,1550,away,2019-08-17 17:25:00,2019-08-17 18:30:00,1945,139
271,D,2019-08-17 15:35:00,SU,1248,D,REN,73H,158,158,217,1,0,Narrow_Body,6,13,1550,away,2019-08-17 14:25:00,2019-08-17 15:30:00,1945,276
272,D,2019-08-17 15:25:00,SU,2314,I,SXF,32A,158,158,78,3,0,Narrow_Body,5,13,1550,away,2019-08-17 14:14:00,2019-08-17 15:19:00,2215,495
273,A,2019-08-17 14:50:00,SU,1499,D,GRV,32A,158,158,89,1,0,Narrow_Body,6,13,1550,away,2019-08-17 14:55:00,2019-08-17 16:00:00,1975,361
274,D,2019-08-17 14:20:00,SU,1232,D,UFA,32A,158,158,217,1,0,Narrow_Body,3,13,1550,away,2019-08-17 13:10:00,2019-08-17 14:15:00,1945,270
275,A,2019-08-17 13:30:00,SU,1305,D,MRV,32A,158,158,89,1,0,Narrow_Body,5,13,1550,away,2019-08-17 13:35:00,2019-08-17 14:40:00,1975,297
276,A,2019-08-17 12:55:00,SU,1285,D,KRR,73H,158,158,190,1,0,Narrow_Body,4,13,1550,away,2019-08-17 13:01:00,2019-08-17 14:06:00,1975,291
277,D,2019-08-17 12:20:00,SU,1122,D,AER,73H,158,158,217,1,0,Narrow_Body,3,13,1550,away,2019-08-17 11:10:00,2019-08-17 12:15:00,1945,211
278,A,2019-08-17 11:20:00,SU,1001,D,KGD,73H,158,158,89,1,0,Narrow_Body,5,13,1550,away,2019-08-17 11:25:00,2019-08-17 12:30:00,1975,174
279,D,2019-08-17 11:20:00,SU,2152,I,DUS,32A,158,158,75,3,0,Narrow_Body,5,13,1550,away,2019-08-17 10:07:00,2019-08-17 11:12:00,2185,481
280,A,2019-08-17 10:25:00,SU,1307,D,OVB,73H,158,158,190,1,0,Narrow_Body,4,13,1550,away,2019-08-17 10:31:00,2019-08-17 11:36:00,1975,299
281,D,2019-08-17 09:40:00,SU,12,D,LED,73H,158,158,217,1,0,Narrow_Body,5,13,1550,away,2019-08-17 08:30:00,2019-08-17 09:35:00,1945,130
282,D,2019-08-17 08:30:00,SU,2202,I,HEL,321,170,158,44,3,12,Narrow_Body,4,13,1550,away,2019-08-17 07:14:00,2019-08-17 08:19:00,2185,855
283,D,2019-08-17 08:15:00,SU,520,I,DXB,73H,158,158,3,5,0,Narrow_Body,6,13,1550,away,2019-08-17 07:02:00,2019-08-17 08:07:00,2065,169
284,D,2019-08-17 08:00:00,SU,2480,I,NAP,73H,158,158,74,3,0,Narrow_Body,5,13,1550,away,2019-08-17 06:46:00,2019-08-17 07:51:00,2215,525
285,A,2019-08-17 07:25:00,SU,1633,D,SIP,32A,158,158,89,1,0,Narrow_Body,5,13,1550,away,2019-08-17 07:30:00,2019-08-17 08:35:00,1975,403
286,A,2019-08-17 07:10:00,SU,1481,D,KJA,32A,158,158,217,1,0,Narrow_Body,5,13,1550,away,2019-08-17 07:15:00,2019-08-17 08:20:00,1945,355
287,A,2019-08-17 07:00:00,SU,1647,D,NJC,32A,158,158,5,3,0,Narrow_Body,4,13,1550,away,2019-08-17 07:07:00,2019-08-17 08:12:00,1975,413
288,A,2019-08-17 05:00:00,SU,1627,D,SIP,73H,158,158,205,1,0,Narrow_Body,5,13,1550,away,2019-08-17 05:05:00,2019-08-17 06:10:00,1945,399
289,A,2019-08-17 02:50:00,SU,2339,I,STR,32A,158,158,11,3,0,Narrow_Body,3,13,1550,away,2019-08-17 02:56:00,2019-08-17 04:01:00,1855,508
290,D,2019-08-17 00:45:00,N4,477,I,EVN,73H,189,158,81,2,31,Narrow_Body,3,13,1550,away,2019-08-16 23:35:00,2019-08-17 00:40:00,2035,663
291,A,2019-08-17 23:55:00,SU,1659,D,SIP,32A,158,157,205,1,1,Narrow_Body,7,13,1550,away,2019-08-18 00:00:00,2019-08-18 01:05:00,1945,417
292,D,2019-08-17 23:25:00,FV,6163,D,KGD,73H,189,157,8,3,32,Narrow_Body,6,13,1550,away,2019-08-17 22:11:00,2019-08-17 23:16:00,1975,689
293,D,2019-08-17 22:40:00,SU,1876,I,BHK,32A,158,157,6,3,1,Narrow_Body,4,13,1550,away,2019-08-17 21:27:00,2019-08-17 22:32:00,2035,438
294,A,2019-08-17 20:40:00,SU,1445,D,IKT,73H,158,157,190,1,1,Narrow_Body,5,13,1550,away,2019-08-17 20:46:00,2019-08-17 21:51:00,1975,341
295,A,2019-08-17 19:35:00,SU,1183,D,VOG,73H,158,157,205,1,1,Narrow_Body,5,13,1550,away,2019-08-17 19:40:00,2019-08-17 20:45:00,1945,244
296,A,2019-08-17 19:20:00,SU,1413,D,SVX,32A,158,157,217,1,1,Narrow_Body,5,13,1550,away,2019-08-17 19:25:00,2019-08-17 20:30:00,1945,321
297,A,2019-08-17 18:50:00,SU,1487,D,KJA,73H,158,157,89,1,1,Narrow_Body,5,13,1550,away,2019-08-17 18:55:00,2019-08-17 20:00:00,1975,357
298,A,2019-08-17 18:35:00,SU,1433,D,BAX,32A,158,157,43,3,1,Narrow_Body,3,13,1550,away,2019-08-17 18:50:00,2019-08-17 19:55:00,2275,335
299,A,2019-08-17 18:20:00,SU,1941,I,ALA,73H,158,157,61,2,1,Narrow_Body,6,13,1550,away,2019-08-17 18:37:00,2019-08-17 19:42:00,2305,444
300,A,2019-08-17 17:05:00,SU,1117,D,AER,32A,158,157,191,3,1,Narrow_Body,6,13,1550,away,2019-08-17 17:11:00,2019-08-17 18:16:00,2575,206
301,A,2019-08-17 15:55:00,SU,1463,D,OVB,73H,158,157,205,1,1,Narrow_Body,6,13,1550,away,2019-08-17 16:00:00,2019-08-17 17:05:00,1945,349
302,D,2019-08-17 15:30:00,SU,2656,I,FRA,73H,158,157,79,3,1,Narrow_Body,4,13,1550,away,2019-08-17 14:17:00,2019-08-17 15:22:00,2215,551
303,A,2019-08-17 15:15:00,SU,1501,D,TJM,32A,158,157,190,1,1,Narrow_Body,5,13,1550,away,2019-08-17 15:21:00,2019-08-17 16:26:00,1975,363
304,D,2019-08-17 14:50:00,SU,2628,I,BRU,73H,158,157,83,5,1,Narrow_Body,6,13,1550,away,2019-08-17 13:38:00,2019-08-17 14:43:00,2275,549
305,D,2019-08-17 14:30:00,SU,2122,I,HER,73H,158,157,76,3,1,Narrow_Body,5,13,1550,away,2019-08-17 13:16:00,2019-08-17 14:21:00,2245,472
306,A,2019-08-17 14:15:00,SU,1563,D,IKT,73H,158,157,191,1,1,Narrow_Body,5,13,1550,away,2019-08-17 14:21:00,2019-08-17 15:26:00,1975,387
307,D,2019-08-17 13:45:00,SU,1004,D,KGD,32A,158,157,205,1,1,Narrow_Body,3,13,1550,away,2019-08-17 12:35:00,2019-08-17 13:40:00,1945,177
308,A,2019-08-17 13:25:00,SU,1645,D,SIP,32A,158,157,206,1,1,Narrow_Body,5,13,1550,away,2019-08-17 13:30:00,2019-08-17 14:35:00,1975,411
309,A,2019-08-17 12:40:00,SU,1411,D,SVX,32A,158,157,191,1,1,Narrow_Body,4,13,1550,away,2019-08-17 12:46:00,2019-08-17 13:51:00,1975,319
310,A,2019-08-17 12:20:00,SU,1637,D,SIP,32A,158,157,88,1,1,Narrow_Body,3,13,1550,away,2019-08-17 12:25:00,2019-08-17 13:30:00,2005,405
311,D,2019-08-17 11:00:00,SU,2612,I,MXP,73H,158,157,74,3,1,Narrow_Body,4,13,1550,away,2019-08-17 09:46:00,2019-08-17 10:51:00,2215,543
312,D,2019-08-17 10:30:00,SU,1116,D,AER,32A,158,157,42,3,1,Narrow_Body,4,13,1550,away,2019-08-17 09:15:00,2019-08-17 10:20:00,2125,205
313,D,2019-08-17 10:25:00,SU,2210,I,ARN,73H,158,157,44,3,1,Narrow_Body,4,13,1550,away,2019-08-17 09:09:00,2019-08-17 10:14:00,2185,491
314,D,2019-08-17 10:05:00,SU,2470,I,NCE,321,170,157,75,5,13,Narrow_Body,3,13,1550,away,2019-08-17 08:52:00,2019-08-17 09:57:00,2215,861
315,A,2019-08-17 09:15:00,SU,1437,D,SVX,32A,158,157,205,1,1,Narrow_Body,6,13,1550,away,2019-08-17 09:20:00,2019-08-17 10:25:00,1945,337
316,A,2019-08-17 08:55:00,SU,1531,D,TOF,73H,158,157,79,3,1,Narrow_Body,5,13,1550,away,2019-08-17 09:03:00,2019-08-17 10:08:00,2215,377
317,D,2019-08-17 08:25:00,SU,1500,D,TJM,32A,158,157,190,1,1,Narrow_Body,6,13,1550,away,2019-08-17 07:14:00,2019-08-17 08:19:00,1975,362
318,D,2019-08-17 07:20:00,SU,1200,D,PEE,32A,158,157,89,1,1,Narrow_Body,5,13,1550,away,2019-08-17 06:10:00,2019-08-17 07:15:00,1975,254
319,A,2019-08-17 07:15:00,SU,1853,I,GYD,321,170,157,79,5,13,Narrow_Body,7,13,1550,away,2019-08-17 07:23:00,2019-08-17 08:28:00,2215,847
320,A,2019-08-17 06:40:00,SU,1441,D,IKT,73H,158,157,191,1,1,Narrow_Body,5,13,1550,away,2019-08-17 06:46:00,2019-08-17 07:51:00,1975,339
321,A,2019-08-17 05:20:00,SU,1129,D,AER,73H,158,157,217,1,1,Narrow_Body,1,13,1550,away,2019-08-17 05:25:00,2019-08-17 06:30:00,1945,216
322,A,2019-08-17 00:55:00,SU,1119,D,AER,73H,158,157,205,1,1,Narrow_Body,4,13,1550,away,2019-08-17 01:00:00,2019-08-17 02:05:00,1945,208
323,A,2019-08-17 22:35:00,SU,2519,I,PMI,32A,158,156,6,3,2,Narrow_Body,3,13,1550,away,2019-08-17 22:43:00,2019-08-17 23:48:00,2035,532
324,D,2019-08-17 22:25:00,SU,1762,D,OMS,32A,158,156,4,3,2,Narrow_Body,3,13,1550,away,2019-08-17 21:12:00,2019-08-17 22:17:00,2005,421
325,A,2019-08-17 21:35:00,SU,1107,D,KRR,73H,158,156,191,1,2,Narrow_Body,6,13,1550,away,2019-08-17 21:41:00,2019-08-17 22:46:00,1975,202
326,D,2019-08-17 20:05:00,SU,1008,D,KGD,32A,158,156,190,1,2,Narrow_Body,5,13,1550,away,2019-08-17 18:54:00,2019-08-17 19:59:00,1975,181
327,A,2019-08-17 18:30:00,SU,1123,D,AER,73H,158,156,191,1,2,Narrow_Body,6,13,1550,away,2019-08-17 18:36:00,2019-08-17 19:41:00,1975,212
328,A,2019-08-17 18:15:00,SU,1873,I,TAS,73H,158,156,71,3,2,Narrow_Body,4,13,1550,away,2019-08-17 18:27:00,2019-08-17 19:32:00,2425,437
329,A,2019-08-17 17:20:00,SU,1855,I,GYD,73H,158,156,66,5,2,Narrow_Body,5,13,1550,away,2019-08-17 17:38:00,2019-08-17 18:43:00,2515,427
330,D,2019-08-17 17:00:00,SU,2024,I,PRG,32B,183,156,81,5,27,Narrow_Body,7,13,1550,away,2019-08-17 15:50:00,2019-08-17 16:55:00,2215,795
331,D,2019-08-17 16:55:00,AZ,547,I,MXP,320,180,156,36,5,24,Narrow_Body,5,13,1550,jetbridge,2019-08-17 15:46:00,2019-08-17 16:36:00,1820,999
332,A,2019-08-17 15:25:00,SU,1135,D,AER,73H,158,156,191,1,2,Narrow_Body,5,13,1550,away,2019-08-17 15:31:00,2019-08-17 16:36:00,1975,220
333,A,2019-08-17 14:40:00,SU,15,D,LED,32A,158,156,206,1,2,Narrow_Body,5,13,1550,away,2019-08-17 14:45:00,2019-08-17 15:50:00,1975,133
334,D,2019-08-17 14:25:00,SU,2154,I,DUS,32A,158,156,84,3,2,Narrow_Body,4,13,1550,away,2019-08-17 13:10:00,2019-08-17 14:15:00,2245,483
335,D,2019-08-17 14:00:00,SU,1422,D,CEK,32A,158,156,202,1,2,Narrow_Body,5,13,1550,away,2019-08-17 12:49:00,2019-08-17 13:54:00,2005,326
336,D,2019-08-17 10:10:00,SU,2012,I,PRG,32B,183,156,43,5,27,Narrow_Body,5,13,1550,away,2019-08-17 08:50:00,2019-08-17 09:55:00,2245,791
337,A,2019-08-17 09:20:00,SU,1141,D,AER,32A,158,156,89,1,2,Narrow_Body,5,13,1550,away,2019-08-17 09:25:00,2019-08-17 10:30:00,1975,222
338,D,2019-08-17 09:20:00,SU,2312,I,SXF,32A,158,156,74,3,2,Narrow_Body,5,13,1550,away,2019-08-17 08:06:00,2019-08-17 09:11:00,2215,493
339,D,2019-08-17 09:05:00,SU,1134,D,AER,73H,158,156,191,1,2,Narrow_Body,6,13,1550,away,2019-08-17 07:54:00,2019-08-17 08:59:00,1975,219
340,D,2019-08-17 08:10:00,SU,1152,D,GDZ,32A,158,156,206,1,2,Narrow_Body,5,13,1550,away,2019-08-17 07:00:00,2019-08-17 08:05:00,1975,233
341,A,2019-08-17 08:05:00,SU,1957,I,TSE,32B,183,156,69,2,27,Narrow_Body,5,13,1550,away,2019-08-17 08:17:00,2019-08-17 09:22:00,2155,790
342,D,2019-08-17 07:35:00,SU,2536,I,DUS,32A,158,156,81,3,2,Narrow_Body,5,13,1550,away,2019-08-17 06:25:00,2019-08-17 07:30:00,2215,537
343,A,2019-08-17 07:30:00,SU,1407,D,SVX,32A,158,156,88,1,2,Narrow_Body,5,13,1550,away,2019-08-17 07:35:00,2019-08-17 08:40:00,2005,315
344,D,2019-08-17 06:40:00,SU,1516,D,SGC,32A,158,156,190,1,2,Narrow_Body,5,13,1550,away,2019-08-17 05:29:00,2019-08-17 06:34:00,1975,372
345,D,2019-08-17 06:25:00,SU,1462,D,OVB,73H,158,156,113,1,2,Narrow_Body,6,13,1550,jetbridge,2019-08-17 05:11:00,2019-08-17 06:01:00,1970,348
346,A,2019-08-17 06:00:00,SU,1425,D,CEK,32A,158,156,88,1,2,Narrow_Body,6,13,1550,away,2019-08-17 06:05:00,2019-08-17 07:10:00,2005,329
347,A,2019-08-17 05:45:00,SU,1409,D,SVX,32A,158,156,206,1,2,Narrow_Body,3,13,1550,away,2019-08-17 05:50:00,2019-08-17 06:55:00,1975,317
348,A,2019-08-17 04:30:00,SU,2585,I,LHR,73H,158,156,5,3,2,Narrow_Body,3,13,1550,away,2019-08-17 04:37:00,2019-08-17 05:42:00,1975,539
349,D,2019-08-17 21:35:00,CZ,6002,I,URC,738,178,155,11,3,23,Narrow_Body,6,13,1550,away,2019-08-17 20:24:00,2019-08-17 21:29:00,1855,1061
350,A,2019-08-17 20:00:00,SU,39,D,LED,32A,158,155,191,1,3,Narrow_Body,6,13,1550,away,2019-08-17 20:06:00,2019-08-17 21:11:00,1975,157
351,A,2019-08-17 19:00:00,SU,23,D,LED,32A,158,155,206,1,3,Narrow_Body,5,13,1550,away,2019-08-17 19:05:00,2019-08-17 20:10:00,1975,141
352,D,2019-08-17 16:45:00,SU,2352,I,VIE,32A,158,155,27,3,3,Narrow_Body,6,13,1550,jetbridge,2019-08-17 15:39:00,2019-08-17 16:29:00,1730,511
353,A,2019-08-17 15:10:00,SU,17,D,LED,73H,158,155,88,1,3,Narrow_Body,5,13,1550,away,2019-08-17 15:15:00,2019-08-17 16:20:00,2005,135
354,A,2019-08-17 14:15:00,SU,2321,I,MUC,32A,158,155,81,3,3,Narrow_Body,5,13,1550,away,2019-08-17 14:20:00,2019-08-17 15:25:00,2215,502
355,D,2019-08-17 13:35:00,SU,20,D,LED,32A,158,155,203,1,3,Narrow_Body,4,13,1550,away,2019-08-17 12:24:00,2019-08-17 13:29:00,2005,138
356,A,2019-08-17 12:35:00,SU,1201,D,PEE,32A,158,155,213,1,3,Narrow_Body,2,13,1550,away,2019-08-17 12:41:00,2019-08-17 13:46:00,2005,255
357,A,2019-08-17 09:30:00,SU,1513,D,SGC,32A,158,155,191,1,3,Narrow_Body,4,13,1550,away,2019-08-17 09:36:00,2019-08-17 10:41:00,1975,371
358,D,2019-08-17 09:25:00,FV,6139,I,NCE,73H,189,155,76,3,34,Narrow_Body,4,13,1550,away,2019-08-17 08:11:00,2019-08-17 09:16:00,2245,681
359,D,2019-08-17 09:15:00,SU,1620,D,SIP,32A,158,155,202,1,3,Narrow_Body,6,13,1550,away,2019-08-17 08:04:00,2019-08-17 09:09:00,2005,392
360,A,2019-08-17 08:25:00,SU,1145,D,AAQ,73H,158,155,190,1,3,Narrow_Body,6,13,1550,away,2019-08-17 08:31:00,2019-08-17 09:36:00,1975,226
361,A,2019-08-17 08:25:00,SU,1459,D,NOZ,73H,158,155,84,3,3,Narrow_Body,6,13,1550,away,2019-08-17 08:35:00,2019-08-17 09:40:00,2245,345
362,A,2019-08-17 08:00:00,SU,1395,D,PEE,32A,158,155,203,1,3,Narrow_Body,5,13,1550,away,2019-08-17 08:06:00,2019-08-17 09:11:00,2005,309
363,A,2019-08-17 07:35:00,SU,1431,D,BAX,73H,158,155,68,3,3,Narrow_Body,5,13,1550,away,2019-08-17 07:46:00,2019-08-17 08:51:00,2425,333
364,A,2019-08-17 04:45:00,SU,1057,D,MCX,32A,158,155,89,1,3,Narrow_Body,3,13,1550,away,2019-08-17 04:50:00,2019-08-17 05:55:00,1975,190
365,A,2019-08-17 00:20:00,SU,1427,D,CEK,32A,158,155,217,1,3,Narrow_Body,1,13,1550,away,2019-08-17 00:25:00,2019-08-17 01:30:00,1945,331
366,A,2019-08-17 23:15:00,SU,2075,I,LCA,73H,158,154,2,3,4,Narrow_Body,5,13,1550,away,2019-08-17 23:20:00,2019-08-18 00:25:00,1945,465
367,A,2019-08-17 21:45:00,SU,2315,I,SXF,32A,158,154,3,3,4,Narrow_Body,5,13,1550,away,2019-08-17 21:53:00,2019-08-17 22:58:00,1975,496
368,A,2019-08-17 21:40:00,SU,2327,I,MUC,32A,158,154,9,3,4,Narrow_Body,4,13,1550,away,2019-08-17 21:50:00,2019-08-17 22:55:00,2035,504
369,A,2019-08-17 20:50:00,SU,25,D,LED,32A,158,154,206,1,4,Narrow_Body,4,13,1550,away,2019-08-17 20:55:00,2019-08-17 22:00:00,1975,143
370,D,2019-08-17 20:40:00,SU,1868,I,EVN,73H,158,154,75,3,4,Narrow_Body,5,13,1550,away,2019-08-17 19:27:00,2019-08-17 20:32:00,2185,434
371,A,2019-08-17 20:25:00,SU,1105,D,KRR,73H,158,154,88,1,4,Narrow_Body,4,13,1550,away,2019-08-17 20:30:00,2019-08-17 21:35:00,2005,200
372,D,2019-08-17 19:30:00,SU,2436,I,DUS,32A,158,154,199,3,4,Narrow_Body,5,13,1550,away,2019-08-17 18:20:00,2019-08-17 19:25:00,2575,523
373,A,2019-08-17 17:30:00,SU,1403,D,SVX,73H,158,154,89,1,4,Narrow_Body,4,13,1550,away,2019-08-17 17:35:00,2019-08-17 18:40:00,1975,313
374,A,2019-08-17 16:05:00,KL,903,I,AMS,73H,186,154,69,5,32,Narrow_Body,5,13,1550,away,2019-08-17 16:17:00,2019-08-17 17:22:00,2305,1037
375,D,2019-08-17 15:20:00,SU,22,D,LED,32A,158,154,190,1,4,Narrow_Body,3,13,1550,away,2019-08-17 14:09:00,2019-08-17 15:14:00,1975,140
376,A,2019-08-17 14:20:00,SU,1043,D,OGZ,32A,158,154,202,1,4,Narrow_Body,3,13,1550,away,2019-08-17 14:26:00,2019-08-17 15:31:00,2005,186
377,D,2019-08-17 14:10:00,SU,1124,D,AER,32A,158,154,215,1,4,Narrow_Body,5,13,1550,away,2019-08-17 12:58:00,2019-08-17 14:03:00,2005,213
378,A,2019-08-17 13:25:00,SU,2033,I,BUD,32A,158,154,20,3,4,Narrow_Body,5,13,1550,jetbridge,2019-08-17 13:38:00,2019-08-17 14:28:00,1640,459
379,D,2019-08-17 10:20:00,SU,2658,I,CPH,73H,158,154,45,5,4,Narrow_Body,4,13,1550,away,2019-08-17 09:04:00,2019-08-17 10:09:00,2095,553
380,A,2019-08-17 10:00:00,SU,1473,D,NJC,73H,158,154,82,3,4,Narrow_Body,5,13,1550,away,2019-08-17 10:07:00,2019-08-17 11:12:00,2215,351
381,D,2019-08-17 09:55:00,SU,2072,I,LCA,321,170,154,71,5,16,Narrow_Body,3,13,1550,away,2019-08-17 08:38:00,2019-08-17 09:43:00,2365,848
382,A,2019-08-17 09:40:00,SU,1865,I,EVN,32A,158,154,83,3,4,Narrow_Body,5,13,1550,away,2019-08-17 09:47:00,2019-08-17 10:52:00,2215,433
383,A,2019-08-17 08:40:00,SU,1173,D,ASF,32A,158,154,206,1,4,Narrow_Body,5,13,1550,away,2019-08-17 08:45:00,2019-08-17 09:50:00,1975,240
384,D,2019-08-17 01:55:00,SU,1522,D,NUX,32A,158,154,89,1,4,Narrow_Body,3,13,1550,away,2019-08-17 00:45:00,2019-08-17 01:50:00,1975,374
385,D,2019-08-17 01:50:00,SU,1472,D,NJC,73H,158,154,3,3,4,Narrow_Body,3,13,1550,away,2019-08-17 00:37:00,2019-08-17 01:42:00,1975,350
386,D,2019-08-17 01:00:00,SU,1382,D,HMA,73H,158,154,205,1,4,Narrow_Body,3,13,1550,away,2019-08-16 23:50:00,2019-08-17 00:55:00,1945,306
387,D,2019-08-17 00:40:00,SU,46,D,LED,73H,158,154,89,1,4,Narrow_Body,4,13,1550,away,2019-08-16 23:30:00,2019-08-17 00:35:00,1975,162
388,A,2019-08-17 23:10:00,SU,2657,I,FRA,73H,158,153,9,3,5,Narrow_Body,3,13,1550,away,2019-08-17 23:20:00,2019-08-18 00:25:00,2035,552
389,A,2019-08-17 21:00:00,SU,1065,D,NAL,32A,158,153,202,1,5,Narrow_Body,5,13,1550,away,2019-08-17 21:06:00,2019-08-17 22:11:00,2005,194
390,D,2019-08-17 20:00:00,SU,2376,I,LYS,32A,158,153,81,5,5,Narrow_Body,6,13,1550,away,2019-08-17 18:50:00,2019-08-17 19:55:00,2215,517
391,A,2019-08-17 17:50:00,SU,1881,I,FRU,32A,158,153,63,3,5,Narrow_Body,6,13,1550,away,2019-08-17 18:07:00,2019-08-17 19:12:00,2605,440
392,D,2019-08-17 16:35:00,SU,1010,D,KGD,32A,158,153,203,1,5,Narrow_Body,5,13,1550,away,2019-08-17 15:24:00,2019-08-17 16:29:00,2005,183
393,D,2019-08-17 16:05:00,FV,6185,D,AER,73H,189,153,75,3,36,Narrow_Body,5,13,1550,away,2019-08-17 14:52:00,2019-08-17 15:57:00,2185,697
394,D,2019-08-17 14:15:00,SU,2074,I,LCA,73H,158,153,44,5,5,Narrow_Body,5,13,1550,away,2019-08-17 12:59:00,2019-08-17 14:04:00,2125,464
395,A,2019-08-17 12:50:00,SU,2007,I,WAW,32A,158,153,79,3,5,Narrow_Body,4,13,1550,away,2019-08-17 12:58:00,2019-08-17 14:03:00,2215,449
396,A,2019-08-17 12:05:00,SU,1147,D,AAQ,32A,158,153,206,1,5,Narrow_Body,4,13,1550,away,2019-08-17 12:10:00,2019-08-17 13:15:00,1975,228
397,D,2019-08-17 11:55:00,SU,42,D,LED,32A,158,153,191,1,5,Narrow_Body,2,13,1550,away,2019-08-17 10:44:00,2019-08-17 11:49:00,1975,158
398,A,2019-08-17 10:40:00,SU,1523,D,NUX,32A,158,153,206,1,5,Narrow_Body,4,13,1550,away,2019-08-17 10:45:00,2019-08-17 11:50:00,1975,375
399,D,2019-08-17 10:20:00,SU,2418,I,FCO,73H,158,153,81,3,5,Narrow_Body,4,13,1550,away,2019-08-17 09:10:00,2019-08-17 10:15:00,2215,518
400,D,2019-08-17 08:30:00,SU,1400,D,SVX,32A,158,153,213,1,5,Narrow_Body,4,13,1550,away,2019-08-17 07:19:00,2019-08-17 08:24:00,2005,310
401,D,2019-08-17 08:10:00,SU,1872,I,TAS,73H,158,153,76,3,5,Narrow_Body,5,13,1550,away,2019-08-17 06:56:00,2019-08-17 08:01:00,2245,436
402,D,2019-08-17 06:10:00,SU,1636,D,SIP,32A,158,153,191,1,5,Narrow_Body,6,13,1550,away,2019-08-17 04:59:00,2019-08-17 06:04:00,1975,404
403,A,2019-08-17 04:00:00,SU,2317,I,SXF,32A,158,153,2,3,5,Narrow_Body,2,13,1550,away,2019-08-17 04:05:00,2019-08-17 05:10:00,1945,498
404,A,2019-08-17 23:55:00,SU,2123,I,HER,73H,158,152,10,3,6,Narrow_Body,7,13,1550,away,2019-08-18 00:00:00,2019-08-18 01:05:00,1825,473
405,D,2019-08-17 23:45:00,N4,185,D,KZN,73H,189,152,42,3,37,Narrow_Body,4,13,1550,away,2019-08-17 22:30:00,2019-08-17 23:35:00,2125,646
406,A,2019-08-17 23:20:00,N4,226,D,AER,73H,189,152,5,3,37,Narrow_Body,3,13,1550,away,2019-08-17 23:27:00,2019-08-18 00:32:00,1975,651
407,D,2019-08-17 23:15:00,SU,34,D,LED,32A,158,152,190,1,6,Narrow_Body,5,13,1550,away,2019-08-17 22:04:00,2019-08-17 23:09:00,1975,152
408,A,2019-08-17 22:30:00,N4,134,D,SIP,73H,189,152,44,3,37,Narrow_Body,2,13,1550,away,2019-08-17 22:41:00,2019-08-17 23:46:00,2185,637
409,A,2019-08-17 22:20:00,FV,6186,D,AER,73H,189,152,75,3,37,Narrow_Body,5,13,1550,away,2019-08-17 22:28:00,2019-08-17 23:33:00,2185,698
410,A,2019-08-17 21:45:00,EO,230,D,AER,73H,189,152,74,3,37,Narrow_Body,5,13,1550,away,2019-08-17 21:54:00,2019-08-17 22:59:00,2215,653
411,A,2019-08-17 21:30:00,N4,378,I,EVN,73H,189,152,48,2,37,Narrow_Body,6,13,1550,jetbridge,2019-08-17 21:50:00,2019-08-17 22:40:00,1850,662
412,A,2019-08-17 20:20:00,SU,1769,D,PEE,32A,158,152,203,1,6,Narrow_Body,3,13,1550,away,2019-08-17 20:26:00,2019-08-17 21:31:00,2005,424
413,D,2019-08-17 19:00:00,SU,2338,I,STR,32A,158,152,197,3,6,Narrow_Body,5,13,1550,away,2019-08-17 17:48:00,2019-08-17 18:53:00,2635,507
414,D,2019-08-17 18:40:00,SU,524,I,DXB,73H,158,152,88,5,6,Narrow_Body,5,13,1550,away,2019-08-17 17:30:00,2019-08-17 18:35:00,2695,171
415,A,2019-08-17 18:35:00,SU,2337,I,STR,73H,158,152,66,3,6,Narrow_Body,3,13,1550,away,2019-08-17 18:53:00,2019-08-17 19:58:00,2635,506
416,D,2019-08-17 18:20:00,SU,26,D,LED,32A,158,152,205,1,6,Narrow_Body,6,13,1550,away,2019-08-17 17:10:00,2019-08-17 18:15:00,1945,144
417,A,2019-08-17 16:55:00,N4,524,D,SIP,73H,189,152,199,3,37,Narrow_Body,5,13,1550,away,2019-08-17 17:00:00,2019-08-17 18:05:00,2575,666
418,D,2019-08-17 16:05:00,N4,133,D,SIP,73H,189,152,74,3,37,Narrow_Body,5,13,1550,away,2019-08-17 14:51:00,2019-08-17 15:56:00,2215,636
419,A,2019-08-17 15:35:00,SU,43,D,LED,32A,158,152,217,1,6,Narrow_Body,6,13,1550,away,2019-08-17 15:40:00,2019-08-17 16:45:00,1945,159
420,D,2019-08-17 15:00:00,SU,1142,D,AAQ,32A,158,152,88,1,6,Narrow_Body,5,13,1550,away,2019-08-17 13:50:00,2019-08-17 14:55:00,2005,223
421,D,2019-08-17 14:35:00,SU,2694,I,AMS,32A,158,152,42,5,6,Narrow_Body,4,13,1550,away,2019-08-17 13:20:00,2019-08-17 14:25:00,2095,557
422,A,2019-08-17 14:25:00,N4,184,D,MRV,73H,189,152,9,3,37,Narrow_Body,4,13,1550,away,2019-08-17 14:35:00,2019-08-17 15:40:00,2035,645
423,A,2019-08-17 14:00:00,SU,1517,D,SGC,32A,158,152,203,1,6,Narrow_Body,5,13,1550,away,2019-08-17 14:06:00,2019-08-17 15:11:00,2005,373
424,D,2019-08-17 13:35:00,SU,1628,D,SIP,32A,158,152,192,1,6,Narrow_Body,4,13,1550,away,2019-08-17 12:23:00,2019-08-17 13:28:00,2035,400
425,A,2019-08-17 13:25:00,SU,13,D,LED,73H,158,152,192,1,6,Narrow_Body,5,13,1550,away,2019-08-17 13:32:00,2019-08-17 14:37:00,2035,131
426,D,2019-08-17 13:25:00,RL,7515,I,CFU,738,189,152,83,2,37,Narrow_Body,5,13,1550,away,2019-08-17 12:13:00,2019-08-17 13:18:00,2095,707
427,D,2019-08-17 13:10:00,SU,1150,D,GDZ,32A,158,152,193,1,6,Narrow_Body,4,13,1550,away,2019-08-17 11:58:00,2019-08-17 13:03:00,2035,231
428,A,2019-08-17 13:10:00,N4,124,D,SIP,73H,189,152,69,3,37,Narrow_Body,4,13,1550,away,2019-08-17 13:22:00,2019-08-17 14:27:00,2365,635
429,A,2019-08-17 11:05:00,U6,1,D,SVX,320,160,152,88,1,8,Narrow_Body,3,13,1550,away,2019-08-17 11:10:00,2019-08-17 12:15:00,2005,0
430,D,2019-08-17 10:45:00,SU,2342,I,HAJ,32A,158,152,76,3,6,Narrow_Body,5,13,1550,away,2019-08-17 09:31:00,2019-08-17 10:36:00,2245,509
431,D,2019-08-17 10:45:00,N4,523,D,SIP,73H,189,152,69,3,37,Narrow_Body,5,13,1550,away,2019-08-17 09:28:00,2019-08-17 10:33:00,2365,665
432,A,2019-08-17 09:45:00,SU,1189,D,VOG,73H,158,152,217,1,6,Narrow_Body,6,13,1550,away,2019-08-17 09:50:00,2019-08-17 10:55:00,1945,248
433,A,2019-08-17 09:35:00,N4,542,D,OMS,73H,189,152,84,3,37,Narrow_Body,6,13,1550,away,2019-08-17 09:45:00,2019-08-17 10:50:00,2245,668
434,A,2019-08-17 09:20:00,RL,7538,I,LCA,738,189,152,68,2,37,Narrow_Body,5,13,1550,away,2019-08-17 09:31:00,2019-08-17 10:36:00,2245,709
435,D,2019-08-17 08:40:00,N4,183,D,MRV,73H,189,152,84,3,37,Narrow_Body,5,13,1550,away,2019-08-17 07:25:00,2019-08-17 08:30:00,2245,644
436,A,2019-08-17 08:15:00,SU,1235,D,UFA,32A,158,152,215,1,6,Narrow_Body,6,13,1550,away,2019-08-17 08:22:00,2019-08-17 09:27:00,2005,273
437,D,2019-08-17 08:15:00,SU,1546,D,AAQ,32A,158,152,215,1,6,Narrow_Body,6,13,1550,away,2019-08-17 07:03:00,2019-08-17 08:08:00,2005,382
438,A,2019-08-17 08:00:00,SU,1533,D,CEK,32A,158,152,192,1,6,Narrow_Body,5,13,1550,away,2019-08-17 08:07:00,2019-08-17 09:12:00,2035,379
439,D,2019-08-17 07:00:00,N4,123,D,SIP,73H,189,152,79,3,37,Narrow_Body,4,13,1550,away,2019-08-17 05:47:00,2019-08-17 06:52:00,2215,634
440,D,2019-08-17 06:50:00,SU,1420,D,CEK,32A,158,152,202,1,6,Narrow_Body,4,13,1550,away,2019-08-17 05:39:00,2019-08-17 06:44:00,2005,324
441,D,2019-08-17 06:40:00,SU,1000,D,KGD,73H,158,152,203,1,6,Narrow_Body,5,13,1550,away,2019-08-17 05:29:00,2019-08-17 06:34:00,2005,173
442,A,2019-08-17 06:20:00,SU,1503,D,TJM,32A,158,152,192,1,6,Narrow_Body,2,13,1550,away,2019-08-17 06:27:00,2019-08-17 07:32:00,2035,365
443,A,2019-08-17 06:05:00,N4,280,D,UFA,73H,189,152,82,3,37,Narrow_Body,4,13,1550,away,2019-08-17 06:12:00,2019-08-17 07:17:00,2215,659
444,A,2019-08-17 05:40:00,N4,634,D,SIP,73H,189,152,83,3,37,Narrow_Body,5,13,1550,away,2019-08-17 05:47:00,2019-08-17 06:52:00,2215,672
445,A,2019-08-17 04:55:00,SU,1315,D,MRV,73H,158,152,213,1,6,Narrow_Body,2,13,1550,away,2019-08-17 05:01:00,2019-08-17 06:06:00,2005,301
446,D,2019-08-17 01:25:00,N4,541,D,OMS,73H,189,152,5,3,37,Narrow_Body,3,13,1550,away,2019-08-17 00:13:00,2019-08-17 01:18:00,1975,667
447,D,2019-08-17 00:50:00,RL,7537,I,LCA,738,189,152,82,2,37,Narrow_Body,2,13,1550,away,2019-08-16 23:38:00,2019-08-17 00:43:00,2065,708
448,D,2019-08-17 00:45:00,N4,279,D,UFA,73H,189,152,4,3,37,Narrow_Body,3,13,1550,away,2019-08-16 23:32:00,2019-08-17 00:37:00,2005,658
449,A,2019-08-17 23:25:00,SU,2353,I,VIE,32A,158,151,1,5,7,Narrow_Body,6,13,1550,away,2019-08-17 23:30:00,2019-08-18 00:35:00,1975,512
450,D,2019-08-17 23:15:00,SU,1446,D,BAX,32A,158,151,78,3,7,Narrow_Body,5,13,1550,away,2019-08-17 22:04:00,2019-08-17 23:09:00,2215,342
451,A,2019-08-17 22:15:00,SU,1303,D,MRV,73H,158,151,205,1,7,Narrow_Body,4,13,1550,away,2019-08-17 22:20:00,2019-08-17 23:25:00,1945,295
452,D,2019-08-17 22:15:00,SU,1532,D,CEK,32A,158,151,213,1,7,Narrow_Body,4,13,1550,away,2019-08-17 21:04:00,2019-08-17 22:09:00,2005,378
453,D,2019-08-17 21:00:00,SU,1626,D,SIP,73H,158,151,202,1,7,Narrow_Body,5,13,1550,away,2019-08-17 19:49:00,2019-08-17 20:54:00,2005,398
454,A,2019-08-17 19:40:00,SU,1233,D,UFA,32A,158,151,213,1,7,Narrow_Body,5,13,1550,away,2019-08-17 19:46:00,2019-08-17 20:51:00,2005,271
455,A,2019-08-17 16:25:00,SU,19,D,LED,73H,158,151,190,1,7,Narrow_Body,4,13,1550,away,2019-08-17 16:31:00,2019-08-17 17:36:00,1975,137
456,A,2019-08-17 16:00:00,SU,2131,I,IST,73H,158,151,84,2,7,Narrow_Body,5,13,1550,away,2019-08-17 16:10:00,2019-08-17 17:15:00,2155,475
457,A,2019-08-17 14:30:00,SU,1401,D,SVX,32A,158,151,213,1,7,Narrow_Body,5,13,1550,away,2019-08-17 14:36:00,2019-08-17 15:41:00,2005,311
458,D,2019-08-17 08:15:00,SU,2060,I,SOF,32A,158,151,43,2,7,Narrow_Body,6,13,1550,away,2019-08-17 06:55:00,2019-08-17 08:00:00,2245,462
459,D,2019-08-17 07:15:00,SU,2684,I,SXF,73H,158,151,84,3,7,Narrow_Body,7,13,1550,away,2019-08-17 06:00:00,2019-08-17 07:05:00,2245,555
460,D,2019-08-17 06:30:00,SU,1858,I,EVN,32A,158,151,1,3,7,Narrow_Body,4,13,1550,away,2019-08-17 05:20:00,2019-08-17 06:25:00,1855,428
461,D,2019-08-17 06:15:00,SU,1640,D,OMS,73H,158,151,7,3,7,Narrow_Body,5,13,1550,away,2019-08-17 05:02:00,2019-08-17 06:07:00,2035,408
462,A,2019-08-17 05:05:00,SU,37,D,LED,32A,158,151,215,1,7,Narrow_Body,3,13,1550,away,2019-08-17 05:12:00,2019-08-17 06:17:00,2005,155
463,D,2019-08-17 02:00:00,SU,1188,D,VOG,73H,158,151,190,1,7,Narrow_Body,1,13,1550,away,2019-08-17 00:49:00,2019-08-17 01:54:00,1975,247
464,D,2019-08-17 00:10:00,SU,1478,D,ABA,73H,158,151,11,3,7,Narrow_Body,5,13,1550,away,2019-08-16 22:59:00,2019-08-17 00:04:00,1855,352
465,D,2019-08-17 00:05:00,SU,1424,D,CEK,32A,158,151,217,1,7,Narrow_Body,6,13,1550,away,2019-08-16 22:55:00,2019-08-17 00:00:00,1945,328
466,A,2019-08-17 20:35:00,FV,6192,D,ROV,73H,189,150,8,3,39,Narrow_Body,5,13,1550,away,2019-08-17 20:44:00,2019-08-17 21:49:00,1975,702
467,D,2019-08-17 19:50:00,SU,2618,I,BRU,73H,158,150,88,5,8,Narrow_Body,6,13,1550,away,2019-08-17 18:40:00,2019-08-17 19:45:00,2695,545
468,A,2019-08-17 19:35:00,SU,2503,I,VLC,73H,158,150,83,2,8,Narrow_Body,5,13,1550,away,2019-08-17 19:42:00,2019-08-17 20:47:00,2095,530
469,A,2019-08-17 19:05:00,SU,1151,D,GDZ,32A,158,150,203,1,8,Narrow_Body,3,13,1550,away,2019-08-17 19:11:00,2019-08-17 20:16:00,2005,232
470,D,2019-08-17 18:25:00,SU,2534,I,OSL,73H,158,150,70,5,8,Narrow_Body,6,13,1550,away,2019-08-17 17:05:00,2019-08-17 18:10:00,2455,535
471,A,2019-08-17 18:00:00,SU,2319,I,SXF,32A,158,150,200,3,8,Narrow_Body,4,13,1550,away,2019-08-17 18:06:00,2019-08-17 19:11:00,2635,500
472,D,2019-08-17 17:30:00,SU,1414,D,SVX,73H,158,150,89,1,8,Narrow_Body,4,13,1550,away,2019-08-17 16:20:00,2019-08-17 17:25:00,1975,322
473,A,2019-08-17 14:05:00,SU,1209,D,KUF,32A,158,150,215,1,8,Narrow_Body,4,13,1550,away,2019-08-17 14:12:00,2019-08-17 15:17:00,2005,257
474,A,2019-08-17 13:55:00,SU,1163,D,ROV,32A,158,150,193,1,8,Narrow_Body,5,13,1550,away,2019-08-17 14:02:00,2019-08-17 15:07:00,2035,238
475,A,2019-08-17 12:45:00,SU,1421,D,CEK,32A,158,150,196,1,8,Narrow_Body,2,13,1550,away,2019-08-17 12:53:00,2019-08-17 13:58:00,2035,325
476,A,2019-08-17 12:30:00,SU,1159,D,ROV,73H,158,150,210,1,8,Narrow_Body,3,13,1550,away,2019-08-17 12:35:00,2019-08-17 13:40:00,2035,236
477,D,2019-08-17 09:40:00,SU,1208,D,KUF,32A,158,150,213,1,8,Narrow_Body,5,13,1550,away,2019-08-17 08:29:00,2019-08-17 09:34:00,2005,256
478,A,2019-08-17 09:35:00,SU,1301,D,MRV,32A,158,150,88,1,8,Narrow_Body,6,13,1550,away,2019-08-17 09:40:00,2019-08-17 10:45:00,2005,293
479,D,2019-08-17 07:45:00,SU,1940,I,ALA,73H,158,150,45,2,8,Narrow_Body,6,13,1550,away,2019-08-17 06:29:00,2019-08-17 07:34:00,2125,443
480,A,2019-08-17 06:15:00,SU,1511,D,SGC,32A,158,150,193,1,8,Narrow_Body,5,13,1550,away,2019-08-17 06:22:00,2019-08-17 07:27:00,2035,369
481,A,2019-08-17 05:50:00,SU,1239,D,UFA,32A,158,150,196,1,8,Narrow_Body,3,13,1550,away,2019-08-17 05:58:00,2019-08-17 07:03:00,2035,275
482,D,2019-08-17 01:05:00,SU,1306,D,OVB,73H,158,150,191,1,8,Narrow_Body,2,13,1550,away,2019-08-16 23:54:00,2019-08-17 00:59:00,1975,298
483,A,2019-08-17 23:40:00,SU,1415,D,SVX,73H,158,149,217,1,9,Narrow_Body,6,13,1550,away,2019-08-17 23:45:00,2019-08-18 00:50:00,1945,323
484,D,2019-08-17 21:45:00,SU,1510,D,SGC,32A,158,149,215,1,9,Narrow_Body,5,13,1550,away,2019-08-17 20:33:00,2019-08-17 21:38:00,2005,368
485,A,2019-08-17 20:55:00,SU,1507,D,TJM,73H,158,149,192,1,9,Narrow_Body,5,13,1550,away,2019-08-17 21:02:00,2019-08-17 22:07:00,2035,367
486,D,2019-08-17 17:45:00,SU,1130,D,AER,32A,158,149,206,1,9,Narrow_Body,5,13,1550,away,2019-08-17 16:35:00,2019-08-17 17:40:00,1975,217
487,A,2019-08-17 16:40:00,SU,2175,I,OSL,32A,158,149,63,5,9,Narrow_Body,5,13,1550,away,2019-08-17 16:57:00,2019-08-17 18:02:00,2545,490
488,A,2019-08-17 16:30:00,SU,2031,I,BUD,32A,158,149,73,2,9,Narrow_Body,5,13,1550,away,2019-08-17 16:44:00,2019-08-17 17:49:00,2275,457
489,A,2019-08-17 16:10:00,SU,2607,I,LIS,73H,158,149,72,3,9,Narrow_Body,6,13,1550,away,2019-08-17 16:24:00,2019-08-17 17:29:00,2455,542
490,D,2019-08-17 16:00:00,SU,1192,D,KZN,32A,158,149,192,1,9,Narrow_Body,5,13,1550,away,2019-08-17 14:48:00,2019-08-17 15:53:00,2035,249
491,A,2019-08-17 15:45:00,SU,2313,I,SXF,32A,158,149,82,3,9,Narrow_Body,4,13,1550,away,2019-08-17 15:52:00,2019-08-17 16:57:00,2215,494
492,D,2019-08-17 14:55:00,SU,1182,D,VOG,73H,158,149,210,1,9,Narrow_Body,5,13,1550,away,2019-08-17 13:45:00,2019-08-17 14:50:00,2035,243
493,A,2019-08-17 11:25:00,SU,1751,D,YKS,73H,158,149,202,1,9,Narrow_Body,3,13,1550,away,2019-08-17 11:31:00,2019-08-17 12:36:00,2005,418
494,D,2019-08-17 11:05:00,SU,1276,D,KZN,73H,158,149,202,1,9,Narrow_Body,3,13,1550,away,2019-08-17 09:54:00,2019-08-17 10:59:00,2005,288
495,D,2019-08-17 10:20:00,SU,2174,I,OSL,32A,158,149,70,5,9,Narrow_Body,4,13,1550,away,2019-08-17 09:00:00,2019-08-17 10:05:00,2455,489
496,A,2019-08-17 08:25:00,SU,1275,D,KRR,73H,158,149,193,1,9,Narrow_Body,6,13,1550,away,2019-08-17 08:32:00,2019-08-17 09:37:00,2035,287
497,D,2019-08-17 07:50:00,SU,2130,I,IST,73H,158,149,68,2,9,Narrow_Body,6,13,1550,away,2019-08-17 06:34:00,2019-08-17 07:39:00,2245,474
498,A,2019-08-17 05:35:00,EO,174,D,SVX,73H,189,149,76,3,40,Narrow_Body,3,13,1550,away,2019-08-17 05:44:00,2019-08-17 06:49:00,2245,641
499,A,2019-08-17 05:05:00,SU,1113,D,KRR,32A,158,149,192,1,9,Narrow_Body,3,13,1550,away,2019-08-17 05:12:00,2019-08-17 06:17:00,2035,204
500,A,2019-08-17 04:50:00,FV,6194,D,ROV,73H,189,149,4,3,40,Narrow_Body,3,13,1550,away,2019-08-17 04:58:00,2019-08-17 06:03:00,2005,704
501,D,2019-08-17 01:40:00,SU,1234,D,UFA,32A,158,149,206,1,9,Narrow_Body,1,13,1550,away,2019-08-17 00:30:00,2019-08-17 01:35:00,1975,272
502,A,2019-08-17 23:25:00,SU,2025,I,PRG,32B,183,148,4,3,35,Narrow_Body,6,13,1550,away,2019-08-17 23:33:00,2019-08-18 00:38:00,2005,796
503,A,2019-08-17 20:40:00,SU,1143,D,AAQ,32A,158,148,193,1,10,Narrow_Body,5,13,1550,away,2019-08-17 20:47:00,2019-08-17 21:52:00,2035,224
504,A,2019-08-17 18:40:00,SU,2357,I,VIE,73H,158,148,9,5,10,Narrow_Body,5,13,1550,away,2019-08-17 18:50:00,2019-08-17 19:55:00,2215,516
505,D,2019-08-17 18:10:00,BA,234,I,LHR,321,154,148,62,5,6,Narrow_Body,4,13,1550,away,2019-08-17 16:47:00,2019-08-17 17:52:00,2575,755
506,A,2019-08-17 17:45:00,SU,2343,I,HAJ,32A,158,148,206,3,10,Narrow_Body,5,13,1550,away,2019-08-17 17:50:00,2019-08-17 18:55:00,2635,510
507,D,2019-08-17 17:10:00,SU,24,D,LED,32A,158,148,202,1,10,Narrow_Body,2,13,1550,away,2019-08-17 15:59:00,2019-08-17 17:04:00,2005,142
508,A,2019-08-17 16:50:00,SU,507,I,TLV,73H,158,148,65,3,10,Narrow_Body,5,13,1550,away,2019-08-17 17:06:00,2019-08-17 18:11:00,2575,165
509,D,2019-08-17 15:35:00,SU,1148,D,GDZ,32A,158,148,196,1,10,Narrow_Body,6,13,1550,away,2019-08-17 14:22:00,2019-08-17 15:27:00,2035,229
510,D,2019-08-17 08:15:00,SU,2168,I,BRU,73H,158,148,71,5,10,Narrow_Body,6,13,1550,away,2019-08-17 06:58:00,2019-08-17 08:03:00,2365,487
511,A,2019-08-17 07:50:00,SU,1185,D,VOG,73H,158,148,196,1,10,Narrow_Body,6,13,1550,away,2019-08-17 07:58:00,2019-08-17 09:03:00,2035,246
512,D,2019-08-17 07:05:00,SU,2032,I,BUD,32A,158,148,70,2,10,Narrow_Body,6,13,1550,away,2019-08-17 05:45:00,2019-08-17 06:50:00,2245,458
513,D,2019-08-17 06:50:00,SU,2320,I,MUC,32A,158,148,69,3,10,Narrow_Body,4,13,1550,away,2019-08-17 05:33:00,2019-08-17 06:38:00,2365,501
514,A,2019-08-17 23:55:00,SU,2049,I,SPU,32B,183,147,6,3,36,Narrow_Body,7,13,1550,away,2019-08-18 00:03:00,2019-08-18 01:08:00,2035,799
515,A,2019-08-17 20:50:00,SU,521,I,DXB,73H,158,147,2,5,11,Narrow_Body,4,13,1550,away,2019-08-17 20:55:00,2019-08-17 22:00:00,2035,170
516,D,2019-08-17 19:35:00,SU,2590,I,DUB,32A,158,147,202,5,11,Narrow_Body,5,13,1550,away,2019-08-17 18:24:00,2019-08-17 19:29:00,2785,540
517,D,2019-08-17 16:25:00,SU,38,D,LED,32A,158,147,193,1,11,Narrow_Body,4,13,1550,away,2019-08-17 15:13:00,2019-08-17 16:18:00,2035,156
518,A,2019-08-17 14:45:00,SU,2053,I,TIV,32B,183,147,80,3,36,Narrow_Body,4,13,1550,away,2019-08-17 14:50:00,2019-08-17 15:55:00,2215,801
519,A,2019-08-17 13:40:00,SU,1547,D,AAQ,32A,158,147,220,1,11,Narrow_Body,4,13,1550,away,2019-08-17 13:48:00,2019-08-17 14:53:00,2035,383
520,A,2019-08-17 13:40:00,SU,1139,D,AER,32B,183,147,104,1,36,Narrow_Body,4,13,1550,away,2019-08-17 13:50:00,2019-08-17 14:55:00,2065,765
521,D,2019-08-17 13:30:00,SU,1412,D,SVX,32A,158,147,220,1,11,Narrow_Body,5,13,1550,away,2019-08-17 12:17:00,2019-08-17 13:22:00,2035,320
522,A,2019-08-17 12:40:00,SU,2105,I,VNO,321,170,147,43,5,23,Narrow_Body,4,13,1550,away,2019-08-17 12:55:00,2019-08-17 14:00:00,2245,851
523,D,2019-08-17 12:25:00,SU,1102,D,KRR,73H,158,147,203,1,11,Narrow_Body,5,13,1550,away,2019-08-17 11:14:00,2019-08-17 12:19:00,2005,197
524,D,2019-08-17 10:50:00,SU,2126,I,HER,32B,183,147,73,5,36,Narrow_Body,4,13,1550,away,2019-08-17 09:31:00,2019-08-17 10:36:00,2455,807
525,D,2019-08-17 10:10:00,SU,2030,I,BUD,32A,158,147,72,2,11,Narrow_Body,5,13,1550,away,2019-08-17 08:51:00,2019-08-17 09:56:00,2275,456
526,D,2019-08-17 09:55:00,SU,2054,I,TIV,73H,158,147,62,3,11,Narrow_Body,3,13,1550,away,2019-08-17 08:32:00,2019-08-17 09:37:00,2515,460
527,D,2019-08-17 09:10:00,SU,1460,D,OVB,73H,158,147,210,1,11,Narrow_Body,2,13,1550,away,2019-08-17 08:00:00,2019-08-17 09:05:00,2035,346
528,A,2019-08-17 08:05:00,SU,1383,D,HMA,73H,158,147,220,1,11,Narrow_Body,5,13,1550,away,2019-08-17 08:13:00,2019-08-17 09:18:00,2035,307
529,A,2019-08-17 07:05:00,SU,1867,I,EVN,32B,183,147,72,3,36,Narrow_Body,6,13,1550,away,2019-08-17 07:19:00,2019-08-17 08:24:00,2455,780
530,D,2019-08-17 06:45:00,SU,6,D,LED,73H,158,147,210,1,11,Narrow_Body,4,13,1550,away,2019-08-17 05:35:00,2019-08-17 06:40:00,2035,126
531,D,2019-08-17 06:30:00,SU,1146,D,AAQ,32A,158,147,220,1,11,Narrow_Body,4,13,1550,away,2019-08-17 05:17:00,2019-08-17 06:22:00,2035,227
532,A,2019-08-17 06:05:00,SU,2135,I,IST,73H,158,147,73,3,11,Narrow_Body,4,13,1550,away,2019-08-17 06:19:00,2019-08-17 07:24:00,2485,476
533,A,2019-08-17 05:55:00,SU,513,I,IKA,32A,158,147,72,2,11,Narrow_Body,2,13,1550,away,2019-08-17 06:09:00,2019-08-17 07:14:00,2275,168
534,A,2019-08-17 04:10:00,SU,2355,I,VIE,73H,158,147,6,5,11,Narrow_Body,3,13,1550,away,2019-08-17 04:18:00,2019-08-17 05:23:00,2095,514
535,A,2019-08-17 04:05:00,SU,2139,I,IST,73H,158,147,3,3,11,Narrow_Body,2,13,1550,away,2019-08-17 04:13:00,2019-08-17 05:18:00,1975,480
536,A,2019-08-17 03:05:00,AZ,542,I,CTA,321,200,147,7,5,53,Narrow_Body,4,13,1550,away,2019-08-17 03:13:00,2019-08-17 04:18:00,2065,996
537,A,2019-08-17 00:15:00,SU,1897,I,EVN,32B,183,147,6,3,36,Narrow_Body,1,13,1550,away,2019-08-17 00:23:00,2019-08-17 01:28:00,2035,783
538,D,2019-08-17 22:50:00,SU,1184,D,VOG,73H,158,146,88,1,12,Narrow_Body,4,13,1550,away,2019-08-17 21:40:00,2019-08-17 22:45:00,2005,245
539,A,2019-08-17 19:30:00,SU,2019,I,PRG,73H,158,146,45,5,12,Narrow_Body,5,13,1550,away,2019-08-17 19:41:00,2019-08-17 20:46:00,2095,455
540,A,2019-08-17 15:15:00,AZ,548,I,FCO,320,180,146,39,5,34,Narrow_Body,5,13,1550,jetbridge,2019-08-17 15:31:00,2019-08-17 16:21:00,1730,1000
541,D,2019-08-17 14:50:00,SU,1174,D,ASF,32A,158,146,105,1,12,Narrow_Body,6,13,1550,away,2019-08-17 13:32:00,2019-08-17 14:37:00,2065,241
542,D,2019-08-17 14:00:00,SU,1506,D,TJM,73H,158,146,194,1,12,Narrow_Body,5,13,1550,away,2019-08-17 12:48:00,2019-08-17 13:53:00,2065,366
543,D,2019-08-17 14:00:00,KC,276,I,ALA,32Q,162,146,71,5,16,Narrow_Body,5,13,1550,away,2019-08-17 12:43:00,2019-08-17 13:48:00,2365,866
544,D,2019-08-17 13:00:00,SU,2018,I,PRG,73H,158,146,44,5,12,Narrow_Body,3,13,1550,away,2019-08-17 11:44:00,2019-08-17 12:49:00,2125,454
545,D,2019-08-17 12:05:00,SU,2518,I,PMI,32A,158,146,79,3,12,Narrow_Body,4,13,1550,away,2019-08-17 10:52:00,2019-08-17 11:57:00,2215,531
546,D,2019-08-17 11:20:00,SU,2318,I,SXF,32A,158,146,71,3,12,Narrow_Body,5,13,1550,away,2019-08-17 10:03:00,2019-08-17 11:08:00,2425,499
547,D,2019-08-17 09:45:00,SU,1860,I,EVN,32A,158,146,67,3,12,Narrow_Body,6,13,1550,away,2019-08-17 08:23:00,2019-08-17 09:28:00,2515,430
548,D,2019-08-17 07:05:00,SU,2580,I,LHR,321,170,146,71,3,24,Narrow_Body,6,13,1550,away,2019-08-17 05:48:00,2019-08-17 06:53:00,2425,863
549,A,2019-08-17 05:10:00,SU,1323,D,MMK,32A,158,146,104,1,12,Narrow_Body,1,13,1550,away,2019-08-17 05:20:00,2019-08-17 06:25:00,2065,303
550,A,2019-08-17 02:10:00,SU,2383,I,GVA,32B,183,146,1,3,37,Narrow_Body,2,13,1550,away,2019-08-17 02:15:00,2019-08-17 03:20:00,1855,818
551,D,2019-08-17 01:05:00,SU,1562,D,IKT,73H,158,146,88,1,12,Narrow_Body,2,13,1550,away,2019-08-16 23:55:00,2019-08-17 01:00:00,2005,386
552,D,2019-08-17 00:40:00,SU,1638,D,OMS,32A,158,146,3,3,12,Narrow_Body,4,13,1550,away,2019-08-16 23:27:00,2019-08-17 00:32:00,1975,406
553,A,2019-08-17 00:05:00,SU,1543,D,AAQ,32A,158,146,202,1,12,Narrow_Body,6,13,1550,away,2019-08-17 00:11:00,2019-08-17 01:16:00,2005,381
554,D,2019-08-17 23:25:00,N4,633,D,SIP,73H,189,145,79,3,44,Narrow_Body,6,13,1550,away,2019-08-17 22:12:00,2019-08-17 23:17:00,2215,671
555,A,2019-08-17 22:40:00,SU,2695,I,AMS,32A,158,145,45,5,13,Narrow_Body,4,13,1550,away,2019-08-17 22:51:00,2019-08-17 23:56:00,2095,558
556,D,2019-08-17 17:55:00,SU,2382,I,GVA,32B,183,145,64,2,38,Narrow_Body,4,13,1550,away,2019-08-17 16:31:00,2019-08-17 17:36:00,2365,817
557,D,2019-08-17 17:50:00,FV,6147,D,SIP,77W,457,145,67,3,312,Wide_Body,6,13,1800,away,2019-08-17 16:13:00,2019-08-17 17:33:00,2860,1072
558,A,2019-08-17 16:35:00,SU,2013,I,PRG,32B,183,145,210,2,38,Narrow_Body,5,13,1550,away,2019-08-17 16:40:00,2019-08-17 17:45:00,2725,792
559,D,2019-08-17 14:55:00,SU,2014,I,PRG,73H,158,145,68,5,13,Narrow_Body,5,13,1550,away,2019-08-17 13:39:00,2019-08-17 14:44:00,2395,452
560,D,2019-08-17 11:20:00,SU,1402,D,SVX,73H,158,145,213,1,13,Narrow_Body,5,13,1550,away,2019-08-17 10:09:00,2019-08-17 11:14:00,2005,312
561,D,2019-08-17 01:30:00,SU,36,D,LED,32A,158,145,203,1,13,Narrow_Body,3,13,1550,away,2019-08-17 00:19:00,2019-08-17 01:24:00,2005,154
562,D,2019-08-17 21:30:00,SU,44,D,LED,32A,158,144,196,1,14,Narrow_Body,6,13,1550,away,2019-08-17 20:17:00,2019-08-17 21:22:00,2035,160
563,D,2019-08-17 20:25:00,SU,1480,D,KJA,32A,158,144,215,1,14,Narrow_Body,4,13,1550,away,2019-08-17 19:13:00,2019-08-17 20:18:00,2005,354
564,A,2019-08-17 15:05:00,FB,659,I,BOJ,320,180,144,83,2,36,Narrow_Body,4,13,1550,away,2019-08-17 15:12:00,2019-08-17 16:17:00,2095,1008
565,D,2019-08-17 09:05:00,SU,1432,D,BAX,32A,158,144,11,3,14,Narrow_Body,6,13,1550,away,2019-08-17 07:54:00,2019-08-17 08:59:00,1855,334
566,D,2019-08-17 08:20:00,SU,10,D,LED,32A,158,144,220,1,14,Narrow_Body,4,13,1550,away,2019-08-17 07:07:00,2019-08-17 08:12:00,2035,128
567,D,2019-08-17 08:20:00,SU,1268,D,KZN,32A,158,144,104,1,14,Narrow_Body,4,13,1550,away,2019-08-17 07:05:00,2019-08-17 08:10:00,2065,284
568,D,2019-08-17 07:45:00,SU,1304,D,MRV,32A,158,144,105,1,14,Narrow_Body,6,13,1550,away,2019-08-17 06:27:00,2019-08-17 07:32:00,2065,296
569,D,2019-08-17 07:45:00,SU,2006,I,WAW,32A,158,144,62,3,14,Narrow_Body,6,13,1550,away,2019-08-17 06:22:00,2019-08-17 07:27:00,2515,448
570,D,2019-08-17 23:05:00,SU,1530,D,TOF,73H,158,143,80,3,15,Narrow_Body,3,13,1550,away,2019-08-17 21:55:00,2019-08-17 23:00:00,2215,376
571,A,2019-08-17 21:50:00,SU,2155,I,DUS,32A,158,143,81,3,15,Narrow_Body,6,13,1550,away,2019-08-17 21:55:00,2019-08-17 23:00:00,2215,484
572,A,2019-08-17 21:15:00,SU,1149,D,GDZ,32A,158,143,196,1,15,Narrow_Body,4,13,1550,away,2019-08-17 21:23:00,2019-08-17 22:28:00,2035,230
573,D,2019-08-17 20:05:00,SU,2428,I,BLQ,73H,158,143,74,3,15,Narrow_Body,5,13,1550,away,2019-08-17 18:51:00,2019-08-17 19:56:00,2215,521
574,A,2019-08-17 19:25:00,SU,2613,I,MXP,73H,158,143,79,3,15,Narrow_Body,5,13,1550,away,2019-08-17 19:33:00,2019-08-17 20:38:00,2215,544
575,A,2019-08-17 18:50:00,SU,2153,I,DUS,32A,158,143,69,3,15,Narrow_Body,5,13,1550,away,2019-08-17 19:02:00,2019-08-17 20:07:00,2365,482
576,D,2019-08-17 18:00:00,SU,2528,I,AGP,73H,158,143,200,5,15,Narrow_Body,4,13,1550,away,2019-08-17 16:49:00,2019-08-17 17:54:00,2755,533
577,A,2019-08-17 14:10:00,SU,1153,D,GDZ,32A,158,143,194,1,15,Narrow_Body,5,13,1550,away,2019-08-17 14:17:00,2019-08-17 15:22:00,2065,234
578,D,2019-08-17 08:35:00,SU,2602,I,MAD,32B,183,143,67,3,40,Narrow_Body,6,13,1550,away,2019-08-17 07:13:00,2019-08-17 08:18:00,2515,838
579,A,2019-08-17 05:50:00,SU,2529,I,AGP,73H,158,143,61,5,15,Narrow_Body,3,13,1550,away,2019-08-17 06:07:00,2019-08-17 07:12:00,2515,534
580,A,2019-08-17 13:30:00,SU,2685,I,SXF,73H,158,142,23,3,16,Narrow_Body,5,13,1550,jetbridge,2019-08-17 13:42:00,2019-08-17 14:32:00,1610,556
581,A,2019-08-17 10:40:00,SU,7,D,LED,73H,158,142,215,1,16,Narrow_Body,4,13,1550,away,2019-08-17 10:47:00,2019-08-17 11:52:00,2005,127
582,A,2019-08-17 10:30:00,SU,2437,I,DUS,32A,158,142,80,3,16,Narrow_Body,4,13,1550,away,2019-08-17 10:35:00,2019-08-17 11:40:00,2215,524
583,D,2019-08-17 10:00:00,SU,2620,I,AGP,73H,158,142,61,3,16,Narrow_Body,5,13,1550,away,2019-08-17 08:38:00,2019-08-17 09:43:00,2575,547
584,A,2019-08-17 07:15:00,FV,6172,D,REN,73H,189,142,73,3,47,Narrow_Body,7,13,1550,away,2019-08-17 07:29:00,2019-08-17 08:34:00,2485,694
585,D,2019-08-17 06:55:00,SU,506,I,TLV,73H,158,142,67,3,16,Narrow_Body,5,13,1550,away,2019-08-17 05:33:00,2019-08-17 06:38:00,2515,164
586,D,2019-08-17 22:45:00,SU,1844,I,KIV,32A,158,141,7,3,17,Narrow_Body,3,13,1550,away,2019-08-17 21:32:00,2019-08-17 22:37:00,2035,425
587,D,2019-08-17 19:30:00,SU,2606,I,LIS,73H,158,141,210,2,17,Narrow_Body,5,13,1550,away,2019-08-17 18:20:00,2019-08-17 19:25:00,2725,541
588,A,2019-08-17 13:10:00,SU,2107,I,TLL,73H,158,141,70,5,17,Narrow_Body,4,13,1550,away,2019-08-17 13:25:00,2019-08-17 14:30:00,2455,470
589,A,2019-08-17 13:00:00,SU,1211,D,KUF,32A,158,141,204,1,17,Narrow_Body,3,13,1550,away,2019-08-17 13:09:00,2019-08-17 14:14:00,2065,259
590,D,2019-08-17 12:00:00,SU,2356,I,VIE,73H,158,141,76,3,17,Narrow_Body,5,13,1550,away,2019-08-17 10:46:00,2019-08-17 11:51:00,2245,515
591,D,2019-08-17 10:55:00,SU,2336,I,STR,73H,158,141,67,3,17,Narrow_Body,4,13,1550,away,2019-08-17 09:33:00,2019-08-17 10:38:00,2515,505
592,D,2019-08-17 07:40:00,SU,1486,D,KJA,73H,158,141,194,1,17,Narrow_Body,5,13,1550,away,2019-08-17 06:28:00,2019-08-17 07:33:00,2065,356
593,A,2019-08-17 06:25:00,SU,35,D,LED,32A,158,141,204,1,17,Narrow_Body,6,13,1550,away,2019-08-17 06:34:00,2019-08-17 07:39:00,2065,153
594,D,2019-08-17 06:05:00,SU,1120,D,AER,73H,158,141,88,1,17,Narrow_Body,4,13,1550,away,2019-08-17 04:55:00,2019-08-17 06:00:00,2005,209
595,D,2019-08-17 04:05:00,AZ,543,I,CTA,321,200,141,2,5,59,Narrow_Body,2,13,1550,away,2019-08-17 02:55:00,2019-08-17 04:00:00,2035,997
596,D,2019-08-17 21:30:00,SU,1406,D,SVX,32A,158,140,210,1,18,Narrow_Body,6,13,1550,away,2019-08-17 20:20:00,2019-08-17 21:25:00,2035,314
597,A,2019-08-17 20:00:00,SU,2603,I,MAD,32B,183,140,42,3,43,Narrow_Body,6,13,1550,away,2019-08-17 20:10:00,2019-08-17 21:15:00,2125,839
598,D,2019-08-17 17:45:00,SU,1426,D,CEK,32A,158,140,203,1,18,Narrow_Body,5,13,1550,away,2019-08-17 16:34:00,2019-08-17 17:39:00,2005,330
599,D,2019-08-17 15:05:00,SU,1768,D,PEE,32A,158,140,107,1,18,Narrow_Body,4,13,1550,away,2019-08-17 13:49:00,2019-08-17 14:54:00,2095,423
600,A,2019-08-17 08:30:00,SU,47,D,LED,73H,158,140,104,1,18,Narrow_Body,4,13,1550,away,2019-08-17 08:40:00,2019-08-17 09:45:00,2065,163
601,D,2019-08-17 08:25:00,SU,2410,I,MXP,320,140,140,70,3,0,Narrow_Body,6,13,1550,away,2019-08-17 07:05:00,2019-08-17 08:10:00,2515,966
602,D,2019-08-17 08:10:00,SU,1210,D,KUF,32A,158,140,203,1,18,Narrow_Body,5,13,1550,away,2019-08-17 06:59:00,2019-08-17 08:04:00,2005,258
603,D,2019-08-17 07:50:00,SU,1042,D,OGZ,32A,158,140,107,1,18,Narrow_Body,6,13,1550,away,2019-08-17 06:34:00,2019-08-17 07:39:00,2095,185
604,D,2019-08-17 06:25:00,SU,1602,D,KUF,73H,158,140,193,1,18,Narrow_Body,6,13,1550,away,2019-08-17 05:13:00,2019-08-17 06:18:00,2035,388
605,A,2019-08-17 06:20:00,SU,511,I,BEY,32A,158,140,65,3,18,Narrow_Body,2,13,1550,away,2019-08-17 06:36:00,2019-08-17 07:41:00,2575,166
606,D,2019-08-17 20:00:00,SU,2354,I,VIE,73H,158,139,192,5,19,Narrow_Body,6,13,1550,away,2019-08-17 18:48:00,2019-08-17 19:53:00,2815,513
607,D,2019-08-17 19:15:00,SU,2016,I,PRG,32B,183,139,203,5,44,Narrow_Body,4,13,1550,away,2019-08-17 18:04:00,2019-08-17 19:09:00,2785,793
608,A,2019-08-17 14:40:00,BT,428,I,RIX,CS3,145,139,69,5,6,Narrow_Body,5,13,1550,away,2019-08-17 14:52:00,2019-08-17 15:57:00,2305,894
609,A,2019-08-17 07:20:00,SU,1217,D,KUF,32A,158,139,105,1,19,Narrow_Body,5,13,1550,away,2019-08-17 07:33:00,2019-08-17 08:38:00,2065,265
610,D,2019-08-17 04:20:00,KM,561,I,MLA,320,180,139,3,5,41,Narrow_Body,4,13,1550,away,2019-08-17 03:07:00,2019-08-17 04:12:00,2065,1003
611,A,2019-08-17 03:20:00,KM,560,I,MLA,320,180,139,4,5,41,Narrow_Body,1,13,1550,away,2019-08-17 03:28:00,2019-08-17 04:33:00,2095,1002
612,D,2019-08-17 02:40:00,SU,1300,D,MRV,32A,158,139,191,1,19,Narrow_Body,1,13,1550,away,2019-08-17 01:29:00,2019-08-17 02:34:00,1975,292
613,A,2019-08-17 01:00:00,BT,426,I,RIX,CS3,145,139,34,5,6,Narrow_Body,3,13,1550,jetbridge,2019-08-17 01:15:00,2019-08-17 02:05:00,1700,892
614,D,2019-08-17 00:45:00,SU,1196,D,KZN,73H,158,139,190,1,19,Narrow_Body,3,13,1550,away,2019-08-16 23:34:00,2019-08-17 00:39:00,1975,251
615,D,2019-08-17 23:50:00,SU,1852,I,GYD,320,140,138,77,5,2,Narrow_Body,7,13,1550,away,2019-08-17 22:37:00,2019-08-17 23:42:00,2215,919
616,D,2019-08-17 23:40:00,SU,1866,I,EVN,32B,183,138,82,3,45,Narrow_Body,6,13,1550,away,2019-08-17 22:28:00,2019-08-17 23:33:00,2215,779
617,D,2019-08-17 21:00:00,SU,32,D,LED,32A,158,138,220,1,20,Narrow_Body,5,13,1550,away,2019-08-17 19:47:00,2019-08-17 20:52:00,2035,150
618,D,2019-08-17 20:35:00,SU,1548,D,OVB,73H,158,138,193,1,20,Narrow_Body,5,13,1550,away,2019-08-17 19:23:00,2019-08-17 20:28:00,2035,384
619,A,2019-08-17 20:35:00,SU,2463,I,CDG,32B,183,138,44,3,45,Narrow_Body,5,13,1550,away,2019-08-17 20:46:00,2019-08-17 21:51:00,2185,827
620,D,2019-08-17 19:00:00,SU,1118,D,AER,73H,158,138,213,1,20,Narrow_Body,5,13,1550,away,2019-08-17 17:49:00,2019-08-17 18:54:00,2005,207
621,D,2019-08-17 18:10:00,SU,2386,I,ARN,320,140,138,209,3,2,Narrow_Body,4,13,1550,away,2019-08-17 16:58:00,2019-08-17 18:03:00,2635,954
622,A,2019-08-17 15:50:00,AZ,546,I,MXP,320,180,138,43,5,42,Narrow_Body,5,13,1550,away,2019-08-17 16:05:00,2019-08-17 17:10:00,2245,998
623,A,2019-08-17 13:50:00,SU,2011,I,PRG,73H,158,138,71,5,20,Narrow_Body,3,13,1550,away,2019-08-17 14:02:00,2019-08-17 15:07:00,2365,451
624,D,2019-08-17 13:30:00,KL,902,I,AMS,73W,142,138,69,5,4,Narrow_Body,5,13,1550,away,2019-08-17 12:13:00,2019-08-17 13:18:00,2305,1041
625,A,2019-08-17 10:20:00,SU,1485,D,KJA,320,140,138,72,3,2,Narrow_Body,4,13,1550,away,2019-08-17 10:34:00,2019-08-17 11:39:00,2455,913
626,D,2019-08-17 09:55:00,SU,1854,I,GYD,73H,158,138,66,5,20,Narrow_Body,3,13,1550,away,2019-08-17 08:32:00,2019-08-17 09:37:00,2515,426
627,D,2019-08-17 21:55:00,EO,301,D,BQS,763,290,137,74,3,153,Wide_Body,5,13,1800,away,2019-08-17 20:26:00,2019-08-17 21:46:00,2560,869
628,A,2019-08-17 21:25:00,SU,2015,I,PRG,73H,158,137,83,3,21,Narrow_Body,3,13,1550,away,2019-08-17 21:32:00,2019-08-17 22:37:00,2215,453
629,A,2019-08-17 21:20:00,KC,873,I,TSE,321,179,137,45,5,42,Narrow_Body,4,13,1550,away,2019-08-17 21:31:00,2019-08-17 22:36:00,2095,1032
630,A,2019-08-17 14:55:00,SU,2537,I,DUS,32A,158,137,76,3,21,Narrow_Body,5,13,1550,away,2019-08-17 15:04:00,2019-08-17 16:09:00,2245,538
631,D,2019-08-17 14:05:00,SU,2458,I,CDG,320,140,137,72,3,3,Narrow_Body,4,13,1550,away,2019-08-17 12:46:00,2019-08-17 13:51:00,2455,973
632,D,2019-08-17 10:15:00,SU,2300,I,FRA,320,140,137,65,3,3,Narrow_Body,3,13,1550,away,2019-08-17 08:54:00,2019-08-17 09:59:00,2575,939
633,D,2019-08-17 09:15:00,SU,2682,I,RIX,320,140,137,199,3,3,Narrow_Body,6,13,1550,away,2019-08-17 08:05:00,2019-08-17 09:10:00,2575,994
634,D,2019-08-17 09:00:00,SU,2502,I,VLC,73H,158,137,64,2,21,Narrow_Body,5,13,1550,away,2019-08-17 07:36:00,2019-08-17 08:41:00,2365,529
635,D,2019-08-17 08:30:00,SU,2104,I,VNO,321,170,137,66,5,33,Narrow_Body,4,13,1550,away,2019-08-17 07:07:00,2019-08-17 08:12:00,2515,850
636,D,2019-08-17 07:30:00,SU,2010,I,PRG,73H,158,137,63,5,21,Narrow_Body,5,13,1550,away,2019-08-17 06:08:00,2019-08-17 07:13:00,2545,450
637,D,2019-08-17 05:40:00,KL,900,I,AMS,73H,186,137,8,5,49,Narrow_Body,5,13,1550,away,2019-08-17 04:26:00,2019-08-17 05:31:00,2095,1036
638,A,2019-08-17 00:10:00,SU,2097,I,BEG,73H,158,137,7,3,21,Narrow_Body,5,13,1550,away,2019-08-17 00:18:00,2019-08-17 01:23:00,2035,468
639,A,2019-08-17 21:10:00,SU,1249,D,REN,73H,158,136,220,1,22,Narrow_Body,5,13,1550,away,2019-08-17 21:18:00,2019-08-17 22:23:00,2035,277
640,D,2019-08-17 19:30:00,SN,2846,I,BRU,319,141,136,195,5,5,Narrow_Body,5,13,1550,away,2019-08-17 18:17:00,2019-08-17 19:22:00,2815,1059
641,D,2019-08-17 17:50:00,SU,1542,D,AAQ,32A,158,136,213,1,22,Narrow_Body,6,13,1550,away,2019-08-17 16:39:00,2019-08-17 17:44:00,2005,380
642,A,2019-08-17 17:40:00,SU,2577,I,LHR,320,140,136,201,3,4,Narrow_Body,5,13,1550,away,2019-08-17 17:49:00,2019-08-17 18:54:00,2665,983
643,A,2019-08-17 17:00:00,SU,2481,I,NAP,73H,158,136,204,3,22,Narrow_Body,7,13,1550,away,2019-08-17 17:09:00,2019-08-17 18:14:00,2665,526
644,A,2019-08-17 16:50:00,BA,235,I,LHR,321,154,136,192,5,18,Narrow_Body,5,13,1550,away,2019-08-17 16:57:00,2019-08-17 18:02:00,2815,756
645,D,2019-08-17 16:30:00,SU,1302,D,MRV,73H,158,136,215,1,22,Narrow_Body,5,13,1550,away,2019-08-17 15:18:00,2019-08-17 16:23:00,2005,294
646,D,2019-08-17 16:15:00,SU,2124,I,SKG,321,170,136,84,3,34,Narrow_Body,4,13,1550,away,2019-08-17 15:00:00,2019-08-17 16:05:00,2245,852
647,A,2019-08-17 16:10:00,SU,2169,I,BRU,73H,158,136,66,5,22,Narrow_Body,6,13,1550,away,2019-08-17 16:28:00,2019-08-17 17:33:00,2515,488
648,D,2019-08-17 13:55:00,SU,2360,I,NCE,321,170,136,73,5,34,Narrow_Body,5,13,1550,away,2019-08-17 12:36:00,2019-08-17 13:41:00,2455,857
649,D,2019-08-17 13:55:00,SU,1312,D,MRV,320,140,136,104,1,4,Narrow_Body,5,13,1550,away,2019-08-17 12:40:00,2019-08-17 13:45:00,2065,906
650,A,2019-08-17 13:20:00,SU,2683,I,RIX,320,140,136,27,3,4,Narrow_Body,4,13,1550,jetbridge,2019-08-17 13:36:00,2019-08-17 14:26:00,1730,995
651,D,2019-08-17 11:30:00,SU,16,D,LED,73H,158,136,192,1,22,Narrow_Body,1,13,1550,away,2019-08-17 10:18:00,2019-08-17 11:23:00,2035,134
652,D,2019-08-17 09:45:00,BT,425,I,RIX,CS3,145,136,63,5,9,Narrow_Body,6,13,1550,away,2019-08-17 08:23:00,2019-08-17 09:28:00,2545,891
653,A,2019-08-17 07:20:00,SU,33,D,LED,32A,158,136,108,1,22,Narrow_Body,5,13,1550,away,2019-08-17 07:33:00,2019-08-17 08:38:00,2095,151
654,A,2019-08-17 06:50:00,SU,525,I,DXB,73H,158,136,200,5,22,Narrow_Body,4,13,1550,away,2019-08-17 06:56:00,2019-08-17 08:01:00,2755,172
655,D,2019-08-17 06:25:00,SU,1438,D,UFA,320,140,136,105,1,4,Narrow_Body,6,13,1550,away,2019-08-17 05:07:00,2019-08-17 06:12:00,2065,908
656,A,2019-08-17 05:40:00,SU,1575,D,AAQ,320,140,136,199,3,4,Narrow_Body,5,13,1550,away,2019-08-17 05:45:00,2019-08-17 06:50:00,2575,915
657,D,2019-08-17 02:05:00,SU,1864,I,EVN,32A,158,136,1,3,22,Narrow_Body,1,13,1550,away,2019-08-17 00:55:00,2019-08-17 02:00:00,1855,432
658,D,2019-08-17 21:40:00,SU,1430,D,BAX,73H,158,135,80,3,23,Narrow_Body,4,13,1550,away,2019-08-17 20:30:00,2019-08-17 21:35:00,2215,332
659,A,2019-08-17 21:15:00,SU,1259,D,UFA,32A,158,135,104,1,23,Narrow_Body,4,13,1550,away,2019-08-17 21:25:00,2019-08-17 22:30:00,2065,283
660,A,2019-08-17 19:55:00,BT,422,I,RIX,CS3,145,135,77,5,10,Narrow_Body,5,13,1550,away,2019-08-17 20:03:00,2019-08-17 21:08:00,2215,888
661,A,2019-08-17 18:55:00,SU,2455,I,CDG,32B,183,135,72,3,48,Narrow_Body,5,13,1550,away,2019-08-17 19:09:00,2019-08-17 20:14:00,2455,825
662,A,2019-08-17 11:45:00,SU,1255,D,NBC,32A,158,135,190,1,23,Narrow_Body,6,13,1550,away,2019-08-17 11:51:00,2019-08-17 12:56:00,1975,281
663,A,2019-08-17 10:50:00,SU,1603,D,KUF,73H,158,135,196,1,23,Narrow_Body,4,13,1550,away,2019-08-17 10:58:00,2019-08-17 12:03:00,2035,389
664,D,2019-08-17 10:35:00,SU,2346,I,HAM,320,140,135,199,3,5,Narrow_Body,4,13,1550,away,2019-08-17 09:25:00,2019-08-17 10:30:00,2575,945
665,D,2019-08-17 09:25:00,SU,2322,I,MUC,320,140,135,197,3,5,Narrow_Body,4,13,1550,away,2019-08-17 08:13:00,2019-08-17 09:18:00,2635,943
666,A,2019-08-17 08:15:00,SU,1961,I,KZO,320,140,135,200,2,5,Narrow_Body,6,13,1550,away,2019-08-17 08:21:00,2019-08-17 09:26:00,2755,923
667,A,2019-08-17 20:45:00,JU,654,I,BEG,319,138,134,75,5,4,Narrow_Body,6,13,1550,away,2019-08-17 20:53:00,2019-08-17 21:58:00,2215,1022
668,A,2019-08-17 19:10:00,SU,2419,I,FCO,73H,158,134,84,3,24,Narrow_Body,6,13,1550,away,2019-08-17 19:20:00,2019-08-17 20:25:00,2245,519
669,D,2019-08-17 17:40:00,SU,2138,I,IST,73H,158,134,207,2,24,Narrow_Body,5,13,1550,away,2019-08-17 16:28:00,2019-08-17 17:33:00,2755,479
670,A,2019-08-17 15:45:00,SU,2425,I,BLQ,320,140,134,71,5,6,Narrow_Body,4,13,1550,away,2019-08-17 15:57:00,2019-08-17 17:02:00,2365,972
671,A,2019-08-17 12:50:00,SU,1439,D,UFA,320,140,134,108,1,6,Narrow_Body,4,13,1550,away,2019-08-17 13:03:00,2019-08-17 14:08:00,2095,909
672,D,2019-08-17 08:45:00,SU,2106,I,TLL,73H,158,134,61,5,24,Narrow_Body,5,13,1550,away,2019-08-17 07:23:00,2019-08-17 08:28:00,2515,469
673,A,2019-08-17 04:15:00,SU,2453,I,CDG,321,170,134,9,3,36,Narrow_Body,2,13,1550,away,2019-08-17 04:25:00,2019-08-17 05:30:00,2035,859
674,A,2019-08-17 03:15:00,SU,2595,I,MUC,320,140,134,5,3,6,Narrow_Body,1,13,1550,away,2019-08-17 03:22:00,2019-08-17 04:27:00,1975,987
675,D,2019-08-17 20:15:00,SU,2092,I,BEG,32A,158,133,207,2,25,Narrow_Body,4,13,1550,away,2019-08-17 19:03:00,2019-08-17 20:08:00,2755,466
676,A,2019-08-17 20:05:00,FV,6638,I,ORY,73H,189,133,81,3,56,Narrow_Body,5,13,1550,away,2019-08-17 20:10:00,2019-08-17 21:15:00,2215,706
677,D,2019-08-17 19:50:00,N4,161,D,KRR,73H,189,133,209,3,56,Narrow_Body,6,13,1550,away,2019-08-17 18:38:00,2019-08-17 19:43:00,2635,638
678,A,2019-08-17 19:45:00,SU,1313,D,MRV,320,140,133,104,1,7,Narrow_Body,5,13,1550,away,2019-08-17 19:55:00,2019-08-17 21:00:00,2065,907
679,A,2019-08-17 16:40:00,SU,2323,I,MUC,320,140,133,216,3,7,Narrow_Body,5,13,1550,away,2019-08-17 16:48:00,2019-08-17 17:53:00,2665,944
680,A,2019-08-17 14:40:00,SU,2571,I,LHR,320,140,133,68,3,7,Narrow_Body,5,13,1550,away,2019-08-17 14:51:00,2019-08-17 15:56:00,2425,981
681,D,2019-08-17 06:10:00,AF,1845,I,CDG,319,143,133,45,5,10,Narrow_Body,6,13,1550,away,2019-08-17 04:54:00,2019-08-17 05:59:00,2095,1055
682,A,2019-08-17 06:05:00,FV,6168,D,REN,73H,189,133,197,3,56,Narrow_Body,4,13,1550,away,2019-08-17 06:12:00,2019-08-17 07:17:00,2635,692
683,D,2019-08-17 22:20:00,SU,1458,D,NOZ,73H,158,132,82,3,26,Narrow_Body,5,13,1550,away,2019-08-17 21:08:00,2019-08-17 22:13:00,2215,344
684,D,2019-08-17 22:05:00,KC,876,I,ALA,32A,148,132,79,5,16,Narrow_Body,4,13,1550,away,2019-08-17 20:52:00,2019-08-17 21:57:00,2215,1021
685,A,2019-08-17 18:20:00,FV,6140,I,NCE,73H,189,132,204,3,57,Narrow_Body,6,13,1550,away,2019-08-17 18:29:00,2019-08-17 19:34:00,2665,682
686,D,2019-08-17 17:25:00,SU,1440,D,IKT,73H,158,132,196,1,26,Narrow_Body,4,13,1550,away,2019-08-17 16:12:00,2019-08-17 17:17:00,2035,338
687,A,2019-08-17 15:50:00,SU,2211,I,ARN,73H,158,132,61,3,26,Narrow_Body,5,13,1550,away,2019-08-17 16:07:00,2019-08-17 17:12:00,2575,492
688,D,2019-08-17 08:05:00,SU,1498,D,GRV,32A,158,132,202,1,26,Narrow_Body,5,13,1550,away,2019-08-17 06:54:00,2019-08-17 07:59:00,2005,360
689,D,2019-08-17 07:20:00,SU,570,I,TLV,320,140,132,66,3,8,Narrow_Body,5,13,1550,away,2019-08-17 05:57:00,2019-08-17 07:02:00,2635,901
690,A,2019-08-17 06:15:00,SU,1223,D,GOJ,73H,158,132,109,1,26,Narrow_Body,5,13,1550,away,2019-08-17 06:27:00,2019-08-17 07:32:00,2095,267
691,D,2019-08-17 06:00:00,SU,1284,D,KRR,73H,158,132,196,1,26,Narrow_Body,6,13,1550,away,2019-08-17 04:47:00,2019-08-17 05:52:00,2035,290
692,A,2019-08-17 04:25:00,SU,2193,I,AMS,32B,183,132,42,3,51,Narrow_Body,3,13,1550,away,2019-08-17 04:35:00,2019-08-17 05:40:00,2125,814
693,D,2019-08-17 20:55:00,SU,1314,D,MRV,73H,158,131,105,1,27,Narrow_Body,5,13,1550,away,2019-08-17 19:37:00,2019-08-17 20:42:00,2065,300
694,D,2019-08-17 19:50:00,SU,2496,I,CPH,73H,158,131,101,5,27,Narrow_Body,6,13,1550,away,2019-08-17 18:35:00,2019-08-17 19:40:00,2845,527
695,D,2019-08-17 17:20:00,SU,2096,I,BEG,73H,158,131,65,3,27,Narrow_Body,5,13,1550,away,2019-08-17 15:59:00,2019-08-17 17:04:00,2575,467
696,A,2019-08-17 12:35:00,KL,901,I,AMS,73W,142,131,61,5,11,Narrow_Body,2,13,1550,away,2019-08-17 12:52:00,2019-08-17 13:57:00,2515,1040
697,A,2019-08-17 05:25:00,SU,2145,I,AYT,321,170,131,64,2,39,Narrow_Body,3,13,1550,away,2019-08-17 05:44:00,2019-08-17 06:49:00,2365,854
698,D,2019-08-17 19:25:00,SU,2112,I,ATH,32B,183,130,196,2,53,Narrow_Body,5,13,1550,away,2019-08-17 18:12:00,2019-08-17 19:17:00,2785,804
699,D,2019-08-17 18:50:00,SU,2304,I,FRA,320,140,130,218,3,10,Narrow_Body,5,13,1550,away,2019-08-17 17:36:00,2019-08-17 18:41:00,2665,941
700,A,2019-08-17 18:40:00,SN,2845,I,BRU,319,141,130,67,5,11,Narrow_Body,5,13,1550,away,2019-08-17 18:57:00,2019-08-17 20:02:00,2575,1058
701,D,2019-08-17 17:40:00,N4,225,D,AER,73H,189,130,197,3,59,Narrow_Body,5,13,1550,away,2019-08-17 16:28:00,2019-08-17 17:33:00,2635,650
702,A,2019-08-17 17:15:00,SU,2347,I,HAM,320,140,130,176,3,10,Narrow_Body,4,13,1550,away,2019-08-17 17:25:00,2019-08-17 18:30:00,2695,946
703,D,2019-08-17 15:25:00,BT,429,I,RIX,CS3,145,130,73,5,15,Narrow_Body,5,13,1550,away,2019-08-17 14:06:00,2019-08-17 15:11:00,2455,895
704,D,2019-08-17 14:30:00,SU,2408,I,FCO,320,140,130,62,3,10,Narrow_Body,5,13,1550,away,2019-08-17 13:07:00,2019-08-17 14:12:00,2515,964
705,A,2019-08-17 13:05:00,KC,275,I,ALA,32N,162,130,66,5,32,Narrow_Body,3,13,1550,away,2019-08-17 13:23:00,2019-08-17 14:28:00,2515,865
706,A,2019-08-17 09:00:00,BT,424,I,RIX,CS3,145,130,64,5,15,Narrow_Body,5,13,1550,away,2019-08-17 09:19:00,2019-08-17 10:24:00,2545,890
707,D,2019-08-17 08:40:00,FV,6161,D,KGD,73H,189,130,209,3,59,Narrow_Body,5,13,1550,away,2019-08-17 07:28:00,2019-08-17 08:33:00,2635,687
708,D,2019-08-17 08:35:00,SU,2402,I,FCO,320,140,130,201,3,10,Narrow_Body,6,13,1550,away,2019-08-17 07:21:00,2019-08-17 08:26:00,2665,958
709,D,2019-08-17 07:30:00,SU,1444,D,IKT,73H,158,130,108,1,28,Narrow_Body,5,13,1550,away,2019-08-17 06:12:00,2019-08-17 07:17:00,2095,340
710,A,2019-08-17 23:15:00,SU,2003,I,WAW,32A,158,129,74,3,29,Narrow_Body,5,13,1550,away,2019-08-17 23:24:00,2019-08-18 00:29:00,2215,447
711,A,2019-08-17 20:15:00,SU,2407,I,FCO,320,140,129,76,3,11,Narrow_Body,4,13,1550,away,2019-08-17 20:24:00,2019-08-17 21:29:00,2245,963
712,A,2019-08-17 17:00:00,SU,2611,I,LJU,320,140,129,202,3,11,Narrow_Body,7,13,1550,away,2019-08-17 17:06:00,2019-08-17 18:11:00,2695,991
713,D,2019-08-17 07:30:00,SU,1158,D,ROV,73H,158,129,214,1,29,Narrow_Body,5,13,1550,away,2019-08-17 06:15:00,2019-08-17 07:20:00,2095,235
714,D,2019-08-17 07:00:00,SU,1254,D,NBC,32A,158,129,219,1,29,Narrow_Body,4,13,1550,away,2019-08-17 05:45:00,2019-08-17 06:50:00,2095,280
715,A,2019-08-17 03:45:00,AZ,596,I,FCO,320,180,129,80,5,51,Narrow_Body,1,13,1550,away,2019-08-17 03:50:00,2019-08-17 04:55:00,2095,1005
716,D,2019-08-17 23:45:00,SU,1408,D,SVX,32A,158,128,217,1,30,Narrow_Body,4,13,1550,away,2019-08-17 22:35:00,2019-08-17 23:40:00,1945,316
717,D,2019-08-17 21:15:00,SU,2134,I,IST,320,140,128,71,5,12,Narrow_Body,4,13,1550,away,2019-08-17 19:58:00,2019-08-17 21:03:00,2365,934
718,D,2019-08-17 18:25:00,SU,2392,I,ZRH,320,140,128,215,2,12,Narrow_Body,6,13,1550,away,2019-08-17 17:13:00,2019-08-17 18:18:00,2785,956
719,A,2019-08-17 16:45:00,SU,2411,I,MXP,320,140,128,220,3,12,Narrow_Body,6,13,1550,away,2019-08-17 16:53:00,2019-08-17 17:58:00,2695,967
720,D,2019-08-17 16:35:00,SU,2146,I,AYT,320,140,128,45,3,12,Narrow_Body,5,13,1550,away,2019-08-17 15:19:00,2019-08-17 16:24:00,2275,935
721,D,2019-08-17 09:00:00,SU,1162,D,ROV,32A,158,128,194,1,30,Narrow_Body,5,13,1550,away,2019-08-17 07:48:00,2019-08-17 08:53:00,2065,237
722,A,2019-08-17 23:50:00,SU,1131,D,AER,32A,158,127,89,1,31,Narrow_Body,7,13,1550,away,2019-08-17 23:55:00,2019-08-18 01:00:00,1975,218
723,A,2019-08-17 23:50:00,SU,2157,I,BOJ,32A,158,127,7,3,31,Narrow_Body,7,13,1550,away,2019-08-17 23:58:00,2019-08-18 01:03:00,2035,486
724,D,2019-08-17 23:40:00,SU,1502,D,TJM,32A,158,127,206,1,31,Narrow_Body,6,13,1550,away,2019-08-17 22:30:00,2019-08-17 23:35:00,1975,364
725,A,2019-08-17 23:25:00,SU,1007,D,KGD,73H,158,127,190,1,31,Narrow_Body,6,13,1550,away,2019-08-17 23:31:00,2019-08-18 00:36:00,1975,180
726,D,2019-08-17 23:20:00,SU,1322,D,MMK,32A,158,127,203,1,31,Narrow_Body,3,13,1550,away,2019-08-17 22:09:00,2019-08-17 23:14:00,2005,302
727,D,2019-08-17 22:50:00,SU,1646,D,NJC,32A,158,127,76,3,31,Narrow_Body,4,13,1550,away,2019-08-17 21:36:00,2019-08-17 22:41:00,2245,412
728,A,2019-08-17 22:10:00,SU,1619,D,SIP,32A,158,127,202,1,31,Narrow_Body,4,13,1550,away,2019-08-17 22:16:00,2019-08-17 23:21:00,2005,391
729,A,2019-08-17 21:55:00,SU,2621,I,AGP,73H,158,127,84,3,31,Narrow_Body,5,13,1550,away,2019-08-17 22:05:00,2019-08-17 23:10:00,2245,548
730,A,2019-08-17 21:40:00,SU,1059,D,MCX,32A,158,127,215,1,31,Narrow_Body,4,13,1550,away,2019-08-17 21:47:00,2019-08-17 22:52:00,2005,192
731,A,2019-08-17 21:30:00,SU,1079,D,IGT,32A,158,127,210,1,31,Narrow_Body,6,13,1550,away,2019-08-17 21:35:00,2019-08-17 22:40:00,2035,196
732,A,2019-08-17 21:20:00,SU,1011,D,KGD,32A,158,127,105,1,31,Narrow_Body,4,13,1550,away,2019-08-17 21:33:00,2019-08-17 22:38:00,2065,184
733,A,2019-08-17 21:20:00,SU,1625,D,SIP,32A,158,127,194,1,31,Narrow_Body,4,13,1550,away,2019-08-17 21:27:00,2019-08-17 22:32:00,2065,397
734,D,2019-08-17 20:50:00,SU,1894,I,OSS,73H,158,127,68,3,31,Narrow_Body,4,13,1550,away,2019-08-17 19:34:00,2019-08-17 20:39:00,2425,441
735,A,2019-08-17 20:30:00,SU,1175,D,ASF,32A,158,127,204,1,31,Narrow_Body,5,13,1550,away,2019-08-17 20:39:00,2019-08-17 21:44:00,2065,242
736,A,2019-08-17 20:10:00,SU,1125,D,AER,32A,158,127,194,1,31,Narrow_Body,4,13,1550,away,2019-08-17 20:17:00,2019-08-17 21:22:00,2065,214
737,A,2019-08-17 20:05:00,SU,1423,D,CEK,32A,158,127,107,1,31,Narrow_Body,5,13,1550,away,2019-08-17 20:16:00,2019-08-17 21:21:00,2095,327
738,A,2019-08-17 19:50:00,SU,1629,D,SIP,32A,158,127,108,1,31,Narrow_Body,6,13,1550,away,2019-08-17 20:03:00,2019-08-17 21:08:00,2095,401
739,D,2019-08-17 19:45:00,SU,2422,I,VCE,73H,158,127,158,5,31,Narrow_Body,5,13,1550,away,2019-08-17 18:30:00,2019-08-17 19:35:00,2845,520
740,A,2019-08-17 19:10:00,SU,1649,D,SIP,32A,158,127,109,1,31,Narrow_Body,6,13,1550,away,2019-08-17 19:22:00,2019-08-17 20:27:00,2095,415
741,A,2019-08-17 19:00:00,SU,1005,D,KGD,32A,158,127,194,1,31,Narrow_Body,5,13,1550,away,2019-08-17 19:07:00,2019-08-17 20:12:00,2065,178
742,A,2019-08-17 18:45:00,SU,1461,D,OVB,73H,158,127,107,1,31,Narrow_Body,5,13,1550,away,2019-08-17 18:56:00,2019-08-17 20:01:00,2095,347
743,D,2019-08-17 18:30:00,SU,1006,D,KGD,73H,158,127,193,1,31,Narrow_Body,6,13,1550,away,2019-08-17 17:18:00,2019-08-17 18:23:00,2035,179
744,A,2019-08-17 18:15:00,SU,1623,D,SIP,73H,158,127,220,1,31,Narrow_Body,4,13,1550,away,2019-08-17 18:23:00,2019-08-17 19:28:00,2035,395
745,A,2019-08-17 18:00:00,SU,1103,D,KRR,73H,158,127,104,1,31,Narrow_Body,4,13,1550,away,2019-08-17 18:10:00,2019-08-17 19:15:00,2065,198
746,D,2019-08-17 17:55:00,SU,2468,I,BUD,320,140,127,195,2,13,Narrow_Body,4,13,1550,away,2019-08-17 16:42:00,2019-08-17 17:47:00,2785,975
747,A,2019-08-17 17:30:00,SU,2055,I,TIV,73H,158,127,194,5,31,Narrow_Body,4,13,1550,away,2019-08-17 17:37:00,2019-08-17 18:42:00,2845,461
748,D,2019-08-17 17:25:00,SU,1658,D,SIP,32A,158,127,104,1,31,Narrow_Body,4,13,1550,away,2019-08-17 16:10:00,2019-08-17 17:15:00,2065,416
749,A,2019-08-17 17:10:00,SU,2091,I,BEG,320,140,127,90,2,13,Narrow_Body,2,13,1550,away,2019-08-17 17:20:00,2019-08-17 18:25:00,2845,929
750,A,2019-08-17 16:45:00,SU,1861,I,EVN,32A,158,127,158,3,31,Narrow_Body,6,13,1550,away,2019-08-17 16:55:00,2019-08-17 18:00:00,2725,431
751,D,2019-08-17 16:10:00,SU,1618,D,SIP,32A,158,127,210,1,31,Narrow_Body,6,13,1550,away,2019-08-17 15:00:00,2019-08-17 16:05:00,2035,390
752,A,2019-08-17 15:35:00,SU,2061,I,SOF,32A,158,127,70,2,31,Narrow_Body,6,13,1550,away,2019-08-17 15:50:00,2019-08-17 16:55:00,2245,463
753,A,2019-08-17 15:30:00,SU,1621,D,SIP,32A,158,127,220,1,31,Narrow_Body,4,13,1550,away,2019-08-17 15:38:00,2019-08-17 16:43:00,2035,393
754,A,2019-08-17 15:15:00,SU,1003,D,KGD,32A,158,127,105,1,31,Narrow_Body,5,13,1550,away,2019-08-17 15:28:00,2019-08-17 16:33:00,2065,176
755,A,2019-08-17 15:00:00,SU,1053,D,MCX,32A,158,127,204,1,31,Narrow_Body,5,13,1550,away,2019-08-17 15:09:00,2019-08-17 16:14:00,2065,188
756,D,2019-08-17 14:55:00,SU,1624,D,SIP,32A,158,127,109,1,31,Narrow_Body,5,13,1550,away,2019-08-17 13:38:00,2019-08-17 14:43:00,2095,396
757,A,2019-08-17 14:50:00,SU,1759,D,VOG,73H,158,127,104,1,31,Narrow_Body,6,13,1550,away,2019-08-17 15:00:00,2019-08-17 16:05:00,2065,420
758,D,2019-08-17 14:30:00,SU,2326,I,MUC,32A,158,127,67,3,31,Narrow_Body,5,13,1550,away,2019-08-17 13:08:00,2019-08-17 14:13:00,2515,503
759,A,2019-08-17 14:10:00,SU,1641,D,OMS,73H,158,127,72,3,31,Narrow_Body,5,13,1550,away,2019-08-17 14:24:00,2019-08-17 15:29:00,2455,409
760,A,2019-08-17 13:10:00,SU,1859,I,EVN,32A,158,127,65,3,31,Narrow_Body,4,13,1550,away,2019-08-17 13:26:00,2019-08-17 14:31:00,2575,429
761,D,2019-08-17 12:40:00,SU,1648,D,SIP,32A,158,127,213,1,31,Narrow_Body,4,13,1550,away,2019-08-17 11:29:00,2019-08-17 12:34:00,2005,414
762,D,2019-08-17 12:25:00,SU,18,D,LED,73H,158,127,210,1,31,Narrow_Body,5,13,1550,away,2019-08-17 11:15:00,2019-08-17 12:20:00,2035,136
763,A,2019-08-17 12:00:00,SU,11,D,LED,32A,158,127,105,1,31,Narrow_Body,5,13,1550,away,2019-08-17 12:13:00,2019-08-17 13:18:00,2065,129
764,A,2019-08-17 12:00:00,SU,1121,D,AER,73H,158,127,107,1,31,Narrow_Body,5,13,1550,away,2019-08-17 12:11:00,2019-08-17 13:16:00,2095,210
765,D,2019-08-17 11:45:00,SU,1622,D,SIP,73H,158,127,193,1,31,Narrow_Body,6,13,1550,away,2019-08-17 10:33:00,2019-08-17 11:38:00,2035,394
766,D,2019-08-17 10:55:00,SU,14,D,LED,32A,158,127,203,1,31,Narrow_Body,4,13,1550,away,2019-08-17 09:44:00,2019-08-17 10:49:00,2005,132
767,A,2019-08-17 10:55:00,SU,1479,D,ABA,73H,158,127,9,3,31,Narrow_Body,4,13,1550,away,2019-08-17 11:05:00,2019-08-17 12:10:00,2035,353
768,D,2019-08-17 10:10:00,SU,1002,D,KGD,32A,158,127,105,1,31,Narrow_Body,5,13,1550,away,2019-08-17 08:52:00,2019-08-17 09:57:00,2065,175
769,D,2019-08-17 10:00:00,SU,1758,D,VOG,73H,158,127,204,1,31,Narrow_Body,5,13,1550,away,2019-08-17 08:46:00,2019-08-17 09:51:00,2065,419
770,D,2019-08-17 09:40:00,SU,2610,I,LJU,320,140,127,216,3,13,Narrow_Body,5,13,1550,away,2019-08-17 08:27:00,2019-08-17 09:32:00,2665,990
771,A,2019-08-17 08:50:00,SU,1447,D,BAX,32A,158,127,209,3,31,Narrow_Body,4,13,1550,away,2019-08-17 08:57:00,2019-08-17 10:02:00,2635,343
772,A,2019-08-17 08:35:00,SU,1639,D,OMS,32A,158,127,201,3,31,Narrow_Body,6,13,1550,away,2019-08-17 08:44:00,2019-08-17 09:49:00,2665,407
773,D,2019-08-17 07:40:00,SU,1880,I,FRU,32A,158,127,216,3,31,Narrow_Body,5,13,1550,away,2019-08-17 06:27:00,2019-08-17 07:32:00,2665,439
774,D,2019-08-17 07:25:00,SU,1644,D,SIP,32A,158,127,106,1,31,Narrow_Body,5,13,1550,away,2019-08-17 06:09:00,2019-08-17 07:14:00,2125,410
775,A,2019-08-17 07:10:00,SU,1895,I,OSS,73H,158,127,218,3,31,Narrow_Body,5,13,1550,away,2019-08-17 07:19:00,2019-08-17 08:24:00,2665,442
776,D,2019-08-17 06:45:00,SU,1410,D,SVX,32A,158,127,111,1,31,Narrow_Body,4,13,1550,away,2019-08-17 05:29:00,2019-08-17 06:34:00,2125,318
777,A,2019-08-17 06:25:00,SU,1763,D,OMS,32A,158,127,176,3,31,Narrow_Body,6,13,1550,away,2019-08-17 06:35:00,2019-08-17 07:40:00,2695,422
778,A,2019-08-17 06:10:00,SU,1549,D,OVB,32A,158,127,168,1,31,Narrow_Body,6,13,1550,away,2019-08-17 06:21:00,2019-08-17 07:26:00,2125,385
779,A,2019-08-17 05:50:00,SU,1009,D,KGD,32A,158,127,189,1,31,Narrow_Body,3,13,1550,away,2019-08-17 06:01:00,2019-08-17 07:06:00,2125,182
780,A,2019-08-17 04:45:00,SU,1869,I,EVN,73H,158,127,81,3,31,Narrow_Body,3,13,1550,away,2019-08-17 04:50:00,2019-08-17 05:55:00,2215,435
781,A,2019-08-17 02:50:00,SU,2393,I,ZRH,320,140,127,8,3,13,Narrow_Body,3,13,1550,away,2019-08-17 02:59:00,2019-08-17 04:04:00,1975,957
782,D,2019-08-17 01:55:00,SU,1436,D,SVX,32A,158,127,213,1,31,Narrow_Body,3,13,1550,away,2019-08-17 00:44:00,2019-08-17 01:49:00,2005,336
783,D,2019-08-17 01:35:00,SU,1512,D,SGC,32A,158,127,215,1,31,Narrow_Body,4,13,1550,away,2019-08-17 00:23:00,2019-08-17 01:28:00,2005,370
784,D,2019-08-17 01:20:00,SU,1632,D,SIP,32A,158,127,192,1,31,Narrow_Body,1,13,1550,away,2019-08-17 00:08:00,2019-08-17 01:13:00,2035,402
785,D,2019-08-17 00:10:00,SU,1222,D,GOJ,73H,158,127,206,1,31,Narrow_Body,5,13,1550,away,2019-08-16 23:00:00,2019-08-17 00:05:00,1975,266
786,A,2019-08-17 22:50:00,SU,2629,I,BRU,73H,158,126,43,5,32,Narrow_Body,4,13,1550,away,2019-08-17 23:05:00,2019-08-18 00:10:00,2245,550
787,A,2019-08-17 22:45:00,SU,2349,I,HAM,320,140,126,83,3,14,Narrow_Body,3,13,1550,away,2019-08-17 22:52:00,2019-08-17 23:57:00,2215,948
788,A,2019-08-17 22:25:00,SU,2681,I,RIX,320,140,126,69,3,14,Narrow_Body,3,13,1550,away,2019-08-17 22:37:00,2019-08-17 23:42:00,2365,993
789,D,2019-08-17 22:20:00,SU,1394,D,PEE,32A,158,126,109,1,32,Narrow_Body,5,13,1550,away,2019-08-17 21:03:00,2019-08-17 22:08:00,2095,308
790,D,2019-08-17 21:35:00,JU,655,I,BEG,319,138,126,43,5,12,Narrow_Body,6,13,1550,away,2019-08-17 20:15:00,2019-08-17 21:20:00,2245,1023
791,A,2019-08-17 21:30:00,SU,1215,D,KUF,73H,158,126,107,1,32,Narrow_Body,6,13,1550,away,2019-08-17 21:41:00,2019-08-17 22:46:00,2095,263
792,D,2019-08-17 19:40:00,SU,28,D,LED,73H,158,126,105,1,32,Narrow_Body,5,13,1550,away,2019-08-17 18:22:00,2019-08-17 19:27:00,2065,146
793,A,2019-08-17 18:30:00,SU,2301,I,FRA,320,140,126,6,3,14,Narrow_Body,6,13,1550,away,2019-08-17 18:38:00,2019-08-17 19:43:00,2035,940
794,A,2019-08-17 18:25:00,SU,1213,D,KUF,73H,158,126,108,1,32,Narrow_Body,6,13,1550,away,2019-08-17 18:38:00,2019-08-17 19:43:00,2095,261
795,A,2019-08-17 16:30:00,SU,2659,I,CPH,73H,158,126,201,5,32,Narrow_Body,5,13,1550,away,2019-08-17 16:39:00,2019-08-17 17:44:00,2815,554
796,D,2019-08-17 16:00:00,SU,1258,D,UFA,32A,158,126,108,1,32,Narrow_Body,5,13,1550,away,2019-08-17 14:42:00,2019-08-17 15:47:00,2095,282
797,A,2019-08-17 15:30:00,SU,2483,I,VRN,320,140,126,199,3,14,Narrow_Body,4,13,1550,away,2019-08-17 15:35:00,2019-08-17 16:40:00,2575,979
798,D,2019-08-17 07:50:00,SU,2424,I,BLQ,320,140,126,195,5,14,Narrow_Body,6,13,1550,away,2019-08-17 06:37:00,2019-08-17 07:42:00,2815,971
799,A,2019-08-17 23:45:00,SU,29,D,LED,73H,158,125,191,1,33,Narrow_Body,4,13,1550,away,2019-08-17 23:51:00,2019-08-18 00:56:00,1975,147
800,A,2019-08-17 22:05:00,SU,2117,I,ATH,320,140,125,68,2,15,Narrow_Body,4,13,1550,away,2019-08-17 22:16:00,2019-08-17 23:21:00,2245,933
801,A,2019-08-17 20:10:00,CZ,6001,I,URC,738,178,125,69,3,53,Narrow_Body,4,13,1550,away,2019-08-17 20:22:00,2019-08-17 21:27:00,2365,1060
802,A,2019-08-17 17:30:00,SU,2403,I,FCO,320,140,125,152,3,15,Narrow_Body,4,13,1550,away,2019-08-17 17:42:00,2019-08-17 18:47:00,2755,959
803,A,2019-08-17 15:10:00,SU,1277,D,KZN,73H,158,125,107,1,33,Narrow_Body,5,13,1550,away,2019-08-17 15:21:00,2019-08-17 16:26:00,2095,289
804,D,2019-08-17 08:05:00,SU,1052,D,MCX,32A,158,125,199,1,33,Narrow_Body,5,13,1550,away,2019-08-17 06:55:00,2019-08-17 08:00:00,2095,187
805,A,2019-08-17 04:55:00,SU,2591,I,DUB,320,140,125,82,3,15,Narrow_Body,2,13,1550,away,2019-08-17 05:02:00,2019-08-17 06:07:00,2215,985
806,A,2019-08-17 04:15:00,SU,2475,I,NCE,320,140,125,44,5,15,Narrow_Body,2,13,1550,away,2019-08-17 04:26:00,2019-08-17 05:31:00,2125,977
807,D,2019-08-17 00:40:00,FV,6167,D,REN,73H,189,125,8,3,64,Narrow_Body,4,13,1550,away,2019-08-16 23:26:00,2019-08-17 00:31:00,1975,691
808,A,2019-08-17 00:10:00,SU,2469,I,BUD,320,140,125,9,3,15,Narrow_Body,5,13,1550,away,2019-08-17 00:20:00,2019-08-17 01:25:00,2035,976
809,A,2019-08-17 18:25:00,SU,2137,I,IST,32A,158,124,90,2,34,Narrow_Body,6,13,1550,away,2019-08-17 18:35:00,2019-08-17 19:40:00,2845,478
810,D,2019-08-17 16:05:00,SU,2348,I,HAM,320,140,124,62,3,16,Narrow_Body,5,13,1550,away,2019-08-17 14:42:00,2019-08-17 15:47:00,2515,947
811,D,2019-08-17 15:55:00,SU,2586,I,MXP,320,140,124,82,3,16,Narrow_Body,6,13,1550,away,2019-08-17 14:43:00,2019-08-17 15:48:00,2215,984
812,D,2019-08-17 12:55:00,SU,2116,I,ATH,320,140,124,84,2,16,Narrow_Body,4,13,1550,away,2019-08-17 11:40:00,2019-08-17 12:45:00,2155,932
813,A,2019-08-17 06:35:00,SU,1949,I,AKX,320,140,124,207,2,16,Narrow_Body,3,13,1550,away,2019-08-17 06:42:00,2019-08-17 07:47:00,2755,922
814,A,2019-08-17 05:40:00,SU,2071,I,LCA,320,140,124,200,5,16,Narrow_Body,5,13,1550,away,2019-08-17 05:46:00,2019-08-17 06:51:00,2755,927
815,A,2019-08-17 04:00:00,SU,2423,I,VCE,320,140,124,75,3,16,Narrow_Body,2,13,1550,away,2019-08-17 04:08:00,2019-08-17 05:13:00,2185,970
816,A,2019-08-17 01:30:00,KL,907,I,AMS,73H,186,124,10,5,62,Narrow_Body,3,13,1550,away,2019-08-17 01:35:00,2019-08-17 02:40:00,1945,1039
817,A,2019-08-17 23:05:00,SU,2409,I,FCO,320,140,123,78,3,17,Narrow_Body,3,13,1550,away,2019-08-17 23:11:00,2019-08-18 00:16:00,2215,965
818,D,2019-08-17 20:00:00,SU,2070,I,LCA,320,140,123,96,5,17,Narrow_Body,6,13,1550,away,2019-08-17 18:44:00,2019-08-17 19:49:00,2875,926
819,D,2019-08-17 11:25:00,SU,2406,I,FCO,320,140,123,62,3,17,Narrow_Body,3,13,1550,away,2019-08-17 10:02:00,2019-08-17 11:07:00,2515,962
820,D,2019-08-17 22:20:00,KC,874,I,TSE,321,179,122,68,5,57,Narrow_Body,5,13,1550,away,2019-08-17 21:04:00,2019-08-17 22:09:00,2395,1033
821,D,2019-08-17 19:20:00,SU,1194,D,KZN,32B,183,122,115,1,61,Narrow_Body,5,13,1550,jetbridge,2019-08-17 18:08:00,2019-08-17 18:58:00,1910,768
822,D,2019-08-17 17:20:00,FV,6183,D,ROV,73H,189,122,218,3,67,Narrow_Body,5,13,1550,away,2019-08-17 16:06:00,2019-08-17 17:11:00,2665,695
823,A,2019-08-17 09:05:00,SU,1449,D,MQF,320,140,122,210,3,18,Narrow_Body,6,13,1550,away,2019-08-17 09:10:00,2019-08-17 10:15:00,2665,911
824,D,2019-08-17 07:35:00,SU,2482,I,VRN,320,140,122,158,3,18,Narrow_Body,5,13,1550,away,2019-08-17 06:20:00,2019-08-17 07:25:00,2725,978
825,D,2019-08-17 06:30:00,SU,1270,D,KZN,320,140,122,194,1,18,Narrow_Body,4,13,1550,away,2019-08-17 05:18:00,2019-08-17 06:23:00,2065,904
826,A,2019-08-17 01:10:00,SU,45,D,LED,32A,158,122,88,1,36,Narrow_Body,2,13,1550,away,2019-08-17 01:15:00,2019-08-17 02:20:00,2005,161
827,A,2019-08-17 00:55:00,SU,2147,I,AYT,320,140,122,27,3,18,Narrow_Body,4,13,1550,jetbridge,2019-08-17 01:11:00,2019-08-17 02:01:00,1730,936
828,D,2019-08-17 20:45:00,SU,400,I,CAI,32B,183,121,70,2,62,Narrow_Body,6,13,1550,away,2019-08-17 19:25:00,2019-08-17 20:30:00,2245,758
829,D,2019-08-17 17:05:00,SU,1214,D,KUF,73H,158,121,194,1,37,Narrow_Body,6,13,1550,away,2019-08-17 15:53:00,2019-08-17 16:58:00,2065,262
830,A,2019-08-17 17:05:00,SU,2041,I,ZAG,320,140,121,101,5,19,Narrow_Body,6,13,1550,away,2019-08-17 17:15:00,2019-08-17 18:20:00,2845,925
831,A,2019-08-17 11:45:00,SU,1247,D,REN,320,140,121,204,1,19,Narrow_Body,6,13,1550,away,2019-08-17 11:54:00,2019-08-17 12:59:00,2065,903
832,D,2019-08-17 08:50:00,SU,2576,I,LHR,320,140,121,158,3,19,Narrow_Body,4,13,1550,away,2019-08-17 07:35:00,2019-08-17 08:40:00,2725,982
833,A,2019-08-17 03:35:00,SU,2497,I,CPH,73H,158,121,45,5,37,Narrow_Body,1,13,1550,away,2019-08-17 03:46:00,2019-08-17 04:51:00,2095,528
834,D,2019-08-17 22:55:00,FV,6193,D,ROV,73H,189,120,43,3,69,Narrow_Body,3,13,1550,away,2019-08-17 21:35:00,2019-08-17 22:40:00,2275,703
835,D,2019-08-17 08:35:00,SU,2378,I,MRS,320,140,120,152,3,20,Narrow_Body,6,13,1550,away,2019-08-17 07:18:00,2019-08-17 08:23:00,2755,952
836,D,2019-08-17 07:25:00,EO,229,D,AER,73H,189,120,209,3,69,Narrow_Body,5,13,1550,away,2019-08-17 06:13:00,2019-08-17 07:18:00,2635,652
837,D,2019-08-17 15:10:00,SU,1064,D,NAL,32A,158,119,197,1,39,Narrow_Body,5,13,1550,away,2019-08-17 13:58:00,2019-08-17 15:03:00,2095,193
838,A,2019-08-17 15:00:00,FB,651,I,BOJ,733,148,119,73,2,29,Narrow_Body,5,13,1550,away,2019-08-17 15:14:00,2019-08-17 16:19:00,2275,1018
839,A,2019-08-17 04:40:00,SU,2405,I,FCO,320,140,119,84,3,21,Narrow_Body,2,13,1550,away,2019-08-17 04:50:00,2019-08-17 05:55:00,2245,961
840,A,2019-08-17 00:25:00,SU,31,D,LED,73H,158,119,193,1,39,Narrow_Body,3,13,1550,away,2019-08-17 00:32:00,2019-08-17 01:37:00,2035,149
841,D,2019-08-17 18:40:00,SU,2404,I,FCO,320,140,118,174,3,22,Narrow_Body,5,13,1550,away,2019-08-17 17:24:00,2019-08-17 18:29:00,2755,960
842,D,2019-08-17 13:45:00,SU,1212,D,KUF,73H,158,118,109,1,40,Narrow_Body,3,13,1550,away,2019-08-17 12:28:00,2019-08-17 13:33:00,2095,260
843,D,2019-08-17 18:20:00,SU,2200,I,HEL,320,140,117,208,3,23,Narrow_Body,6,13,1550,away,2019-08-17 17:06:00,2019-08-17 18:11:00,2755,937
844,D,2019-08-17 05:40:00,SU,2570,I,LHR,320,140,117,74,3,23,Narrow_Body,5,13,1550,away,2019-08-17 04:26:00,2019-08-17 05:31:00,2215,980
845,D,2019-08-17 04:10:00,JU,657,I,BEG,319,138,117,6,5,21,Narrow_Body,3,13,1550,away,2019-08-17 02:57:00,2019-08-17 04:02:00,2095,1025
846,A,2019-08-17 01:35:00,AF,1844,I,CDG,319,143,117,2,5,26,Narrow_Body,4,13,1550,away,2019-08-17 01:40:00,2019-08-17 02:45:00,2035,1054
847,D,2019-08-17 20:40:00,BT,423,I,RIX,CS3,145,116,73,5,29,Narrow_Body,5,13,1550,away,2019-08-17 19:21:00,2019-08-17 20:26:00,2455,889
848,D,2019-08-17 18:15:00,SU,2680,I,RIX,320,140,116,96,5,24,Narrow_Body,4,13,1550,away,2019-08-17 16:59:00,2019-08-17 18:04:00,2875,992
849,D,2019-08-17 04:50:00,BT,427,I,RIX,CS3,145,116,78,5,29,Narrow_Body,3,13,1550,away,2019-08-17 03:39:00,2019-08-17 04:44:00,2215,893
850,D,2019-08-17 22:35:00,SU,1216,D,KUF,73H,158,115,108,1,43,Narrow_Body,3,13,1550,away,2019-08-17 21:17:00,2019-08-17 22:22:00,2095,264
851,D,2019-08-17 18:05:00,SU,2002,I,WAW,32A,158,115,211,3,43,Narrow_Body,4,13,1550,away,2019-08-17 16:50:00,2019-08-17 17:55:00,2755,446
852,D,2019-08-17 15:55:00,SU,1106,D,KRR,73H,158,115,214,1,43,Narrow_Body,6,13,1550,away,2019-08-17 14:40:00,2019-08-17 15:45:00,2095,201
853,D,2019-08-17 15:55:00,SU,2156,I,BOJ,32A,158,115,67,3,43,Narrow_Body,6,13,1550,away,2019-08-17 14:33:00,2019-08-17 15:38:00,2515,485
854,D,2019-08-17 14:50:00,SU,1078,D,IGT,32A,158,115,199,1,43,Narrow_Body,6,13,1550,away,2019-08-17 13:40:00,2019-08-17 14:45:00,2095,195
855,D,2019-08-17 11:40:00,SU,1490,D,SLY,32A,158,115,220,1,43,Narrow_Body,2,13,1550,away,2019-08-17 10:27:00,2019-08-17 11:32:00,2035,358
856,D,2019-08-17 08:45:00,AF,1145,I,CDG,319,143,115,101,5,28,Narrow_Body,5,13,1550,away,2019-08-17 07:30:00,2019-08-17 08:35:00,2845,1053
857,A,2019-08-17 03:25:00,JU,656,I,BEG,319,138,115,79,5,23,Narrow_Body,1,13,1550,away,2019-08-17 03:33:00,2019-08-17 04:38:00,2215,1024
858,A,2019-08-17 00:05:00,AF,1144,I,CDG,319,143,115,42,5,28,Narrow_Body,6,13,1550,away,2019-08-17 00:15:00,2019-08-17 01:20:00,2095,1052
859,D,2019-08-17 21:15:00,SU,2108,I,VNO,320,140,114,61,5,26,Narrow_Body,4,13,1550,away,2019-08-17 19:53:00,2019-08-17 20:58:00,2515,931
860,D,2019-08-17 20:15:00,SU,2144,I,AYT,321,170,114,197,2,56,Narrow_Body,4,13,1550,away,2019-08-17 19:03:00,2019-08-17 20:08:00,2815,853
861,D,2019-08-17 10:05:00,SU,2040,I,ZAG,320,140,114,195,5,26,Narrow_Body,3,13,1550,away,2019-08-17 08:52:00,2019-08-17 09:57:00,2815,924
862,D,2019-08-17 10:00:00,SU,2136,I,IST,32A,158,114,218,3,44,Narrow_Body,5,13,1550,away,2019-08-17 08:46:00,2019-08-17 09:51:00,2665,477
863,A,2019-08-17 04:35:00,SU,2093,I,BEG,320,140,114,68,2,26,Narrow_Body,2,13,1550,away,2019-08-17 04:46:00,2019-08-17 05:51:00,2245,930
864,A,2019-08-17 03:55:00,SU,2619,I,BRU,32A,158,114,77,5,44,Narrow_Body,1,13,1550,away,2019-08-17 04:03:00,2019-08-17 05:08:00,2215,546
865,D,2019-08-17 20:30:00,SU,30,D,LED,73H,158,113,214,1,45,Narrow_Body,5,13,1550,away,2019-08-17 19:15:00,2019-08-17 20:20:00,2095,148
866,A,2019-08-17 15:05:00,SU,2417,I,MXP,320,140,113,63,3,27,Narrow_Body,4,13,1550,away,2019-08-17 15:22:00,2019-08-17 16:27:00,2605,969
867,A,2019-08-17 13:05:00,SU,2203,I,HEL,321,170,113,63,3,57,Narrow_Body,3,13,1550,away,2019-08-17 13:22:00,2019-08-17 14:27:00,2605,856
868,D,2019-08-17 23:50:00,SU,1484,D,KJA,320,140,112,71,3,28,Narrow_Body,7,13,1550,away,2019-08-17 22:33:00,2019-08-17 23:38:00,2425,912
869,D,2019-08-17 22:25:00,SU,1936,I,KGF,320,140,112,77,3,28,Narrow_Body,3,13,1550,away,2019-08-17 21:12:00,2019-08-17 22:17:00,2305,920
870,D,2019-08-17 19:45:00,SU,2594,I,MUC,320,140,112,216,3,28,Narrow_Body,5,13,1550,away,2019-08-17 18:32:00,2019-08-17 19:37:00,2665,986
871,A,2019-08-17 18:55:00,SU,1491,D,SLY,32A,158,112,219,1,46,Narrow_Body,5,13,1550,away,2019-08-17 19:05:00,2019-08-17 20:10:00,2095,359
872,A,2019-08-17 17:05:00,SU,2597,I,VCE,320,140,112,111,5,28,Narrow_Body,6,13,1550,away,2019-08-17 17:16:00,2019-08-17 18:21:00,2875,989
873,D,2019-08-17 10:15:00,SU,2090,I,BEG,320,140,112,207,2,28,Narrow_Body,3,13,1550,away,2019-08-17 09:03:00,2019-08-17 10:08:00,2755,928
874,D,2019-08-17 09:15:00,SU,2596,I,VCE,320,140,112,96,5,28,Narrow_Body,6,13,1550,away,2019-08-17 07:59:00,2019-08-17 09:04:00,2875,988
875,D,2019-08-17 08:45:00,SU,2374,I,LYS,320,140,112,174,3,28,Narrow_Body,5,13,1550,away,2019-08-17 07:29:00,2019-08-17 08:34:00,2755,949
876,D,2019-08-17 06:50:00,SU,2416,I,MXP,320,140,112,65,3,28,Narrow_Body,4,13,1550,away,2019-08-17 05:29:00,2019-08-17 06:34:00,2575,968
877,A,2019-08-17 05:55:00,SU,1845,I,KIV,320,140,112,201,3,28,Narrow_Body,2,13,1550,away,2019-08-17 06:04:00,2019-08-17 07:09:00,2665,918
878,A,2019-08-17 02:35:00,SU,2305,I,FRA,320,140,112,9,3,28,Narrow_Body,1,13,1550,away,2019-08-17 02:45:00,2019-08-17 03:50:00,2035,942
879,A,2019-08-17 08:50:00,KC,893,I,TSE,32N,162,111,101,5,51,Narrow_Body,4,13,1550,away,2019-08-17 09:00:00,2019-08-17 10:05:00,2845,867
880,D,2019-08-17 20:10:00,SU,1238,D,UFA,32A,158,109,106,1,49,Narrow_Body,4,13,1550,away,2019-08-17 18:54:00,2019-08-17 19:59:00,2125,274
881,D,2019-08-17 14:40:00,SU,1104,D,KRR,73H,158,109,214,1,49,Narrow_Body,5,13,1550,away,2019-08-17 13:25:00,2019-08-17 14:30:00,2095,199
882,D,2019-08-17 20:50:00,SU,1140,D,AER,32A,158,108,199,1,50,Narrow_Body,4,13,1550,away,2019-08-17 19:40:00,2019-08-17 20:45:00,2095,221
883,A,2019-08-17 08:45:00,SU,1675,D,ROV,320,140,108,176,3,32,Narrow_Body,5,13,1550,away,2019-08-17 08:55:00,2019-08-17 10:00:00,2695,917
884,A,2019-08-17 05:15:00,EO,202,D,PEE,E90,110,108,209,3,2,Regional,3,13,1300,away,2019-08-17 05:22:00,2019-08-17 06:12:00,2290,739
885,A,2019-08-17 21:00:00,KC,875,I,ALA,32A,148,107,71,5,41,Narrow_Body,5,13,1550,away,2019-08-17 21:12:00,2019-08-17 22:17:00,2365,1020
886,A,2019-08-17 17:40:00,SU,2375,I,LYS,320,140,107,190,3,33,Narrow_Body,5,13,1550,away,2019-08-17 17:46:00,2019-08-17 18:51:00,2725,950
887,D,2019-08-17 15:30:00,FV,6191,D,ROV,73H,189,107,61,3,82,Narrow_Body,4,13,1550,away,2019-08-17 14:08:00,2019-08-17 15:13:00,2575,701
888,A,2019-08-17 04:25:00,SU,2429,I,BLQ,73H,158,106,83,5,52,Narrow_Body,3,13,1550,away,2019-08-17 04:32:00,2019-08-17 05:37:00,2275,522
889,D,2019-08-17 23:40:00,N4,211,D,YKS,73H,189,105,72,3,84,Narrow_Body,6,13,1550,away,2019-08-17 22:21:00,2019-08-17 23:26:00,2455,649
890,A,2019-08-17 22:45:00,SU,2201,I,HEL,320,140,105,76,3,35,Narrow_Body,3,13,1550,away,2019-08-17 22:54:00,2019-08-17 23:59:00,2245,938
891,A,2019-08-17 19:30:00,B2,977,I,MSQ,E95,107,105,62,2,2,Regional,5,13,1300,away,2019-08-17 19:48:00,2019-08-17 20:38:00,1990,1046
892,D,2019-08-17 13:30:00,EO,167,D,LED,E90,110,105,74,3,5,Regional,5,13,1300,away,2019-08-17 12:31:00,2019-08-17 13:21:00,1870,732
893,A,2019-08-17 09:50:00,B2,975,I,MSQ,E95,107,105,61,2,2,Regional,5,13,1300,away,2019-08-17 10:07:00,2019-08-17 10:57:00,1960,1044
894,D,2019-08-17 22:55:00,SU,530,I,BEY,320,140,104,70,2,36,Narrow_Body,3,13,1550,away,2019-08-17 21:35:00,2019-08-17 22:40:00,2245,900
895,A,2019-08-17 21:35:00,EO,390,D,NBC,E90,110,103,73,3,7,Regional,6,13,1300,away,2019-08-17 21:49:00,2019-08-17 22:39:00,2140,747
896,A,2019-08-17 17:40:00,SU,2379,I,MRS,320,140,103,207,3,37,Narrow_Body,5,13,1550,away,2019-08-17 17:47:00,2019-08-17 18:52:00,2755,953
897,D,2019-08-17 09:50:00,KC,894,I,TSE,32N,162,103,111,5,59,Narrow_Body,5,13,1550,away,2019-08-17 08:34:00,2019-08-17 09:39:00,2875,868
898,D,2019-08-17 03:05:00,SU,1448,D,MQF,320,140,102,3,3,38,Narrow_Body,4,13,1550,away,2019-08-17 01:52:00,2019-08-17 02:57:00,1975,910
899,D,2019-08-17 23:10:00,SU,1128,D,AER,73H,158,101,193,1,57,Narrow_Body,3,13,1550,away,2019-08-17 21:58:00,2019-08-17 23:03:00,2035,215
900,A,2019-08-17 22:50:00,SU,2459,I,CDG,320,140,101,73,3,39,Narrow_Body,4,13,1550,away,2019-08-17 23:04:00,2019-08-18 00:09:00,2485,974
901,D,2019-08-17 10:35:00,B2,976,I,MSQ,E95,107,101,197,3,6,Regional,4,13,1300,away,2019-08-17 09:38:00,2019-08-17 10:28:00,2290,1045
902,D,2019-08-17 21:50:00,SU,1274,D,KRR,73H,158,100,197,1,58,Narrow_Body,6,13,1550,away,2019-08-17 20:38:00,2019-08-17 21:43:00,2095,286
903,A,2019-08-17 12:25:00,EO,530,D,REN,E90,110,100,2,3,10,Regional,5,13,1300,away,2019-08-17 12:30:00,2019-08-17 13:20:00,1600,749
904,D,2019-08-17 05:00:00,AY,720,I,HEL,E90,100,100,11,3,0,Regional,5,13,1300,away,2019-08-17 04:04:00,2019-08-17 04:54:00,1510,731
905,A,2019-08-17 01:35:00,AY,719,I,HEL,E90,100,100,11,3,0,Regional,4,13,1300,away,2019-08-17 01:41:00,2019-08-17 02:31:00,1510,730
906,D,2019-08-17 19:25:00,FV,6171,D,REN,73H,189,99,211,3,90,Narrow_Body,5,13,1550,away,2019-08-17 18:10:00,2019-08-17 19:15:00,2755,693
907,A,2019-08-17 19:20:00,AY,713,I,HEL,E90,100,99,65,3,1,Regional,5,13,1300,away,2019-08-17 19:36:00,2019-08-17 20:26:00,2230,726
908,D,2019-08-17 18:30:00,SU,1224,D,GOJ,73H,158,99,105,1,59,Narrow_Body,6,13,1550,away,2019-08-17 17:12:00,2019-08-17 18:17:00,2065,268
909,D,2019-08-17 15:50:00,FB,652,I,BOJ,733,148,99,64,2,49,Narrow_Body,5,13,1550,away,2019-08-17 14:26:00,2019-08-17 15:31:00,2365,1019
910,D,2019-08-17 23:35:00,SU,1112,D,KRR,32A,158,98,213,1,60,Narrow_Body,5,13,1550,away,2019-08-17 22:24:00,2019-08-17 23:29:00,2005,203
911,D,2019-08-17 10:00:00,AY,712,I,HEL,E90,100,98,78,3,2,Regional,5,13,1300,away,2019-08-17 09:04:00,2019-08-17 09:54:00,1870,725
912,A,2019-08-17 20:15:00,EO,340,D,MQF,E90,110,97,72,3,13,Regional,4,13,1300,away,2019-08-17 20:29:00,2019-08-17 21:19:00,2110,745
913,D,2019-08-17 15:00:00,SU,1058,D,MCX,32A,158,97,219,1,61,Narrow_Body,5,13,1550,away,2019-08-17 13:45:00,2019-08-17 14:50:00,2095,191
914,D,2019-08-17 07:05:00,EO,337,D,CSY,E90,110,97,218,3,13,Regional,6,13,1300,away,2019-08-17 06:06:00,2019-08-17 06:56:00,2320,742
915,D,2019-08-17 07:00:00,EO,339,D,MQF,E90,110,97,152,3,13,Regional,4,13,1300,away,2019-08-17 05:58:00,2019-08-17 06:48:00,2410,744
916,D,2019-08-17 23:30:00,EO,201,D,PEE,E90,110,96,62,3,14,Regional,5,13,1300,away,2019-08-17 22:22:00,2019-08-17 23:12:00,2170,738
917,D,2019-08-17 20:40:00,LO,678,I,WAW,E95,112,95,63,5,17,Regional,5,13,1300,away,2019-08-17 19:33:00,2019-08-17 20:23:00,2200,1031
918,D,2019-08-17 19:15:00,U6,2,D,SIP,320,160,95,109,1,65,Narrow_Body,4,13,1550,away,2019-08-17 17:58:00,2019-08-17 19:03:00,2095,1
919,D,2019-08-17 14:35:00,LO,676,I,WAW,E95,112,95,34,5,17,Regional,4,13,1300,jetbridge,2019-08-17 13:40:00,2019-08-17 14:20:00,1450,1029
920,D,2019-08-17 08:20:00,FV,6137,D,KRR,73H,189,95,208,3,94,Narrow_Body,4,13,1550,away,2019-08-17 07:06:00,2019-08-17 08:11:00,2755,679
921,D,2019-08-17 23:55:00,EO,189,D,NBC,E90,110,94,67,3,16,Regional,7,13,1300,away,2019-08-17 22:48:00,2019-08-17 23:38:00,2170,735
922,D,2019-08-17 23:55:00,EO,729,D,REN,E90,110,94,70,3,16,Regional,7,13,1300,away,2019-08-17 22:50:00,2019-08-17 23:40:00,2170,754
923,D,2019-08-17 17:00:00,EO,389,D,NBC,E90,110,94,77,3,16,Regional,7,13,1300,away,2019-08-17 16:02:00,2019-08-17 16:52:00,1960,746
924,D,2019-08-17 12:05:00,AH,3001,I,ALG,738,160,94,83,5,66,Narrow_Body,4,13,1550,away,2019-08-17 10:53:00,2019-08-17 11:58:00,2275,4
925,D,2019-08-17 21:50:00,SU,1144,D,AAQ,73H,158,93,214,1,65,Narrow_Body,6,13,1550,away,2019-08-17 20:35:00,2019-08-17 21:40:00,2095,225
926,D,2019-08-17 20:30:00,B2,978,I,MSQ,E95,107,93,200,3,14,Regional,5,13,1300,away,2019-08-17 19:34:00,2019-08-17 20:24:00,2290,1047
927,A,2019-08-17 00:35:00,SU,2535,I,OSL,73H,158,93,4,3,65,Narrow_Body,2,13,1550,away,2019-08-17 00:43:00,2019-08-17 01:48:00,2005,536
928,A,2019-08-17 13:45:00,LO,675,I,WAW,E95,112,92,200,5,20,Regional,3,13,1300,away,2019-08-17 13:51:00,2019-08-17 14:41:00,2410,1028
929,D,2019-08-17 07:05:00,EO,645,D,RTW,E90,110,92,213,3,18,Regional,6,13,1300,away,2019-08-17 06:09:00,2019-08-17 06:59:00,2350,752
930,D,2019-08-17 20:30:00,AY,714,I,HEL,E90,100,91,64,3,9,Regional,5,13,1300,away,2019-08-17 19:21:00,2019-08-17 20:11:00,2320,727
931,A,2019-08-17 19:45:00,LO,677,I,WAW,E95,112,91,82,5,21,Regional,5,13,1300,away,2019-08-17 19:52:00,2019-08-17 20:42:00,1930,1030
932,A,2019-08-17 06:45:00,SU,1251,D,NBC,32A,158,90,210,1,68,Narrow_Body,4,13,1550,away,2019-08-17 06:50:00,2019-08-17 07:55:00,2035,279
933,A,2019-08-17 10:30:00,EO,338,D,CSY,E90,110,89,69,3,21,Regional,4,13,1300,away,2019-08-17 10:42:00,2019-08-17 11:32:00,2020,743
934,D,2019-08-17 21:50:00,SU,1250,D,NBC,32A,158,88,219,1,70,Narrow_Body,6,13,1550,away,2019-08-17 20:35:00,2019-08-17 21:40:00,2095,278
935,A,2019-08-17 11:35:00,EO,228,D,VOG,E90,110,88,43,3,22,Regional,1,13,1300,away,2019-08-17 11:50:00,2019-08-17 12:40:00,1930,741
936,A,2019-08-17 16:55:00,EO,168,D,LED,E90,110,87,16,3,23,Regional,5,13,1300,jetbridge,2019-08-17 17:06:00,2019-08-17 17:46:00,1330,733
937,A,2019-08-17 13:05:00,SU,1643,D,ASF,SU9,87,87,106,1,0,Regional,3,13,1300,away,2019-08-17 13:16:00,2019-08-17 14:06:00,1780,97
938,D,2019-08-17 09:00:00,SU,1366,D,STW,SU9,87,87,107,1,0,Regional,5,13,1300,away,2019-08-17 07:59:00,2019-08-17 08:49:00,1750,64
939,D,2019-08-17 08:40:00,SU,1390,D,SCW,SU9,87,87,204,1,0,Regional,5,13,1300,away,2019-08-17 07:41:00,2019-08-17 08:31:00,1720,80
940,A,2019-08-17 06:30:00,SU,1429,D,MQF,SU9,87,87,111,1,0,Regional,4,13,1300,away,2019-08-17 06:41:00,2019-08-17 07:31:00,1780,89
941,D,2019-08-17 01:30:00,SU,1508,D,TJM,SU9,87,87,196,1,0,Regional,3,13,1300,away,2019-08-17 00:32:00,2019-08-17 01:22:00,1690,94
942,D,2019-08-17 21:05:00,SU,512,I,IKA,32A,158,86,195,2,72,Narrow_Body,4,13,1550,away,2019-08-17 19:52:00,2019-08-17 20:57:00,2785,167
943,D,2019-08-17 17:35:00,SU,1364,D,STW,SU9,87,86,107,1,1,Regional,5,13,1300,away,2019-08-17 16:34:00,2019-08-17 17:24:00,1750,62
944,A,2019-08-17 08:20:00,SU,1509,D,TJM,SU9,87,86,109,1,1,Regional,4,13,1300,away,2019-08-17 08:32:00,2019-08-17 09:22:00,1750,95
945,D,2019-08-17 07:10:00,EO,227,D,VOG,E90,110,86,174,3,24,Regional,5,13,1300,away,2019-08-17 06:09:00,2019-08-17 06:59:00,2410,740
946,A,2019-08-17 06:00:00,EO,198,D,LED,E90,110,86,208,3,24,Regional,6,13,1300,away,2019-08-17 06:09:00,2019-08-17 06:59:00,2410,737
947,D,2019-08-17 02:55:00,SU,1674,D,ROV,320,140,86,5,3,54,Narrow_Body,1,13,1550,away,2019-08-17 01:43:00,2019-08-17 02:48:00,1975,916
948,A,2019-08-17 22:10:00,SU,1187,D,VOG,SU9,87,85,192,1,2,Regional,4,13,1300,away,2019-08-17 22:17:00,2019-08-17 23:07:00,1690,17
949,D,2019-08-17 10:45:00,SU,1286,D,ULV,SU9,87,85,215,1,2,Regional,5,13,1300,away,2019-08-17 09:48:00,2019-08-17 10:38:00,1660,32
950,D,2019-08-17 01:25:00,SU,1218,D,PEE,SU9,87,85,210,1,2,Regional,3,13,1300,away,2019-08-17 00:30:00,2019-08-17 01:20:00,1690,20
951,A,2019-08-17 14:55:00,SU,1231,D,UFA,SU9,87,84,109,1,3,Regional,5,13,1300,away,2019-08-17 15:07:00,2019-08-17 15:57:00,1750,29
952,A,2019-08-17 14:25:00,SU,1367,D,STW,SU9,87,84,106,1,3,Regional,4,13,1300,away,2019-08-17 14:36:00,2019-08-17 15:26:00,1780,65
953,A,2019-08-17 12:55:00,SU,1321,D,MMK,SU9,87,84,197,1,3,Regional,4,13,1300,away,2019-08-17 13:02:00,2019-08-17 13:52:00,1750,43
954,A,2019-08-17 12:20:00,SU,1351,D,VOZ,SU9,87,84,199,1,3,Regional,3,13,1300,away,2019-08-17 12:25:00,2019-08-17 13:15:00,1750,51
955,D,2019-08-17 09:45:00,SU,1220,D,GOJ,SU9,87,84,108,1,3,Regional,6,13,1300,away,2019-08-17 08:42:00,2019-08-17 09:32:00,1750,22
956,D,2019-08-17 09:30:00,SU,1230,D,UFA,SU9,87,84,214,1,3,Regional,4,13,1300,away,2019-08-17 08:30:00,2019-08-17 09:20:00,1750,28
957,D,2019-08-17 07:25:00,SU,1642,D,ASF,SU9,87,84,101,1,3,Regional,5,13,1300,away,2019-08-17 06:25:00,2019-08-17 07:15:00,1810,96
958,A,2019-08-17 15:25:00,SU,1101,D,KRR,SU9,87,83,197,1,4,Regional,5,13,1300,away,2019-08-17 15:32:00,2019-08-17 16:22:00,1750,10
959,A,2019-08-17 13:00:00,SU,1333,D,ARH,SU9,87,83,193,1,4,Regional,3,13,1300,away,2019-08-17 13:07:00,2019-08-17 13:57:00,1690,47
960,D,2019-08-17 12:50:00,SU,1392,D,PEE,SU9,87,83,191,1,4,Regional,4,13,1300,away,2019-08-17 11:54:00,2019-08-17 12:44:00,1630,82
961,D,2019-08-17 11:50:00,SU,2100,I,RIX,SU9,87,83,68,3,4,Regional,2,13,1300,away,2019-08-17 10:49:00,2019-08-17 11:39:00,2080,114
962,D,2019-08-17 11:45:00,SU,1376,D,RTW,SU9,87,83,104,1,4,Regional,6,13,1300,away,2019-08-17 10:45:00,2019-08-17 11:35:00,1720,74
963,D,2019-08-17 08:10:00,SU,1332,D,ARH,SU9,87,83,219,1,4,Regional,5,13,1300,away,2019-08-17 07:10:00,2019-08-17 08:00:00,1750,46
964,A,2019-08-17 06:10:00,EO,186,D,KZN,E90,110,83,211,3,27,Regional,6,13,1300,away,2019-08-17 06:20:00,2019-08-17 07:10:00,2410,734
965,A,2019-08-17 00:05:00,SU,1317,D,MMK,SU9,87,83,220,1,4,Regional,6,13,1300,away,2019-08-17 00:13:00,2019-08-17 01:03:00,1690,41
966,A,2019-08-17 21:55:00,SU,1833,I,MSQ,SU9,87,82,61,2,5,Regional,5,13,1300,away,2019-08-17 22:12:00,2019-08-17 23:02:00,1960,103
967,A,2019-08-17 20:45:00,SU,2165,I,VNO,SU9,87,82,84,3,5,Regional,6,13,1300,away,2019-08-17 20:55:00,2019-08-17 21:45:00,1900,119
968,A,2019-08-17 20:30:00,SU,1023,D,VOZ,SU9,87,82,106,1,5,Regional,5,13,1300,away,2019-08-17 20:41:00,2019-08-17 21:31:00,1780,8
969,D,2019-08-17 16:55:00,SU,1292,D,IJK,SU9,87,82,192,1,5,Regional,5,13,1300,away,2019-08-17 15:58:00,2019-08-17 16:48:00,1690,36
970,A,2019-08-17 11:10:00,SU,1357,D,RTW,SU9,87,82,194,1,5,Regional,2,13,1300,away,2019-08-17 11:17:00,2019-08-17 12:07:00,1720,55
971,A,2019-08-17 04:50:00,SU,1335,D,ARH,SU9,87,82,206,1,5,Regional,3,13,1300,away,2019-08-17 04:55:00,2019-08-17 05:45:00,1630,49
972,D,2019-08-17 01:50:00,SU,1288,D,ULV,SU9,87,82,104,1,5,Regional,3,13,1300,away,2019-08-17 00:50:00,2019-08-17 01:40:00,1720,34
973,D,2019-08-17 00:35:00,SU,1132,D,AER,SU9,87,82,213,1,5,Regional,2,13,1300,away,2019-08-16 23:39:00,2019-08-17 00:29:00,1660,11
974,D,2019-08-17 20:25:00,SU,1340,D,GOJ,32A,158,81,111,1,77,Narrow_Body,4,13,1550,away,2019-08-17 19:09:00,2019-08-17 20:14:00,2125,304
975,D,2019-08-17 10:40:00,SU,2206,I,HEL,SU9,87,81,63,3,6,Regional,4,13,1300,away,2019-08-17 09:33:00,2019-08-17 10:23:00,2260,120
976,D,2019-08-17 07:15:00,EO,529,D,REN,E90,110,81,156,3,29,Regional,7,13,1300,away,2019-08-17 06:14:00,2019-08-17 07:04:00,2440,748
977,D,2019-08-17 01:55:00,SU,1164,D,ROV,SU9,87,81,105,1,6,Regional,3,13,1300,away,2019-08-17 00:52:00,2019-08-17 01:42:00,1720,14
978,D,2019-08-17 16:50:00,SU,1842,I,MSQ,SU9,87,80,79,3,7,Regional,5,13,1300,away,2019-08-17 15:52:00,2019-08-17 16:42:00,1630,108
979,D,2019-08-17 13:35:00,AY,716,I,HEL,E90,100,80,68,3,20,Regional,4,13,1300,away,2019-08-17 12:34:00,2019-08-17 13:24:00,1780,729
980,D,2019-08-17 09:30:00,SU,1100,D,KRR,SU9,87,80,219,1,7,Regional,4,13,1300,away,2019-08-17 08:30:00,2019-08-17 09:20:00,1600,9
981,A,2019-08-17 06:40:00,SU,1219,D,PEE,SU9,87,80,198,1,7,Regional,5,13,1300,away,2019-08-17 06:48:00,2019-08-17 07:38:00,1615,21
982,D,2019-08-17 22:40:00,SU,1396,D,SCW,SU9,87,79,199,1,8,Regional,4,13,1300,away,2019-08-17 21:45:00,2019-08-17 22:35:00,1525,84
983,A,2019-08-17 21:35:00,SU,1405,D,SVX,SU9,87,79,200,1,8,Regional,6,13,1300,away,2019-08-17 21:41:00,2019-08-17 22:31:00,1555,87
984,A,2019-08-17 20:45:00,SU,1843,I,MSQ,SU9,87,79,61,2,8,Regional,6,13,1300,away,2019-08-17 21:02:00,2019-08-17 21:52:00,1810,109
985,D,2019-08-17 17:35:00,SU,1186,D,VOG,SU9,87,79,214,1,8,Regional,5,13,1300,away,2019-08-17 16:35:00,2019-08-17 17:25:00,1600,16
986,A,2019-08-17 13:15:00,SU,1221,D,GOJ,SU9,87,79,207,1,8,Regional,3,13,1300,away,2019-08-17 13:22:00,2019-08-17 14:12:00,1570,23
987,A,2019-08-17 09:35:00,SU,3,D,LED,SU9,87,79,193,1,8,Regional,6,13,1300,away,2019-08-17 09:42:00,2019-08-17 10:32:00,1525,6
988,A,2019-08-17 07:40:00,SU,1835,I,MSQ,SU9,87,79,65,2,8,Regional,5,13,1300,away,2019-08-17 07:56:00,2019-08-17 08:46:00,1855,105
989,A,2019-08-17 06:10:00,SU,1207,D,KUF,SU9,87,79,86,1,8,Regional,6,13,1300,away,2019-08-17 06:19:00,2019-08-17 07:09:00,1630,19
990,D,2019-08-17 00:10:00,SU,1948,I,AKX,320,140,79,83,2,61,Narrow_Body,5,13,1550,away,2019-08-16 22:58:00,2019-08-17 00:03:00,1900,921
991,D,2019-08-17 22:00:00,SU,1834,I,MSQ,SU9,87,78,209,3,9,Regional,4,13,1300,away,2019-08-17 21:03:00,2019-08-17 21:53:00,1825,104
992,A,2019-08-17 21:50:00,SU,1225,D,GOJ,73H,158,78,197,1,80,Narrow_Body,6,13,1550,away,2019-08-17 21:57:00,2019-08-17 23:02:00,1900,269
993,A,2019-08-17 12:15:00,SU,1831,I,MSQ,SU9,87,78,75,2,9,Regional,3,13,1300,away,2019-08-17 12:23:00,2019-08-17 13:13:00,1570,101
994,D,2019-08-17 11:25:00,SU,2344,I,DRS,SU9,87,78,200,3,9,Regional,3,13,1300,away,2019-08-17 10:29:00,2019-08-17 11:19:00,1810,124
995,A,2019-08-17 10:45:00,SU,1271,D,KZN,320,140,78,199,1,62,Narrow_Body,5,13,1550,away,2019-08-17 10:50:00,2019-08-17 11:55:00,1870,905
996,D,2019-08-17 09:45:00,SU,1360,D,RTW,SU9,87,78,198,1,9,Regional,6,13,1300,away,2019-08-17 08:47:00,2019-08-17 09:37:00,1615,58
997,D,2019-08-17 07:15:00,SU,1320,D,MMK,SU9,87,78,212,1,9,Regional,7,13,1300,away,2019-08-17 06:15:00,2019-08-17 07:05:00,1630,42
998,A,2019-08-17 05:15:00,SU,1369,D,STW,SU9,87,78,204,1,9,Regional,3,13,1300,away,2019-08-17 05:24:00,2019-08-17 06:14:00,1570,67
999,A,2019-08-17 05:00:00,SU,1197,D,KZN,73H,158,78,207,1,80,Narrow_Body,5,13,1550,away,2019-08-17 05:07:00,2019-08-17 06:12:00,1915,252
1000,A,2019-08-17 04:30:00,SU,2119,I,RIX,SU9,87,78,76,3,9,Regional,3,13,1300,away,2019-08-17 04:39:00,2019-08-17 05:29:00,1660,117
1001,D,2019-08-17 00:40:00,SU,1428,D,MQF,SU9,87,78,199,1,9,Regional,4,13,1300,away,2019-08-16 23:45:00,2019-08-17 00:35:00,1525,88
1002,A,2019-08-17 23:35:00,SU,1375,D,EGO,SU9,87,77,206,1,10,Regional,5,13,1300,away,2019-08-17 23:40:00,2019-08-18 00:30:00,1465,73
1003,A,2019-08-17 19:25:00,SU,1681,D,NBC,SU9,87,77,198,1,10,Regional,5,13,1300,away,2019-08-17 19:33:00,2019-08-17 20:23:00,1615,99
1004,A,2019-08-17 17:35:00,SU,1841,I,MSQ,SU9,87,77,198,2,10,Regional,5,13,1300,away,2019-08-17 17:43:00,2019-08-17 18:33:00,1945,107
1005,D,2019-08-17 16:30:00,SU,1226,D,GOJ,SU9,87,77,200,1,10,Regional,5,13,1300,away,2019-08-17 15:34:00,2019-08-17 16:24:00,1555,24
1006,A,2019-08-17 16:10:00,SU,2101,I,RIX,SU9,87,77,76,3,10,Regional,6,13,1300,away,2019-08-17 16:19:00,2019-08-17 17:09:00,1660,115
1007,A,2019-08-17 15:55:00,SU,1377,D,RTW,SU9,87,77,209,1,10,Regional,6,13,1300,away,2019-08-17 16:02:00,2019-08-17 16:52:00,1585,75
1008,D,2019-08-17 14:45:00,SU,1434,D,MQF,SU9,87,77,195,1,10,Regional,4,13,1300,away,2019-08-17 13:47:00,2019-08-17 14:37:00,1585,90
1009,D,2019-08-17 13:20:00,SU,1156,D,ROV,SU9,87,77,200,1,10,Regional,4,13,1300,away,2019-08-17 12:24:00,2019-08-17 13:14:00,1555,13
1010,A,2019-08-17 13:15:00,SU,1191,D,KZN,32B,183,77,209,1,106,Narrow_Body,3,13,1550,away,2019-08-17 13:22:00,2019-08-17 14:27:00,1930,767
1011,A,2019-08-17 22:10:00,SU,1393,D,PEE,SU9,87,76,204,1,11,Regional,4,13,1300,away,2019-08-17 22:19:00,2019-08-17 23:09:00,1570,83
1012,A,2019-08-17 21:10:00,SU,1331,D,ARH,SU9,87,76,207,1,11,Regional,5,13,1300,away,2019-08-17 21:17:00,2019-08-17 22:07:00,1570,45
1013,D,2019-08-17 14:25:00,SU,1680,D,NBC,SU9,87,76,216,1,11,Regional,4,13,1300,away,2019-08-17 13:27:00,2019-08-17 14:17:00,1600,98
1014,D,2019-08-17 10:25:00,SU,1370,D,EGO,SU9,87,76,194,1,11,Regional,4,13,1300,away,2019-08-17 09:28:00,2019-08-17 10:18:00,1540,68
1015,D,2019-08-17 01:50:00,SU,1206,D,KUF,SU9,87,76,199,1,11,Regional,3,13,1300,away,2019-08-17 00:55:00,2019-08-17 01:45:00,1525,18
1016,D,2019-08-17 00:05:00,SU,1334,D,ARH,SU9,87,76,202,1,11,Regional,6,13,1300,away,2019-08-16 23:09:00,2019-08-16 23:59:00,1495,48
1017,D,2019-08-17 08:35:00,SU,1830,I,MSQ,SU9,87,75,193,3,12,Regional,6,13,1300,away,2019-08-17 07:38:00,2019-08-17 08:28:00,1885,100
1018,A,2019-08-17 07:30:00,SU,1353,D,VOZ,SU9,87,75,86,1,12,Regional,5,13,1300,away,2019-08-17 07:39:00,2019-08-17 08:29:00,1630,53
1019,D,2019-08-17 06:35:00,SU,1356,D,RTW,SU9,87,75,195,1,12,Regional,3,13,1300,away,2019-08-17 05:37:00,2019-08-17 06:27:00,1585,54
1020,D,2019-08-17 06:00:00,SU,2,D,LED,SU9,87,75,197,1,12,Regional,6,13,1300,away,2019-08-17 05:03:00,2019-08-17 05:53:00,1555,5
1021,A,2019-08-17 04:10:00,SU,1373,D,EGO,SU9,87,75,217,1,12,Regional,3,13,1300,away,2019-08-17 04:15:00,2019-08-17 05:05:00,1450,71
1022,D,2019-08-17 16:20:00,SU,1330,D,ARH,SU9,87,74,207,1,13,Regional,3,13,1300,away,2019-08-17 15:23:00,2019-08-17 16:13:00,1570,44
1023,A,2019-08-17 21:50:00,SU,1293,D,IJK,SU9,87,73,195,1,14,Regional,6,13,1300,away,2019-08-17 21:58:00,2019-08-17 22:48:00,1585,37
1024,D,2019-08-17 08:55:00,SU,1350,D,VOZ,SU9,87,73,207,1,14,Regional,5,13,1300,away,2019-08-17 07:58:00,2019-08-17 08:48:00,1570,50
1025,A,2019-08-17 23:35:00,SU,1359,D,RTW,SU9,87,72,88,1,15,Regional,5,13,1300,away,2019-08-17 23:40:00,2019-08-18 00:30:00,1480,57
1026,A,2019-08-17 23:30:00,SU,2263,I,TLL,SU9,87,72,80,3,15,Regional,5,13,1300,away,2019-08-17 23:35:00,2019-08-18 00:25:00,1585,123
1027,D,2019-08-17 23:25:00,SU,1294,D,IJK,SU9,87,72,220,1,15,Regional,6,13,1300,away,2019-08-17 22:27:00,2019-08-17 23:17:00,1540,38
1028,A,2019-08-17 15:10:00,SU,2207,I,HEL,SU9,87,72,216,3,15,Regional,5,13,1300,away,2019-08-17 15:18:00,2019-08-17 16:08:00,1855,121
1029,A,2019-08-17 15:00:00,SU,1287,D,ULV,SU9,87,72,195,1,15,Regional,5,13,1300,away,2019-08-17 15:08:00,2019-08-17 15:58:00,1585,33
1030,A,2019-08-17 09:15:00,AY,711,I,HEL,E90,100,72,192,3,28,Regional,6,13,1300,away,2019-08-17 09:22:00,2019-08-17 10:12:00,1855,724
1031,A,2019-08-17 06:15:00,EO,564,D,OSW,E90,110,72,164,3,38,Regional,5,13,1300,away,2019-08-17 06:26:00,2019-08-17 07:16:00,1960,751
1032,D,2019-08-17 06:00:00,SU,1228,D,GOJ,SU9,87,72,214,1,15,Regional,6,13,1300,away,2019-08-17 05:00:00,2019-08-17 05:50:00,1600,26
1033,A,2019-08-17 23:45:00,SU,1341,D,GOJ,32A,158,71,202,1,87,Narrow_Body,4,13,1550,away,2019-08-17 23:51:00,2019-08-18 00:56:00,1840,305
1034,A,2019-08-17 23:30:00,SU,2387,I,ARN,320,140,70,81,3,70,Narrow_Body,5,13,1550,away,2019-08-17 23:35:00,2019-08-18 00:40:00,1930,955
1035,A,2019-08-17 23:15:00,SU,1365,D,STW,SU9,87,70,203,1,17,Regional,5,13,1300,away,2019-08-17 23:21:00,2019-08-18 00:11:00,1495,63
1036,A,2019-08-17 20:55:00,SU,1435,D,MQF,SU9,87,70,195,1,17,Regional,5,13,1300,away,2019-08-17 21:03:00,2019-08-17 21:53:00,1585,91
1037,A,2019-08-17 20:25:00,SU,1193,D,KZN,32A,158,70,200,1,88,Narrow_Body,4,13,1550,away,2019-08-17 20:31:00,2019-08-17 21:36:00,1900,250
1038,D,2019-08-17 17:50:00,SU,1316,D,MMK,SU9,87,70,219,1,17,Regional,6,13,1300,away,2019-08-17 16:50:00,2019-08-17 17:40:00,1600,40
1039,D,2019-08-17 16:10:00,SU,2164,I,VNO,SU9,87,70,201,3,17,Regional,6,13,1300,away,2019-08-17 15:11:00,2019-08-17 16:01:00,1870,118
1040,A,2019-08-17 14:35:00,SU,1133,D,AER,SU9,87,70,209,1,17,Regional,4,13,1300,away,2019-08-17 14:42:00,2019-08-17 15:32:00,1585,12
1041,A,2019-08-17 14:20:00,SU,1371,D,EGO,SU9,87,70,207,1,17,Regional,3,13,1300,away,2019-08-17 14:27:00,2019-08-17 15:17:00,1570,69
1042,A,2019-08-17 13:50:00,SU,1391,D,SCW,SU9,87,70,198,1,17,Regional,3,13,1300,away,2019-08-17 13:58:00,2019-08-17 14:48:00,1615,81
1043,A,2019-08-17 09:25:00,SU,1229,D,GOJ,SU9,87,70,196,1,17,Regional,4,13,1300,away,2019-08-17 09:33:00,2019-08-17 10:23:00,1540,27
1044,A,2019-08-17 08:35:00,SU,1199,D,KZN,32A,158,70,208,1,88,Narrow_Body,6,13,1550,away,2019-08-17 08:44:00,2019-08-17 09:49:00,1960,253
1045,A,2019-08-17 06:00:00,EO,190,D,NBC,E90,110,70,167,3,40,Regional,6,13,1300,away,2019-08-17 06:11:00,2019-08-17 07:01:00,1960,736
1046,A,2019-08-17 04:35:00,SU,1397,D,SCW,SU9,87,70,202,1,17,Regional,2,13,1300,away,2019-08-17 04:41:00,2019-08-17 05:31:00,1495,85
1047,A,2019-08-17 07:45:00,SU,1165,D,ROV,SU9,87,69,195,1,18,Regional,6,13,1300,away,2019-08-17 07:53:00,2019-08-17 08:43:00,1585,15
1048,A,2019-08-17 07:45:00,SU,1467,D,SKX,SU9,87,69,198,1,18,Regional,6,13,1300,away,2019-08-17 07:53:00,2019-08-17 08:43:00,1615,93
1049,A,2019-08-17 05:05:00,SU,2039,I,OTP,SU9,87,69,73,3,18,Regional,3,13,1300,away,2019-08-17 05:19:00,2019-08-17 06:09:00,1855,113
1050,D,2019-08-17 00:05:00,SU,1574,D,AAQ,320,140,69,2,3,71,Narrow_Body,6,13,1550,away,2019-08-16 22:55:00,2019-08-17 00:00:00,1795,914
1051,A,2019-08-17 21:45:00,EO,646,D,RTW,E90,110,68,216,3,42,Regional,5,13,1300,away,2019-08-17 21:53:00,2019-08-17 22:43:00,1855,753
1052,D,2019-08-17 15:20:00,SU,1404,D,SVX,SU9,87,68,216,1,19,Regional,3,13,1300,away,2019-08-17 14:22:00,2019-08-17 15:12:00,1600,86
1053,D,2019-08-17 13:25:00,SU,1840,I,MSQ,SU9,87,68,209,3,19,Regional,5,13,1300,away,2019-08-17 12:28:00,2019-08-17 13:18:00,1825,106
1054,A,2019-08-17 12:50:00,AY,715,I,HEL,E90,100,67,201,3,33,Regional,4,13,1300,away,2019-08-17 12:59:00,2019-08-17 13:49:00,1870,728
1055,D,2019-08-17 06:10:00,SU,1246,D,REN,320,140,67,216,1,73,Narrow_Body,6,13,1550,away,2019-08-17 04:57:00,2019-08-17 06:02:00,1945,902
1056,D,2019-08-17 19:40:00,SU,1374,D,EGO,SU9,87,66,198,1,21,Regional,5,13,1300,away,2019-08-17 18:42:00,2019-08-17 19:32:00,1615,72
1057,A,2019-08-17 17:55:00,SU,2345,I,DRS,SU9,87,66,219,3,21,Regional,4,13,1300,away,2019-08-17 18:05:00,2019-08-17 18:55:00,1930,125
1058,D,2019-08-17 19:15:00,SU,1358,D,RTW,SU9,87,65,214,1,22,Regional,4,13,1300,away,2019-08-17 18:15:00,2019-08-17 19:05:00,1600,56
1059,A,2019-08-17 04:20:00,SU,1295,D,IJK,SU9,87,65,190,1,22,Regional,4,13,1300,away,2019-08-17 04:26:00,2019-08-17 05:16:00,1480,39
1060,D,2019-08-17 16:50:00,SU,1022,D,VOZ,SU9,87,64,219,1,23,Regional,5,13,1300,away,2019-08-17 15:50:00,2019-08-17 16:40:00,1600,7
1061,D,2019-08-17 00:30:00,EO,563,D,OSW,E90,110,64,6,3,46,Regional,1,13,1300,away,2019-08-16 23:32:00,2019-08-17 00:22:00,1540,750
1062,A,2019-08-17 16:25:00,SU,2035,I,OTP,SU9,87,63,88,5,24,Regional,4,13,1300,away,2019-08-17 16:30:00,2019-08-17 17:20:00,1825,111
1063,D,2019-08-17 20:10:00,FV,6143,D,SIP,773,373,61,176,3,312,Wide_Body,4,13,1800,away,2019-08-17 18:40:00,2019-08-17 20:00:00,2590,1062
1064,D,2019-08-17 18:55:00,SU,2262,I,TLL,SU9,87,61,86,5,26,Regional,5,13,1300,away,2019-08-17 17:56:00,2019-08-17 18:46:00,1990,122
1065,D,2019-08-17 09:20:00,SU,2034,I,OTP,SU9,87,61,90,5,26,Regional,5,13,1300,away,2019-08-17 08:20:00,2019-08-17 09:10:00,2005,110
1066,A,2019-08-17 04:45:00,SU,2377,I,LYS,320,140,60,72,3,80,Narrow_Body,3,13,1550,away,2019-08-17 04:59:00,2019-08-17 06:04:00,2185,951
1067,D,2019-08-17 22:55:00,SU,2118,I,RIX,SU9,87,59,209,3,28,Regional,3,13,1300,away,2019-08-17 21:58:00,2019-08-17 22:48:00,1825,116
1068,D,2019-08-17 22:00:00,SU,1056,D,MCX,32A,158,59,216,1,99,Narrow_Body,4,13,1550,away,2019-08-17 20:47:00,2019-08-17 21:52:00,1945,189
1069,A,2019-08-17 06:55:00,SU,1289,D,ULV,SU9,87,59,87,1,28,Regional,5,13,1300,away,2019-08-17 07:05:00,2019-08-17 07:55:00,1645,35
1070,D,2019-08-17 20:55:00,SU,2038,I,OTP,SU9,87,58,192,5,29,Regional,5,13,1300,away,2019-08-17 19:58:00,2019-08-17 20:48:00,1915,112
1071,A,2019-08-17 06:35:00,SU,2109,I,VNO,32A,158,58,90,5,100,Narrow_Body,3,13,1550,away,2019-08-17 06:45:00,2019-08-17 07:50:00,2350,471
1072,D,2019-08-17 18:10:00,SU,1832,I,MSQ,SU9,87,57,23,3,30,Regional,4,13,1300,jetbridge,2019-08-17 17:18:00,2019-08-17 17:58:00,1360,102
1073,D,2019-08-17 21:10:00,SU,1368,D,STW,SU9,87,54,207,1,33,Regional,5,13,1300,away,2019-08-17 20:13:00,2019-08-17 21:03:00,1570,66
1074,A,2019-08-17 19:55:00,SU,1227,D,GOJ,SU9,87,53,209,1,34,Regional,5,13,1300,away,2019-08-17 20:02:00,2019-08-17 20:52:00,1585,25
1075,A,2019-08-17 14:05:00,SU,1361,D,RTW,SU9,87,53,208,1,34,Regional,4,13,1300,away,2019-08-17 14:14:00,2019-08-17 15:04:00,1615,59
1076,A,2019-08-17 19:40:00,SU,1379,D,RTW,SU9,87,49,216,1,38,Regional,5,13,1300,away,2019-08-17 19:48:00,2019-08-17 20:38:00,1600,77
1077,A,2019-08-17 12:25:00,SU,1269,D,KZN,32A,158,49,195,1,109,Narrow_Body,5,13,1550,away,2019-08-17 12:33:00,2019-08-17 13:38:00,1930,285
1078,D,2019-08-17 23:50:00,SU,1352,D,VOZ,SU9,87,48,191,1,39,Regional,7,13,1300,away,2019-08-17 22:54:00,2019-08-17 23:44:00,1480,52
1079,A,2019-08-17 21:05:00,SU,1363,D,RTW,SU9,87,48,198,1,39,Regional,4,13,1300,away,2019-08-17 21:13:00,2019-08-17 22:03:00,1615,61
1080,D,2019-08-17 18:05:00,SU,1260,D,UFA,SU9,87,48,106,1,39,Regional,4,13,1300,away,2019-08-17 17:04:00,2019-08-17 17:54:00,1630,30
1081,A,2019-08-17 23:40:00,SU,1195,D,KZN,32B,183,47,210,1,136,Narrow_Body,6,13,1550,away,2019-08-17 23:45:00,2019-08-18 00:50:00,1840,769
1082,D,2019-08-17 13:55:00,SU,1388,D,ULV,SU9,87,44,198,1,43,Regional,5,13,1300,away,2019-08-17 12:57:00,2019-08-17 13:47:00,1615,78
1083,A,2019-08-17 18:05:00,SU,1389,D,ULV,SU9,87,43,208,1,44,Regional,4,13,1300,away,2019-08-17 18:14:00,2019-08-17 19:04:00,1615,79
1084,D,2019-08-17 16:40:00,SU,1362,D,RTW,SU9,87,41,213,1,46,Regional,5,13,1300,away,2019-08-17 15:44:00,2019-08-17 16:34:00,1495,60
1085,D,2019-08-17 15:25:00,SU,1378,D,RTW,SU9,87,41,218,1,46,Regional,5,13,1300,away,2019-08-17 14:26:00,2019-08-17 15:16:00,1615,76
1086,D,2019-08-17 22:10:00,FV,6141,D,SIP,73H,189,40,201,3,149,Narrow_Body,4,13,1550,away,2019-08-17 20:56:00,2019-08-17 22:01:00,2215,683
1087,D,2019-08-17 21:30:00,SU,1466,D,SKX,SU9,87,40,208,1,47,Regional,6,13,1300,away,2019-08-17 20:31:00,2019-08-17 21:21:00,1615,92
1088,A,2019-08-17 23:35:00,SU,1261,D,UFA,SU9,87,38,213,1,49,Regional,5,13,1300,away,2019-08-17 23:41:00,2019-08-18 00:31:00,1495,31
1089,D,2019-08-17 10:10:00,N4,701,I,JED,73H,189,38,86,2,151,Narrow_Body,5,13,1550,away,2019-08-17 08:56:00,2019-08-17 10:01:00,2335,673
1090,D,2019-08-17 23:55:00,SU,1372,D,EGO,SU9,87,37,215,1,50,Regional,7,13,1300,away,2019-08-17 22:58:00,2019-08-17 23:48:00,1510,70
1091,A,2019-08-17 08:00:00,D2,151,D,CEE,SU9,100,31,106,1,69,Regional,5,13,1300,away,2019-08-17 08:11:00,2019-08-17 09:01:00,1630,720
1092,A,2019-08-17 20:55:00,D2,153,D,CEE,SU9,100,29,218,1,71,Regional,5,13,1300,away,2019-08-17 21:04:00,2019-08-17 21:54:00,1615,722
1093,D,2019-08-17 09:05:00,D2,152,D,CEE,SU9,100,27,168,1,73,Regional,6,13,1300,away,2019-08-17 08:04:00,2019-08-17 08:54:00,1630,721
1094,D,2019-08-17 21:55:00,D2,154,D,CEE,SU9,100,24,86,1,76,Regional,5,13,1300,away,2019-08-17 20:56:00,2019-08-17 21:46:00,1630,723`;
});
;define("svo-aircraft-tetris/data-adapter", ["exports", "@ember-data/debug"], function (_exports, _debug) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _debug.default;
    }
  });
});
;define("svo-aircraft-tetris/helpers/-element", ["exports", "ember-element-helper/helpers/-element"], function (_exports, _element) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _element.default;
    }
  });
});
;define("svo-aircraft-tetris/helpers/-has-block-params", ["exports", "ember-named-blocks-polyfill/helpers/-has-block-params"], function (_exports, _hasBlockParams) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _hasBlockParams.default;
    }
  });
});
;define("svo-aircraft-tetris/helpers/-has-block", ["exports", "ember-named-blocks-polyfill/helpers/-has-block"], function (_exports, _hasBlock) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _hasBlock.default;
    }
  });
});
;define("svo-aircraft-tetris/helpers/-is-named-block-invocation", ["exports", "ember-named-blocks-polyfill/helpers/-is-named-block-invocation"], function (_exports, _isNamedBlockInvocation) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _isNamedBlockInvocation.default;
    }
  });
});
;define("svo-aircraft-tetris/helpers/-named-block-invocation", ["exports", "ember-named-blocks-polyfill/helpers/-named-block-invocation"], function (_exports, _namedBlockInvocation) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _namedBlockInvocation.default;
    }
  });
});
;define("svo-aircraft-tetris/helpers/and", ["exports", "ember-models-table/helpers/and"], function (_exports, _and) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "and", {
    enumerable: true,
    get: function () {
      return _and.and;
    }
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _and.default;
    }
  });
});
;define("svo-aircraft-tetris/helpers/app-version", ["exports", "svo-aircraft-tetris/config/environment", "ember-cli-app-version/utils/regexp"], function (_exports, _environment, _regexp) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.appVersion = appVersion;
  _exports.default = void 0;

  function appVersion(_, hash = {}) {
    const version = _environment.default.APP.version; // e.g. 1.0.0-alpha.1+4jds75hf
    // Allow use of 'hideSha' and 'hideVersion' For backwards compatibility

    let versionOnly = hash.versionOnly || hash.hideSha;
    let shaOnly = hash.shaOnly || hash.hideVersion;
    let match = null;

    if (versionOnly) {
      if (hash.showExtended) {
        match = version.match(_regexp.versionExtendedRegExp); // 1.0.0-alpha.1
      } // Fallback to just version


      if (!match) {
        match = version.match(_regexp.versionRegExp); // 1.0.0
      }
    }

    if (shaOnly) {
      match = version.match(_regexp.shaRegExp); // 4jds75hf
    }

    return match ? match[0] : version;
  }

  var _default = Ember.Helper.helper(appVersion);

  _exports.default = _default;
});
;define("svo-aircraft-tetris/helpers/append", ["exports", "ember-composable-helpers/helpers/append"], function (_exports, _append) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "append", {
    enumerable: true,
    get: function () {
      return _append.append;
    }
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _append.default;
    }
  });
});
;define("svo-aircraft-tetris/helpers/bs-contains", ["exports", "ember-bootstrap/helpers/bs-contains"], function (_exports, _bsContains) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "bsContains", {
    enumerable: true,
    get: function () {
      return _bsContains.bsContains;
    }
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _bsContains.default;
    }
  });
});
;define("svo-aircraft-tetris/helpers/bs-default", ["exports", "ember-bootstrap/helpers/bs-default"], function (_exports, _bsDefault) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _bsDefault.default;
    }
  });
});
;define("svo-aircraft-tetris/helpers/bs-eq", ["exports", "ember-bootstrap/helpers/bs-eq"], function (_exports, _bsEq) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _bsEq.default;
    }
  });
});
;define("svo-aircraft-tetris/helpers/bs-noop", ["exports", "ember-bootstrap/helpers/bs-noop"], function (_exports, _bsNoop) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _bsNoop.default;
    }
  });
});
;define("svo-aircraft-tetris/helpers/bs-size-class", ["exports", "ember-bootstrap/helpers/bs-size-class"], function (_exports, _bsSizeClass) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _bsSizeClass.default;
    }
  });
});
;define("svo-aircraft-tetris/helpers/bs-type-class", ["exports", "ember-bootstrap/helpers/bs-type-class"], function (_exports, _bsTypeClass) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _bsTypeClass.default;
    }
  });
});
;define("svo-aircraft-tetris/helpers/cancel-all", ["exports", "ember-concurrency/helpers/cancel-all"], function (_exports, _cancelAll) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _cancelAll.default;
    }
  });
});
;define("svo-aircraft-tetris/helpers/chunk", ["exports", "ember-composable-helpers/helpers/chunk"], function (_exports, _chunk) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "chunk", {
    enumerable: true,
    get: function () {
      return _chunk.chunk;
    }
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _chunk.default;
    }
  });
});
;define("svo-aircraft-tetris/helpers/compact", ["exports", "ember-composable-helpers/helpers/compact"], function (_exports, _compact) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _compact.default;
    }
  });
});
;define("svo-aircraft-tetris/helpers/compute", ["exports", "ember-composable-helpers/helpers/compute"], function (_exports, _compute) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "compute", {
    enumerable: true,
    get: function () {
      return _compute.compute;
    }
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _compute.default;
    }
  });
});
;define("svo-aircraft-tetris/helpers/contains", ["exports", "ember-composable-helpers/helpers/contains"], function (_exports, _contains) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "contains", {
    enumerable: true,
    get: function () {
      return _contains.contains;
    }
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _contains.default;
    }
  });
});
;define("svo-aircraft-tetris/helpers/dec", ["exports", "ember-composable-helpers/helpers/dec"], function (_exports, _dec) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "dec", {
    enumerable: true,
    get: function () {
      return _dec.dec;
    }
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _dec.default;
    }
  });
});
;define("svo-aircraft-tetris/helpers/did-insert", ["exports", "ember-render-helpers/helpers/did-insert"], function (_exports, _didInsert) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _didInsert.default;
    }
  });
});
;define("svo-aircraft-tetris/helpers/did-update", ["exports", "ember-render-helpers/helpers/did-update"], function (_exports, _didUpdate) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _didUpdate.default;
    }
  });
});
;define("svo-aircraft-tetris/helpers/drop", ["exports", "ember-composable-helpers/helpers/drop"], function (_exports, _drop) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _drop.default;
    }
  });
});
;define("svo-aircraft-tetris/helpers/element", ["exports", "ember-element-helper/helpers/element"], function (_exports, _element) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _element.default;
    }
  });
});
;define("svo-aircraft-tetris/helpers/ensure-safe-component", ["exports", "@embroider/util"], function (_exports, _util) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _util.EnsureSafeComponentHelper;
    }
  });
});
;define("svo-aircraft-tetris/helpers/entries", ["exports", "ember-composable-helpers/helpers/entries"], function (_exports, _entries) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _entries.default;
    }
  });
  Object.defineProperty(_exports, "entries", {
    enumerable: true,
    get: function () {
      return _entries.entries;
    }
  });
});
;define("svo-aircraft-tetris/helpers/exists-in", ["exports", "ember-models-table/helpers/exists-in"], function (_exports, _existsIn) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _existsIn.default;
    }
  });
  Object.defineProperty(_exports, "existsIn", {
    enumerable: true,
    get: function () {
      return _existsIn.existsIn;
    }
  });
});
;define("svo-aircraft-tetris/helpers/filter-by", ["exports", "ember-composable-helpers/helpers/filter-by"], function (_exports, _filterBy) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _filterBy.default;
    }
  });
});
;define("svo-aircraft-tetris/helpers/filter", ["exports", "ember-composable-helpers/helpers/filter"], function (_exports, _filter) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _filter.default;
    }
  });
});
;define("svo-aircraft-tetris/helpers/find-by", ["exports", "ember-composable-helpers/helpers/find-by"], function (_exports, _findBy) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _findBy.default;
    }
  });
});
;define("svo-aircraft-tetris/helpers/flatten", ["exports", "ember-composable-helpers/helpers/flatten"], function (_exports, _flatten) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _flatten.default;
    }
  });
  Object.defineProperty(_exports, "flatten", {
    enumerable: true,
    get: function () {
      return _flatten.flatten;
    }
  });
});
;define("svo-aircraft-tetris/helpers/from-entries", ["exports", "ember-composable-helpers/helpers/from-entries"], function (_exports, _fromEntries) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _fromEntries.default;
    }
  });
  Object.defineProperty(_exports, "fromEntries", {
    enumerable: true,
    get: function () {
      return _fromEntries.fromEntries;
    }
  });
});
;define("svo-aircraft-tetris/helpers/group-by", ["exports", "ember-composable-helpers/helpers/group-by"], function (_exports, _groupBy) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _groupBy.default;
    }
  });
});
;define("svo-aircraft-tetris/helpers/has-next", ["exports", "ember-composable-helpers/helpers/has-next"], function (_exports, _hasNext) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _hasNext.default;
    }
  });
  Object.defineProperty(_exports, "hasNext", {
    enumerable: true,
    get: function () {
      return _hasNext.hasNext;
    }
  });
});
;define("svo-aircraft-tetris/helpers/has-previous", ["exports", "ember-composable-helpers/helpers/has-previous"], function (_exports, _hasPrevious) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _hasPrevious.default;
    }
  });
  Object.defineProperty(_exports, "hasPrevious", {
    enumerable: true,
    get: function () {
      return _hasPrevious.hasPrevious;
    }
  });
});
;define("svo-aircraft-tetris/helpers/html-safe", ["exports", "ember-models-table/helpers/html-safe"], function (_exports, _htmlSafe) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _htmlSafe.default;
    }
  });
  Object.defineProperty(_exports, "htmlSafe", {
    enumerable: true,
    get: function () {
      return _htmlSafe.htmlSafe;
    }
  });
});
;define("svo-aircraft-tetris/helpers/inc", ["exports", "ember-composable-helpers/helpers/inc"], function (_exports, _inc) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _inc.default;
    }
  });
  Object.defineProperty(_exports, "inc", {
    enumerable: true,
    get: function () {
      return _inc.inc;
    }
  });
});
;define("svo-aircraft-tetris/helpers/intersect", ["exports", "ember-composable-helpers/helpers/intersect"], function (_exports, _intersect) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _intersect.default;
    }
  });
});
;define("svo-aircraft-tetris/helpers/invoke", ["exports", "ember-composable-helpers/helpers/invoke"], function (_exports, _invoke) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _invoke.default;
    }
  });
  Object.defineProperty(_exports, "invoke", {
    enumerable: true,
    get: function () {
      return _invoke.invoke;
    }
  });
});
;define("svo-aircraft-tetris/helpers/is-equal", ["exports", "ember-models-table/helpers/is-equal"], function (_exports, _isEqual) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _isEqual.default;
    }
  });
  Object.defineProperty(_exports, "isEqual", {
    enumerable: true,
    get: function () {
      return _isEqual.isEqual;
    }
  });
});
;define("svo-aircraft-tetris/helpers/join", ["exports", "ember-composable-helpers/helpers/join"], function (_exports, _join) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _join.default;
    }
  });
});
;define("svo-aircraft-tetris/helpers/keys", ["exports", "ember-composable-helpers/helpers/keys"], function (_exports, _keys) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _keys.default;
    }
  });
  Object.defineProperty(_exports, "keys", {
    enumerable: true,
    get: function () {
      return _keys.keys;
    }
  });
});
;define("svo-aircraft-tetris/helpers/loc", ["exports", "@ember/string/helpers/loc"], function (_exports, _loc) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _loc.default;
    }
  });
  Object.defineProperty(_exports, "loc", {
    enumerable: true,
    get: function () {
      return _loc.loc;
    }
  });
});
;define("svo-aircraft-tetris/helpers/map-by", ["exports", "ember-composable-helpers/helpers/map-by"], function (_exports, _mapBy) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _mapBy.default;
    }
  });
});
;define("svo-aircraft-tetris/helpers/map", ["exports", "ember-composable-helpers/helpers/map"], function (_exports, _map) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _map.default;
    }
  });
});
;define("svo-aircraft-tetris/helpers/next", ["exports", "ember-composable-helpers/helpers/next"], function (_exports, _next) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _next.default;
    }
  });
  Object.defineProperty(_exports, "next", {
    enumerable: true,
    get: function () {
      return _next.next;
    }
  });
});
;define("svo-aircraft-tetris/helpers/noop", ["exports", "ember-composable-helpers/helpers/noop"], function (_exports, _noop) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _noop.default;
    }
  });
  Object.defineProperty(_exports, "noop", {
    enumerable: true,
    get: function () {
      return _noop.noop;
    }
  });
});
;define("svo-aircraft-tetris/helpers/not-eq", ["exports", "ember-models-table/helpers/not-eq"], function (_exports, _notEq) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _notEq.default;
    }
  });
  Object.defineProperty(_exports, "notEq", {
    enumerable: true,
    get: function () {
      return _notEq.notEq;
    }
  });
});
;define("svo-aircraft-tetris/helpers/object-at", ["exports", "ember-composable-helpers/helpers/object-at"], function (_exports, _objectAt) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _objectAt.default;
    }
  });
  Object.defineProperty(_exports, "objectAt", {
    enumerable: true,
    get: function () {
      return _objectAt.objectAt;
    }
  });
});
;define("svo-aircraft-tetris/helpers/on-document", ["exports", "ember-on-helper/helpers/on-document"], function (_exports, _onDocument) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _onDocument.default;
    }
  });
});
;define("svo-aircraft-tetris/helpers/on-window", ["exports", "ember-on-helper/helpers/on-window"], function (_exports, _onWindow) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _onWindow.default;
    }
  });
});
;define("svo-aircraft-tetris/helpers/on", ["exports", "ember-on-helper/helpers/on"], function (_exports, _on) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _on.default;
    }
  });
});
;define("svo-aircraft-tetris/helpers/option-is-object", ["exports", "ember-models-table/helpers/option-is-object"], function (_exports, _optionIsObject) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _optionIsObject.default;
    }
  });
  Object.defineProperty(_exports, "optionIsObject", {
    enumerable: true,
    get: function () {
      return _optionIsObject.optionIsObject;
    }
  });
});
;define("svo-aircraft-tetris/helpers/optional", ["exports", "ember-composable-helpers/helpers/optional"], function (_exports, _optional) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _optional.default;
    }
  });
  Object.defineProperty(_exports, "optional", {
    enumerable: true,
    get: function () {
      return _optional.optional;
    }
  });
});
;define("svo-aircraft-tetris/helpers/page-title", ["exports", "ember-page-title/helpers/page-title"], function (_exports, _pageTitle) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _pageTitle.default;
  _exports.default = _default;
});
;define("svo-aircraft-tetris/helpers/perform", ["exports", "ember-concurrency/helpers/perform"], function (_exports, _perform) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _perform.default;
    }
  });
});
;define("svo-aircraft-tetris/helpers/pipe-action", ["exports", "ember-composable-helpers/helpers/pipe-action"], function (_exports, _pipeAction) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _pipeAction.default;
    }
  });
});
;define("svo-aircraft-tetris/helpers/pipe", ["exports", "ember-composable-helpers/helpers/pipe"], function (_exports, _pipe) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _pipe.default;
    }
  });
  Object.defineProperty(_exports, "pipe", {
    enumerable: true,
    get: function () {
      return _pipe.pipe;
    }
  });
});
;define("svo-aircraft-tetris/helpers/pluralize", ["exports", "ember-inflector/lib/helpers/pluralize"], function (_exports, _pluralize) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _pluralize.default;
  _exports.default = _default;
});
;define("svo-aircraft-tetris/helpers/previous", ["exports", "ember-composable-helpers/helpers/previous"], function (_exports, _previous) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _previous.default;
    }
  });
  Object.defineProperty(_exports, "previous", {
    enumerable: true,
    get: function () {
      return _previous.previous;
    }
  });
});
;define("svo-aircraft-tetris/helpers/queue", ["exports", "ember-composable-helpers/helpers/queue"], function (_exports, _queue) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _queue.default;
    }
  });
  Object.defineProperty(_exports, "queue", {
    enumerable: true,
    get: function () {
      return _queue.queue;
    }
  });
});
;define("svo-aircraft-tetris/helpers/range", ["exports", "ember-composable-helpers/helpers/range"], function (_exports, _range) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _range.default;
    }
  });
  Object.defineProperty(_exports, "range", {
    enumerable: true,
    get: function () {
      return _range.range;
    }
  });
});
;define("svo-aircraft-tetris/helpers/reduce", ["exports", "ember-composable-helpers/helpers/reduce"], function (_exports, _reduce) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _reduce.default;
    }
  });
});
;define("svo-aircraft-tetris/helpers/ref-to", ["exports", "ember-ref-bucket/helpers/ref-to"], function (_exports, _refTo) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _refTo.default;
    }
  });
  Object.defineProperty(_exports, "refTo", {
    enumerable: true,
    get: function () {
      return _refTo.default;
    }
  });
});
;define("svo-aircraft-tetris/helpers/reject-by", ["exports", "ember-composable-helpers/helpers/reject-by"], function (_exports, _rejectBy) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _rejectBy.default;
    }
  });
});
;define("svo-aircraft-tetris/helpers/repeat", ["exports", "ember-composable-helpers/helpers/repeat"], function (_exports, _repeat) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _repeat.default;
    }
  });
  Object.defineProperty(_exports, "repeat", {
    enumerable: true,
    get: function () {
      return _repeat.repeat;
    }
  });
});
;define("svo-aircraft-tetris/helpers/reverse", ["exports", "ember-composable-helpers/helpers/reverse"], function (_exports, _reverse) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _reverse.default;
    }
  });
});
;define("svo-aircraft-tetris/helpers/shuffle", ["exports", "ember-composable-helpers/helpers/shuffle"], function (_exports, _shuffle) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _shuffle.default;
    }
  });
  Object.defineProperty(_exports, "shuffle", {
    enumerable: true,
    get: function () {
      return _shuffle.shuffle;
    }
  });
});
;define("svo-aircraft-tetris/helpers/singularize", ["exports", "ember-inflector/lib/helpers/singularize"], function (_exports, _singularize) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _singularize.default;
  _exports.default = _default;
});
;define("svo-aircraft-tetris/helpers/slice", ["exports", "ember-composable-helpers/helpers/slice"], function (_exports, _slice) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _slice.default;
    }
  });
});
;define("svo-aircraft-tetris/helpers/sort-by", ["exports", "ember-composable-helpers/helpers/sort-by"], function (_exports, _sortBy) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _sortBy.default;
    }
  });
});
;define("svo-aircraft-tetris/helpers/stringify", ["exports", "ember-models-table/helpers/stringify"], function (_exports, _stringify) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _stringify.default;
    }
  });
  Object.defineProperty(_exports, "stringify", {
    enumerable: true,
    get: function () {
      return _stringify.stringify;
    }
  });
});
;define("svo-aircraft-tetris/helpers/take", ["exports", "ember-composable-helpers/helpers/take"], function (_exports, _take) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _take.default;
    }
  });
});
;define("svo-aircraft-tetris/helpers/task", ["exports", "ember-concurrency/helpers/task"], function (_exports, _task) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _task.default;
    }
  });
});
;define("svo-aircraft-tetris/helpers/toggle-action", ["exports", "ember-composable-helpers/helpers/toggle-action"], function (_exports, _toggleAction) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _toggleAction.default;
    }
  });
});
;define("svo-aircraft-tetris/helpers/toggle", ["exports", "ember-composable-helpers/helpers/toggle"], function (_exports, _toggle) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _toggle.default;
    }
  });
  Object.defineProperty(_exports, "toggle", {
    enumerable: true,
    get: function () {
      return _toggle.toggle;
    }
  });
});
;define("svo-aircraft-tetris/helpers/union", ["exports", "ember-composable-helpers/helpers/union"], function (_exports, _union) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _union.default;
    }
  });
});
;define("svo-aircraft-tetris/helpers/values", ["exports", "ember-composable-helpers/helpers/values"], function (_exports, _values) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _values.default;
    }
  });
  Object.defineProperty(_exports, "values", {
    enumerable: true,
    get: function () {
      return _values.values;
    }
  });
});
;define("svo-aircraft-tetris/helpers/will-destroy", ["exports", "ember-render-helpers/helpers/will-destroy"], function (_exports, _willDestroy) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _willDestroy.default;
    }
  });
});
;define("svo-aircraft-tetris/helpers/without", ["exports", "ember-composable-helpers/helpers/without"], function (_exports, _without) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _without.default;
    }
  });
  Object.defineProperty(_exports, "without", {
    enumerable: true,
    get: function () {
      return _without.without;
    }
  });
});
;define("svo-aircraft-tetris/initializers/app-version", ["exports", "ember-cli-app-version/initializer-factory", "svo-aircraft-tetris/config/environment"], function (_exports, _initializerFactory, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  let name, version;

  if (_environment.default.APP) {
    name = _environment.default.APP.name;
    version = _environment.default.APP.version;
  }

  var _default = {
    name: 'App Version',
    initialize: (0, _initializerFactory.default)(name, version)
  };
  _exports.default = _default;
});
;define("svo-aircraft-tetris/initializers/container-debug-adapter", ["exports", "ember-resolver/resolvers/classic/container-debug-adapter"], function (_exports, _containerDebugAdapter) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = {
    name: 'container-debug-adapter',

    initialize() {
      let app = arguments[1] || arguments[0];
      app.register('container-debug-adapter:main', _containerDebugAdapter.default);
    }

  };
  _exports.default = _default;
});
;define("svo-aircraft-tetris/initializers/ember-data-data-adapter", ["exports", "@ember-data/debug/setup"], function (_exports, _setup) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _setup.default;
    }
  });
});
;define("svo-aircraft-tetris/initializers/ember-data", ["exports", "ember-data", "ember-data/setup-container"], function (_exports, _emberData, _setupContainer) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  /*
    This code initializes EmberData in an Ember application.
  
    It ensures that the `store` service is automatically injected
    as the `store` property on all routes and controllers.
  */
  var _default = {
    name: 'ember-data',
    initialize: _setupContainer.default
  };
  _exports.default = _default;
});
;define("svo-aircraft-tetris/initializers/emt-themes", ["exports", "ember-models-table/initializers/emt-themes"], function (_exports, _emtThemes) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _emtThemes.default;
    }
  });
  Object.defineProperty(_exports, "initialize", {
    enumerable: true,
    get: function () {
      return _emtThemes.initialize;
    }
  });
});
;define("svo-aircraft-tetris/initializers/export-application-global", ["exports", "svo-aircraft-tetris/config/environment"], function (_exports, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  _exports.initialize = initialize;

  function initialize() {
    var application = arguments[1] || arguments[0];

    if (_environment.default.exportApplicationGlobal !== false) {
      var theGlobal;

      if (typeof window !== 'undefined') {
        theGlobal = window;
      } else if (typeof global !== 'undefined') {
        theGlobal = global;
      } else if (typeof self !== 'undefined') {
        theGlobal = self;
      } else {
        // no reasonable global, just bail
        return;
      }

      var value = _environment.default.exportApplicationGlobal;
      var globalName;

      if (typeof value === 'string') {
        globalName = value;
      } else {
        globalName = Ember.String.classify(_environment.default.modulePrefix);
      }

      if (!theGlobal[globalName]) {
        theGlobal[globalName] = application;
        application.reopen({
          willDestroy: function () {
            this._super.apply(this, arguments);

            delete theGlobal[globalName];
          }
        });
      }
    }
  }

  var _default = {
    name: 'export-application-global',
    initialize: initialize
  };
  _exports.default = _default;
});
;define("svo-aircraft-tetris/initializers/load-bootstrap-config", ["exports", "svo-aircraft-tetris/config/environment", "ember-bootstrap/config", "ember-bootstrap/version"], function (_exports, _environment, _config, _version) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  _exports.initialize = initialize;

  function initialize() {
    _config.default.load(_environment.default['ember-bootstrap'] || {});

    (0, _version.registerLibrary)();
  }

  var _default = {
    name: 'load-bootstrap-config',
    initialize
  };
  _exports.default = _default;
});
;define("svo-aircraft-tetris/instance-initializers/ember-data", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  /* exists only for things that historically used "after" or "before" */
  var _default = {
    name: 'ember-data',

    initialize() {}

  };
  _exports.default = _default;
});
;define("svo-aircraft-tetris/instance-initializers/emt-inject", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  _exports.initialize = initialize;

  function initialize(appInstance) {
    appInstance.inject('component:models-table', 'themeInstance', `theme:ember-bootstrap-v4`);
    appInstance.inject('component:models-table-server-paginated', 'themeInstance', `theme:ember-bootstrap-v4`);
  }

  var _default = {
    initialize
  };
  _exports.default = _default;
});
;define("svo-aircraft-tetris/models/aircraft-stand", ["exports", "@ember-data/model"], function (_exports, _model) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  class AircraftStandModel extends _model.default {}

  _exports.default = AircraftStandModel;
});
;define("svo-aircraft-tetris/models/timetable", ["exports", "@babel/runtime/helpers/esm/initializerDefineProperty", "@babel/runtime/helpers/esm/defineProperty", "@babel/runtime/helpers/esm/applyDecoratedDescriptor", "@babel/runtime/helpers/esm/initializerWarningHelper", "@ember-data/model", "moment"], function (_exports, _initializerDefineProperty2, _defineProperty2, _applyDecoratedDescriptor2, _initializerWarningHelper2, _model, _moment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _class, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15, _descriptor16;

  let TimetableModel = (_dec = (0, _model.attr)('boolean'), _dec2 = (0, _model.attr)('date'), _dec3 = (0, _model.attr)('date'), _dec4 = (0, _model.attr)('date'), _dec5 = (0, _model.attr)('string'), _dec6 = (0, _model.attr)('string'), _dec7 = (0, _model.attr)('string'), _dec8 = (0, _model.attr)('string'), _dec9 = (0, _model.attr)('number'), _dec10 = (0, _model.attr)('number'), _dec11 = (0, _model.attr)('number'), _dec12 = (0, _model.attr)('number'), _dec13 = (0, _model.attr)('number'), _dec14 = (0, _model.attr)('number'), _dec15 = (0, _model.attr)('number'), _dec16 = (0, _model.attr)('number'), (_class = class TimetableModel extends _model.default {
    constructor(...args) {
      super(...args);
      (0, _initializerDefineProperty2.default)(this, "isArrival", _descriptor, this);
      (0, _initializerDefineProperty2.default)(this, "time", _descriptor2, this);
      (0, _initializerDefineProperty2.default)(this, "start", _descriptor3, this);
      (0, _initializerDefineProperty2.default)(this, "end", _descriptor4, this);
      (0, _initializerDefineProperty2.default)(this, "airline", _descriptor5, this);
      (0, _initializerDefineProperty2.default)(this, "synchronCode", _descriptor6, this);
      (0, _initializerDefineProperty2.default)(this, "flightType", _descriptor7, this);
      (0, _initializerDefineProperty2.default)(this, "airport", _descriptor8, this);
      (0, _initializerDefineProperty2.default)(this, "pax", _descriptor9, this);
      (0, _initializerDefineProperty2.default)(this, "paxCapTotal", _descriptor10, this);
      (0, _initializerDefineProperty2.default)(this, "index", _descriptor11, this);
      (0, _initializerDefineProperty2.default)(this, "terminalId", _descriptor12, this);
      (0, _initializerDefineProperty2.default)(this, "standId", _descriptor13, this);
      (0, _initializerDefineProperty2.default)(this, "cost", _descriptor14, this);
      (0, _initializerDefineProperty2.default)(this, "optStand", _descriptor15, this);
      (0, _initializerDefineProperty2.default)(this, "optCost", _descriptor16, this);
    }

    get airClass() {
      // Regional,120
      // Narrow_Body,220
      // Wide_Body,1000
      return this.paxCapTotal <= 120 ? 'Regional' : this.paxCapTotal <= 222 ? 'Narrow_Body' : 'Wide_Body';
    }

    get duration() {
      return (0, _moment.default)(this.end).diff(this.start, 'minutes');
    }

    get diffFromOpt() {
      return this.cost / this.optCost;
    }

    get pseudoAcCode() {
      return `${this.airline}-${this.paxCapTotal}-${this.synchronCode}-${this.terminalId}`;
    }

  }, (_descriptor = (0, _applyDecoratedDescriptor2.default)(_class.prototype, "isArrival", [_dec], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor2 = (0, _applyDecoratedDescriptor2.default)(_class.prototype, "time", [_dec2], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor3 = (0, _applyDecoratedDescriptor2.default)(_class.prototype, "start", [_dec3], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor4 = (0, _applyDecoratedDescriptor2.default)(_class.prototype, "end", [_dec4], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor5 = (0, _applyDecoratedDescriptor2.default)(_class.prototype, "airline", [_dec5], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor6 = (0, _applyDecoratedDescriptor2.default)(_class.prototype, "synchronCode", [_dec6], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor7 = (0, _applyDecoratedDescriptor2.default)(_class.prototype, "flightType", [_dec7], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor8 = (0, _applyDecoratedDescriptor2.default)(_class.prototype, "airport", [_dec8], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor9 = (0, _applyDecoratedDescriptor2.default)(_class.prototype, "pax", [_dec9], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor10 = (0, _applyDecoratedDescriptor2.default)(_class.prototype, "paxCapTotal", [_dec10], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor11 = (0, _applyDecoratedDescriptor2.default)(_class.prototype, "index", [_dec11], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor12 = (0, _applyDecoratedDescriptor2.default)(_class.prototype, "terminalId", [_dec12], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor13 = (0, _applyDecoratedDescriptor2.default)(_class.prototype, "standId", [_dec13], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor14 = (0, _applyDecoratedDescriptor2.default)(_class.prototype, "cost", [_dec14], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor15 = (0, _applyDecoratedDescriptor2.default)(_class.prototype, "optStand", [_dec15], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor16 = (0, _applyDecoratedDescriptor2.default)(_class.prototype, "optCost", [_dec16], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  })), _class));
  _exports.default = TimetableModel;
});
;define("svo-aircraft-tetris/modifiers/create-ref", ["exports", "ember-ref-bucket/modifiers/create-ref"], function (_exports, _createRef) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _createRef.default;
    }
  });
});
;define("svo-aircraft-tetris/modifiers/did-insert", ["exports", "@ember/render-modifiers/modifiers/did-insert"], function (_exports, _didInsert) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _didInsert.default;
    }
  });
});
;define("svo-aircraft-tetris/modifiers/did-update", ["exports", "@ember/render-modifiers/modifiers/did-update"], function (_exports, _didUpdate) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _didUpdate.default;
    }
  });
});
;define("svo-aircraft-tetris/modifiers/focus-trap", ["exports", "ember-focus-trap/modifiers/focus-trap"], function (_exports, _focusTrap) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _focusTrap.default;
    }
  });
});
;define("svo-aircraft-tetris/modifiers/style", ["exports", "ember-style-modifier/modifiers/style"], function (_exports, _style) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _style.default;
    }
  });
});
;define("svo-aircraft-tetris/modifiers/will-destroy", ["exports", "@ember/render-modifiers/modifiers/will-destroy"], function (_exports, _willDestroy) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _willDestroy.default;
    }
  });
});
;define("svo-aircraft-tetris/router", ["exports", "@babel/runtime/helpers/esm/defineProperty", "svo-aircraft-tetris/config/environment"], function (_exports, _defineProperty2, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  class Router extends Ember.Router {
    constructor(...args) {
      super(...args);
      (0, _defineProperty2.default)(this, "location", _environment.default.locationType);
      (0, _defineProperty2.default)(this, "rootURL", _environment.default.rootURL);
    }

  }

  _exports.default = Router;
  Router.map(function () {});
});
;define("svo-aircraft-tetris/routes/index", ["exports", "@babel/runtime/helpers/esm/initializerDefineProperty", "@babel/runtime/helpers/esm/defineProperty", "@babel/runtime/helpers/esm/applyDecoratedDescriptor", "@babel/runtime/helpers/esm/initializerWarningHelper", "fetch"], function (_exports, _initializerDefineProperty2, _defineProperty2, _applyDecoratedDescriptor2, _initializerWarningHelper2, _fetch) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _dec, _class, _descriptor;

  let IndexRoute = (_dec = Ember.inject.service, (_class = class IndexRoute extends Ember.Route {
    constructor(...args) {
      super(...args);
      (0, _initializerDefineProperty2.default)(this, "store", _descriptor, this);
    }

    async model() {
      const response = await (0, _fetch.default)('S_private_4.json');
      const S = await response.json();
      Object.keys(S).forEach(lineKey => {
        const orderedCost = Object.keys(S[lineKey]).map(standKey => {
          return S[lineKey][standKey];
        }).sort((a, b) => {
          return a.Cost - b.Cost;
        }).slice(0, 20);
        S[lineKey] = orderedCost;
      });
      const responseStands = await (0, _fetch.default)('aircraft-stands.json');
      let stands = await responseStands.json();
      stands = stands.reduce((prev, val) => {
        prev[val['id']] = val;
        return prev;
      }, {});
      const responseRates = await (0, _fetch.default)('handling-rates.json');
      let rates = await responseRates.json();
      rates = rates.reduce((prev, val) => {
        prev[val.Name] = +val.Value;
        return prev;
      }, {});
      const responseTimes = await (0, _fetch.default)('handling-times.json');
      let times = await responseTimes.json();
      times = times.reduce((prev, val) => {
        prev[val['Aircraft_Class']] = {
          jbTime: +val['JetBridge_Handling_Time'],
          awayTime: +val['Away_Handling_Time']
        };
        return prev;
      }, {});
      return {
        optimalStands: S,
        stands,
        rates,
        times
      };
    }

    setupController(controller) {
      super.setupController(...arguments);
      const owner = Ember.getOwner(this);
      const theme = owner.lookup('component:models-table').themeInstance;
      controller.columns.unshiftObject({
        component: theme.expandToggleComponent,
        componentForFilterCell: theme.expandAllToggleComponent,
        mayBeHidden: false
      });
    }

  }, (_descriptor = (0, _applyDecoratedDescriptor2.default)(_class.prototype, "store", [_dec], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  })), _class));
  _exports.default = IndexRoute;
});
;define("svo-aircraft-tetris/serializers/-default", ["exports", "@ember-data/serializer/json"], function (_exports, _json) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _json.default;
    }
  });
});
;define("svo-aircraft-tetris/serializers/-json-api", ["exports", "@ember-data/serializer/json-api"], function (_exports, _jsonApi) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _jsonApi.default;
    }
  });
});
;define("svo-aircraft-tetris/serializers/-rest", ["exports", "@ember-data/serializer/rest"], function (_exports, _rest) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _rest.default;
    }
  });
});
;define("svo-aircraft-tetris/services/-ensure-registered", ["exports", "@embroider/util/services/ensure-registered"], function (_exports, _ensureRegistered) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _ensureRegistered.default;
    }
  });
});
;define("svo-aircraft-tetris/services/page-title-list", ["exports", "ember-page-title/services/page-title-list"], function (_exports, _pageTitleList) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _pageTitleList.default;
    }
  });
});
;define("svo-aircraft-tetris/services/page-title", ["exports", "ember-page-title/services/page-title"], function (_exports, _pageTitle) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _pageTitle.default;
    }
  });
});
;define("svo-aircraft-tetris/services/store", ["exports", "ember-data/store"], function (_exports, _store) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _store.default;
    }
  });
});
;define("svo-aircraft-tetris/templates/application", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "aAQdKysn",
    "block": "{\"symbols\":[],\"statements\":[[1,[30,[36,0],[\"SvoAircraftTetris\"],null]],[2,\"\\n\\n\"],[1,[30,[36,2],[[30,[36,1],null,null]],null]]],\"hasEval\":false,\"upvars\":[\"page-title\",\"-outlet\",\"component\"]}",
    "moduleName": "svo-aircraft-tetris/templates/application.hbs"
  });

  _exports.default = _default;
});
;define("svo-aircraft-tetris/templates/components/ember-popper-targeting-parent", ["exports", "ember-popper/templates/components/ember-popper-targeting-parent"], function (_exports, _emberPopperTargetingParent) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _emberPopperTargetingParent.default;
    }
  });
});
;define("svo-aircraft-tetris/templates/components/ember-popper", ["exports", "ember-popper/templates/components/ember-popper"], function (_exports, _emberPopper) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _emberPopper.default;
    }
  });
});
;define("svo-aircraft-tetris/templates/index", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "1Mx0O3WA",
    "block": "{\"symbols\":[\"tlf\",\"classFilt\",\"termFilt\",\"standU\",\"form\",\"incorrectStand\",\"intersectedLine\",\"form\"],\"statements\":[[1,[30,[36,10],[\"Index\"],null]],[2,\"\\n\"],[10,\"div\"],[14,0,\"container\"],[12],[2,\"\\n  \"],[10,\"div\"],[14,0,\"row\"],[12],[2,\"\\n    \"],[10,\"div\"],[14,0,\"col-8\"],[12],[2,\"\\n      \"],[10,\"h3\"],[12],[2,\"\\n        Timetables\\n      \"],[13],[2,\"\\n      \"],[8,\"bs-form\",[],[[\"@formLayout\",\"@model\",\"@onSubmit\"],[\"vertical\",[32,0],[32,0,[\"parseTimetable\"]]]],[[\"default\"],[{\"statements\":[[2,\"\\n\"],[2,\"        \"],[11,\"button\"],[24,0,\"btn btn-outline-primary\"],[24,4,\"button\"],[4,[38,2],[\"click\",[32,0,[\"calculateCosts\"]]],null],[12],[2,\"\\n          Calculate Costs\\n          \"],[1,[32,0,[\"calcCost\"]]],[2,\"\\n        \"],[13],[2,\"\\n        \"],[8,[32,8,[\"element\"]],[[24,\"rows\",\"10\"]],[[\"@controlType\",\"@label\",\"@property\"],[\"textarea\",\"Textarea\",\"timetableCSV\"]],null],[2,\"\\n        \"],[10,\"div\"],[14,0,\"row mb-3\"],[12],[2,\"\\n          \"],[10,\"div\"],[14,0,\"col-4\"],[12],[2,\"\\n            \"],[8,[32,8,[\"submitButton\"]],[],[[],[]],[[\"default\"],[{\"statements\":[[2,\"\\n              Parse timetable CSV\\n            \"]],\"parameters\":[]}]]],[2,\"\\n          \"],[13],[2,\"\\n          \"],[10,\"div\"],[14,0,\"col-4\"],[12],[2,\"\\n            Number of errors\\n            \"],[1,[32,0,[\"incorrectData\",\"length\"]]],[2,\"\\n          \"],[13],[2,\"\\n          \"],[10,\"div\"],[14,0,\"col-4\"],[12],[2,\"\\n            \"],[11,\"button\"],[24,0,\"btn btn-outline-primary\"],[24,4,\"button\"],[4,[38,2],[\"click\",[32,0,[\"toggleShowErrors\"]]],null],[12],[2,\"\\n              Show/hide error details\\n            \"],[13],[2,\"\\n          \"],[13],[2,\"\\n        \"],[13],[2,\"\\n      \"]],\"parameters\":[8]}]]],[2,\"\\n\"],[6,[37,0],[[32,0,[\"showErrors\"]]],null,[[\"default\"],[{\"statements\":[[2,\"        \"],[10,\"div\"],[14,0,\"row\"],[12],[2,\"\\n\"],[6,[37,5],[[30,[36,4],[[30,[36,4],[[30,[36,9],[200,[32,0,[\"incorrectData\"]]],null]],null]],null]],null,[[\"default\"],[{\"statements\":[[2,\"            \"],[10,\"div\"],[14,0,\"col-3\"],[12],[2,\"\\n              \"],[1,[32,6,[\"standId\"]]],[2,\"\\n            \"],[13],[2,\"\\n            \"],[10,\"div\"],[14,0,\"col-4\"],[12],[2,\"\\n\"],[6,[37,5],[[30,[36,4],[[30,[36,4],[[30,[36,3],[\"start\",[32,6,[\"lines\"]]],null]],null]],null]],null,[[\"default\"],[{\"statements\":[[2,\"                \"],[10,\"div\"],[14,0,\"row\"],[12],[2,\"\\n                  \"],[10,\"div\"],[14,0,\"col-6\"],[12],[2,\"\\n                    \"],[1,[32,7,[\"start\"]]],[2,\"\\n                  \"],[13],[2,\"\\n                  \"],[10,\"div\"],[14,0,\"col-6\"],[12],[2,\"\\n                    \"],[1,[32,7,[\"end\"]]],[2,\"\\n                  \"],[13],[2,\"\\n                \"],[13],[2,\"\\n\"]],\"parameters\":[7]}]]],[2,\"            \"],[13],[2,\"\\n            \"],[10,\"div\"],[14,0,\"col-5\"],[12],[2,\"\\n              \"],[8,\"d3/timetable-chart\",[],[[\"@data\",\"@width\",\"@chartOptions\",\"@aspectRatio\"],[[32,6,[\"lines\"]],260,[30,[36,8],null,[[\"minY\",\"maxY\",\"minX\",\"maxX\"],[\"\",\"\",[30,[36,6],[[30,[36,6],[[30,[36,6],[[32,6],\"lines\"],null],0],null],\"start\"],null],[30,[36,6],[[30,[36,6],[[30,[36,7],[[30,[36,6],[[32,6],\"lines\"],null]],null],0],null],\"end\"],null]]]],0.6]],null],[2,\"\\n            \"],[13],[2,\"\\n\"]],\"parameters\":[6]}]]],[2,\"        \"],[13],[2,\"\\n\"]],\"parameters\":[]}]]],[2,\"      \"],[11,\"button\"],[24,0,\"btn btn-outline-primary\"],[24,4,\"button\"],[4,[38,2],[\"click\",[32,0,[\"toggleShowOptions\"]]],null],[12],[2,\"\\n        Show/hide chart options\\n      \"],[13],[2,\"\\n\"],[6,[37,0],[[32,0,[\"showChartOptions\"]]],null,[[\"default\"],[{\"statements\":[[2,\"        \"],[10,\"h3\"],[12],[2,\"\\n          Chart options\\n        \"],[13],[2,\"\\n        \"],[8,\"bs-form\",[],[[\"@formLayout\",\"@model\"],[\"vertical\",[32,0,[\"chartOptions\"]]]],[[\"default\"],[{\"statements\":[[2,\"\\n          \"],[8,[32,5,[\"element\"]],[],[[\"@controlType\",\"@label\",\"@property\"],[\"input\",\"min Y\",\"minY\"]],null],[2,\"\\n          \"],[8,[32,5,[\"element\"]],[],[[\"@controlType\",\"@label\",\"@property\"],[\"input\",\"max Y\",\"maxY\"]],null],[2,\"\\n          \"],[8,[32,5,[\"element\"]],[],[[\"@controlType\",\"@label\",\"@property\"],[\"input\",\"min X\",\"minX\"]],null],[2,\"\\n          \"],[8,[32,5,[\"element\"]],[],[[\"@controlType\",\"@label\",\"@property\"],[\"input\",\"max X\",\"maxX\"]],null],[2,\"\\n        \"]],\"parameters\":[5]}]]],[2,\"\\n\"]],\"parameters\":[]}]]],[2,\"    \"],[13],[2,\"\\n    \"],[10,\"div\"],[14,0,\"col-4\"],[12],[2,\"\\n      \"],[10,\"div\"],[14,0,\"row\"],[12],[2,\"\\n        \"],[10,\"h2\"],[12],[2,\"\\n          Statistics of the arrangement\\n        \"],[13],[2,\"\\n        \"],[10,\"div\"],[14,0,\"col-12\"],[12],[2,\"\\n          \"],[10,\"p\"],[12],[2,\"\\n            Length of timetable:\\n            \"],[1,[32,0,[\"data\",\"length\"]]],[2,\"\\n          \"],[13],[2,\"\\n          \"],[10,\"p\"],[12],[2,\"\\n            Total cost\\n            \"],[1,[32,0,[\"totalCost\"]]],[2,\"\\n          \"],[13],[2,\"\\n          \"],[10,\"p\"],[12],[2,\"\\n            Total Optimal cost / via stands\\n            \"],[1,[32,0,[\"totalOptCost\"]]],[2,\"\\n            /\\n            \"],[1,[32,0,[\"totalOptCostsViaStands\"]]],[2,\"\\n          \"],[13],[2,\"\\n          \"],[10,\"p\"],[12],[2,\"\\n            Total utilisation\\n            \"],[1,[32,0,[\"totalStandsUtilization\"]]],[2,\"\\n          \"],[13],[2,\"\\n          \"],[10,\"p\"],[12],[2,\"\\n            Ratio\\n            \"],[1,[32,0,[\"optimalRatio\"]]],[2,\"\\n          \"],[13],[2,\"\\n          Stands Utilisations:\\n\"],[6,[37,5],[[30,[36,4],[[30,[36,4],[[30,[36,9],[10,[32,0,[\"standsUtilization\"]]],null]],null]],null]],null,[[\"default\"],[{\"statements\":[[2,\"            \"],[10,\"div\"],[12],[2,\"\\n              \"],[1,[32,4,[\"stand\"]]],[2,\"\\n              \"],[1,[32,4,[\"utilisation\"]]],[2,\"\\n            \"],[13],[2,\"\\n\"]],\"parameters\":[4]}]]],[2,\"        \"],[13],[2,\"\\n      \"],[13],[2,\"\\n    \"],[13],[2,\"\\n    \"],[8,\"timelines-filtering\",[],[[\"@inputData\"],[[32,0,[\"data\"]]]],[[\"default\"],[{\"statements\":[[2,\"\\n      \"],[10,\"div\"],[14,0,\"col-12\"],[12],[2,\"\\n        \"],[10,\"h3\"],[12],[2,\"\\n          Flights arrangement\\n        \"],[13],[2,\"\\n        \"],[10,\"div\"],[14,0,\"card-deck\"],[12],[2,\"\\n          \"],[10,\"div\"],[14,0,\"card m-2\"],[12],[2,\"\\n            \"],[10,\"div\"],[14,0,\"card-body\"],[12],[2,\"\\n              \"],[10,\"h5\"],[14,0,\"card-title\"],[12],[2,\"\\n                Filters\\n              \"],[13],[2,\"\\n              \"],[10,\"form\"],[12],[2,\"\\n                \"],[10,\"div\"],[14,0,\"form-group row\"],[12],[2,\"\\n                  \"],[10,\"label\"],[14,\"for\",\"exampleInputMaintenanceGroup\"],[14,0,\"col-sm-2 col-form-label\"],[12],[2,\"\\n                    Terminal\\n                  \"],[13],[2,\"\\n                  \"],[10,\"div\"],[14,0,\"btn-toolbar col-sm-10\"],[14,1,\"exampleInputMaintenanceGroup\"],[14,\"role\",\"toolbar\"],[14,\"aria-label\",\"Toolbar with button groups\"],[12],[2,\"\\n                    \"],[10,\"div\"],[14,0,\"btn-group mr-2\"],[14,\"role\",\"group\"],[14,\"aria-label\",\"First group\"],[12],[2,\"\\n\"],[6,[37,5],[[30,[36,4],[[30,[36,4],[[32,1,[\"terminalFilters\"]]],null]],null]],null,[[\"default\"],[{\"statements\":[[2,\"                        \"],[11,\"button\"],[16,0,[31,[\"btn\\n                            \",[30,[36,0],[[32,3,[\"enabled\"]],\"btn-primary\",\"btn-outline-primary\"],null]]]],[24,4,\"button\"],[4,[38,2],[\"click\",[30,[36,1],[[32,1,[\"toggleFilter\"]],[32,3]],null]],null],[12],[2,\"\\n                          \"],[1,[32,3,[\"label\"]]],[2,\"\\n                        \"],[13],[2,\"\\n\"]],\"parameters\":[3]}]]],[2,\"                    \"],[13],[2,\"\\n                  \"],[13],[2,\"\\n                \"],[13],[2,\"\\n                \"],[10,\"div\"],[14,0,\"form-group row\"],[12],[2,\"\\n                  \"],[10,\"label\"],[14,\"for\",\"exampleInputMaintenanceGroup\"],[14,0,\"col-sm-2 col-form-label\"],[12],[2,\"\\n                    Body type\\n                  \"],[13],[2,\"\\n                  \"],[10,\"div\"],[14,0,\"btn-toolbar col-sm-10\"],[14,1,\"exampleInputMaintenanceGroup\"],[14,\"role\",\"toolbar\"],[14,\"aria-label\",\"Toolbar with button groups\"],[12],[2,\"\\n                    \"],[10,\"div\"],[14,0,\"btn-group mr-2\"],[14,\"role\",\"group\"],[14,\"aria-label\",\"First group\"],[12],[2,\"\\n\"],[6,[37,5],[[30,[36,4],[[30,[36,4],[[32,1,[\"airClassFilters\"]]],null]],null]],null,[[\"default\"],[{\"statements\":[[2,\"                        \"],[11,\"button\"],[16,0,[31,[\"btn\\n                            \",[30,[36,0],[[32,2,[\"enabled\"]],\"btn-primary\",\"btn-outline-primary\"],null]]]],[24,4,\"button\"],[4,[38,2],[\"click\",[30,[36,1],[[32,1,[\"toggleFilter\"]],[32,2]],null]],null],[12],[2,\"\\n                          \"],[1,[32,2,[\"label\"]]],[2,\"\\n                        \"],[13],[2,\"\\n\"]],\"parameters\":[2]}]]],[2,\"                    \"],[13],[2,\"\\n                  \"],[13],[2,\"\\n                \"],[13],[2,\"\\n              \"],[13],[2,\"\\n            \"],[13],[2,\"\\n          \"],[13],[2,\"\\n        \"],[13],[2,\"\\n      \"],[13],[2,\"\\n      \"],[10,\"div\"],[14,0,\"col-12\"],[12],[2,\"\\n        \"],[8,\"d3/timetable-chart\",[],[[\"@data\",\"@stands\",\"@width\",\"@chartOptions\",\"@aspectRatio\"],[[32,1,[\"outputData\"]],[32,0,[\"stands\"]],960,[30,[36,8],null,[[\"minY\",\"maxY\",\"minX\",\"maxX\"],[[32,0,[\"chartOptions\",\"minY\"]],[32,0,[\"chartOptions\",\"maxY\"]],[32,0,[\"chartOptions\",\"minX\"]],[32,0,[\"chartOptions\",\"maxX\"]]]]],0.6]],null],[2,\"\\n      \"],[13],[2,\"\\n      \"],[10,\"div\"],[14,0,\"col-12\"],[12],[2,\"\\n        \"],[8,\"models-table\",[],[[\"@data\",\"@columns\",\"@showComponentFooter\",\"@showColumnsDropdown\",\"@useFilteringByColumns\",\"@showGlobalFilter\",\"@doFilteringByHiddenColumns\",\"@useNumericPagination\",\"@filteringIgnoreCase\",\"@multipleColumnsSorting\",\"@showCurrentPageNumberSelect\",\"@collapseNumPaginationForPagesCount\",\"@expandedRowComponent\",\"@showPageSize\",\"@pageSize\"],[[32,0,[\"data\"]],[32,0,[\"columns\"]],[32,0,[\"showComponentFooter\"]],[32,0,[\"showColumnsDropdown\"]],[32,0,[\"useFilteringByColumns\"]],[32,0,[\"showGlobalFilter\"]],[32,0,[\"doFilteringByHiddenColumns\"]],[32,0,[\"useNumericPagination\"]],[32,0,[\"filteringIgnoreCase\"]],[32,0,[\"multipleColumnsSorting\"]],[32,0,[\"showCurrentPageNumberSelect\"]],[32,0,[\"collapseNumPaginationForPagesCount\"]],[30,[36,11],[\"emt/expanded-line\"],null],[32,0,[\"showPageSize\"]],50]],null],[2,\"\\n      \"],[13],[2,\"\\n    \"]],\"parameters\":[1]}]]],[2,\"\\n    \"],[10,\"div\"],[14,0,\"col-12\"],[12],[2,\"\\n      \"],[10,\"h3\"],[12],[2,\"\\n        Places utilisation\\n      \"],[13],[2,\"\\n      \"],[8,\"d3/stand-utilisation\",[],[[\"@data\",\"@width\",\"@aspectRatio\"],[[32,0,[\"standsUtilization\"]],960,0.3]],null],[2,\"\\n    \"],[13],[2,\"\\n    \"],[10,\"div\"],[14,0,\"col-12\"],[12],[2,\"\\n      \"],[10,\"h3\"],[12],[2,\"\\n        Diff from optimal\\n      \"],[13],[2,\"\\n      \"],[8,\"d3/stands-optimal-prices\",[],[[\"@data\",\"@width\",\"@aspectRatio\"],[[32,0,[\"timelinesByDiffFromOpt\"]],960,0.3]],null],[2,\"\\n    \"],[13],[2,\"\\n  \"],[13],[2,\"\\n\"],[13],[2,\"\\n\"],[1,[30,[36,11],[[30,[36,12],null,null]],null]]],\"hasEval\":false,\"upvars\":[\"if\",\"fn\",\"on\",\"sort-by\",\"-track-array\",\"each\",\"get\",\"reverse\",\"hash\",\"take\",\"page-title\",\"component\",\"-outlet\"]}",
    "moduleName": "svo-aircraft-tetris/templates/index.hbs"
  });

  _exports.default = _default;
});
;define("svo-aircraft-tetris/themes/bootstrap3", ["exports", "ember-models-table/themes/bootstrap3"], function (_exports, _bootstrap) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _bootstrap.default;
    }
  });
});
;define("svo-aircraft-tetris/themes/bootstrap4", ["exports", "ember-models-table/themes/bootstrap4"], function (_exports, _bootstrap) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _bootstrap.default;
    }
  });
});
;define("svo-aircraft-tetris/themes/default", ["exports", "ember-models-table/themes/default"], function (_exports, _default) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _default.default;
    }
  });
});
;define("svo-aircraft-tetris/themes/ember-bootstrap-v3", ["exports", "ember-models-table/themes/ember-bootstrap-v3"], function (_exports, _emberBootstrapV) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _emberBootstrapV.default;
    }
  });
});
;define("svo-aircraft-tetris/themes/ember-bootstrap-v4", ["exports", "ember-models-table/themes/ember-bootstrap-v4"], function (_exports, _emberBootstrapV) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _emberBootstrapV.default;
    }
  });
});
;define("svo-aircraft-tetris/themes/ember-paper", ["exports", "ember-models-table/themes/ember-paper"], function (_exports, _emberPaper) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _emberPaper.default;
    }
  });
});
;define("svo-aircraft-tetris/themes/plain-html", ["exports", "ember-models-table/themes/plain-html"], function (_exports, _plainHtml) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _plainHtml.default;
    }
  });
});
;define("svo-aircraft-tetris/transforms/boolean", ["exports", "@ember-data/serializer/-private"], function (_exports, _private) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _private.BooleanTransform;
    }
  });
});
;define("svo-aircraft-tetris/transforms/date", ["exports", "@ember-data/serializer/-private"], function (_exports, _private) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _private.DateTransform;
    }
  });
});
;define("svo-aircraft-tetris/transforms/number", ["exports", "@ember-data/serializer/-private"], function (_exports, _private) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _private.NumberTransform;
    }
  });
});
;define("svo-aircraft-tetris/transforms/string", ["exports", "@ember-data/serializer/-private"], function (_exports, _private) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _private.StringTransform;
    }
  });
});
;define("svo-aircraft-tetris/utils/fmt", ["exports", "ember-models-table/utils/fmt"], function (_exports, _fmt) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _fmt.default;
    }
  });
});
;

;define('svo-aircraft-tetris/config/environment', [], function() {
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

;
          if (!runningTests) {
            require("svo-aircraft-tetris/app")["default"].create({"name":"svo-aircraft-tetris","version":"0.0.0+7df5807f"});
          }
        
//# sourceMappingURL=svo-aircraft-tetris.map
