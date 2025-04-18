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
1. You access services via the [**EarthCODE Portal**](https://earthcode.esa.int).
2. You access necessary data, and develop your workflows, **run your experiments** on integrated EO platforms (with NoR sponsored compute), or locally.
3. You **store results** in the ESA PRR and **publish metadata** to the Open Science Catalog.
4. Anyone can browse the Open Science Catog, find your published data and workflows, reuse and *reproduce them. 
5. The community engages via the **EarthCODE Forum**, which is directly connected to the catalog.

::: tip Users can reproduce, reuse and run your workflows through EarthCODE if they are published via an EarthCODE integrated platform AND If the user has sufficient resources or sponsorship (from NoR) for the compute costs. This is why it is important to consider what tooling/platforms one uses so as to ensure reuse-ability from the start of the project.
:::

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

The [**Open Science Catalog (OSC)**](https://opensciencedata.esa.int/catalog) is a public, web-based application that allows users to explore and access scientific datasets, workflows, and documentation produced through ESA-funded Earth Observation research. Researchers publish metadata describing their outputs to the EarthCODE catalog, and after review, this metadata is made discoverable through the OSC. The catalog uses  STAC to describe datasets and  OGC API - Records for workflows. Through this rich metadata on the Open Science Catalog, resources are made FAIR. Additionally, the open science catalog is integrated with the EarthCODE platforms and allows users to reproduce experiments (run workflows that produce products) that they find on the catalog.

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
- [Datasets](/Technical%20Documentation/Data): Access a variety of datasets available for your research needs and discovery. 
- [Computational Research](/Technical%20Documentation/Platforms/): Use EarthCODE integrated platforms with advanced computational tools for Earth System Science on collaborative research environment 
- [Workflows](/Technical%20Documentation/Workflows/) : Easily find, publish and re-use FAIR workflows to enhance reproducibility and collaboration in research 
- [Community](/Community%20and%20Collaboration/Getting%20Started%20With%20The%20EarthCODE%20Discourse/): Fostering a collaborative community dedicated to FAIR Open Science and sustainable innovation   

By exploring these sections, you’ll better understand how to leverage EarthCODE’s resources and tools to support your research.

### Tutorials

This compiled table will take you through the basics of EarthCODE. You can choose tutorials in various formats: Hands-on and Slides tutorials focus on text-based learning, while Videos and Case Studies provide a more visual approach.

Choose your best fit, experiment, or try them all!

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


## Step 3: Who is EarthCODE For? 
EarthCODE is designed for the community of Earth‑science practitioners, including ESRIN Science Hub members, the ESA Science Hub and teams working on ESA‑funded projects to enable them to do science and publish their results. It further serves as a place for developers and users to contribute workflows, platforms and discover openly available Earth Science research data and code. There are two key type of roles within EarthCODE:

**Scientists**, EarthCODE is a platform to: Do science. Publish science. Discover data and code. Use other people’s data and code in an ethical manner. Discuss science. Collaborate on science. Learn about FAIR and Open Science.

**Developers**, EarthCODE is a space to: Expand the open-source ecosystem. Contribute tools and workflows. Develop reusable components and workflows, and discover and re-use the existing ones in an ethical way. Build FAIR-by-design services for the Earth science community.

You can explore what **your role** is in the EarthCODE community below:


### I am a:
---

<!-- HTML for actor cards Note: Maybe add some icons here for each of the roles -->
<div id="post-wrapper" class="role-cards-container">
  <div class="role-card">
    <h3>Part of a ESA-Funded Research Project</h3>
    <p>Projects funded by ESA use EarthCODE to discover, develop and publish scientific data and workflows using integrated platforms and FAIR tools. They are supported throughout the full open science lifecycle. They would be interested exploring:</p>
    <ul>
      <li>Explore the EarthCODE catalog to discover access and reuse datasets, workflows, and related documentation.</li>
      <li>Publish their data and workflows to the EarthCODE catalog.</li>
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
      <li>Explore the EarthCODE catalog to discover access and reuse datasets, workflows, and related documentation</li>
      <li>Use integrated platforms to develop new workflows and publish them to EarthCODE</li>
      <li>Engage with other researchers and discuss open science on the EarthCODE Discourse</li>
      <li>Explore and use EOEPCA+ components for their tools</li>
    </ul>
  </div>
    <div class="role-card">
    <h3>Platform Providers</h3>
    <p>Providers offer integrated EO cloud infrastructure for FAIR and Open Science. This includes registering to NoR, functionalities to run workflows, manage user environments, and support integration with EarthCODE systems.</p>
    <ul>
      <li>Integrate Platform to EarthCODE to provide users data access, executible environments and workflow development tools</li>
      <li>Register and onboard their service in the NoR portfolio</li>
      <li>Provide integration for automatically publishing data and workflows to the EarthCODE catalog</li>
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
      <li>Explore the EarthCODE catalog to discover relevant research and potential synergies between activities</li>
      <li>Use EarthCODE provided tools for vizualization of results to share results and show scientific impact</li>
    </ul>
  </div>

  <div class="role-card">
    <h3>Project Principal Investigators (PIs)</h3>
    <p>PIs oversee project execution and publication, managing assets, approving publications, and guiding research teams.</p>
    <ul>
      <li>Explore the EarthCODE catalog to discover access and reuse datasets, workflows, and related documentation.</li>
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
      <li>Explore the EarthCODE catalog to discover access and reuse datasets, workflows, and related documentation.</li>
      <li>Publish their data and workflows to the EarthCODE catalog.</li>
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
      <li>Explore the EarthCODE catalog to discover access and reuse datasets, workflows, and related documentation.</li>
      <li>Publish their data and workflows to the EarthCODE catalog.</li>
      <li>Use integrated platforms to develop new workflows and reproduce experiments and apply for NoR sponsorship.</li>
    </ul>
  </div>

  <div class="role-card">
    <h3>EarthCODE Team (Consortium)</h3>
    <p>The core development and operations team maintains the platform, supports users, and evolves its architecture.</p>
    <ul>
      <li><strong>Infrastructure Platforms Team</strong> Provides cloud environments for running workflows and experiments close to EO data, including ML and containerised tools.</li>
      <li><strong>FAIR Open Science Platforms Team</strong> Offers tools and environments for developing, testing, and packaging reproducible workflows and experiments.</li>
      <li><strong>Community & Resources Team</strong> Manages documentation, tutorials, the EarthCODE Forum, and promotes best practices for FAIR and open science.</li>
    </ul>
  </div>

</div>

<style>
/* Container: horizontal scroll + scroll snap. */
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
  overflow-y: hidden;   /* off at first – script re‑enables it later*/
  overflow-x: auto;     /* horizontal scroll remains on*/
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
   - Post a brief introduction, information about your project and questions you have in the `Technical Suppoort` category of the [EarthCODE Forum](https://discourse-earthcode.eox.at/c/technical-support/8).  
   - Get in touch for onboarding support, fill in the short contact form at <https://earthcode.esa.int/contact> or e‑mail **earth-code@esa.int**.  

3. **Troubleshooting**  
   If you hit a snag, check the [Common Issues & Solutions](./Troubleshooting%20and%20Support.md#common-issues-and-solutions) section first.  
   Still stuck? Ask in the forum or drop us a line at the support address above.





