---
order: 1
---
# FAIR and Open Science Best Practices

***Space agencies and international organisations worldwide promote Open Science through dedicated programmes***

ESA, alongside the European Commission, has a long-standing commitment to Open Science, with example programmes such as Earth Explorers and the Copernicus Programme that provide free and open Earth Observation data. However, ESA’s Open Science vision extends far beyond open data, covering the entire research cycle.

![Open Science](/img/terms/open-science-esa.png)

For effective Open Science - research data, code, and documentation must be both FAIR and Open, as this enables scientists to:
1) Find, access and process satellite and in-situ data
2) Develop and publish reusable code and workflows reproducible on cloud environments such as EarthCODE Platforms
3) Validate outputs and share reproducible results and;
4) Maintain accessible for the long term and collaborate across institutional, disciplinary, and national boundaries.

These practices improve data quality and longevity, allowing researchers to build upon existing knowledge. For individual researchers, it boosts visibility, fosters collaborations, expands networks, and saves time by making outputs well-documented, accessible, and easy to build upon.

**To learn more about Open Science and modern EO data science on the cloud in detail we recommend: [https://eo-college.org/courses/cubes-and-clouds/](https://eo-college.org/courses/cubes-and-clouds/)**

## Open Science: A Collaborative and Transparent Approach

Open Science is a cultural shift in how we create, share, and use scientific knowledge - with an emphasis on transparency, openness, and enabling public access and reuse of research. It benefits not only science, but also society and the economy, by fostering collaboration, credibility, and innovation.  

It is implemented through practices like **Open Access** to publications, **Open Source** software, **Open Data**, and **Open Educational Resources** and — and built on four pillars, **4 Rs** — Reliable, Reproducible, Reusable, and Relevant 


![4R's of Open Science](/img/4RsOpenScience.png)

<!-- | **4 R's of Open Science** | **Supporting Pillars**                                                                                                                     |
|---------------------------|--------------------------------------------------------------------------------------------------------------------------------------------|
| **Reliable** – Ensure research meets scientific standards and remains credible both within and beyond the academic context. | **Data** – Make datasets findable with persistent identifiers (DOIs), rich metadata, and clear licenses to enable validation and reuse. |
| **Reproducible** – Share methods and decisions openly so results can be independently verified. | **Code** – Use open-source standards, store code in searchable repositories, assign DOIs, and apply clear licenses for reuse.            |
| **Reusable** – Provide well-documented outputs so others can build on your work. | **Papers** – Publish openly, share preprints, and ensure linked data and code are accessible to support reuse and validation.            |
| **Relevant** – Maximize academic, societal, and economic impact by making research accessible and interactive. | **Reviews** – Make peer reviews transparent to increase trust, quality, and the relevance of research outputs.                           | -->


:::tip Collaboration Tips
In Open Science, sharing while doing—integrating FAIR principles early—maximizes research impact, fosters collaboration, and ensures transparency and accessibility.
:::



## From FAIR Principles to FAIR in Practice

### A Conceptual Overview of FAIR Principles

The FAIR Guiding Principles (Findable, Accessible, Interoperable, and Reusable) were first defined by Wilkinson et al. (2016) [DOI: 10.1038/sdata.2016.18](https://doi.org/10.1038/sdata.2016.18). They provide a structured approach to managing data, ensuring that both data and processing workflows can be efficiently discovered, accessed, and used across disciplines.

The FAIR principles consist of 15 one-liners that define the key behaviors necessary for making data and services machine-actionable

![Analysing the FAIR principles](/img/FAIR-interpretation.png)

<!-- go in image above -->
- **Findable** - Data and metadata must be easily discoverable by both humans and machines. Machine-readable metadata enables automated discovery of datasets and services, making this a cornerstone of the FAIRification process.
- **Accessible** - Once data is found, users must understand how to access it, including any required authentication and authorization procedures.
- **Interoperable** - Data must integrate seamlessly with other datasets and work effectively with various applications, workflows, and processing systems.
- **Reusable** - The ultimate FAIR objective is maximizing data reuse through comprehensive documentation that enables replication and combination across different research contexts


:::warning FAIR is not binary: FAIR is a spectrum
:::

Given the increasing volume and complexity of Earth Observation (EO) data—ranging from satellite imagery to in situ measurements—FAIR principles are essential for enabling automated discovery, integration, and reproducible science.

As shown in the figure above, the FAIR implementation also depends on technical infrastructure and community-driven agreements
- **Metadata as the Foundation**: FAIR depends on structured, standardized metadata to enable discovery, accessibility, and interoperability.
- **Technical Infrastructure**: Some principles require persistent identifiers (F1), explicit metadata links (F3), and indexing in searchable resources (F4)—all dependent on well-supported repositories and registries.
- **Community Agreements**: FAIR also involves social decisions—defining "rich metadata" (F2), agreeing on provenance details (R1.2), and adopting domain standards (R1.3).

Communities must develop clear, domain-specific FAIR guidelines, align with technical solutions, and establish shared standards.

:::tip FAIR Does Not Imply Open
FAIR does not mean data or software must be openly accessible - only that they are well-described, structured, and reusable under defined conditions.
:::

# EarthCODE's FAIR and Open Science Ecosystem

To turn FAIR principles into practice, we need more than just accessible data — we need a complete FAIR and Open infrastructure that supports the entire research lifecycle, including the algorithms, platforms, tools, and workflows. 

![alt text](/img/EarthCODEFAIR.png)

EarthCODE defines this FAIR and Open infrastructure in three key components alongside the community best practices for implementing FAIR principles:

- [**Products**](./Data.md) – Research outputs, such as datasets, are stored in the ESA Project Results Repository (PRR) and described with rich STAC metadata in the ESA Open Science Catalog (OSC) for global discovery and reuse.  
- [**Workflows**](./Workflows.md) – The processes, algorithms, and configurations that generate these outputs are captured, documented, and published with OGC API – Records metadata, ensuring they can be rerun, adapted, and validated.  
- [**Experiments**](./Experiments.md) – Defining parameters and execution on the federation of EarthCODE-integrated platforms, supported by ESA’s Network of Resources sponsorship, enabling researchers to run their workflows close to the data.

With this metadata, one may describe which code (Workflow) was ran with what parameters, inputs and compute/platforms (Experiments) to produce said resulting dataset (Product).

:::tip EarthCODE Integrated Platforms Support
EarthCODE integrated platforms embed FAIR by automating the principles of your data and workflows - automatically generating and publishing the needed metadata, as well as helping with data discovery and re-use. See the [Platforms Page](../../Technical%20Documentation/Platforms/index.md) for more details.
:::

