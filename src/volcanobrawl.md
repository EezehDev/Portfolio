---
layout: layout.njk
title: WouterDeMoor - Volcano Brawl
---

<article class="project-page container">
<div class="project-page-head">
    <a href="/games">< Return to Games</a>
    <h2 class="project-title">Volcano Brawl</h2>
</div>
<div class="project-intro">
    <iframe class="project-video"
    title="Volcano Brawl - Gameplay Preview"
    src="https://www.youtube.com/embed/LcnrfVJlv8Y"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
    </iframe>
    <div class="project-data">
        <div>
            <div class="data-title">Project Size</div>
            <div class="data-text">7 days, 4 people</div>
        </div>
        <div>
            <div class="data-title">Tools &amp; Languages</div>
            <div class="data-text">Unity, C#, GitHub</div>
        </div>
        <div>
            <div class="data-title">Roles</div>
            <div class="data-text">
            Project Lead </br>
            Gameplay Programmer &amp; Technical Artist
            </div>
        </div>
    </div>
</div>

<section class="project-section">
    <h3>Description</h3>
    <div class="project-description">
        You're living your best life out in nature, jumping around like it's nobody's business... Then suddenly BOOM, the local volcano explodes sending volcanic debris all over the place. You must survive at all costs for as long as possible. Good luck! </br>
        </br>
        This project was a great way of improving my planning skills, as I was changing between code and art on the fly. Since one of the programmers got sick, I mostly helped out with code once the basic pipeline and lava shader was set up.
    </div>
</section>

<section class="project-section">
    <h3>My Contributions</h3>
    <div class="project-task-100">
        <h4>Player Controller</h4>
        <div class="task-container">
            <div>
            My main responsibility was making sure the player could properly move, attack and jump. So I started by implementing a basic movement controller using Unity's built in Character Controller, which comes with a built in ground check that will be just fine for this project. The attack is driven by animation and does a simple overlap to make it easy to use. For the stun mechanic I disabled all movement, and made the player invulnerable for a short duration to avoid infinite stuns.
            </div>
            <img src="/img/volcano_controller.png" alt="volcano brawl controller" loading="lazy"/>
        </div>
    </div>
    <div class="project-task-100">
        <h4>Technical Art</h4>
        <div class="task-container">
            <div>
            As my second role, I created the lava shader using ShaderGraph and a panning texture. The colors and emission intensity are done through a noise map which only has greyscale values. To give the shader a more realistic look and blend in with the environment, I implemented a depth fade which can be seen where the plane interacts with the environment. Finally I gave the scene some more life by adding simple particle effects.
            </div>
            <img src="/gif/volcano_shader.gif" alt="volcano brawl shader" loading="lazy"/>
        </div>
    </div>
</section>

<div class="button-div">
    <a class="link-button" href="https://gwalraet.itch.io/volcano-brawl" target="_blank" rel="noopener noreferrer">View on Itch</a>
</div>
</article>