---
layout: layout.njk
title: WouterDeMoor - Press R
---

<article class="project-page container">
<div class="project-page-head">
    <a href="/games">< Return to Games</a>
    <h2 class="project-title">Press R</h2>
</div>
<div class="project-intro">
    <img src="/img/pressr_thumbnail.png" alt="pressr thumbnail" class="project-video" loading="lazy"/>
    <div class="project-data">
        <div>
            <div class="data-title">Project Size</div>
            <div class="data-text">2 days, 2 people</div>
        </div>
        <div>
            <div class="data-title">Tools &amp; Languages</div>
            <div class="data-text">Unity, C#, GitHub</div>
        </div>
        <div>
            <div class="data-title">Roles</div>
            <div class="data-text">
            Gameplay Programmer</br>
            Game Designer
            </div>
        </div>
    </div>
</div>

<section class="project-section">
    <h3>Description</h3>
    <div class="project-description">
        The theme was rotating so after some brainstorming we came with the idea of 'rotating' gravity and parts of the level. In our game you can rotate the platforms around the map by pressing 'R' and you can flip the gravity whenever you come across the gravity switch. And if you like an extra challenge then try to collect all of the gems scattered around the levels. </br>
        </br>
        Since this project was made between me and fellow game developer friend made during the Kenney Jam, we decided it would be a good idea to create a gameplay heavy game and not spend too much time thinking about the visuals.
    </div>
</section>

<section class="project-section">
    <h3>Platforming Madness</h3>
    <div class="project-task-100">
        <div class="task-container">
            <div>
            Our core mechanic was the rotating platforms, which freezes time for a brief moment as the platform rotates. Together with this mechanic we thought it would be a good idea to mix some well known platformer classics: gravity switching, collectables and traps. To make the gravity work, we wrote a custom player controller which could rotate the player visuals and change the direction of gravity. This controller was later extended to support launching the character and push or drag objects around making use of rigidbodies and simple overlaps combined with the movement input.
            </div>
            <img src="/gif/pressr_jumping.gif" alt="pressr platforming" loading="lazy"/>
        </div>
    </div>
</section>

<section class="project-section">
    <h3>Credits</h3>
    <div class="project-credits">
        <a href="https://www.kenney.nl/" target="_blank" rel="noopener noreferrer">Assets &amp; Sounds</a> by Kenney </br>
    </div>
</section>

<div class="button-div">
    <a class="link-button" href="https://eezehdev.itch.io/pressr" target="_blank" rel="noopener noreferrer">View on Itch</a>
</div>
</article>