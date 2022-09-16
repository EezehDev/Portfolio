---
layout: layout.njk
title: WouterDeMoor - Ride the Chains
---

<article class="project-page container">
<div class="project-page-head">
    <a href="/games">< Return to Games</a>
    <h2 class="project-title">Ride the Chains</h2>
</div>
<div class="project-intro">
    <img src="/img/ridethechains_thumbnail.png" alt="graveyardbash thumbnail" class="project-video" loading="lazy"/>
    <div class="project-data">
        <div>
            <div class="data-title">Project Size</div>
            <div class="data-text">2 days, 4 people</div>
        </div>
        <div>
            <div class="data-title">Tools &amp; Languages</div>
            <div class="data-text">Unity, C#, GitHub</div>
        </div>
        <div>
            <div class="data-title">Roles</div>
            <div class="data-text">
            Gameplay Programmer </br>
            VFX
            </div>
        </div>
    </div>
</div>

<section class="project-section">
    <h3>Description</h3>
    <div class="project-description">
        A bullethell game where the goal is to survive as long as possible and reach a great altitude! The theme of the gamejam was "Unconventional means" which is implemented by losing health over time and the only way of gaining health is to shoot enemies. </br>
        </br>
        During this jam, I decided to broaden my knowledge and learn more about the render pipeline and everything graphic related. Besides general gameplay programming, I helped out with: VFX, character models, animations and general pipeline setup.
    </div>
</section>

<section class="project-section">
    <h3>My Contribution</h3>
    <div class="project-task-100">
        <div class="task-container">
            <div>
            First of all I made some models and rigs using Blender before exporting into Unity, where the arms were seperated to rotate them towards the player mouse.</br>
            </br>
            I then implemented the weapon and projectile system, which allowed for different weapon fire rates and multiple projectiles.</br>
            </br>
            To fake the effect of infinite movement, the environment moves down while the platform remains stationary. Once the environment objects are out of player sight, they are teleported above the player and reused.
            </div>
            <img src="/gif/ridethechains_visuals.gif" alt="ridethechains visuals" loading="lazy"/>
        </div>
    </div>
</section>

<div class="button-div">
    <a class="link-button" href="https://tomstevens.itch.io/ridethechains" target="_blank" rel="noopener noreferrer">View on Itch</a>
</div>
</article>