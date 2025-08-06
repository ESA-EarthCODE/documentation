# Copernicus Data Space Ecosystem (CDSE) openEO Federation
:::warning 🛠️ Page Under Development
Content is being actively developed and updated for this page. EarthCODE's documentation is a living document and will be continuously updated with detailed reviews.
:::

## About

<FeatureCard img="/img/platforms/platform_logos/cdse.png" alt="CDSE openEO Federation Logo" title="CDSE openEO Federation">

The **Copernicus Data Space Ecosystem (CDSE) openEO federation** provides a unified, cloud-based interface using the **openEO API** to access and process Earth observation data at scale. It enables scientists, analysts, and developers to run reproducible, standards-based workflows.

* Unified **access to multiple openEO processing backends** through a single, unified openEO API.
* Supports diverse domains by providing access to **a wide range of Earth observation data sources**, including the possibility to **process your own data**.
* Enables scalable workflows including **datacube analytics, ML/AI inference, and EO product generation**.
* Supports the development of **interoperable workflows** thanks to the openEO standard.
</FeatureCard>

## Summary

**Infrastructure Capabilities**

| Platform | Data Access | Specialised Hardware & Services | Compatible Workflows |
|--------------------------------------|----------------------------------------------------------------------------------------------------------|----------------------------------|---------------------------|
| Copernicus Data Space Ecosystem (CDSE) openEO Federation | Offers unified access to a broad selection of Earth Observation (EO) datasets, such as Sentinel-1, Sentinel-2, Sentinel-3, Sentinel-5p, Copernicus Services, Landsat, WorldCover, and more. Users can also process their own data using openEO’s [`load_stac`](https://open-eo.github.io/openeo-python-client/api.html#openeo.rest.connection.Connection.load_stac) function. For a comprehensive list of available datasets, visit [openeofed.dataspace.copernicus.eu](https://openeofed.dataspace.copernicus.eu). | Leverages cloud infrastructure across multiple openEO backends within the federation. Details about available backends are provided on the [openEO Federation page](https://documentation.dataspace.copernicus.eu/APIs/openEO/federation/openeo_federation.html#federation-members). | Built on the openEO API, the platform supports execution of openEO Process Graphs and User Defined Processes. |

**FAIR Open Science Development Capabilities**

| Platform | Development Tools | Supported Languages | Visualization Tools | Workflow Type |
| --- | --- | --- | --- | --- |
| Copernicus Data Space Ecosystem (CDSE) openEO Federation | openEO offers multiple tools for workflow and experiment development, including the [openEO Web Editor](https://openeofed.dataspace.copernicus.eu/) and platform independent [client libraries](https://openeo.org/documentation). These libraries can be used in various environments, such as the [CDSE Jupyter Notebooks](http://jupyterhub.dataspace.copernicus.eu/) or on a user's local machine. | Python, R, JavaScript | The [openEO Web Editor](https://openeofed.dataspace.copernicus.eu/) enables users to visualize processing job results. | openEO process graphs as standardized, interoperable workflows/experiments |


### Developing Workflows

**Learn By Example**

**Developing Workflows**

**Publishing to EarthCODE**

### Data Access

### Specialised Hardware & Services

### Visualization Tools

## Right Sizing and Network of Resources
The CDSE openEO federation uses a credit-based system to manage resource consumption for data processing tasks. All users receive a free tier, enabling them to explore the platform and perform small-scale experiments at no cost. For larger or more intensive processing needs, additional credits can be obtained by applying for sponsorship through the [Network of Resources (NoR)](https://portfolio.nor-discover.org/Service/VITO/SponsoringWizardPricelist). For comprehensive information on how credits are allocated and consumed, refer to the [CDSE documentation](https://documentation.dataspace.copernicus.eu/APIs/openEO/credit_usage.html).

## Tutorials
There are many existing examples and tutorials available to help you get started with the openEO federation on the Copernicus Data Space Ecosystem (CDSE) openEO Federation. These resources cover a wide range of topics, from basic data access to advanced processing techniques. You can find these tutorials on the [CDSE Use Cases](https://documentation.dataspace.copernicus.eu/Usecase.html).

## Support and Communities
For support and community engagement, users can refer to the [CDSE openEO Forum](https://forum.dataspace.copernicus.eu/c/openeo/28) where they can ask questions, share experiences, and collaborate with other users and developers.

## Full Documentation Can be Found At
https://documentation.dataspace.copernicus.eu/APIs/openEO/federation/openeo_federation.html







# openEO: A Community Standard for Geospatial Data Processing and Analysis

[openEO](https://openeo.org/) represents an innovative community standard that revolutionizes geospatial data processing and analysis. This groundbreaking framework provides a novel approach to accessing, processing, and analyzing diverse Earth observation data.By adopting openEO, developers, researchers, and data scientists gain access to a unified and interoperable platform, empowering them to harness distributed computing environments and leverage cloud-based resources for addressing complex geospatial challenges.

## Key Features of openEO

With openEO’s collaborative nature, users can:

- Seamlessly share code, workflows, and data processing methods across openEO-based platforms and tools.
- Foster collaboration while advancing the accessibility, scalability, and reproducibility of Earth observation data.
- Utilize intuitive programming libraries that simplify the analysis of diverse Earth observation datasets.
- Efficiently access and process large-scale data acros s a federation of existing cloud infrastructures, supporting:
  - Exploratory research
  - Detailed mapping
  - Information extraction from Earth observation data

This streamlined approach enhances development and empowers the utilization of Earth observation data for various applications and services.

## Access

Access to the openEO federation on the Copernicus Data Space Ecosystem (CDSE), you can use the following endpoint:

The endpoint for the public service is **100% open source** and fully compatible with **Pangeo technology**. 

- **Endpoint:** [https://openeofed.dataspace.copernicus.eu/](https://openeofed.dataspace.copernicus.eu/)



---

(TBD)
- Configuring OpenEO for Your Workflow
- Connecting to CDSE: https://dataspace.copernicus.eu
- Integration CDSE with EarthCODE Open Science Catalog
- Data Access on CDSE
