define('bookstore-frontend/tests/about/route.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | about/route.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'about/route.js should pass jshint.');
  });
});
define('bookstore-frontend/tests/adapters/application.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | adapters/application.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'adapters/application.js should pass jshint.');
  });
});
define('bookstore-frontend/tests/app.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | app.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app.js should pass jshint.');
  });
});
define('bookstore-frontend/tests/authors/author/edit/route.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | authors/author/edit/route.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'authors/author/edit/route.js should pass jshint.');
  });
});
define('bookstore-frontend/tests/authors/author/route.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | authors/author/route.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'authors/author/route.js should pass jshint.');
  });
});
define('bookstore-frontend/tests/authors/index/route.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | authors/index/route.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'authors/index/route.js should pass jshint.');
  });
});
define('bookstore-frontend/tests/authors/route.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | authors/route.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'authors/route.js should pass jshint.');
  });
});
define('bookstore-frontend/tests/books/route.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | books/route.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'books/route.js should pass jshint.');
  });
});
define('bookstore-frontend/tests/contact/route.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | contact/route.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'contact/route.js should pass jshint.');
  });
});
define('bookstore-frontend/tests/helpers/destroy-app', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = destroyApp;

  function destroyApp(application) {
    _ember['default'].run(application, 'destroy');
  }
});
define('bookstore-frontend/tests/helpers/destroy-app.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | helpers/destroy-app.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/destroy-app.js should pass jshint.');
  });
});
define('bookstore-frontend/tests/helpers/module-for-acceptance', ['exports', 'qunit', 'ember', 'bookstore-frontend/tests/helpers/start-app', 'bookstore-frontend/tests/helpers/destroy-app'], function (exports, _qunit, _ember, _bookstoreFrontendTestsHelpersStartApp, _bookstoreFrontendTestsHelpersDestroyApp) {
  var Promise = _ember['default'].RSVP.Promise;

  exports['default'] = function (name) {
    var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

    (0, _qunit.module)(name, {
      beforeEach: function beforeEach() {
        this.application = (0, _bookstoreFrontendTestsHelpersStartApp['default'])();

        if (options.beforeEach) {
          return options.beforeEach.apply(this, arguments);
        }
      },

      afterEach: function afterEach() {
        var _this = this;

        var afterEach = options.afterEach && options.afterEach.apply(this, arguments);
        return Promise.resolve(afterEach).then(function () {
          return (0, _bookstoreFrontendTestsHelpersDestroyApp['default'])(_this.application);
        });
      }
    });
  };
});
define('bookstore-frontend/tests/helpers/module-for-acceptance.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | helpers/module-for-acceptance.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/module-for-acceptance.js should pass jshint.');
  });
});
define('bookstore-frontend/tests/helpers/resolver', ['exports', 'bookstore-frontend/resolver', 'bookstore-frontend/config/environment'], function (exports, _bookstoreFrontendResolver, _bookstoreFrontendConfigEnvironment) {

  var resolver = _bookstoreFrontendResolver['default'].create();

  resolver.namespace = {
    modulePrefix: _bookstoreFrontendConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _bookstoreFrontendConfigEnvironment['default'].podModulePrefix
  };

  exports['default'] = resolver;
});
define('bookstore-frontend/tests/helpers/resolver.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | helpers/resolver.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/resolver.js should pass jshint.');
  });
});
define('bookstore-frontend/tests/helpers/start-app', ['exports', 'ember', 'bookstore-frontend/app', 'bookstore-frontend/config/environment'], function (exports, _ember, _bookstoreFrontendApp, _bookstoreFrontendConfigEnvironment) {
  exports['default'] = startApp;

  function startApp(attrs) {
    var application = undefined;

    var attributes = _ember['default'].merge({}, _bookstoreFrontendConfigEnvironment['default'].APP);
    attributes = _ember['default'].merge(attributes, attrs); // use defaults, but you can override;

    _ember['default'].run(function () {
      application = _bookstoreFrontendApp['default'].create(attributes);
      application.setupForTesting();
      application.injectTestHelpers();
    });

    return application;
  }
});
define('bookstore-frontend/tests/helpers/start-app.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | helpers/start-app.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/start-app.js should pass jshint.');
  });
});
define('bookstore-frontend/tests/index/route.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | index/route.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'index/route.js should pass jshint.');
  });
});
define('bookstore-frontend/tests/models/author.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | models/author.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/author.js should pass jshint.');
  });
});
define('bookstore-frontend/tests/models/book.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | models/book.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/book.js should pass jshint.');
  });
});
define('bookstore-frontend/tests/models/publisher.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | models/publisher.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/publisher.js should pass jshint.');
  });
});
define('bookstore-frontend/tests/publishers/route.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | publishers/route.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'publishers/route.js should pass jshint.');
  });
});
define('bookstore-frontend/tests/resolver.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | resolver.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'resolver.js should pass jshint.');
  });
});
define('bookstore-frontend/tests/router.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | router.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'router.js should pass jshint.');
  });
});
define('bookstore-frontend/tests/test-helper', ['exports', 'bookstore-frontend/tests/helpers/resolver', 'ember-qunit'], function (exports, _bookstoreFrontendTestsHelpersResolver, _emberQunit) {

  (0, _emberQunit.setResolver)(_bookstoreFrontendTestsHelpersResolver['default']);
});
define('bookstore-frontend/tests/test-helper.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | test-helper.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'test-helper.js should pass jshint.');
  });
});
define('bookstore-frontend/tests/unit/index/route-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:index', 'Unit | Route | index', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('bookstore-frontend/tests/unit/index/route-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/index/route-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/index/route-test.js should pass jshint.');
  });
});
define('bookstore-frontend/tests/unit/routes/index-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:index', 'Unit | Route | index', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('bookstore-frontend/tests/unit/routes/index-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/routes/index-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/index-test.js should pass jshint.');
  });
});
/* jshint ignore:start */

require('bookstore-frontend/tests/test-helper');
EmberENV.TESTS_FILE_LOADED = true;

/* jshint ignore:end */
//# sourceMappingURL=tests.map