---
order: 0
---

# Getting started with EarthCODE

<div style="display: flex; align-items: center;">
  <!-- Text container -->
  <div style="flex: 1; padding-right: 20px;">
    <p>
      EarthCODE is a strategic initiative by the <b> European Space Agency (ESA) </b> designed to empower researchers in Earth System Science to adopt FAIR and Open Science practices. By providing a collaborative development environment with integrated tools, cloud services, and expert guidance, EarthCODE helps scientists make their research more impactful, transparent, and reusable—while staying focused on the science itself.
    </p>
    <p> <b>Doing Open Science shouldn't be hard, and EarthCODE makes it easy!</b></p>
  </div>
  <!-- Image container -->
  <div>
    <img src="/img/EarthCODE_kv_transparent.png" alt="Descriptive Alt Text" style="max-width: 250px;" />
  </div>
</div>



## Welcome to EarthCODE!

Whether you are a scientist, a member of a research project, a developer or simply someone interested in using EarthCODE, this guide will help you get started.

There are two ways to explore EarthCODE:

1. **Follow a step-by-step onboarding pathway** – If you're new to EarthCODE, we recommend following these steps to build a strong foundation:

   * [Step 1: Understand EarthCODE Terminology](#step-1-understand-earthcode-terminology)
   * [Step 2: Explore EarthCODE](#step-2-explore-earthcode)
   * [Step 3: Understand Your Role in the EarthCODE Community](#step-3-understand-your-role-in-the-earthcode-community)
   * [Step 4: Start Experimenting with EarthCODE](#step-4-start-experimenting-with-earthcode)

2. **Jump straight to what you need** – If you’re short on time or already familiar with EarthCODE, you can go directly to specific topics:

   * [10 minutes to EarthCODE](./10%20minutes%20to%20EarthCODE.md) – A quick overview to get started fast
   * [Deep Dive into EarthCODE](./Deep%20Dive%20into%20EarthCODE.md) – Advanced features and in-depth guidance
   * [Connecting External Platforms to EarthCODE](./Connecting%20External%20Platforms%20to%20EarthCODE.md) – Integration of tools into EarthCODE
   * [Troubleshooting and Support](./Troubleshooting%20and%20Support.md) – Help when you need it

Whichever path you choose, this guide will support your journey as you engage with the EarthCODE community.

## Step 1: Understand EarthCODE Terminology

Familiarize yourself with the [key terms and concepts](./key-terms-and-concepts.md) used in EarthCODE. Understanding the terminology will help you navigate the platform and engage with the community effectively.

### EarthCODE System Overview

EarthCODE provides an integrated ecosystem designed to support scientists through the full lifecycle of doing Open Science.
Here's how it works:
1. You access all components via the **EarthCODE Portal**.
2. You access necessary data, and develop your workflows, **run your experiments** on integrated EO platforms (with NoR sponsored compute), or locally.
3. You **store results** in the ESA PRR and **publish metadata** to the Open Science Catalog.
4. The community engages via the **EarthCODE Forum**, which is directly connected to the catalog.


![EarthCODE Components](/img/gettingstarted/earthcode-components.png)

The **EarthCODE Portal** ([earthcode.esa.int](https://earthcode.esa.int)), is where users access all EarthCODE services. Through this portal, researchers can explore integrated platforms, access the Open Science Catalog, and engage with peers via the Discourse community forum. The portal also hosts general information about EarthCODE, including updates, events, and documentation.

EarthCODE provides access to a set of **integrated EO cloud platforms**, each offering unique tools and datasets. As an EarthCODE integrated platform they provide common capabilities: logging in with your EarthCODE account, accessing EO data (with variations in data offerings across platforms), a method for developing algorithms (referred to as **workflows** in EarthCODE), an automated way of publishing data and workflows to the EarthCODE Catalog and finally, the means of running EarthCODE published experiments. Access to computing resources and storage on these platforms is sponsored by ESA through the [Network of Resources (NoR)](https://nor-discover.org/).

For those who prefer to work on their own systems—whether personal computers or institutional infrastructure—EarthCODE also supports manual publishing of data and workflows.

When your research is complete, you:
- (Optionally) Upload **Your datasets and workflows** to the **ESA Project Results Repository (PRR)**.
- Create and upload **Metadata describing your results** to the **Open Science Catalog**, which link to your data.

:::tip  *Only ESA-funded projects can publish to EarthCODE.*
:::

The **ESA Project Results Repository (ESA PRR)** is a long-term storage service provided by ESA to persistently host results from ESA-funded projects. Once users have completed their work, they can upload their datasets and workflows to the PRR to ensure they remain accessible and preserved over time. While publishing to the PRR is optional, it is strongly recommended for long-term availability and compliance with FAIR principles. A detailed guide to this process is available in the [publication section](../Technical%20Documentation/Data/Contributing%20to%20the%20EarthCODE%20Catalog.md).

The [**Open Science Catalog (OSC)**](https://opensciencedata.esa.int/catalog) is a public, web-based application that allows users to explore and access scientific datasets, workflows, and documentation produced through ESA-funded Earth Observation research. Researchers publish metadata describing their outputs to the EarthCODE catalog, and after review, this metadata is made discoverable through the OSC. The catalog uses  STAC to describe datasets and  OGC API - Records for workflows. Through this rich metadata on the Open Science Catalog, resources are made FAIR.

:::tip The Open Science Catalog only holds the metadata which points to the persistent storage repository with your dataset.
:::

The [**EarthCODE Forum**](https://discourse-earthcode.eox.at) is a **community space** where users:
- Share insights and questions about datasets and workflows
- Link forum discussions directly to catalog entries
- Get help from the EarthCODE team and community

Each published item in the OSC can be linked to a discussion thread, enabling exposure and ongoing discussions about outputs.

---

## Step 2: Explore EarthCODE

Take some time to explore EarthCODE’s core features. 
This step will help you become familiar with the platform's tools and resources, and how they integrate to support your research.
The best way to follow our tutorials and learn about EarthCODE is by using one of the EarthCODE platforms. We recommend visiting the page where we explain how [to choose the right tools and platforms for your work](../Technical%20Documentation/Platforms/).
Once you're familiar with that, dive deeper into the platform by exploring:

- [EarthCODE Data](../Technical%20Documentation/Data/): Access a variety of datasets available for your research needs.
- [EarthCODE Workflows](../Technical%20Documentation/Workflows/): Learn how to create, manage, and optimize workflows to enhance your research.
By exploring these sections, you’ll better understand how to leverage EarthCODE’s resources and tools to support your research.


### EarthCODE platforms

Visit the [EarthCODE platforms](../Technical%20Documentation/Platforms/) page to learn about the different EarthCODE platforms. There, you will find their respective documentation and instructions on how to access resources.

### Tutorials

This compiled table will take you through the basics of EarthCODE. You can choose tutorials in various formats: Hands-on and Slides tutorials focus on text-based learning, while Videos and Case Studies provide a more visual approach.

Choose your best fit, experiment, or try them all!

**TBD**: Add links to the materials in the table below (once available)

- Introduction to EarthCODE
- Introduction to [NoR](https://nor-discover.org) and [Applying for NoR usage](https://youtu.be/IJEZRSac6EE?feature=shared)
- Working with Copernicus Data 
- Developing Workflows with EarthCODE  
- Using Euro Data Cube for Analysis 
- Introduction to EOxHub/CoCalc
- Introduction to EOxHub/Pangeo
- Publishing to the EarthCode Science Catalog
- Collaborative Research in EarthCODE
 
Explore the complete list of [Tutorials and other resources](../Training%20and%20Resources/) to learn more about EarthCODE.


## Step 3: Understand Your Role in the EarthCODE Community
Understand the opportunities and possibilities within the [EarthCODE community](../Community%20and%20Collaboration/). In this step, you will learn how to identify where you can contribute and how collaboration within the community can enhance your research. This section will help you understand how you can actively participate in shaping the EarthCODE ecosystem.


## Step 4: Start Experimenting with EarthCODE
Once you’ve understood your role and the resources available, it's time to experiment! Use EarthCODE’s tools and platforms to enhance your projects. Bring visibility to your research by experimenting with data, workflows, and collaborative features. This step is all about applying what you've learned and experimenting with real data in EarthCODE, contributing to the ecosystem through hands-on work.


