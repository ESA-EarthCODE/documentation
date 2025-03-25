---
order: 0
---
# Data Discovery and Access

Data discovery and access in EarthCODE are facilitated through the Open Science Catalog, which provides a structured way to explore and retrieve scientific datasets, metadata, and dependencies. This ensures that researchers can efficiently find and integrate the right data into their projects while promoting transparency and reproducibility.

This section will guide you through the key aspects of data discovery and access, including how to search for datasets, retrieve data via APIs, upload and manage your own data, and incorporate it into workflows for scientific research.

What You’ll Find in This Section:

- [**Introduction to the ESA Open Science Catalog**](#introduction-to-the-open-science-catalog)
- [**Discovering Catalog Content**](#discovering-catalog-content)
- [**Standardized Metadata and Taxonomies for FAIR Data Access**](#standardized-metadata-and-taxonomies-for-fair-data-access)
- [**Metrics and Statistics About the EarthCODE Catalog**](#metrics-and-statistics-about-the-earthcode-catalog)
- [**Optimizing Performance for Large Datasets**](#optimizing-performance-for-large-datasets)

This User Guide is meant to provide explanation of the catalog's functionalities from starting the catalog, explaining registration and login process through searching for information in the catalog to data ingestion and user's contribution.

## Introduction to the Open Science Catalog

The Open Science Catalog is a web-based application designed to provide easy access to scientific datasets, geoscience products, and resources developed within ESA Earth Observation (EO) research projects. It supports data discovery, access, and integration, promoting Open Science principles.

### Accessing the Open Science Catalog

You can explore the Open Science Catalog from any web browser by navigating to:
- 👉 [https://opensciencedata.esa.int/](https://opensciencedata.esa.int/)

Upon entering the portal, you will see a welcome page that introduces the catalog and its functionalities. The catalog organizes resources into six thematic research domains, allowing users to easily browse and discover relevant projects and products.

From the landing page, you can also access:

- Search tools for locating datasets
- Catalog to browse available products
- Metrics to explore data usage statistics
- API capabilities for programmatic data access


![OSC-main-page](https://github.com/EOEPCA/open-science-catalog-metadata/assets/120453810/a97e40c1-0f69-4204-9aef-95030c5a8455)

### The Open Science Catalog Landing Page

The OSC frontend serves as the primary user interface, enabling scientists and other users to interact with the system and access its contents. Through this interface, users can search for scientific products and contribute to the catalog by submitting new products or requesting updates to existing content. (Note: The request feature for updating content is planned for future releases.)

Exploration begins from the landing page where user can select one of six themes that group products by the specific research domain:

![themes](https://github.com/EOEPCA/open-science-catalog-metadata/assets/120453810/070f3e88-f2a4-4956-bfc7-00e2a660cbb2)

Description of selected scientific domain is provided together with link to reference given description. 
Each theme lists number of objects associated to that theme via `osc:themes` field in the STAC Catalog or STAC Collection. Making products discoverable by specific domain name.

![cryosphere-theme](https://github.com/EOEPCA/open-science-catalog-metadata/assets/120453810/b1e33838-484d-45c2-bdc0-52c5785c7eef)

From this page user can View the Item _(Theme)_ in open-access GitHub repository and suggest changes to the content.

Or proceed with Product’s further exploration display the full description and metadata of given product and access data. 
![product-page-1](https://github.com/EOEPCA/open-science-catalog-metadata/assets/120453810/2c89b757-2da8-41ef-9422-0456d583c97c)

### Key Features of the Open Science Catalog

The Open Science Catalog is a key component of the ESA EO Open Science framework. It is a publicly available platform that provides access to datasets, products, and scientific resources developed under ESA-funded Earth Observation (EO) research projects. These products vary in geographical and temporal extent, production methodology, validation, and quality, supporting a wide range of scientific applications.

This section explains the functionality of the Open Science Catalog, detailing how researchers can explore, access, and utilize geoscience products and datasets stored within the platform.

![OSC-main](https://github.com/EOEPCA/open-science-catalog-metadata/assets/120453810/9f3ae080-47fd-494b-bceb-ba9db48f0799)

The majority of pages on _https://opensciencedata.esa.int_ only hold metadata for each Product and Project. The actual data and its documentation are maintained and accessible by the data providers, outside of esa.int, for the majority of cases. This catalog provides the metadata and links to the data as it exists in those many other locations.

Open Science Catalog is free to use by any user with an access to Internet. Contributing to catalog (ingesting new products or updating existing) is reserved to authorized users only (project PIs, data owners).

**What are the capabilities of the Open Science Catalog?**

Open Science Catalog is not only a project's metadata browser. It brings new functionalities and makes them available to scientific community of users, such as:

- Discovery and access for geospatial products + documentation (or/and code)

- Unified metadata across heterogeneous sources
- Common dictionary
- Open to community curation & contribution
- Synoptic view for EO gap analysis


## Discovering Catalog Content

The OSC Catalog page is built upon the open-source STAC Browser application (STAC Browser, 2023), allowing users to explore the available contents stored in a static STAC Catalog. This catalog consists of inter-linked JSON files (Collections and Items) along with supplementary metadata. The catalog facilitates the discovery of the following elements:

- Themes
- Variables
- EO-Missions
- Projects
- Products
- Processes

Each element lists number of objects of selected type, which are in turn represented as a STAC Catalog or STAC Collection. These objects use the OSC STAC extension to reference elements of other groups they are associated with. e.g a Product has an "osc:variables" field, that lists the measurement variables this product is comprised of. More information on how the items are linked in **Contribution** section).

![STACBrowser-OSC](https://github.com/EOEPCA/open-science-catalog-metadata/assets/120453810/257daa0c-a567-4ed2-a8bc-3fb594079b2c)

**Overview** button on the top of the page provides possibility to navigate between folders in current Open Science Catalog structure. It also gives access to a list of STAC Static Catalogs and STAC APIs available under STAC Index.

STAC Browser allows to filter existing catalogs by their title, order them by name and display as tiles or list. As a minimum requirement for each STAC catalog, the date of the latest update is provided in metadata field.

![EO-missions-page](https://github.com/EOEPCA/open-science-catalog-metadata/assets/120453810/4b49bdee-61e3-4481-96a3-6416be261761)

Each element in the catalog has associated description, link and product(s) related to that element. In this example we can see 51 products associated with Aqua (EOS/PM-1) EO-Mission.

![Aqua-eomission](https://github.com/EOEPCA/open-science-catalog-metadata/assets/120453810/ba016cfd-ff4e-4684-b159-37cbd7165b89)

For the time being more than 270 products have been imported and made available to discover by scientific community. 

![products-stac](https://github.com/EOEPCA/open-science-catalog-metadata/assets/120453810/0b3e31c8-ce9d-4f8b-99d6-3061628be47d)

The Browser lists all products gathered in the Open Science Catalog, with temporal extent (start and end date of the product) provided next to the product title (in grey box). Filtering by product name is also possible.
Clicking the product will provide the main information about each item ingested to the catalog. An example page of the selected product published in Open Science Catalog is provided here:
![product-page-2](https://github.com/EOEPCA/open-science-catalog-metadata/assets/120453810/4753f91b-b646-4255-a948-d2cce0b9adf0)

In the Product page: general description, metadata, access to the resource (URL link), website – URL to documentation of the product and product extent are provided.

Full metadata description of the selected product is provided here. Here the contents of the metadata description from .json file are displayed, and related STAC objects are linked to corresponding files i.e. Project, EO Mission, Variable, Theme etc.
![metadata-product](https://github.com/EOEPCA/open-science-catalog-metadata/assets/120453810/1e8c597d-031f-4763-8a11-382f8b587c22)

Source metadata is used to provide Access to **external** (source) data repository – from data provider or project PI and Documentation, which gives a link to description of the dataset, scientific publications etc.

Additionally search keywords are added to allow product retrieval.

In some cases when the data is publicly available and can be downloaded, the access to single tiles or granules of products are being provided to broader community. Another embedded STAC Catalog is created then to host the spatial data itself. By selecting the catalog you can browse through single items and download one image out of vast collection of files directly from the portal.

![products-assets](https://github.com/EOEPCA/open-science-catalog-metadata/assets/120453810/b229ad19-9868-4f94-a011-1381db43661a)

Select single item from a daily collection of products. Under Assets expand more information about dataset and click Open to download single tile to your local storage.

![metadata-assets](https://github.com/EOEPCA/open-science-catalog-metadata/assets/120453810/8cbd1bf2-1afa-4b99-80a7-13513157e7d1)

Up botton allows to return to the previous element in the hierarchy. Depending on the metadata wirtten in the single file (for example: tif or nc file) additional metadata like projection or image dimensions are provided.

Here additionally an example of Project page is displayed. Catalogs on the right panel represent products collections associated with the given project and discoverable from Project page.

![project-page](https://github.com/EOEPCA/open-science-catalog-metadata/assets/120453810/ae9b723b-383a-434b-941a-9b700eaceace)

Additionally in Project metadata, link to EO4Society page and dedicated project page built by consortium members is provided, as well as list of consortium members and technical officer assigned to the project at ESA.

### **Search**

Once harvested into the resource management, the STAC API of the Resource Catalog allows efficient searching for Products using text, geospatial, temporal and other metadata attributes. Search results independently from the way the search was performed by user (described in the section above) will present the list of products that match the query.

![search](https://github.com/EOEPCA/open-science-catalog-metadata/assets/120453810/fd73379e-16f9-4649-b1db-4d55f44b8511)

Filters possible to apply to limit products number returned are available on the left side panel. User can search by Theme, Variable, Project, EO Mission and Region. Region parameter can be used by drawing user-defined shape on the interactive world map, and selecting an option to filter the products by their spatial coverage, taking only products that are contained within the selected geometry, or intersecting products.

To select other filters, expand given filter name with the arrow and select or type a name of the filter to be applied.
![search-1](https://github.com/EOEPCA/open-science-catalog-metadata/assets/120453810/3824063b-e89c-4906-9077-8f2d429031d0)

Products that match the query are displayed under the Results list. The number in the brackets indicate how many products match that request.

Click on "RESET" button to clear up all filters previously applied and apply different filtering.

## Standardized Metadata and Taxonomies for FAIR Data Access

Adhering by design to the "FAIR" (findable, accessible, interoperable, reproducible/reusable) principles, the Open Science Catalog aims to support better knowledge discovery and innovation. It facilitates data and knowledge integration and reuse by the scientific community. With common dictionary and unified metadata across heterogeneous sources, products discovery is facilitated. Published Products are associated to Project and additional information is provided by tags. Themes and variables are used as tag to facilitate products discovery. Earth Observation Satellite Missions used to generate the product is provided by EO-Mission description in Product's metadata.

**THEMES**: one of the Earth Science topics linked to the grand science challenges set in the ESA strategy.

**PROJECT**: scientific research projects funded by ESA EO​

**PRODUCT**: a geoscience product representing the measured or inferred/estimated values of one or more variables over a given time range and spatial area. Products can be distinguished by geographical and temporal extent, production methodology, validation, quality and EO Mission/sensor used to produce them.​

**VARIABLES**: geoscience, climate and environmental variable. Variables are represented in the hierarchical set of Earth Science variables based on GCMD Keywords convention.

**KEYWORDS**:  Keywords are used to facilitate products discovery. Based on hierarchical relationships adopted from NASA GCMD keywords database, keywords usually refer to broader term regarding the variable and are assigned to a given product.

**EO MISSION**: Earth Observation Satellite Missions used to generate the product.

![OSC-structure](https://github.com/EOEPCA/open-science-catalog-metadata/assets/120453810/8d4d4390-ec7c-40bb-9605-a02e7f33decb)


## Metrics and Statistics About the EarthCODE Catalog

### **Metrics**

Open Science Catalog provides and stores also metrics and statistics on records available for users to explore. The OSC Metrics Page provides an overview of the available geospatial products, aggregated by one of selected elements: Variables (default), Themes, Projects, EO Missions. Temporal and spatial coverage of products aggregated under selected category (element) is displayed.
![metrics-1](https://github.com/EOEPCA/open-science-catalog-metadata/assets/120453810/25264857-1c89-45fa-b048-17d64b845968)

The slider below the metrics window: 
![slider](https://github.com/EOEPCA/open-science-catalog-metadata/assets/120453810/c0cb1e4f-3440-44e1-a7fb-af0fa1264218)
allows zoom in and out the display of table containing the metrics.

Products can also be filtered out using a Filter box above the metrics table. The Filter works in the same way as Search, meaning that the product list can be narrowed down by filtering by free typing or by selecting given type of content (by selecting particular Theme, Variable, Project, Product, EO Mission, Geometry: by area of interest indicated on the interactive map or Free text filter).

Once selected, filter name and selected value appears in the text box to facilitate the user removal of selected filter and remembering of different filters applied.

![metrics-2](https://github.com/EOEPCA/open-science-catalog-metadata/assets/120453810/d42070bb-999a-4d23-8011-1cfe35f987e5)

The filter takes also free text as an input, so any word typed in the filter field will be taken to search through the variable names but also their acronyms, product names and description field. Therefore, it is also possible to use keywords if the exact variable or product name of an item is not known. For example, the term _"carbon"_ will return the list of following variables and products _(Carbon Flux, Carbonate, Microphytoplankton Carbon etc.)_.
![metrics-3](https://github.com/EOEPCA/open-science-catalog-metadata/assets/120453810/8dbed4f4-e41c-4fc2-808c-040b8ca3d23f)

The last column in that page provides details about spatial coverage of selected product. Click on the globe icon to display the list of products and access their spatial footprint.

To highlight the spatial coverage of selected product select the pin 
![pin-icon](https://github.com/EOEPCA/open-science-catalog-metadata/assets/120453810/faa609f0-bf94-4d4a-a1dc-f91f2dcc2bbb) icon.

Click on Access  
![access-icon](https://github.com/EOEPCA/open-science-catalog-metadata/assets/120453810/92d05d0e-c98b-4f6e-85f0-f3f92c1ac344) icon to preview the product page (new tab with providing product details will open automatically).
![metrics-4](https://github.com/EOEPCA/open-science-catalog-metadata/assets/120453810/4244eaac-3174-4cda-81e3-dbfe3478f542)

### **Statistics**

Within the metrics functionality, the **"Statistics"** button is available to summary of the content available within the catalog.User can summarize the products by chosen elements: Variables (default), Themes, Projects, EO Mission.
![statistics](https://github.com/EOEPCA/open-science-catalog-metadata/assets/120453810/4492a17a-5411-462a-a16a-fe68784b738c)

Click on the **Statistics** button to see the pop-up window divided in three sections:

- Bar chart: representing number of products per year (summary of temporal coverage of products). By navigating over selected bar that represents single year, the description on how many products are available in each year is displayed (as shown below).
![stats-bar](https://github.com/EOEPCA/open-science-catalog-metadata/assets/120453810/21a06cc0-68f6-4015-b125-e6683c6bdcbd)

- Pie chart: representing number of products that belong to each variable and percentage in a total sum of variables available in the catalog.
![stats-pie](https://github.com/EOEPCA/open-science-catalog-metadata/assets/120453810/2019eec5-b706-4573-9960-fd6414fccb58)

- Multicolor pie-chart – representing the distribution of satellite missions used to generate products.
![stats-pie2](https://github.com/EOEPCA/open-science-catalog-metadata/assets/120453810/88e2b1d3-797d-4e9b-ad82-bbbc48771678)

## Optimizing Performance for Large Datasets 

Tips on configuring resources to achieve optimal performance for large datasets and computational tasks.


- [OpenEO & Copernicus Data Space Ecosystem (CDSE)](../Platforms/OpenEO.md)
- [Deep Earth System Data Laboratory (DeepESDL)](../Platforms/DeepESDL.md)
- [Euro Data Cube (EDC)](../Platforms/EDC.md)
- [EDC EOxHub Pangeo](../Platforms/EOxHub_Pangeo.md)
