---
order: 1
---
# Open Science Catalog (OSC)

## Introduction

The Open Science Catalog (OSC) is a key component of the ESA EO Open Science framework. It is built on the Spatio Temporal Asset Catalog (STAC), which is a standardised format for describing geospatial data. The catalog captures information about Projects, Products, Workflows, and Experiments, and their relationships to ESA Themes, Variables, EO missions. These elements contain **information and direct links** to the corresponding research outcomes, which are themselves located in external storage providers.

Users can browse and explore these interlinked elemennts throguht the webrowser, API or directly through the data itself. See [Data Discovery and Access](Discovering%20Resources) for more information.


## Adding / updating entries.

The different ways to add/update/remove entries from the catalog are described in the [**Contributing to the OSC section**](./Contributing%20to%20the%20Open%20Science%20Catalog.md).

At a core level, each update to metadata is handled via a [Pull Request (PR)](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests).

This Pull Request allows for reviewers to see the changes to be applied in advance, to check for validity of the requested changes (via an automated validation script) and to provide reviews as comments.


## Structure

The Open Science Catalog is a deployment of several EOEPCA components, in combination with additional supplementary components. In this section we focus on the metadata and its structure, as that is what most users will need to work with. You can see the full technical architechture of the Open Science Catalog [here](https://github.com/ESA-EarthCODE/open-science-catalog-metadata/wiki/System-Design-Document-%E2%80%90-v1.0.0).

The Open Science Catalog metadata is a STAC catalog comprised of json files, with specific attributes and structure that together describe its elements - Themes, Variables, EO Missions, Projects, Products, Workflows, and Experiments. All files are stored directly on Github [here] (https://github.com/ESA-EarthCODE/open-science-catalog-metadata/tree/main), as they only contain metadata and links and not the actual data in the products, or the code in the workflows.

Detailed information about  Projects, Products, Workflows, and Experiments is available in the tutorial which shows how to manually create files for the OSC - [here](https://esa-earthcode.github.io/tutorials/osc-pr-manual/) .


### Projects

Projects are the containers that have the top level information about your work. It is the first type of information you should provide. Typically an OSC project corresponds to a project financed by the European Space Agency - Earth Observation programme. Before creating new project, check if your project is not already on the [list of onboarded projects](https://opensciencedata.esa.int/projects/catalog). In such case you can use your project entry and only update it where needed.


| **Field**          | **Description**          | **STAC representation**            |
|--------------------|--------------------------|------------------------------------|
| Project_ID         | Numeric identifier       |                                    |
| Status             | “ongoing” or “completed” | osc:status property                |
| Project_Name       | Name                     | title property                     |
| Short_Description  |                          | description property               |
| Website            |                          | link                               |
| Eo4Society_link    |                          | link                               |
| Consortium         |                          | contacts[].name property           |
| Start_Date_Project |                          | extent.temporal[] property         |
| End_Date_Project   |                          | extent.temporal[] property         |
| TO                 |                          | contacts[].name property           |
| TO_E-mail          |                          | contacts[].emails[].value property |
| Theme1 - Theme6    | Theme identifiers        | osc:themes property                |


Metadata of each project is stored in a folder named after their unique id `(collectionid)`. Each folder has one file - collection.json that has all the project information (metadata).

In addition to specifying the links within the project collection.json entry (created above), you should also add an entry in the parent catalog, listing all projects to be correclty rendered into STAC Browser.

### Products

Products represent the outputs of you projects and typically reference datasets. Similarly to Projects, they are STAC items and follow similar structure, with some additional fields, improving their findability.

| **Field**           | **Description**                       | **STAC representation**               |
|---------------------|---------------------------------------|---------------------------------------|
| **ID**              | Numeric identifier                    |                                       |
| **Status**          | “ongoing” or “completed”              | osc:status property                   |
| **Project**         | The project identifier                | osc:project property, collection link |
| **Website**         |                                       | link                                  |
| **Product**         | Name                                  | link                                  |
| **Short_Name**      |                                       | identifier                            |
| **Description**     |                                       | description property                  |
| **Access**          | URL                                   | link                                  |
| **Documentation**   | URL                                   | link                                  |
| **Version**         |                                       | version property                      |
| **DOI**             | Digital Object Identifier             | sci:doi property and cite-as link     |
| **Variable**        | Variable identifier                   | collection link                       |
| **Start**           |                                       | extent.temporal[]                     |
| **End**             |                                       | extent.temporal[]                     |
| **Region**          |                                       | osc:region property                   |
| **Polygon**         |                                       | geometry                              |
| **Released**        |                                       | created property                      |
| **Theme1 - Theme6** | Theme identifiers                     | osc:themes property                   |
| **EO_Missions**     | Semi-colon separated list of missions | osc:missions property                 |
| **Standard_Name**   |                                       | cf:parameter.name property            |


In addition to specifying the links from the product to other parts of the catalog, **it is required** to add the reverse links, as in case of the Project to following elements: 
- From the Product Collection.json to the Catalog.json (listing all products in the OSC)
- From the associated Project to the Product
- From the associated EO-Missions catalog to the Product
- From the associated Variables Catalog to the Product
- From the associated Themes Catalog to the Product


## Workflows

Workflows are the code and workflows associated with a project, that have been used to generate a specific product. Workflows follow `OGC record specifications` in contrast to OSC Projects and Products entries. However, the metadata of a workflow is also expressed in JSON format.

| Field Name               | Description                                                                                                                                                            |
| ------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `conformsTo`             | An array of URIs indicating which OGC API Records specifications this record conforms to.                                                                              |
| `type`                   | Indicates the GeoJSON object type. Required to be `"Feature"` for OGC compliance.                                                                                      |
| `geometry`               | Spatial representation of the item. Set to `None` here, as it may not be spatially explicit.                                                                           |
| `linkTemplates`          | An array of link templates as per the OGC API. Used for dynamic link generation.                                                                                       |
| `id`                     | Unique identifier for the workflow STAC item (`'worldcereal-workflow2'`).                                                                                              |
| `links`                  | List of external and internal references including catalog navigation, project association, theme association, process graph, source code, and service endpoint.       |
| `properties.contacts`    | List of individuals or organizations associated with the workflow. Each contact may include name, email, and roles such as `technical_officer` or `consortium_member`. |
| `properties.created`     | Timestamp representing when the workflow was first created (`2025-07-14T18:02:13Z`).                                                                                   |
| `properties.updated`     | Timestamp of the most recent update to the workflow (`2025-07-14T18:02:13Z`).                                                                                          |
| `properties.version`     | The version number of the workflow (`1`).                                                                                                                              |
| `properties.title`       | A concise, descriptive title of the workflow: *"ESA worldcereal global crop extent detector2"*.                                                                        |
| `properties.description` | A summary of what the workflow does: *"Detects crop land at 10m resolution, trained for global use..."*.                                                               |
| `properties.keywords`    | Array of keywords to support discoverability (e.g., `agriculture`, `crops`).                                                                                           |
| `properties.themes`      | Array of themes the workflow relates to. Each entry includes a `concepts` array with IDs (e.g., `'land'`) and a `scheme` URL.                                          |
| `properties.formats`     | Output formats of the workflow (e.g., `GeoTIFF`).                                                                                                                      |
| `properties.osc:project` | Project ID associated with the workflow (`worldcereal2`).                                                                                                              |
| `properties.osc:status`  | Current status of the workflow (e.g., `completed`).                                                                                                                    |
| `properties.osc:type`    | Type of OSC object, expected to be `workflow`.                                                                                                                         |
| `properties.license`     | License for the workflow (e.g., `'varuious'` – likely a typo for `various`).                                                                                           |



In addition to specifying the links from the workflow to other parts of the catalog, **it is required** to add the reverse links:

- From the Workflow record.json to the workflows/catalog.json (listing all workflows in the OSC)
- From the associated Project to the Workflow
- From the associated Themes to the Workflow


### Themes

Themes describe the Earth Science topics linked to the grand science challenges set in the ESA strategy. This is a fixed list.

Field | Description | STAC representation
-- | -- | --
theme | Theme name | id
description | Theme description | description
link | Link to further resources | link

### Variables

The variables field describes the Geoscience, climate and environmental variables that products and workflows model. There is a fixed list of variables, however if your variable is missing from it you can add it in your Pull Request.

Field | Description | STAC representation
-- | -- | --
theme | The associated theme name | osc:theme property
theme_description |   |  
link | Link to further resources | link
variable | The variable name | id
domain | The variables domain |  
variable description |   | description






