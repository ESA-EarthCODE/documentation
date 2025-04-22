---
order: 6
--- 
# Troubleshooting and Support
:::warning 🛠️ Page Under Development
Content is being actively developed and updated for this page. EarthCODE's documentation is a living document and will be continuously updated with detailed reviews.
:::
This sub-section provides solutions to common issues that users may encounter while configuring tools and platforms.

## Frequently Asked Questions

<details>
<summary><strong>Can I use Google Earth Engine (GEE) within EarthCODE?</strong></summary>

Google Earth Engine is not yet one of the integrated EarthCODE platforms, and there are no short‑term plans to add it. You can still process data in GEE and then manually publish the resulting datasets and workflows to EarthCODE. We have logged the community’s interest in a future GEE integration.
</details>

<details>
<summary><strong>Can I publish pretrained models or anonymised data?</strong></summary>

Yes. The FAIR principles do **not** require assets to be fully open, so you may publish pretrained models or anonymised datasets. Wherever possible, include a small sample dataset to help others reproduce and validate your workflow.
</details>

<details>
<summary><strong>How does EarthCODE differ from the GEO Knowledge Hub? Will I need to register my outputs in multiple places?</strong></summary>

EarthCODE is ESA’s default environment for ESA‑funded projects, providing an ecosystem of integrated platforms for developing, executing and sharing open science. Once your data and workflows are FAIR, the same metadata can be exposed to other registries—such as the GEO Knowledge Hub—without duplicating effort.
</details>

<details>
<summary><strong>When will EarthCODE be released?</strong></summary>

The first set of integrated platforms will be available by **30 June 2025**. Full interoperability between platforms is scheduled for **September 2025**. Additional platforms will be integrated on a rolling basis.

*Stay informed:*  
- [EarthCODE website](https://earthcode.esa.int/)  
- [Forum](https://discourse-earthcode.eox.at/)  
- [LinkedIn](https://www.linkedin.com/company/106663043)  
- [Newsletter](https://esacontact.esa.int/ESA_EO_OpenScience_Subscribe/)
</details>

<details>
<summary><strong>How do I integrate a platform with EarthCODE?</strong></summary>

ESA issues “Best‑Practice” procurement tenders periodically. Responding to a tender is the route to integration. Requirements include:

- GitHub‑based single sign‑on  
- Automated publication of data and workflows to the Open Science Catalog  
- Connection to the ESA Project Results Repository for long‑term storage  
- Ability to execute published experiments on the platform  
- Registration in the Network of Resources (NoR) catalogue  
- User documentation and a service‑level agreement (SLA)  

The latest call is described on the [EarthCODE blog](https://earthcode.esa.int/blog/itt-bp2).
</details>

<details>
<summary><strong>What is the relationship between EarthCODE and APEx?</strong></summary>

EarthCODE focuses on cataloguing and sharing research outputs. APEx takes mature workflows from EarthCODE and scales them into production‑ready services.
</details>

<details>
<summary><strong>Will EarthCODE make large‑scale Sentinel‑2 processing easier?</strong></summary>

Yes. The integrated platforms provide cloud‑native access to Sentinel‑2 and other large datasets, allowing you to run algorithms where the data reside.
</details>

<details>
<summary><strong>Where can I get help integrating my project?</strong></summary>

- Read the platform documentation and training materials.  
- Ask the community in the [EarthCODE Forum](https://discourse-earthcode.eox.at/)—the `#onboarding` category is a good starting point.  
- For personalised assistance, e‑mail **earthcode‑support@esa.int**.
</details>

<details>
<summary><strong>Are non‑ESA projects eligible for NoR credits?</strong></summary>

Yes, but priority is given to ESA‑funded projects.
</details>

<details>
<summary><strong>Can I transfer unused NoR credits between platforms?</strong></summary>

Not yet. Credit transfer is on our roadmap, but is complex because each platform is operated by a different provider.
</details>


## Common Issues and Solutions
A list of common problems users might encounter and how to resolve them.

## Issues Regarding EarthCODE
For these types of issues, the EarthCODE project team will directly support you. Please find the relevant types of issues, and their common solutions below.

### EarthCODE Portal
Problems with accounts, GitHub authentication, portal navigation, and user roles (who can contribute vs. who can view). For issues related to th

### EarthCODE Discourse and Community
Forum access, subscribing to newsletters and community guidelines.

### Best Practices
Problems with applying code, data, and workflow best practices standards, questions about publishing private data, metadata validation, FAIR compliance.

### Open Science Catalog
Problems related to finding, accessing or executing data and workflows on the Open Science Catalog.

### EarthCODE APIs
Using EarthCODE REST/OAuth APIs (authentication, rate limits, endpoints), troubleshooting common errors and versioning.

### Getting Help
Information on how to contact support, access user forums, or refer to the documentation for more help.

The first place to go for issues is the **EarthCODE Discourse Forum - Technical Support Category** https://discourse-earthcode.eox.at/c/technical-support/8. If appropriate, please create a post with your problem and we will promptly answer there.

- **EarthCODE General, Open Science Catalog and Portal, Discourse Support**  
  - Email: earth-code@esa.int
  - If you have found a bug or would like to suggest a feature, you can raise GitHub Issues on the following pages:
    - Portal - https://github.com/ESA-EarthCODE/portal/issues
    - Open Science Catalog - https://github.com/EOEPCA/open-science-catalog-metadata-staging/issues
    - Documentation (this site) -  https://github.com/ESA-EarthCODE/documentation/issues


## Issues Regarding EarthCODE Platforms
For these types of issues, the EarthCODE platform providers will directly support you. Please find the relevant types of issues, and their common solutions below. Refer to the [specific platform pages](../Technical%20Documentation/Platforms/) for additional details.

### Datasets
Supported file formats, where and how data are stored, cloud‑based access, and instructions for preparing and uploading datasets.

### Computational Research
Selecting and accessing compute platforms (DeepESDL, Euro Data Cube, CDSE, etc.), allocation of credits, and others. Executing, reusing or accessing workflows on platforms.


## Issues with ESA Project Results Repository
Typically the platform provider will handle issues related to uploading your results to the ESA PRR if you are using a platform to publish to EarthCODE and you should get in touch with the relevant platform support team.

If however you want to share your work through the ESA PRR and are NOT using a platform, these issues should be addressed with the EarthCODE team. Please use the contact details provided in the [getting help section](./Troubleshooting%20and%20Support.md#getting-help) above.

- **Platform Helpdesks and Support Channels (Platform Providers)**  
  - Please refer to the [specific platform page](../Technical%20Documentation/Platforms/) for support details