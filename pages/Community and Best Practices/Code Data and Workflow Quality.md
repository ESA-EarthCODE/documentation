# Code, Data and Workflow Quality
:::warning 🛠️ Page Under Development
Content is being actively developed and updated for this page. EarthCODE's documentation is a living document and will be continuously updated with detailed reviews.
:::
## Applying and maintaining FAIR Principles

The checklist below provides practical guidance for applying the FAIR principles in EarthCODE projects.

- 1. Planning Phase
    - Choose FAIR-compliant data formats, metadata standards and tools (e.g., STAC, JSON for metadata, Zarr for data).
    - Select an open license (e.g., CC-BY) to ensure data accessibility and reusability.
    - Define roles and permissions for team members to control access to data and resources.
    - Check the available EarthCODE platforms and try to identify the one that best suits your needs.
- 2. Kicking Off
    - Whenever possible, choose an EarthCODE platform to make publishing in EarthCODE easier
    - Create and add metadata to datasets as data is collected to ensure findability.
    - Document project goals and Open Science practices: Share with the team and ensure alignment with FAIR principles.
    - Ensure data accessibility: Make sure datasets are stored in a location where they can be easily accessed by the team (e.g., cloud storage, data repository).
- 3. Ongoing
    - Monitor data and metadata quality regularly to ensure accessibility and correctness.
    - Ensure interoperability: Check that datasets are compatible with community standards and formats (e.g., Zarr, GeoTIFF, GeoJSON, NetCDF).
    - Foster collaboration: Encourage sharing and cross-team cooperation, including sharing links to datasets stored externally if not yet in EarthCODE.
    - Implement version control for datasets, ensuring that the latest versions are clearly documented.
- 4. Publishing in EarthCODE (End of Project)
    - Upload datasets and metadata to EarthCODE for long-term storage and publishing.
    - Link datasets to related resources (e.g., other datasets, publications) through metadata to facilitate further exploration and reuse.
    - Verify open licenses: Ensure datasets are published with open licenses for broad reuse (e.g., CC-BY).
    - Ensure the metadata is up-to-date and complete before publishing in EarthCODE.
- 5. Completed
    - Finalize and publish datasets in EarthCODE, ensuring they are accessible, findable, and reusable.
    - Encourage data reuse: Ensure datasets are easy to find, access, and understand for reuse by others.

## Best Practices for high-quality Code, Data and Workflows

Maintaining high-quality code and data throughout your project ensures that your outputs are reusable, trustworthy, and easier to publish. Below are tips and recommended practices to support quality assurance and reproducibility:

- Code Quality
     - Use Version Control: Track your development using Git and a shared repository (e.g., GitHub or GitLab).
     - Automate Testing: Implement unit tests and integration tests using tools like pytest, unittest, or CI/CD workflows.
     - Follow Coding Standards: Adopt a consistent style (e.g., PEP8 for Python) and use linters (e.g., flake8, black) to maintain code clarity.
     - Write Documentation: Provide clear usage instructions and inline comments. Consider using Jupyter Notebooks or Markdown README files to explain workflows.
- Data Quality
     - Validate Your Data: Apply automated checks for data formats, missing values, and schema consistency.
     - Document Your Data: Create or maintain metadata alongside your datasets, including descriptions of variables, units, and collection methods.
     - Use Standard Formats: Choose interoperable, machine-readable formats (e.g., NetCDF, GeoTIFF, Zarr) and community-agreed standards (such as CF-Conventions).
     - Track Data Changes: when needed, version datasets as they evolve and log processing steps to support reproducibility.
- Integration with EarthCODE
     - Use EarthCODE-Compatible Tools: When possible, rely on tools and environments that are natively supported within EarthCODE platforms.
     - Test Workflows in EarthCODE Early: Validate your workflows in the target platform before final publication to avoid integration issues.
     - Publish Intermediate Outputs: Store and document intermediate results to help others understand and reuse your work incrementally.
     - Regularly revisiting these practices during the project lifecycle will reduce last-minute issues and make your results easier to share and build upon.

