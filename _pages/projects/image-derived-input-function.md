---
layout: splash
title: Estimation of Image-Derived Input Function in Hybrid MRI and Dynamic Brain PET Imaging
permalink: /projects/image-derived-input-function/
author_profile: false
---

# Estimation of Image-Derived Input Function in Hybrid MRI and Dynamic Brain PET Imaging
    
PET provides valuable insight in to the physiological and biochemical processes in the body. 
Static PET involves acquiring a single scan after the radiotracer injection. 
This single snapshot offers a powerful yet simplified view of tracer distribution.
Dynamic PET imaging provides a more comprehensive view of radiotracer kinetics by acquiring a series of images over a period.
Instead of a single snapshot, dynamic imaging produces time-activity curves (TAC) that illustrate how tracer concentration in each tissue changes throughout the scanning period.

To perform absolute quantification, kinetic modelling is employed.
This modelling requires knowing the accurate tracer concentration in the blood throughout the scan which is called the Input Function.
This is usually taken by continuously taking arterial blood samples using a catheter, a procedure which is invasive, labor-intensive, and requires trained personnel to manage both the subject and the measurement devices

Goal: Replace the invasive Arterial Input Function (AIF) with a robust Image-Derived Input Function in brain PET-MR Imaging


<html>
<body>
  <center>
    <img src="/files/bidif/2tcm.png" alt="2TCM Diagram" style="max-width:700px; width:100%; height:auto;">
    <br>
    <i> Schematic of the two-tissue compartment model (2TCM) showing the blood and tissue compartments </i> 
  </center>
</body>
</html>

## Why IDIF is hard in the brain

In PET images the internal carotid arteries (ICAs) are small, roughly the size of the scanner’s effective resolution.
That triggers partial volume effects: activity spills out of the vessel and tissue activity spills in.
If you simply read the time-activity curve from a vessel ROI in PET, you underestimate peaks and contaminate the tail.
Any kinetic modeling you do after that inherits the bias.


<html>
<body>
    <center>
                <img src='/files/bidif/pve.jpg'  style="max-width:1000px; width:100%; height:auto;">
            <br>
            <i> Partial Volume Effect shown on a uniform hot disk:
                left, the ground-truth disk; 
                middle: the result of PET point spread function blurring and noise;
                right: intensity profile along the horizontal dashed-line compared to the ground truth (gray line), showing the spill-in and spill-out effects
            </i>
    </center>
        <br>
</body>
</html>



## My approach 
There are two steps in the our IDIF implementation: 

### 1) Automatic carotid segmentation on TOF-MRA

I implemented a simple yet robust segmentation algorithm based on high intensity thresholding in TOF-MRA images to obtain an accurate mask of the arteries without any user input.
This mask is then applied to the PET image to extract the time activity curves of the carotid A.K.A. the input function.

<html>
<body>
  <center>
    <img src="/files/bidif/carotid_3d.jpg" alt="3D carotid mask" style="max-width:360px; width:100%; height:auto;">
  </center>
</body>
</html>


### 2) Bayesian inference for Partial Volume Correction

<!-- refine the explanation a bit. make the sentences a bit more natural and sound more coherent-->

The kinetics of the input function together with the surrounding tissue and the inherit noise of PET while accounting for partial volume effect were modelled.
Bayesian inference using Monte-Carlo Markov Chain (MCMC) was employed to correctly estimate the input function and correct for noise and partial volume effect.
My method build upon a classic Partial Volume Correction method called Geometric Transfer Matrix (GTM) hence it's called the Bayesian GTM or BGTM.


## Results

The evaluations were done in two levels:

1) **Curve errors.** Mean absolute error between cumulative area under the curve of the estimated IDIF and the AIF (cAUC MAE).  
2) **Absolute quantification.** Regional brain absolute quantification


<html>
<body>
  <center>
    <img src="/files/bidif/BADKA07504_1_infunc.png" alt="IDIF curve comparison"  style="max-width:900px; width:100%; height:auto;">
    <br>
    <b>IDIF Comparison of an example subject</b>
    <br>
    <br>
    <br>
    <br>
  </center>
</body>
</html>

<div style="display:flex; gap:24px; align-items:flex-start; justify-content:center; flex-wrap:wrap;">
    <br>
    <br>
  <div style="max-width:420px; width:100%; text-align:center;">
    <img src="/files/bidif/curve_mae_boxplot.png" alt="cAUC MAE boxplot" style="width:100%; height:auto;">
    <br><b>Cumulative Area Under the Curve(cAUC) Absolute Error</b>
  </div>
  <div style="max-width:420px; width:100%; text-align:center;">
    <img src="/files/bidif/quantification_patlak_mape_boxplot.png" alt="MRglu MAPE boxplot" style="width:100%; height:auto;">
    <br>
    <b>Absolute Quantification Percentage Error</b>
  </div>
    <br>
    <br>
    <br>
</div>

<center>
<table style="border-collapse: collapse; width: 380px; font-size: 15px;">
      <thead>
        <tr>
          <th style="border-bottom: 2px solid #ccc; padding: 6px; text-align:left;">Metric</th>
          <th style="border-bottom: 2px solid #ccc; padding: 6px; text-align:center;">BGTM</th>
          <th style="border-bottom: 2px solid #ccc; padding: 6px; text-align:center;">GTM</th>
          <th style="border-bottom: 2px solid #ccc; padding: 6px; text-align:center;">PBIF</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td style="border-bottom: 1px solid #eee; padding: 6px;">IF cAUC MAE</td>
          <td style="border-bottom: 1px solid #eee; text-align:center; padding: 6px;">13,024</td>
          <td style="border-bottom: 1px solid #eee; text-align:center; padding: 6px;">15,709</td>
          <td style="border-bottom: 1px solid #eee; text-align:center; padding: 6px;">14,630</td>
        </tr>
        <tr>
          <td style="padding: 6px;">MRglu MAPE (%)</td>
          <td style="text-align:center; padding: 6px;">13%</td>
          <td style="text-align:center; padding: 6px;">24%</td>
          <td style="text-align:center; padding: 6px;">17%</td>
        </tr>
      </tbody>
</table>
</center>

## Simulation

Simulated PET data offers a controlled environment with a known ground truth, free from unpredictable real-world influences.
Real PET and MRI scans with arterial sampling serve as the basis for generating realistic phantoms and tissue activity, which are then used as input to the simulator.
This results in realistic PET scans that can be used to further validate the method.

<html>
<body>
    <center>
        <img src='/files/bidif/simulation_pipeline.png'>
        <br>
        <br>
        <br>
        <br>
        <img src='/files/bidif/sim_compare2.jpg'>
    </center>
</body>
</html>
