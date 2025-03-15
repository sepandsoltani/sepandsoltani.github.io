---
layout: splash
title: HyperShadow
permalink: /projects/hypershadow/
author_profile: false
---

# Rendering the Shadow of a 4D Hypercube on a Hyperplane
---


<html>
<style>
    html,
    body {
        width: 100%;
    }
    img.two {
        height: 80%;
        width: 80%;
    }
    * {
        box-sizing: border-box;
    }
    .column {
        float: left;
        width: 50%;
        padding: 5px;
    }
    .row::after {
        content: "";
        clear: both;
        display: table;
    }
</style>
</html>




Four-dimensional space (4D), is a mathematical and conceptual extension of our familiar three-dimensional (3D) space. In 4D, an additional dimension is added to the three spatial dimensions (length, width, and height) we encounter in our everyday lives. 


However, humans are inherently three-dimensional beings, and our perception and visualization capabilities are limited to three spatial dimensions. As a result, we can't directly perceive or visualize 4D space. Instead, we rely on projecting 4D objects and phenomena onto our familiar 3D space. These projections are, in simpler terms, the shadow of the original object. Similiar to how the shadow of a 3D object is one dimension lower (2D), we can have shadows of 4D objects as 3D representations.


Here we render the shadow of a tesseract, a 4D hypercube. The rendering has been done using VTK in C++ and the GUI has been implemented using the Qt Framework.

<center>
<video controls autoplay="autoplay" loop="true" controls muted>
  <source src="/files/hypershadow.mp4" type="video/mp4">
</video>
</center>
