---
order: 1
---

# Data Best Practices

In this page we describe the design decisions and best practices for distributing your data to maximize its value and impact. That means planning for real users and workflows, choosing interoperable, cloud‑ready formats and conventions, and integrating automated checks for quality and performance.

When publishing your data product in EarthCODE we recommend making the following considerations:

- [Plan for who the data is and how it will be used](#plan-for-who-the-data-is-and-how-it-will-be-used) — Identify communities, use cases, and constraints to guide format, metadata, and services.
- [Plan for FAIR-ness](#plan-for-fair-ness) — Plan for PIDs, licensing, metadata, and repository strategy to ensure findability, accessibility, interoperability, and reusability.
- [Preferred Data Formats](#preferred-data-formats) — Prefer self‑describing, cloud‑optimized formats broadly supported by community tools.
- [Data Descriptions](#data-descriptions) — Automate structure and metadata checks to catch issues early.
- [CF Standards](#cf-conventions) — Standardize variable names, units, coordinates, and flags for consistent interpretation and validation.
- [Conventions](#conventions) — Align naming, CRS, coordinates, and versioning so datasets combine cleanly.
- [Data Quality](#data-quality) — Capture uncertainties, quality flags, and public documentation to guide correct use.
- [Guides and Examples](#guides-and-examples) — Provide examples and starter notebooks that demonstrate common access and analysis workflows.
- [Provenance](#provenance) — Record lineage and workflow configurations to enable reproducibility and trace updates.


## Plan for who the data is and how it will be used
As a first step, start by identifying your primary user groups—what they need to do with the data—and then, as a second step, which tools they will use to work with it.

Consider scientists running large‑scale analyses, GIS developers visualizing and integrating layers, software engineers building applications, and policy or operational teams who need timely summaries and visualizations. **Consider what EarthCODE Integrated platforms the commuunity uses and consider how it integrates with available tools for visualization and tools that can consume your data within the platform.** Translate these needs into choices about structure, format, metadata, access methods, and examples so people can use the data with the tools they already know. For example, if the dominant use is web map visualization in GIS, favor COGs with STAC metadata to leverage overviews and HTTP range reads. If the dominant use is multi‑variable time‑series analysis, prefer Zarr with sensible chunking.

After identifying the community, consider:
- Users and tasks (who, what success looks like, typical queries)
- Tools and environments (for example Python with xarray/dask/rasterio, QGIS, R with terra/stars, command‑line GDAL, web apps/APIs such as OGC/STAC, and EarthCODE integrated platforms like openEO, xcube/DeepESDL, or Pangeo)
- Are there common tasks that these users would do? (e.g. spatial subset -> summarize -> visualize)
- Formats and layout that the community expects (COG/GeoTIFF, Zarr, netCDF, GeoParquet/Parquet/CSV; chunking/tiling tuned to access patterns)
- Spatiotemporal resolution and CRS/projection aligned to expected workflows
- Provenance, quality, and citation metadata (what to trust, how to cite, versioning)
- Discoverability and support (keywords, landing page, docs/notebooks, contact channel)

The outcome should be a concise plan covering user profiles, the chosen formats/metadata profile, access endpoints, example workflows, and how users can get help or provide feedback.

## Plan for FAIR-ness
Establish early on in your project how the data will remain findable, accessible, interoperable, and reusable by uploading to EarthCODE.

Read the [FAIR Data Guide](/pages/Community%20and%20Best%20Practices/FAIR%20and%20Open%20Science%20Best%20Practices/Data.md) for more information.

## Preferred Data Formats
While there are several acceptable formats for EarthCODE, listed at [FAIR Data Best Practices - Interoperability](/pages/Community%20and%20Best%20Practices/FAIR%20and%20Open%20Science%20Best%20Practices/Data#interoperability), we highly encourage and prefer cloud-native geospatial formats.

In practice, chunked, self‑describing layouts let clients read exactly what they need, scale cleanly, and keep costs predictable; this leads to:
- Lower latency: fetch only the required chunks instead of downloading whole files.
- Horizontal scalability: object storage plus chunking supports many parallel reads across large datasets.
- Flexible analysis: formats designed for subsetting and aggregation enable on‑the‑fly queries and near‑data computation.
- Cost efficiency: compression, tiling/chunking, and partial reads reduce storage and egress.

Cloud hosting alone does not resolve geospatial access challenges. Users should not have to download multi‑gigabyte files just to work on a small area or time slice. Moving data to the cloud changes how it is accessed. Instead of reading from a local disk, clients use HTTP range-gets to request specific portions, or byte ranges, of a file over the network. This makes it crucial to package data into optimal, independent chunks. Cloud formats essentially arrange data into chunks and provide metadata, either internally or in external sidecar files, that acts as a map for applications to find the exact byte ranges they need for a query. This is done to produce Analysis-Ready, Cloud-Optimized (ARCO) data, which combines a cloud-friendly structure with complete metadata, standardized coordinates, and clear quality information to enable reproducible science, optimize computation, and reduce costs for everyone in the EarthCODE ecosystem.

Cloud‑optimized formats paired with standard client libraries available in EarthCODE platforms allow direct, client‑side subsetting from object storage, without additional services, enabling the ecosystem to make use of your data.

When designing for the cloud, you need to plan bottlenecks in latency and request counts; which means choosing chunk/tiling sizes that limit the number of round trips, ensuring the metadata needed to locate chunks is compact and fetched in one or very few reads, and aligning the layout with typical access patterns.

The guidelines below should be sufficient for giving you an idea of the key design decisions and available options during the design of your data. For a more detailed guide on cloud-native geospatial formats, we advise reading the [cloud-native-geo guide](https://guide.cloudnativegeo.org/).

In the following sections we will discuss the most common formats submitted to EarthCODE, their use and how to create them.

| Data type | Preferred format |
|---|---|
| Raster scenes & mosaics | [**COG (GeoTIFF)**](./COG.md) with internal tiling and overviews for fast partial reads; lossless compression by default. |
| n-D data cubes (time/lat/lon/level) | [**Zarr/GeoZarr**](./zarr.md) with sensible chunking and consolidated metadata |
| NetCDF Virtualized | [**kerchunk**](./Kerchunk.md) (JSON references) to present existing netCDF‑4/HDF5 or GRIB2 as a virtual Zarr for efficient, chunked cloud reads without rewriting source data. |
| Vector Data | [**FlatGeobuf**](./flatgeobuff.md) with spatial index; suitable for HTTP streaming and subsetting. |
| Tabular in-situ/model outputs | **Parquet** (preferred) or **CSV** for small datasets; define schema, units, and time zones. |


When deciding how to created and distribute your cloud‑optimized dataset, think about:
1. Which variable(s) and fields should be included?
2. Which tools will the users use and does the format support it?
3. Will you publish variants optimized for different needs?
4. What is the primary use case — visualization, analysis, or both?
5. How much data is typically viewed or retrieved per request?
6. Which CRS and resolution best match expected workflows?
7. How will you chunk/tile and compress the data to suit access patterns?

<!--
----- TBD

Optimizing NetCDF-4 and HDF5 for the Cloud

Many valuable datasets are stored in traditional, self-describing formats like NetCDF-4 and HDF5. While robust, these single-file formats are not inherently optimized for cloud access, which relies on reading small portions of a file. To make these files perform well in a cloud environment, specific optimization steps are required.

The most critical step is to ensure the data variables are internally **chunked**. A well-chosen chunking strategy is essential for enabling clients to read a subset of the data without downloading the entire file. Please refer to our [Data Compression and Chunking](#compression-and-chunking) section for detailed guidance on this.

For providing modern, high-performance access to existing NetCDF and HDF5 archives, the recommended approach is to use **Kerchunk**. As described in its own section, Kerchunk creates a small index file that allows these traditional files to be read as if they were a cloud-native Zarr store. This provides the benefits of cloud-optimized access without needing to convert or duplicate the original data.

For HDF5 files specifically, advanced internal features like 'Paged Aggregation' can further boost performance by optimizing how the file's metadata is organized for faster reads. This can be configured during the file's creation or applied to existing files using tools like `h5repack`.

-->

## Data Descriptions

High-quality metadata is essential for making your data findable, understandable, and usable. Without proper annotations, attributes and descriptions, a data file is just a set of numbers. Good metadata provides the necessary context for both humans and machines to interpret and analyze the data correctly.

In EarthCODE, metadata exists at two levels: the **catalog level** (in STAC), which makes your entire dataset discoverable, and the **file level**, which is embedded directly within your data files (e.g., as attributes in a Zarr or NetCDF file). This file-level metadata is critical for making your data self-describing and analysis-ready. Your data files should include both global attributes that describe the entire dataset (`title`, `summary`, `provenance`, `license`) and variable-specific attributes for each data array (`long_name`, `units`, `fill_value`) and others. Following established standards like the CF Conventions is crucial for defining coordinates, map projections, and variable names.

Manually ensuring all metadata is correct and complete is difficult and error-prone. Therefore, we strongly recommend you integrate automated checks into your data production workflow. The EarthCODE ecosystem uses FAIR tooling such as [**`xr-lint`**](https://github.com/bcdev/xrlint) for Xarray datasets, **`xcube validation`**, or the **`cf-checker`** can programmatically validate your files. These tools can flag structural issues, missing metadata, non-compliant attributes, and even performance bottlenecks *before* you publish, ensuring higher data quality and preventing issues for your users.

:::details Example `xr-lint` Outputs
```py
linter = xrl.new_linter("recommended")
linter.validate(dnbr_dataset)
```

Output (xr‑lint):

| Object | Level | Message | Code |
|---|---|---|---|
| ds | warn | Missing attribute 'title'. | content-desc |
| ds | warn | Missing attribute 'history'. | content-desc |
| ds.data_vars['delta_NBR'] | warn | Missing attribute 'institution'. | content-desc |
| ds.data_vars['delta_NBR'] | warn | Missing attribute 'source'. | content-desc |
| ds.data_vars['delta_NBR'] | warn | Missing attribute 'references'. | content-desc |
| ds.data_vars['delta_NBR'] | warn | Missing attribute 'comment'. | content-desc |
| ds.data_vars['burned_ha_mask'] | warn | Missing attribute 'institution'. | content-desc |
| ds.data_vars['burned_ha_mask'] | warn | Missing attribute 'source'. | content-desc |
| ds.data_vars['burned_ha_mask'] | warn | Missing attribute 'references'. | content-desc |
| ds.data_vars['burned_ha_mask'] | warn | Missing attribute 'comment'. | content-desc |
| ds | warn | Missing attribute 'Conventions'. | conventions |
| ds.attrs | warn | Missing metadata, attributes are empty. | no-empty-attrs |
| ds.data_vars['delta_NBR'].attrs | warn | Missing metadata, attributes are empty. | no-empty-attrs |
| ds.data_vars['burned_ha_mask'].attrs | warn | Missing metadata, attributes are empty. | no-empty-attrs |
| ds.data_vars['delta_NBR'] | warn | Missing attribute 'standard_name'. | var-desc |
| ds.data_vars['delta_NBR'] | warn | Missing attribute 'long_name'. | var-desc |
| ds.data_vars['burned_ha_mask'] | warn | Missing attribute 'standard_name'. | var-desc |
| ds.data_vars['burned_ha_mask'] | warn | Missing attribute 'long_name'. | var-desc |
| ds.data_vars['delta_NBR'] | warn | Missing attribute 'units'. | var-units |
| ds.data_vars['burned_ha_mask'] | warn | Missing attribute 'units'. | var-units |

:::



## CF Conventions

Adopt CF metadata so variables, units, coordinates, and flags have consistent meanings across datasets and can be validated automatically.

The Climate and Forecast (CF) Conventions are a set of community-governed standards for making Earth science data self-describing. By providing a common "language" for metadata within data files (like NetCDF, HDF5, and Zarr), the CF Conventions ensure that information is unambiguous and machine-readable.

Specifically, the conventions standardize how to describe:

* **Variables:** Using a controlled list of **Standard Names** (e.g., `air_temperature` instead of `T` or `temp`) to give variables a precise, scientific meaning.
* **Units:** A consistent format for physical units (e.g., `K` for Kelvin, `m s-1` for meters per second).
* **Coordinates:** Clear definitions for spatial (`latitude`, `longitude`), temporal (`time`), and vertical coordinate axes.
* **Grids:** Information about map projections and grid cell boundaries.
* **Data Quality:** A structured way to represent quality information using flags (`flag_values`, `flag_masks`, `flag_meanings`).

Adhering to CF Conventions is critical for interoperability within EarthCODE. When your data is CF-compliant, analysis tools like Xarray can automatically parse its structure, correctly label plots, handle units, and combine it with other datasets. This removes the need for custom code for each new dataset and is a cornerstone of making your data truly analysis-ready.

We strongly recommend you consult the official documentation when preparing your data:

* **CF Conventions Website:** [cfconventions.org](https://cfconventions.org/)
* **Official Standard Name Table:** [cfconventions.org/standard-names.html](https://cfconventions.org/standard-names.html)


## Conventions

For data from different sources to be combined and analyzed seamlessly, they must share a common set of conventions. Adhering to standards for naming, coordinate systems, and versioning is necessary within the EarthCODE ecosystem.

### Naming Conventions

Consistent naming for your products, files, and variables is essential for both human readability and machine-driven discovery.

* **Data Products:** Your dataset will be identified by a `name` and a unique `id`.
    * **`name`**: This should be the human-readable, scientifically descriptive name for your product. A good name **must begin with the abbreviation of the project** it is associated with, followed by other descriptive elements like the data source (instrument/platform), the scientific content (e.g., "Sea Surface Temperature"), processing level, and spatial resolution.
    * **`id`**: This is the unique identifier for your product within EarthCODE, equivalent to a 'short name'. It must be a single, concise string containing only alphanumeric characters and underscores to ensure system compatibility. This is attached to your STAC metadata.

* **Files:** Filenames should be unique and descriptive. For any date and time information in a filename, you **must** use the **ISO 8601** standard (e.g., `YYYY-MM-DDTHHMMSSZ`).

* **Variables:** Variable names within your data files should be meaningful and contain no special characters or spaces. Crucially, you should adopt the [**CF Standard Name**](https://cfconventions.org/Data/cf-standard-names/current/build/cf-standard-name-table.html) for each variable wherever possible. This provides an unambiguous, community-agreed definition for your data.

### Representing Coordinates

All geospatial coordinates must be explicitly and completely defined to make the data analysis-ready. EarthCODE expects all coordinate information to follow the **CF Conventions**.

* **Spatial Coordinates:** Latitude and longitude variables must include standard `units`. The data's map projection and geodetic datum (e.g., WGS84) must be defined using a CF `grid_mapping` attribute.

* **Temporal Coordinate:** The time axis must be defined with a `units` attribute that specifies the time unit since a reference date-time (e.g., `"seconds since 1970-01-01T00:00:00Z"`). Always use Coordinated Universal Time (UTC). For data representing a time interval, use a `bounds` variable to define the start and end times.

* **Vertical Coordinate:** If present, vertical axes must be clearly described with `units` (e.g., `m` or `hPa`) and a `positive` attribute to define the direction (`"up"` or `"down"`).

<!-- ### Versioning

Data products evolve. When you reprocess data or make significant changes to the algorithms or content, you must assign it a new, distinct version number. This is critical for provenance and reproducibility, as it allows users to reliably track changes and cite the exact version of the data they used. Please coordinate with the EarthCODE team to establish a clear versioning strategy for your products. -->


## Data Quality

Define how quality is assessed and communicated, including uncertainty, CF‑compliant flags, and links to public documentation and ancillary inputs.

Transparent and comprehensive data quality information is essential for building trust with users. It allows them to correctly interpret your data, understand its limitations, and prevent its misuse. In EarthCODE, communicating data quality is a two-part process involving public documentation and detailed metadata embedded directly within your data files.

### Public Documentation

Every dataset should be accompanied by accessible public documentation, such as a User Guide. This document should describe:

* The processes used for quality assessment and control.
* Known issues, artifacts, or limitations of the data.
* Results from calibration and validation activities.

### In-File Quality Metadata

The data files themselves must contain machine-readable quality information. This allows tools and users to programmatically filter and assess the data. The following must be included:

* **Uncertainty Information:** Where possible, you should provide a separate data variable or layer that gives a per-pixel uncertainty estimate for the primary measurement.

* **Quality Flags:** Datasets should include a layer containing per-pixel quality flags. These flags **must** be described using the **CF Conventions** attributes (`flag_values`, `flag_masks`, and `flag_meanings`). This standard approach makes the flags self-describing, allowing software to easily interpret conditions like "cloud detected," "land," "water," or "good quality."

* **Links to Documentation:** The file's global attributes should include URLs that point directly to the detailed public documentation, ancillary data products used in the processing, and relevant validation reports. This creates a clear and traceable link between the data and its supporting information.


## Guides and Examples

Provide concise user guides, starter notebooks, and example workflows showing how to access, subset, and analyze the data with common tools as EarthCODE workflows associated with the data.

A well-formatted, high-quality dataset is only useful if people can easily understand and work with it. To maximize the impact and adoption of your data, it is essential to provide resources that lower the barrier to entry for new users. The most effective way to do this is by creating example workflows in EarthCODE, typically as Jupyter Notebooks.

These workflows guide users through the entire process from discovery to analysis. They serve as both documentation and live, executable code that users can adapt for their own research. You are strongly encouraged to publish your examples in a public repository and link them to your Product.

An effective example workflow or starter notebook should include:

* **A clear objective:** State the scientific goal of the notebook (e.g., "Calculate the average sea surface temperature for the Mediterranean Sea in 2023").
* **Setup and dependencies:** The required libraries and how to import them.
* **Data discovery:** A code snippet showing how to find the dataset in the EarthCODE catalog (e.g., via a STAC search).
* **Data access:** How to open the data file(s) (e.g., using `xarray` for a Zarr store or `rioxarray` for a COG).
* **Subsetting and processing:** Common tasks like selecting a geographic region, filtering by time, or handling missing data.
* **A simple analysis:** A meaningful calculation, such as computing a temporal average, an anomaly, or a derived index.
* **Visualization:** Clear examples of how to plot the results, such as creating a map or a time-series graph.

By providing such resources, you significantly accelerate the scientific process for your users.

You can explore examples from other data providers in the **[EarthCODE Workflows Catalog](https://opensciencedata.esa.int/workflows/catalog)**. For more detailed, step-by-step guides on how to create these resources, please refer to the EarthCODE tutorials page.

## Provenance

Good provenance is the key to creating trustworthy and reproducible science. It is the complete record of a dataset's origin, detailing not just the source data, but the specific methods, software, and configurations used to create it. This ensures that any result can be understood, verified, and reproduced by other researchers.

In EarthCODE, you are encouraged to capture this information by formally describing your data generation process as an **Experiment**. An experiment is a record that links all the components of your research—code, workflow, input data, and output products—into a fully traceable chain.

:::details Example: The WorldCereal openEO Experiment

A clear example of this is the **WorldCereal openEO Experiment**, which generates global crop maps. Its provenance is captured as a chain of linked objects in the EarthCODE catalog, allowing anyone to trace the full lifecycle of the data product.

This chain consists of:

* **The Experiment:** A high-level record that describes the scientific goal of the project—in this case, to generate the WorldCereal crop maps. It serves as the starting point that connects all other components.
    * [View the WorldCereal Experiment Record](https://opensciencedata.esa.int/experiments/worldcerealexperiment/record)

* **The Workflow:** The experiment links to a specific, versioned openEO workflow. This defines the exact, repeatable sequence of processing steps used to transform the input data into the final product.
    * [View the WorldCereal Workflow Record](https://opensciencedata.esa.int/workflows/worldcerealworkflow/record)

* **The Code and Inputs:** The workflow itself provides full transparency by linking to the source code on GitHub and specifying the exact input data collections used for the analysis (e.g., Sentinel-1 and Sentinel-2).

* **The Output Data:** The resulting data product—in this case, a STAC Collection of COGs—contains metadata that points directly back to the experiment and workflow that generated it.
    * [View an Example WorldCereal Data Product](https://opensciencedata.esa.int/products/worldcereal-crop-extent-belgium/collection)

This linked approach creates a fully transparent and reproducible research object, fulfilling the FAIR data principles. Users can start with the final data and trace its entire history, or discover an experiment and find all of its outputs. When you generate data using integrated platforms like openEO within EarthCODE, much of this provenance is captured for you automatically.
:::

<!-- 

## Applying and maintaining FAIR Principles
The checklist below provides practical guidance for applying the FAIR principles in EarthCODE projects.

- 1. Planning Phase
    - Choose FAIR-compliant data formats, metadata standards and tools (e.g., STAC, JSON for metadata, Zarr for data).
    - Select an open license (e.g., CC-BY) to ensure data accessibility and reusability.
    - Define roles and permissions for team members to control access to data and resources.
    - Check the available EarthCODE platforms and try to identify the one that best suits your needs.
- 2. Kicking Off
    - Whenever possible, choose an EarthCODE platform to make publishing in EarthCODE easier
    - Create and add metadata to datasets as data is collected to ensure findability.
    - Document project goals and Open Science practices: Share with the team and ensure alignment with FAIR principles.
    - Ensure data accessibility: Make sure datasets are stored in a location where they can be easily accessed by the team (e.g., cloud storage, data repository).
- 3. Ongoing
    - Monitor data and metadata quality regularly to ensure accessibility and correctness.
    - Ensure interoperability: Check that datasets are compatible with community standards and formats (e.g., Zarr, GeoTIFF, GeoJSON, NetCDF).
    - Foster collaboration: Encourage sharing and cross-team cooperation, including sharing links to datasets stored externally if not yet in EarthCODE.
    - Implement version control for datasets, ensuring that the latest versions are clearly documented.
- 4. Publishing in EarthCODE (End of Project)
    - Upload datasets and metadata to EarthCODE for long-term storage and publishing.
    - Link datasets to related resources (e.g., other datasets, publications) through metadata to facilitate further exploration and reuse.
    - Verify open licenses: Ensure datasets are published with open licenses for broad reuse (e.g., CC-BY).
    - Ensure the metadata is up-to-date and complete before publishing in EarthCODE.
- 5. Completed
    - Finalize and publish datasets in EarthCODE, ensuring they are accessible, findable, and reusable.
    - Encourage data reuse: Ensure datasets are easy to find, access, and understand for reuse by others. -->
