---
title: Installation
description: This is a page about the intallation of MTSA Framework
---

To install MTSA, clone the repository and install the necessary dependencies:

```bash
git clone https://github.com/your-username/MTSA.git
cd MTSA
pip install -r requirements.txt
```

## Usage

MTSA can be used to run anomaly detection models on acoustic data from industrial machines. Find an example [here](examples/MTSA.ipynb).

if you have problems with google colab please try running it:

```bash
pip install --upgrade google-colab
```

## Implemented Approaches

MTSA includes the following anomaly detection approaches:

- **Hitachi**: A robust approach tailored for industrial anomaly detection.
- **RANSynCoders**: A state-of-the-art model enhanced with MFCC for better performance on acoustic data.
- **GANF**: A generative adversarial network approach, also enhanced with MFCC.
- **Isolation Forest**: An approach using ITrees to isolate anomalies, also enhanced with MFCC.