---
order: 0
---
# Working with Platforms

EarthCODE partners with a growing ecosystem of platforms to provide FAIR and Open Earth Observation science tools and infrastructure!

<ClientOnly>
  <PlatformExplorer />
</ClientOnly>

This section is your starting point for exploring the platforms and tools available in the EarthCODE ecosystem. Whether you're launching a new project or streamlining an existing workflow, you'll find guidance on choosing the right platform and understanding its capabilities.

::: info Access and Sponsorship
- If you already have platform access, you can self‑sponsor usage.
- Otherwise, apply for resources via the ESA [Network of Resources (NoR)](https://nor-discover.org/).
- See the [NoR Tutorial](../../Training%20and%20Resources/NoR.md) for step‑by‑step guidance.
:::

## Choosing Tools and Platforms

EarthCODE provides single‑sign‑on (SSO) access to a growing number of EO platforms offering data, development tools, and compute. When you log in with your EarthCODE account, your identity carries across the **EarthCODE Portal**, the **EarthCODE Forum**, each **integrated platform**, and the **Open Science Catalog**.

For all EarthCODE‑integrated platforms, you can apply for Network‑of‑Resources (NoR) sponsorship to cover compute costs. Every platform includes FAIR tooling to automate publishing to the Open Science Catalog. Some platforms also support multiple workflow types, enabling cross‑compatibility between platforms.  

<img src="/img/terms/earthcode-platfrom-generic.svg" alt="EarthCODE Platform" style="display:block; margin: 1rem auto; max-width: 780px; width: 100%;" />

Platforms differ in four areas:

- Data availability and access methods
- Workflow development model
- Specialised hardware and infrastructure
- Visualisation tools

See [10 Minutes to EarthCODE](../../Getting%20started%20with%20EarthCODE/10%20minutes%20to%20EarthCODE.md) for examples. The tables below summarise EarthCODE platforms and their capabilities.


## Accessing Data on EarthCODE

Accessing data within the EarthCODE ecosystem is a two-step process that separates finding the data from using it.

First, you discover data using the Open Science Catalog. A search returns a standardized **STAC** record containing metadata and a link to the data. Once you have the STAC metadata, you can access the data. For cloud-optimized formats, the best practice is to use the data directly from EarthCODE integrated platforms.

The following tutorials provide hands-on examples of these access patterns:

* **Example: Finding and Accessing Data**
    -   [https://esa-earthcode.github.io/tutorials/prr-stac-download-example/](https://esa-earthcode.github.io/tutorials/prr-stac-download-example/)
* **Guide: Accessing the Catalog on Pangeo**
    -   [https://esa-earthcode.github.io/tutorials/stac-and-data-access/](https://esa-earthcode.github.io/tutorials/stac-and-data-access/)

More detailed examples for accessing data can be found on the main tutorials page.

## Developing and Publishing Workflows

EarthCODE's integrated platforms provide the tools to build, test, and ultimately publish your scientific workflows. They enable researchers to create reproducible experiments where your code, data inputs, and configuration are packaged together as a FAIR research object that can be executed locally or within the EarthCODE ecosystem. Below are some example of the tooling and development environments provided by EarthCODE's ecosystem

* **Example OpenEO Workflows**
    -   [https://esa-earthcode.github.io/tutorials/workflow/](https://esa-earthcode.github.io/tutorials/workflow/)
* **Example Developing an Analysis on Pangeo**
    -   [https://esa-earthcode.github.io/tutorials/pangeo-on-earthcode/](https://esa-earthcode.github.io/tutorials/pangeo-on-earthcode/)
* **Example: Publishing a Data Cube and Workflow to EarthCODE**
    -   [https://esa-earthcode.github.io/tutorials/publish-pangeo/](https://esa-earthcode.github.io/tutorials/publish-pangeo/)

More detailed examples for developing workflows can be found on the platform pages and main tutorial page.

<!-- ## Infrastructure Capabilities

| Platform                             | Data Access                                                                                             | Specialised Hardware & Services | Compatible Workflows     |
|--------------------------------------|----------------------------------------------------------------------------------------------------------|----------------------------------|---------------------------|
| [**DeepESDL**](./DeepESDL.md)        | Sentinel (1, 2, 3, 5P), CLMS, SPOT (4/5), Proba-V                                                        | GPU                         | Jupyter notebooks, OGC API Processes         |
| [**EDC EOxHub Workspaces**](./EDC/)    | Sentinel (1, 2, 3, 5P), Landsat-8, WorldView, CBERS-3/4, GOES-16/17, MODIS, PlanetScope, SPOT 6/7, SkySat, Pleiades, SRTM |  GPU                         | Jupyter notebooks, OGC API Processes         |
| [**Pangeo (via EDC)**](./EDC/Pangeo.md) | Sentinel (1, 2, 3, 5P), Landsat-8, WorldView, CBERS-3/4, GOES-16/17, MODIS, PlanetScope, SPOT 6/7, SkySat, Pleiades, SRTM | Dask Gateway, GPUs                     | Jupyter notebooks, OGC API Processes         |
| [**CDSE openEO Federation**](./OpenEO.md) | Sentinel (1, 2, 3)                                                                                       | GPU                              | OpenEO Process Graphs     |
| [**CoCalc (via EDC)**](./EDC/CoCalc.md) | Sentinel (1, 2, 3, 5P), Landsat-8, WorldView, CBERS-3/4, GOES-16/17, MODIS, PlanetScope, SPOT 6/7, SkySat, Pleiades, SRTM |  GPU                         | Jupyter notebooks, OGC API Processes         |
| [**Polar TEP (via EDC)**](./EDC/Polar-TEP.md) | Sentinel (1, 2, 3, 5P), Landsat-8, WorldView, CBERS-3/4, GOES-16/17, MODIS, PlanetScope, SPOT 6/7, SkySat, Pleiades, SRTM |  GPU                         | Jupyter notebooks, OGC API Processes         |

## FAIR Open Science Development Capabilities

| Platform                             | Development Tools                      | Supported Languages          | Visualization Tools                             | Produced Workflow Type    |
|--------------------------------------|----------------------------------------|------------------------------|--------------------------------------------------|----------------------------|
| [**DeepESDL**](./DeepESDL.md)        | Jupyter                                | Python                       | [xcube viewer](https://viewer.earthsystemdatalab.net/), Jupyter | OGC API Processes          |
| [**EDC EOxHub Workspaces**](./EDC/)    | Jupyter                                | Python                       | [eodash](https://eodash.org) - Dashboard as a Service, Jupyter                                          | OGC API Processes          |
| [**Pangeo (via EDC)**](./EDC/Pangeo.md) | Jupyter                                | Python                       | [eodash](https://eodash.org) - Dashboard as a Service, Jupyter                                          | OGC API Processes          |
| [**CDSE openEO Federation**](./OpenEO.md) | Jupyter, openEO Web Editor, openEO client libraries         | Python, R, JavaScript        | GUI, Jupyter                                     | OpenEO Process Graphs      |
| [**CoCalc (via EDC)**](./EDC/CoCalc.md) | Jupyter                                | Python                       | [eodash](https://eodash.org) - Dashboard as a Service, Jupyter                                          | OGC API Processes          |
| [**Polar TEP (via EDC)**](./EDC/Polar-TEP.md) | Jupyter                                | Python                       | [eodash](https://eodash.org) - Dashboard as a Service, Jupyter                                          | OGC API Processes          | -->


<!-- Additional links removed for clarity; see individual platform pages above. -->
