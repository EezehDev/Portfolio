---
layout: layout.njk
title: WouterDeMoor - Bomberman
---

<article class="project-page container">
<div class="project-page-head">
    <a href="/academic">< Return to Academics</a>
    <h2 class="project-title">Bomberman Remake</h2>
</div>
<div class="project-intro">
    <iframe class="project-video"
    title="Bomberman - Trailer"
    src="https://www.youtube.com/embed/7mh5uRZ0Lmc"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
    </iframe>
    <div class="project-data">
        <div>
            <div class="data-title">Project Size</div>
            <div class="data-text">~100 hours</div>
        </div>
        <div>
            <div class="data-title">Tools &amp; Languages</div>
            <div class="data-text">C++, HLSL, DirectX</div>
        </div>
        <div>
            <div class="data-title">Topics</div>
            <div class="data-text">
            Graphics Programming </br>
            Engine Programming
            </div>
        </div>
    </div>
</div>

<section class="project-section">
    <h3>Assignment</h3>
    <div class="project-description">
        Create a 3D game containing all project requirements using customised Overlord Engine and DirectX.</br>
        </br>
        This project helped me understand how the DirectX rasterizer pipeline works and how to create my own shaders through HLSL. </br>
        These skills translate well into other game engines, such as Unity and Unreal Engine materials, shaders and general pipeline workflow (render passes, deferred vs. forward, post processing, etc).
    </div>
</section>

<section class="project-section">
    <h3>Overlord Engine</h3>
    <div class="project-task-100">
        <div class="task-container">
            <div>
            PhysX, DirectX set up and core game loop were already implemented by lecturers: Brecht Kets, Matthieu Delaere and Thomas Goussaert.
            </div>
        </div>
    </div>
    <div class="project-task-100">
        <h4>Bomberman Grid</h4>
        <div class="task-container">
            <div>
            While movement could completly rely on collisions, gameplay for bomberman can be simplified into a grid using Spatial Partitioning. </br>
            </br>
            Each tile keeps track of the following data: 
            <ul class="dot-list">
                <li>Current obstacle (block or bomb)</li>
                <li>Players on the tile</li>
                <li>Location in the world</li>
            </ul> </br>
            Now when a bomb explodes, adjacent tiles can be easily identified and players can be notified if they get hit. As an added bonus: this also simplifies placing and moving through bombs when placed.
            </div>
            <img src="/img/bomberman_grid.png" alt="bombemran grid" loading="lazy"/>
        </div>
    </div>
    <div class="project-task-100">
        <h4>Dynamic Shadows</h4>
        <div class="task-container">
            <div>
            To implement dynamic shadows, we first need to create what is called a shadow map. The idea behind this shadow map is that it stores the depth information from the perspective of the light source. Whenever this depth is smaller than the one of the main camera, the pixel is occluded causing shadow. </br>
            </br>
            The result of this technique has two issues:
            <ol class="number-list">
                <li>Self shadowing</li>
                <li>Pixelated &amp; low quality shadows</li>
            </ol> </br>
            To fix the self shadowing, a depth bias can be used to make up for the limited depth precision. For the low quality shadows we can use some sort of filtering. I chose to accumulate the adjacent pixels and average them out to smooth the result.
            </div>
            <div class="image-subtext-container">
                <img src="/img/bomberman_shadow.png" alt="bomberman shadow" loading="lazy"/>
                Visualization of shadow map
            </div>
        </div>
    </div>
    <div class="project-task-100">
        <h4>Post Processing</h4>
        <div class="task-container">
            <div>
            As the name suggests, this technique is applied at the end of the render pipeline. </br>
            </br>
            I went for a bloom effect, which is done through multiple steps</br>
            <ol class="number-list">
                <li>Seperate the bright values onto new texture</li>
                <li>Blur the texture using Gaussian blur</li>
                <li>Combine the texture with original image</li>
            </ol></br>
            To control the bloom effect: a threshold and intensity parameter can be used to control how bright the values need to be and how much we increase their intensity before combining the textures.
            </div>
            <div class="image-subtext-container">
                <img src="/img/bomberman_bloom.png" alt="bomberman bloom" loading="lazy"/>
                Screenshot with exaggerated bloom effect
            </div>
        </div>
    </div>
</section>

<section class="project-section">
    <h3>Useful Resources</h3>
    <div class="project-credits">
        <a href="https://takinginitiative.wordpress.com/2011/05/15/directx10-tutorial-10-shadow-mapping/" target="_blank" rel="noopener noreferrer">DirectX10: Shadow Mapping Tutorial</a>
    </div>
    <div class="project-credits">
        <a href="https://pingpoli.medium.com/the-bloom-post-processing-effect-9352fa800caf" target="_blank" rel="noopener noreferrer">Bloom Post Processing</a>
    </div>
</section>
</article>