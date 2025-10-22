---
order: 1
---

# Best Practices Guidelines

Before writing any code, taking a few moments to structure your project thoughtfully can significantly improve its clarity, maintainability, and reproducibility. This section covers the foundational steps for organizing your workflow repository, managing dependencies, and using version control effectively from the start. These practices make it easier for collaborators (and your future self) to understand, run, and build upon your work.

## Structure Your Project Logically

A well-organized project directory makes your workflow easier for others (and yourself) to navigate and understand. Adopting a consistent, standard structure is highly recommended.

Consider using separate directories for distinct components of your project:

* `code/` or `src/`: For primary source code files, including scripts (`.py`) and notebooks (`.ipynb`).
* `data/`: For input data files. Note that large data files should generally not be committed to version control (see next section). This directory might contain small sample datasets or scripts to download larger inputs.
* `docs/`: For detailed documentation, figures, or reports.
* `environment/`: For files defining the software environment (e.g., `environment.yml`, `Dockerfile`).

At the root level of your project, always include a `README.md` file. This file serves as the entry point and should clearly explain:

* The purpose of the project and workflow.
* The contents of the repository and the directory structure.
* Instructions on how to set up the environment and run the workflow.
* Information about required input data and how to obtain it.

## Use Version Control Effectively

Using a version control system like Git is essential for managing your workflow's development, ensuring reproducibility, and enabling collaboration. EarthCODE requires all published workflows to be stored in a Git repository, typically hosted on a platform like GitHub. It's best practice to start using version control from the very beginning of your project.

At the start of every project, initialize the repository in github.com, and connect with your project

```bash
echo "# my project" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin {Your Repository.git}
git push -u origin main
```

Version control provides several key benefits:
* It acts as a complete history log, allowing you to track every change and revert to previous versions if needed.
* It facilitates collaboration by allowing multiple people to work on the same codebase simultaneously using branches and merging.
* It serves as a reliable backup mechanism for your code and project history.
* Crucially, it allows you to link specific versions of your code (via commits or tags) to the results generated, which is fundamental for reproducibility.

When setting up your repository, carefully consider what should and should not be tracked, following common recommendations:

* Track These:
    * Source code files (.ipynb, .py).
    * Configuration files.
    * Environment definition files (environment.yml, requirements.txt, Dockerfile).
    * Documentation files (README.md, other .md or text files).

* Do Not Track These:
    * Large data files. Data should be stored separately and accessed via links or download scripts.
    * Credentials, API keys, or any sensitive information (secrets).
    * Generated outputs like plots, figures, or intermediate/final data files.

Use a `.gitignore` file to explicitly tell Git which files and directories to ignore. To use version control effectively:
- Make frequent, small commits. Each commit should represent a single logical change.
- Write clear and meaningful commit messages that explain why a change was made, not just what was changed.
- Use branches to develop new features, fix bugs, or experiment without affecting the main working version of your code.


## Explicitly Define the Environment

For your workflow to be reproducible by others, you must clearly define its software environment. This ensures anyone running your code uses the exact same versions of the necessary libraries.

The recommended method for many scientific Python workflows is to use Conda and define the environment in an `environment.yml` file. This file lists all required packages and the channels to get them from.

To ensure reproducibility, it's crucial to specify exact versions for your key dependencies (e.g., `python=3.10`, `xarray=2023.10.1`). Software libraries change over time, and only by pinning versions can you guarantee your code will run the same way in the future.

You can generate an `environment.yml` file that captures the packages you explicitly installed in your current active Conda environment using the following command in your terminal:

```bash
conda env export --from-history > environment.yml
```
This command looks at the history of packages you manually installed (rather than every single dependency) and creates the environment.yml file with specific versions for those primary packages. This approach often provides a good balance between reproducibility and flexibility. Using conda env export without the --from-history flag will pin every package, including all transitive dependencies, which guarantees identical environments but can sometimes make the environment harder to recreate on different operating systems or over long periods.

While Conda is common, you can also use a requirements.txt file with pip (often generated using pip freeze > requirements.txt) or define a complete environment using a Dockerfile. Whichever method you choose, the file defining the environment must be included in your Git repository.

---

# Writing Clear and Robust Code

Writing clear and robust code is fundamental to achieving **reproducibility**, which is the first pillar of trustworthy scientific analysis. If others (or your future self) cannot re-run the same code with the same data and obtain the same results, the analysis has limited value. This section covers best practices that ensure your code is not only functional but also transparent, maintainable, and reliable enough to guarantee reproducibility.

