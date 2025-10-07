---
order: 5
---

# FlatGeobuf

FlatGeobuf is a modern, high-performance binary format for vector data (points, lines, and polygons). While traditional formats like GeoJSON or Shapefiles are common, they are often inefficient for cloud and web-based workflows, typically requiring a full file download to perform a spatial query. FlatGeobuf is specifically designed to solve this problem by enabling fast, partial access to large vector datasets over the network.

![FlatGeobuf layout](/img/bestpractice/flatgeobuf-layout.png)
- MB: Magic bytes
- H: Header (variable size flatbuffer),
- I (optional): Static packed Hilbert R-tree index (static size custom buffer), 
- DATA: Features (variable size flatbuffers)

### How it Works

The key feature of FlatGeobuf is a spatial index that is stored directly within the single file. This allows a client application to perform a highly efficient two-step read over the network:

1.  First, the client sends a small HTTP range request to fetch only the file header, which contains the spatial index.
2.  The client uses this index to quickly determine which features are located within a specific geographic bounding box (e.g., the current map view).
3.  Finally, it makes a second, targeted request to download *only the data for those specific features*, avoiding the need to transfer the entire file.

This makes FlatGeobuf an ideal format for web mapping applications and any workflow that involves displaying or analyzing a subset of a large vector dataset. It is a simple, single-file format that is fully compatible with standard geospatial tools through the GDAL/OGR library, making it easy to use in Python, R, and other environments.

It is important to note that to enable this fast, random access to features, the FlatGeobuf format is uncompressed.


## When to Use FlatGeobuf in EarthCODE

You should use FlatGeobuf when you have a **large vector dataset** and the primary use case involves users accessing a **spatial subset** of that data, especially in web-based applications. It is the recommended format for making large collections of points, lines, or polygons efficiently available for remote clients.

**For very small datasets (e.g., a few hundred features), the benefits of FlatGeobuf's spatial index are minimal, and a simple GeoJSON may be sufficient.**

Good candidates for FlatGeobuf include:

* **Interactive Web Maps:** Datasets that need to be displayed on a map where users can pan and zoom. The client can dynamically fetch only the features visible in the current view, ensuring a fast and responsive experience.
* **Spatial Querying:** Any workflow where users or applications need to extract all features within a specific Area of Interest (AOI) without downloading the entire file.
* **Large Point Collections:** Datasets with many thousands or millions of points, such as global in-situ measurements or the output of a feature detection algorithm.



## Describing FlatGeoBufs with STAC For EarthCODE


A FlatGeobuf file is treated as a single asset within a STAC Item. The STAC Item provides the overall spatial and temporal metadata for the entire collection of features contained within the file.

The key requirements for describing a FlatGeobuf asset are:

1.  **Create a STAC Item:** The Item's `bbox` and `datetime` properties should cover the full extent of all features within the FlatGeobuf file.
2.  **Define the Asset:** Within the Item's `assets` dictionary, create an entry for your file.
    * The `href` must be the URL to your `.fgb` file.
    * The `type` (media type) must be set to `application/vnd.flatgeobuf`. This is essential for client applications to correctly identify the format.









