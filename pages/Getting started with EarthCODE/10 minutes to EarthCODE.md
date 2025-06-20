---
order: 2
---
#  10 minutes to EarthCODE

This quick-start guide is designed to help you begin working with EarthCODE in just a few minutes. Whether you're new to Earth Science, a researcher, or a developer, EarthCODE provides a collaborative, open development environment for efficient access to Earth observation data, workflows, and computational platforms.

## What is EarthCODE?
EarthCODE is a strategic initiative by the **European Space Agency (ESA)** designed to empower researchers in Earth System Science with FAIR tools and infrastructure, sponsored EO cloud platforms, cloud services.

## Accessing EarthCODE
To get started, sign in using your [GitHub](https://github.com/) account. EarthCODE provides secure authentication for accessing resources across platforms, including the [EarthCODE Forum](https://discourse-earthcode.eox.at). Once authenticated, you'll have access to all the tools, discussions, and data you need across EarthCODE’s integrated platforms.

Anyone can explore the [EarthCODE Portal](https://earthcode.esa.int), the [Open Science Catalog](https://opensciencedata.esa.int/catalog) or the [EarthCODE Forum](https://discourse-earthcode.eox.at) without signing in—just open the EarthCODE Portal and browse.

If you want to publish workflows and code, contribute to the forum, or use integrated platforms you need to sign in to the portal with your GitHub account. To publish scientific data to EarthCODE your project must be sponsored by ESA.

:::tip New to GitHub? First [create an account](https://github.com/join), then follow the Creating an Account and Logging In steps below to connect it to EarthCODE and start contributing.
:::

See [Accessing EarthCODE](../Getting%20started%20with%20EarthCODE/Accessing%20EarthCODE.md) for more information.


## Suggested Paths

Different users of EarthCODE have different needs and goals. To help you find the most relevant information quickly, we've outlined suggested paths based on your role and intentions.  

### Researchers Ready to Upload Their Data  

If you've completed your research and are looking to **publish your data to the Open Science Catalog (OSC)**, your main priority is to ensure your data is **persistent, properly formatted and publicly available**.  

Head directly to the [**Uploading Data**](../Technical%20Documentation/Data/Contributing%20to%20the%20EarthCODE%20Catalog.md) section to learn how to:  
- Prepare your data for publication.
- Create valid STAC objects and metadata.
- Publish data products to the Open Science Catalog.

This section will guide you through the entire upload process, including validating your metadata and ensuring your data assets are accessible.  


### New Researchers Starting a Project  

If you're just starting a new research project, it’s important to choose the **right platform and tools** from the beginning. Your path depends on several factors, including:  
- The **type of data** you intend to use.  
- Your **workflow preferences** (e.g., no-code platforms vs. Jupyter Notebooks).  
- Whether you need **machine learning capabilities**.
- Whether you need **storage capabilities**.
- The level of **collaboration and sharing** required.  

Visit the [**Platform Selection**](../Technical%20Documentation/Platforms/) section to get tailored recommendations on:  
- Selecting the best platform for your needs.  
- Understanding which tools will streamline your workflow.  
- Setting up your environment for collaborative or individual work.  

If you plan to publish your results later, it’s a good idea to also familiarize yourself with the [**Uploading Data**](../Technical%20Documentation/Data/Contributing%20to%20the%20EarthCODE%20Catalog.md) section to understand the requirements early on.  

### Users Exploring Published Research  

If you’re here to **explore existing research outputs**, the Open Science Catalog is your primary destination. The catalog allows you to:  
- **Search for projects** by area, variable, theme, and more.  
- Access **datasets, workflows, and documentation** directly from published research.  
- View detailed **metadata and provenance information** for each project.  

Go to the [**Open Science Catalog**](https://opensciencedata.esa.int/) to start browsing and discovering data relevant to your interests. Whether you're looking for specific datasets, workflows, or scientific results, the catalog provides a centralized and well-organized resource.  


## Choosing a Platform
EarthCODE provides you *single‑sign‑on* access to a growing number of EO platforms that host EO data, development tools and compute. Once you log in with your EarthCODE account, you carry the same identity across the **EarthCODE Portal**, the **EarthCODE Forum**, each **integrated platform**, and the **Open Science Catalog**.

For all of the EarthCODE integrated platforms, you can apply for Network‑of‑Resources (NoR) sponsorship to cover compute costs. Every platform comes with FAIR tooling that lets you publish results to the Open Science Catalog in an automated manner. Additionally, some platforms support creating and executing several types of workflows, which means that if you develop a workflow on them, it will be cross-compatible with other platforms supporting the same type of workflow.  

![EarthCODE Platform](/img/terms/earthcode-platfrom-generic.svg)

---

Platforms differ in four areas: the data they give you access to (and the way you access the data), the way you develop workflows on them, specialized hardware and infrastructure they offer, and the visualisation tools they offer.

---

### Data Access
Each platform provides a variety of EO data stored on the cloud and expose access in different ways. For example you can access the full Sentinel, Landsat, and MODIS archives via the Sentinel Hub API on the Euro Data Cube platform. By moving your compute to data, you eliminate the need to download and handle large files and benefit from distributed, cloud-optimized services to scale at the local, regional and global level of analysis. Moreover, by referencing inputs for your workflows through links to a platform, you ensure reusability and reproducibility of your data and workflows.
<!-- :::tip note to self - bigger, better, zoomable
::: -->
[![Sentinel Data https://eox.at/2024/08/sentinel-2-cloudless-2023/](/img/terms/eoxcloudless2023_mediterranean.jpg)](https://s2maps.eu)
*Sentinel Data at Scale - The Mediterranean - [Sentinel-2 cloudless 2023](https://s2maps.eu)*

---

### Workflow Development
EarthCODE platforms differ in interface and how you build and run workflows: some offer visual process designers, others provide Jupyter Notebooks with extensions, and several combine both. For example OpenEO provides an API, a set of client libraries, supporting modern programming languages such as Python, and a graphical interface. Many platforms also ship pre‑configured machine‑learning environments and ready‑made domain workflows. Pick the platform whose tooling matches the tools you already use and project goals; cloud execution keeps everything reproducible and scalable without local setup hassles. By using platforms to develop code you can directly publish end-to-end FAIR workflows that enable users to reproduce and reuse result datasets and code.

<!-- :::tip Note to self turn this to a gif of how the editor produces something
::: -->
![OpenEO Web Editor](/img/terms/open_eo_save_process.png)
*OpenEO Web Editor GUI*

---

### Specialized Hardware and Tools
Platforms vary in the compute they expose: some offer standard CPU and some offer tools for managing models (e.g. MLFlow) others provide options for fast storage devices or pre‑installed ML frameworks. DeepESDL, for example, supplies ready‑made GPU environments with PyTorch, TensorFlow and EO ML- specific libraries such as ml4xcube. Choosing a platform with the right hardware stack and specialised tools allows you to scale, worry less about infrastructure and spend more time on doing science.

<!-- :::tip Note to self, can we get a gif of a couple of training epochs with a great looking image at the end? Something to the effect of https://docs.dask.org/en/stable/ would be great
::: -->
![mlxcube](/img/terms/predictions_ml4xcube.png)
*DeepESDL ml4xcube [Air Temperature Prediction Plot](https://github.com/deepesdl/ML-Toolkits/blob/master/Examples/use_case_lst_at_pytorch_mlflow.ipynb)*

---

### Vizualization tools
Platforms differ in how they let you visualize published results from others and present your own results, some embed interactive map widgets, time‑series explorers or dashboard builders, some allow you to easily combine multiple data cubes. DeepESDL, for instance, includes the xcube viewer, a browser‑based component for slicing and animating data cubes. Robust in‑platform visualisation can streamline exploratory analysis and make it easier to share insights, so factor these capabilities into your platform choice.

<!-- :::tip Note to self, would be super cool to just embed it, can we do it instead of an image?
::: -->
<!-- <details> Potential solution to scroll snapping 
  <summary>Show DeepESDL viewer</summary>

  <iframe
    src="https://viewer.earthsystemdatalab.net/"
    title="DeepESDL visualisation tools"
    width="100%"
    height="700"
    loading="lazy"
  ></iframe>
</details> -->

<!-- <iframe  src="https://viewer.earthsystemdatalab.net/" title="DeepESDL Vizualization Tools" width="100%" height="700" loading="lazy" onload="this.blur()">
</iframe> -->

![DeepESDL](/img/terms/deepesdlseasfire.png)
*DeepESDL [Xcube Viewer](https://viewer.earthsystemdatalab.net/)*


<!-- <details> 
  <summary>Click here if the above example does not load</summary>
    <img src="/img/terms/deepesdlseasfire.png"/>
</details> -->


Visit the [Working with Platforms](../Technical%20Documentation/Platforms/) page to explore EarthCODE platform and for help to choose the platform that best suits your research objectives.

## Exploring the Open Science Catalog
After completing your research and preparing your final results for journal publication, your validated data products and code can be published in the [Open Science Catalog](https://opensciencedata.esa.int/). Only finalized outputs that are ready for publication and long-term storage should be submitted. The catalog includes datasets, workflows, and software that follow EarthCODE best practices, most of which originate from integrated platforms. It's your gateway to a wide range of reusable scientific resources, from environmental data to executable workflows.

### Validating and Publishing Data to the Catalog {#publishing-anchor}

EarthCODE allows you to validate products, workflows and experiments, ensuring they meet reproducibility and scientific standards. If you have an ESA-funded project, you can contribute to the platform by publishing your datasets, workflows, or experiments, making your work available for the broader community to use.

#### How data is published
The [Open Science Catalog](https://opensciencedata.esa.int/) is built on the [SpatioTemporal Asset Catalog (STAC)](https://stacspec.org/en), a standardised format for describing geospatial data. To contribute your research, you need to create valid STAC objects and commit them to the [`open-science-catalog-metadata-staging`](https://github.com/EOEPCA/open-science-catalog-metadata-staging) repository on GitHub. These STAC objects, stored as JSON files, will be automatically processed and rendered in the catalog.

Each STAC object should include all necessary references to ensure the reproducibility of your research, such as: 
- **Result data** - hosted on open-access data storage provided by ESA
- **Input data** - with full specification about spatial and temporal extent, bands, format, etc. This can also be part of the workflow.
- **Workflows** - executable processes that, when combined with input data, reproduce the results.

To improve discoverability, STAC objects also include metadata fields such as:
- Associated project
- Geospatial extent
- Variables
- Themes
- Earth Observation (EO) Mission (e.g. Sentinel, Landsat)

Because these objects must follow a strict predefined schema, ensuring compliance can be complex. However, EarthCODE provides example guides to help you structure your data correctly. Additionally, there are automated tools that simplify the creation of STAC objects, reducing manual effort.

You can read more on how to publish data in the [Uploading Your Data](../Technical%20Documentation/Data/Contributing%20to%20the%20EarthCODE%20Catalog.md) section, and check out our [examples](https://esa-earthcode.github.io/examples/).


#### Best Practices
EarthCODE makes FAIR publishing the default. Scientists are expected to:

- Deliver publication‑ready outputs: final datasets, workflows, and models, kept in persistent cloud storage with open, clearly stated licenses.  
- Attach rich, standards‑based metadata: STAC/ISO 19115 descriptions with DOIs, spatial‑temporal extents, provenance, and links to source data and code.  
- Maintain reproducibility: specify software environments, parameters, and lineage, ensuring others can rerun and verify results.

These practices align with the FAIR pillars:

| Findable | Accessible | Interoperable | Reusable |
|----------|------------|---------------|----------|
| DOIs, indexed metadata | HTTPS, STAC & OGC APIs | NetCDF, GeoTIFF, Zarr, CF vocabularies | Open licenses, provenance, community standards |

For detailed guide on best practices refer to the [Best Practices Page](../Community%20and%20Best%20Practices/).

### FAIR-enabling tools in EarthCODE

EarthCODE integrates FAIR tools and standards at every stage of the research lifecycle to make FAIR the default—without extra effort from scientists.


<!-- The key user persona (Figure 3) for EarthCODE is the earth observation scientist, for whom EarthCODE looks to provide capabilities such as: development and execution of workflows to capture large scale processes over climatic temporal scales; conducting complex multi-variate spatio-temporal analyses; running various analyses and models, including ML; setting up automated execution of algorithms, potentially recurrent; performing dataset and feature engineering; performing pipeline building and automation; accessing and processing heterogeneous data sources including online collections, data cubes and data at native resolution; having access to complete metadata for the datasets including data lineage and provenance, source and (pre-)processing; extracting, reading, writing and downloading data from APIs; storing, describing, publishing and documenting new data; using own data such as field measurements within scientific workflows; accessing the newest (EO) data available, programmatically; packaging, publishing and preserving the scientific outputs (data and code) with persistent identifiers (e.g., DOIs) in long-term storage repositories; setting up and using software environments; importing and running environments on EO Platforms; exporting environments (e.g. Docker, application package, openEO graph, etc) and sharing them; using Git, including provided by own organisation; managing versions of data, code and documentation; making projects/repositories citable; contributing to open source projects; publishing scientific results and other research outcomes on web, including scientific visualisations; discovering and exploring scientific results, data, code and documentation of other contributing researchers.  -->


| FAIR Tools                     | Description |
|-------------------------------|-------------|
| **Development**               | EarthCODE provides integrated platforms that provide different options for developing scientific workflows |
| **Data, Workflows and Platforms** | EarthCODE describes Data, workflows and platforms as FAIR objects. All items published on the Open Science Catalog follow EarthCODE metadata standards (STAC, OGC) for consistency across platforms and tools. |
| **EarthCODE Standard Variable Dictionary** | Shared [vocabulary](https://opensciencedata.esa.int/variables/catalog) for EO variables to ensure semantic consistency across datasets and workflows. |
| **Publishing Automation**     | EarthCODE platforms provide automation to support publishing of finalized data and workflows to the Open Science Catalog |
| **Publishing and Maintenance**| Users can maintain (or publish) FAIR data and workflows through the EarthCODE publishing GUI. |
| **Data Storage**              | EarthCODE provides persistent cloud storage via ESA PRR which ensures accessibility and long-term preservation. |
| **Finding Products and Workflows** | The Open Science Catalog makes metadata discoverable via STAC API and its webpage search. |
| **DOI Assignment** | EarthCODE generates DOIs for published data on the Open Science Catalog (in development). |
| **Data Access**               | EarthCODE published items provide data access. Data is served over HTTPS; metadata remains accessible even if access is restricted. |
| **Accessing Products**        | Published products are indexed in catalogs and linked to source storage for direct download or API access. |
| **Accessing Workflows**       | Workflows are versioned and stored in GitHub, linked with executable environments (platforms) for reproducibility. |
| **Re-Using Workflows**        | Users can directly re-use published workflows on the platform used to develop them, compatible platforms (or locally). |
| **Code Quality**              | Automated pipelines integrate linting, code quality checking and recommendation, and security scanning to ensure code is robust and reusable. |
| **Reproducibility**           | Published workflows are described in full as experiments, where you have information about inputs and configurations. EarthCODE provides the means to directly execute these experiments and reproduce data products. |
| **Intraoperability**          | Shared metadata schemas and API protocols ensure you can execute workflows across platforms and published data on EarthCODE follows common standards (Zarr, NetCDF) with standard variables (e.g. CF-Conventions). |
| **Visualisation and Findability** | Dashboards and linked visual previews make datasets easier to interpret and explore. |
| **Contacts and Communication**| Published items have contact details in the metadata, EarthCODE additionally provides a chat functionality in Discourse to connect and discuss.  |
| **Community**                 | Discourse forum, with published items linked directly to posts, and best practice documentation foster open collaboration. |




## Who Can Publish?

Anyone with an ESA-funded project is encouraged to publish in EarthCODE. We especially welcome contributions from those part of the ESA Science Clusters, as collaboration among these projects helps promote sharing and innovation in Earth Science research. If you are not ESA-funded and would like to publish your workflows or data to EarthCODE, contact us at: <earth-code@esa.int>


