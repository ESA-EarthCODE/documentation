---
order: 2
---

# Metadata Definitions

### Data
In EarthCODE, the final outputs of your research—referred to as Products or data products—are stored, described, and published in a way that ensures long-term FAIRness and availability.

Each product is described using STAC (SpatioTemporal Asset Catalog) metadata through Collections that capture key attributes like the spatial and temporal extent, scientific context, provenance, and more.

With common dictionary and unified metadata across heterogeneous sources, product discovery is facilitated. Published Products are associated to Projects and additional information is provided by tags. Themes and Variables are used as tags to facilitate Products discovery. Earth Observation Satellite Missions used to generate the Product are provided by EO‑Mission description in Product metadata.

![metadata-stac](https://github.com/EOEPCA/open-science-catalog-metadata/assets/120453810/71b8e8a7-9a86-491b-ae54-1fb4de9ccf32)

Platform Integration
- The formal definition and requirements of the schema can be found at https://github.com/stac-extensions/osc.
- EarthCODE provides a validation library: https://github.com/ESA-EarthCODE/open-science-catalog-validation
- Guide for manual submissions (platforms automate these steps): [Contributing to the Open Science Catalog](../../Technical%20Documentation/Open%20Science%20Catalog/Contributing%20to%20the%20Open%20Science%20Catalog.md)

### Workflows and Experiments
In EarthCODE, a published product is the outcome of a defined process, captured as an Experiment. A product includes a reference to the experiment that produced it.

An Experiment describes everything needed to generate a product, including:
- A human‑readable description of the experiment’s purpose and context
- A machine‑executable workflow used to transform inputs into outputs
- A definition of the input data used, including references to other published products
- A configuration describing any parameters or settings used during execution

Workflows may take different forms, including openEO Process Graphs, OGC API Processes (e.g. CWL, Application Package), MLflow models, and Jupyter Notebooks. The source code may be referenced, but the workflow must be described in a way that allows execution by integrated EarthCODE platforms.

Workflows are typically stored in the EarthCODE GitHub organization and referenced in the Open Science Catalog. Experiments also declare the input datasets and configuration values used at runtime.

### Validate Products and Experiments
Before any publication to the Open Science Catalog, products and experiment definitions must pass validation using the open‑science‑catalog‑validation package. See https://github.com/ESA-EarthCODE/open-science-catalog-validation for up‑to‑date documentation.


---



# Metadata Definitions

EarthCODE uses a linked-metadata approach to ensure all scientific outputs are FAIR. This relies on two core, community-driven standards: **STAC** for describing data products and **OGC API - Records** for describing the workflows and experiments that create them. Integrated platforms are responsible for generating metadata that is compliant with these standards and the specific EarthCODE profiles.

### Data Products (STAC)

In EarthCODE, the final outputs of your research—referred to as **Products**—are described and published in a way that ensures long-term FAIRness and availability.

Each product must be described using a **STAC (SpatioTemporal Asset Catalog) Collection**. This metadata captures key attributes like the spatial and temporal extent, scientific context, licensing, and provenance, making the data discoverable and understandable.

To facilitate discovery across diverse datasets, product metadata is enriched using a common dictionary of tags, including `Projects`, `Themes`, `Variables`, and the `EO-Mission` used to generate the data.

![STAC Metadata Structure](https://github.com/EOEPCA/open-science-catalog-metadata/assets/120453810/71b8e8a7-9a86-491b-ae54-1fb4de9ccf32)

#### Platform Requirements for Data Products
- **Schema Compliance:** Platforms must generate STAC Collection JSON that is compliant with the EarthCODE definitions and terms, which builds upon the Open Science Catalog (OSC) STAC extension. The formal definition can be found at: [https://github.com/stac-extensions/osc](https://github.com/stac-extensions/osc).
- **Validation:** All generated STAC metadata **must** pass validation using the official EarthCODE validation library before it can be published. See: [https://github.com/ESA-EarthCODE/open-science-catalog-validation](https://github.com/ESA-EarthCODE/open-science-catalog-validation).
- **Manual Submissions:** While platforms are expected to automate these steps, a guide for manual submissions is available here: [Contributing to the Open Science Catalog](../../Technical%20Documentation/Open%20Science%20Catalog/Contributing%20to%20the%20Open%20Science%20Catalog.md).

### Workflows and Experiments (OGC API - Records)

In EarthCODE, a published product is not just a dataset—it is the outcome of a defined and reproducible process, captured as an **Experiment**. The product's metadata must include a reference to the experiment that produced it.

An Experiment record describes everything needed to regenerate a product, including:
- A human-readable description of its purpose and context.
- A link to a machine-executable **Workflow** used to transform inputs into outputs.
- A definition of the **Input Data** used, including references to other published products.
- The **Configuration** describing parameters or settings used during execution.

Workflows may take different forms, such as openEO Process Graphs, OGC API Processes (e.g., CWL, Application Package), MLflow models, or Jupyter Notebooks. The source code may be referenced, but the workflow itself must be described in a way that allows it to be formally executed by an integrated EarthCODE platform.

#### Platform Requirements for Workflows and Experiments
- **Schema Compliance:** Platforms must generate metadata for workflows and experiments that is compliant with the **OGC API - Records** standard and the specific EarthCODE profiles.
- **Validation:** As with data products, all workflow and experiment metadata **must** pass validation using the [`open-science-catalog-validation`](https://github.com/ESA-EarthCODE/open-science-catalog-validation) package before publication.
- **Reproducibility:** The generated metadata must contain all necessary information to re-run the experiment, including links to versioned code, container images, input data identifiers, and configuration parameters.
