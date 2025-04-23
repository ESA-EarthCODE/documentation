# FAIR and Open Science

## From FAIR Principles to FAIR in Practice

### A Conceptual Overview of FAIR Principles

The FAIR principles (Findable, Accessible, Interoperable, and Reusable) provide a structured approach to managing data, ensuring that both data and processing workflows can be efficiently discovered, accessed, and used across disciplines. Given the increasing volume and complexity of Earth Observation (EO) data—ranging from satellite imagery to in situ measurements—FAIR principles are essential for enabling automated discovery, seamless integration, and reproducible science.

FAIR is not just about data; **software**, **models**, and **workflows** must also be FAIR to ensure full reproducibility of scientific analyses. This requires:

- **FAIR metadata** for software and workflows, ensuring clear documentation of inputs, outputs, dependencies, and provenance.
- **Persistent identifiers (PIDs)** for datasets, algorithms, and workflows to support traceability and reuse.
- **Interoperable formats and standards**, such as netCDF, Zarr, and STAC for data, or CWL (Common Workflow Language) for workflow portability, OGC API - Processes for standardized execution, and openEO for cloud-based EO data processing, ensuring compatibility across platforms.
- **Accessible computing environments**, such as the [cloud-based processing platforms available in EarthCODE](https://esa-earthcode.github.io/documentation/Technical%20Documentation/Working%20With%20Platforms%20and%20Sponsorship/), which allow users to execute EO workflows.

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
| **[F1](https://open.spotify.com/episode/1k4FydzYW1Mx7t9vQN9KOz)** | Use of globally unique, persistent identifiers (e.g., DOIs) for datasets and workflows. Example: [10.5281/zenodo.8052519](https://doi.org/10.5281/zenodo.8052519)                |
| **[F2](https://open.spotify.com/episode/2mEUUbAiEQYhMUZwEqgoTN)** | Metadata must comply with domain-specific standards such as ISO 19115, STAC, and DCAT. Example:  The [STAC specification](https://stacspec.org/en/about/stac-spec/) defines the metadata fields required for STAC Items. This is implemented in EarthCODE, as seen in the metadata for this STAC item [HCA_L2E_CS_LTA__SIR1SAR_FR_20121225T202845_20121225T203058_D001](https://catalog.osc.earthcode.eox.at/collections/metadata:main/items/HCA_L2E_CS_LTA__SIR1SAR_FR_20121225T202845_20121225T203058_D001?f=json) from the ESA Open Science catalog. |
| **[F3](https://open.spotify.com/episode/0WeoKjy8sUN6acOf4vxYyG)** | Metadata must explicitly include dataset identifiers using standardized references. Example:The assets dictionary within a STAC Item provides identifiers `href` for specific files or resources associated with that data: [example of identifier in STAC item](https://github.com/radiantearth/stac-spec/blob/ec002bb93dbfa47976822def8f11b2861775b662/examples/core-item.json#L84) |
| **[F4](https://open.spotify.com/episode/2A1Zn6tOc3g8D7KZHZRygf)** | Data and metadata are indexed in community-recognized repositories (e.g., ESA Open Science Catalog, CMR, GeoNetwork). Example: In EarthCODE, data and metadata are indexed in the [ESA Open Science Catalog](https://opensciencedata.esa.int). |
| **[A1](https://open.spotify.com/episode/4kIC0yDgzADCZnxQTEl168)** | Data and metadata must be accessible via open, standardized web protocols such as HTTPS and OGC APIs. |
| **[A1.1](https://open.spotify.com/episode/4cokyE6JL3KFJT5WykJNbE)** | Protocols used must be open, free, and universally implementable. Example: HTTPS (Hypertext Transfer Protocol Secure) is widely used in Earth Observation, for instance in EarthCODE. |
| **[A1.2](https://open.spotify.com/episode/0B9NKsy9iSf2g39bV9sKvd)** | Authentication and authorization frameworks (e.g., OpenID Connect) ensure controlled access where needed. Example: In EarthCODE, Open Data authorization supports the practice of sharing data openly and enabling its reuse by others. |
| **[A2](https://open.spotify.com/episode/1fYL1SNAmott55NxPtYYKd)** | Metadata must remain accessible even if data are no longer available. Persistent repositories ensure this. Example: EarthCODE's metadata preservation policy ensures that metadata remains accessible, even if the data it describes is no longer available. |
| **[I1](https://open.spotify.com/episode/2nh22FG9i1zy7nbaRpPPWh)** | Use of formal, accessible, and community-adopted knowledge representation languages (e.g., JSON-LD, RDF). Example: EarthCODE uses JSON format for metadata records in its STAC catalog. |
| **[I2](https://open.spotify.com/episode/2ZOWq5ZHaD8y9xEAjoQk1i)** | Adoption of controlled vocabularies such as CF conventions, GCMD Keywords, and SWEET ontologies. |
| **[I3](https://open.spotify.com/episode/5RLTk8HkOB4iotKVKJj3SL)** | Metadata includes qualified references to related datasets, models, and workflows. Example: In EarthCODE, versioned datasets are linked to STAC metadata using qualified references.|
| **[R1](https://open.spotify.com/episode/4nVoYz4cpPjjoAzKOQFw2D)** | Metadata includes detailed descriptions following domain-specific best practices. |
| **[R1.1](https://open.spotify.com/episode/4jSIyFn2vxlD72meNTZ60i)** | Metadata and datasets are released with clear, standardized licenses (e.g., Creative Commons). Example: Metadata in EarthCODE is released under CC BY 4.0 (Attribution 4.0 International) and the use of open licenses is strongly encouraged for data too. |
| **[R1.2](https://open.spotify.com/episode/49kCkqLbe140FY7aCaYdJF)** | Provenance metadata is recorded using PROV-O or similar standards to ensure reproducibility. Example: EarthCODE uses STAC metadata "standard" where links to the original data and metadata can be specified. |
| **[R1.3](https://open.spotify.com/episode/1rMIfin2bTyRDdBOHZa2PD)** | Data and metadata align with community standards like CEOS, INSPIRE, and OGC. Example: EarthCODE uses community standards widely adopted in Earth Obsertvation, such as STAC. |



By explicitly declaring its choices, the EarthCODE community ensures that its approach to FAIR is transparent, actionable, and aligned with best practices in Earth Observation data management and processing.
This structured implementation enhances data discoverability, interoperability, and reuse while maintaining technical rigor and community consensus.

### References

- Wilkinson, M., Dumontier, M., Aalbersberg, I. et al. The FAIR Guiding Principles for scientific data management and stewardship. Sci Data 3, 160018 (2016). [DOI: 10.1038/sdata.2016.18](https://doi.org/10.1038/sdata.2016.18)
- FAIR Data Maturity Model Working Group. (2020). FAIR Data Maturity Model. Specification and Guidelines (1.0). Zenodo. [DOI: 10.15497/rda00050](https://doi.org/10.15497/rda00050)
- Annika Jacobsen, Ricardo de Miranda Azevedo, Nick Juty, Dominique Batista, Simon Coles, Ronald Cornet, Mélanie Courtot, Mercè Crosas, Michel Dumontier, Chris T. Evelo, Carole Goble, Giancarlo Guizzardi, Karsten Kryger Hansen, Ali Hasnain, Kristina Hettne, Jaap Heringa, Rob W.W. Hooft, Melanie Imming, Keith G. Jeffery, Rajaram Kaliyaperumal, Martijn G. Kersloot, Christine R. Kirkpatrick, Tobias Kuhn, Ignasi Labastida, Barbara Magagna, Peter McQuilton, Natalie Meyers, Annalisa Montesanti, Mirjam van Reisen, Philippe Rocca-Serra, Robert Pergl, Susanna-Assunta Sansone, Luiz Olavo Bonino da Silva Santos, Juliane Schneider, George Strawn, Mark Thompson, Andra Waagmeester, Tobias Weigel, Mark D. Wilkinson, Egon L. Willighagen, Peter Wittenburg, Marco Roos, Barend Mons, Erik Schultes; FAIR Principles: Interpretations and Implementation Considerations. Data Intelligence 2020; 2 (1-2): 10–29. [DOI: 10.1162/dint_r_00024](https://doi.org/10.1162/dint_r_00024)

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
