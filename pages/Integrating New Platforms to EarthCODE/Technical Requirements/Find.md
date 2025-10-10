---
order: 5
---

# Find

Discoverability in EarthCODE is provided by the Open Science Catalog, which exposes all published resources through a suite of open, standardized APIs for both human and machine access.

### Discovery and Access
Catalog search uses the STAC API to perform spatial, temporal and attribute‑based queries against collections and items. Feature‑level retrieval is provided by OGC API – Features (or WFS), and multi‑dimensional data can be accessed via OGC WCS. Visualization layers may be exposed through OGC WMS and WMTS.

![Resource Discovery & Access](/img/integration/data_access_ecstandards.png)

#### Core Discovery via STAC API

The primary programmatic interface for searching the catalog is the **STAC API**. This is the main endpoint for machine-to-machine queries. It enables complex spatial, temporal, and attribute-based queries to find relevant data products and experiments. The effectiveness of these searches relies on the rich, standardized metadata described in the [Metadata Definitions](./Metadata-Definitions.md) page.
