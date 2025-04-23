---
order: 1
---
# FAIR and Open Science

## Why FAIR?

Modern Earth system science faces complex challenges that demand collaborative, transparent, and reproducible approaches. At the heart of this transformation is the convergence of **FAIR principles** (Findability, Accessibility, Interoperability, and Reusability) and Open Science - which create unprecedented opportunities for scalable, cross-sector research and decision-making.

ESA's strategic objective is to **foster the development of a culture and practice of openness in EO science, applications and industry, and of a sustainable open innovation ecosystem**.

![Open Science](/img/terms/open-science-esa.png)

Adopting FAIR principles at scale for data and workflows in Earth Observation is essential for implementing this vision as it enables scientists to (1) Access and process satellite and in-situ data (in collaborative cloud environments such as EarthCODE Platforms), (2) Develop and publish reusable code and workflows, (3) Validate outputs and share reproducible results, and (4) Collaborate across institutional, disciplinary, and national boundaries. Openness enhances transparency and trust in research results, facilitates collaboration between different institutions and disciplines, and significantly reduces duplication of efforts.

Moreover, FAIR and Open Science practices improve data quality and longevity, allowing researchers to build upon existing knowledge and to more effectively address complex global challenges such as climate change, biodiversity loss, and sustainable development.

Adopting FAIR and Open Science practices also provides direct personal benefits to researchers. It enhances the visibility and citation of their work, fosters potential new collaborations, and expands professional networks. Moreover, by making research outputs clearly documented and easily accessible, researchers save time in their daily workflows, simplify data management tasks, and improve their ability to build upon prior work—including their own.

## From FAIR Principles to FAIR in Practice

### A Conceptual Overview of FAIR Principles

The FAIR principles (Findable, Accessible, Interoperable, and Reusable) provide a structured approach to managing data, ensuring that both data and processing workflows can be efficiently discovered, accessed, and used across disciplines. Given the increasing volume and complexity of Earth Observation (EO) data—ranging from satellite imagery to in situ measurements—FAIR principles are essential for enabling automated discovery, seamless integration, and reproducible science.

FAIR is not just about data; **software**, **models**, and **workflows** must also be FAIR to ensure full reproducibility of scientific analyses. This requires:

