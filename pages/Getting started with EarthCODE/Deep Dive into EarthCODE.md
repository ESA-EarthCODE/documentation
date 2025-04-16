---
order: 1
---
# Deep Dive into EarthCODE

To better understand what EarthCODE is and what it aims to achieve, it's helpful to look at the vision of the project, how it started—and how it has evolved - and the best place to start is to understand Open Science.

Open Science describes a transformational shift in how scientific research is conducted, shared, and applied. Driven by rapid advances in digital infrastructure and information technology, it reflects a broader push to make science more transparent, collaborative, and impactful for society. Today, global teams of researchers can access vast volumes of open data across disciplines, process them in cloud-based environments, and combine them with local datasets to generate new knowledge. This capability is unlocking novel scientific insights, enabling the development of actionable information products, and helping address complex, interconnected challenges—such as climate change, disaster response, and biodiversity loss.

Open Science fosters a new era of **data-intensive research** that is characterized by:
- Transparency and traceability of results  
- **Open access** to high-volume, complex datasets  
- Community-driven tools and interoperable standards  
- Collaboration among researchers, developers, and data science practitioners  

Importantly, Open Science is a central pillar of ESA’s strategy. By offering open data and collaborative tools, ESA aims to extend the reach of Earth and space science beyond traditional disciplinary boundaries and foster a more inclusive, connected global research community.

## The Vision

Modern Earth system science faces complex challenges that demand collaborative, transparent, and reproducible approaches. At the heart of this transformation is the convergence of **FAIR principles** (Findability, Accessibility, Interoperability, and Reusability), **Open Science**, and Open Innovation—all of which create unprecedented opportunities for scalable, cross-sector research and decision-making.

To effectively address pressing societal challenges, researchers must be able to work across the entire science lifecycle. This requires modern, powerful, and interoperable infrastructure that can support diverse Earth Observation (EO) data types, facilitate data-intensive workflows, and enable trusted knowledge generation. This infrastructure for open science empower scientists to:
- Access and process satellite and in-situ data in collaborative cloud environments  
- Develop and publish reusable code and workflows  
- Validate outputs and share reproducible results  
- Collaborate across institutional, disciplinary, and national boundaries

![Open Science](/img/terms/open-science-esa.png)

The **Open Science and Innovation Vision** outlined in ESA’s Earth Observation Science Strategy (2024) defines eight foundational pillars to achieve this:  
1) open research data,  
2) open-source scientific code,  
3) open access to scientific publications with data and code,  
4) standards-based discovery of scientific experiments,  
5) reproducible workflows across platforms,  
6) accessible education and training on open science,  
7) collaborative community practices, and  
8) EO business models based on open technologies.

ESA's strategic objective is to **foster the development of a culture and practice of openness in EO science, applications and industry, and of a sustainable open innovation ecosystem.**

