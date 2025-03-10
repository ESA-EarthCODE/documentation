---
order: 0
---
#  10 minutes to EarthCODE

Welcome to 10 Minutes to EarthCODE! This quick-start guide is designed to help you begin working with EarthCODE in just a few minutes. Whether you're new to Earth Science, a researcher, or a developer, EarthCODE provides a collaborative, open development environment for efficient access to Earth observation data, workflows, and computational platforms.

## What is EarthCODE?
EarthCODE stands for "Earth Science Collaborative Open Development Environment". EarthCODE is developed by The European Space Agency (ESA) to advance FAIR Open Science principles across ESA-funded activities, including but not limiting to the [ESA Science Clusters](https://eo4society.esa.int/communities/scientists/) and the [Science Hub](https://sciencehub.esa.int/). The EarthCODE Portal provides a centralised point of access to integrated tools, data, and services for seamless research development, execution, and publication, while fostering collaboration and enabling long-term preservation and reuse of scientific outputs.

## Accessing EarthCODE
To get started, sign in using your [Github](https://github.com/) account. EarthCODE provides secure authentication for accessing resources across platforms, including the [EarthCODE Forum](https://discourse-earthcode.eox.at). Once authenticated, you'll have access to all the tools, discussions, and data you need across EarthCODE’s integrated platforms.

## Choosing a Platform
EarthCODE provides streamlined access to a range of platforms offering Earth Science datasets, tools, and services. With single sign-on via OpenID Connect, users can easily authenticate and explore resources tailored to their research needs. Below is a selection of supported platforms:

- [Copernicus Data Space Ecosystem (CDSE)](https://dataspace.copernicus.eu): Access and process earth observation datasets in the Copernicus Data Space Ecosystem with the openEO API.
- [Deep Earth System Data Laboratory (DeepESDL)](https://www.earthsystemdatalab.net/): Access and process data, and apply machine learning (ML) methods on Xarray Earth System Data Cubes (ESDC).
- [Euro Data Cube](https://eurodatacube.com/): A suite of services to access and process satellite data and develop applications.
- EoxHub/Colcalc: Process Earth observation data in the cloud with live collaboration on code.
- EoxHub/Pangeo: Perform high-performance computations on Earth Science data leveraging geoscience libraries.

Visit the [Working with Platforms](../Technical%20Documentation/Platforms/) page for help on how to choose the platform that best suits your research objectives.

## Exploring the EarthCODE Science Catalog

After finalising research on one of the platforms, your final data products and code can be published in the EarthCODE Catalog - The [Open Science Data Catalog](https://opensciencedata.esa.int/). The catalog includes datasets, workflows, and software that have been published and validated within EarthCODE (i.e., on one of the integrated platforms or following the EarthCODE best practices). It's your gateway to a wide range of resources, whether you're looking for environmental data, code for processing, or reusable workflows. 

## Validating and Publishing Data

EarthCODE allows you to validate products and experiments, ensuring they meet reproducibility and scientific standards. If you have an ESA-funded project, you can contribute to the platform by publishing your datasets, software, or experiments, making your work available for the broader community to use.

The [Open Science Catalog](https://opensciencedata.esa.int/) is based on [STAC](https://stacspec.org/en) which is a "common language to describe geospatial information". The way you publish your research is by creating valid STAC objects and committing them to the [`open-science-catalog-metadata-staging`](https://github.com/EOEPCA/open-science-catalog-metadata-staging) repository on GitHub. 

These objects should contain references to all the resources needed to reproduce your research:
- Input data - with full specification about extent, bands, etc.
- Result data - hosted on open-access data storages
- Workflows - which combined with the input data should replicate the results

Additionally, the STAC objects include metadata information which will help make your products findable, such as:
- Project
- Area
- Variables
- EO Mission

Valid STAC objects will be automatically parsed and added to the Open Science Catalog. The purpose is...

## Who Can Publish?

Anyone with an ESA-funded project is encouraged to publish in EarthCODE. We especially welcome contributions from those part of the ESA Science Clusters, as collaboration among these projects helps promote sharing and innovation in Earth Science research.
