---
order: 2
---

# FAIR ML Model Packaging

Machine-learning models published through EarthCODE should be treated as reusable workflow artefacts. The model files, source code, runtime environment, metadata, and example inference path should be clear enough that another user can inspect the model and run it in a compatible Python environment.

:::tip Minimum expectation
At publication time, a model package should include a model card, a pinned runtime environment, at least one reproducible inference artefact, and validation notes showing that the artefact matches the model described in the documentation.
:::

## Recommended Package Layout

Use this layout for model files stored in a Git repository, release bundle, or PRR storage referenced in the Open Science Catalog.

| File | Status | Purpose |
|---|---:|---|
| `README.md` | Required | Human-readable model card describing what the model predicts, expected inputs, outputs, provenance, caveats, and reuse conditions. |
| `requirements.txt`, `environment.yml`, or `Dockerfile` | Required | Pinned runtime definition for loading the model and running inference. Use a container when system libraries or non-Python dependencies matter. |
| `model.safetensors` | Recommended | PyTorch state dictionary in a non-pickle format. Useful for users who want to reconstruct the architecture in Python. |
| `model.onnx` | Recommended | Portable inference graph for users who want to run inference with ONNX Runtime and avoid custom model-loading code. |
| `inference.py` | Recommended | Small script or module that performs preprocessing, model loading, inference, and postprocessing. |
| `example_inference.ipynb` | Optional | Runnable demonstration for users who learn best from a notebook or need an end-to-end example. |
| `config.json` | Optional | Machine-readable model configuration, but only if downstream tooling or inference code actually reads it. |
| `labels.json` | Optional | Class labels or output names, useful when labels are not already encoded in the README or model metadata. |

If your model is not PyTorch-based, use the equivalent open, documented, and validated artefact for that framework. Avoid publishing only opaque checkpoint files such as `.pt`, `.pkl`, or framework-specific archives unless the loading code and environment are also provided.

## Write a Model Card

The `README.md` should be short, but complete enough that the model is usable without opening the training code. Treat it as the model card for the package.

Include:

- model name, version, authors, project, and contact information;
- what the model predicts and the scientific use case it supports;
- intended use, out-of-scope use, and known limitations;
- expected input shape, for example `N,4,128,128`;
- expected channel order, units, normalization, nodata handling, and spatial or temporal assumptions;
- output meaning, for example logits over six cloud morphology classes;
- class names or output variables in order;
- training data sources, validation data sources, and relevant EarthCODE Products or Experiments;
- source repository, release tag, commit hash, and license;
- exact inference command or notebook entry point;
- data caveats, domain limits, uncertainty notes, or bias risks that may affect reuse.

Do not bury required preprocessing steps in prose if users need exact operations. Put exact preprocessing in `inference.py`, a reusable function, or a small inference notebook.

## Define the Runtime

Pin the dependencies used to export and validate the model. A minimal `requirements.txt` for a validated Python model package might look like this:

```text
torch==2.11.0
torchvision==0.26.0
timm==1.0.27
safetensors==0.7.0
onnxruntime==1.24.2
numpy==2.2.6
```

Replace these example versions with the versions you actually used and tested. If the model can be used through ONNX only, users may not need `torch`, `torchvision`, `timm`, or `safetensors` for inference. Still include the full environment used to create and validate the package, unless you intentionally maintain separate export and inference environments.

For models intended to run across EarthCODE platforms, a `Dockerfile` or OGC Application Package can make the runtime more reproducible than a Python requirements file alone. Use the same principle as for any workflow: the published artefact should run from a clean environment without manual setup steps.

## Publish Safe Weights

Use `model.safetensors` when you want to support PyTorch users while avoiding pickle-based checkpoint loading. The file should contain the model state dictionary and lightweight metadata.

Recommended metadata includes:

- model identifier and version;
- architecture name;
- input shape;
- channel names and units;
- output names or class names;
- license and source repository;
- training or validation data references, where practical.

Example:

```python
from safetensors.torch import save_file

metadata = {
    "model_id": "earthcode-goes-cloud-regime-classifier",
    "version": "v0.1.0",
    "architecture": "timm.resnet50d",
    "input_shape": "N,4,128,128",
    "channel_names": "BT15_minus_BT14,BT14_minus_BT11,BT14,COD",
    "class_names": "Solid stratus,Closed MCC,Open MCC,Disorganized MCC,Clustered Cu,Suppressed Cu",
    "license": "Apache-2.0",
}

save_file(weights, "model.safetensors", metadata=metadata)
```

Keep metadata values compact and machine-readable. If the metadata becomes long or nested, store it in the model card or in a configuration file that the inference code reads.

## Provide a Portable Inference Artefact

Use `model.onnx` when you want a common inference artefact that does not require users to reconstruct the PyTorch model class.

The ONNX model should:

- use stable input and output names, for example `input` and `logits`;
- support a dynamic batch dimension when batch size should vary;
- define the expected tensor dtype;
- be exported from the same model version described in the README;
- be validated against the framework-native model.

Example export shape:

```python
dummy_input = torch.zeros((1, 4, 128, 128), dtype=torch.float32)

torch.onnx.export(
    model,
    dummy_input,
    "model.onnx",
    input_names=["input"],
    output_names=["logits"],
    dynamic_axes={"input": {0: "batch"}, "logits": {0: "batch"}},
    opset_version=17,
    dynamo=False,
)
```

If the model uses operations that are not supported by ONNX Runtime, document that clearly and provide the most portable alternative available for the framework.

## Validate Before Publishing

Before publishing a model package, check that:

- the runtime can be recreated from the published environment file or container;
- `model.safetensors` loads into the expected architecture;
- `model.onnx` runs with ONNX Runtime, if provided;
- framework-native and ONNX outputs are close for the same test input;
- the inference example runs from start to finish in a clean environment;
- README input channels, preprocessing, output names, and class order match the actual model;
- no credentials, private paths, or unpublished data are required to run inference;
- the package has a clear license and citation guidance.

A minimal output check is:

```python
import numpy as np

np.testing.assert_allclose(pytorch_logits, onnx_logits, rtol=1e-4, atol=1e-4)
```

For classification models, also test that label ordering is consistent between the README, metadata, and inference code. For regression or segmentation models, check output shape, units, nodata handling, and geospatial alignment.


## Publishing to EarthCODE

How you publish a model in EarthCODE depends on what you want others to discover, reuse, or reproduce.

- If the trained model is the research output, publish the packaged model as an EarthCODE Product. The Product should point to the model artefacts, model card, version, license, and validation evidence.
- If you are publishing the full process that produced or uses the model, describe it as a provenance chain:
  - Workflow: the versioned training or inference code, runtime environment, and execution instructions.
  - Products: the input training data, exported model package, and any generated modelled data.
  - Experiment: the specific run that links the Workflow, configuration, input Products, and output Products.

This makes it clear whether users are reusing a trained model directly, rerunning the modelling workflow, or tracing a published dataset back to the code, data, and model version that produced it.