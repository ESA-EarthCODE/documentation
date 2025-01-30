# FAIR and Open Science

## From FAIR Principles to FAIR in Practice

### A Conceptual Overview of FAIR Principles
The FAIR principles (Findable, Accessible, Interoperable, and Reusable) provide a structured approach to managing Earth Observation (EO) data, ensuring that both data and processing workflows can be efficiently discovered, accessed, and used across disciplines. Given the increasing volume and complexity of EO data—ranging from satellite imagery to in situ measurements—FAIR principles are essential for enabling automated discovery, seamless integration, and reproducible science.

FAIR is not just about data; software, models, and workflows must also be FAIR to ensure full reproducibility of scientific analyses. This requires:

- **FAIR metadata** for software and workflows, ensuring clear documentation of inputs, outputs, dependencies, and provenance.
- **Persistent identifiers (PIDs)** for datasets, algorithms, and workflows to support traceability and reuse.
- **Interoperable formats and standards**, such as netCDF, Zarr, and STAC for data, as well as CWL (Common Workflow Language) for workflow portability, OGC API - Processes for standardized execution, and openEO for cloud-based EO data processing, ensuring compatibility across platforms.
- **Accessible computing environments**, such as the cloud-based processing platforms available in EarthCODE, which allow users to execute EO workflows.

FAIR does not imply that data or software must be open by default, but rather that they are well-described, structured, and reusable under appropriate conditions. By applying FAIR principles to both data and processing, the EO community can enhance scientific transparency, improve cross-disciplinary collaboration, and enable scalable, automated analysis—key for addressing global challenges like climate change, disaster response, and biodiversity conservation.

### A Deep Dive into the FAIR Principles
Everyone knows F, A, I, and R, but the FAIR Guiding Principles consist of 15 one-liners that define the key behaviors necessary for making data and services machine-actionable. In this section, we unpack the assumptions implicit in each FAIR Principle and interpret their intentions. We also examine common misconceptions and identify areas not covered by FAIR.

The 15 FAIR Guiding Principles were first defined by Wilkinson et al. (2016) DOI: 10.1038/sdata.2016.18:

#### To be Findable:
F1. (meta)data are assigned a globally unique and persistent identifier  
F2. data are described with rich metadata (defined by R1 below)  
F3. metadata clearly and explicitly include the identifier of the data it describes  
F4. (meta)data are registered or indexed in a searchable resource  

#### To be Accessible:
A1. (meta)data are retrievable by their identifier using a standardized communications protocol  
A1.1 the protocol is open, free, and universally implementable  
A1.2 the protocol allows for an authentication and authorization procedure, where necessary  
A2. metadata are accessible, even when the data are no longer available  

#### To be Interoperable:
I1. (meta)data use a formal, accessible, shared, and broadly applicable language for knowledge representation.  
I2. (meta)data use vocabularies that follow FAIR principles  
I3. (meta)data include qualified references to other (meta)data  

#### To be Reusable:
R1. meta(data) are richly described with a plurality of accurate and relevant attributes  
R1.1. (meta)data are released with a clear and accessible data usage license  
R1.2. (meta)data are associated with detailed provenance  
R1.3. (meta)data meet domain-relevant community standards  

## Open Science: A Collaborative and Transparent Approach
Open Science is a movement that promotes transparency, accessibility, and collaboration in scientific research. According to UNESCO, Open Science encompasses open access to scientific knowledge, open data, open-source software, and broader participation in research processes.

## Collaboration Tips
A fundamental aspect of Open Science is **sharing while doing**, rather than treating data and publications as an afterthought. The earlier Open Science principles are incorporated into research workflows, the easier they are to implement. This approach enables:

- **Early data sharing**, fostering collaboration and enabling reproducibility.
- **Transparent methodologies**, making research processes more robust and verifiable.
- **Open access to publications and resources**, ensuring that knowledge is freely available to the broader community.

By integrating Open Science with FAIR principles, the EO community can maximize the impact of research, enhance data accessibility, and facilitate cross-domain innovation.




Guidance for setting up user permissions, managing team workflows, and collaborating with other researchers within the EarthCODE environment.
