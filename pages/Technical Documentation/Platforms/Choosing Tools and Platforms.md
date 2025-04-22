# Choosing Tools and Platforms

This section will guide you through the EarthCODE platforms and how you can leverage the Network of Resources (NoR) for your research needs.

EarthCODE provides you *single‑sign‑on* access to a growing number of EO platforms that host EO data, development tools and compute. Once you log in with your EarthCODE account, you carry the same identity across the **EarthCODE Portal**, the **EarthCODE Forum**, each **integrated platform**, and the **Open Science Catalog**.

For all of the EarthCODE integrated platforms, you can apply for Network‑of‑Resources (NoR) sponsorship to cover compute costs. Every platform comes with FAIR tooling that lets you publish results to the Open Science Catalog in an automated manner. Additionally, some platforms support creating and executing several types of workflows, which means that if you develop a workflow on them, it will be cross-compatible with other platforms.  

![EarthCODE Platform](/img/terms/earthcode-platfrom-generic.svg)

Platforms differ in four areas: the data they give you access to (and the way you access the data), the way you develop workflows on them, specialized hardware and infrastructure they offer, and the visualisation tools they offer. See [10 Minutes to EarthCODE](../../Getting%20started%20with%20EarthCODE/10%20minutes%20to%20EarthCODE.md) for some examples of platform featues. Additionally, different platforms support different sized options for computing resources and different languages. The tables below is an up-to-date summary of the EarthCODE platforms and the capabilities they provide.


## Infrastructure Capabilities

