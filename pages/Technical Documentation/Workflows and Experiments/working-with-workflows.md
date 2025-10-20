# Discovering and Using Workflows

The Open Science Catalog (OSC) also serves as a registry for the Workflows used to generate data products. Like products, workflows are discoverable items ([view in OSC](https://opensciencedata.esa.int/workflows/catalog)) with metadata linking them to projects, themes, and experiments. Understanding and reusing these workflows is key to reproducible science in EarthCODE; this page explains what they are and how to find them.

## What are Workflows and Experiments in EarthCODE?

In EarthCODE, a published data **Product** is the result of a defined scientific process, which is captured as an **Experiment**. An Experiment record links a specific output product back to the exact **Workflow** used to create it, making the entire research process transparent and reproducible.

A **workflow** defines the set of processing steps used in an experiment. It is not just source code—it is something that can be formally executed within a platform using a defined interface. Workflows may take different forms, including:
- openEO Process Graphs
- OGC API Processes (e.g. CWL, Application Package)
- MLflow models
- Jupyter Notebooks

This ensures workflows can be cross-executable between platforms, promoting interoperability and reuse. The OSC provides the central interface to discover and access these interconnected components, enabling FAIR science.


## Discovering Workflows in the OSC

Workflows are discoverable resources within the Open Science Catalog, just like Data Products. You can explore and discover them the same way as products, described in the [OSC guide](/Technical%20Documentation/Open%20Science%20Catalog/Discovering%20Resources).

![workflows-gif](/img/osc-giffs/workflows-intro-giff.gif)

You can browse the dedicated [Workflows section](https://opensciencedata.esa.int/workflows/catalog) of the OSC. Similar to products, workflows are linked to relevant [**Themes**](https://opensciencedata.esa.int/themes/catalog), [**Projects**](https://opensciencedata.esa.int/projects/catalog), [**Variables**](https://opensciencedata.esa.int/variables/catalog), and [**EO-Missions**](https://opensciencedata.esa.int/eo-missions/catalog).


## Accessing Source Code

The source code that supports a workflow may be referenced, but the workflow itself must be described in a way that allows it to be executed by integrated EarthCODE platforms. This distinction enables reproducibility and compatibility across platforms. Platforms handle these definitions.

Workflows are typically stored in the **EarthCODE GitHub organization**, and referenced in the Open Science Catalog as part of the workflow metadata.

![github access](/img/osc-giffs/githubgiff.gif)


<!-- :::tip Work in Progress
 Navigating through these categories allows you to explore workflows related to specific scientific domains or research initiatives.
The Search https://opensciencedata.esa.int/search is not implemented yet for workflows
::: -->

## Accessing Workflows on Platforms

Discovering a workflow in the Open Science Catalog is the first step; the next is accessing it for reuse or execution. The workflow's metadata record in the OSC often provides direct links to facilitate this.

Workflow records include links that allow you to directly open the workflow within an integrated EarthCODE platform. For example, a Jupyter Notebook workflow might have a link to open it directly in a platform like DeepESDL or EDC EOxHub Workspaces, provided you have an account (via EarthCODE SSO). Similarly, an openEO Process Graph might be directly usable via the openEO web editor or client libraries connected to the CDSE backend.

Executing these workflows, especially those designed for large-scale data processing, typically requires computational resources. You can make a request to ESA to sponsor you to use these resources via the NoR.

![accessing workflows on Platforms](/img/osc-giffs/accessing-workflows.gif)

:::tip NoR Sponsorship
If you need compute resources to run a workflow you discovered, you may be eligible for sponsorship through the **ESA Network of Resources (NoR)**. NoR allows qualifying projects to receive credits or allocations to use the compute and storage capabilities of integrated EarthCODE platforms.

* For a step-by-step guide on applying for NoR resources, please refer to the [**NoR Tutorial**](/Training%20and%20Resources/NoR).
:::

### EarthCODE Integrated Platform-Specific Guidance

For detailed, step-by-step instructions on how to access, configure, and execute specific workflow types (like Jupyter Notebooks, openEO graphs, etc.) within each integrated environment, please consult the individual platform guides available in the **[Working with Platforms](/Technical%20Documentation/Platforms/)** section.


## What Can a Workflow Be?

When publishing to the Open Science Catalog, workflows can represent different types of executable processes designed to promote FAIR and Open Science; you can either publish:

1.  **Scientific Workflow:** This is the actual scientific workflow used to generate a specific Data Product published in the catalog. Sharing this is crucial for reproducibility, allowing others to understand and potentially re-run your exact methods. These are often complex pipelines designed for specific platforms.

2.  **Showcase / Tutorial Workflow:** This is a simpler workflow designed to demonstrate how users can **access, open, and perform basic analysis** on your published Data Product. Its goal is reusability and accessibility, acting as live documentation and a starting point for others wanting to use your data (often provided as a Jupyter Notebook).

While publishing the full production workflow is ideal for reproducibility, **you are highly encouraged to provide at least a showcase/tutorial workflow** for every Data Product to maximize its usability and impact.


## Terms and Taxonomy 
Workflows and Experiments in the OSC use the same core terms as Products, as described in the [Discovering Data guide](/Technical%20Documentation/Open%20Science%20Catalog/Discovering%20Resources). In addition, Experiments and Workflows define terms for the following:

| Term                 | Description                                                                                                                              |
| :------------------- | :--------------------------------------------------------------------------------------------------------------------------------------- |
| **Workflow Metadata** | The central description of the workflow, following OGC API Records and relevant extensions, which ties all other components together.      |
| **Project** | The ESA-funded research initiative under which the workflow was created.                                                                   |
| **Source Code** | A reference to the repository (typically GitHub) where the versioned code for the workflow is maintained.                                  |
| **Dependencies/Environment** | Configuration files (e.g., `environment.yml`, `Dockerfile`) or descriptions specifying the libraries, software, and system requirements needed to run the workflow. |
| **Packaged Application** | The runnable artifact itself, such as a Jupyter Notebook, a CWL workflow file, an openEO Process Graph, or a container image reference.   |

These components are linked together via metadata to create a complete and traceable record of the scientific process, ensuring results are reproducible.

![alt text](/img/workflow.png)



## Publishing Workflows

Workflows are described (as an OGC API Record) to the EarthCODE OSC. There are several ways to do this:

1.  Use the [Open Science Catalog Editor](https://workspace.earthcode.eox.at/), a graphical user interface for creating metadata and submitting it for review.
2.  Manually create the metadata files yourself and submit them via a GitHub Pull Request:
3.  Use platform-specific tools or libraries designed to automate publishing. Check your platform's documentation or contact your provider for support.

For the complete publishing process, follow the main OSC publishing guide: [Contributing to the Open Science Catalog](/Technical%20Documentation/Open%20Science%20Catalog/Contributing%20to%20the%20Open%20Science%20Catalog).

To ensure your workflow adheres to EarthCODE's standards for quality and FAIRness refer to the [FAIR Workflows Best Practices page](/Community%20and%20Best%20Practices/FAIR%20and%20Open%20Science%20Best%20Practices/Workflows).
