---
order: 6
--- 
# Frequently Asked Questions
:::warning 🛠️ Page Under Development
Content is being actively developed and updated for this page. EarthCODE's documentation is a living document and will be continuously updated with detailed reviews.
:::
This sub-section provides solutions to common issues that users may encounter.




## Open Science Catalog

<details>
<summary><strong>How do I add entries to the Open Science Catalog?</strong></summary>

Please check the [documentation](../Technical%20Documentation/Open%20Science%20Catalog/Contributing%20to%20the%20Open%20Science%20Catalog.md) or directly the [examples](https://esa-earthcode.github.io/examples/index-2/).
</details>


<details>
<summary><strong>Can I publish pre-trained models or anonymized data?</strong></summary>

Yes. The FAIR principles do **not** require assets to be fully open, so you may publish pre-trained models or anonymized datasets. Wherever possible, include a small sample dataset to help others reproduce and validate your workflow.
</details>

<details>
<summary><strong>Can I add proprietary datasets to the OSC ?</strong></summary>

Yes, provided the correct licensing information is specified.

</details>


<details>
<summary><strong>I am not an ESA funded project. Can I publish to the OSC?</strong></summary>

Currently, this is decided on a case by case basis. Contact the EarthCODE team with details about your usecase to get more specific information.

</details>


## ESA Project Results Repository (PRR)

<details>
<summary><strong>How do I upload my data to the PRR?</strong></summary>

Please check the [documentation](../Technical%20Documentation/ESA%20Project%20Results%20Repository/index.md) or directly the [examples](https://esa-earthcode.github.io/examples/index-1/).
</details>

<details>
<summary><strong>Can I update my data periodically?</strong></summary>

The PRR's primarily serves as long-term storage for finished project outcomes, that have been verified by the corresponding Technical Officer. However, new products can be added on some occasions. Contact the EarthCODE team with details about your usecase to get more specific information.

</details>

<details>
<summary><strong>I am not an ESA funded project. Can I upload my data to the ESA PRR?</strong></summary>

The PRR primarily serves ESA-related projects, however other projects such as those from the ESA member state space agencies can also apply. Contact the EarthCODE team with details about your usecase to get more specific information.

</details>

## Platforms

<details>
<summary><strong>How do I get access to EarthCODE platforms?</strong></summary>

First, select the appropriate platform for your use case, see the [platform section](../Technical%20Documentation/Platforms/) for more information, and then contact the platform provider directly.
</details>


<details>
<summary><strong>Are non‑ESA projects eligible for NoR credits?</strong></summary>

Yes, but priority is given to ESA‑funded projects.
</details>

<details>
<summary><strong>Can I use Google Earth Engine (GEE) within EarthCODE?</strong></summary>

Google Earth Engine is not yet one of the integrated EarthCODE platforms, and there are no short‑term plans to add it. You can still process data in GEE and then manually publish the resulting datasets and workflows to EarthCODE. We have logged the community’s interest in a future GEE integration.
</details>

<details>
<summary><strong>Can I transfer unused NoR credits between platforms?</strong></summary>

Not yet. Credit transfer is on our roadmap, but is complex because each platform is operated by a different provider.
</details>


## Community

<details>
<summary><strong>When will EarthCODE be released officially?</strong></summary>

The first set of integrated platforms will be available by **30 June 2025**. Full interoperability between platforms is scheduled for **September 2025**. Additional platforms will be integrated on a rolling basis.

*Stay informed:*  
- [EarthCODE website](https://earthcode.esa.int/)  
- [Forum](https://discourse-earthcode.eox.at/)  
- [LinkedIn](https://www.linkedin.com/company/106663043)  
- [Newsletter](https://esacontact.esa.int/ESA_EO_OpenScience_Subscribe/)
</details>

## EarthCODE questions

<details>
<summary><strong>How does EarthCODE differ from the GEO Knowledge Hub? Will I need to register my outputs in multiple places?</strong></summary>

EarthCODE is ESA’s default environment for ESA‑funded projects, providing an ecosystem of integrated platforms for developing, executing and sharing open science. Once your data and workflows are FAIR, the same metadata can be exposed to other registries—such as the GEO Knowledge Hub—without duplicating effort.
</details>


<details>
<summary><strong>How do I integrate a platform with EarthCODE?</strong></summary>

ESA issues “Best‑Practice” procurement tenders periodically. Responding to a tender is the route to integration. Requirements include:

- GitHub‑based single sign‑on  
- Automated publication of data and workflows to the Open Science Catalog (OSC)
- Connection to the ESA Project Results Repository (PRR) for long‑term storage
- Ability to execute published experiments on the platform
- Registration in the Network of Resources (NoR) discovery portal
- User documentation and a service‑level agreement (SLA)

The latest call is described on the [EarthCODE blog](https://earthcode.esa.int/blog/itt-bp2).
</details>

<details>
<summary><strong>What is the relationship between EarthCODE and APEx?</strong></summary>

EarthCODE focuses on cataloguing and sharing research outputs. APEx takes mature workflows from EarthCODE and scales them into production‑ready services.
</details>


## Additional Support

### EarthCODE, Open Science Catalog, ESA Project Results Repository or Discourse Support 
  - The first place to go for issues is the **EarthCODE Discourse Forum - Technical Support Category** https://discourse-earthcode.eox.at/c/technical-support/8. If appropriate, please create a post with your problem and we will promptly answer there.
  - Alternatively, you can email us at: earth-code@esa.int

  - If you have found a bug or would like to suggest a feature, you can raise GitHub Issues on the following pages:
    - Portal - https://github.com/ESA-EarthCODE/portal/issues
    - Open Science Catalog - https://github.com/EOEPCA/open-science-catalog-metadata-staging/issues
    - Documentation (this site) -  https://github.com/ESA-EarthCODE/documentation/issues


### EarthCODE Platforms Support
For these types of issues, the EarthCODE platform providers will directly support you. Please find the relevant types of issues, and their common solutions below. Refer to the [specific platform pages](../Technical%20Documentation/Platforms/) for additional details.