---
layout: layout.njk
title: WouterDeMoor - Unarmed
---

<article class="project-page container">
<div class="project-page-head">
    <a href="/games">< Return to Games</a>
    <h2 class="project-title">Unarmed</h2>
</div>
<div class="project-intro">
    <iframe class="project-video"
    title="Unarmed Trailer (DAE Virtual Easter JAM)"
    src="https://www.youtube.com/embed/RpnbLTf0mCM"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
    </iframe>
    <div class="project-data">
        <div>
            <div class="data-title">Project Size</div>
            <div class="data-text">2 days, 5 people</div>
        </div>
        <div>
            <div class="data-title">Tools &amp; Languages</div>
            <div class="data-text">Unity, C#, GitHub</div>
        </div>
        <div>
            <div class="data-title">Roles</div>
            <div class="data-text">
            Project Manager &amp; Lead</br>
            Lead Programmer
            </div>
        </div>
    </div>
</div>

<section class="project-section">
    <h3>Description</h3>
    <div class="project-description">
        Charlie The Wizard is looking for a new wand to equip. Will finding one fulfil his destiny? Play till the end to find out! </br>
        </br>
        This was my first game jam, which was both an exciting and nerve wracking experience. Over the course of the jam I learned a lot about: managing time, planning, dividing work, communication and what teamwork is about. This first experience got me hooked and motivated to make more games and join more game jams.
    </div>
</section>

<section class="project-section">
    <h3>My Contribution</h3>
    <div class="project-task-100">
        <div class="task-container">
            <div>
            We had the idea of throwing weapons instead of actually equipping them, so I started by using line traces to detect the player clicking on weapons lying around. Later on, I realised this wasn't the best approach as it meant the player had to exactly click on the weapons. To fix this, all weapons within a short radius from the click would be tested and the nearest one would be picked up. Upon releasing the mouse button, Charlie the mage yeets the weapon forward. The way weapons interact is different for each one: the shield can bounce while the sword pierces through multiple enemies. Next up was the AI, which was my first time using pathfinding in Unity. They are set up to follow the player along the navmesh, and stop at their attack range. Because time was running short, their attack simply uses an overlap box with a delay.
            </div>
            <img src="/gif/unarmed_combat.gif" alt="unarmed combat" loading="lazy"/>
        </div>
    </div>
</section>

<div class="button-div">
    <a class="link-button" href="https://eezehdev.itch.io/unarmed" target="_blank" rel="noopener noreferrer">View on Itch</a>
</div>
</article>