/**
 * Provides a convenience layer for mapping specific parts
 * within space applications as singletons by listing their
 * full namespace paths in arrays like:
 * stores: ['My.awesome.Store', 'My.second.Store']
**/

Space.Module.mixin({

  stores: [],

  onDependenciesReady: function() {
    this._wrapLifecycleHook('onInitialize', this._onInitializeFlux);
    this._wrapLifecycleHook('afterInitialize', this.afterInitializeFlux);
  },

  /**
   * This life-cycle hook is called during initialization of the space
   * application and sets up the singleton mappings and UI components.
  **/
  _onInitializeFlux(onInitialize) {
    // Map service-like classes that need to run during the complete
    // life-cycle of a space application as singletons.
    let mapAsSingleton = function(klass) {
      this.injector.map(klass).asSingleton();
    };
    _.each(this.stores, mapAsSingleton, this);

    onInitialize.call(this);
  },

  /**
   * This life-cycle hook is called when the app starts to run
   * and creates the singleton instances.
   */
  afterInitializeFlux(afterInitialize) {
    let createSingletonInstance = _.bind(function(klass) {
      this.injector.create(klass);
    }, this);
    _.each(this.stores, createSingletonInstance);
    afterInitialize.call(this);
  }
});
