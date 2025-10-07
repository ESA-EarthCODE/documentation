---
order: 1
---
# For Products
# FAIR Data Best Practices EarthCODE

<!-- What it means to be fair with the sow in reference -->

The final data outputs of your research in EarthCODE are referred to as **Products** (i.e. data products). A product in EarthCODE typically includes:
- A dataset representing the measured or derived values of one or more environmental or geoscience variables, that is, your research.
- Documentation that describe the methodology or related publications.
- Rich STAC Metadata, including EO satellite mission(s), project affiliation, and classification tags.

Each product is described using **STAC (SpatioTemporal Asset Catalog) metadata**, specifically through a `Collection` that captures key attributes like the spatial and temporal extent, scientific context, provenance, and more. To ensure FAIRness, the catalog uses a shared dictionary and metadata standard. This structure enables users to explore products across diverse sources by theme, variable, and mission.

The data itself is typically uploaded and stored on the ESA Project Results Repository (PRR), or alternatively on external long-term storage repositories. The PRR is ESA’s dedicated long-term storage service for project results. For detailed instructions about the PRR, refer to the [**ESA Project Results Repository (PRR) section**](../../Technical%20Documentation/ESA%20Project%20Results%20Repository/index.md).


![Data Products](/img/terms/data-components.svg)

:::details Variables
- **Product**: A geoscience dataset that captures specific variables over a spatial and temporal extent. Products are distinguished by factors such as the processing method, validation status, and EO mission used.
- **Project**: The ESA-funded research project under which the product was generated.
- **Variables**: Scientific or environmental variables measured or estimated in the dataset.
- **Themes**: Top-level science topics from ESA’s strategic challenges (e.g. climate, biodiversity, atmosphere).
- **Keywords**: Hierarchical tags for product discovery, often derived from the variables and broader scientific terms.
- **EO Mission**: The satellite mission or sensor used to generate the data, referenced in the product’s metadata.
- **Documentation**: A link to related materials or publications explaining how the product was created.
- **Data link**: A pointer to the actual location of the dataset (e.g. PRR, institutional archive, or external repository).
:::

<!-- Together, these components ensure each product is clearly described and easy to find, enabling transparency, traceability, and reuse across the scientific community. -->



## FAIR Checklist
Use this checklist to prepare your Product for publication in EarthCODE.

<!-- (+ORCID) for contacts? -->
<ClientOnly>
  <Checklist
    title="FAIR Product Preparation"
    :items="[
      'Checkout an example product to see what you need to produce, e.g. [EarthCODE FAIR Product Example](./Data.md#earthcode-fair-product-example)',
      'Explore tools from [EarthCODE Integrated Platforms](../../../Technical%20Documentation/Platforms/index.md) that might help you with publishing your Product',
      'Prepare information about your product, including keywords, title, website, spatial and temporal extens, abstract (≤300 words), contacts', 
      'Prepare links to relevant Paper, Handbook and/or relevant Documentation',
      '[Prepare your data for publication](./Data#interoperability); ideally use cloud‑native formats. Add Set CRS, nodata, units; tune tiles/chunks and attach metadata to your data as appropriate - following the [Best Practice guide for data](../../Code%20Data%20and%20Workflow%20Quality.md)',
      'Choose a [license for your data](./Data#open-data-licensing)',
      'Plan for long term storage of your data - either on the [ESA PRR (default) or an external repository](./Data.md#storage-repositories); if you are using the ESA PRR, prepare your data following the [PRR upload guide and examples](../../Technical%20Documentation/ESA%20Project%20Results%20Repository%20/Uploading%20To%20PRR)',
      'Check if your project [already exists in the OSC](https://opensciencedata.esa.int/projects/catalog); if not, prepare the project information about the status, name, description, website(s), consortium, start/end dates, technical officer & email, themes and create it as described in [Adding a New Project](https://esa-earthcode.github.io/tutorials/osc-pr-manual/#id-2-1-add-new-project)',
      'Select the geophysical variable(s) describing your dataset from the OSC [Variables](https://opensciencedata.esa.int/variables/catalog) and [CF name & units](./Data#choosing-the-right-variable-name)',
      'Select the correct OSC [Themes](https://opensciencedata.esa.int/themes/catalog) and [Missions](https://opensciencedata.esa.int/eo-missions/catalog)',
      'Consider if you want a [DOI from EarthCODE](./Data#doi-assignment) or if you would like to bring your own DOI',
      'Read the [Publishing Guide](../../../Technical%20Documentation/Open%20Science%20Catalog/Contributing%20to%20the%20Open%20Science%20Catalog.md) and checkout [example for publishing to the Open Science Catalog](https://esa-earthcode.github.io/tutorials/index-2/)',
      'Post on the [EarthCODE forum](https://discourse-earthcode.eox.at/latest) about the new data product! '
    ]"
    storage-key="earthcode-product"
  />
