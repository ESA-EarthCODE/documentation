# Pangeo

*pangeo.io*

## About

<FeatureCard img="/img/platforms/platform_logos/pangeo-logo.png" alt="Pangeo Logo">
On EarthCODE, Pangeo is provided through the **Euro Data Cube (EDC) EOxHub Workspace**. Pangeo offers a powerful, interactive environment for scalable geoscience, built on an open-source ecosystem of key Python tools including Jupyter, Xarray, Dask, STAC, and Zarr. It is designed for scientists to scale to massive, cloud-based Earth Observation datasets with little to no changes to your python workflows.
</FeatureCard>

## Summary

**Infrastructure Capabilities**

| Platform                                 | Data Access                                                                                                                                                                         | Specialised Hardware & Services                                                                      | Compatible Workflows                      |
|------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------|-------------------------------------------|
| [Pangeo](./Pangeo.md)                    | | On-demand, scalable Dask clusters via Dask Gateway. | Jupyter Notebooks, Python scripts, containerized applications. |

<br>

**FAIR Open Science Development Capabilities**

| Platform                                 | Development Tools                                                                | Supported Languages                                | Visualization Tools                                                                                                    | Produced Workflow Type                      |
|------------------------------------------|----------------------------------------------------------------------------------|----------------------------------------------------|------------------------------------------------------------------------------------------------------------------------|---------------------------------------------|
| [Pangeo](./Pangeo.md)                    | JupyterLab and Jupyter Notebooks are the primary interactive development environment. | Python with core libraries like Xarray, Dask, and NumPy. | In-notebook visualization using libraries like Matplotlib and the HoloViz suite (hvPlot, GeoViews). | Reproducible Jupyter Notebooks and containerized Python applications. |

## Developing and Publishing Workflows & Data

You develop workflows within the managed EDC EOxHub Workspace, an interactive JupyterLab environment. This setup allows you to use Dask Gateway to seamlessly scale your analysis from a single notebook to a powerful compute cluster.

Detailed instructions and examples are available in the EarthCODE tutorials. An example is available at **Delta NBR Workflow**, which shows how to process Sentinel-2 data.

* **Example Workflow:** [Delta NBR Workflow Example](https://opensciencedata.esa.int/workflows/delta-nbr-workflow-example/record)
* **All Tutorials:** [EarthCODE Tutorial Pages](https://esa-earthcode.github.io/tutorials/index-4/)

## Data Access

The platform is designed to work with Analysis-Ready, Cloud-Optimized (ARCO) data formats like Zarr and Cloud-Optimized GeoTIFFs (COGs). Data can be discovered and loaded using STAC or Intake catalogs.

## Specialised Hardware & Services

The main specialized service is on-demand, scalable parallel computing using **Dask Gateway**. This allows you to create and manage large compute clusters directly from your notebook to process petabyte-scale datasets.

## Visualization Tools

You can visualize data directly within your notebook using standard Python libraries, including Matplotlib, Cartopy, and the HoloViz suite for creating powerful interactive plots.

## Right Sizing and Network of Resources

Access the Pangeo environment via the EDC EOxHub Workspace offering on the Network of Resources (NoR). You can select a server size for your base Jupyter environment and scale out your computation using a Dask cluster for heavy processing.

> **Network of Resources (NoR) Sponsorship!**
>
> ESA offers sponsorship to eligible entities to cover the costs of using cloud services for Earth Observation. You can apply to sponsor your project's compute and data access at: **https://nor-discover.org/**

## Tutorials

A complete set of tutorials for learning how to use Pangeo in EarthCODE is available here:
* [EarthCODE Tutorial Pages](https://esa-earthcode.github.io/tutorials/index-4/)

## Support and Communities

* **Pangeo Community Forum:** For general questions about Pangeo and the scientific Python ecosystem, visit the [Pangeo Discourse](https://discourse.pangeo.io/).
* **EarthCODE Support:** For issues related to the EarthCODE platform integration, please use the designated support channels.

## Full Documentation Can be Found At

For complete documentation on the Pangeo project, please visit the official website:
* [https://pangeo.io/](https://pangeo.io/)