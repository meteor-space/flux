Changelog
=========

## 0.7.0
This release comes in parallel with the return of `space:ui` @ 6.0.0, which provides the foundation for building _any_ style of Space UI, not just using a _flux_ pattern. This package depends on `space:ui` to compose the `Space.flux.Store`, the only flux-specific object you now need to use.

### Breaking Changes
- `Space.flux.BlazeComponent` => `Space.ui.BlazeComponent`
- `Space.flux.defineEvents` => `Space.ui.Reactive`
- `Space.flux.Stateful` => `Space.ui.Stateful`
- `Space.flux.defineEvents` => `Space.ui.defineEvents`
- `Space.flux.getEventTarget` => `Space.ui.getEventTarget`

See the [space:ui changelog](https://github.com/meteor-space/ui/blob/master/CHANGELOG.md) for full details

## 0.6.1
- Fixes link to Travis

## 0.6.0
BREAKING CHANGES:
See [upgrade guide](https://meteor-space.readme.io/v1.0/docs/upgrade-guide) for
full details
- Reactive data sources now just need to be defined as methods on
`Space.flux.Store`, with non-reactive sources added to either the new
`reactiveVars` array, or the `sessionVars` array. This change was motivated
to simplify the component's interface, but it also improves the clarity of
reactive state management in the store.

NON-BREAKING CHANGES:
- `Space.flux.Store` instances now have an `eventSubscriptions` property to define
the event subscribers 
