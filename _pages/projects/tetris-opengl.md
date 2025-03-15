---
layout: splash
title: Tetris
permalink: /projects/tetris-opengl/
author_profile: false
---

# Tetris

---

<html>
<style>
    html<html>
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

<body>
    <center>
        <img class="two" src='/files/Tetris/tetris-gameplay1.png'>
        <br>
        <br>
    </center>
</body>
</html>

[Tetris](https://en.wikipedia.org/wiki/Tetris) is a classic 2D puzzle game from the '80s. The goal of this game is to complete a full line by dropping pieces, also known as "Tetrominoes".

I decided to write this game as a practice to learn **C++** and specifically **Object-Oriented C++** as I was not confident enough in my C++ skills which I think is important for an electrical engineer. So I got to work.

If you want to actually make a game that people want to play, I would advise you to use a commercial game engine like Unity or Unreal. It would make your game way better and at the same time, make your job way easier. But since that was not my goal and I wanted a bit more of a challenge, I decided to make my own game engine!

For the engine, I used the [OpenGL](https://en.wikipedia.org/wiki/OpenGL) graphics API since it seemed to be the easiest to work with for a beginner. However, it did not come without its challenges. For starters, OpenGL is an old API developed in the '90s in C. It uses some unintuitive system that uses pointers as _"objects"_ that need to be passed as a function parameter each time you call them. Trying to abstract this into a modern C++ class was a big hassle and took a lot of head-sctraching, research, and trial and error.

The next big challenge was understanding how graphics rendering in GPUs works. After grasping concepts of vertex buffers, textures rendering, shaders and GLSL (OpenGL Shading Language) and... I was able to create a "batch renderer" as well as dynamically render text. A batch renderer groups all the API calls that would have otherwise been sent separately to the GPU for each shape or texture into a single API call for each frame. This technique greatly increases performance.

With the renderer out of the way, it is time for the easy part of the project. Writing the game itself! The game logic doesn't have any notable points to mention. Since it's a fairly simple game, it was pretty straight-forward to develop. I even got some hardcore Tetris player friends of mine to playtest it for me.
<center>
<video controls autoplay="autoplay" loop="true" controls muted>
  <source src="/files/Tetris/ho5dr0V - Imgur.mp4" type="video/mp4">
</video>
</center>
Their only complaints were a lack of custom hotkeys. So naturally, I spent a few days developing a main menu and settings menu for setting users' custom hotkeys.

<html>

<body>
    <center>
        <div class="row">
            <div class="column">
                <img src='/files/Tetris/tetris-main-menu.png'>
            </div>
            <div class="column">
                <img src='/files/Tetris/tetris-hotkey-menu.png'>
            </div>
        </div>
        <br>
        <br>
    </center>

</body>

</html>

In conclusion, I'm very happy with how this project turned out and I had a lot of fun making it. 

[Link to source code on GitHub.](https://github.com/somso2e/Tetris-openGL/)

You could also download the executables for windows and try out the game from [here](https://github.com/somso2e/Tetris-openGL/releases/tag/v1.0.2).


---

And here are some sources if you wanted to learn OpenGL yourself:

[Tutorial on FreeCodeCamp by Victor Gordan](https://youtu.be/45MIykWJ-C4)

[learnOpenGL.com](https://learnopengl.com/)

[The Cherno's OpenGL series on Youtube](https://youtube.com/playlist?list=PLlrATfBNZ98foTJPJ_Ev03o2oq3-GGOS2)