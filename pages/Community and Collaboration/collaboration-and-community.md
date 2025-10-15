---
order: 1
---

# Collaboration and Community

Modern Earth science is inherently collaborative. The EarthCODE ecosystem is designed from the ground up to support collaboration at multiple levels: within your project team over its entire lifecycle, through the specialized tools on our integrated platforms, and across the broader scientific community.

This guide provides an overview of the collaborative features and community spaces available to you as a researcher in EarthCODE.

## Collaboration Within a Project Across Time

A common challenge in scientific projects is that research outputs become scattered, knowledge is lost when team members change, and it's difficult for new collaborators to understand a project's history. EarthCODE addresses this by establishing the **Project** as the central, persistent record of your team's work.

By consistently associating all your outputs with a single project identifier in the [Open Science Catalog](../Technical%20Documentation/Open%20Science%20Catalog/index.md), you create a cohesive and publicly discoverable timeline of your research. This provides powerful benefits for collaboration across teams and over time:

* **For Your Team:** When a project produces a new dataset, its metadata can directly link back to the previous version and the specific `Workflow` that was modified. This creates a machine-readable dependency graph, allowing your team to precisely track the evolution of your research. New members can get up to speed quickly by exploring these project published items, rather than trying to piece together scattered files and documents. See OSC [Projects](../Technical%20Documentation/Open%20Science%20Catalog/Open%20Science%20Catalog%20Overview.md#projects) and [Workflows](../Technical%20Documentation/Open%20Science%20Catalog/Open%20Science%20Catalog%20Overview.md#workflows).

* **For External Collaborators:** When another research group wants to use your work, you can point them to your single Project record in the catalog. This gives them a transparent overview of all your published data, methods, and experiments, enabling them to identify exactly which workflow to reuse or which dataset to analyze. It provides a formal, citable basis for collaboration.

* **For the Future:** Years after a project has concluded, its entire intellectual output remains grouped, discoverable, and understandable. This ensures a lasting legacy for your work, allowing future scientists to find, cite, reproduce, and build upon your results, preventing them from being lost.

## Collaborative Tools on Integrated Platforms

Many of EarthCODE's integrated platforms provide built-in tools that enable both real-time and asynchronous teamwork, moving beyond a single-user development model. These features are designed to create a shared digital laboratory for your entire research team.

### Asynchronous Collaboration and Version Control

The foundation of most scientific collaboration is asynchronous work, managed through version control. Platforms with deep **Git** integration, such as [EDC EOxHub Workspaces](../Technical%20Documentation/Platforms/EDC/), allow teams to apply software development best practices to their research. This includes using `branches` to develop new ideas in isolation, `pull requests` for peer review of code before it's merged, and `issues` to track tasks and discussions, all within a shared **GitHub** repository.

### Shared Development Environments

To eliminate "it works on my machine" problems, several platforms provide a unified project-based workspace where the entire team shares the same environment. On a platform like [DeepESDL](../Technical%20Documentation/Platforms/DeepESDL.md), all team members who log in to a project have access to the same file system, pre-installed libraries, and shared data cubes. This ensures that all collaborators are working with the exact same tools and data, which is critical for reproducibility.

### Real-Time Collaborative Editing

For highly interactive sessions like pair programming, teaching, or collaborative writing, some platforms offer true real-time editing capabilities.

**[CoCalc](../Technical%20Documentation/Platforms/EDC/CoCalc.md)** (available via EDC) is a platform specifically designed for this type of deep collaboration. Its features go far beyond a simple shared file system:
* **Simultaneous Editing:** Multiple users can type in the same Jupyter Notebook, code file, or LaTeX document at the same time, with each person's cursor visible to the others.
* **Integrated Chat:** Every file has its own side-panel chat, allowing for contextual discussions right next to the code or text being worked on.
* **TimeTravel History:** CoCalc records every change made to a file in granular detail. This creates a complete, rewindable timeline, allowing you to see exactly who changed what and when, which is invaluable for debugging and understanding how an analysis evolved.
* **Shared Terminals:** Team members can work together in the same terminal session, making it easy to collectively manage the environment, run commands, and debug issues.

### Shared Analytics and Experiment Tracking

Collaboration extends beyond code to the sharing of results, models, and insights. Several platforms offer tools for collaborative analytics.

* **Interactive Visualization and Dashboards:** Many platforms provide tools for creating shared, interactive visualizations, allowing teams to move beyond static plots and explore data dynamically.
    * For instance, **DeepESDL** integrates the **xcube-viewer**, for exploring large, multi-dimensional data cubes. This allows an entire team to connect to the same dataset, slice it along any dimension, and inspect the data [visually through a shared interface](https://viewer.earthsystemdatalab.net/).
    * Similarly, platforms like **EDC** offer services such as **[eodash](https://eodash.org/)**, which lets a team build and deploy more customized interactive dashboards and web applications directly from their analysis notebooks. This turns a complex workflow into a shareable tool that stakeholders or other team members can use to explore results without running any code.

## Engaging with the Broader EarthCODE Community

Collaboration in EarthCODE extends beyond your immediate project team. The ecosystem provides central hubs for interacting with the entire community of Earth science researchers and developers.

* **The EarthCODE Discourse Forum:** This is the primary space for community-wide discussion. You can ask for technical support, share your research findings, discuss scientific challenges, and provide feedback on EarthCODE tools and platforms. See [Getting started with the EarthCODE Forum](./Getting%20Started%20With%20The%20EarthCODE%20Discourse/).
* **The Open Science Catalog:** By publishing your FAIR and reproducible research, you are collaborating with the entire community. The catalog is designed to ensure that other researchers can find, understand, cite, and build upon your work, accelerating the pace of scientific discovery for everyone. Learn more in the [Open Science Catalog](../Technical%20Documentation/Open%20Science%20Catalog/index.md).
