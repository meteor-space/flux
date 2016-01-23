Space.Object.extend('Space.flux.Store', {
  mixin: [
    Space.ui.Stateful,
    Space.ui.Reactive,
    Space.messaging.EventSubscribing
  ]
});
