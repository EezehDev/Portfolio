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
        Engine requirements: particle system, custom post processing effect, sprite &amp; text rendering, dynamic shadow mapping, character controller, skinned mesh with animations.
        </br>
        Game requirements: core gameplay mechanics, full game loop.
        </br></br>
        While bomberman isn't the most complex game, the engine requirements remain the same and is what I put my focus into. This project helped me understand how the DirectX rasterizer pipeline works and how to create my own shaders through HLSL. These skills translate well into other game engines, such as Unity and Unreal Engine materials, shaders and general pipeline workflow (render passes, deferred vs. forward, post processing, etc).
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
            While movement could completly rely on collisions, gameplay for bomberman can be simplified into a grid. This grid consists of multiple tiles: each storing the current obstacle, which is either a block or a bomb and all players on the tile. By using spatial partitioning, each tile can be identified through their location in the world making it straightforward to find nearby tiles. Now when a bomb explodes, adjacent tiles are in the following row/column of the grid and this effect can be chained for the full explosion range. Players can also use this grid to know if a bomb is already on the tile, blocking them from moving there and allowing them to place a bomb on their current tile while not being pushed away through collision.
            </div>
            <img src="/img/bomberman_grid.png" alt="bombemran grid" loading="lazy"/>
        </div>
    </div>
    <div class="project-task-100">
        <h4>Dynamic Shadows</h4>
        <div class="task-container">
            <div>
            To implement dynamic shadows, we first need to create what is called a shadow map. The idea behind this shadow map is that it stores the depth information from the perspective of the lightsource. Whenever this depth is smaller than the one of the main camera, the pixel is occluded causing shadow. The result of this technique has two issues: self shadowing and pixelated shadows depending on shadow map resolution. The self shadowing is caused by the limited precision that can be stored, and can easily be fixed by using a bias to ignore small differences. To increase the shadow quality, filtering can be used. For this project, I simply accumulated nearby pixels and averaged the result.
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
            As the name suggests, this technique is applied at the end of the render pipeline. I went for a bloom effect, which is done through multiple steps. Since bloom bleeds brighter values into darker ones, we need to seperate the bright values that exceed a threshold onto a seperate texture. This is done using an additional render target and texture to store the information on. From there, blurring these values with a gaussian blur creates a texture that can be used to apply bloom. As a last step, combining the texture multiplied with an intensity together with the original image, gives the wanted result.</br>
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