</ClientOnly>

<!--       'Write a short script (e.g. jupyter notebook) that explains how to load and use the dataset', -->
<!-- 

Ensure the workflow runs (include environment file or list of dependencies). 
If the dataset is large, verify the workflow works on a sample. 
Re-run if possible, to confirm reproducibility. 


" -->



## FAIR EarthCODE Products Standards

As discussed in [**FAIR and Open Science Best Practices**](./index), standards need to specified in detail to describe what constitutes "FAIR" for each community. EarthCODE uses commonly adopted standards for EO and Earth Sciences. For Products, we define them as follows:

<table style="width:100%; table-layout:fixed; border-collapse:collapse;">
  <colgroup>
    <col style="width:50%">
    <col style="width:50%">
  </colgroup>

  <thead>
    <tr>
      <th style="text-align:left; padding:10px; border:1px solid #ddd;">Findable (F)</th>
      <th style="text-align:left; padding:10px; border:1px solid #ddd;">Accessible (A)</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="vertical-align:top; padding:10px; border:1px solid #eee;">
        <p><a href="https://open.spotify.com/episode/1k4FydzYW1Mx7t9vQN9KOz">F1</a> — Use globally unique, persistent IDs (DOIs) for datasets. Example:
          <a href="https://doi.org/10.57780/s3d-83ad619">10.57780/s3d-83ad619</a>. These may be assigned automatically from EarthCODE or brought by the user.
        </p>
        <p><a href="https://open.spotify.com/episode/2mEUUbAiEQYhMUZwEqgoTN">F2</a> — Metadata follows the
          <a href="https://stacspec.org/en/about/stac-spec/">STAC specification.</a>, richly described using the
          <a href="https://github.com/stac-extensions/osc">OSC extension</a>. Example:
          <a href="https://doi.org/10.57780/s3d-83ad619">EarthCODE OSC STAC Item</a>.
        </p>
        <p><a href="https://open.spotify.com/episode/0WeoKjy8sUN6acOf4vxYyG">F3</a> — Metadata explicitly includes dataset identifiers under a via link titled `Access`. Example: 
          <a href="https://doi.org/10.57780/s3d-83ad619">STAC <code>links.Access</code></a>.
        </p>
        <p><a href="https://open.spotify.com/episode/2A1Zn6tOc3g8D7KZHZRygf">F4</a> — Metadata are indexed and searchable in the:
          <a href="https://opensciencedata.esa.int">ESA Open Science Catalog</a>.
        </p>
      </td>
      <td style="vertical-align:top; padding:10px; border:1px solid #eee;">
        <p><a href="https://open.spotify.com/episode/4kIC0yDgzADCZnxQTEl168">A1</a> — Metadata are accessible over HTTPS via <a href="https://github.com/radiantearth/stac-api-spec">STAC API</a>, OGC CSW (<a href="https://www.ogc.org/standards/cat/">2.0.2</a>/<a href="https://www.ogc.org/standards/cat/">3.0.0</a>), <a href="https://github.com/dewitt/opensearch">OpenSearch</a>, <a href="https://www.openarchives.org/pmh/">OAI-PMH</a>, or <a href="https://www.loc.gov/standards/sru/">SRU</a>.</p>
        <p><a href="https://open.spotify.com/episode/4cokyE6JL3KFJT5WykJNbE">A1.1</a> — Protocols are open, free, and universally implementable.</p>
        <p><a href="https://open.spotify.com/episode/0B9NKsy9iSf2g39bV9sKvd">A1.2</a> — The protocols allow for authentication and authorization (e.g., OpenID Connect) where needed.</p>
        <p><a href="https://open.spotify.com/episode/1fYL1SNAmott55NxPtYYKd">A2</a> — Metadata are accessible even if data are delete, as an EarthCODE policy.</p>
      </td>
    </tr>
    <tr>
      <td style="vertical-align:top; padding:10px; border:1px solid #eee;">
        <strong>Interoperable (I)</strong>
        <p><a href="https://open.spotify.com/episode/2nh22FG9i1zy7nbaRpPPWh">I1</a> — Use of formal, accessible representation languages - EarthCODE uses JSON in STAC.</p>
        <p><a href="https://open.spotify.com/episode/2ZOWq5ZHaD8y9xEAjoQk1i">I2</a> — EarthCODE adopts controlled FAIR vocabularies for meta(data) - with variables defined in the <a href="https://opensciencedata.esa.int/variables/catalog">variables catalog</a> as the canonical hierarchy, which aligns terms and links to <a href="https://cfconventions.org/">CF Standard Names</a>, <a href="https://gcmd.earthdata.nasa.gov/KeywordViewer/"> GCMD Keywords</a>, and others - encoded via the STAC <a href="https://github.com/stac-extensions/osc">OSC extension</a>.</p>
        <p><a href="https://open.spotify.com/episode/5RLTk8HkOB4iotKVKJj3SL">I3</a> — EarthCODE items add qualified links to related  projects, experiments that created the data, documentation, relevant themes and others via the STAC <a href="https://github.com/stac-extensions/osc">OSC extension</a> and <a href="https://opensciencedata.esa.int/products/worldcereal-crop-extent-belgium/collection"> related datasets</a> via the <a href="https://github.com/stac-extensions/processing">STAC processing extension</a>.</p> 
        <!-- do we take this approach officially https://github.com/radiantearth/stac-spec/issues/179 
        questionable use of documentation link
        https://docs.ogc.org/per/24-036.html
        -->
      </td>
      <td style="vertical-align:top; padding:10px; border:1px solid #eee;">
        <strong>Reusable (R)</strong>
        <p><a href="https://open.spotify.com/episode/4nVoYz4cpPjjoAzKOQFw2D">R1</a> — Provide rich, domain-appropriate descriptions about <a href="https://opensciencedata.esa.int/variables/catalog">variables modelled</a>, <a href="https://opensciencedata.esa.int/themes/catalog">themes described</a>, spatial and temporal extent, and <a href="https://opensciencedata.esa.int/eo-missions/catalog">related missions and instrumentation</a></p>
        <p><a href="https://open.spotify.com/episode/4jSIyFn2vxlD72meNTZ60i">R1.1</a> — EarthCODE products are published with clear, standardized licenses (for example, <a href="https://creativecommons.org/licenses/by/4.0/">CC BY 4.0</a>)</p>
        <p><a href="https://open.spotify.com/episode/49kCkqLbe140FY7aCaYdJF">R1.2</a> — Record provenance of processing <a href="https://opensciencedata.esa.int/products/worldcereal-crop-extent-belgium/collection">via workflow and experiments links</a> and via STAC/OGC API - Records links </p>
        <p><a href="https://open.spotify.com/episode/1rMIfin2bTyRDdBOHZa2PD">R1.3</a> — EarthCODE aligns with community standards for Earth Science and EO, adopts <a href="https://github.com/radiantearth/stac-spec">STAC</a>, prefers cloud-native formats (e.g., <a href="https://zarr.dev/">Zarr</a>, <a href="https://www.cogeo.org/">COG</a>, <a href="https://geoparquet.org/">GeoParquet</a>), and  widely used Earth-science formats (e.g., <a href="https://www.unidata.ucar.edu/software/netcdf/">netCDF</a>).</p>
      </td>
    </tr>
  </tbody>
