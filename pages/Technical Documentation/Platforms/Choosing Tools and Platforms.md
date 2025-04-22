# Choosing Tools and Platforms

This section will guide you through the EarthCODE platforms and their key capabilities.

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



<!-- | Platform             | Collections                                                | Compute Resources | Execution               | Supported Languages      |
|----------------------|-------------------------------------------------------------|--------------------|--------------------------|---------------------------|
| **DeepESDL**         | Sentinel (1, 2, 3, 5P), CLMS, SPOT (4/5), Proba-V           | CPU, GPU           | Jupyter                  | Python                    |
| **EDC EOxHub**       | Sentinel (1, 2, 3, 5P), Landsat-8, WorldView, CBERS-3/4, Goes-16/17, MODIS, PlanetScope, Spot 6/7, SkySat, Pleiades, SRTM | CPU, GPU           | Jupyter                  | Python                    |
| **OpenEO & Copernicus** | Sentinel (1, 2, 3)                                       | CPU | Jupyter, GUI          | Python, R, JavaScript     | 

Maybe split the table below in two? One for data access and one for 
 -->

<!-- 

**Infrastructure Capabilities**
Platform
Data Access
Specialised Hardware & Services
Compatible Workflows

**FAIR Open Science Development Capabilities**
Platform
Development Tools
Supported Languages
Visualization Tools
Produced Workflow Type



| Platform | Data Access | Specialised Hardware & Services | Development Tools | Supported Languages | Visualization Tools | Compatible Workflows
|--------- |-------------|---------------------------------|----------------------------------|---------------------|---------------------|-------|
| [**DeepESDL**](./DeepESDL.md)         | Sentinel (1, 2, 3, 5P), CLMS, SPOT (4/5), Proba-V                                                        | CPU, GPU                         | Jupyter                  | Python                    | Jupyter                  | [xcube viewer](https://viewer.earthsystemdatalab.net/) | OGC API Processes
| [**EDC EoX Workspace**](./EDC.md)              | Sentinel (1, 2, 3, 5P), Landsat-8, WorldView, CBERS-3/4, GOES-16/17, MODIS, PlanetScope, SPOT 6/7, SkySat, Pleiades, SRTM | CPU, GPU                         | Jupyter                  | Python                    | Jupyter                  | OGC API Processes
| [**Pangeo (via EDC)**](./EOxHub_Pangeo.md)     | Sentinel (1, 2, 3, 5P), Landsat-8, WorldView, CBERS-3/4, GOES-16/17, MODIS, PlanetScope, SPOT 6/7, SkySat, Pleiades, SRTM | Dask Gateway                      | Jupyter                  | Python                    | Jupyter                  | OGC API Processes
| [**openEO & Copernicus**](./OpenEO.md) | Sentinel (1, 2, 3)                                                                                   | CPU                              | Jupyter, OpenEO Process Editor             | Python, R, JavaScript     | GUI, Jupyter             | OpenEO Process Graphs
| [**CoCalc (via EDC)**](https://cocalc.com/)       | Sentinel (1, 2, 3, 5P), Landsat-8, WorldView, CBERS-3/4, GOES-16/17, MODIS, PlanetScope, SPOT 6/7, SkySat, Pleiades, SRTM | CPU, GPU                         | Jupyter                  | Python                    | Jupyter                  | OGC API Processes -->

