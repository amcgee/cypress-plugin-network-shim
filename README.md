# cypress-plugin-network-shim

![npm](https://img.shields.io/npm/v/cypress-plugin-network-shim.svg)
![travis build](https://img.shields.io/travis/amcgee/cypress-plugin-network-shim.svg)

This is a utility for Cypress.io end-to-end testing which enables recording snapshots of real backend traffic.

The generated snapshots can then be used to replay or "stub" the network on subsequent test runs, effectively mocking out the server to increase test repeatability and performance.

## Modes of operation

There are three modes of operation:

* **GENERATE** - record network requests and responses, generate fixtures for future stubbing
* **STUB** - Use exiting network fixtures to stub application network responses.
* **SKIP** - Operate end-to-end as if the network shim weren't in place.

## Usage

Your project must be using Cypress:

```sh
yarn install --dev cypress
yarn install --dev cypress-plugin-network-shim
```

In `cypress/support/index.js` initialize the Network Shim:

```js
import initNetworkShim from 'cypress-plugin-network-shim'

initNetworkShim();
// Cypress.NetworkShim should now be accessible from any Cypress support or test file
```

In a test file, i.e. `cypress/integration/test.spec.js`, add the following:

```js
before(() => {
  Cypress.NetworkShim.enable({
    specName: 'test',
  });
});
```

At this point, the network shim will be enabled whenever this test is run.

## Environment Variables

```sh
> export CYPRESS_NETWORK_SHIM_HOST_API=https://api.example.com
> export CYPRESS_NETWORK_SHIM_MODE=GENERATE
> cypress
```

OR
```sh
> cypress --env NETWORK_SHIM_HOST_API=https://api.example.com --env NETWORK_SHIM_MODE=GENERATE
```


## Configuration

To set default app-wide network shim configuration, pass a configuration object to `initNetworkShim` in `cypress/support/index.js`:

```js
import initNetworkShim from 'cypress-plugin-network-shim'

initNetworkShim({
  hosts: {
    'api': 'https://api.example.com'
  }
});
```
