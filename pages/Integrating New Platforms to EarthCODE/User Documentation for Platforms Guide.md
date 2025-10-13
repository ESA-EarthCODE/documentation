---
order: 3
---
# User Documentation for Platforms Guide
:::warning 🛠️ Page Under Development
Content is being actively developed and updated for this page. EarthCODE's documentation is a living document and will be continuously updated with detailed reviews.
:::


<!-- <script setup>
import AcronymsTable from '../Getting started with EarthCODE/key-terms-and-concepts.md'
</script>

<AcronymsTable /> -->



Guidance on how to integrate external cloud computing services and other relevant platforms to EarthCODE.

You need to maintain your own documentation and provide documentation about your EarthCODE integration, to this portal.

Note that technical documentation about the inner workings of your platform and it's integration with EarthCODE is separate from this. This is the user-facing documentation for your platform on EarthCODE.


# How to Contribute

Clone this repo
Create a new branch
Make a new .md file under pages/Technical Documentation/Platforms/your-platform.md (vitepress workflow explain it in a nutshell)
Copy the template given bellow and fill it out. Guidance is provided below. Remove sections that are not relevant.
Try to run npm dev build to make sure it builds
Make a pull merge request back to main
We will manually review and merge


# Format
Please follow the format guidelines below when creating EarthCODE platform documentation pages. Consistency across platform entries helps users easily compare capabilities and navigate the documentation site.

This does not aim to be an extensive documentation about your platform, just a summary of its key features and its integrations which EarthCODE users will use.

## Title and File name
Each platform documentation page must begin with a properly formatted title and use a consistent file naming convention:
- The Markdown file should be named after your platform, using **PascalCase with no spaces**.
    Example: `EDC.md`, `DeepESDL.md`, `OpenEO.md`
