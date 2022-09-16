---
layout: layout.njk
title: WouterDeMoor - Oogies Spacepark
---

<article class="project-page container">
<div class="project-page-head">
    <a href="/games">< Return to Games</a>
    <h2 class="project-title">Oogies Spacepark</h2>
</div>
<div class="project-intro">
    <iframe class="project-video"
    title="Oogies Spacepark"
    src="https://www.youtube.com/embed/-LeyKABgbpA"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
    </iframe>
    <div class="project-data">
        <div>
            <div class="data-title">Project Size</div>
            <div class="data-text">7 days, 5 people</div>
        </div>
        <div>
            <div class="data-title">Tools &amp; Languages</div>
            <div class="data-text">Unreal Engine, Blueprints, GitHub</div>
        </div>
        <div>
            <div class="data-title">Roles</div>
            <div class="data-text">
            Gameplay Programmer </br>
            Sound Engineer
            </div>
        </div>
    </div>
</div>

<section class="project-section">
    <h3>Description</h3>
    <div class="project-description">
        You are stuck in an abandoned theme park in the middle of the night, there is no power and no way out. You walk through the park hoping to find a way out, but wait.. you are not alone! An alien mascot is patrolling around the park hungry for human blood, and he has smelled yours. The mascot does not like to be filmed,  luckily you brought your camera with you but you only have one memory card so you'll better use your memory wisely. </br>
        </br>
        Starting out as a small idea, this game turned out to be way larger than we all expected and blew up on Itch and Youtube. Being the first group project I made in Unreal Engine: I learned quite a bit on source control, general workflow and communication skills.
    </div>
</section>

<section class="project-section">
    <h3>My Contributions</h3>
    <div class="project-task-100 italic">Note: all gameplay logic is written using Blueprints.</div>
    <div class="project-task-100">
        <h4>Immersive Sound System</h4>
        <div class="task-container">
            <div>
            An important task to create immersion was to add sounds when the player moves. This was done using a combination of line traces and the movement status of the player, in order to change the volume and sound type for each step or jump or shrub the player passes through. </br>
            </br>To give the player some feedback on how close the monster is, the heartrate sound will play faster and louder as the monster moves closer and slowly fade away when it becomes safe.
            </div>
            <img src="/gif/oogiesspacepark_sounds.gif" alt="oogies spacepark sounds" loading="lazy"/>
        </div>
    </div>
    <div class="project-task-100">
        <h4>AI Senses</h4>
        <div class="task-container">
            <div>
            To have the monster feel alive AI perception was implemented, this allows it to be aware of it's surroundings and change it's behavior accordingly. </br>
            </br>
            Two senses were configured:</br>
            <ol class="number-list">
                <li>Sight with vision cone</li>
                <li>Hearing player noises</li>
            </ol></br> 
            Using the perception information, the AI is aware of the players location when they make sound and has a more realistic vision range.
            </div>
            <img src="/img/oogiesspacepark_ai.png" alt="oogies spacepark ai" loading="lazy"/>
        </div>
    </div>
    <div class="project-task-100">
        <h4>Interactions</h4>
        <div class="task-container">
            <div>
            As a main way of countering the monster, the player is equipped with a camera. In order to make sure the player can see the monster I used a combination of camera view frustum and line traces, which tell the monster if it should flee or not. </br>
            </br>
            The player can find a few items lying around on the ground, such as the memory cards and fuses. When the player has the correct items, they can interact with objects around the map.
            </div>
            <img src="/gif/oogiesspacepark_camera.gif" alt="oogies spacepark camera" loading="lazy"/>
        </div>
    </div>
    <div class="project-task-100">
        <h4>Environment</h4>
        <div class="task-container">
            <div>
            Since we had quite a large environment, I helped out with a few tasks:
            <ul class="dot-list">
                <li>Terrain Painting</li>
                <li>Foliage Creation using SpeedTree</li>
                <li>Light Baking and Optimisations</li>
            </ul></br> The environment receives most of it's light through the dense atmospheric fog in combination with some spot lights, which creates these light rays that can be tweaked by changing the volumetric scattering intensity.
            </div>
            <img src="/img/oogiesspacepark_environment.png" alt="oogies spacepark environment" loading="lazy"/>
        </div>
    </div>
</section>

<section class="project-section">
    <h3>Credits</h3>
    <div class="project-credits">
        <a href="https://store.speedtree.com/" target="_blank" rel="noopener noreferrer">Environment Assets</a> by Quixel Megascans </br>
        <a href="https://store.speedtree.com/" target="_blank" rel="noopener noreferrer">Vegetation</a> using Speedtree </br>
        <a href="https://www.zapsplat.com/" target="_blank" rel="noopener noreferrer">Sounds</a> from Zapsplat </br>
    </div>
</section>

<div class="button-div">
    <a class="link-button" href="https://enzomannaert.itch.io/oogies-spacepark" target="_blank" rel="noopener noreferrer">View on Itch</a>
</div>
</article>