- **FAIR metadata** for software and workflows, ensuring clear documentation of inputs, outputs, dependencies, and provenance.
- **Persistent identifiers (PIDs)** for datasets, algorithms, and workflows to support traceability and reuse.
- **Interoperable formats and standards**, such as netCDF, Zarr, and STAC for data, or CWL (Common Workflow Language) for workflow portability, OGC API - Processes for standardized execution, and openEO for cloud-based EO data processing, ensuring compatibility across platforms.
- **Accessible computing environments**, such as the [cloud-based processing platforms available in EarthCODE](https://nor-discover.org/), which allow users to execute EO workflows.

**FAIR does not imply that data or software must be open** by default, but rather that they are well-described, structured, and reusable under appropriate conditions. By applying FAIR principles to both data and processing, the EO community can enhance scientific transparency, improve cross-disciplinary collaboration, and enable scalable, automated analysis—key for addressing global challenges like climate change, disaster response, and biodiversity conservation.

### A Deep Dive into the FAIR Principles
Everyone knows F, A, I, and R, but the FAIR Guiding Principles consist of 15 one-liners that define the key behaviors necessary for making data and services machine-actionable. In this section, we unpack the assumptions implicit in each FAIR Principle and interpret their intentions. We also examine common misconceptions and identify areas not covered by FAIR.

The 15 FAIR Guiding Principles were first defined by Wilkinson et al. (2016) [DOI: 10.1038/sdata.2016.18](https://doi.org/10.1038/sdata.2016.18):

![The FAIR principles](../public/img/FAIRprinciples.png)

### Metadata, Infrastructure, and Community Agreements

The 15 FAIR principles focus on machine-actionable metadata, but as shown in the figure below, their implementation also depends on technical infrastructure and community-driven agreements.

![Analysing the FAIR principles](../public/img/FAIR-interpretation.png)

- **Metadata as the Foundation**: FAIR depends on structured, standardized metadata to enable discovery, accessibility, and interoperability.
- **Technical Infrastructure**: Some principles require persistent identifiers (F1), explicit metadata links (F3), and indexing in searchable resources (F4)—all dependent on well-supported repositories and registries.
- **Community Agreements**: FAIR also involves social decisions—defining "rich metadata" (F2), agreeing on provenance details (R1.2), and adopting domain standards (R1.3).

To move from principles to practice, communities must develop clear, domain-specific FAIR guidelines, align with technical solutions, and establish shared standards. Only through this combined effort can FAIR be effectively implemented in Earth Observation and beyond.

## Interpreting the FAIR Principles for the Earth Observation Community

The FAIR principles provide high-level guidance for ensuring that data, software, and workflows are Findable, Accessible, Interoperable, and Reusable. However, their implementation requires concrete decisions on infrastructure, standards, and governance within specific communities. 

| **FAIR Principle** | **EarthCODE FAIR Implementation Profile (FIP) Decisions** |
|-----------------|------------------------------------------------|
| **[F1](https://open.spotify.com/episode/1k4FydzYW1Mx7t9vQN9KOz)** | Use of globally unique, persistent identifiers (e.g., DOIs) for datasets and workflows. |
| **[F2](https://open.spotify.com/episode/2mEUUbAiEQYhMUZwEqgoTN)** | Metadata must comply with domain-specific standards such as ISO 19115, STAC, and DCAT. |
| **[F3](https://open.spotify.com/episode/0WeoKjy8sUN6acOf4vxYyG)** | Metadata must explicitly include dataset identifiers using standardized references. |
| **[F4](https://open.spotify.com/episode/2A1Zn6tOc3g8D7KZHZRygf)** | Data and metadata are indexed in community-recognized repositories (e.g., CMR, GeoNetwork). |
| **[A1](https://open.spotify.com/episode/4kIC0yDgzADCZnxQTEl168)** | Data and metadata must be accessible via open, standardized web protocols such as HTTPS and OGC APIs. |
| **[A1.1](https://open.spotify.com/episode/4cokyE6JL3KFJT5WykJNbE)** | Protocols used must be open, free, and universally implementable. |
| **[A1.2](https://open.spotify.com/episode/0B9NKsy9iSf2g39bV9sKvd)** | Authentication and authorization frameworks (e.g., OpenID Connect) ensure controlled access where needed. |
| **[A2](https://open.spotify.com/episode/1fYL1SNAmott55NxPtYYKd)** | Metadata must remain accessible even if data are no longer available. Persistent repositories ensure this. |
| **[I1](https://open.spotify.com/episode/2nh22FG9i1zy7nbaRpPPWh)** | Use of formal, accessible, and community-adopted knowledge representation languages (e.g., JSON-LD, RDF). |
| **[I2](https://open.spotify.com/episode/2ZOWq5ZHaD8y9xEAjoQk1i)** | Adoption of controlled vocabularies such as CF conventions, GCMD Keywords, and SWEET ontologies. |
| **[I3](https://open.spotify.com/episode/5RLTk8HkOB4iotKVKJj3SL)** | Metadata includes qualified references to related datasets, models, and workflows. |
| **[R1](https://open.spotify.com/episode/4nVoYz4cpPjjoAzKOQFw2D)** | Metadata includes detailed descriptions following domain-specific best practices. |
| **[R1.1](https://open.spotify.com/episode/4jSIyFn2vxlD72meNTZ60i)** | Datasets are released with clear, standardized licenses (e.g., Creative Commons, ODbL). |
| **[R1.2](https://open.spotify.com/episode/49kCkqLbe140FY7aCaYdJF)** | Provenance metadata is recorded using PROV-O or similar standards to ensure reproducibility. |
| **[R1.3](https://open.spotify.com/episode/1rMIfin2bTyRDdBOHZa2PD)** | Data and metadata align with community standards like CEOS, INSPIRE, and OGC. |



By explicitly declaring its choices, the EarthCODE community ensures that its approach to FAIR is transparent, actionable, and aligned with best practices in Earth Observation data management and processing.
This structured implementation enhances data discoverability, interoperability, and reuse while maintaining technical rigor and community consensus.

## Open Science: A Collaborative and Transparent Approach
Open Science is a movement that promotes transparency, accessibility, and collaboration in scientific research. According to [UNESCO Recommendation on Open Science](https://www.unesco.org/en/open-science/about?hub=686), Open Science encompasses open access to scientific knowledge, open data, open-source software, open workflows and broader participation in research processes.

## Collaboration Tips
A fundamental aspect of Open Science is **sharing while doing**, rather than treating data and publications as an afterthought. The earlier Open Science principles are incorporated into research workflows, the easier they are to implement. This approach enables:

- **Early data sharing**, fostering collaboration and enabling reproducibility.
- **Transparent methodologies**, making research processes more robust and verifiable.
- **Open access to publications and resources**, ensuring that knowledge is freely available to the broader community.

By integrating Open Science with FAIR principles, the EO community can maximize the impact of research, enhance data accessibility, and facilitate cross-domain innovation.



### Collaboration in EarthCODE

Guidance for setting up user permissions, managing team workflows, and collaborating with other researchers within the EarthCODE environment.


### References

*- Wilkinson, M., Dumontier, M., Aalbersberg, I. et al. (2016). The FAIR Guiding Principles for scientific data management and stewardship. *Scientific Data*, 3, Article 160018. [https://doi.org/10.1038/sdata.2016.18](https://doi.org/10.1038/sdata.2016.18)*

*- FAIR Data Maturity Model Working Group. (2020). FAIR Data Maturity Model: Specification and Guidelines (Version 1.0). *Zenodo*. [https://doi.org/10.15497/rda00050](https://doi.org/10.15497/rda00050)*

*- Jacobsen, A., de Miranda Azevedo, R., Juty, N., Batista, D., Coles, S., Cornet, R., Courtot, M., Crosas, M., Dumontier, M., Evelo, C. T., Goble, C., Guizzardi, G., Hansen, K. K., Hasnain, A., Hettne, K., Heringa, J., Hooft, R. W. W., Imming, M., Jeffery, K. G., Kaliyaperumal, R., Kersloot, M. G., Kirkpatrick, C. R., Kuhn, T., Labastida, I., Magagna, B., McQuilton, P., Meyers, N., Montesanti, A., van Reisen, M., Rocca-Serra, P., Pergl, R., Sansone, S.-A., da Silva Santos, L. O. B., Schneider, J., Strawn, G., Thompson, M., Waagmeester, A., Weigel, T., Wilkinson, M. D., Willighagen, E. L., Wittenburg, P., Roos, M., Mons, B., & Schultes, E. (2020). FAIR Principles: Interpretations and Implementation Considerations. *Data Intelligence*, 2(1–2), 10–29. [https://doi.org/10.1162/dint_r_00024](https://doi.org/10.1162/dint_r_00024)*