# Copernicus Data Space Ecosystem (CDSE) openEO Federation
:::warning 🛠️ Page Under Development
Content is being actively developed and updated for this page. EarthCODE's documentation is a living document and will be continuously updated with detailed reviews.
:::

## About

<FeatureCard img="/img/platforms/platform_logos/cdse.png" alt="CDSE openEO Federation Logo" title="CDSE openEO Federation">

The **Copernicus Data Space Ecosystem (CDSE) openEO federation** provides a unified, cloud-based interface using the [**openEO API**](https://openeo.org/) to access and process Earth observation data at scale. It enables scientists, analysts, and developers to run reproducible, standards-based workflows.

* Unified **access to [multiple openEO processing backends](https://documentation.dataspace.copernicus.eu/APIs/openEO/federation/openeo_federation.html#federation-members)** through a single, unified openEO API.
* Supports diverse domains by providing access to **a wide range of Earth observation data sources**, including the possibility to **process your own data**.
* Enables scalable workflows including **datacube analytics, ML/AI inference, and EO product generation**.
* Supports the development of **interoperable workflows** thanks to the [openEO](https://openeo.org/) standard.
  
</FeatureCard>

## Summary

**Infrastructure Capabilities**

| Platform | Data Access | Specialized Hardware & Services | Compatible Workflows |
|--------------------------------------|----------------------------------------------------------------------------------------------------------|----------------------------------|---------------------------|
| Copernicus Data Space Ecosystem (CDSE) openEO Federation | Offers unified access to a broad selection of Earth Observation (EO) datasets, such as Sentinel-1, Sentinel-2, Sentinel-3, Sentinel-5p, Copernicus Services, Landsat, WorldCover, and more. Users can also process their own data using openEO’s [`load_stac`](https://open-eo.github.io/openeo-python-client/api.html#openeo.rest.connection.Connection.load_stac) function. For a comprehensive list of available datasets, visit [openeofed.dataspace.copernicus.eu](https://openeofed.dataspace.copernicus.eu). | Leverages cloud infrastructure across multiple openEO backends within the federation. Details about available backends are provided on the [openEO Federation page](https://documentation.dataspace.copernicus.eu/APIs/openEO/federation/openeo_federation.html#federation-members). | Built on the openEO API, the platform supports execution of openEO Process Graphs and User Defined Processes. |

**FAIR Open Science Development Capabilities**

| Platform | Development Tools | Supported Languages | Visualization Tools | Workflow Type |
| --- | --- | --- | --- | --- |
| Copernicus Data Space Ecosystem (CDSE) openEO Federation | openEO offers multiple tools for workflow and experiment development, including the [openEO Web Editor](https://openeofed.dataspace.copernicus.eu/) and platform independent [client libraries](https://openeo.org/documentation). These libraries can be used in various environments, such as the [CDSE Jupyter Notebooks](http://jupyterhub.dataspace.copernicus.eu/) or on a user's local machine. | Python, R, JavaScript | The [openEO Web Editor](https://openeofed.dataspace.copernicus.eu/) enables users to visualize processing job results. | openEO process graphs as standardized, interoperable workflows/experiments |


## Developing and Publishing Workflows & Data

**Learn By Example**

The EarthCODE documentation offers several insightful examples that demonstrate how to create and publish workflows, experiments, and data using the Copernicus Data Space Ecosystem openEO Federation:

1. [Creating an openEO workflow](https://esa-earthcode.github.io/examples/workflow/): This guide demonstrates how to create a basic openEO workflow, executing a simple processing task and publishing it as workflow that can be shared and reused.
2. [Creating an experiment](https://esa-earthcode.github.io/examples/experiment/): This guide shows how to set up an experiment using the previously created workflow, defining parameters such as area of interest and time range, and executing the workflow to generate output products.
3. [Publishing an experiment to EarthCODE](https://esa-earthcode.github.io/examples/publication/): This guide explains how to publish the created experiment to the EarthCODE Open Science Catalogue (OSC) using the openEO Publishing tool, making it discoverable and reusable by the scientific community.
4. [Reproducing an experiment](https://esa-earthcode.github.io/examples/reproduce/): This guide illustrates how to reproduce the published experiment using openEO, verifying the output products against the original experiment to ensure consistency and correctness.  

Additionally, openEO maintains a repository of [community examples](https://github.com/Open-EO/openeo-community-examples) that showcase its use in specific scenarios and highlight advanced features. This is a valuable resource for deepening your understanding of openEO and seeing it in action.

**Developing Workflows**

The Copernicus Data Space Ecosystem openEO Federation provides several tools to support workflow development. The primary tools are the **openEO client libraries**, which are available for [Python](https://documentation.dataspace.copernicus.eu/APIs/openEO/Python_Client/Python.html), [R](https://documentation.dataspace.copernicus.eu/APIs/openEO/R_Client/R.html), and [JavaScript](https://documentation.dataspace.copernicus.eu/APIs/openEO/JavaScript_Client/JavaScript.html). These libraries are platform-agnostic, allowing users to develop workflows that can be executed on CDSE.The Python client library is considered the most advanced, offering extensive [documentation and examples](https://open-eo.github.io/openeo-python-client/). These libraries can be installed in any development environment. Since workflow execution occurs on the connected platform, no specialized hardware is required, just a Python, R, or JavaScript setup and you're ready to begin.

Alternatively, you can use the **[CDSE JupyterHub](https://jupyterhub.dataspace.copernicus.eu/)** environment, which provides a pre-configured JupyterLab setup with openEO and other relevant tools already installed. This enables you to start developing interactively within minutes and share your results via Jupyter Notebooks.

![CDSE - JupyterHub](/img/platforms/platform_materials/cdse/jupyterhub.png)

Another option is the **[CDSE openEO Web Editor](https://openeofed.dataspace.copernicus.eu/)**, a graphical user interface packed with useful features. It allows you to visually explore available datasets and processes, and build workflows using drag-and-drop functionality. You can also monitor the status of your processing jobs, access log files, and visualize results directly in your browser.

![CDSE - openEO Web Editor](/img/platforms/platform_materials/cdse/webeditor.png)

For advanced users, **direct communication with the [openEO API](https://openeofed.dataspace.copernicus.eu/openeo/)** is also possible. This low-level integration is ideal for scenarios not covered by the client libraries or Web Editor and requires experience with REST APIs. While openEO is fundamentally an [API](https://api.openeo.org/), the client libraries provide a convenient abstraction layer that simplifies workflow development. Therefore, we recommend using these libraries for quick and efficient development.

**Publishing to EarthCODE**

To publish openEO-based workflows, experiments, and products, a dedicated, platform-agnostic tool, the [**openEO Publisher**](https://publish.earthcode.vito.be/), is available. Through its graphical interface, you can connect to CDSE, select the processing jobs you wish to publish, and follow guided registration steps. This process results in a GitHub pull request to submit your publication to the EarthCODE Open Science Catalogue.
For a detailed walkthrough of the publication process, we recommend reviewing the [publication](https://esa-earthcode.github.io/examples/publication/) example.

![CDSE - openEO Publisher](/img/platforms/platform_materials/cdse/publisher.png)

## Data Access

The CDSE openEO Federation provides access to a large collection of federated datasets, all available within a single environment. Additionally, it offers the flexibility to include external datasets when needed.

You can explore the full list of available datasets here:

<OpenEOCollections url="https://openeofed.dataspace.copernicus.eu/openeo/collections" />

Thanks to abstraction done through openEO, accessing these datasets is simplified. It handles many of the complexities such as data selection, format handling, and file management. Using the openEO Python client, you can load a dataset using the [`load_collection`](https://open-eo.github.io/openeo-python-client/datacube_construction.html#the-load-collection-process) function. This function requires the dataset ID along with optional parameters such as temporal extent, spatial extent, specific bands, or other filtering properties. The result is a datacube that serves as the foundation for your workflow.

Here’s an example:

```python
datacube = connection.load_collection(
    "SENTINEL2_L2A",
    spatial_extent={"west": 5.0, "south": 51.2, "east": 5.1, "north": 51.3},
    temporal_extent="2021-06",
    bands=["SCL"],
    max_cloud_cover=95
)
```

### Using External Datasets

In addition to platform-hosted datasets, openEO allows you to load external data using the [`load_stac`](https://open-eo.github.io/openeo-python-client/api.html#openeo.rest.connection.Connection.load_stac) function. Please note that this function requires the external data to have valid STAC metadata, following the guidelines specified at https://stac-extensions.github.io/eo/v1.1.0/schema.json. 

:::warning
When using `load_stac`, the data from external providers is written to the CDSE backend before processing. Therefore, it is advisable to use this feature cautiously by filtering for specific bands and limiting the spatial extent to avoid processing vast areas.
:::

An example of how to use `load_stac` is shown below and available as [openEO community examples](https://github.com/Open-EO/openeo-community-examples/tree/main/python/LoadStac).

```python
landsat_cube = connection.load_stac(
    "https://planetarycomputer.microsoft.com/api/stac/v1/collections/landsat-c2-l2",
    spatial_extent={"west": 5.0, "south": 51.21, "east": 5.05, "north": 51.25},
    temporal_extent=["2014-01-01", "2015-12-31"],
    bands=["OLI_B4", "OLI_B5"],
    properties={"platform": lambda x: x == "landsat-8"},
)
```


## Specialized Hardware & Services

One of the key strengths of openEO is its ability to abstract away the complexities of large-scale data processing, such as infrastructure management and optimized execution in cloud environments. By default, openEO provides an abstraction layer that enables users to create processing workflows, which are then translated by backend providers into executable tasks on their respective cloud platforms. This means users do not need any IT expertise to start working with openEO.

Since the [CDSE openEO Federation](https://documentation.dataspace.copernicus.eu/APIs/openEO/federation/openeo_federation.html#federation-members) consists of multiple backends, the underlying infrastructure may vary from one backend to another. However, the federation automatically optimizes workflow execution by selecting one or more suitable backends to run your processing tasks.

For advanced users and specialized use cases, openEO offers the ability to fine-tune workflow execution using `job_options` when creating an openEO processing job. These options allow for more control over how and where your workflow is executed but require more in-depth knowledge of the platform and its technology stack. An example of this advanced usage can be found in the [openEO Community Examples](https://github.com/Open-EO/openeo-community-examples/blob/main/python/ParcelDelineation/Parcel%20delineation.ipynb).

:::tip
Keep in mind that `job_options` only work if the underlying infrastructure supports them. If a backend does not recognize or support these parameters, they will have no effect.
:::

## Visualization Tools

Visualization plays a key role in understanding and validating the results of your data processing workflows. Within the openEO ecosystem, several tools are available to help users explore input data, monitor job execution, and interpret results effectively.
The primary tool for this purpose is the [**CDSE openEO Web Editor**](https://openeofed.dataspace.copernicus.eu/). This web-based application provides a graphical user interface that allows users to visually construct workflows, monitor the status of processing jobs, and visualize both input datasets and output results. It supports interactive exploration of available datasets and processes, and offers built-in tools to view geospatial outputs directly in the browser.

![CDSE - openEO Web Editor - Visualize Data](/img/platforms/platform_materials/cdse/webeditor_visualise.png)


For more advanced visualization and analysis, the [**CDSE JupyterHub environment**](https://jupyterhub.dataspace.copernicus.eu/) is available. This environment is pre-configured with the openEO Python client and other relevant libraries, enabling users to create rich, interactive notebooks. These notebooks can include custom visualizations such as time series plots, histograms, or spatial overlays, allowing for deeper insights into the data. It’s particularly well-suited for users who want to combine openEO processing with additional Python-based analysis or create advanced visualizations.

![CDSE - JupyterHub - Visualize Data](/img/platforms/platform_materials/cdse/jupyterhub_visualise.png)

Another powerful feature of openEO is that all job results can be exported as STAC collections. This standard format not only facilitates the reuse of results in subsequent processing steps, such as loading them again via the `load_stac` function, but also enables seamless integration with external visualization tools and platforms that support STAC. This makes it easier to share results with collaborators.

## Right Sizing and Network of Resources

The CDSE openEO federation uses a credit-based system to manage resource consumption for data processing tasks. All users receive a free tier, enabling them to explore the platform and perform small-scale experiments at no cost. For larger or more intensive processing needs, additional credits can be obtained by applying for sponsorship through the [Network of Resources (NoR)](https://portfolio.nor-discover.org/Service/VITO/SponsoringWizardPricelist). For comprehensive information on how credits are allocated and consumed, refer to the [CDSE documentation](https://documentation.dataspace.copernicus.eu/APIs/openEO/credit_usage.html).

## Tutorials
There are many existing examples and tutorials available to help you get started with the openEO federation on the Copernicus Data Space Ecosystem (CDSE) openEO Federation. These resources cover a wide range of topics, from basic data access to advanced processing techniques. You can find these tutorials on the following pages:

* [EarthCODE Examples](https://esa-earthcode.github.io/examples/index-3/)
* [CDSE Use Cases](https://documentation.dataspace.copernicus.eu/Usecase.html)
* [openEO Community Examples](https://github.com/Open-EO/openeo-community-examples)

## Support and Communities
For support and community engagement, users can refer to the [CDSE openEO Forum](https://forum.dataspace.copernicus.eu/c/openeo/28) where they can ask questions, share experiences, and collaborate with other users and developers.

## Full Documentation Can be Found At
https://documentation.dataspace.copernicus.eu/APIs/openEO/federation/openeo_federation.html