- The first line of the document should be a `#` level heading with the **exact same name** as the file.  
  Example:
  ```markdown
  # EDC

## About
Add your platform description inside the `<FeatureCard>` block provided in the template - this will render as a styled summary section at the top of your documentation page.

The **About** section should include a short overview of your platform, this can include:
- Who the platform is primarily designed for (e.g. scientists for polar science, EO data scientists, etc..)
- The types of science or domains it supports best (e.g. climate, land monitoring, atmospheric studies)
- What kind of workflows it enables (e.g. datacube analytics, ML inference, EO product generation)

Upload your logo to the following path:  
`/public/img/platforms/platform_logos/your-platform-name.png`

```markdown
<FeatureCard img="/img/platforms/platform_logos/deepesdl.webp" alt="DeepESDL Logo">
DeepESDL is designed for interactive Earth System Data Lab exploration and analytics. It provides ready-to-use EO datacubes and powerful cloud-based tooling for data scientists and researchers. Ideal for climate, land, and atmosphere research, the platform supports datacube-driven workflows and reproducible experiment design.
</FeatureCard>
```

## Summary

This should be a summary table of your platforms' capabilites. This helps other users and project partners understand what your platform offers. Entries should be concise, accurate, and written in the context of how your platform supports FAIR, open, and reproducible science. The tables will be directly copied in the [Platforms Page](../Technical%20Documentation/Platforms/) of the documentation.

---

### Infrastructure Capabilities

| Field                           | Description and Guidance                                                                                                         |
|----------------------------------|----------------------------------------------------------------------------------------------------------------------------------|
| **Platform**                    | Provide the name of your platform and a link to your EarthCODE documentation page hosted on this site. |
| **Data Access**                 | Describe which datasets are available on your platform. Include key EO missions (e.g. Sentinel-1, MODIS, Landsat), thematic focus areas, and whether access is via APIs, STAC, OGC endpoints, or catalog services. |
| **Specialised Hardware & Services** | Summarise what compute infrastructure is available. This could include for example aspects like access to GPUs, TPUs, Machine Learning Services (e.g. Seldon Core for inference, MLflow), support for scalable frameworks like Dask, batch processing, orchestration services, or anything that enables high-performance data processing. |
| **Compatible Workflows**       | Indicate the types of workflows your platform supports execution of. For example, OGC API Processes, OpenEO Process Graphs, MLflow pipelines, or Application Packages. |

---

### FAIR Open Science Development Capabilities

| Field                           | Description and Guidance                                                                                                         |
|----------------------------------|----------------------------------------------------------------------------------------------------------------------------------|
| **Platform**                    | Provide the name of your platform and a link to your EarthCODE documentation page hosted on this site. |
| **Development Tools**          | Describe the tools available for scientists to build, test, and run experiments. This could include Jupyter, GUI-based editors, sepcialised SDKs/APIs, or custom development environments. |
| **Supported Languages**        | List the programming languages and frameworks supported by your platform (e.g. Python, R, JavaScript). |
| **Visualization Tools**        | Summarise built-in tools that allow users to visualise data. This may include datacube viewers, dashboard interfaces, time-series plots, maps, or support for WMS/WMTS. |
| **Produced Workflow Type**     | Describe the format or interface of the workflows produced by your platform. For example, OGC API Processes, OpenEO Process Graphs, or other reusable, workflows. |
---

When filling out your entry, focus on what users can do with your platform in the context of EarthCODE. Avoid overly general descriptions—aim for clarity, specificity, and practical insight into your platform’s capabilities. We would advise filling this table last and summarizing from the other sections.

## Developing and Publishing Workflows & Data

In this section, explain how users create, manage, test and publish their workflows and data products using your platform, and how these integrate with EarthCODE.

Generally try and provide visual aids to help users follow along:
- Screenshots or animated GIFs of the development UI  
- Diagrams of the workflow publishing interface  
- Links to demo videos or tutorials  

You can upload your assets under a folder for your platform, e.g.: /pages/public/img/platforms/platform_materials/yourplatformname/

and reference them in Markdown like so:
```markdown
![Workflow Editor](/img/platforms/platform_materials/yourplatformname/editor_screenshot.png)
```

**Learn By Example**
Provide an example notebook/code in the [Examples](https://esa-earthcode.github.io/tutorials/) section of this guide through this repository: [https://github.com/ESA-EarthCODE/examples](https://github.com/ESA-EarthCODE/examples)

**Developing Workflows**

First describe your platform’s dev environment. Include details such as:
- The development interface (e.g. Jupyter notebooks, CLI, visual editor)
- Any SDKs, APIs or templates you provide to bootstrap new workflows
- How users package algorithms as reusable workflows (e.g. container recipes, CWL, openEO graphs)
- Versioning / code manageemnt mechanisms
- Links to further documentation

**Example Platfrom Workflows Published to EarthCODE**

Please link to one or more workflows on the Open Science Catalog that demonstrate a real-world use case, published to EarthCODE.

**Publishing to EarthCODE**

Explain how your platform publishes data and workflows to EarthCODE, include details such as:
- What steps are needed in summary
- Links to further documentation

## Data Access
In this section, explain which datasets your platform makes available and how users can retrieve them. Describe the range of Earth Observation collections (for example Sentinel‑1, Landsat, MODIS) as well as any domain‑specific or value‑added archives. Indicate whether data is available in cloud‑optimised formats such as Cloud‑Optimized GeoTIFF (COG) or Zarr, and whether spatial or temporal subsetting is supported.

Provide details on how to access the data — this might include STAC API endpoints or direct object‑storage URLs. If you offer SDKs or CLI tools, show a brief example.

Include links to documentation pages where the users can further explore data access and these endpoints.

## Specialised Hardware & Services

Describe any specialised hardware or additional PaaS (platform as a service) features your platform provides. For example this could be GPU or TPU availability, support for parallel frameworks like Dask or Spark, and any machine learning services you provide (for example Seldon Core for inference or MLflow for training).

You can include examples of how these resources are created or used in your platform, e.g:

```python
from dask_gateway import Gateway
gateway = Gateway()
cluster = gateway.new_cluster(worker_cores=4, worker_memory="16GiB", worker_gpu=1)
client = cluster.get_client()
```
Include links to documentation pages where the users can further explore the specialised hardware & services you offer.


## Visualization Tools

Describe the built‑in capabilities and integrations your platform provides for exploring and visualizing data. You might include:

- Interactive dashboards or web‑based viewers  
- Embedded plot widgets or charting libraries  
- Support for data cube exploration / analytics  
- Live links to public demos or dashboards  

Include links to documentation pages where the users can further explore the visualization tools you offer.


## Right Sizing and Network of Resources

Summarize how users obtain and configure your service, including the available “sizes” or tiers (e.g. small/medium/large, CPU/Mem resources, etc..). This could just be a brief summary of what you have on the Network on Resources.

If possible, offer rough guidance on what resources users might need to apply for in common scenarios for your platform.

Include a link to the NoR page of your platform at the end of this section.

## Tutorials

Provide a list of currated tutorials for anyone interested in learning about your platform.

## Support and Communities
Describe where users can get support for the platform (technical issues and/or general querries) - provide links to support forms, emails or other website links.

If you have a community forum, please share a link here and provide a summary of it.

## Full Documentation Can be Found At
Finally, provide a link to your comprehensive documentation, API reference, tutorials and the page where users can find more about your platform offering.


# Template

```markdown
# Platform Name

