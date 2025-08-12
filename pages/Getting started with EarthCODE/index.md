---
order: 0
---

# Getting started with EarthCODE

EarthCODE (Earth Science Collaborative Open Development Environment) provides the tools to create, find, and collaborate on Earth Observation experiments.

1. You can **access necessary data, and develop your workflows, run your experiments** on [integrated EO platforms](https://testing.earthcode.eox.at/computational-research). [Network of Resources (NoR)](https://nor-discover.org/) sponsored compute is also available.
2. You can **store results** in the [ESA Project Results repository (PRR)](https://esa-earthcode.github.io/examples/index-1/).
3. You can **explore state-of-the-art data, workflows, and project information** available on the [Open Science Catalog](https://opensciencedata.esa.int/). You can also [publish](../Technical%20Documentation/Open%20Science%20Catalog%20(OSC)/Contributing%20to%20the%20Open%20Science%20Catalog.md) your own data, workflows, and project information to it.
5. You can **engage** the EarthCODE and broader EO community [EarthCODE Forum](https://discourse-earthcode.eox.at/), which is directly connected to the catalog.

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
   * [Accessing EarthCODE](./Accessing%20EarthCODE.md) – Accessing EarthCODE and Platforms
   * [Troubleshooting and Support](./Troubleshooting%20and%20Support.md) – Help when you need it

3. **Explore the EarthCODE Platform Ecosystem** – We have a growing ecosystem of platforms to provide [FAIR and Open Earth Observation science tools and infrastructure](../Technical%20Documentation/Platforms/index.md) to explore.

<div style="display: flex; justify-content: center; align-items: center; gap: 2rem; flex-wrap: wrap; margin: 2rem 0;">
  <img src="/img/platforms/platform_logos/deepesdl.webp" alt="DeepESDL" style="max-height: 120px; object-fit: contain;" />
  <img src="/img/platforms/platform_logos/eurodatacube.png" alt="Euro Data Cube" style="max-height: 120px; object-fit: contain;" />
  <img src="/img/platforms/platform_logos/openeo.png" alt="openEO" style="max-height: 120px; object-fit: contain;" />
</div>
<div style="display: flex; justify-content: center; align-items: center; gap: 2rem; flex-wrap: wrap; margin: 2rem 0;">
  <img src="/img/platforms/platform_logos/PANGEO.png" alt="DeepESDL" style="max-height: 120px; object-fit: contain;" />
  <img src="/img/platforms/platform_logos/Polar-TEP-Logo.png" alt="Euro Data Cube" style="max-height: 120px; object-fit: contain;" />
  <img src="/img/platforms/platform_logos/CoCalc_logo.svg.png" alt="openEO" style="max-height: 120px; object-fit: contain;" />
</div>

Whichever path you choose, this guide will support your journey as you engage with the EarthCODE community.

## Step 1: Understand EarthCODE Terminology

Familiarize yourself with the [key terms and concepts](./key-terms-and-concepts.md) used in EarthCODE. Understanding the terminology will help you navigate the platform and engage with the community effectively.

### EarthCODE System Overview

EarthCODE provides an integrated ecosystem designed to support scientists through the full lifecycle of doing Open Science.

::: tip Reusability of Workflows Across Platforms
Users can reproduce, reuse and run workflows through EarthCODE if they are published via an EarthCODE integrated platform and if the user has sufficient resources through self-sponsorship or sponsorship from the Network of Resources. This is why it is important to consider what tooling/platforms one uses so as to ensure reuse-ability from the start of the project.
:::

![EarthCODE Components](/img/gettingstarted/earthcode-components.png)

The **EarthCODE Portal** ([earthcode.esa.int](https://earthcode.esa.int)), is where users access all EarthCODE services. Through this portal, researchers can explore integrated platforms, access the Open Science Catalog, and engage with peers via the Discourse community forum. The portal also hosts general information about EarthCODE, including updates, events, and documentation.

EarthCODE provides access to a set of **integrated EO cloud platforms**, each offering unique tools and datasets. As an EarthCODE integrated platform they provide common capabilities: logging in with your EarthCODE account, accessing EO data (with variations in data offerings across platforms), a method for developing algorithms (referred to as **workflows** in EarthCODE), an automated way of publishing data and workflows to the Open Science Catalog and finally, the means of running EarthCODE published experiments. Access to computing resources and storage on these platforms is sponsored by ESA through the [Network of Resources (NoR)](https://nor-discover.org/).

For those who prefer to work on their own systems—whether personal computers or institutional infrastructure—EarthCODE also supports manual publishing of data and workflows.

When your research is complete, you:
- (Optionally) Upload **your datasets and workflows** to the **ESA Project Results Repository (PRR)**.
- Create and upload **metadata describing your results** to the **Open Science Catalog**, which link to your data and workflows.

:::tip  *Only ESA-funded projects or projects funded by the national members can publish to EarthCODE.*
:::

The **ESA Project Results Repository (ESA PRR)** is a long-term storage service provided by ESA to persistently host results from ESA-funded projects. Once users have completed their work, they can upload their datasets and workflows to the PRR to ensure they remain accessible and preserved over time. While publishing to the PRR is optional, it is strongly recommended for long-term availability and compliance with FAIR principles. A detailed guide to this process is available in the [publication section](../Technical%20Documentation/ESA%20Project%20Results%20Repository%20(PRR)/index.md).

The [**Open Science Catalog (OSC)**](https://opensciencedata.esa.int/catalog) is a public, web-based application that allows users to explore and access scientific datasets, workflows, and documentation produced through ESA-funded Earth Observation research. Researchers publish metadata describing their outputs to the Open Science Catalog, and after review, this metadata is made discoverable through the OSC. The catalog uses  STAC to describe datasets and  OGC API - Records for workflows. Through this rich metadata on the Open Science Catalog, resources are made FAIR. Additionally, the open science catalog is integrated with the EarthCODE platforms and allows users to reproduce experiments (run workflows that produce products) that they find on the catalog.

:::tip The Open Science Catalog only holds the metadata which points to the persistent storage repository with your dataset.
:::

The [**EarthCODE Forum**](https://discourse-earthcode.eox.at) is a **community space** where users:
- Share insights and questions about datasets and workflows
- Link forum discussions directly to catalog entries
- Get help from the EarthCODE team and community

Each published item in the OSC can be linked to a discussion thread, enabling exposure and ongoing discussions about outputs.

---

## Step 2: Explore EarthCODE
This step will help you become familiar with the platform's tools and resources, and how they integrate to support your research. The best way to follow our tutorials and learn about EarthCODE is by using one of the EarthCODE platforms. We recommend visiting the page where we explain how [to choose the right tools and platforms for your work](../Technical%20Documentation/Platforms/).

EarthCODE offers a variety of features, in the portal you will be able to find:
- [Datasets](../Technical%20Documentation/Open%20Science%20Catalog%20(OSC)/): Access a variety of datasets available for your research needs and discovery. 
- [Computational Research](../Technical%20Documentation/Platforms/): Use EarthCODE integrated platforms with advanced computational tools for Earth System Science on collaborative research environment 
- [Workflows](../Technical%20Documentation/Workflows%20and%20Experiments/index.md) : Easily find, publish and re-use FAIR workflows to enhance reproducibility and collaboration in research 
- [Community](../Community%20and%20Collaboration/Getting%20Started%20With%20The%20EarthCODE%20Discourse/): Fostering a collaborative community dedicated to FAIR Open Science and sustainable innovation   

By exploring these sections, you’ll better understand how to leverage EarthCODE’s resources and tools to support your research.

### Tutorials

 
Explore the complete list of [Tutorials](../Training%20and%20Resources/) and [Examples](https://esa-earthcode.github.io/examples/) for a practical introduction EarthCODE and its related tools.


## Step 3: Who is EarthCODE For? 
EarthCODE is designed for the community of Earth‑science practitioners, including ESRIN Science Hub members, the ESA Science Hub and teams working on ESA‑funded projects to enable them to do science and publish their results. A key stakeholder group are the ESA Science Clusters which aim at promoting networking, collaborative research, and fostering international collaboration in various Earth science domains, including: atmosphere, ocean, carbon, water cycle, polar, extremes and natural disasters, biosphere, land and agriculture, solid and magnetic earth. Clusters involve different ESA funded projects and activities bringing together expertise, data and resources in a synergistic manner.

There are two key type of roles within EarthCODE:

**Scientists**, EarthCODE is a platform to: Do science. Publish science. Discover data and code. Use other people’s data and code in an ethical manner. Discuss science. Collaborate on science. Learn about FAIR and Open Science.

**Developers**, EarthCODE is a space to: Expand the open-source ecosystem. Contribute tools and workflows. Develop reusable components and workflows, and discover and re-use the existing ones in an ethical way. Build FAIR-by-design services for the Earth science community.

You can explore what **your role** is in the EarthCODE community below:


### I am a:


:::tip 
Hold down shift to scroll horizontally with your mousewheel
:::
<!-- :::tip note to self
Use Case Examples / Personas
A few brief examples of how a climate scientist, ML developer, or EO analyst might use EarthCODE end-to-end. Helps make abstract concepts concrete.

make these clickable and expandable as well
::: -->

<!-- 
A key stakeholder group are the ESA Science Clusters which aim at promoting networking, collaborative research, and fostering international collaboration in various Earth science domains, including: atmosphere, ocean, carbon, water cycle, polar, extremes and natural disasters, biosphere, land and agriculture, solid and magnetic earth. Clusters involve different ESA funded projects and activities bringing together expertise, data and resources in a synergistic manner. 

The key user persona (Figure 3) for EarthCODE is the earth
observation scientist, for whom EarthCODE looks to provide
capabilities such as: development and execution of workflows
to capture large scale processes over climatic temporal scales;
conducting complex multi-variate spatio-temporal analyses;
running various analyses and models, including ML; setting up
automated execution of algorithms, potentially recurrent;
performing dataset and feature engineering; performing pipeline
building and automation; accessing and processing
heterogeneous data sources including online collections, data
cubes and data at native resolution; having access to complete
metadata for the datasets including data lineage and provenance,
source and (pre-)processing; extracting, reading, writing and
downloading data from APIs; storing, describing, publishing
and documenting new data; using own data such as field
measurements within scientific workflows; accessing the newest
(EO) data available, programmatically; packaging, publishing
and preserving the scientific outputs (data and code) with
persistent identifiers (e.g., DOIs) in long-term storage
repositories; setting up and using software environments;
importing and running environments on EO Platforms;
exporting environments (e.g. Docker, application package,
openEO graph, etc) and sharing them; using Git, including
provided by own organisation; managing versions of data, code
and documentation; making projects/repositories citable;
contributing to open source projects; publishing scientific
results and other research outcomes on web, including scientific
visualisations; discovering and exploring scientific results, data,
code and documentation of other contributing researchers. -->
---

<!-- HTML for actor cards Note: Maybe add some icons here for each of the roles -->
<div id="post-wrapper" class="role-cards-container">
  <div class="role-card">
    <h3>Part of a ESA-Funded Research Project</h3>
    <p>Projects funded by ESA use EarthCODE to discover, develop and publish scientific data and workflows using integrated platforms and FAIR tools. They are supported throughout the full open science lifecycle. They would be interested exploring:</p>
    <ul>
      <li>Explore the Open Science Catalog to discover access and reuse datasets, workflows, and related documentation.</li>
      <li>Publish their data and workflows to the Open Science Catalog.</li>
      <li>Use integrated platforms to develop new workflows and reproduce experiments.</li>
      <li>Apply for NoR sponsorship for using the EarthCODE integrated platforms.</li>
      <li>Engage with other researchers and discuss open science on the EarthCODE Discourse.</li>
      <li>Use learning resources, MOOCs, tutorials, and user documentation available through the portal.</li>
    </ul>
  </div>
    <div class="role-card">
    <h3>Software Developers / Algorithm Creators</h3>
    <p>Developers create and publish workflows and contribute new open FAIR tools</p>
    <ul>
      <li>Explore the Open Science Catalog to discover access and reuse datasets, workflows, and related documentation</li>
      <li>Use integrated platforms to develop new workflows and publish them to EarthCODE</li>
      <li>Engage with other researchers and discuss open science on the EarthCODE Discourse</li>
      <li>Explore and use EOEPCA+ components for their tools</li>
    </ul>
  </div>
    <div class="role-card">
    <h3>Platform Providers</h3>
    <p>Providers offer integrated EO cloud infrastructure for FAIR and Open Science. This includes registering to NoR, functionalities to run workflows, manage user environments, and support integration with EarthCODE systems.</p>
    <ul>
      <li>Integrate Platform to EarthCODE to provide users data access, executable environments and workflow development tools</li>
      <li>Register and onboard their service in the NoR portfolio</li>
      <li>Provide integration for automatically publishing data and workflows to the Open Science Catalog</li>
      <li>Ensure that experiments published can be executed within the platform </li>
      <li>Integrate with the ESA Project Results Repository (PRR) for long-term data storage</li>
      <li>Maintain and support platform and provide documentation </li>
    </ul>
  </div>
  <div class="role-card">
    <h3>ESA Technical Officers (TOs)</h3>
    <p>TOs supervise ESA-funded research, validating outputs and ensuring compliance with ESA’s policies, they ensure that items published by researchers to the ESA Project Results Repository (PRR) are the final, verified project results.</p>
    <ul>
      <li>Verify Project Results Repository Items</li>
      <li>Apply for NoR sponsorship for using the EarthCODE integrated platforms</li>
      <li>Explore the Open Science Catalog to discover relevant research and potential synergies between activities</li>
      <li>Use EarthCODE provided tools for vizualization of results to share results and show scientific impact</li>
    </ul>
  </div>

  <div class="role-card">
    <h3>Project Principal Investigators (PIs)</h3>
    <p>PIs oversee project execution and publication, managing assets, approving publications, and guiding research teams.</p>
    <ul>
      <li>Explore the Open Science Catalog to discover access and reuse datasets, workflows, and related documentation.</li>
      <li>Run reproducible experiments for published workflows and data</li>
      <li>Manage published items in the ESA Project Results Repository (PRR)</li>
      <li>Collaborate with EarthCODE Data Steward </li>
    </ul>
  </div>

  <div class="role-card">
    <h3>ESA Science Clusters</h3>
    <p>Science Clusters guide strategy, define scientific requirements, and ensure metadata and workflows align with domain needs.</p>
    <ul>
      <li>Engage with other researchers, discuss open science on the EarthCODE events.</li>
      <li>Propose metadata standards additions for EarthCODE to support their science.</li>
      <li>Explore the Open Science Catalog to discover access and reuse datasets, workflows, and related documentation.</li>
      <li>Publish their data and workflows to the Open Science Catalog.</li>
      <li>Use integrated platforms to develop new workflows and reproduce experiments and apply for NoR sponsorship.</li>
      <li>Use learning resources, MOOCs, tutorials, and user documentation available through the portal.</li>
    </ul>
  </div>

  <div class="role-card">
    <h3>ESRIN Science Hub</h3>
    <p>The ESRIN Science Hub aligns EarthCODE with ESA’s open science vision and long-term scientific planning.</p>
    <ul>
      <li>Use learning resources, MOOCs, tutorials, and user documentation available through the portal.</li>
      <li>Engage with other researchers, discuss open science on the EarthCODE events.</li>
      <li>Explore the Open Science Catalog to discover access and reuse datasets, workflows, and related documentation.</li>
      <li>Publish their data and workflows to the Open Science Catalog.</li>
      <li>Use integrated platforms to develop new workflows and reproduce experiments and apply for NoR sponsorship.</li>
    </ul>
  </div>

  <div class="role-card">
    <h3>EarthCODE Team (Consortium)</h3>
    <p>The core development and operations team maintains the platform, supports users, and evolves its architecture.</p>
    <ul>
      <li><strong>Infrastructure Platforms Team</strong> Provides cloud environments for running workflows and experiments close to EO data, including ML and containerized tools.</li>
      <li><strong>FAIR Open Science Platforms Team</strong> Offers tools and environments for developing, testing, and packaging reproducible workflows and experiments.</li>
      <li><strong>Community & Resources Team</strong> Manages documentation, tutorials, the EarthCODE Forum, and promotes best practices for FAIR and open science.</li>
    </ul>
  </div>

</div>

<style>

.role-cards-container {
  display: flex;
  flex-wrap: nowrap; 
  gap: 1rem;
  overflow-x: auto;
  scroll-snap-type: x mandatory; 
  -webkit-overflow-scrolling: touch; 
  padding: 1rem;
  margin: 0 auto;
  width: 100%;
  max-width: 100%;
  scrollbar-color: #888 #f5f5f5;      
}
.role-cards-container::-webkit-scrollbar {
  height: 8px;               
  background-color: #f5f5f5;
}

.role-cards-container::-webkit-scrollbar-thumb {
  background-color: #888;
  border-radius: 4px; 
}
.role-cards-container::-webkit-scrollbar-thumb:hover {
  background-color: #555; 
}
.role-card {
  flex: 0 0 auto; 
  width: 400px;
  background-color: #f9f9f9;
  border: 1px solid #ccc;
  border-radius: 12px;
  padding: 1rem;
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
  transition: transform 0.2s, box-shadow 0.2s;
}

.role-card:hover {
  transform: translateY(-20px);
  box-shadow: 0 10px 15px rgba(0,0,0,0.15);
}
.role-card h3 {
  font-size: 1.1rem;
  margin-bottom: 0.5rem;
  color: #0078D4;
}
.role-card p,
.role-card ul {
  font-size: 0.9rem;
  color: #333;
}
#post-wrapper {
  overflow-y: hidden;
  overflow-x: auto;  
}

</style>
<!-- <script setup>
import { onMounted } from 'vue'

onMounted(() => {
  const postScroll = document.getElementById('post-wrapper')
  if (!postScroll) return

  // start in horizontal mode
  let scrollingHorizontally = true
  postScroll.style.overflowY = 'hidden'

  // mark listener non‑passive so we can call preventDefault()
  postScroll.addEventListener(
    'wheel',
    (event) => {
      if (scrollingHorizontally) {
        postScroll.scrollBy({
          left: event.deltaY < 0 ? -70 : 70,
          behavior: 'smooth'
        })
        event.preventDefault()
        if (
          postScroll.scrollLeft >=
          postScroll.scrollWidth - postScroll.clientWidth
        ) {
          scrollingHorizontally = false
          postScroll.style.overflowY = 'auto'
        }
      } else {
        if (event.deltaY < 0) {
          scrollingHorizontally = true
          postScroll.style.overflowY = 'hidden'
          postScroll.scrollBy({
            left: -70,
            behavior: 'smooth'
          })
          event.preventDefault()
        }
      }
    },
    { passive: false }
  )
})
</script> -->



### Community
Understand the opportunities and possibilities within the [EarthCODE community](../Community%20and%20Collaboration/). In this sub-step, you will learn how to identify where you can contribute and how collaboration within the community can enhance your research. This section will help you understand how you can actively participate in shaping the EarthCODE ecosystem.

## Step 4: Start Experimenting with EarthCODE
Once you’ve understood your role and the resources available, it's time to experiment! Use EarthCODE’s tools and platforms to enhance your projects. Bring visibility to your research by experimenting with data, workflows, and collaborative features. This step is all about applying what you've learned and experimenting with real data in EarthCODE, contributing to the ecosystem through hands-on work.

1. **Open the EarthCODE Portal**  
   Sign in with your GitHub account at <https://earthcode.esa.int> to:  
   - Access the Open Science Catalog to browse and download curated Earth‑observation datasets  
   - Explore the platforms offered by EarthCODE and make a NoR request to start doing science on it  
   - Find out more about the project, current news and upcoming events

2. **Onboard your project**  
   - Post a brief introduction, information about your project and questions you have in the `Technical Support` category of the [EarthCODE Forum](https://discourse-earthcode.eox.at/c/technical-support/8).  
   - Get in touch for onboarding support, fill in the short contact form at <https://earthcode.esa.int/contact> or e‑mail **earth-code@esa.int**.  

3. **Troubleshooting**  
   If you hit a snag, check the [Common Issues & Solutions](./Troubleshooting%20and%20Support.md#common-issues-and-solutions) section first.  
   Still stuck? Ask in the forum or drop us a line at the support address above.





