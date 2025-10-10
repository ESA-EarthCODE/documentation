---
order: 6
---

# Access

Resource discovery and access are built on a common set of open APIs (see figure below) while remaining adaptable to different platform implementations.

![Resource Discovery & Access](/img/integration/data_access_ecstandards.png)

Catalog search uses the STAC API to perform spatial, temporal and attribute‑based queries against collections and items. Feature‑level retrieval is provided by OGC API – Features (or WFS), and multi‑dimensional data can be accessed via OGC WCS. Cloud‑optimized assets (COG, Zarr) are available for direct download, and visualization layers are exposed through OGC WMS and WMTS. 

### Product Hosting

Data products can be hosted on the ESA Project Results Repository (PRR) or an external repository. Each product must be described using STAC metadata, with stable asset links and appropriate media types for clients to resolve.

For details on the process of storing data, refer to the [Publish](./Publish.md) page.

### Accessing Data from the ESA Projects Results Repository

To see examples of accessing EarthCODE assets from the PRR please see the [relevant tutorial pages](https://esa-earthcode.github.io/tutorials/prr-stac-download-example/).

**Platform Integration**
The Open Science Catalogue is accessible through open standard interfaces through which the Portal and Platforms integrate for discovery (mainly STAC API) and publishing - note that the integration for publishing currently happens directly via Github. Platforms can make requests to obtain items using their unique Experiment Id or unique Product Id.

![Open Science Interfaces](/img/integration/openscienceinterfaces.png)
