---
order: 4
---
# Deep Dive into EarthCODE

As described in [Step 1: Understand EarthCODE Terminology](/Getting%20started%20with%20EarthCODE/#step-1-understand-earthcode-terminology) EarthCODE provides an integrated ecosystem designed to support scientists through the full lifecycle of doing Open Science. EarthCODE was designed around supporting the work of scientists and developers from ESRIN, the ESA Science Clusters, the ESA Science Hub, and EC and ESA- Funded Activities.

A detailed concept of what EarthCODE is and the different actors involved can be seen in the figure below:
<!-- 
:::tip note to self, which one is better?
Need to make this bigger - and zoomable
Can we make it clickable
::: -->
<!-- ![EarthCODE Concept](/img/terms/earthcode-concept.svg)

V2 -->
<!-- <div class="zoom-container">
  <img src="/img/terms/earthcode-conceptv2.svg" alt="Zoomed image" class="zoom-image" />
</div>

<style>
  .zoom-container {
  width: fit-content;
  height: fit-content;
  overflow: hidden;
  position: relative;
}

.zoom-image {
  width: 100%;
  height: auto;
  transition: transform 0.3s ease;
  transform-origin: center center;
}

.zoom-container:hover .zoom-image {
  transform: scale(1.8);
}

.zoom-container {
  --x: 50%;
  --y: 50%;
}
.zoom-container:hover .zoom-image {
  transform-origin: var(--x) var(--y);
}

</style>
<script setup>
  if (typeof window !== 'undefined') {
  document.addEventListener('mousemove', function (e) {
    document.querySelectorAll('.zoom-container').forEach(container => {
      const rect = container.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      container.style.setProperty('--x', `${x}%`);
      container.style.setProperty('--y', `${y}%`);
    });
  });
}
</script> -->

:::tip
Hover to zoom
:::
<div class="zoom-wrapper">
  <div class="zoom-container">
    <img src="/img/terms/earthcode-conceptv2.svg" class="zoom-image" alt="Zoom preview" />
  </div>
</div>

<style>
.zoom-wrapper {
  position: relative;
  display: inline-block;
  padding: 20px; /* Sensitivity margin */
  --x: 50%;
  --y: 50%;
  cursor: zoom-in;

}
.zoom-container {
  overflow: hidden;
  position: relative;
  width: fit-content;
  height: fit-content;
  cursor: zoom-in;
}

.zoom-image {
  display: block;
  width: 100%;
  height: auto;
  transition: transform 0.3s ease;
  transform-origin: var(--x) var(--y);
}

.zoom-wrapper:hover .zoom-image {
  transform: scale(1.8); /* zoom factor */
}
</style>
<script setup>
if (typeof window !== 'undefined') {
  document.addEventListener('mousemove', (e) => {
    document.querySelectorAll('.zoom-wrapper').forEach(wrapper => {
      const rect = wrapper.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      // zoom jumps handle/clamp
      if (x >= 0 && x <= 100 && y >= 0 && y <= 100) {
        wrapper.style.setProperty('--x', `${x}%`);
        wrapper.style.setProperty('--y', `${y}%`);
      }
    });
  });
}

</script> 


In summary, EarthCODE provides the following:
- Offers a **central access point** via the Portal for navigating a catalog of data and workflows, integrated platforms to help scientists with development and analysis, and FAIR tools to publish their research
- Integrates platforms for workflow development, reproducibility, and publishing 
- Leverages the **ESA Network of Resources (NoR)** to sponsor projects to use the integrated platforms
- Enables discovery and reuse through a metadata-rich **Open Science Catalog**
- Promotes **FAIR principles** across all stages of research, supported by data stewards and governance mechanisms
- Ensures long-term preservation of data results in **ESA Project Results Repository (PRR)**, code on Github, and metadata on the Open Science Catalog.
- Facilitates community engagement through the EarthCODE **Discourse**

These next sections will explore these components in detail, including their roles, relationships, and how they collectively enable a sustainable, transparent, and federated open science infrastructure.

### Users fo EarthCODE

EarthCODE is built to serve as a foundational platform for scientists and research teams engaged in ESA-funded Earth Observation (EO) activities. The primary aim is to enable the adoption of **FAIR and Open Science practices** across all stages of scientific development—ensuring that data, workflows, and documentation are not only reusable and transparent, but also persistently available for the long term.

:::tip Publishing to EarthCODE
Anyone with an ESA-funded project is encouraged to publish in EarthCODE. If you are not ESA-funded and would like to publish your workflows or data to EarthCODE, contact us at: <earth-code@esa.int>
:::

The platform specifically supports and connects communities within the **ESA Science Clusters**, helping to streamline research efforts, promote interoperability, and increase the impact of funded projects. The **EarthCODE Portal** is envisioned as the **central hub for the scientific communities** of **ESRIN Science Hub**, the **ESA Science Clusters**, and individual **ESA-funded EO research projects**. **These are currently the groups of projects that publish to EarthCODE**.

As EarthCODE evolves, its scope will gradually expand to support the **broader Earth Observation science community**, fostering cross-disciplinary collaboration and making high-quality, open scientific resources more accessible to a global audience of researchers.

![High Level Use Cases](/img/terms/high_level_usecase.png)
*High Level Use Cases*

Projects can use EarthCODE’s integrated cloud platforms to develop, run, and document their experiments—ensuring results can be stored, shared, and reproduced. The **EarthCODE Portal** ([earthcode.esa.int](https://earthcode.esa.int)) is the main entry point for these projects. Through the portal, users can access integrated platforms for developing workflows and publishing them, they can explore published outputs via the Open Science Catalog, and participate in discussions on the EarthCODE Discourse forum.

In EarthCODE role of the projects (or researchers working on them rather) is to develop their work, create FAIR and Open data and workflows, which they then need to publish to the Open Science Catalog. EarthCODE provides the tools for helping and automating this process, but the project owns the task to publish and ensure that their data follows the FAIR and Open Science principles. Specifically, they are responsible for ensuring interoperability and reusability of their data and workflows.

### EarthCODE Portal
The EarthCODE Portal is the central entry point to the EarthCODE ecosystem—a web-based hub for open, collaborative Earth science. It is the primary interface for scientists to discover, develop, and publish scientific FAIR and Open resources.

The portal offers a unified access point for all EarthCODE services. It integrates user authentication, data and workflow discovery, and project publishing while connecting researchers to a growing suite of platforms. Whether browsing publicly available products or running large-scale experiments in the cloud, the EarthCODE Portal is where every journey begins.

The key functions of the EarthCODE Portal are:
- **Discovery of published research** via the [Open Science Catalog](https://opensciencedata.esa.int), including data products and reproducible experiments.
- **Publishing of new scientific outputs**, with support for linking inputs, workflows, configurations, and results to promote reuse and reproducibility through the EarthCODE publishing GUI or integrated platforms automation.
- **Guided access to integrated FAIR Open Science Platforms**, where users can authenticate using their EarthCODE account and develop workflows using platform provided tools. They can also connection to infrastructure platforms with the storage and compute needed to process large EO datasets, including redirection to appropriate Network of Resources requests.
- **Engagement with the EarthCODE Discourse Community**, a dedicated forum for collaboration, support, and sharing of best practices across science clusters and research teams.

Users who do not log in can still explore published resources and engage with the community. Logged-in users gain access to advanced tools for workflow development, experiment execution, and publishing tools.

:::tip EarthCODE is Continuously Improving
The EarthCODE team are continuously improving the portal to provide an evermore integrated user experience
:::

The EarthCODE Portal is the default workspace for Earth science development, supporting reproducible workflows, cross-platform execution, and collaboration at scale.



### EarthCODE Integrated Platforms
*The User Perspective*

EarthCODE provides access to **integrated EO cloud platforms**, each offering tools, data, and compute environments tailored for scientific Earth Observation workflows. 

![EarthCODE Platform](/img/terms/earthcode-platfrom-generic.svg)
*EarthCODE Integrated Platform Capabilities*

As integrated platforms, they offer some form of the following capabilities:
- Authentication using your EarthCODE (GitHub) account  
- Access to EO datasets (data availability varies by platform)  
- Interfaces for developing and running scientific workflows and various specialized capabilities (e.g. specialised towards ML)
- Tools for visualizing and exploring published datasets
- Automated publishing of workflows and data products to the **Open Science Catalog**
- Execution of published **experiments**, using FAIR-compliant metadata and reproducible experiments

For some examples of what these might look like in practice, refer to the [10 minutes to EarthCODE Page](../Getting%20started%20with%20EarthCODE/10%20minutes%20to%20EarthCODE#data-access)

Usage of these platforms, and the data, compute and storage resources on these platforms can be funded through the [ESA Network of Resources (NoR)](https://eo4society.esa.int/network-of-resources/), depending on the project type and eligibility.

Users can also decide to use their own local environments instead of the platforms. For users working outside the integrated platforms—such as on institutional infrastructure or personal systems—EarthCODE supports **manual publishing** of datasets and workflows to the catalog, through the EarthCODE publishing GUI or manually via git pull requests (see more at [Working with Data](../Technical%20Documentation/Data/)).


### Network of Resources
EarthCODE projects can request cloud compute resources through ESA’s **Network of Resources (NoR)**. This allows eligible research and development activities to access integrated EarthCODE platforms with sponsored processing, data access and storage capabilities. Sponsorship is available for activities that do not generate revenue, including scientific research, demonstration projects, and pre-commercial development.

To explore available services and platforms, visit the [NoR Portfolio](https://eo4society.esa.int/network-of-resources/portfolio/) and refer to [the Platforms Page](../Technical%20Documentation/Platforms/) for guidance within EarthCODE.

We recommend reviewing the [NoR Sponsorship Guidelines](https://eo4society.esa.int/network-of-resources/nor-sponsorship/) to confirm eligibility and understand the application steps.

To make a NoR request you need to go through the following steps:
1. Select your project type and specify whether it is ESA-funded and if co-funding is expected.
2. Provide contact information and fill in the project objectives, methodology, and beneficiaries.
3. Justify the need for the selected service and platform, and describe your planned cloud-based work.
4. Indicate the geographical area of interest, any related previous projects, and—if applicable—ESA contract details and Technical Officer information.
5. State when you expect to submit a short summary presentation on the impact of cloud use.
6. Download and sign the completed form. Send it by email to `NoR-Sponsorship-Requests@esa.int`. For ESA-funded projects, the form must also be signed by the ESA Technical Officer.

NoR helps bring users to the data—supporting both scientific and operational uses of EO data—by simplifying access to computing resources across a network of European platforms. The role of NoR in EarthCODE is to provide open access to the compute required to initially develop, reuse or reproduce research when required.


### EO Platform Providers
*The Platform Provider Perspective*

From the perspective of the user, the platforms provide a place to develop reproducible workflows (potentially across several platforms), accessing data, and publishing items to the catalog. Platform providers play a key role in the EarthCODE ecosystem by providing the functionality for this in two ways:

1. By providing the FAIR Open Science Platforms for creating workflows, discovering and reusing data and publishing to the catalog and;
2. By providing the FAIR infrastructure (compute) to run or reproduce these workflows at scale close to the hosted EO data.

![Integrated Platforms](/img/terms/integrated_platforms.svg)
*EarthCODE Integrated Platforms - Infrastructure and FAIR Tools*

Providers offering **FAIR Open Science Platforms** empower researchers with tools for:
- Discovering, accessing, and reusing scientific datasets and code.
- Developing scientific workflows and producing experiments and data.
- Tools to explore and visualize results data
- Integrate with the **ESA Project Results Repository (PRR)** for long-term data storage
- Publishing datasets, code, and results to the Open Science Catalog.

Providers offering **FAIR Infrastructure Platforms** deliver compute and data for executing scientific workflows at scale, including:
- Provide scalable compute resources for big data Earth Observation (EO) analysis.
- Offering efficient data access to hosted EO/Geospatial datasets.
- Facilitate the execution of workflows developed on integrated FAIR Open Science Platforms.
- Supporting workflow execution close to data to minimize data transfer and enhance performance - to support the key EarthCODE paradigm of bringing code to the data.

All platform providers are expected to integrate with EarthCODE's Single Sign-On (SSO), register their services in the Network of Resources (NoR) portfolio to ensure visibility and accessibility, and provide documentation about the integration and usage of their platform.

Integration with EarthCODE is supported by the **EOEPCA+ architecture**, which provides open-source building blocks and interface standards to ensure interoperability across platforms. This approach allows platforms to remain independent while contributing to a federated, reproducible, and scalable open science infrastructure.

<!-- The Interoperable Building Block Evolution Framework
ensures continuity of the Common Architecture (EOEPCA) -
which has defined a reference architecture for cloud EO
platforms and has delivered a number of Building Blocks (BB)
at different level of maturity and supporting community. They
represent the state-of-the-art in terms of OGC standards.
EOEPCA+ also ensures international engagement in
interoperability, setting the framework for generic building
block development. The Common Architecture Building Blocks
provide interoperable open-source elements for the EarthCODE
Architecture. -->

The EarthCODE project runs standard best practice procurement cycles on esa-star, platforms can apply during these tenders and propose to integrate into the EarthCODE ecosystem.

More information about how integrating with EarthCODE works, where and how to apply, can be found at the [Integrating New Platforms Page](../Integrating%20New%20Platforms%20to%20EarthCODE/).

### Publishing Experiments Data and Workflows
Once a research activity is complete, the results can be published to the EarthCODE ecosystem, making them findable, reproducible, and reusable by the broader scientific community. If you are working on an integrated platform, publishing is typically automated. When the experiment is finalized, the platform can generate the appropriate metadata and push it to the Open Science Catalog. If you're working outside of an integrated platform—on institutional infrastructure or locally—you can still publish your results manually by following the Open Science Catalog submission guidelines [Working with Data](../Technical%20Documentation/Data/index.md).

At the time of publishing, it is expected that the outputs have been finalized and, where applicable, reviewed and approved by the ESA project’s Technical Officer. When you're ready to publish you:
1. (Optional) Upload your **datasets and workflows** to the **ESA Project Results Repository (PRR)** for long-term preservation.
2. Create and upload metadata that describes your experiment, products, and workflows to the Open Science Catalog. This metadata links to your data storage location and provides sufficient context for reuse.

Publishing your experiment ensures others can discover, cite, and reproduce your results using EarthCODE’s integrated platforms or their own environments.

The core units of publication in EarthCODE are data and workflows (combined in experiments):
- **Data Products**: the final outputs of your scientific analysis (e.g. geospatial datasets).
- **Workflows**: the code or processing steps used to generate those products and the computing environemnt (platform or other) required to run the code.



### Data Products

In EarthCODE, the final outputs of your research—referred to as **Products** or data products—are stored, described, and published in a way that ensures long-term FAIRness and availability.

These data products can be hosted on the ESA Project Results Repository (PRR) or an external repository of your choice. The PRR is ESA’s dedicated long-term storage service for project results. Uploading to the PRR is optional but recommended, especially for ensuring compliance with FAIR principles and facilitating persistent access to your work. You simply provide a link to the data location as part of the product’s metadata. For detailed instructions on uploading to the PRR, refer to the [Contributing to the Open Science Catalog guide](../Technical%20Documentation/Data/Contributing%20to%20the%20EarthCODE%20Catalog.md).

Each product is described using **STAC (SpatioTemporal Asset Catalog) metadata**, specifically through a `Collection` that captures key attributes like the spatial and temporal extent, scientific context, provenance, and more.

A product in EarthCODE typically includes:
- A dataset representing the measured or derived values of one or more environmental or geoscience variables.
- Documentation links that describe the methodology or related publications.
- Metadata fields to indicate the EO satellite mission(s), project affiliation, and classification tags.

To ensure FAIRness, the catalog uses a shared dictionary and metadata standard. This structure enables users to explore products across diverse sources by theme, variable, and mission.

![Data Products](/img/terms/data-components.svg)

- **Product**: A geoscience dataset that captures specific variables over a spatial and temporal extent. Products are distinguished by factors such as the processing method, validation status, and EO mission used.
- **Project**: The ESA-funded research project under which the product was generated.
- **Variables**: Scientific or environmental variables measured or estimated in the dataset.
- **Themes**: Top-level science topics from ESA’s strategic challenges (e.g. climate, biodiversity, atmosphere).
- **Keywords**: Hierarchical tags for product discovery, often derived from the variables and broader scientific terms.
- **EO Mission**: The satellite mission or sensor used to generate the data, referenced in the product’s metadata.
- **Documentation**: A link to related materials or publications explaining how the product was created.
- **Data link**: A pointer to the actual location of the dataset (e.g. PRR, institutional archive, or external repository).

Together, these components ensure each product is clearly described and easy to find, enabling transparency, traceability, and reuse across the scientific community.


### Workflows and Experiments
In EarthCODE, a published product is not just a dataset—it is the outcome of a defined process, captured as an **Experiment**. In addition to the definitions above, a product includes a reference to the experiment that produced it, making it possible to understand, reuse, and reproduce the results.

![Workflows](/img/terms/workflow-components.svg)

An Experiment describes everything needed to generate a product. This includes:
- A human-readable description of the experiment’s purpose and context  
- A machine-executable workflow used to transform inputs into outputs
- A definition of the **input data** used, including references to other published products  
- A **configuration** describing any parameters or settings used during execution  

These components ensure that published results are reproducible. They are defined using structured metadata and described using STAC and Record Items, which together provide the semantic and technical context needed for discovery and reuse. 

A **workflow** defines the set of processing steps used in an experiment. It is not just source code—it is something that can be formally executed within a platform using a defined interface. Workflows may take different forms, including:
- openEO Process Graphs
- OGC API Processes (e.g. CWL, Application Package)
- MLflow models
- Jupyter Notebooks

The source code that supports a workflow may be referenced, but the workflow itself must be described in a way that allows it to be executed by integrated EarthCODE platforms. This distinction enables reproducibility and compatibility across platforms. Platforms handle these definitions.

:::tip if you have not used a platform to develop your workflow, or have not ported it to run on a platform, it would not be reproducible on EarthCODE. You can still publish it to the catalog and allow for reuse-ability and recognition of your work.
:::

Workflows are typically stored in the **EarthCODE GitHub organization**, and referenced in the Open Science Catalog as part of the workflow metadata.

Experiments also declare the **input datasets** used and a **configuration** that defines any parameters passed to the workflow at runtime. Inputs are referenced using unique identifiers, making it easier to validate and re-run experiments with the same data. Configuration values are usually a set of simple name–value pairs, but can vary depending on workflow complexity.

---

In summary, an experiment combines the concepts of workflows and products. A product is the result of a successfully run experiment. The product metadata links back to the experiment metadata, which in turn references the workflow, input, and config. Together, this structure ensures reproducibility, FAIRness and Openness.

![all together](/img/terms/metadata-components.svg)

:::tip While not ideal, one can also publish a workflow independently, without a linked product, or publish a dataset without a defined experiment or workflow.
:::

### Open Science Catalog
The [Open Science Catalog (OSC)](https://opensciencedata.esa.int/catalog) is the central interface for publishing, discovering and accessing scientific resources produced through ESA-funded Earth Observation research. It is where metadata describing published data products, experiments, and workflows is made publicly available and reusable. Integrated platforms also may provide re-usable workflow services that support FAIR an Open Science on the catalog. Researchers use EarthCODE platforms to generate and submit metadata, which—after validation and a manual review—is published to the Open Science Catalog.

Metadata describing datasets (Products) is published using the **SpatioTemporal Asset Catalog (STAC)** specification. Workflows and experiments are described using the **OGC API - Records** standard. These two metadata models are connected by references. The Open Science Catalog is also integrated with EarthCODE's computing infrastructure. Users with appropriate access—such as NoR-sponsored compute—can reproduce experiments directly from the catalog. This means running the same workflow with the same input and configuration on a compatible platform, enabling reproducible results.

The catalog acts as both a registry of published research artifacts and an operational gateway for executing FAIR experiments across federated EO platforms. More information about the catalog and how it works can be found at [Data - Discovering Resources in The Open Science Catalog)](../Technical%20Documentation/Data/Discovering%20Resources%20in%20The%20EarthCODE%20Catalog)

<!-- One such component developed on top of EOEPCA open-
source building blocks and which will be integrated in
EarthCODE is the Open Science Catalogue (OSC).
The Open Science Data Catalogue (ESA OSC, 2024) is an ESA
Open Science activity aiming to enhance the discoverability and
use of the various scientific and value-added results (i.e. data,
code, documentation) achieved in Earth System Science
research activities funded by ESA EO. The OSC provides open
access for the scientific community to geoscience products
(based on EO data from ESA and non-ESA missions and other
geospatial information and models) across the whole spectrum
of Earth Science domains. The OSC adheres to FAIR principles
and promotes reproducibility of scientific studies. The OSC
makes use of various Open-Source geospatial technologies such
as pycsw, PySTAC, and OpenLayers and tries to contribute
back to these projects in terms of software and standardisation
(Schindler, 2023).  -->

### How EarthCODE is FAIR

All data and workflows in EarthCODE need to be FAIR​.

:::tip Most data in EarthCODE is Open. However, the PRR allows datasets to be closed one could find the product in the Open Science Catalogue (sees the metadata), but not access the data (unless authorized).​
:::

EarthCODE is designed to support FAIR and Open Science practices across the lifecycle of Earth Observation research. It enables researchers to create and publish **FAIR digital objects**—datasets, workflows, and metadata—through a reproducible, transparent, and collaborative infrastructure. At the core of the EarthCODE approach are three key components to enable FAIRness:

- **Products** (the resulting data outputs)
- **Workflows** (the algorithms and experiments)
- **Platforms** (the infrastructure where workflows are executed)

![EarthCODE Ecosystem](/img/terms/earthcode-ecosystem.png)

EarthCODE ensures that each of these is formally described, uniquely identified, and linked together using interoperable metadata standards. Workflows are described using the OGC API Records standards and data is described using the STAC specification.

The product data that is ultimately published to the EarthCODE Open Science Catalog is the result of a workflow being executed on an integrated platform, using well-defined input data and parameters. The metadata describing these objects is compliant with the **EarthCODE FAIR principles**, which focus on making results:
- **Findable**: Metadata is indexed and searchable via the [Open Science Catalog](https://opensciencedata.esa.int/catalog) using STAC and OGC API standards. Unique identifiers and tags make content easy to discover. EarthCODE provides additional functionality to support this by offering to assign DOIs to published items.
- **Accessible**: Data and workflows are published to persistent storage, such as the ESA Project Results Repository (PRR), and openly linked via the catalog.
- **Interoperable**: Data products use common standards such as NetCDF, Zarr to ensure intraoperability. Metadata formats and workflow definitions follow community standards like STAC, CWL, and openEO, ensuring compatibility across tools and platforms.
- **Reusable**: Resources are enriched with documentation, provenance,licensing, configuration details, and versioning.

Importantly, EarthCODE doesn't only describe results—it enables others to act on them. Published experiments in the Open Science Catalog can be directly reused on compatible EarthCODE platforms, assuming the user has the required permissions and resources.

This end-to-end design ensures that research is not only published, but also **reproducible**, extensible, and open to collaboration.

To learn more about EarthCODE's FAIR best practices and standards, visit the [FAIR and Open Science page](/Community%20and%20Best%20Practices/FAIR%20and%20Open%20Science).

### Reviews and Data Stewardship of EarthCODE
Once a publication request is submitted—either from an integrated platform or manually—the request enters a review process managed by the **EarthCODE data steward**.

The data steward is responsible for validating the submitted metadata to ensure it meets EarthCODE’s quality and FAIR compliance standards. This includes checking that all required metadata fields are present, links are functional, identifiers are correct, and the submission follows the platform’s guidelines.

After validation, the metadata is published to the Open Science Catalog, making the product, or workflow discoverable and reusable by others.


### EarthCODE Discourse Forum Community
The [EarthCODE Forum](https://discourse-earthcode.eox.at) is a community discussion space where users can collaborate, share feedback, ask questions, and get help related to datasets, workflows, and other EarthCODE resources.

The forum is directly integrated with the EarthCODE Open Science Catalog. Each published item—such as a dataset, workflow, or experiment—can be linked to a dedicated discussion thread. This makes it easy for users to connect conversations directly to the resources they’re viewing, without leaving the catalog interface. The forum is structured into dedicated categories to keep discussions focused and easy to navigate. See more information about the forum at [the EarthCODE Discourse Community page](/Community%20and%20Collaboration/Getting%20Started%20With%20The%20EarthCODE%20Discourse/)

### APEx
[APEx](https://apex.esa.int/), developed by the European Space Agency (ESA), transforms Earth Observation (EO) research outcomes, such as algorithms and workflows, into interoperable and scalable cloud-ready services. APEx standardizes and optimizes these outputs, and integrates them into a dynamic Algorithm Services Catalogue, enhancing their discoverability and usability.

APEx provides dynamic project environments that include customizable project portals, interactive development environments, secure user workspaces, structured product catalogues based on the SpatioTemporal Asset Catalog (STAC) standard and more. Additionally, it facilitates efficient scaling of EO services, supporting extensive geographical analyses and large dataset processing through optimized cloud workflows.

EarthCODE and APEx complement each other to maximize the impact and longevity of EO research projects. Typically, projects first publish their data, workflows, and algorithms on EarthCODE, ensuring structured data stewardship, FAIRness, and reproducibility. Subsequently, APEx identifies these proven workflows and data assets, optimizing and scaling them into fully operational, interoperable cloud-based services. This streamlines the transition from research outputs hosted on EarthCODE to widely accessible, optimized, and scalable EO applications delivered via APEx.
