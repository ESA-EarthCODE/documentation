---
order: 4
---

# Publish

Publishing to EarthCODE is the process of making scientific research outputs—data products, workflows, and experiments—discoverable, accessible, and reusable by submitting their metadata to the EarthCODE Open Science Catalog.

While manual submission by users is possible, integrated platforms are expected to automate this entire process, from uploading the final data to the PRR to generating and submitting the corresponding metadata. The Open Science Catalog serves as the central registry, with discovery interfaces based on the STAC API and publishing handled via a managed GitHub workflow.

### Open Science Catalog
The [Open Science Catalog (OSC)](https://opensciencedata.esa.int/catalog) is the central interface for publishing, discovering and accessing scientific resources produced through ESA-funded Earth Observation research. It is where metadata describing published data products, experiments, and workflows is made publicly available and reusable. Integrated platforms also may provide re-usable workflow services that support FAIR an Open Science on the catalog. Researchers use EarthCODE platforms to generate and submit metadata, which—after validation and a manual review—is published to the Open Science Catalog.

Metadata describing datasets (Products) is published using the **SpatioTemporal Asset Catalog (STAC)** specification. Workflows and experiments are described using the **OGC API - Records** standard. These two metadata models are connected by references. The Open Science Catalog is also integrated with EarthCODE's computing infrastructure. Users with appropriate access—such as NoR-sponsored compute—can reproduce experiments directly from the catalog. This means running the same workflow with the same input and configuration on a compatible platform, enabling reproducible results.

The catalog acts as both a registry of published research artifacts and an operational gateway for executing FAIR experiments across federated EO platforms

**Platform Integration**
The Open Science Catalogue is accessible through open standard interfaces through which the Portal and Platforms integrate for discovery (mainly STAC API) and publishing - note that the integration for publishing currently happens directly via Github. Platforms can make requests to obtain items using their unique Experiment Id or unique Product Id.

![Open Science Interfaces](/img/integration/openscienceinterfaces.png)
*Open Science Catalog Interfaces*


### Publishing Experiments Data and Workflows
Once a research activity is complete, the results can be published to the EarthCODE ecosystem, making them findable, reproducible, and reusable by the broader scientific community. Integrated platforms automate this process by generating the appropriate metadata and pushing it to the EarthCODE Open Science Catalog github repository. Platforms also need to provide a step for publishing data to the ESA Project Results Repository for long-term preservation.

The core units of publication in EarthCODE are data and workflows (combined in experiments). These can be published sepearately, i.e. product without a workflow or vice versa.
- **Data Products**: the final outputs of your scientific analysis (e.g. geospatial datasets).
- **Workflows**: the code or processing steps used to generate those products and the computing environemnt (platform or other) required to run the code. The code should be stored as a fork on the EarthCODE Github organisation.

**Platform Integration**
- Publishing to the ESA Project Results Repository
- Creating new OGC API Record and STAC items in the EarthCODE schema to describe workflows and products
- Making pull requests to the Open Science Catalog Github with these new items

### Data

In EarthCODE, the final outputs of your research—referred to as **Products** or data products—are stored, described, and published in a way that ensures long-term FAIRness and availability.

These data products can be hosted on the ESA Project Results Repository (PRR) or an external repository (depending on the choice of the user). See ESA PRR section below and ICD for more information.

Each product is described using **STAC (SpatioTemporal Asset Catalog) metadata** through `Collections` that captures key attributes like the spatial and temporal extent, scientific context, provenance, and more.

With common dictionary and unified metadata across heterogeneous sources, products discovery is facilitated. Published Products are associated to Projects and additional information is provided by tags. Themes and Variables are used as tags to facilitate Products discovery. Earth Observation Satellite Missions used to generate the Product are provided by EO-Mission description in Product's metadata.

See [Metadata Definitions for more details](./Metadata-Definitions.md).

**Platform Integration**
The formal definition and requirements of the schema can be found at https://github.com/stac-extensions/osc. EarthCODE also provides a library for validating generated items https://github.com/ESA-EarthCODE/open-science-catalog-validation before publishing to the catalog. The Open Science Catalog carries out these checks automatically before passing pull requests to a manual review stage. In the manual review stage the EarthCODE data steward performs additional semantic, completeness, and quality checks on the submitted items before merging into the catalog.

A full description of what is expected from item submissions (with examples) can be found in the guide: [Contributing to the Open Science Catalog](../../Technical%20Documentation/Open%20Science%20Catalog/Contributing%20to%20the%20Open%20Science%20Catalog.md). The platforms automate the manual steps for users.

### Publish Products and Experiments
To automate product publication, the platform must perform GitHub operations against both the test and live catalog repositories.

For the test environment:
1. Fork `https://github.com/ESA-EarthCODE/open-science-catalog-metadata-testing`
2. Apply product metadata changes on a new branch
3. Open a pull request back to the testing repository

For the live environment:
1. Fork `https://github.com/ESA-EarthCODE/open-science-catalog-metadata`
2. Apply the same metadata changes on a new branch
3. Open a pull request to the production repository

See examples above of what experiment, workflows and product submissions must contain.

### Validate Products and Experiments
Before any publication to the Open Science Catalog, products and experiment definitions must pass validation using the open‑science‑catalog‑validation package.

Please refer to https://github.com/ESA-EarthCODE/open-science-catalog-validation for an up-to-date documentation.

### ESA Projects Results Repository

These data products can be hosted on the ESA Project Results Repository (PRR) or an external repository of your choice. The PRR is ESA’s dedicated long-term storage service for project results. Uploading to the PRR is optional but recommended, especially for ensuring compliance with FAIR principles and facilitating persistent access to your work.

**Platform Integration**
EarthCODE relies on a technical interface to the PRR delivered as an Application Package. Platforms that are ready to publish products will invoke this Application Package using CWL workflows. Likewise, the EarthCODE Portal—and any other integrated platform- call the same CWL‑based Application Package to retrieve or interact with products stored in the PRR. This consistent invocation mechanism ensures uniform access during both publication and consumption phases.


### ESA Projects Results Repository (PRR)
Data products can be hosted on the ESA PRR or an external repository. The PRR is ESA’s dedicated long‑term storage service for project results and is recommended for persistent access and FAIR compliance.

Platform Integration
- EarthCODE relies on a technical interface to the PRR delivered as an Application Package.
- Platforms invoke this Application Package using CWL workflows to publish products.
- The same CWL‑based Application Package is used to retrieve or interact with products stored in the PRR.

Please refer to [https://eoresults.esa.int/data_provider_guide.html](https://eoresults.esa.int/data_provider_guide.html) for an up-to-date documentation of publishing to the PRR.


### Examples of an Product Submission to the Open Science Catalog

https://opensciencedata.esa.int/products/worldcereal-crop-extent-belgium/collection 
