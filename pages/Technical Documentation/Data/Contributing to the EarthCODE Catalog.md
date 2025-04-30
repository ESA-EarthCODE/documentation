---
order: 1
---

# Publishing Science Results

The catalog functionalities described in the previous sections are granted to any user (registered/and non-registered users). Catalog exploration and content discovery and access to the products is fully open and transparent. In this section we will describe how to make new data accessible through the catalog and make them available for the broad scientific community.

## Who can contribute?

Contributions to the Open Science Data Catalogue are vital for advancing FAIR Open Science Principles across ESA-funded Earth Science activities.
We would like to specifically encourage contributions from:

- Principal Investigators of ESA EO (Earth Observation Programme) funded Projects,
- Researchers, Scientists, Data Owners working on ESA-funded EO Projects,
- Principal Investigators, Researchers and Scientists from ESA Science Cluster Projects,
- ESA Technical Officers leading ESA EO Projects
- ESA-ESRIN Science Hub Members (e.g. ESA post-doctoral Research Fellows, ESA Living Planet Fellowship, ESA Visiting Scientists)
- Wider EO Research and Science Community: contact the EarthCODE team at [earth-code@esa.int](mailto:earth-code@esa.int) for more details!

### You can enrich EarthCODE in several impactful ways:

- **Publish Research Products:** Add new content to the Open Science Data Catalogue.
- **Update content:** Keep the descriptions and metadata of products, projects, and more up-to-date.
- **Request removals:** Ensure the catalogue remains accurate by requesting the removal of outdated or incorrect entries.

To contribute, you only need to have an active GitHub account. If you don't have one yet, please [create an account](https://github.com/signup) to get started.

## How to Publish Results

To publish your scientific results to the Open Science Catalog, you must:

