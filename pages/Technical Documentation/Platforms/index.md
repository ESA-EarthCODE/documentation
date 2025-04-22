---
order: 0
---
# Working with Platforms

This section is your starting point for exploring the platforms and tools available in the EarthCODE ecosystem. Whether you're launching a new project or looking to streamline your existing workflow, you'll find guidance here on how to choose the right platform and their key capabilities.


Here provide only the information that the platforms can be self-sponsored (for those who have already access to them) or can be requested by ESA NOR portal (provide a link and the link to tutorial, for those new to NoR) 

The EarthCODE integrated platforms can either be self-sponsored if your team already have access to them. You can alternatively apply for sponsorship from the [Network of Resources](https://nor-discover.org/) for access & resources on your selected platform. Please refer to the [NoR Tutorial Page](../../Training%20and%20Resources/NoR.md) for more details about making a NoR application.

---

## Choosing Tools and Platforms

EarthCODE provides you *single‑sign‑on* access to a growing number of EO platforms that host EO data, development tools and compute. Once you log in with your EarthCODE account, you carry the same identity across the **EarthCODE Portal**, the **EarthCODE Forum**, each **integrated platform**, and the **Open Science Catalog**.

For all of the EarthCODE integrated platforms, you can apply for Network‑of‑Resources (NoR) sponsorship to cover compute costs. Every platform comes with FAIR tooling that lets you publish results to the Open Science Catalog in an automated manner. Additionally, some platforms support creating and executing several types of workflows, which means that if you develop a workflow on them, it will be cross-compatible with other platforms.  

![EarthCODE Platform](/img/terms/earthcode-platfrom-generic.svg)

Platforms differ in four areas: the data they give you access to (and the way you access the data), the way you develop workflows on them, specialized hardware and infrastructure they offer, and the visualisation tools they offer. See [10 Minutes to EarthCODE](../../Getting%20started%20with%20EarthCODE/10%20minutes%20to%20EarthCODE.md) for some examples of platform featues. Additionally, different platforms support different sized options for computing resources and different languages. The tables below is an up-to-date summary of the EarthCODE platforms and the capabilities they provide.


## Infrastructure Capabilities

| Platform                             | Data Access                                                                                             | Specialised Hardware & Services | Compatible Workflows     |
|--------------------------------------|----------------------------------------------------------------------------------------------------------|----------------------------------|---------------------------|
| [**DeepESDL**](./DeepESDL.md)        | Sentinel (1, 2, 3, 5P), CLMS, SPOT (4/5), Proba-V                                                        | GPU                         | OGC API Processes         |
| [**EDC EoX Workspace**](./EDC.md)    | Sentinel (1, 2, 3, 5P), Landsat-8, WorldView, CBERS-3/4, GOES-16/17, MODIS, PlanetScope, SPOT 6/7, SkySat, Pleiades, SRTM |  GPU                         | OGC API Processes         |
| [**Pangeo (via EDC)**](./EOxHub_Pangeo.md) | Sentinel (1, 2, 3, 5P), Landsat-8, WorldView, CBERS-3/4, GOES-16/17, MODIS, PlanetScope, SPOT 6/7, SkySat, Pleiades, SRTM | Dask Gateway, GPUs                     | OGC API Processes         |
| [**openEO & Copernicus**](./OpenEO.md) | Sentinel (1, 2, 3)                                                                                       | GPU                              | OpenEO Process Graphs     |
| [**CoCalc (via EDC)**](https://cocalc.com/) | Sentinel (1, 2, 3, 5P), Landsat-8, WorldView, CBERS-3/4, GOES-16/17, MODIS, PlanetScope, SPOT 6/7, SkySat, Pleiades, SRTM |  GPU                         | OGC API Processes         |

## FAIR Open Science Development Capabilities

| Platform                             | Development Tools                      | Supported Languages          | Visualization Tools                             | Produced Workflow Type    |
|--------------------------------------|----------------------------------------|------------------------------|--------------------------------------------------|----------------------------|
| [**DeepESDL**](./DeepESDL.md)        | Jupyter                                | Python                       | [xcube viewer](https://viewer.earthsystemdatalab.net/), Jupyter | OGC API Processes          |
| [**EDC EoX Workspace**](./EDC.md)    | Jupyter                                | Python                       | Jupyter                                          | OGC API Processes          |
| [**Pangeo (via EDC)**](./EOxHub_Pangeo.md) | Jupyter                                | Python                       | Jupyter                                          | OGC API Processes          |
| [**openEO & CDSE**](./OpenEO.md) | Jupyter, openEO Process Editor         | Python, R, JavaScript        | GUI, Jupyter                                     | OpenEO Process Graphs      |
| [**CoCalc (via EDC)**](https://cocalc.com/) | Jupyter                                | Python                       | Jupyter                                          | OGC API Processes          |


<!-- To compare platforms at a glance start with [**Choosing Tools and Platforms**](./Choosing%20Tools%20and%20Platforms.md). -->

<!-- For detailed information about each supported platform, including their capabilities and how they can support your specific use case, visit the individual platform pages:
- [**DeepESDL**](DeepESDL.md)
- [**EDC EOxHub**](EOxHub_Pangeo.md)
- [**OpenEO**](./OpenEO.md) -->
<!-- 

---

- [Copernicus Data Space Ecosystem (CDSE)](https://dataspace.copernicus.eu): Access and process earth observation datasets in the Copernicus Data Space Ecosystem with the openEO API.
- [Deep Earth System Data Laboratory (DeepESDL)](https://www.earthsystemdatalab.net/): Access and process data, and apply machine learning (ML) methods on Xarray Earth System Data Cubes (ESDC).
- [Euro Data Cube](https://eurodatacube.com/): A suite of services to access and process satellite data and develop applications.
- EOxHub/CoCalc: Process Earth observation data in the cloud with live collaboration on code.
- EOxHub/Pangeo: Perform high-performance computations on Earth Science data leveraging geoscience libraries. -->
