---
layout: splash
title: MedVisPy
permalink: /projects/medvispy/
author_profile: false
---

# MedVisPy: A Python-based Medical Image Analysis Software
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



## Introduction
MedVisPy is a versatile and user-friendly medical image analysis software developed as my bachelor thesis project. The software is built from scratch using Python and uses libraries such as VTK for various rendering and image manipulations and PyQt5 for the GUI. Its primary objective is to help other students from our lab at KNTU (MVMIP lab) to integrate their projects as modules in to the program.

<html>
<body>
    <center>
        <img src='/files/medvispy/main.png'>
    </center>
</body>
</html>

## Interactive Tools
MedVisPy offers a range of interactive tools.

- The shape tool allows users to annotate regions of interest using various geometric shapes.
- The text tool allows for the addition of annotations, labels, and descriptions on the image.
- With the ruler tool, users can make accurate measurements of distances and dimensions within the image.

<html>
<body>
    <center>
        <img src='/files/medvispy/tools.png'>
    </center>
</body>
</html>

## Selection Tools
MedVisPy incorporates two selection tools that aid in the extraction of Regions of Interest (ROIs) from 3D medical images.

- The polygon selection tool enables users to draw custom-shaped regions, facilitating the isolation of specific anatomical structures or abnormalities.
- The smart scissor tool, based on intelligent scissors algorithm, automatically detects and traces boundaries of ROIs. This tool streamlines the selection process, saving time and effort while maintaining accuracy.

<html>

<body>
    <center>
        <div class="row">
            <div class="column">
                <img src='/files/medvispy/int-sci-selection.png'>
            </div>
            <div class="column">
                <img src='/files/medvispy/int-sci-extraction.png'>
            </div>
        </div>
        <br>
        <br>
    </center>

</body>

</html>

## Python Console and Extensibility

- The console allows users to run custom scripts, perform advanced image processing operations, and interact directly with the underlying libraries and modules.
- This feature fosters extensibility and enables the integration of additional algorithms, custom plugins, and modules.

<html>
<body>
    <center>
        <img src='/files/medvispy/console.png'>
    </center>
</body>
</html>

## Cross-Platform Compatibility
MedVisPy has been developed to ensure cross-platform compatibility, supporting both Linux and Windows operating systems and a standalone executable is shipped for both platforms.