- Create valid **STAC** and/or **OGC API Record** objects (in JSON format).
- Submit a **Pull Request** to the [open-science-catalog-metadata-**staging**](https://github.com/ESA-EarthCODE/open-science-catalog-metadata-staging/tree/main) repository with your new entry.

::: details The Open Science Catalog
The [**Open Science Data Catalog**](https://opensciencedata.esa.int/) is a publicly accessible platform that enables anyone—whether or not they have a GitHub account—to **discover and access Earth Observation research**. It provides a transparent and structured way to explore the latest results from EO projects by organizing metadata in a consistent and harmonized format.

Built on the open-source **STAC Browser**, the catalog allows users to browse and explore interlinked elements such as **themes, variables, EO missions, projects, products, workflows, and experiments**, all described using **STAC-compliant JSON files**.
:::

### Preparing Your Research for Publication

To make your research outcomes accessible and discoverable by the broader scientific community, follow these steps:

1. **Prepare your Product Package (Research Experiment)**, by uploading **dataset files**, **code** and **documentation** to appropriate, accessible locations.

2. **Generate a Self-Contained STAC Catalog**

   - Use tools like [`stactools`](https://stactools.readthedocs.io/en/stable/), [`rio-stac`](https://github.com/developmentseed/rio-stac), or [`PySTAC`](https://pystac.readthedocs.io/en/stable/) to generate a STAC Catalog.
   - Host the resulting JSON files (Catalog + Items) in a **public GitHub repository** (or institutional equivalent).
     ::: warning Important
     Make sure the Catalog uses **relative paths** and points to remote asset URLs!
     :::

3. **Describe Your Research in the Open Science Catalog**
   - Create entries that describe your **dataset, workflow, and experiment**.
   - Link them to relevant **projects, variables, themes, and EO missions**.
   - Include a `related` link to your external STAC Catalog to ensure it is discoverable from the Open Science Catalog.

By following these steps, your research becomes part of a broader ecosystem of reusable, discoverable, and connected scientific outputs.

## Step 1: Make Your Data Accessible

To contribute to the Open Science Catalog, your research data must be openly accessible and persistent. Begin by preparing your **Research Experiments**, which includes:

- **Data files**, which will be added to the Item Catalog.
- **Workflow** (e.g., Jupyter Notebooks, Python scripts, CWL records)
- **Documentation** (e.g., links to peer-reviewed publications or public product descriptions)

All of these should be _accessible_, meaning they are stored on **remote, persistent storage** that allows discovery and access. Examples include:

- ESA’s Project Results Repository (PRR)
- S3-compatible object storage (e.g. ESA S3 Bucket)
- Zenodo, CEDA, Dataverse, or other persistent archives

If your data is already hosted on a reliable cloud storage provider you can use those links directly.

If your data is not yet in the cloud or its persistence is uncertain, we recommend uploading it to the official **ESA Project Results Repository (PRR)**. To do this:

1. Request a data provider account.
2. Then, request a PRR collection, which will be used in later steps to define your STAC Item Catalog.

::: details Requesting PRR Storage
At the moment, requests to store data on ESA PRR is done by the ESA PLES engineering team. If you need to request permanent storage, contact the team at [earth-code@esa.int](mailto:earth-code@esa.int)
:::

## Step 2: Creating and uploading a STAC Item Catalog

### Description

The purpose of the STAC Item Catalog is to collect metadata and references to your assets in a format that can be easily reused by other scientists and automated workflows, and displayed correctly in the Open Science Catalog. The STAC Items should be created for all assets in your dataset (single files), gathered in dedicated STAC Catalogs to become available to EarthCODE users.

The STAC structure helps organize and describe your data in a consistent and machine-readable way. Here’s how the hierarchy works:

1. **STAC Catalog**  
   A STAC Catalog is the top-level container that groups related data files (Items + Assets). It behaves much like a folder in a traditional file system and can include other catalogs or items to help organize your data logically.
2. **STAC Item**  
   A STAC Item represents a single observation (with a given spatial and temporal extent) and is defined using a GeoJSON-like structure enriched with additional metadata—such as spatial and temporal extent, projection information, geophysical variables, and more.  
   Each Item contains one or more **Assets**, which are direct links to the actual data files. Assets may also describe specific bands, file types, or related resources associated with the item.

**Example folder structure**

```
my-item-catalog
├── catalog.json
├── item_1
│   └── item_1.json
└── item_2
    └── item_2.json
```

::: details Example `catalog.json`

```json{15,20}
{
  "type": "Catalog",
  "id": "my-item-catalog-id",
  "stac_version": "1.1.0",
  "description": "Provide a meaningful description of the dataset here.",
  "links": [
    {
      "rel": "root",
      "href": "./catalog.json",
      "type": "application/json",
      "title": "Title of the Dataset"
    },
    {
      "rel": "item",
      "href": "./item_1/item_1.json", // relative link to the item.json describing a single file in the dataset
      "type": "application/geo+json"
    },
    {
      "rel": "item",
      "href": "./item_2/item_2.json", // relative link to the item.json describing a single file in the dataset
      "type": "application/geo+json"
    },
  ],
  "title": "Tile of the Dataset"
}
```

:::

::: details Example `item.json`

```json{60}
{
  "type": "Feature",
  "stac_version": "1.1.0",
  "stac_extensions": [
    "https://stac-extensions.github.io/eo/v1.1.0/schema.json"
  ],
  "id": "item_1",
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          -50.17968937855544,
          66.77834561360399
        ],
        [
          -47.9894188361956,
          66.83503196763441
        ],
        [
          -48.056356656894216,
          67.37093506267574
        ],
        [
          -50.295235368856346,
          67.31275872920898
        ],
        [
          -50.17968937855544,
          66.77834561360399
        ]
      ]
    ]
  },
  "bbox": [
    -50.295235368856346,
    66.77834561360399,
    -47.9894188361956,
    67.37093506267574
  ],
  "properties": {
    "datetime": "2025-03-18T09:47:57.377671Z"
  },
  "links": [
    {
      "rel": "root",
      "href": "../catalog.json",
      "type": "application/json",
      "title": "Title of the Dataset"
    },
    {
      "rel": "parent",
      "href": "../catalog.json",
      "type": "application/json",
      "title": "Title of the Dataset"
    }
  ],
  "assets": {
    "data": {
      "href": "https://EarthCODE/OSCAcssets/MY_PROJECT/MY_PRODUCT/item_1.tif", // link to remote asset
      "type": "image/tiff; application=geotiff",
      "eo:bands": [
        {
          "name": "b1",
          "description": "gray"
        }
      ],
      "roles": []
    }
  }
}
```

:::

### Creating the Item Catalog

One way to create an Item Catalog is to copy an existing catalog and edit it manually in a text editor to fit your data. If you're new to STAC and only have a few data assets, this approach can work, but it is prone to errors.

Manually editing STAC Items can be tedious, and extracting all the required metadata correctly can be challenging. For most Item Catalogs, we recommend using automated tools, for example:

- The [`stactools`](https://stactools.readthedocs.io/en/stable/cli.html#stac-create-item) CLI provides a simple command-line interface for generating STAC Items. With the [`stactools-datacube`](https://github.com/stactools-packages/datacube) extension even following the STAC datacube extension.
- A combination of [`PySTAC`](https://pystac.readthedocs.io/en/stable/) to create the Catalog and [`rio-stac`](https://github.com/developmentseed/rio-stac) for automatically generating valid STAC Items with all required metadata.

Typically, this workflow starts by defining individual STAC objects (a Catalog and its Items). Once created, these objects are linked together using STAC relationships.

In the final step, the Catalog is **saved and normalized** to a specified root directory. At this stage, you can choose to set the Catalog type to **"self-contained"**. When enabled, this ensures that all internal links are automatically resolved and adjusted to be relative, making the Catalog portable and independent of absolute file paths.

The process is straightforward, and we highly recommend checking out [this notebook](https://esa-earthcode.github.io/examples/creating-an-item-catalog).

::: warning IMPORTANT  
Regardless of how you create the catalog, it must be **self-contained**. This means:

- Internal links should use **relative paths** (e.g., `"../catalog.json"` instead of `"/Users/name/catalog/catalog.json"`).
- Data asset paths should point to **remote storage**, not local files on your system.
  :::

### Uploading the Item Catalog

The **Item Catalog must be hosted separately** from the Open Science Catalog, and like the data files, it should be **persistent and publicly accessible**.

Since the Item Catalog only contains metadata (JSON) files rather than actual datasets, a simple and effective solution is to store it in a public repository, such as **GitHub**. This approach is demonstrated in the [Creating an Item Catalog notebook](https://esa-earthcode.github.io/examples/creating-an-item-catalog).

Alternatively, if you have access to a **reliable cloud storage service**—such as the EarthCODE object storage bucket—you can host your Item Catalog there.

If you choose to use the ESA PRR the generated STAC Items have to be sent via `POST` requests to the [PRR Registration Gateway](https://eoresults.esa.int/reg-api/docs#/) for registration using the previously requested collection.

The only requirement is that **other users and the STAC browser must be able to find and read your repository!**

:::info  
In the next step where you will be uploading metadata to the Open Science Catalog, EarthCODE administrators will review your Item Catalog and assist you with any necessary adjustments.  
:::

## Step 3: Creating a Product entry in the Open Science Catalog

After preparing your data package in steps 1 and 2, it is finally time to add a product entry to the OSC.
This is done by adding another collection folder under `products` in the [`open-science-catalog-metadata-staging`](https://github.com/ESA-EarthCODE/open-science-catalog-metadata-staging) repository, which is a relatively simple process, especially if you are already familiar with Git.

The `collection.json` file you create should include some general metadata, and links to related objects:

- A link to your Item Collection
- Links to existing metadata collections, such as Variables, Missions, Projects and Themes (`)
- Other related links, such as documentation, DOI, websites, and more

See the graphic below for details about the required fields for OSC products.

![metadata-stac](https://github.com/EOEPCA/open-science-catalog-metadata/assets/120453810/71b8e8a7-9a86-491b-ae54-1fb4de9ccf32)

The red arrows indicate links between other objects in the OSC.

::: warning
If you can't find the appropriate Project, Themes, Variables or EO Mission to correctly describe your product, you must upload a new collection for these as well!
:::

### How to publish new product to the catalog?

By far the easiest approach to create a new product is to simply copy and paste an existing product, making the necessary modifications to fit your data. This does however require some knowledge of Git and GitHub.
The general approach is as follows:

1. Create a fork of the [`open-science-catalog-metadata-staging`](https://github.com/ESA-EarthCODE/open-science-catalog-metadata-staging) repository to your own GitHub profile
2. Manually create a new collection under `products` by copying an existing product
3. Make the required edits to fit your use-case
4. Remember to also edit the metadata collections to add a link to your new product (the linking goes both ways)
5. Save and commit the changes to your forked repository
6. Open a pull request in the official [`open-science-catalog-metadata-staging`](https://github.com/ESA-EarthCODE/open-science-catalog-metadata-staging) repository requesting to merge your fork

::: tip
If you are not entirely comfortable with Git, or are unsure about parts of the upload process, there are tools under development to automate this entire process!

Check out the GUI-based [Git Clerk](https://dashboard.earthcode-staging.earthcode.eox.at/osc-editor) or CLI-based [deep-code](https://github.com/deepesdl/deep-code) to read more.
:::

### Example Product

Below is a template for a product `collection.json`. Feel free to copy the template and make your changes!

::: details `products/my-product/collection.json`

```json{3,5,7,12-15,22-23,30-32,49,80,90,}:line-numbers
{
  "type": "Collection",
  "id": "short-descriptive-product-identifier",
  "stac_version": "1.0.0",
  "description": "Detailed description of my data product.",
  "updated": "2024-09-12T20:32:06.219108Z",
  "title": "Proper Product Title",
  "extent": {
    "spatial": {
      "bbox": [
        [
          -180.0,
          -90.0,
          180.0,
          -63.0
        ]
      ]
    },
    "temporal": {
      "interval": [
        [
          "2021-01-01T00:00:00Z",
          "2021-12-31T23:59:59Z"
        ]
      ]
    }
  },
  "license": "proprietary",
  "keywords": [
    "Snow/Ice",
    "Ice Velocity",
    "Terrestrial Hydrosphere"
  ],
  "links": [
    {
      "rel": "root",
      "href": "../../catalog.json",
      "type": "application/json",
      "title": "Open Science Catalog"
    },
    {
      "rel": "parent",
      "href": "../catalog.json",
      "type": "application/json",
      "title": "Products"
    },
    {
      "rel": "child",
      "href": "https://<remote-storage>/my-item-collection/collection.json", // link to your remote Item Collection
      "type": "application/json",
      "title": "Items"
    },
    // Add related projects, themes, EO-missions and variables
    {
      "rel": "related",
      "href": "../../projects/4d-antarctica/collection.json",
      "type": "application/json",
      "title": "Project: 4D-ANTARCTICA"
    },
    {
      "rel": "related",
      "href": "../../themes/cryosphere/catalog.json",
      "type": "application/json",
      "title": "Theme: Cryosphere"
    },
    {
      "rel": "related",
      "href": "../../variables/ice-velocity/catalog.json",
      "type": "application/json",
      "title": "Variable: Ice Velocity"
    },
    {
      "rel": "related",
      "href": "../../eo-missions/sentinel-1/catalog.json",
      "type": "application/json",
      "title": "EO Mission: Sentinel-1"
    },
    {
      "rel": "via",
      "href": "https://<link-to-my-documentation>.org",
      "title": "Documentation"
    },
  ],
  // STAC extensions for more extensive metadata. Visit their links for more information.
  "stac_extensions": [
    "https://stac-extensions.github.io/osc/v1.0.0/schema.json",
    "https://stac-extensions.github.io/themes/v1.0.0/schema.json",
    "https://stac-extensions.github.io/cf/v0.2.0/schema.json"
  ],
  "osc:project": "my-project-title",
  "osc:status": "completed",
  "osc:region": "Antarctica",
  "osc:type": "product",
  "created": "2022-04-20T00:00:00Z",
  "version": "1.0",
  "cf:parameter": [
    {
      "name": "ice-sheet-velocity-antarctic-2021"
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
    "ice-velocity"
  ],
  "osc:missions": [
    "sentinel-1"
  ],
}
```
:::

You also need to make changes to **all** the collections we have linked to. For example for the "ice velocity" variable:

::: details `variables/ice-velocity/catalog.json`
```json
{
  "type": "Catalog",
  "id": "ice-velocity",
  "stac_version": "1.0.0",
  "description": "Pertaining to the rate at which ice formations (glaciers, ice sheets, etc.) are moving. [NOAA Satellite and Information Service]",
  "links": [
    {
      "rel": "root",
      "href": "../../catalog.json",
      "type": "application/json",
      "title": "Open Science Catalog"
    },
    {
      "rel": "via",
      "href": "https://gcmd.earthdata.nasa.gov/KeywordViewer/scheme/Earth%20Science/cee7ed2f-3ed1-44ad-b48b-513a68bb3244?gtm_keyword=ICE%20VELOCITY&gtm_scheme=Earth%20Science",
      "type": "text/html",
      "title": "Description"
    },
    {
      "rel": "via",
      "href": "https://gcmd.earthdata.nasa.gov/KeywordViewer/scheme/Earth%20Science/3896f032-388f-408e-b988-bf7e100704ba?gtm_keyword=ICE%20VELOCITY&gtm_scheme=Earth%20Science",
      "type": "text/html",
      "title": "Description"
    },
    {
      "rel": "child",
      "href": "../../products/ice-sheet-velocity-antarctic-2021/collection.json",
      "type": "application/json",
      "title": "Antarctic Ice Sheet monthly ice velocity - 2021"
    },
    { // [!code ++]
      "rel": "child", // [!code ++]
      "href": "../../products/my-product/collection.json", // [!code ++]
      "type": "application/json", // [!code ++]
      "title": "The Title of My Product" // [!code ++]
    }, // [!code ++]
    {
      "rel": "parent",
      "href": "../catalog.json",
      "type": "application/json",
      "title": "Variables"
    },
    {
      "rel": "self",
      "href": "https://esa-earthcode.github.io/open-science-catalog-metadata/variables/ice-velocity/catalog.json",
      "type": "application/json"
    },
    {
      "rel": "related",
      "href": "../../themes/cryosphere/catalog.json",
      "type": "application/json",
      "title": "Theme: Cryosphere"
    }
  ],
  "stac_extensions": [
    "https://stac-extensions.github.io/themes/v1.0.0/schema.json"
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
  "updated": "2024-09-12T20:23:29.837131Z",
  "keywords": [],
  "title": "Ice Velocity"
}
```
:::
---

### Old from here

Data ingestion to the catalog can be performed in different ways, depending on **where the products are originally stored** , but also depending on **the number of products to be ingested** and therefore size.

All Themes, Variables, EO Missions, Projects, Products, Workflows, and Experiments are hosted as a metadata repository placed on the GitHub platform: Git and [GitHub API](https://docs.github.com/en/rest). Each update to metadata is handled via a [Pull Request (PR)](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests). This Pull Request allows for reviewers to see the changes to be applied in advance, to check for validity of the requested changes (via an automated validation script) and to provide reviews as comments. If appropriate, the changes can be merged with the main branch of the repository. When a Pull Request is merged, the updated STAC catalog is deployed as Static Catalog.

![ingest-data-scheme](https://github.com/EOEPCA/open-science-catalog-metadata/assets/120453810/5d6297e7-5d66-4564-9538-bb6eaeb92598)

At the moment Open Science Catalog supports ingestion of new products via **GitHub only**. This allows data providers like projects PI to apply **multiple changes or adding several new products at once**.

Work is underway to provide a CMS-like GUI based editing functionality using [git-clerk](https://github.com/EOX-A/git-clerk) via the EarthCODE Portal. Although this GUI approach is still relying on GitHub the complexity is abstracted and hidden to the user.

In this section the contribution procedure is described in an example for a Product. Please note that in the same way new Variables, Projects, Themes, EO Missions, Workflows, and Experiments can be added. We will be using three Use Case scenarios to better describe the procedure of product ingestion to the catalog:

1. Adding metadata of a single product (item) to the catalog manually.
2. Ingesting metadata of assets with STAC Catalog:
   1. Adding multiple or single product(s) stored in external server (open-access storage)
   2. Adding multiple or single product(s) stored locally

### Which information is needed before I start importing new data?

Before making any changes to the catalog's content please make sure you have already prepared the following information about your product:

- The Product should be related to a result of an ESA-funded project. Check if the Project's page is already existing within the ESA Open Science Catalog: [https://opensciencedata.esa.int/](https://opensciencedata.esa.int/). If not **create a Project page first.**
- **Complete metadata available** (to correctly describe the Product)
- The Product should be stored in an external database that is approved and a **stable data repository** (e.g. ESA PRR, CEDA Data Archive: [https://catalogue.ceda.ac.uk/](https://catalogue.ceda.ac.uk/); Zenodo repository: [https://zenodo.org/](https://zenodo.org/), etc.)
- If the product you would like to ingest is stored elsewhere, see other data ingestion scenarios described in the section TBD.
- Data provided in formats acceptable by GDAL and rasterio library.

Please refer to the graphic below to check which metadata are required for your product **before starting the Product upload.**

![metadata-stac](https://github.com/EOEPCA/open-science-catalog-metadata/assets/120453810/71b8e8a7-9a86-491b-ae54-1fb4de9ccf32)
