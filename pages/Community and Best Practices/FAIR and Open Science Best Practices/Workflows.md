---
order: 2
---
# For Workflows
# FAIR Workflows Best Practices EarthCODE

The research software and algorithms you publish to EarthCODE is referred to as **workflows**. Workflows may take different forms, including a Jupyter Notebook, OpenEO Graph, [CWL](https://www.commonwl.org/), or containerized workflow. A workflow in EarthCODE typically includes:
- source code, stored on [Github](https://github.com)
- environment dependancies
- an executable specification (e.g. OpenEO Graph, CWL, image).
- Documentation of methods and code

Each workflow is described using **OGC API Records metadata**, which, similar to [Products](./Data.md) captures the workflow definition, its project, related themes, variables and EO missions, related products and other related links. 

![alt text](/img/workflow.png)

:::details Workflow Components
- **Workflow Metadata**: The central description, following OGC, STAC and OSC extensions, that ties together all other elements.  
- **Projects**: The ESA-funded research initiative under which the workflow was created.  
- **Documentation**: The Papers, handbook and/or documentation that describe the methods, implementation and requeired inputs.
- **Source Code**: The repository ([GitHub](https://github.com)) where the code for the workflow is maintained.  
- **Dependencies/Environment**: Configuration files (e.g. `environment.yml`, `Dockerfile`) specifying libraries, software, and system requirements.  
- **Packaged Application**: A runnable artifact such as a Jupyter Notebook, CWL workflow, or containerized image.  
- **Variables**: The scientific or environmental parameters processed or modeled by the workflow.  
- **Themes**: ESA’s strategic science challenges to which the workflow contributes (e.g. climate, cryosphere).  
- **EO Missions**: The satellite missions or instruments used as inputs to the workflow.  
:::



<!-- 

 It should be noted that the application of the FAIR Principles is the responsibility of the owners (who are often the creators) of the software. However, scholarly infrastructures are needed to provide certain functionalities to apply FAIR to software.


" ---->




## FAIR Checklist

Use this checklist to prepare your Product for publication in EarthCODE.

<!-- (+ORCID) for contacts? -->
<ClientOnly>
  <Checklist
    title="FAIR Workflow Preparation"
    :items="[
      'Checkout an example workflow to see what you need to produce, e.g. [ESA CCI permafrost](https://opensciencedata.esa.int/workflows/esa-cci-permafrost/record)',
      'Explore tools from [EarthCODE Integrated Platforms](../../../Technical%20Documentation/Platforms/index.md) that might help you with publishing your workflow',
      'Prepare core metadata: id, title, abstract (≤300 words), description, keywords, version, license, created/updated timestamps',
      'Add project and contact information (ESA project ID, consortium, technical officer, PIs, relevant websites)',
      'Prepare documentation links (papers, handbook, methods, implementation notes)',
      'Ensure your code follows [best practices](../Code%20Data%20and%20Workflow%20Quality.md), link to your workflow code repository (e.g. GitHub), include version tags or releases',
      'Provide environment description (`environment.yml`, `Dockerfile`, container image) so others can reproduce your setup',
      'Choose a [license for your workflow](./Workflows.md#open-source--licensing)',
      'Test your workflow on a small dataset to confirm it runs; provide an example dataset if possible (upload as a Product)',
      'Declare related ESA Project (or create one if missing in the [OSC Project Catalog](https://opensciencedata.esa.int/projects/catalog))',
      'Select the relevant OSC [Variables](https://opensciencedata.esa.int/variables/catalog), [Themes](https://opensciencedata.esa.int/themes/catalog), and [Missions](https://opensciencedata.esa.int/eo-missions/catalog)',
      'Consider if you want a [DOI from EarthCODE](./Workflows.md#doi-assignment) or if you bring an existing DOI',
      'Read the [Publishing Guide](../../../Technical%20Documentation/Open%20Science%20Catalog/Contributing%20to%20the%20Open%20Science%20Catalog.md) and look at [workflow examples](https://esa-earthcode.github.io/examples/osc-pr-pystac/#create-a-metadata-collection-for-new-workflow)',
      'Document inputs and outputs — ideally by linking to an [Experiment](./Experiments.md)',
      'Announce your new workflow on the [EarthCODE forum](https://discourse-earthcode.eox.at/latest)'
    ]"
    storage-key="earthcode-workflow"
  />
</ClientOnly>



## FAIR EarthCODE Workflows Standards

EarthCODE's standards for FAIR workflows follow the principles from [Applying the FAIR Principles to computational workflows](https://www.nature.com/articles/s41597-025-04451-9) and [Introducing the FAIR Principles for research software](https://www.nature.com/articles/s41597-022-01710-x).

In short, Findability implies that people and machines can easily discover a workflow and the metadata that goes with it. Accessibility means that you can get to a process and its information via standard protocols. Interoperability indicates that a process can work with other workflows and that workflow components may work with each other by sharing data and/or metadata, which are prescribed by standards. Lastly, Reusability indicates that a workflow may be used (performed) and reused (understood, changed, built upon, or added to other workflows):


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
        <p><strong>F1</strong> — Workflows and experiments are assigned globally unique and persistent identifiers (e.g., DOIs)
        </p>
        <p><strong>F1.2</strong> — Versions of workflows are explicitly identified, for example: WorldCereal workflow <code>version: 2</code> with link to <a href="https://github.com/WorldCereal/worldcereal-classification/releases/tag/worldcereal_crop_extent_v1.0.1">GitHub tagged release</a>.
        </p>
        <p><strong>F2</strong> — Rich metadata describing workflow type, dependencies, environment, using <a href="https://ogcapi.ogc.org/records/"> OGC API Records</a>
        </p>
        <p><strong>F3</strong> — Metadata clearly includes the identifier of the workflow it describes.
        </p>
        <p><strong>F4</strong> — Workflows and experiments are searchable and indexed in the <a href="https://opensciencedata.esa.int">ESA Open Science Catalog</a>.  
        </p>
      </td>
      <td style="vertical-align:top; padding:10px; border:1px solid #eee;">
        <p><strong>A1</strong> — Workflows are retrievable via standardized protocols (HTTPS, Git, OGC APIs)  </p>
        <p><strong>A1.1</strong> — Protocols are open and free (HTTPS, GitHub). </p>
        <p><strong>A1.2</strong> — Protocols allow for authentication/authorization where needed.</p>
        <p><strong>A2</strong> — Metadata remains accessible in the Open Science Catalog even if github repository becomes unavailable</p>
      </td>
    </tr>
    <tr>
      <td style="vertical-align:top; padding:10px; border:1px solid #eee;">
        <strong>Interoperable (I)</strong>
        <p><strong>I1</strong> — Workflows use formal, accessible representations (CWL, openEO, Jupyter), e.g. WorldCereal workflow defined as an <a href="https://openeo.org/">openEO Process Graph</a>.  
        </p>
        <p><strong>I2</strong> — Metadata uses controlled vocabularies (OSC themes, OSC variables, etc..).  
        </p>
        <p><strong>I3</strong> — Workflows declare qualified links to related data/products and experiments.
        </p>
      </td>
      <td style="vertical-align:top; padding:10px; border:1px solid #eee;">
        <strong>Reusable (R)</strong>
        <p><strong>R1</strong> — Workflows include detailed attributes (execution environment), e.g. ESA CCI Permafrost notebook declares <code>jupyter:kernel</code> and <code>environment.yml</code> for reproducibility.  <!--How Specifically?-->
        </p>
        <p><strong>R1.1</strong> — Workflows include a clear, accessible license.  
        </p>
        <p><strong>R1.2</strong> — Provenance is recorded, linking workflow code, execution, and project. For example WorldCereal record links to <a href="https://github.com/WorldCereal/worldcereal-classification.git">Git source repository</a> and to its generated <a href="https://opensciencedata.esa.int/experiments/esa-cci-permafrost/record">experiment</a>.
        </p>
        <p><strong>R2</strong> — Workflows reference related software and datasets via experiments.
        </p>
        <p><strong>R3</strong> — Workflows align with EO and Earth Science standards (OpenEO, CWL, STAC, <a href="http://www.opengis.net/spec/ogcapi-records-1/1.0/req/record-core">OGC API Records</a>).  
        </p>
      </td>
    </tr>
  </tbody>
</table>


### EarthCODE FAIR Experiment Example

The [ESA CCI Permafrost workflow](https://opensciencedata.esa.int/workflows/esa-cci-permafrost/record) is published as an [OGC API Record](https://esa-earthcode.github.io/open-science-catalog-metadata/workflows/esa-cci-permafrost/record.json) (**F2**) with rich metadata describing its type (`jupyter-notebook`), environment (`deepesdl-xcube-1.9.1`, `Python 3.11`), theme (`cryosphere`), and project (`DeepESDL`). It has a persistent identifier and versioning via its [GitHub repository](https://github.com/deepesdl/cube-gen) (**F1**, **F1.2**), is retrievable through open protocols (**A1**), and remains indexed in the [ESA Open Science Catalog](https://opensciencedata.esa.int) (**F4**, **A2**). It is interoperable through standards (Jupyter, OGC API, OSC vocabularies) (**I1**, **I2**) and links to related experiments, and the [DeepESDL platform](https://deep.earthsystemdatalab.net/) (**I3**). Reusability is ensured by declaring its execution environment and provenance (linked Git, environment.yml, experiment record) (**R1**, **R1.2**) and by aligning with EO standards (**R3**).

:::details Worflow Example OGC API - Records 
```json
{
  "id": "esa-cci-permafrost",
  "type": "Feature",
  "conformsTo": [
    "http://www.opengis.net/spec/ogcapi-records-1/1.0/req/record-core",
    "https://stac-extensions.github.io/application/v0.1.0/schema.json",
    "https://raw.githubusercontent.com/EOEPCA/metadata-profile/refs/heads/1.0/schemas/application-type-jupyter-notebook"
  ],
  "title": "ESA CCI permafrost",
  "geometry": null,
  "properties": {
    "created": "2025-03-17T14:30:23.650003+00:00",
    "updated": "2025-04-25T14:00:00Z",
    "type": "workflow",
    "title": "ESA CCI permafrost",
    "description": "cube generation workflow for esa-cci-permafrost",
    "application:type": "jupyter-notebook",
    "application:container": true,
    "application:language": "Python",
    "keywords": ["Earth Science"],
    "contacts": [
      {
        "name": "Tejas Morbagal Harish",
        "organization": "Brockmann Consult GmbH",
        "links": [
          {
            "rel": "about",
            "type": "text/html",
            "href": "https://www.brockmann-consult.de/"
          }
        ],
        "roles": ["principal investigator"]
      }
    ],
    "themes": [
      {
        "concepts": [
          {
            "id": "cryosphere"
          }
        ],
        "scheme": "https://github.com/stac-extensions/osc#theme"
      }
    ],
    "formats": [],
    "license": "proprietary",
    "osc:project": "deep-earth-system-data-lab"
  },
  "linkTemplates": [],
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
      "title": "Workflows"
    },
    {
      "rel": "self",
      "href": "https://esa-earthcode.github.io/open-science-catalog-metadata/workflows/esa-cci-permafrost/record.json",
      "type": "application/json"
    },
    {
      "rel": "related",
      "href": "../../projects/deep-earth-system-data-lab/collection.json",
      "type": "application/json",
      "title": "Project: DeepESDL"
    },
    {
      "rel": "child",
      "href": "../../experiments/esa-cci-permafrost/record.json",
      "type": "application/json",
      "title": "ESA CCI permafrost"
    },
     {
      "rel": "vcs",
      "title": "Git source repository",
      "href": "https://github.com/deepesdl/cube-gen.git",
      "vcs:type": "git",
      "vcs:branch": "main"
    },
    {
      "rel": "related",
      "href": "../../themes/cryosphere/catalog.json",
      "type": "application/json",
      "title": "Theme: Cryosphere"
    },
    {
      "rel": "vcs",
      "title": "Git source repository",
      "href": "https://github.com/deepesdl/cube-gen.git",
      "vcs:type": "git",
      "vcs:branch": "main"
    },
    {
      "rel": "application",
      "title": "Jupyter Notebook: Create CCI Permafrost cube",
      "href": "https://github.com/deepesdl/cube-gen/blob/main/Permafrost/Create-CCI-Permafrost-cube-EarthCODE.ipynb",
      "file:local_path": "Permafrost/Create-CCI-Permafrost-cube-EarthCODE.ipynb",
      "type": "application/x-ipynb+json",
      "application:type": "jupyter-notebook",
      "application:container": true,
      "application:language": "Python",
      "jupyter:kernel": {
        "name": "deepesdl-xcube-1.9.1",
        "pythonVersion": 3.11,
        "envFile": "https://github.com/deepesdl/cube-gen/blob/main/Permafrost/environment.yml"
      }
    },
    {
      "rel": "application-originating-platform",
      "title": "DeepESDL platform",
      "href": "https://deep.earthsystemdatalab.net/",
      "type": "text/html",
      "application:platform_supports": ["jupyter-notebook"],
      "application:preferred_app": "JupyterLab"
    },
    {
      "rel": "related",
      "href": "https://deep.earthsystemdatalab.net/hub/user-redirect/git-pull?repo=https%3A%2F%2Fgithub.com%2Fdeepesdl%2Fcube-gen&urlpath=lab%2Ftree%2Fcube-gen%2FPermafrost%2FCreate-CCI-Permafrost-cube-EarthCODE.ipynb&branch=main",
      "type": "text/html",
      "title": "Open notebook on the DeepESDL platform"
    }
  ]
}
```
:::









## Open Source & Licensing

To qualify as *Open*, your source code must follow the [OSI Open Source Definition](https://opensource.org/osd/), allowing anyone to use, modify, and redistribute them under certain conditions.

You should consider the following when publishing a workflow as Open:  
- **License is mandatory.** Without it, workflows cannot be reused.  
- Others must be able to copy and share the workflow.  
- Adaptation and extension must be permitted.  
- The license applies regardless of packaging of the software

A licence is the **permission slip for reuse**. In Earth Science, this ensures others can validate, extend, and integrate your work into new experiments and platforms. 

Open Source licenses fall into several families: **Copyleft** (e.g., GPL) enforces “share-alike” obligations and requires derivatives to remain open; **Permissive** (e.g., MIT, BSD) allows wide reuse with attribution and minimal restrictions; **Creative Commons** offers building blocks such as attribution, share-alike, non-commercial, and no-derivatives clauses; and **Public Domain** effectively removes restrictions altogether, though liability questions may remain. 

EarthCODE workflows are **typically licensed under OSI-approved licenses**, most commonly:  

| Licence | Description & Typical Use in EarthCODE | Notes |
|---|---|---|
| **Apache 2.0** | permissive, allows reuse, redistribution, and patent protection. | Encourages wide adoption. |
| **MIT** | Simple and permissive; common in scientific notebooks and lightweight workflows. | Maximum flexibility but no patent protection. |
| **BSD 3-Clause** | Academic-friendly, permissive with attribution and no-endorsement clause. | Common in research software. |
| **EUPL** | EU-backed open source license, ensuring strong copyleft and EU compatibility. | Increasingly used in European public-sector projects. |  

:::tip **In practice:**  
For EarthCODE workflows, the default recommendation is **Apache 2.0** or **MIT** for maximum reuse and interoperability.  
:::  

In OGC API Records or EarthCODE metadata, workflows should declare the license explicitly:  

```json
{
  "id": "example-workflow",
  "type": "workflow",
  "license": "Apache-2.0",
  "links": [
    { "rel": "license", "href": "https://www.apache.org/licenses/LICENSE-2.0" },
  ]
}
```


## Input, Example and Related Data

Workflows in EarthCODE should clearly document the **input data** they require and the **outputs** they generate. This is typically captured through an associated [**Experiment**](./Experiments.md), which links workflows to datasets, configurations, and results.  

In some cases, input data itself may be a candidate for publication in EarthCODE—for example, smaller datasets such as in-situ measurements, training/labelled data, or other derived collections. Large, publicly available archives (e.g., Sentinel or Landsat) are not re-uploaded but referenced directly.
<!-- how? -->

<!-- You are encouraged to provide a smaller example dataset so users can easily test and run the workflow. Example datasets should be uploaded as EarthCODE **Products** and referenced in the workflow metadata.   -->

## Validate Before Publishing  

Before publishing, make sure your workflow executes successfully in the declared environment (e.g., include an `environment.yml` or list of dependencies). If the workflow processes large datasets, test it first on a small sample to confirm it runs as expected.

Where possible, re-run the workflow and create an [Experiment](./Experiments.md) to allow for verification and reproducibility.


 ## DOI Assignment
:::warning In Development
:::

A **Digital Object Identifier (DOI)** provides a persistent, citable link to your EarthCODE Workflow, making it reliably referenceable in publications, catalogs, and research outputs. DOIs are essential for making workflows **Findable** under the FAIR principles.  

EarthCODE can mint and assign a DOI to your workflow for free during publishing. It will be recorded in the **OGC API Record** metadata and shown in the ESA Open Science Catalog. Simply **request a DOI** in your pull request or by email to [earth-code@esa.int](mailto:earth-code@esa.int).  

If your workflow already has a DOI, include it in your metadata (e.g., using the [Scientific Citation Extension](https://github.com/stac-extensions/scientific/)):  

```json
"sci:doi": "https://doi.org/10.57780/s3d-83ad619"
```