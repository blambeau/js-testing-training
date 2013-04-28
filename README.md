## Initial commit


[View this commit](https://github.com/mattwynne/js-testing-training/commit/d27de66a5d11d6d1891178c9946247de961edc26)

## Ignore IntelliJ temp files


[View this commit](https://github.com/mattwynne/js-testing-training/commit/e1f5f6677d5412e8d4fa9f68fec55954def7d10c)

## Problem: Try to add a click event handler

This is the simplest thing that could possibly work. We don't use jQuery
yet. This is deliberate to keep things simple, even though the looping
code is pretty gnarly.

[View this commit](https://github.com/mattwynne/js-testing-training/commit/11df367e61be71bfcc801f27b7232db9c8fee8f0)

## Solution: Set classname of table cell


[View this commit](https://github.com/mattwynne/js-testing-training/commit/e7475710857af0bb3794571e4c365977eea96ddd)

## Enhancement: Introduce simple end-to-end jasmine test

Note, this deliberately uses basic assertions, we'll replace them next

What we learned:

* How to pull in external files (Jasmine-related)
* Include Jasmine and its web-based runner and reporter
* Jasmine spec syntax and principles
* Assertion basics
* jQuery basics

[View this commit](https://github.com/mattwynne/js-testing-training/commit/01a1808f1260ee70ad268b90eb400a5a080777b3)

## Refactor: replace Error assertions with jasmine ones


[View this commit](https://github.com/mattwynne/js-testing-training/commit/8312da2414282377a05f29b1c243b44bc9cdbb1a)

## Refactor: Introduce jQuery into the game


[View this commit](https://github.com/mattwynne/js-testing-training/commit/c811f5d4afe729ba8f541776c77669119fc662fd)

## Refactor: introduce jQuery into the spec


[View this commit](https://github.com/mattwynne/js-testing-training/commit/84cf54d9e5d7c1ab7b78ceb286d2aee0fb0c4847)

## Refactor: tidy js files away


[View this commit](https://github.com/mattwynne/js-testing-training/commit/1672fa9b410355c268b5fb537b5e8bdc49b3f778)

## Refactor: move app-related code into public/


[View this commit](https://github.com/mattwynne/js-testing-training/commit/cbe7ea8487a620c370347f4884a0b70b68e2af2d)

## Refactor: Rename javascript files for clarity


[View this commit](https://github.com/mattwynne/js-testing-training/commit/a563993c36b86b4b60dc3e69d5a4a49bf0987823)

## Refactor: Introduce MVC pattern

At this point, we have separated out the behaviour into the three
MVC responsibilities. We've introduced the concept of functions,
and the battleship.js file can be loaded from any page.

[View this commit](https://github.com/mattwynne/js-testing-training/commit/324a3f19275166e8f6c9b0b36f2d0d62b2a42e09)

## Add model spec (shootAt())

We've renamed the file acceptance-tests.js to tests.js to reflect
the fact that it contains both high level tests for the overall behaviour
of the app, and lower level unit tests.

[View this commit](https://github.com/mattwynne/js-testing-training/commit/77461f4a54e4c8b717d7e83ac78fbba275864563)

## Enhancement: Hitting and missing ships

Here we add the acceptance test for the new behaviour.

Notice we're changing the wording in the test to use more domain
specific language, talking about shooting, hitting and missing
instead of clicking. This reflects our growing understanding of the domain.

[View this commit](https://github.com/mattwynne/js-testing-training/commit/312ab6564e039cd696d5217f7fdaeec74c80fe93)

## Enhancement: Hitting and missing ships

Adding a unit test for missing a ship. This spec could be refactored,
but we'll tolerate the duplication for now.

[View this commit](https://github.com/mattwynne/js-testing-training/commit/c4e1c8d3edc7d373ce1369d66a79aba14fb4beac)

## Enhancement: Hitting and missing ships

Adding the implementation to make the tests pass.

[View this commit](https://github.com/mattwynne/js-testing-training/commit/b527ede7610a0287ecc3aba5efdf92fbdd1337e9)

## Enhancement: Make application Node.js/NPM-aware

We've added a NPM manifest file to declare our application properties.
This - among other things - will allow us to define package
dependencies for both the testing code and the application itself.

Most popular browser-based JavaScript libraries have their counterpart
in NPM (e.g. jasmine, jquery, etc.).

[View this commit](https://github.com/mattwynne/js-testing-training/commit/43a22c777eb4ab2949c5b6b1c65230228db4e527)

## Enhancement: Open test page from the command line

We've introduced a little Node.js script that automates the task of
opening a (default) web browser and loading the test page of our
application.

What we learned:

* How to require and use Node modules
* Spawn child processes with Node

[View this commit](https://github.com/mattwynne/js-testing-training/commit/926e3bb13b15ad5a2321d764bb36a3e48651fb89)

## Enhancement: Serve application and tests through HTTP

We added a simple Node.js-based HTTP server to expose the application
and its tests more easily. This is the first step towards having our
tests being run on the CLI.

What we learned:

* How to install Node modules through NPM
* How to write a simple web server in Node
* Events (emitter)
* Callbacks which are everywhere in Node.js

[View this commit](https://github.com/mattwynne/js-testing-training/commit/b9ef9fbef9b8f00086d40ace0e7425a594de4f10)

## Enhancement: Run unit tests on the CLI

In order to improve the way we get feedback from our TDD setup, we
moved the unit tests to a dedicated spec/ folder to be executed by
Jasmine from within a Node.js process. This allows us to not rely
anymore on a web browser for our unit tests, effectively making our
TDD cycle faster.

We use jasmine-node, a Node.js wrapper for Jasmine that gives us a few
helpful features like autotest (`jasmine-node --autotest .`).

What we learned:

* jasmine-node, a Jasmine package and wrapper for Node.js
* How to export functions and variables in a Node.js module
* How to organise specs for Jasmine
* NPM "dev dependencies"

[View this commit](https://github.com/mattwynne/js-testing-training/commit/368e46288449a0b47844ae7e2c2ec590c0ebd439)

## Refactor: Encapsulate model into a constructor with a prototype

Previously, we had to require different components of our model within
its spec. It felt a bit clumsy and could potentially have grown into a
long list of requires. This was a smell that led us to encapsulate the
model in a nicely self-contained instantiatable constructor.

What we learned:

* Constructors in JavaScript
* Prototypes
* Instantiate objects in JavaScript
* The special `this` variable

[View this commit](https://github.com/mattwynne/js-testing-training/commit/dd0706486883b5de719401c14828212da6cf1357)

## Refactor: DRY model spec code

The model spec contained some repetition: some spies were created
repeatedly. We removed that repetition by using the beforeEach
so-called "hook" function provided by Jasmine.

More importantly, we completely decoupled examples from each other by
forcing new blank instances of our model to be created within them.
This suppresses all risks of cascading failing tests.

What we learned:
* Hooks in Jasmine
* "DRY" principle (and how to not abuse it in tests)
* "Independant tests" principle: don't share state between tests

[View this commit](https://github.com/mattwynne/js-testing-training/commit/24aba31a02298a430faca1fb5c0fea815bd4ab83)

## Refactor: Turn view into instantiatable constructor

Similarly to what we did to the model, we turned the view into a self-
contained instantiatable object.

[View this commit](https://github.com/mattwynne/js-testing-training/commit/39629f4aa2f113e0be96f57f36bc544df7f0549a)

## Refactor: Turn controller into instantiatable constructor

The controller is the latest component we had to turn into an object.
The view and model instances are injected into the controller, making
all those objects highly decoupled.

What we learned:
* Injecting dependencies into constructors
* Accessing properties of an object instances from itself
* Injecting doubles to isolate an object during tests

[View this commit](https://github.com/mattwynne/js-testing-training/commit/b1337a2d6f5ec3a2ab44403c3c16fed2788f7eb9)

## Refactor: Move user action handling to view

The view is now responsible for catching user interactions with the UI
(i.e. clicks on cells). The controller - which is responsible for
orchestrating things between the view and the model - registers a
listener to the view. The listener is executed by the view to notify
the controller the player is shooting at a cell. The controllers then
tells the domain (via our model) to handle that event.

The controller (application layer) is now simply listening to some
events on the user interface (presentation) and delegating it to the
model (domain).

What we learned:
* Presentation, application and domain logic separation
* Registering a simple callback

[View this commit](https://github.com/mattwynne/js-testing-training/commit/25d7c7a280c9b2c721c59e6ab628b15966924316)

## Refactor: Decouple acceptance tests (work in progress)

Each test *should* be independant. Even acceptance tests. We expect
the system under test to be in a clean blank state when a test is
starting to reduce risks of flickering and to ensure the deterministic
nature of our tests.

In order to reach that situation, we start a new game before every
single end-to-end tests.

What we learned:
* All tests should be independent
* Tests start with a system in a clean (or very well-known) state

[View this commit](https://github.com/mattwynne/js-testing-training/commit/cc4fbedb9257e11728fe1441034c259902b13b99)

## Problem: Dual-state cell in the grid during tests

When hitting, the cell is marked as both a hit and a miss. Try to
understand why and fix it if you can!

[View this commit](https://github.com/mattwynne/js-testing-training/commit/6bbecdaf7f54cd163feaf9babc77451eecc95047)

## Solution: Introduce templates

The problem we faced proviously lies within the DOM. Event though new
instances of all our objects (view, model, controller) were properly
created before each example, the DOM table and cells was not changed.

Previously attached event handlers were still being triggered. This
means our previous game, view and controller instances were reacting
to clicks on the cells, as well as the newests. In short, the same
TD elements were being tight to different instances of the game.

To avoid that incorrect behaviour, we've introduced the concept of
templates, which brings other interesting benefits to our application.
They will help organize the HTML into smaller reusable units that are
bound to views.

What we learned:
* How listening to events affect (unreferenced) object instances
* How careful we must be with listeners
* The concept of view templates and how to define/use them

[View this commit](https://github.com/mattwynne/js-testing-training/commit/0f1eb797ff43da14b6489c8d1eb720a05980cad8)

## Enhancement: Introduce Linting

We love clean code. To help us write the cleanest and finest
JavaScript, we've introduced Linting with the help of the JSHint
library.

See the [JSHint documentation](http://www.jshint.com/docs/) for
more information.

What we learned:
* Linting
* JSHint, how to configure it

[View this commit](https://github.com/mattwynne/js-testing-training/commit/1caaf099fa37f16823b0f67cedc343cca37fe4cf)

## Refactor: Fix code following JSHint's report

JSHint told us to fix a few bits in our code. Check.

[View this commit](https://github.com/mattwynne/js-testing-training/commit/3e0ebf4e4e9254f45544a5ff2ddf276584c4c2fe)

## Enhancement: Add build configuration

In order to simplify the way the whole application quality can be
measured at any moments and on any systems (e.g. continuous
integration servers), we've created a basic *build configuration* that
can be invoked through NPM with `npm test`.

What we learned:
* Concept of *builds*
* Configure build script in NPM

[View this commit](https://github.com/mattwynne/js-testing-training/commit/3bdbdb09ec56bb1ca73b705516f679934575716b)

## Update README from commit history

Generated using the following command:

`git log --format="## %s%n%n%b%n[View this commit](https://github.com/mattwynne/js-testing-training/commit/%H)%n" --reverse > README.md`
