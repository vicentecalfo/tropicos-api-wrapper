# @vicentecalfo/tropicos-api-wrapper
This wrapper allows you to call methods for gathering data from the Tropicos web service (API).

What is Tropicos? Click [here](https://www.tropicos.org/home).

## Installation
Install the package with:

`npm install @vicentecalfo/tropicos-api-wrapper --save`

## Usage
The package needs to be configured with your API key, which is available in the Tropicos web service [help page](http://services.tropicos.org/help?requestkey). This key must be used in all service calls.

All [methods](#avaiable-methods) return an [observable](#using-observable), however you can use [promises](#using-promises) as well.

Initialize with config object.
Property | Default | Required | Description
---|---|---|---
apiKey | `null` | Yes | Long string of characters and numbers, required to authorize access to the service. [Request API Key](http://services.tropicos.org/help?requestkey).
format | `json` | No | Choose how you want your output to be formatted (possible values: `json` and `xml`).

```javascript

import { TropicosApi } from '@vicentecalfo/tropicos-api-wrapper';

const tropicosApi = new TropicosApi({
    apiKey: 'XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX',
    format: 'json' // output format (optional)
});

// Example:
// Method to access search endpoint
// http://services.tropicos.org/help?method=SearchNameXml
tropicosApi
    .search({
        name: 'poa annua',
        type: 'wildcard'
    })
    .subscribe(
        (data) => console.log(data.body)
        (error) => console.log(error)
    );

```

<a id="avaiable-methods"></a>
## Available Methods

The name of the methods follows the paths of each endpoint.

All methods can receive optional request parameters (`reqOptions`). You can check all the options [here](https://github.com/request/request#requestoptions-callback).

Method | Endpoint | Parameters | Description | Tropicos Documentation
---|---|---|---|---
`search(qs,reqOptions)` | `Name/Search` |  [View json](#search-params) | To search for a Name | [View](http://services.tropicos.org/help?method=SearchNameXml)
`summary(id,reqOptions)` | `Name/{id}` | id (number \| required) | Return summary data for a Name with a given id. | [View](http://services.tropicos.org/help?method=GetNameXml)
`synonyms(id,reqOptions)`| `Name/{id}Synonyms` | id (number \| required) | Return all Synonyms for a Name with a given id. | [View](http://services.tropicos.org/help?method=GetNameSynonymsXml)
`acceptedNames(id, reqOptions)` | `Name/{id}AcceptedNames` | id (number \| required) | Return all Accepted Names for a Name with a given id. | [View](http://services.tropicos.org/help?method=GetNameAcceptedNamesXml)
`distributions(id, reqOptions)` | `Name/{id}Distributions` | id (number \| required) | Return all Distribution records for a Name with a given id. | [View](http://services.tropicos.org/help?method=GetNameDistributionsXml)
`references(id, reqOptions)` | `Name/{id}References` | id (number \| required) | Return all Reference records for a Name with a given id. | [View](http://services.tropicos.org/help?method=GetNameReferencesXml)
`images(id, reqOptions)` | `Name/{id}Images` | id (number \| required) | Return all Image records for a Name with a given id. | [View](http://services.tropicos.org/help?method=GetNameImagesXml)
`chromosomeCounts(id, reqOptions)` | `Name/{id}ChromosomeCounts` | id (number \| required) | Return all chromosome count records for a Name with a given id. | [View](http://services.tropicos.org/help?method=GetNameChromosomeCountsXml)
`higherTaxa(id, reqOptions)` | `Name/{id}HigherTaxa` | id (number \| required) | Return all higher taxa for a Name with a given id. | [View](http://services.tropicos.org/help?method=GetNameHigherTaxaXml)
`specimens(id, reqOptions)` | `Name/{id}Specimens` | id (number \| required) | Return all specimens for a Name with a given id. | [View](http://services.tropicos.org/help?method=GetNameSpecimensXml)
`listNames(qs, reqOptions)` | `Name/List` | [View json](#list-names-params) | To return Names. | [View](http://services.tropicos.org/help?method=ListNamesXml)

**Search parameters**
<a id="search-params"></a>
```typescript
// Search parameters
{
    nameid?: string;
    name?: string;
    commonname?: string;
    family?: string;
    orderby?: number;
    sortorder?: string;
    pagesize?: number;
    startrow?: number;
    type?: "wildcard" | "exact"; // default wildcard
}
```

**List Names parameters**
<a id="list-names-params"></a>
```typescript
// List Names parameters
{
    startid: number;
    pagesize?: number;
}
```

### Sample

<a id="using-observable"></a>
#### GET References from a JSON REST API
```javascript

import { TropicosApi } from '@vicentecalfo/tropicos-api-wrapper';

const tropicosApi = new TropicosApi({
    apiKey: 'XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX',
    format: 'json'
});

// http://services.tropicos.org/help?method=GetNameReferencesXml
tropicosApi
	.references(
        25509881, // The Name Id (required)
        { json: true } // Automatically parses the JSON string in the response
    )
	.subscribe((data) => console.log(data.body), (error) => console.log(error));
```

<a id="#using-promises"></a>
#### Using Promises

```javascript

import { TropicosApi } from '@vicentecalfo/tropicos-api-wrapper';

const tropicosApi = new TropicosApi({
    apiKey: 'XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX',
    format: 'json'
});

// http://services.tropicos.org/help?method=SearchNameXml
tropicosApi
	.search({ name: 'poa annua' }, { json: true })
	.toPromise()
	.then((data) => console.log(data.body))
	.catch((error) => console.log(error));
```

## Documentation

Can't find what you need in the readme? Check the official Tropicos Web Service [documentation page](http://services.tropicos.org/).
