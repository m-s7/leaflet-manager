# leahflet-manager

Helper library for managing leaflet markers, polygons, control and more.

# Installation
Using npm:

```bash
$ npm install axios
```

Using bower:

```bash
$ bower install axios
```

Using yarn:

```bash
$ yarn add axios
```

# Usage
```ts
import { createMapManager } from './leaflet-manager'
import { Map } from 'leaflet'

const manager = createMapManager(new Map('#map'))
```
