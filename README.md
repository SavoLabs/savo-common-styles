savo-common-styles
==============================================================================

This is an addon that provides Savo's Ember applications and Engines with the
the basic styles that can be used across all Savo interfaces.  Not all engines
need all of the code provided by savo-components.  Thus, this addon is focused
on solving two problems.

* Reduce the bloat in savo-components
* Allow Engines to be run and tested in isolation

Installation
------------------------------------------------------------------------------

```
ember install savo-common-styles
```


Usage
------------------------------------------------------------------------------

For Ember Applications, this addon will add an import statement to the
`app/styles/app.scss` file.

For Engines, this addon will add an import statement to
`tests/dummy/app/styles/app.scss`.

If you are adding this package to an addon that is NOT an Ember Engine, then you
will need to manually add the import statement to you applications `addon.scss`
file.

```
@import 'savo-common-styles/addon'
```


Contributing
------------------------------------------------------------------------------

### Installation

* `git clone <repository-url>`
* `cd savo-common-styles`
* `npm install`

### Linting

* `npm run lint:js`
* `npm run lint:js -- --fix`

### Running tests

* `ember test` – Runs the test suite on the current Ember version
* `ember test --server` – Runs the test suite in "watch mode"
* `ember try:each` – Runs the test suite against multiple Ember versions

### Running the dummy application

* `ember serve`
* Visit the dummy application at [http://localhost:4200](http://localhost:4200).

For more information on using ember-cli, visit [https://ember-cli.com/](https://ember-cli.com/).

License
------------------------------------------------------------------------------

This project is licensed under the [MIT License](LICENSE.md).