</table>

<!-- R1.2 and via the <a href="https://github.com/stac-extensions/processing">STAC processing extension</a>, e.g. <a href="https://opensciencedata.esa.int/products/worldcereal-crop-extent-belgium/collection"><code>derived_from</code></a>
 -->
### EarthCODE FAIR Product Example
For example, the [*Sentinel-3 AMPLI Ice Sheet Elevation*](https://opensciencedata.esa.int/products/sentinel3-ampli-ice-sheet-elevation/collection) product is published as a STAC Collection (F2, I1) enriched with EarthCODE taxonomy elements including Themes, Variables, and EO Missions (R1). Metadata contains a persistent DOI (`https://doi.org/10.57780/s3d-83ad619`) (F1) assigned by EarthCODE and explicit `via` links for direct dataset access and supporting documentation (F3) under "Access" and "Documentation". The actual data is stored on the ESA Project Results Repository (PRR), ensuring long-term preservation and stable access.

The collection is indexed in the ESA Open Science Catalog, making it discoverable through standard search and API queries (F4, A1, A1.1). Links to the generating project, theme, and mission provide qualified relationships to related resources (I3), and variables are aligned with the OSC Variables Catalog and CF Standard Names for semantic interoperability (I2). The licence is clearly stated as CC-BY-4.0 (R1.1) and the dataset is in a well documented NetCDF format that adheres to widely used community standards (R1.3), ensuring that it is fully Findable, Accessible, Interoperable, and Reusable within the Earth observation community.

<!-- provenance is recorded through project references and documentation - the product is linked to the code that produced it via a workflow link (R1.2) and derived_from shows us which input data was used to create it -->

<!-- For example [WorldCereal Crop Extent - Belgium](https://opensciencedata.esa.int/products/worldcereal-crop-extent-belgium/collection) is a data product, published as a STAC Collection (F2, I1) enriched with EarthCODE taxonomy elements (Themes, Variables, EO Missions) (I2). Metadata explicitly includes standardized references to the dataset and its components (F3), data are indexed in the ESA Project Results Repository (F4). Qualified references to related datasets and workflows are included (I3), and standardized EO formats (COG/TIFF) ensure scalable access (A1.1). Licensing and provenance are recorded using open, standardized practices (R1.1, R1.2), linking to Sentinel data used for the analysis. All metadata aligns with community standards widely adopted in Earth Observation (R1.3) such as STAC. In EarthCODDE the results from the execution of the experiment are described as a data product, this is reflected with a link relationship. -->


::: details STAC Example
```json
{
    "type": "Collection",
    "id": "sentinel3-ampli-ice-sheet-elevation",
    "stac_version": "1.0.0",
    "description": "Ice sheet elevation estimated along the Sentinel-3 satellite track, as retrieved with the Altimeter data Modelling and Processing for Land Ice (AMPLI). The products cover Antarctica and Greenland.",
    "links": [
      {
        "rel": "root",
        "href": "../../catalog.json",
        "type": "application/json",
        "title": "Open Science Catalog"
      },
      {
        "rel": "via",
        "href": "https://eoresults.esa.int/browser/#/external/eoresults.esa.int/stac/collections/sentinel3-ampli-ice-sheet-elevation",
        "title": "Access"
      },
      {
        "rel": "via",
        "href": "https://eoresults.esa.int/d/sentinel3-ampli-ice-sheet-elevation/2025/05/07/sentinel-3-ampli-user-handbook/S3_AMPLI_User_Handbook.pdf",
        "title": "Documentation"
      },
      {
        "rel": "child",
        "href": "https://eoresults.esa.int/stac/collections/sentinel3-ampli-ice-sheet-elevation",
        "type": "application/json",
        "title": "Sentinel-3 AMPLI Ice Sheet Elevation"
      },
      {
        "rel": "parent",
        "href": "../catalog.json",
        "type": "application/json",
        "title": "Products"
      },
      {
        "rel": "related",
        "href": "../../projects/sral-processing-landice/collection.json",
        "type": "application/json",
        "title": "Project: SRAL Processing over Land Ice"
      },
      {
        "rel": "related",
        "href": "../../themes/cryosphere/catalog.json",
        "type": "application/json",
        "title": "Theme: Cryosphere"
      },
      {
        "rel": "related",
        "href": "../../variables/ice-sheet-topography/catalog.json",
        "type": "application/json",
        "title": "Variable: Ice sheet topography"
      },
      {
        "rel": "related",
        "href": "../../eo-missions/sentinel-3/catalog.json",
        "type": "application/json",
        "title": "EO Mission: Sentinel-3"
      },
      {
        "rel": "self",
        "href": "https://esa-earthcode.github.io/open-science-catalog-metadata/products/sentinel3-ampli-ice-sheet-elevation/collection.json",
        "type": "application/json"
      }
    ],
    "stac_extensions": [
      "https://stac-extensions.github.io/osc/v1.0.0/schema.json",
      "https://stac-extensions.github.io/themes/v1.0.0/schema.json",
      "https://stac-extensions.github.io/cf/v0.2.0/schema.json"
    ],
    "osc:project": "sral-processing-landice",
    "osc:status": "completed",
    "osc:region": "Antarctica and Greenland",
    "osc:type": "product",
    "created": "2025-04-04T00:00:00Z",
    "version": "1",
    "sci:doi": "https://doi.org/10.57780/s3d-83ad619",
    "cf:parameter": [
      {
        "name": "ice_sheet_topography"
      }
    ],
    "themes": [
      {
        "scheme": "https://github.com/stac-extensions/osc#theme",
        "concepts": [
          {
            "id": "cryosphere"
          }
        ]
      }
    ],
    "osc:variables": [
      "ice-sheet-topography"
    ],
    "osc:missions": [
        "sentinel-3"
    ],
    "updated": "2025-05-07T20:32:22.960110Z",
    "title": "Sentinel-3 AMPLI Ice Sheet Elevation",
    "extent": {
      "spatial": {
        "bbox": [
          [
            -180.0,
            -90.0,
            180.0,
            90.0
          ]
        ]
      },
      "temporal": {
        "interval": [
          [
            "2016-06-01T00:00:00Z",
            "2024-05-09T23:59:59Z"
          ]
        ]
      }
    },
    "license": "CC-BY-4.0",
    "keywords": [
        "Topography",
        "Glaciers/Ice Sheets",
        "Glacier Elevation/Ice Sheet Elevation",
        "Cryospheric Indicators",
        "Glacial Measurements"
    ]
  }
```
:::


<!-- 
add in when we've got a good example
## Reusable From Day 1

Add a code snippet as a workflow to your product data to briefly show how to load, explore and use the data
-->


## Open Data & Licensing

**Open data** is data anyone can access, use, modify, and share — including commercially — provided it’s published in a common, machine-readable format **with an open license**. Restrictions will typically reduce the reuse value and potential for innovation. You would need to consider the following when making your data open:

- **License is mandatory.** Without an explicit license, reuse rights are ambiguous.
- **Costs:** Use is free; access may carry minimal delivery/hosting fees. If you use EarthCODE's PRR, ESA will host and distirube your data (free of charge) and store it for the long term.
- **Usability:** Openness is about rights; still provide standard formats and rich metadata to maximize reuse.  
- **FAIR ≠ Open:** FAIR can include controlled access — just document access conditions transparently.

A licence is the **permission slip for reuse**. In Open Science, *no licence means no clear rights*—even publicly available materials can’t be reused without explicit permission. For scientific works, the Creative Commons licences are widely used and most well-known.

:::warning Upstream constraints matter
Always **check upstream licences before you reuse**. If you used proprietary inputs or “share-alike” sources, you **must** honour their terms.
:::

EarthCODE published data products are **typically licensed under Creative Commons (CC) licences**, the most common are:


| Licence | Description & Typical Use in EarthCODE | Notes |
|---|---|---|
| **CC BY 4.0** | **Default** for most EarthCODE datasets, documentation, and metadata. Allows any reuse (including commercial) with attribution to the creator. | Simple, funder-friendly, and interoperable. Encourages reuse while ensuring credit. |
| **CC0 1.0** | Public-domain dedication — no restrictions on reuse. Often used for foundational or reference datasets where attribution is not essential. | Maximises reuse; some funders require attribution, in which case CC BY 4.0 is preferred. |
| **ODC-By 1.0** | Attribution licence for **databases** where sui generis database rights apply (especially in EU/UK contexts). | Similar to CC BY but tailored for database rights; use when dataset qualifies as a protected database. |
| **ODbL 1.0** | **Share-alike** database licence ensuring that derivatives of the database remain open under the same terms. | Used in collaborative database projects (e.g., OpenStreetMap). Can complicate integration with differently licensed data. |
| **PDDL 1.0** | Public-domain dedication for databases, equivalent to CC0 but for database rights. | Best for maximising reuse of databases; attribution is not required. |
| **CC BY-SA** | Reuse with attribution; adaptations must be shared under the same terms (*Share Alike*). Often used for collaborative community datasets. | Ensures openness of derivatives but can complicate integration with datasets under different licences. |
| **CC BY-NC** | Reuse with attribution; non-commercial use only (*Non-Commercial*). Rarely used in EarthCODE. | **Not Open Data** under most definitions; restricts commercial reuse and some scientific applications. |
| **CC BY-ND** | Reuse with attribution; no derivatives (*No Derivatives*). Sometimes used for fixed-format outputs (e.g., final PDFs). | **Not Open Data**; blocks translations, subsets, and corrections. |


:::tip **In practice:** 
for EarthCODE **datasets**, prefer **CC BY 4.0** (default) or **CC0 1.0** if maximal reuse is desired. Avoid **NC** and **ND** clauses on datasets as they significantly limit reuse.
:::

In STAC you can declare the license of the data by including a short code and a resolvable URL:

```json
{
  "license": "CC-BY-4.0",
  "links": [
    { "rel": "license", "href": "https://creativecommons.org/licenses/by/4.0/" }
  ]
}
```


## DOI Assignment
:::warning In Development
:::

A **Digital Object Identifier (DO1I)** provides a **persistent, citable link** to your EarthCODE Product, ensuring it can be reliably referenced in publications, metadata catalogs, and other research outputs. DOIs are a core part of making data **Findable** under the FAIR principles.

EarthCODE can mint and assign a DOI to your Product as part of the publishing process for free. This DOI will be recorded in your **STAC Collection** or **STAC Item** metadata and made visible in the ESA Open Science Catalog. You simply need to **Request a DOI** in the pull request description or by email to: [earth-code@esa.int](mailto:earth-code@esa.int). When your product is published, the DOI will be minted and added to your metadata automatically.


If your dataset already has a DOI (e.g., from another repository), you can include it in your STAC metadata using the Scientific Citation Extension:

```json
"sci:doi": "https://doi.org/10.57780/s3d-83ad619"
```
*See full example: [https://doi.org/10.57780/s3d-83ad619](https://doi.org/10.57780/s3d-83ad619)*

This will preserve the original DOI and make it searchable in the EarthCODE ecosystem.


## Interoperability

EarthCODE prioritises **cloud-native geospatial formats** so data can be streamed over HTTP/object storage. Wherever possible, publish **[Data Cubes](https://www.youtube.com/watch?v=I6anJ5xaM8E)** (n-D arrays with explicit chunking) rather than directories of files. If you already have many NetCDF/GeoTIFFs, **consolidate** to a single cube (e.g., **Zarr**) or provide **kerchunk** references to avoid file sprawl. Always set CRS, nodata, units, and variable semantics. See the [Code and Data Quality guide](../Code%20Data%20and%20Workflow%20Quality.md) for more details.

| Data type | Preferred format(s) & notes |
|---|---|
| Raster scenes & mosaics | **COG (GeoTIFF)** with internal tiling and overviews for fast partial reads; lossless compression by default. |
| n-D data cubes (time/lat/lon/level) | **Zarr** with sensible chunking and consolidated metadata; if legacy **NetCDF4/HDF5**, add **kerchunk** references. |
| Vector analytics | **GeoParquet** (columnar, scalable); include a dataset `_metadata` file for multi-shard collections. |
| Vector delivery/streaming | **FlatGeobuf** with spatial index; suitable for HTTP streaming and subsetting. |
| Point clouds | **COPC** for efficient partial reads. |
| Web visualisation tiles | **PMTiles** (single archive, serverless); for visual delivery, not analysis. |
| Tabular in-situ/model outputs | **Parquet** (preferred) or **CSV** for small datasets; define schema, units, and time zones. |
| Documentation | **PDF/Markdown** linked from STAC `describedby`; keep methods and citation text versioned. |

**Minimum best practices:** avoid thousands of small files; align chunk/tiling to dominant access patterns.


## Choosing the Right Variable Name

Always first search for and re-use existing variables from the [ESA Open Science Catalog Variables list](https://opensciencedata.esa.int/variables/catalog) before creating a new one. This ensures semantic consistency across datasets and improves discoverability in the EarthCODE ecosystem.  

If no existing variable fits your data, propose a new one via the [OSC GitHub repository](https://github.com/ESAOpenScienceCatalogue) by opening a pull request.

Each Product should also be mapped to an appropriate **CF Standard Name** to ensure interoperability. Use the [CF Standard Name Table search tool](https://cfconventions.org/Data/cf-standard-names/current/build/cf-standard-name-table.html) to identify the correct term.

Example in STAC metadata:

```json
"cf:parameter": "sea_surface_temperature"
```

## Storage Repositories

EarthCODE Products must be stored in **trusted, long-term repositories** that provide stable, resolvable links to the actual data. The **primary** repository is the [ESA Project Results Repository (PRR)](../../Technical%20Documentation/ESA%20Project%20Results%20Repository/index.md), which ensures curation, preservation, and integration with the ESA Open Science Catalog. 

You can also alternatively store your data on **accepted repository domains**, which include:
- **PRR** (preferred)
- **Zenodo**
- **Figshare**
- Other recognised, domain-specific repositories that meet open data requirements

Datasets must be accessible, and all provided links must be functional. For open data, links must allow programmatic access without registration or authentication tokens. If your dataset is proprietary or access-controlled, document the restrictions in metadata.

**Accepted link types:**
1. **Metadata records** — links to repository landing pages (e.g., Zenodo, PRR, Figshare)  
2. **Direct file links** — e.g., NetCDF, GeoTIFF, Zarr store root  
3. **Direct service links** — e.g., S3 object storage paths, HTTPS download URLs, FTP servers  

:::warning Linking rules
- **DO NOT** link only to a website where the user must manually navigate to download the data.  
- **DO** link directly to the dataset or service endpoint so it can be retrieved programmatically.  
:::

Providing direct, machine-accessible links ensures that OSC Items are **FAIR** and that open data can be indexed, validated, and reused automatically.


<!-- ## Formatting Results

What should I actually store 
e.g. stac items
-->

