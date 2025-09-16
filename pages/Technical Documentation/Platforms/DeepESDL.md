# Deep Earth System Data Laboratory (DeepESDL)

:::warning 🛠️ Page Under Development 
    Content is being actively developed and updated for this page. EarthCODE's documentation is a living document and will be continuously updated with detailed reviews. 
:::

Found out more at: [earthsystemdatalab.net/](https://earthsystemdatalab.net/)

## About

<FeatureCard img="/img/platforms/platform_logos/deepesdl.png" alt="DeepESDL Logo">

Deep Earth System Data Laboratory, a platform providing analysis-ready data cubes in a powerful virtual environment
for the Earth Science research community. DeepESDL offers a full suite of services to facilitate data exploitation, 
share data and source code, and publish results. Special emphasis is placed on supporting machine learning and 
artificial intelligence approaches, including preparation of AI-ready datasets, integrated programming environments, 
and scalable processing resources.

</FeatureCard>

## Summary

**Infrastructure Capabilities**

| Platform                                                                                               | Data Access                                                                                                              | Specialised Hardware & Services                                                                | Compatible Workflows                                |
| ------------------------------------------------------------------------------------------------------ |--------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------|-----------------------------------------------------|
| [DeepESDL](https://esa-earthcode.github.io/documentation/Technical%20Documentation/Platforms/DeepESDL) | CDS, CMEMS, CLMS, EOPF Sample Service, ESA CCI, ESA SMOS, GEDI, Sentinel Hub, STAC, Zenodo | GPU, CPU, Dask cluster, [geodb](https://xcube-dev.github.io/xcube-geodb/),  MLflow, TensorFlow | Jupyter notebooks |

**FAIR Open Science Development Capabilities**

| Platform | Development Tools                                 | Supported Languages    | Visualization Tools                                                                                                                                       | Produced Workflow Type        |
| -------- |---------------------------------------------------| ---------------------- |-----------------------------------------------------------------------------------------------------------------------------------------------------------| ----------------------------- |
| [DeepESDL](https://esa-earthcode.github.io/documentation/Technical%20Documentation/Platforms/DeepESDL) | JupyterLab, conda environments, [xcube](https://xcube.readthedocs.io/en/latest/), Git | Python | [xcube Viewer](https://viewer.earthsystemdatalab.net/), [Lexcube](https://earthsystemdatalab.net/guide/visualisation/lexcube-viewer/), [4D Viewer](https://4dviewer.com/), Jupyter | Jupyter notebooks  |

---

### Developing Workflows

**Learn By Example**  
(tbd)

**Developing Workflows**  
(tbd)

**Publishing to EarthCODE**  

Publishing to EarthCODE within DeepESDL is possible with `deep-code`.
`deep-code` is a lightweight Python tool for publishing datasets and scientific workflows from DeepESDL 
directly to the EarthCODE open-science-catalog. It provides both a command-line interface (CLI) and a 
Python API for flexible use.

See the [DeepESDL documentation](https://earthsystemdatalab.net/guide/earthcode/) for detailed information.

---

### Data Access

DeepESDL provides access to a broad range of Earth System datasets through a unified, analysis-ready data 
cube framework with [xcube](https://xcube.readthedocs.io/en/latest/dataaccess.html#available-data-stores). 

Supported sources include: 

- [Copernicus Climate Data Store (CDS)](https://cds.climate.copernicus.eu/)
- [Copernicus Marine Service (CMEMS)](https://marine.copernicus.eu/)
- [Copernicus Land Monitoring Service (CLMS)](https://land.copernicus.eu/en/dataset-catalog)
- [DeepESDL Public Data Cubes](https://earthsystemdatalab.net/guide/data/pre-generated/)
- [EOPF Sample Service](https://zarr.eopf.copernicus.eu/)
- [ESA Climate Data Centre (CCI)](https://climate.esa.int/en/data/#/dashboard)
- [ESA SMOS](https://earth.esa.int/eogateway/missions/smos)
- [Global Ecosystem Dynamics Investigation (GEDI)](https://gedi.umd.edu/)
- [Sentinel Hub](https://www.sentinel-hub.com/)
- [SpatioTemporal Asset Catalog (STAC)](https://stacspec.org/en/about/datasets/)
- [Zenodo](https://zenodo.org/)

An expanded overview of supported data sources is provided [here](https://earthsystemdatalab.net/data/).

### Specialised Hardware & Services

CPU, GPU, Dask clusters, MLflow, TensorFlow, [ml4xcube](https://earthsystemdatalab.net/ml-toolkit/),
[geodb](https://xcube-dev.github.io/xcube-geodb/), [xcube Viewer](https://xcube-dev.github.io/xcube-viewer/)

### Visualization Tools

DeepESDL provides several visualization options designed to make multi-dimensional Earth system data cubes
more accessible, moving beyond standard Python plotting libraries.

####  xcube Viewer

DeepESDL integrates the **[xcube Viewer](https://xcube-dev.github.io/xcube-viewer/)**, a web-based tool
for interactive browsing and inspection of data cubes.

* It allows users to navigate data across space, time, and variables.
* The viewer can also be embedded directly in **Jupyter Notebooks**, enabling interactive exploration alongside 
  code and analysis.
* A public deployment at [viewer.earthsystemdatalab.net](https://viewer.earthsystemdatalab.net) provides access 
  to shared datasets without requiring additional setup.
* For more information see the dedicated [documentation](https://xcube-dev.github.io/xcube-viewer/).

#### Lexcube

[**Lexcube**](https://earthsystemdatalab.net/guide/visualisation/lexcube-viewer/) is available both as 
a **Jupyter Notebook integration** and as a **standalone web application**.

* Inside notebooks, it offers lightweight interactive visualization of data layers inline with the workflow.
* As a web app, Lexcube enables direct data cube inspection through a browser interface, useful for sharing results 
  beyond the notebook environment.
* For more information see the [documentation](https://earthsystemdatalab.net/guide/visualisation/lexcube-viewer/).

#### 4D Viewer

The [**4D Viewer**](https://earthsystemdatalab.net/guide/visualisation/4d-viewer/) is a standalone tool for
exploring the full dimensionality of Earth system data, including time and vertical axes.

* The 4D Viewer is suited for comprehensive analysis of highly complex datasets where multiple dimensions need to
  be visualized simultaneously.
* For more information see the [documentation](https://earthsystemdatalab.net/guide/visualisation/4d-viewer/).


DeepESDL also supports dissemination of datasets via public **xcube Viewer applications**, ensuring that published 
data products are accessible and explorable by the wider community.

---

## Right Sizing and Network of Resources

See [Network of Resources](https://portfolio.nor-discover.org/Service/Brockmann-DeepESDL/SponsoringWizardPricelist) for
details on access through ESA’s supporting programmes or this [overview](https://portfolio.nor-discover.org/Service/Brockmann-DeepESDL/PriceList?asPdf=true).


---

## Tutorials

- [DeepESDL Getting Started Guide](https://earthsystemdatalab.net/guide/)
- [Example notebooks](https://earthsystemdatalab.net/guide/jupzterlab/notebooks/) included in the Jupyter environment.

---

## Support and Communities

For more support write an email to `esdl-support@brockmann-consult.de`.  
Community discussions and updates are available via the [DeepESDL website](https://earthsystemdatalab.net/).

---

## Full Documentation Can be Found At

[https://earthsystemdatalab.net/guide/](https://earthsystemdatalab.net/guide/)