*example-platform-website.com*

## About

<FeatureCard img="/img/EarthCODE_kv_transparent.png" alt="Platform Logo">
Lorem ipsum description of a platform

- **Analyze events or phenomena** from multiple perspectives  
- Access **multiple data sources** and compare or correlate variables simultaneously  
- **Customize your data pipeline** to suit specific needs  
- **Try it out for free** and kick‑start your Earth Observation application!
</FeatureCard>

## Summary

**Infrastructure Capabilities**

| Platform                             | Data Access                                                                                             | Specialised Hardware & Services | Compatible Workflows     |
|--------------------------------------|----------------------------------------------------------------------------------------------------------|----------------------------------|---------------------------|

**FAIR Open Science Development Capabilities**
| Platform                             | Development Tools                      | Supported Languages          | Visualization Tools                             | Produced Workflow Type    |
|--------------------------------------|----------------------------------------|------------------------------|--------------------------------------------------|----------------------------|


### Developing Workflows

**Learn By Example**

**Developing Workflows**

**Example Platfrom Workflows Published to EarthCODE**

**Publishing to EarthCODE**

### Data Access

### Specialised Hardware & Services

### Visualization Tools

## Right Sizing and Network of Resources

*link-to-NoR-page*

## Tutorials

## Support and Communities

## Full Documentation Can be Found At
*example-platform-website.com/documentation*
```



---

For review reference this should render as below:
markdown
# Platform Name

*example-platform-website.com*

## About

<FeatureCard img="/img/EarthCODE_kv_transparent.png" alt="Platform Logo">
Lorem ipsum description of a platform

- **Analyze events or phenomena** from multiple perspectives  
- Access **multiple data sources** and compare or correlate variables simultaneously  
- **Customize your data pipeline** to suit specific needs  
- **Try it out for free** and kick‑start your Earth Observation application!
</FeatureCard>

## Summary

**Infrastructure Capabilities**

| Platform                             | Data Access                                                                                             | Specialised Hardware & Services | Compatible Workflows     |
|--------------------------------------|----------------------------------------------------------------------------------------------------------|----------------------------------|---------------------------|

**FAIR Open Science Development Capabilities**
| Platform                             | Development Tools                      | Supported Languages          | Visualization Tools                             | Produced Workflow Type    |
|--------------------------------------|----------------------------------------|------------------------------|--------------------------------------------------|----------------------------|


### Developing Workflows

**Developing Workflows**

**Example Platfrom Workflows Published to EarthCODE**

**Publishing to EarthCODE**

### Data Access

### Specialised Hardware & Services

### Visualization Tools

## Right Sizing and Network of Resources

*link-to-NoR-page*

## Support and Communities

## Full Documentation Can be Found At
*example-platform-website.com/documentation*