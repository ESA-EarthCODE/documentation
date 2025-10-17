---
order: 0
---
# Data Discovery and Access

The EarthCODE Open Science Catalog provides a structured way to explore and access scientific datasets, metadata, and dependencies. This section will guide you through the key aspects of data discovery and access.

![OSC-main](https://github.com/EOEPCA/open-science-catalog-metadata/assets/120453810/9f3ae080-47fd-494b-bceb-ba9db48f0799)

The Open Science Catalog (OSC), a key component of the ESA EO Open Science framework, is a publicly available web-based application designed to provide easy access to scientific datasets, geoscience products, and scientific resources developed under ESA-funded Earth Observation (EO) research projects.

**You can explore the OSC at:** [**https://opensciencedata.esa.int/**](https://opensciencedata.esa.int/)

### The Open Science Catalog Landing Page

The Open Science Catalog's landing page is the main entry point for exploration. At the top-most level it organizes research data products into scientific **themes**. You can start discovering projects, products, and workflows simply by selecting one of these themes to browse its contents.

Each theme lists the number of objects associated to that theme via the `osc:themes` field in the STAC Catalog or STAC Collection. This makes entries discoverable by specific domain names.

<!-- 
Logged in users can also contribute to the catalog by submitting new entries or requesting updates to existing content. 

Upon entering the portal, you will see a welcome page that introduces the catalog and its functionalities. The catalog organizes resources into six thematic research domains, allowing users to easily browse and discover relevant projects, products, workflows, and experiments. -->

![OSC themes explorer giff](/img/osc-giffs/themes-osc-giff.gif)


From this page users can proceed with Product's further exploration display and review the full description and metadata of a given product and access data.


## Discovering Catalog Content

The **Overview** button on the top of the page provides the option to navigate between folders in the current Open Science Catalog structure.

When browsing, you can navigate the catalog's structure and use filters to find items by title. Each element in the catalog has an associated description, link, and product(s) related to that element.


### Missions

In this example we can see 33 Products associated with the Sentinel-2 EO-Mission. Clicking on any product reveals its temporal extent and takes you to a detailed page with full metadata and access links.

![missions-osc-giff](/img/osc-giffs/missions-osc-giff.gif)


:::tip Available Products
For the time being more than 270 products have been imported and made available to discover by the scientific community.
:::

### Projects
The next image shows an example of a Project page. Catalogs on the right panel represent Product collections associated with the given Project and discoverable from the Project page.

![project-page](https://github.com/EOEPCA/open-science-catalog-metadata/assets/120453810/ae9b723b-383a-434b-941a-9b700eaceace)

In the Project metadata a link to the corresponding EO4Society page and potentially dedicated project page built by the consortium members is additionally provided, as well as a list of consortium members and the ESA Technical Officer assigned to the project.


---

### Products

In the Product page the general description, metadata, access to the resource (URL link), website – URL to documentation of the product, and product extent are displayed. Related STAC objects are linked to the corresponding files, i.e., Project, EO Mission, Variable, Theme, etc.

![exploring-products-osc](/img/osc-giffs/exploring-products-osc.gif)

The **Source metadata** is used to provide Access to **external** (source) data repository – from the data provider or the project PI and Documentation, which gives a link to the description of the product, scientific publications, etc.. Additionally search keywords are added to allow product retrieval.

---

### Product Assets

In some cases, when the data is publicly available and downloadable, the access to single tiles or granules of products is being provided to the broader community. In this case another embedded STAC Catalog is created to host the spatial data itself. By selecting the catalog you can browse through single items and download one image out of vast collection of files directly from the portal.

![osc-assets.gif](/img/osc-giffs/osc-assets.gif)

Under **Assets** more information about the item can be expanded and the **Open** button allows to download the single tile to your local storage. It is highly recommended that you use the STAC API and **programatically use the data as [described in the tutorial pages.](https://esa-earthcode.github.io/tutorials/stac-and-data-access/) with common libraries.**

### Searching the Catalog

The EarthCODE OSC offers a **Search** tool that allows you to combine multiple filters to narrow down results, including: **Categories:** Filter by `Theme`, `Variable`, `Project`, or `EO Mission` and; **Spatial Area:** Draw a specific region of interest directly on an interactive map.

![search the OSC](/img/osc-giffs/search-osc.gif)

As you apply filters, the results update instantly to show you the products that match your criteria.

## Standardized Metadata and Taxonomies for FAIR Data Access

The OSC Catalog page is built upon the open-source STAC Browser application, allowing users to explore the available contents stored in a static STAC Catalog hosted on an EarthCODE [Github Repository](https://github.com/ESA-EarthCODE/open-science-catalog-metadata/tree/main). This catalog consists of inter-linked JSON files along with supplementary metadata. The catalog facilitates the discovery of the following elements:

<!-- [Themes](https://opensciencedata.esa.int/themes/catalog) • [Variables](https://opensciencedata.esa.int/variables/catalog) • [EO-Missions](https://opensciencedata.esa.int/eo-missions/catalog) • [Projects](https://opensciencedata.esa.int/projects/catalog) • [Products](https://opensciencedata.esa.int/products/catalog) • [Workflows](https://opensciencedata.esa.int/workflows/catalog) • [Experiments](https://opensciencedata.esa.int/experiments/catalog) -->

:::details EarthCODE Ontology
| Term | Description |
| :--- | :--- |
| [**Themes**](https://opensciencedata.esa.int/themes/catalog) | One of the Earth Science topics linked to the grand science challenges set in the ESA strategy. |
| [**Project**](https://opensciencedata.esa.int/projects/catalog) | Scientific research projects funded by ESA EO. |
| [**Product**](https://opensciencedata.esa.int/products/catalog) | A geoscience product representing the measured or inferred/estimated values of one or more variables over a given time range and spatial area. Products can be distinguished by geographical and temporal extent, production methodology, validation, quality, and EO Mission/sensor used to produce them. |
| [**Variables**](https://opensciencedata.esa.int/variables/catalog) | Geoscience, climate, and environmental variable. Variables are represented in the hierarchical set of Earth Science variables based on the NASA GCMD keywords convention. |
| **Keywords** | Keywords are used to facilitate Product discovery. Based on hierarchical relationships adopted from the NASA GCMD keywords database, keywords usually refer to broader terms regarding the Variable and are assigned to a given Product. |
| [**EO Mission**](https://opensciencedata.esa.int/eo-missions/catalog) | Earth Observation Satellite Missions used to generate the Product. |
:::

The catalog's structure is designed to be FAIR (Findable, Accessible, Interoperable, and Reusable). All published items are linked together using a common dictionary and [unified metadata](https://github.com/stac-extensions/osc). For example, a published **Product** is associated with the **Project** that created it and tagged with the scientific **Variables** it contains and the **EO-Mission** used to generate the data.

![OSC-structure](https://github.com/EOEPCA/open-science-catalog-metadata/assets/120453810/8d4d4390-ec7c-40bb-9605-a02e7f33decb)

This rich network of connections is what makes it easy to discover related resources across the entire catalog. More information on how the items are linked is provided in the [**Contributing to the OSC section**](./Contributing%20to%20the%20Open%20Science%20Catalog.md)


## Start Discussions Directly From the Catalog

The **Open Science Catalog** is integrated with the **EarthCODE Discourse forum**, making it easy for you to connect discussions directly to the resources you are exploring. This integration allows you to view or join forum discussions right from the catalog, without needing to leave the page you are on. Whether you’re exploring datasets, workflows, experiments, or other catalog items, you can view existing discussions or start new ones with just a few clicks.

The Open Science Catalog items can be directly linked to posts in the [EarthCODE Discourse forum](../../Community%20and%20Collaboration/Getting%20Started%20With%20The%20EarthCODE%20Discourse/).

![catalog](/img/discourse/oscintegration.gif)

When browsing an item in the catalog, you’ll see a **"Start a new topic on the EarthCODE forum!"** button and a list of discussion posts linked to that particular item. This is how the Op

- **If a discussion already exists:**  
  You will be able to see all the existing comments on the same page. Clicking **"Start a new topic on the EarthCODE forum!"** will take you directly to the relevant topic in the Discourse forum, where you can join the discussion and add your comments.

- **If no discussion exists:**  
  Clicking **"Didn't find what you were looking for? Start a new topic on the EarthCODE forum!"** will create a new topic on the forum, pre-tagged with metadata from the catalog item. These tags help keep discussions organized and easily searchable.  

By linking discussions to specific catalog items, EarthCODE ensures that all conversations related to a resource are centralized in one topic. This approach reduces redundancy, keeps the forum tidy, and makes it easier for you to find valuable insights. If needed, you can still create separate posts outside of these linked discussions. 

:::details Start a Discussion
When commenting on a dataset, workflow, or experiment in the Open Science Catalog, you can make contributions to improve reusability, quality or share constructive ideas to start a conversation about the item. You could start discussions about:
- Missing or incomplete metadata (e.g. missing spatial/temporal coverage, provenance details, variable definitions)
- Feedback on data quality (e.g. unexpected values, data gaps, inconsistencies)
- Questions about the methodology used to generate the product
- Clarifications on units, data formats, or input parameters used in the experiment
- A showcase of what you've reused the experiment for
- Interesting thoughts, references, links or ideas with regards to the item
- Suggestions for improving documentation or usability
- Issues faced when trying to reproduce the experiment or reuse the data
:::

## Metrics and Statistics About the Open Science Catalog

### Metrics

For a high-level overview of the catalog's contents, the **Metrics** page provides a summary of all published products. This view aggregates the data by categories like `Variables`, `Themes`, or `Projects`, and displays their combined temporal and spatial coverage.

You can also use the integrated filter to narrow down the results using free-text keywords or specific categories, just like on the main Search page.

![stats1](/img/osc-giffs/statistisc-osc-1.gif)

The slider below the metrics window
![slider](https://github.com/EOEPCA/open-science-catalog-metadata/assets/120453810/c0cb1e4f-3440-44e1-a7fb-af0fa1264218)
allows to zoom the display in and out.

To highlight the spatial coverage of a selected product click the pin
![pin-icon](https://github.com/EOEPCA/open-science-catalog-metadata/assets/120453810/faa609f0-bf94-4d4a-a1dc-f91f2dcc2bbb)
icon.

Click on the access
![access-icon](https://github.com/EOEPCA/open-science-catalog-metadata/assets/120453810/92d05d0e-c98b-4f6e-85f0-f3f92c1ac344)
icon to view the product page in a new tab.


The last column in that page provides details about the spatial coverage of selected products. Clicking on the globe icon displays the list of products and their spatial footprint.


### Statistics

Within the metrics page, the **Statistics** button is available providing a summary of the content available within the catalog. Product statistics are provided as number of products over time, by Variable, and by EO Mission.

![stats2](/img/osc-giffs/osc-statistics-2.gif)

- Temporal coverage: A bar chart representing the number of Products per year (summary of temporal coverage of Products). Hovering over the bars shows the number of Products available in each year.
- Variable distribution: A list and a pie chart representing the number of products that belong to each variable and percentage in a total sum of variables available in the catalog.
- Satellite mission distribution: A multi-color pie chart representing the distribution of satellite missions used to generate products.
