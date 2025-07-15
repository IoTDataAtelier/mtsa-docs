---
title: Features
description: This is a page about the features of MTSA Framework
---

## 🧠 Implemented Machine Learning Approaches

MTSA currently integrates the following anomaly detection models:

- **Hitachi**  
  A robust baseline model specifically designed for industrial anomaly detection tasks.

- **RANSynCoders**  
  A state-of-the-art model enhanced with Mel-Frequency Cepstral Coefficients (MFCC) for improved acoustic feature representation.

- **GANF**  
  A model that combines graph structures, recurrent neural networks (RNNs), and normalizing flows to perform anomaly inference, incorporating MFCCs to enhance performance on acoustic signals.

- **Isolation Forest**  
  A tree-based ensemble method that isolates anomalies, adapted here with MFCC features.

- **OSVM (One-Class SVM)**  
  A kernel-based approach for novelty detection, also enhanced with MFCC features.


## 📊 Signal Processing Features

MTSA includes a set of handcrafted statistical and signal-based features designed to enhance anomaly detection in acoustic signals:

### 🎼 MFCC-Based Features
- **M (Magnitude Mean)** – Mean value of MFCC magnitudes over time.
- **S (Magnitude Std)** – Standard deviation of MFCC magnitudes.
- **C (Correlation)** – Correlation between MFCC coefficients, capturing inter-frequency relationships.

### 📈 Statistical Signal Descriptors
- **Root Mean Square** – Measures the signal's overall energy.
- **Square Root of Amplitude** – Related to the average amplitude level.
- **Kurtosis** – Captures the "tailedness" of the signal distribution.
- **Skewness** – Measures asymmetry in the signal distribution.
- **Peak-to-Peak** – Difference between the signal's max and min values.
- **Crest Factor** – Ratio of peak amplitude to RMS value.
- **Impulse Value** – Ratio of peak amplitude to mean absolute value.
- **Margin Factor** – Ratio of peak amplitude to root amplitude.
- **Shape Factor** – Ratio of RMS to mean absolute value.
- **Kurtosis Factor** – Modified kurtosis for enhanced anomaly sensitivity.
- **Frequency Center** – Weighted average frequency indicating dominant energy region.
- **RMS Frequency** – Root mean square of the frequency components.
- **Frequency Variance** – Variability in the signal’s spectral distribution.

