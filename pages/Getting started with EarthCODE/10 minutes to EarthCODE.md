---
order: 2
---
#  10 minutes to EarthCODE

This quick-start guide is designed to help you begin working with EarthCODE in just a few minutes. Different users of EarthCODE have different needs and goals. To help you find the most relevant information quickly, we've outlined suggested paths based on your role and intentions and then go into more detail about the core functionality of EarthCODE.


## What is EarthCODE?
EarthCODE is a strategic initiative by the **European Space Agency (ESA)** designed to empower researchers in Earth System Science with FAIR tools and infrastructure, sponsored EO cloud platforms and cloud services:
1. You can **access data, develop your workflows and run your experiments** on [integrated EO platforms](https://testing.earthcode.eox.at/computational-research). [Network of Resources (NoR)](https://nor-discover.org/) sponsored compute is also available.
2. You can **store results** in the [ESA Project Results repository (PRR)](https://esa-earthcode.github.io/tutorials/index-1/).
3. You can **explore state-of-the-art data, workflows, and project information** available on the [Open Science Catalog](https://opensciencedata.esa.int/). You can also [publish](../Technical%20Documentation/Open%20Science%20Catalog/Contributing%20to%20the%20Open%20Science%20Catalog.md) your own data, workflows, and project information to it.
5. You can **engage** the EarthCODE and broader EO community [EarthCODE Forum](https://discourse-earthcode.eox.at/), which is directly connected to the catalog.


## Accessing EarthCODE resources

Browsing and exploring the Open Science Catalog, the ESA Project Results Repository (ESA PRR), and the EarthCODE Forum are freely accessible to anyone via their respective websites. Furthermore, no login is required for downloading data from the Open Science Catalog or the ESA PRR.

If you wish to add, remove, or update information in the Open Science Catalog, the ESA PRR, or EarthCODE Forum, you must create a GitHub account.

Similarly, you need an account to access the integrated platforms or the  EarthCODE portal.

There is not authentication required to explore or download information from the [EarthCODE Portal](https://earthcode.esa.int), the [Open Science Catalog](https://opensciencedata.esa.int/catalog), the [EarthCODE Forum](https://discourse-earthcode.eox.at), or the [ESA Project Results Repository (PRR)](https://eoresults.esa.int/).

If you want to publish workflows and code, contribute to the forum, use integrated platforms, the EarthCODE workspace you need a GitHub account. 

See [Accessing EarthCODE](../Getting%20started%20with%20EarthCODE/Accessing%20EarthCODE.md) for more information.


:::tip New to GitHub? First [create an account](https://github.com/join), then follow the Creating an Account and Logging In steps below to connect it to EarthCODE and start contributing.
:::



## Suggested Paths

### Researchers looking to contribute to the Open Science Catalog  

If you have 1) completed your research; 2) have your data/workflow prepared in a persitent online repository; and 3) are looking to ** contribute to the Open Science Catalog (OSC)**, head to the [**Contributing to the OSC section**](../Technical%20Documentation/Open%20Science%20Catalog/Contributing%20to%20the%20Open%20Science%20Catalog.md)).


### Researchers looking for persistent storage 

If you've 1) completed your research; and 2) want to store your data/workflow prepared in a persitent online repository you can use the ESA Project Results Repository to do so. Head to the [**ESA Project Results Repository (PRR) section**](../Technical%20Documentation/ESA%20Project%20Results%20Repository/index.md)) for instructions how to do this. After you have stored your data/workflow in the PRR, add an entry for it in the [Open Science Catalog](../Technical%20Documentation/Open%20Science%20Catalog/Contributing%20to%20the%20Open%20Science%20Catalog.md)).

### New Researchers Starting a Project / Looking for a Platform  

If you're just starting a new research project, it’s important to choose the **right EarthCODE platform and tools** from the beginning. Your path depends on several factors, including:  
- The **type of data** you intend to use.  
- Your **workflow preferences** (e.g., no-code platforms vs. Jupyter Notebooks).  
- Whether you need **machine learning capabilities**.
- Whether you need **storage capabilities**.
- The level of **collaboration and sharing** required.  

Visit the [**Platform Selection**](../Technical%20Documentation/Platforms/) section to get tailored recommendations on:  
- Selecting the best platform for your needs.  
- Understanding which tools will streamline your workflow.  
- Setting up your environment for collaborative or individual work.  

It’s also a good idea to also familiarize yourself with the [**Contributing to the OSC section**](../Technical%20Documentation/Open%20Science%20Catalog/Contributing%20to%20the%20Open%20Science%20Catalog.md) to understand the requirements early on.  

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


## Publishing to the Open Science Catalog

To publish your scientific results to the Open Science Catalog, you must:

1.  Host your **datasets**, **code** and **documentation** online.

::: details Proprietary data
Sometimes parts of the data and workflows are protected or private. Although not open, these experiments can still become FAIR and added to the catalogue. The process for adding the entries is the same, until the review, when the EarthCODE team will reach out with specific questions regarding your data.
:::

2. Create entries (STAC Collections) that describe the **dataset files**, **code** and their relationships to existing items in the catalog. These entries follow the [OSC STAC specification](https://github.com/stac-extensions/osc).

3. Request to add them to the PRR via one of the three options described below.

See the [Contributing guide](../Technical%20Documentation/Open%20Science%20Catalog/Contributing%20to%20the%20Open%20Science%20Catalog.md) for a detailed exaplanation or go directly to the [examples](https://esa-earthcode.github.io/tutorials/index-2/).



## Storing data in the ESA Project Results Repository

The [ESA Project Results Repository (PRR)](https://eoresults.esa.int/) provides long term storage for research outcomes. It provides access to data, workflows, experiments and documentation from ESA Projects organised across Collections, accessible via the STAC API. To upload you have to:

1. Generate a STAC Collection that is associated to your files. The STAC Collection provides metadata about your files and makes them searchable and machine readable.
2. Contact the [EarthCODE team](mailto:earthcode@esa.int) to request the upload.
3. Transfer the data and metadata to the EarthCODE team, who will upload it to the PRR. 

Head to the [PRR guide](../Technical%20Documentation/ESA%20Project%20Results%20Repository/) to see more details and examples how to generate metadata and upload it .

## Exploring the Open Science Catalog

The [Open Science Catalog](https://opensciencedata.esa.int/) includes datasets, workflows, and software that follow EarthCODE best practices, most of which originate from integrated platforms. It's your gateway to a wide range of reusable scientific resources, from earth observation data to executable workflows.

You can head directly to the website to explore the portal, there is no login required.

You can find more information about the OSC functionality in the [Discovering OSC Resources guide](../Technical%20Documentation/Open%20Science%20Catalog/Discovering%20Resources.md).
