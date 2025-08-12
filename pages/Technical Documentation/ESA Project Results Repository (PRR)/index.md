---
order: 1
---
# ESA Project Results Repository


# ESA Project Results Repository

The [ESA Project Results Repository (PRR)](https://eoresults.esa.int/) provides long term storage for research outcomes. It provides access to data, workflows, experiments and documentation from ESA Projects organised across Collections, accessible via the [STAC API](https://github.com/radiantearth/stac-api-spec). Each Collection contains [STAC Items](https://github.com/radiantearth/stac-spec/blob/master/item-spec/item-spec.md), with their related Assets stored within the PRR storage. Scientists/commercial companies can access the PRR via the [EarthCODE](https://earthcode.esa.int/) and [APEx](https://esa-apex.github.io/apex_documentation/) projects.


# Uploading data to the PRR
In order to upload data to the ESA Project Results Repository (PRR) you have to generate a STAC Collection that is associated to your files. The STAC Collection provides metadata about your files and makes them searchable and machine readable. The metadata generation process is organised in four steps process:

1. Generate a root STAC Collection
2. Group your dataset files into STAC Items and STAC Assets
3. Add the Items to the Collection
4. Save the normalised Collection
5. Send the data, metadata and some extra information to the EarthCODE team.

**In the examples you will find guides to the whole process, code samples from other ESA projects, as well as instructions how to access data from and traverse the PRR**. We recomend starting with the introductory notebook.

- [PRR Examples](https://esa-earthcode.github.io/examples/index-1/)