EarthCODE ([earthcode.esa.int](https://earthcode.esa.int)) is ESA’s strategic initiative to bring this vision to life. Originally starting as a simple repository for datasets from ESA-funded projects, it has since grown into a comprehensive environment that supports the full open science lifecycle—from data and workflow development to publication and community engagement.

## The Roadmap

By aligning with FAIR principles and leveraging cloud infrastructure, EarthCODE promotes transparency, reproducibility, and collaboration in Earth System Science. the EarthCODE **roadmap** helps clarify how this transformation has unfolded—and where the platform is heading next:

<style>
.timeline {
  border-left: 4px solid #25AC9E;
  padding-left: 20px;
  margin-left: 10px;
  position: relative;
}
.timeline-item {
  position: relative;
  margin-bottom: 40px;
}
.timeline-item::before {
  content: '';
  position: absolute;
  left: -32px;
  background: #fff;
  border: 4px solid #25AC9E;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  top: 4px;
}
.timeline-item.current::before {
  background: #25AC9E;
}
</style>

<div class="timeline">

  <div class="timeline-item">
    <h3>Foundations</h3>
    <p>EarthCODE began as a simple repository for storing and sharing datasets from ESA-funded Earth Observation projects. This created a foundation for structured data access and visibility.</p>
  </div>

  <div class="timeline-item">
    <h3>Phase 2 – FAIR Metadata and Open Science Catalog</h3>
    <p>The Open Science Catalog was introduced, enabling standardized metadata using STAC. This made datasets more discoverable, interoperable, and aligned with FAIR and Open Science principles.</p>
  </div>

  <div class="timeline-item current">
    <h3>Phase 3 – Platforms Integration and Workflows (Current Phase)</h3>
    <p>Support for open science infrastructure, reproducible workflows, experiments, and integrated platforms was added. Researchers can now develop, run, and document science projects across the full lifecycle.</p>
  </div>

  <div class="timeline-item">
    <h3>Phase 4 – Open Access and Community Engagement</h3>
    <p>EarthCODE will open to the broader scientific community with tools for publishing, citation, and open access. A growing library of reusable code and workflows will support collaboration.</p>
  </div>

  <div class="timeline-item">
    <h3>Phase 5 – Advanced Tools and Cross-Platform Science</h3>
    <p>The platform will integrate new services and advanced capabilities, including automation, machine learning, and complex analyses. Focus will shift toward reproducibility across platforms.</p>
  </div>

  <div class="timeline-item">
    <h3>Ongoing – Continuous Expansion</h3>
    <p>EarthCODE will continue to grow with new tools, datasets, and community-driven features, reinforcing its mission to support open, FAIR, and impactful Earth science.</p>
  </div>

</div>

## EarthCODE Concept in Detail

:::tip The rest of this guide goes into detail about how EarthCODE works and how the different entities within it are related. For the purposes of browsing the catalog or publishing through any of the integrated platforms, you do not need to necesarily understand any of these details below. If however, you are publishing manually, are a platform provider trying to integrate, or otherwise interested in how EarthCODE works this guide will give you the necessary context and background.
:::

As described in [Step 1: Understand EarthCODE Terminology](/Getting%20started%20with%20EarthCODE/#step-1-understand-earthcode-terminology) EarthCODE provides an integrated ecosystem designed to support scientists through the full lifecycle of doing Open Science. A more detailed concept of what EarthCODE is and the different actors involved can be seen in the figure below:

![EarthCODE Concept](/img/terms/earthcode-concept.svg)

In summary, EarthCODE provides the following:
- Offers a **central access point** via the Portal for navigating research resources and services
- Integrates platforms for workflow development, publishing and reproducibility
- Leverages the **ESA Network of Resources (NoR)** to sponsor projects to use the integrated platforms
- Implements the **EOEPCA+ Architecture** to ensure interoperability and modular integration
- Ensures long-term preservation of results in **PRR** and version-controlled metadata publishing
- Enables discovery and reuse through a metadata-rich **Open Science Catalog**
- Facilitates community engagement through the EarthCODE **Discourse**
- Promotes **FAIR principles** across all stages of research, supported by data stewards and governance mechanisms

These next sections will explore these components in detail, including their roles, relationships, and how they collectively enable a sustainable, transparent, and federated open science infrastructure.

### EO Projects from ESA Funded Activities

EarthCODE is built to serve as a foundational platform for scientists and research teams engaged in ESA-funded Earth Observation (EO) activities. The primary aim is to enable the adoption of **FAIR and Open Science practices** across all stages of scientific development—ensuring that data, workflows, and documentation are not only reusable and transparent, but also persistently available for the long term.

The platform specifically supports and connects communities within the **ESA Science Clusters**, helping to streamline research efforts, promote interoperability, and increase the impact of funded projects. The **EarthCODE Portal** is envisioned as the **central hub for the scientific communities** of **ESRIN Science Hub**, the **ESA Science Clusters**, and individual **ESA-funded EO research projects**. **These are currently the groups of projects that publish to EarthCODE**.

As EarthCODE evolves, its scope will gradually expand to support the **broader Earth Observation science community**, fostering cross-disciplinary collaboration and making high-quality, open scientific resources more accessible to a global audience of researchers.

Projects can use EarthCODE’s integrated cloud platforms to develop, run, and document their experiments—ensuring results can be stored, shared, and reproduced. The **EarthCODE Portal** ([earthcode.esa.int](https://earthcode.esa.int)) is the main entry point for these projects. Through the portal, users can access integrated platforms for developing workflows and publishing them, they can explore published outputs via the Open Science Catalog, and participate in discussions on the EarthCODE Discourse forum.

In EarthCODE role of the projects (or researchers working on them rather) is to develop their work, create FAIR and Open data and workflows, which they then need to publish to the Open Science Catalog. EarthCODE provides the tools for helping and automating this process, but the project owns the task to publish and ensure that their data follows the FAIR and Open Science principles. Specifically, they are responsible for ensuring interoperability and reusability of their data and workflows.

### EarthCODE Integrated Platforms and the EO Platform Provider

EarthCODE provides access to **integrated EO cloud platforms**, each offering tools, data, and compute environments tailored for scientific Earth Observation workflows. As integrated platforms, they share a common set of capabilities:

- Authentication using your EarthCODE (GitHub) account  
- Access to EO datasets (data availability varies by platform)  
- Interfaces for developing and running scientific workflows and various capabilites (e.g. specialised towards ML)
- Automated publishing of workflows and data products to the **EarthCODE Open Science Catalog**  
- Execution of published **experiments**, using FAIR-compliant metadata and reproducible experiments  

Users can also decide to use their own local environments instead of the platforms. For users working outside the integrated platforms—such as on institutional infrastructure or personal systems—EarthCODE supports **manual publishing** of datasets and workflows to the catalog, through the EarthCODE publishing GUI or manually via git pull requests (see more at [Working with Data](/Technical%20Documentation/Data)).

Access to compute and storage resources on these platforms can be funded through the [ESA Network of Resources (NoR)](https://eo4society.esa.int/network-of-resources/), depending on the project type and eligibility.

### Network of Resources
EarthCODE projects can request cloud compute resources through ESA’s **Network of Resources (NoR)**. This allows eligible research and development activities to access integrated EarthCODE platforms with sponsored processing, data access and storage capabilities. Sponsorship is available for activities that do not generate revenue, including scientific research, demonstration projects, and pre-commercial development.

To explore available services and platforms, visit the [NoR Portfolio](https://eo4society.esa.int/network-of-resources/portfolio/) and refer to [Choosing Tools and Platforms](/Technical%20Documentation/Platforms/Choosing%20Tools%20and%20Platforms) for guidance within EarthCODE.

We recommend reviewing the [NoR Sponsorship Guidelines](https://eo4society.esa.int/network-of-resources/nor-sponsorship/) to confirm eligibility and understand the application steps.

To make a NoR request you need to go through the following steps:
1. Select your project type and specify whether it is ESA-funded and if co-funding is expected.
2. Provide contact information and fill in the project objectives, methodology, and beneficiaries.
3. Justify the need for the selected service and platform, and describe your planned cloud-based work.
4. Indicate the geographical area of interest, any related previous projects, and—if applicable—ESA contract details and Technical Officer information.
5. State when you expect to submit a short summary presentation on the impact of cloud use.
6. Download and sign the completed form. Send it by email to `NoR-Sponsorship-Requests@esa.int`. For ESA-funded projects, the form must also be signed by the ESA Technical Officer.

NoR helps bring users to the data—supporting both scientific and operational uses of EO data—by simplifying access to computing resources across a network of European platforms. The role of NoR in EarthCODE is to provide open access to the compute required to initially develop, reuse or reproduce research when required.


#### EO Platform Providers

Platform providers play a key role in the EarthCODE ecosystem. To become an integrated platform, providers must:

- Enable researchers to access EO data and develop workflows within their environment  
- Support automated publishing of workflows and data to the EarthCODE **Open Science Catalog**  
- Integrate with the **ESA Project Results Repository (PRR)** for long-term data storage  
- Implement **single sign-on (SSO)** using the EarthCODE identity system (GitHub-based)  
- Ensure that **experiments published in the Catalog** can be executed within the platform  
- Register and onboard their service in the **NoR portfolio** for eligibility and discoverability
- Provide documentation for use of their platform the integration with EarthCODE 

Integration with EarthCODE is supported by the **EOEPCA+ architecture**, which provides open-source building blocks and interface standards to ensure interoperability across platforms.

This approach allows platforms to remain independent while contributing to a federated, reproducible, and scalable open science infrastructure. The EarthCODE project runs standard best practice procurement cycles on esa-star, platforms can apply during these tenders and propose to integrate into the EarthCODE ecosystem.


### Publishing Experiments Data and Workflows
Once a research activity is complete, the results can be published to the EarthCODE ecosystem, making them findable, reproducible, and reusable by the broader scientific community. If you are working on an integrated platform, publishing is typically automated. When the experiment is finalized, the platform can generate the appropriate metadata and push it to the EarthCODE Open Science Catalog. If you're working outside of an integrated platform—on institutional infrastructure or locally—you can still publish your results manually by following the EarthCODE catalog submission guidelines ([Working with Data](/Technical%20Documentation/Data)).

At the time of publishing, it is expected that the outputs have been finalized and, where applicable, reviewed and approved by the ESA project’s Technical Officer. When you're ready to publish you:
1. (Optional) Upload your **datasets and workflows** to the **ESA Project Results Repository (PRR)** for long-term preservation.
2. Create and upload metadata that describes your experiment, products, and workflows to the Open Science Catalog. This metadata links to your data storage location and provides sufficient context for reuse.

Publishing your experiment ensures others can discover, cite, and reproduce your results using EarthCODE’s integrated platforms or their own environments.

The core units of publication in EarthCODE are data and workflows (combined in experiments):
- **Data Products**: the final outputs of your scientific analysis (e.g. geospatial datasets).
- **Workflows**: the code or processing steps used to generate those products and the computing environemnt (platform or other) required to run the code.



### Data

In EarthCODE, the final outputs of your research—referred to as **Products** or data products—are stored, described, and published in a way that ensures long-term FAIRness and availability.

These data products can be hosted on the ESA Project Results Repository (PRR) or an external repository of your choice. The PRR is ESA’s dedicated long-term storage service for project results. Uploading to the PRR is optional but recommended, especially for ensuring compliance with FAIR principles and facilitating persistent access to your work. You simply provide a link to the data location as part of the product’s metadata. For detailed instructions on uploading to the PRR, refer to the [Contributing to the EarthCODE Catalog guide](../Technical%20Documentation/Data/Contributing%20to%20the%20EarthCODE%20Catalog.md).

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

Workflows are typically stored in the **EarthCODE GitHub organization**, and referenced in the EarthCODE Open Science Catalog as part of the workflow metadata.

Experiments also declare the **input datasets** used and a **configuration** that defines any parameters passed to the workflow at runtime. Inputs are referenced using unique identifiers, making it easier to validate and re-run experiments with the same data. Configuration values are usually a set of simple name–value pairs, but can vary depending on workflow complexity.

---

In summary, EarthCODE combines the concepts of workflows and products are combined. A **product** is the result of a successfully run experiment. The product metadata links back to the experiment metadata, which in turn references the workflow, input, and config. Together, this structure ensures reproducibility, FAIRness and Openness.

![all together](/img/terms/metadata-components.svg)

:::tip While not ideal, one can also publish a workflow independently, without a linked product, or publish a dataset without a defined experiment or workflow.
:::

### Open Science Catalog
The [Open Science Catalog (OSC)](https://opensciencedata.esa.int/catalog) is the central interface for publishing, discovering and accessing scientific resources produced through ESA-funded Earth Observation research. It is where metadata describing published data products, experiments, and workflows is made publicly available and reusable. Researchers use EarthCODE platforms to generate and submit metadata, which—after validation and a manual review—is published to the Open Science Catalog.

Metadata describing datasets (Products) is published using the **SpatioTemporal Asset Catalog (STAC)** specification. Workflows and experiments are described using the **OGC API - Records** standard. These two metadata models are connected by references. The Open Science Catalog is also integrated with EarthCODE's computing infrastructure. Users with appropriate access—such as NoR-sponsored compute—can reproduce experiments directly from the catalog. This means running the same workflow with the same input and configuration on a compatible platform, enabling reproducible results.

The catalog acts as both a registry of published research artifacts and an operational gateway for executing FAIR experiments across federated EO platforms. More information about the catalog and how it works can be found at [Data - Discovering Resources in The EarthCODE Catalog)](../Technical%20Documentation/Data/Discovering%20Resources%20in%20The%20EarthCODE%20Catalog)


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
- **Interoperable**: Data products use common standards such as NetCDF, .Zarr to ensure intraoperability. Metadata formats and workflow definitions follow community standards like STAC, CWL, and openEO, ensuring compatibility across tools and platforms.
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

The forum is directly integrated with the EarthCODE Open Science Catalog. Each published item—such as a dataset, workflow, or experiment—can be linked to a dedicated discussion thread. This makes it easy for users to connect conversations directly to the resources they’re viewing, without leaving the catalog interface. The forum is structured into dedicated categories to keep discussions focused and easy to navigate. See more informaion about the forum at [the EarthCODE Discourse Community page](/Community%20and%20Collaboration/Getting%20Started%20With%20The%20EarthCODE%20Discourse/)

### APEX
[APEx](https://esa-apex.github.io/apex_documentation/), developed by the European Space Agency (ESA), transforms Earth Observation (EO) research outcomes, such as algorithms and workflows, into interoperable and scalable cloud-ready services. APEx standardizes and optimizes these outputs, and integrates them into a dynamic Algorithm Services Catalogue, enhancing their discoverability and usability.

APEx provides dynamic project environments that include customizable project portals, interactive development environments, secure user workspaces, and structured product catalogues based on the SpatioTemporal Asset Catalog (STAC) standard. Additionally, it facilitates efficient scaling of EO services, supporting extensive geographical analyses and large dataset processing through optimized cloud workflows.

EarthCODE and APEx complement each other to maximize the impact and longevity of EO research projects. Typically, projects first publish their data, workflows, and algorithms on EarthCODE, ensuring structured data stewardship, FAIRness, and reproducibility. Subsequently, APEx identifies these proven workflows and data assets, optimizing and scaling them into fully operational, interoperable cloud-based services. This streamlines the transition from research outputs hosted on EarthCODE to widely accessible, optimized, and scalable EO applications delivered via APEx.
