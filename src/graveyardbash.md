---
layout: layout.njk
title: WouterDeMoor - Graveyard Bash
---

<article class="project-page container">
<div class="project-page-head">
    <a href="/games">< Return to Games</a>
    <h2 class="project-title">Graveyard Bash</h2>
</div>
<div class="project-intro">
    <img src="/img/graveyardbash_thumbnail.png" alt="graveyardbash thumbnail" class="project-video" loading="lazy"/>
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
            Project Lead </br>
            Gameplay Programmer
            </div>
        </div>
    </div>
</div>

<section class="project-section">
    <h3>Description</h3>
    <div class="project-description">
        Fight your way out of the graveyard as you face the undead blocking your path and hungering for some delicious bunny meat. </br>
        </br>
        This was the first game jam where I was the only programmer, the pressure was on to make sure all the features were present and well tested. Making a solid combat system in such a short timeframe ended up being a bumpy adventure: with quite a few crashes, unexpected results and game breaking bugs. Had a lot of fun making this one, while also getting a good understanding of what can be done in such little time.
    </div>
</section>

<section class="project-section">
    <h3>The Combat System</h3>
    <div class="project-task-100">
        <div class="task-container">
            <div>
            My main challenge was to create a simple combat system, for which I set up reusable components for health and a base class to use for each enemy. Using box colliders set to overlap, I could easily check when an enemy is in range and tell the health component to apply damage. This workflow allowed for a fairly quick implementation of 3 different enemies and spawn them in waves. The waves themselves use a combination of events, to know when an enemy died as well as Coroutines to have a looping delay and avoid spawning many enemies in a single frame.
            </div>
            <img src="/gif/graveyardbash_combat.gif" alt="graveyard bash combat" loading="lazy"/>
        </div>
    </div>
</section>

<div class="button-div">
    <a class="link-button" href="https://eezehdev.itch.io/graveyard-bash" target="_blank" rel="noopener noreferrer">View on Itch</a>
</div>
</article>