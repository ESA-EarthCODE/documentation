---
order: 4
---

# Kerchunk

**Kerchunk** is a Python library that provides a powerful way to access traditional data files like NetCDF, HDF5, and GeoTIFF as if they were a modern, cloud-native Zarr store. The key is that it achieves this without needing to rewrite or duplicate any of the original data.

Instead of converting a large archive, Kerchunk scans the existing files and creates a single, small JSON file. This file acts as a map, containing the exact byte locations of all the individual data chunks within the original files. When a Zarr-aware tool like Xarray is given this JSON map, it can interact with the entire collection of source files as one single, virtual dataset.

The main advantage is that you get the high-performance, parallel access of a cloud-native format for your existing archives, saving the overhead of a full data conversion. This provides a unified way to access different data formats efficiently. To find out more about Kerchunk we recommend reading the [Kerchunk documentation](https://fsspec.github.io/kerchunk/test_example.html) for more details.

The primary limitation, however, is that the performance is constrained by the chunking of the original files, as Kerchunk can only point to the data chunks that already exist.


## When to Use Kerchunk in EarthCODE

You should use Kerchunk when you have a large, existing archive of data in a traditional format (like NetCDF, HDF5, or GRIB2) and need to maintain it in that original format.

This is a common requirement when your data must remain interoperable with external communities or workflows that rely on the original file format. Kerchunk allows you to keep your archive intact, ensuring continuity and compatibility, while simultaneously providing a high-performance, cloud-native access layer for users within the EarthCODE ecosystem. It gives you the benefits of Zarr—like efficient subsetting and parallel reads—without the cost and complexity of a full data format conversion.

## Describing Kerchunk with STAC For EarthCODE

Because Kerchunk presents your data as a virtual Zarr store, the process for describing it in a STAC catalog is [**identical to describing a native Zarr dataset.**](./zarr.md)

The Kerchunk JSON index file is treated as the root of the Zarr store. You will create a single STAC Collection to represent the entire virtual dataset and use the same tools and STAC extensions, such as the **Data Cube Extension**, to describe the variables and dimensions it contains. The asset link in your STAC Collection will simply point to the Kerchunk JSON index file instead of a Zarr directory.
