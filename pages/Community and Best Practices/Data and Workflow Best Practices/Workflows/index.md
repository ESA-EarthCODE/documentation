# Workflow Best Practices
:::warning 🛠️ Page Under Development
Content is being actively developed and updated for this page. EarthCODE's documentation is a living document and will be continuously updated with detailed reviews.
:::


In this page, we describe the design decisions and best practices for creating and distributing your scientific workflows to maximize their value and impact within the EarthCODE ecosystem. A high-quality workflow is more than just code that runs; it is a complete, transparent, and robust scientific narrative, packaged in a way that is easy for others (and your future self) to understand, reuse, and reproduce. This guide provides practical recommendations based on widely accepted community standards and established software development principles. The suggested guidelines are summarized in the EarthCODE Quality Workflows checklist below.

**The effort put into quality assurance for research code should be proportionate to the analysis's complexity and risk. While not every script needs production-level rigor, reproducibility is the minimum standard**

When developing and publishing your workflow, consider these best practices:

- [Structure Your Project Logically](./workflow-best-practices.md#structure-your-project-logically) — Organize files consistently.
- [Use Version Control Effectively](./workflow-best-practices.md#use-version-control-effectively) — Track changes using Git.
- [Explicitly Define the Environment](./workflow-best-practices.md#explicitly-define-the-environment) — List dependencies and versions.
- [Tell a Story (in Notebooks)](./workflow-best-practices.md#tell-a-story-in-notebooks) — Explain context/methods/results in Markdown.
- [Modularize and Refactor Code](./workflow-best-practices.md#modularize-and-refactor-code) — Avoid duplication; use functions/modules.
- [Adopt a Consistent Coding Style](./workflow-best-practices.md#adopt-a-consistent-coding-style) — Follow style guides (e.g., PEP 8).
- [Build a Reproducible Analytical Pipeline](./workflow-best-practices.md#build-a-reproducible-analytical-pipeline) — Design for automation; configure externally.
- [Implement Basic Testing](./workflow-best-practices.md#implement-basic-testing) — Include basic code checks.
- [Ensure Executability](./workflow-best-practices.md#ensure-executability) — Package code and environment for reuse.
- [Link Code Version to Results](./workflow-best-practices.md#link-code-version-to-results) — Link code versions to results via Experiments.

--- 
<ClientOnly>
  <Checklist
    title="Workflow Quality Assurance Checklist"
    :items="[
      'Use a clear, standard directory structure e.g., code, environment, docs.',
      'Include a README.md explaining the project, setup, and usage.',
      'Use Git for version control from the start.',
      'Use .gitignore to exclude data, secrets, environment files e.g. .env, and outputs.',
      'Explicitly list all software dependencies in an environment file e.g., environment.yml, requirements.txt, Dockerfile.',
      'Pin key dependency versions in the environment file.',
      'Follow a standard code style guide e.g., PEP 8 for Python.',
      'Refactor repetitive code into functions or classes.',
      'Consider moving complex/reusable code into separate modules e.g., .py files.',
      'Use comments to explain the why, not the what of complex code.',
      'Add docstrings to functions and classes.',
      'Separate configuration parameters, paths, endpoints from code, preferably using environment variables.',
      'Ensure the workflow runs non-interactively from start to finish.',
      'For notebooks, regularly test with Restart Kernel and Run All Cells.',
      'Include basic checks e.g., assert statements to validate data or results.',
      'Document input data requirements clearly in the README.md.',
      'Access data from discoverable sources e.g., cloud storage, OSC Products rather than committing data.',
      'Package the workflow for execution e.g., container image, OGC Application Package.'
    ]"
    storage-key="earthcode-quality-workflow"
  />
</ClientOnly>


## How Research Code Differs

Research code often differs significantly from traditional software development. It's frequently written by domain experts, like scientists or analysts, whose main goal is to answer a specific research question, generate insights from data, or test a hypothesis. This contrasts with building a long-lasting production service.

A key characteristic is its **exploratory nature**; much research code starts this way, evolving rapidly as understanding grows, which can initially lead to less structured code compared to production software. The primary focus is often on obtaining scientifically correct results and insights, sometimes taking precedence over optimal software engineering practices like extensive testing or user interface design. While some research code might be developed for a single analysis or publication, increasingly, workflows are designed for reuse and adaptation. Crucially, unlike many commercial applications, the ability for others (and the original author) to exactly **reproduce the results** from the code and data is a fundamental requirement for scientific validity. Understanding these differences helps in applying quality assurance practices appropriately.


## Why Focus on Quality Research Code

Although research code has unique characteristics, focusing on its quality is vital. High-quality, well-documented code is essential for others, including your future self, to trust your results. It forms the foundation for **reproducibility** – the ability to run the same analysis with the same data and get the same outcome, which is the cornerstone of scientific validation.

Clean, understandable code makes it easier for peers and collaborators to review your methods, verify your implementation, and identify potential errors or improvements. Well-structured and documented code is also easier to adapt for new datasets or research questions. Investing time in quality upfront prevents "technical debt" and saves significant effort later by avoiding the need to rewrite or debug poorly written code, enabling efficient building upon previous work.

Sharing high-quality code alongside data supports **transparency and open science**, allowing the broader community to understand, scrutinize, and benefit from your work. It also aligns with funding agency requirements for quality and auditability. Applying proportionate quality assurance practices, even to exploratory code, ultimately increases the reliability, impact, and longevity of your research.


<!-- 
Key pieces of insipiration:
https://arxiv.org/pdf/1810.08055
https://github.com/jupyter-guide/ten-rules-jupyter/tree/master/example1
https://github.com/jupyter-guide/jupyter-guide
https://best-practice-and-impact.github.io/qa-of-code-guidance/managers_guide.html 
https://goodresearch.dev/ 
-->