| Platform                             | Data Access                                                                                             | Specialised Hardware & Services | Compatible Workflows     |
|--------------------------------------|----------------------------------------------------------------------------------------------------------|----------------------------------|---------------------------|
| [**DeepESDL**](./DeepESDL.md)        | Sentinel (1, 2, 3, 5P), CLMS, SPOT (4/5), Proba-V                                                        | GPU                         | OGC API Processes         |
| [**EDC EoX Workspace**](./EDC.md)    | Sentinel (1, 2, 3, 5P), Landsat-8, WorldView, CBERS-3/4, GOES-16/17, MODIS, PlanetScope, SPOT 6/7, SkySat, Pleiades, SRTM |  GPU                         | OGC API Processes         |
| [**Pangeo (via EDC)**](./EOxHub_Pangeo.md) | Sentinel (1, 2, 3, 5P), Landsat-8, WorldView, CBERS-3/4, GOES-16/17, MODIS, PlanetScope, SPOT 6/7, SkySat, Pleiades, SRTM | Dask Gateway, GPUs                     | OGC API Processes         |
| [**openEO & Copernicus**](./OpenEO.md) | Sentinel (1, 2, 3)                                                                                       | GPU                              | OpenEO Process Graphs     |
| [**CoCalc (via EDC)**](https://cocalc.com/) | Sentinel (1, 2, 3, 5P), Landsat-8, WorldView, CBERS-3/4, GOES-16/17, MODIS, PlanetScope, SPOT 6/7, SkySat, Pleiades, SRTM |  GPU                         | OGC API Processes         |

## FAIR Open Science Development Capabilities

| Platform                             | Development Tools                      | Supported Languages          | Visualization Tools                             | Produced Workflow Type    |
|--------------------------------------|----------------------------------------|------------------------------|--------------------------------------------------|----------------------------|
| [**DeepESDL**](./DeepESDL.md)        | Jupyter                                | Python                       | [xcube viewer](https://viewer.earthsystemdatalab.net/), Jupyter | OGC API Processes          |
| [**EDC EoX Workspace**](./EDC.md)    | Jupyter                                | Python                       | Jupyter                                          | OGC API Processes          |
| [**Pangeo (via EDC)**](./EOxHub_Pangeo.md) | Jupyter                                | Python                       | Jupyter                                          | OGC API Processes          |
| [**openEO & CDSE**](./OpenEO.md) | Jupyter, openEO Process Editor         | Python, R, JavaScript        | GUI, Jupyter                                     | OpenEO Process Graphs      |
| [**CoCalc (via EDC)**](https://cocalc.com/) | Jupyter                                | Python                       | Jupyter                                          | OGC API Processes          |



<!-- | Platform             | Collections                                                | Compute Resources | Execution               | Supported Languages      |
|----------------------|-------------------------------------------------------------|--------------------|--------------------------|---------------------------|
| **DeepESDL**         | Sentinel (1, 2, 3, 5P), CLMS, SPOT (4/5), Proba-V           | CPU, GPU           | Jupyter                  | Python                    |
| **EDC EOxHub**       | Sentinel (1, 2, 3, 5P), Landsat-8, WorldView, CBERS-3/4, Goes-16/17, MODIS, PlanetScope, Spot 6/7, SkySat, Pleiades, SRTM | CPU, GPU           | Jupyter                  | Python                    |
| **OpenEO & Copernicus** | Sentinel (1, 2, 3)                                       | CPU | Jupyter, GUI          | Python, R, JavaScript     | 

Maybe split the table below in two? One for data access and one for 
 -->

<!-- 

**Infrastructure Capabilities**
Platform
Data Access
Specialised Hardware & Services
Compatible Workflows

**FAIR Open Science Development Capabilities**
Platform
Development Tools
Supported Languages
Visualization Tools
Produced Workflow Type



| Platform | Data Access | Specialised Hardware & Services | Development Tools | Supported Languages | Visualization Tools | Compatible Workflows
|--------- |-------------|---------------------------------|----------------------------------|---------------------|---------------------|-------|
| [**DeepESDL**](./DeepESDL.md)         | Sentinel (1, 2, 3, 5P), CLMS, SPOT (4/5), Proba-V                                                        | CPU, GPU                         | Jupyter                  | Python                    | Jupyter                  | [xcube viewer](https://viewer.earthsystemdatalab.net/) | OGC API Processes
| [**EDC EoX Workspace**](./EDC.md)              | Sentinel (1, 2, 3, 5P), Landsat-8, WorldView, CBERS-3/4, GOES-16/17, MODIS, PlanetScope, SPOT 6/7, SkySat, Pleiades, SRTM | CPU, GPU                         | Jupyter                  | Python                    | Jupyter                  | OGC API Processes
| [**Pangeo (via EDC)**](./EOxHub_Pangeo.md)     | Sentinel (1, 2, 3, 5P), Landsat-8, WorldView, CBERS-3/4, GOES-16/17, MODIS, PlanetScope, SPOT 6/7, SkySat, Pleiades, SRTM | Dask Gateway                      | Jupyter                  | Python                    | Jupyter                  | OGC API Processes
| [**openEO & Copernicus**](./OpenEO.md) | Sentinel (1, 2, 3)                                                                                   | CPU                              | Jupyter, OpenEO Process Editor             | Python, R, JavaScript     | GUI, Jupyter             | OpenEO Process Graphs
| [**CoCalc (via EDC)**](https://cocalc.com/)       | Sentinel (1, 2, 3, 5P), Landsat-8, WorldView, CBERS-3/4, GOES-16/17, MODIS, PlanetScope, SPOT 6/7, SkySat, Pleiades, SRTM | CPU, GPU                         | Jupyter                  | Python                    | Jupyter                  | OGC API Processes -->



## Access to Platforms via NoR

### **What is the ESA Network of Resources (NoR)?**

The **ESA Network of Resources (NoR)** is an initiative by the European Space Agency (ESA) offering a collection of platforms and services designed to support researchers by providing access to valuable datasets, tools, and computing resources. NoR aims to enhance collaboration and streamline the research process, making it easier for users to leverage Earth observation data and other resources for their projects.

NoR collaborates with a wide range of service providers, including data hubs, cloud computing platforms, and analytical services. If you're working on an Earth observation project, NoR sponsorship can significantly reduce operational costs and enhance your access to cutting-edge resources. For more information, visit: [https://nor-discover.org/](https://nor-discover.org/).

Access to the platforms provided by NoR is managed through this initiative. To apply for NoR sponsorship and gain access to the full range of resources, please refer to the NoR Sponsorship Application section for detailed instructions on how to apply.

::: tip
EarthCODE will manage the NoR subscription process moving forward. However, until the integration with NoR is fully finalized, users will need to request their own subscription directly. We will notify you once this process is automated and fully integrated into EarthCODE.
:::

A key feature of NoR is that all participating platforms offer on-demand training to users. Sponsored by NoR, these training sessions provide high-quality educational materials to help researchers fully utilize the available resources. Whether you're learning to work with Earth observation data or developing complex workflows, NoR’s training is an invaluable asset for enhancing your research skills.

For more details on available training materials, please visit the [Tutorials and Resources section]().

Through NoR, ESA also offers sponsorship opportunities to help cover the costs of data access, storage, and processing on participating platforms, allowing researchers to focus on their projects without financial constraints.

### **Who Can Apply?**

NoR sponsorship is available for:
- Researchers and scientists conducting projects with a strong focus on **Earth observation data**.
- Educational initiatives and institutions integrating Earth observation data into their curriculum.
- Projects aligning with ESA’s objectives, particularly those promoting **sustainable development**, **innovation**, or **technological advancement**.

Applications are assessed based on scientific merit, societal impact, and the alignment with ESA’s mission.


### **How to Apply for NoR Sponsorship**

Applying for NoR sponsorship is straightforward. Here’s a step-by-step guide:

#### **1. Explore Available Resources**
Visit the NoR discovery portal at [http://nor-discover.org](http://nor-discover.org) to review the portfolio of available resources.

#### **2. Select a Service Provider**
Choose a suitable service provider from the list, such as **UP42** or **EarthConsole**.

#### **3. Use the Pricing Wizard**
Go through the pricing wizard procedure for your chosen provider to estimate costs.

#### **4. Prepare Your Application**
Draft a detailed project description that explains how it will benefit from the Earth Observation (EO) services.

#### **5. Submit the Sponsorship Request**
- Export the sponsorship request form from the pricing wizard page.
- Sign the form.
- Email it to **NoR-SponsorshipRequests@esa.int**.

#### **6. Wait for Evaluation**
ESA will review your proposal within 6–10 working days.

#### **7. Create a Service Provider Account**
If your application is approved, create an account with your chosen service provider (e.g., UP42 or EarthConsole).

A video walkthrough is available at: https://youtu.be/IJEZRSac6EE?feature=shared

### **Pro Tips for a Strong Application**
- Clearly align your project goals with ESA's objectives, such as **climate monitoring**, **biodiversity conservation**, or **disaster management**.
- Emphasize the societal or environmental impact of your work.
- Make a realistic and detailed estimate of the resources you’ll need.


## Understanding Available Tools and Platforms
In this sub-section, users will get an overview of the core tools and platforms available in EarthCODE, including cloud computing services, data storage options, and processing capabilities. The section will highlight the most commonly used platforms and services and explain how they integrate with each other.

### Cloud Computing Resources

Overview of available scalable computing environments and platforms, like commercial cloud services, high-performance computing (HPC), etc.

### Data Management Tools

Description of tools for managing and processing large datasets, including access to Earth Observation (EO) data, data cubes, and visualization platforms.

### Machine Learning & Processing Tools

List and explanation of tools available for machine learning, statistical modeling, and other advanced data analysis techniques.

## Selecting the Right Platform for Your Project

This sub-section helps users determine which platform and tools are best suited for their specific research needs. It includes guidance based on the type of data, processing power required, and the scale of the project.

### Match Platforms to Project Needs

Step-by-step recommendations for matching project types (e.g., small-scale analysis vs. large-scale EO data processing) to appropriate platforms.

### Key Considerations

Factors to consider when selecting platforms, such as cost, scalability, compatibility with existing workflows, and integration with EarthCODE’s services.