By focusing on clarity, modularity, and consistency during the coding phase, you make it easier for colleagues to verify your implementation, build upon your methods, and trust your findings. Reproducibility relies on making both the methodology and its implementation understandable and executable.


## Tell a Story (in Notebooks)

Your workflow, especially when developed in a notebook environment like Jupyter, should be more than just a sequence of code cells; it should be a computational narrative. Use Markdown cells extensively to explain the scientific story you are investigating.

Start by clearly stating the goal of the analysis, the data being used, and the context of the research in introductory Markdown cells. A good introduction sets the stage for the entire analysis. Consider including metadata like title, authors, date, and keywords, along with a clear description of the context, methodology, and data sources. The example below (taken from the [EarthCODE Pangeo guide](https://esa-earthcode.github.io/tutorials/pangeo-on-earthcode/#context)) demonstrates this

```markdown 
---
title: Pangeo X EarthCODE - Burn Severity Mapping
subtitle: Example showing how to access EarthCODE OSC data and Sentinel-2 to map wildfire burn severity using Pangeo tools on EDC.
authors:
  - name: Deyan Samardzhiev
    orcid: 0009-0003-3803-8522
    affiliations: Lampata UK
date: 2025-06-01
keywords: ["earthcode", "pangeo", "stac", "xarray", "wildfire", "burn severity", "sentinel-2", "nbr"]
---

## Context

This notebook demonstrates how to use the Pangeo open-source software stack within the Euro Data Cube (EDC) platform to analyze wildfire impacts. We will fetch data published on the EarthCODE Open Science Catalog and combine it with publicly available Sentinel-2 imagery to generate burn severity maps.

### Methodology Approach

1.  Analyze the SeasFire Data Cube to identify potential burnt areas and select a specific event.
2.  Access Sentinel-2 L2A cloud-optimized data for the selected area and time period using a STAC API.
3.  Compute the Normalized Burn Ratio (NBR) index before and after the fire event.
4.  Calculate the difference NBR (dNBR) to highlight burned areas and classify burn severity.

### Highlights

* Utilizes data directly from the EarthCODE Open Science Catalog (OSC).
* Applies the NBR index, which leverages near-infrared (NIR) and shortwave-infrared (SWIR) wavelengths sensitive to burn scars.
* Demonstrates accessing cloud-optimized Sentinel-2 data via STAC.

## Data

* **Sentinel-2 L2A COGs:** Accessed via the [Element 84 Earth Search STAC API](https://element84.com/earth-search/). Cloud-optimized GeoTIFFs available on AWS S3.
* **SeasFire Data Cube:** A global dataset for seasonal fire modeling, accessed via its [EarthCODE OSC Product Page](https://opensciencedata.esa.int/products/seasfire-cube/collection).

#### Related Publications & Resources

* *SeasFire Cube dataset description:* [https://doi.org/10.5281/zenodo.7246111](https://doi.org/10.5281/zenodo.7246111)
* *Sentinel-2 Cloud-Optimized GeoTIFFs:* [https://registry.opendata.aws/sentinel-2-l2a-cogs/](https://registry.opendata.aws/sentinel-2-l2a-cogs/)
* *Example NBR calculation notebook:* [Link to relevant notebook or paper]

```

For each significant code cell or block of cells, add Markdown explanations before the code. Don't just describe what the code does (e.g., "load the data"); explain why this step is necessary and how it fits into the overall analysis (e.g., "Load the Sentinel-2 L2A data for the region of interest to calculate vegetation indices"). Describe the reasoning behind parameter choices or specific methods used. Consider who your audience is – including your future self – and adjust the level of detail accordingly. For instance:

```markdown
## Load and Preprocess Data

First, we load the SST dataset using xarray. We select the North Atlantic region (defined by latitude and longitude bounds) and the time period (1990-2020). We then calculate the monthly anomalies by subtracting the climatological mean for each month to remove the seasonal cycle, which helps in isolating the long-term trend.

# Code cell to load data, select region/time, calculate anomalies
```

```python
sst_data = xr.open_dataset(...)
regional_data = sst_data.sel(...)
anomalies = regional_data.groupby('time.month') - regional_data.groupby('time.month').mean(dim='time')

```

It's equally important to interpret intermediate and final results within Markdown cells. Explain what a plot shows or what a calculated value means in the context of your scientific question.

```markdown
## Visualize the Trend

The map below shows the calculated linear trend in SST anomalies (C per decade) for each grid cell. Positive values (reds) indicate warming trends, while negative values (blues) indicate cooling. We observe significant warming across most of the North Atlantic basin.

```

```python
# Code cell to calculate trend and create a map plot
trend = anomalies.polyfit(dim='time', deg=1)
trend_map = trend.polyfit_coefficients.sel(degree=1) * 10 * 12 # Convert to degC/decade
trend_map.plot()
```

Think of the notebook as a story with a beginning (introduction, setup), a middle (data processing, analysis steps), and an end (results, interpretation, conclusion). Make a habit of adding this narrative text as you develop the analysis, rather than waiting until the end. If you don't have time for full explanations during interactive exploration, leave short notes for yourself to expand on later. This ongoing documentation ensures that the reasoning behind the code is captured, making the entire workflow transparent and truly understandable.

<!-- 
```
Context
We will be using the Pangeo open-source software stack to demonstrate how to fetch EarthCODE published data and publically available Sentinel-2 data to generate burn severity maps for the assessment of the areas affected by wildfires.
In this workshop, we will be using the SeasFire Data Cube published to the EarthCODE Open Science Catalog.
Methodology approach
Analyse and find burnt areas using SeasFire Data Cube
Access Sentinel-2 L2A cloud optimised dataset through STAC
Compute the Normalised Burn Ratio (NBR) index to highlight burned areas
Classify burn severity
Highlights
Using OSC data
The NBR index uses near-infrared (NIR) and shortwave-infrared (SWIR) wavelengths.
Data
We will use Sentinel-2 data accessed via element84’s STAC API endpoint and the SeasFire Data Cube to find burned areas, inspect them in more detail and generate burn severity maps for the assessment of the areas affected by wildfires.
Related publications

https://www.sciencedirect.com/science/article/pii/S1470160X22004708#f0035
https://github.com/yobimania/dea-notebooks/blob/e0ca59f437395f7c9becca74badcf8c49da6ee90/Fire Analysis Compiled Scripts (Gadi)/dNBR_full.py
Alonso, Lazaro, Gans, Fabian, Karasante, Ilektra, Ahuja, Akanksha, Prapas, Ioannis, Kondylatos, Spyros, Papoutsis, Ioannis, Panagiotou, Eleannna, Michail, Dimitrios, Cremer, Felix, Weber, Ulrich, & Carvalhais, Nuno. (2022). SeasFire Cube: A Global Dataset for Seasonal Fire Modeling in the Earth System (0.4) [Data set]. Zenodo. Alonso et al. (2024). The same dataset can also be downloaded from Zenodo: https://zenodo.org/records/13834057
https://registry.opendata.aws/sentinel-2-l2a-cogs/


taken from https://esa-earthcode.github.io/tutorials/pangeo-on-earthcode/




``` -->

## Modularize and Refactor Code

Avoid duplicating code within your notebooks. It's common during interactive analysis to copy a cell, tweak a few lines, and run it again. While quick, this makes your workflow hard to read, debug, and maintain. If you find yourself copying and pasting code, take the time to refactor it.

### Turn Repeated Code into Functions

If you use the same or very similar block of code multiple times, encapsulate it in a function. Define the function in one cell and then call it wherever needed. This makes your notebook shorter, easier to understand, and much simpler to update if you need to fix a bug or change the logic.

For example, instead of repeating plotting code:

```python
# Cell 1: Plot temperature
plt.figure(figsize=(10, 5))
temperature_data.plot()
plt.title('Temperature Over Time')
plt.xlabel('Date')
plt.ylabel('Temperature (C)')
plt.grid(True)
plt.show()

# Cell 5: Plot precipitation (similar plotting code)
plt.figure(figsize=(10, 5))
precipitation_data.plot()
plt.title('Precipitation Over Time')
plt.xlabel('Date')
plt.ylabel('Precipitation (mm)')
plt.grid(True)
plt.show()
```

Define a function:

```python
# Define plotting function in one cell
import matplotlib.pyplot as plt

def plot_timeseries(data, title, ylabel):
    """Helper function to plot time series data."""
    plt.figure(figsize=(10, 5))
    data.plot()
    plt.title(title)
    plt.xlabel('Date')
    plt.ylabel(ylabel)
    plt.grid(True)
    plt.show()

```

Then call it:

```python
# Cell 1: Call function for temperature
plot_timeseries(temperature_data, 'Temperature Over Time', 'Temperature (C)')

# Cell 5: Call function for precipitation
plot_timeseries(precipitation_data, 'Precipitation Over Time', 'Precipitation (mm)')

```

If a function becomes complex or if you plan to reuse it across multiple notebooks or projects, consider moving it into a separate Python script (a .py file) within your code/ or src/ directory. You can then import this function into your notebook just like any other library. This keeps your notebooks focused on the analysis flow and makes your core logic easier to test and reuse.

For example, create a file my_utils.py:

```python
# my_utils.py
import xarray as xr

def calculate_anomaly(data):
    """Calculates monthly anomalies."""
    climatology = data.groupby('time.month').mean(dim='time')
    anomalies = data.groupby('time.month') - climatology
    return anomalies
```

Then, in your notebook:

```python
# Notebook cell
from my_utils import calculate_anomaly

# Load data
sst_data = xr.open_dataset(...)

# Use the imported function
anomalies = calculate_anomaly(sst_data['sst'])
anomalies.plot()
```

Refactoring code into functions and modules not only improves readability and maintainability but also makes it easier to add interactivity, for example, by connecting widgets to functions to explore different parameters. Continuously look for opportunities to refactor and simplify your code as you develop the workflow.

## Adopt a Consistent Coding Style

Writing code that follows a consistent style makes it much easier for others (and your future self) to read, understand, and debug. Clean, predictable code is less prone to errors and simpler to maintain and reuse.

For Python code, the universally accepted standard is **PEP 8**. Adhering to PEP 8 guidelines for things like indentation, line length, naming conventions, and whitespace makes your code look professional and consistent with the broader Python community.

Choose descriptive names for your variables, functions, and classes. Avoid short, cryptic names like `x`, `df2`, or `temp_calc`. Instead, use names that clearly indicate the purpose or content.

Compare:

```python
# Less clear
t = data.temperature
a = t.groupby('time.month').mean()
d = t.groupby('time.month') - a
```

To:

```python
# Clearer
temperature = data.temperature
monthly_climatology = temperature.groupby('time.month').mean()
temperature_anomaly = temperature.groupby('time.month') - monthly_climatology
```

Longer, descriptive names significantly improve readability.

Use comments (#) wisely to explain why you are doing something or to clarify complex logic, not to state the obvious. Good comments explain the intent behind the code.


```python
# Less useful comment
# Calculate the mean
mean_value = data.mean()

# More useful comment
# Calculate the overall mean temperature, excluding NaN values, to establish a baseline
mean_value = data.mean(skipna=True)
```

Also, use docstrings ("""Docstring goes here""") inside your functions to explain what they do, their parameters, and what they return.

Consider using tools like `flake8` (a linter) to automatically check your code for PEP 8 compliance and potential errors. Formatters like black can automatically reformat your code to enforce a consistent style. Integrating these tools into your development process helps maintain high code quality with minimal effort.

## Build a Reproducible Analytical Pipeline

A key goal for a reproducible workflow is designing it to run automatically from start to finish without needing manual steps. While notebooks are great for interactive work, the final version should be robust enough for non-interactive execution.

Avoid hardcoding parameters like cloud data access endpoints, dataset identifiers, date ranges, or model settings directly within your analysis code. Instead, make these configurable from outside the workflow. The recommended way to do this is through **environment variables**. Your code should read these variables at runtime, allowing the same workflow code to be executed with different settings simply by changing the environment it runs in.

Provide sensible default values in your code in case an environment variable is not set. In Python, you can use `os.environ.get()`:

```python
import os

STAC_API_ENDPOINT = os.environ.get("STAC_API_ENDPOINT", "[https://earth-search.aws.element84.com/v1](https://earth-search.aws.element84.com/v1)")
SENTINEL2_COLLECTION = os.environ.get("SENTINEL2_COLLECTION", "sentinel-2-l2a")
CLOUD_COVER_LIMIT = int(os.environ.get("CLOUD_COVER_LIMIT", 10))
OUTPUT_DIR = os.environ.get("OUTPUT_DIR", "results/")

print(f"Using STAC Endpoint: {STAC_API_ENDPOINT}")
# ... print other configuration values ...

# ... rest of the analysis code follows, using these variables
```

When publishing an EarthCODE Experiment, the specific values used for these environment variables during a run are captured in the Experiment's Configuration metadata. This links the generic Workflow code to the specific settings that produced a given Product.

Your entire analysis must run correctly when executed sequentially from the first cell to the last. Interactive development sometimes hides issues where cells rely on being run in a different order. Get into the habit of frequently testing if your notebook runs cleanly from scratch. In Jupyter, use the "Restart Kernel and Run All Cells" command regularly. If it completes without errors, your workflow is likely reproducible. Catching issues this way early saves a lot of debugging time later.

Once your notebook runs reliably, think about making it even more reusable with parameterization tools. Libraries like papermill let you execute a notebook like a script, passing in different configuration values each time without editing the notebook code itself. For instance, you could run the same analysis notebook for different regions or time periods by just changing the parameters when you run it from the command line. This turns your notebook into a flexible, automated pipeline component, ready for larger computational tasks or integration with testing frameworks.

## Implement Basic Testing

Adding checks to your code helps ensure it behaves as expected and increases confidence in your results ✔️. Even simple tests can catch errors early, saving significant debugging time later.

A straightforward way to add checks directly within your notebook is using `assert` statements. These statements test whether a condition is true; if it's false, the code will stop and raise an error, immediately alerting you to a problem. Use them to verify assumptions about your data or the results of calculations.

For example, after loading data, you might assert that it has the expected dimensions or that key variables exist:

```python
import xarray as xr

# Load data
dataset = xr.open_dataset("your_data.nc")

# Check if the 'temperature' variable exists
assert 'temperature' in dataset.variables, "Temperature variable not found in dataset!"

# Check if the time dimension has the expected length
assert len(dataset['time']) == 120, f"Expected 120 time steps, found {len(dataset['time'])}"

# Check if temperature values are within a plausible range (e.g., Kelvin)
assert dataset['temperature'].min() > 0, "Temperature values seem implausibly low (below 0K)"
assert dataset['temperature'].max() < 400, "Temperature values seem implausibly high (above 400K)"

# ... proceed with analysis ...
```

If you have modularized parts of your code into separate Python scripts (.py files), consider writing basic unit tests. Frameworks like pytest allow you to create specific tests for your functions, ensuring they produce correct outputs for given inputs. While extensive testing might not always be feasible, even a few simple tests for critical functions can significantly improve the reliability of your workflow.

Implementing these basic checks makes your workflow more robust and increases the trustworthiness of your published results.


## Ensure Executability

A core goal of these best practices is to ensure that others can reliably execute your workflow. Merely sharing code and an environment file is a good start, but packaging them together into a formal, self-contained unit provides the highest level of reproducibility and interoperability across different EarthCODE platforms. Ideally, if you start developing on an EarthCODE platform from the start, most of this packaging will be handled for you automatically via the integrated platform FAIR tooling.

This involves creating an artifact that bundles your version-controlled code, the explicitly defined software environment, and potentially small input files or configuration needed to run. Common and recommended packaging for EarthCODE is using:

1.  **Container Images (e.g., Docker):** This is a highly recommended approach. A `Dockerfile` defines how to build an image containing the operating system, all necessary libraries (often installed via the `environment.yml`), and your workflow code. This creates a portable, consistent environment that runs identically everywhere, eliminating "works on my machine" issues. Integrated platforms in EarthCODE often directly support running workflows packaged as container images.

2.  **OGC Application Packages:** This standard defines a way to package applications (including workflows) along with their metadata for execution by services compliant with OGC API - Processes. An Application Package typically includes the code, a description of its execution environment (which might reference a container image), and metadata describing inputs, outputs, and execution parameters. This is particularly relevant for workflows intended to be run as automated processing services within the EarthCODE ecosystem.

Creating these formal packages ensures that your workflow is not just theoretically reproducible but practically executable by others and by automated pipelines on EarthCODE integrated platforms.

<!-- Most importantly, **continuously verify** that your workflow remains executable within its defined package. Regularly rebuild your container image or test your Application Package deployment, and run the workflow from start to finish. This repeated testing confirms that your packaging is correct and helps catch any broken steps or missing dependencies early on, ensuring the final published workflow is truly runnable. -->
<!--  -->


## Link Code Version to Results

A crucial step for ensuring true reproducibility is explicitly connecting the specific version of your workflow code used to generate a particular data product. Simply publishing the code and the data separately isn't enough; you need to record exactly which code commit produced which result.

In EarthCODE, this vital link is captured within the **Experiment** metadata record. When you publish a data **Product**, its metadata should reference the **Workflow** that created it and the details of the code run are in the metadata of an **Experiment**. The Experiment record, in turn, contains precise references to:

* The specific **Workflow** version used (e.g., a Git commit hash or tag).
* The exact **Input Data** consumed.
* The **Configuration** parameters applied during that run.

This creates a complete, traceable chain from the final data product back to the exact code and conditions that generated it. By formally linking the code version to the results via an Experiment, you provide the necessary provenance for others to verify your findings and confidently reproduce your work.













<!-- 
# Workflow Best Practices
## Plan for Reproducibility from day 1

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
     - Regularly revisiting these practices during the project lifecycle will reduce last-minute issues and make your results easier to share and build upon. -->




