---
order: 1
---
# Publishing Science Results

This section describes how to add entries - data, workflows, products and projects - to the (Open Science Catalog)[https://opensciencedata.esa.int/]. 

## Who can contribute?
Contributions to the Open Science Catalog are vital for advancing FAIR Open Science Principles across ESA-funded Earth Science activities.
We would like to specifically encourage contributions from:

- Principal Investigators of ESA EO (Earth Observation Programme) funded Projects,
- Researchers, Scientists, Data Owners working on ESA-funded EO Projects,
- Principal Investigators, Researchers and Scientists from ESA Science Cluster Projects,
- ESA Technical Officers leading ESA EO Projects
- ESA-ESRIN Science Hub Members (e.g. ESA post-doctoral Research Fellows, ESA Living Planet Fellowship, ESA Visiting Scientists)
- Wider EO Research and Science Community: contact the EarthCODE team at [earth-code@esa.int](mailto:earth-code@esa.int) for more details!

### You can enrich EarthCODE in several impactful ways:

- **Publish Research Products:** Add new content to the Open Science Catalog.
- **Update content:** Keep the descriptions and metadata of products, projects, and more up-to-date.
- **Request removals:** Ensure the catalog remains accurate by requesting the removal of outdated or incorrect entries.

To contribute, you only need to have an active GitHub account. If you don't have one yet, please [create an account](https://github.com/signup) to get started.


## How to Publish Results

To publish your scientific results to the Open Science Catalog, you must:

1.  Host your **datasets**, **code** and **documentation** online.

::: details Proprietary data
Sometimes parts of the data and workflows are protected or private. Although not open, these experiments can still become FAIR and added to the catalogue. The process for adding the entries is the same, until the review, when the EarthCODE team will reach out with specific questions regarding your data.
:::

2. Create entries (STAC Collections) that describe the **dataset files**, **code** and their relationships to existing items in the catalog.

3. Request to add them to the PRR. 

By following these steps, your research becomes part of a broader ecosystem of reusable, discoverable, and connected scientific outputs.



## Step 1: Hosting your **datasets**, **code** and **documentation** online

To contribute to the Open Science Catalog, your research data and workflows/code must be hosted on remote, persistent storage that allows discovery. Examples include:
- ESA’s Project Results Repository (PRR)
- S3-compatible object storage
- GitHub for code
- Zenodo, CEDA, Dataverse, or other persistent archives

If your data is already hosted on a reliable storage provider you do **not** need to make changes.

If your data is not yet in the cloud or its persistence is uncertain, we recommend uploading it to the **ESA Project Results Repository (PRR)**. The PRR provides access to data, workflows, experiments and documentation from ESA Projects organised across Collections, accessible via the [STAC API](https://github.com/radiantearth/stac-api-spec). Each Collection contains [STAC Items](https://github.com/radiantearth/stac-spec/blob/master/item-spec/item-spec.md), with their related Assets stored within the PRR storage. **Therefore, to upload your data to the PRR you have to generate a STAC collection that describes your data, code and documentation.**

<!-- Change to see the PRR page -->
See the [PRR introduction example](https://esa-earthcode.github.io/examples/prr-stac-introduction/) for a detailed, interactive introduction about how to do this, or the [bank of examples](https://esa-earthcode.github.io/examples/index-1/) to see how different ESA projects have generated their collections.

::: details Requesting PRR Storage
If you have any questions or require suppport please email the EarthCODE support team: [earth-code@esa.int](mailto:earth-code@esa.int) .
:::



## Step 2: Creating OSC Entries

### How to publish new data to the catalog?

The Open Science Catalog is built on the Spatio Temporal Asset Catalog (STAC), which is a standardised format for describing geospatial data. Therefore new entries must conform to its specification. There are three ways to add information to the OSC:

### 1: Using a Visual GUI

- [Open Science Catalog Editor](https://workspace.earthcode.eox.at/) - A graphical user interface for automatically creating OSC entries and review requests.

### 2: Manual creation
- [Directly creating/editing STAC files](https://esa-earthcode.github.io/examples/osc-pr-manual/) - A guide for manually creating OSC entries. Requires knowledge of git.

- [Generating OSC files using pystac](https://esa-earthcode.github.io/examples/osc-pr-pystac/) - A guide for creating OSC entries using pystac. Requires knowledge of git and Python.

### 3: Using one of the platform tools
- [DeepCode](https://github.com/deepesdl/deep-code) - An example using DeepCode: a library for automatically generating product entries for DeepESDL datasets.
- Additionally, you can contact your platform supplier for support.
 


## Step 3: Review & Publishing

Regardless of what option for creating OSC Entries you choose, the generated data will be reviewed by EarthCODE team before it is accepted into the PRR. The review process will take place on GitHub via its [pull request functionality](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests). The EarthCODE team will:
- check the accuracy and completeness of descriptions, links and information
- ask for a code snippet that shows how to read the data (if applicable)
- ask for a code snipptet that demonstrates how to run the code (if applicable)
After any required changes are made, the OSC entries are ingested in the catalog.

When a new product or workflow is ingested in the OSC, the team will encourage you to promote it on the (EarthCODE forum)[https://discourse-earthcode.eox.at/].