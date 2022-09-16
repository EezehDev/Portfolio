---
layout: layout.njk
title: WouterDeMoor - Bikin'Ice
---

<article class="project-page container">
<div class="project-page-head">
    <a href="/academic">< Return to Academics</a>
    <h2 class="project-title">Bikin'Ice</h2>
</div>
<div class="project-intro">
    <iframe class="project-video"
    title="Bikin' Ice - Gameplay Trailer"
    src="https://www.youtube.com/embed/RDnP1UDcGhw"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
    </iframe>
    <div class="project-data">
        <div>
            <div class="data-title">Project Size</div>
            <div class="data-text">~100 hours, 5 people</div>
        </div>
        <div>
            <div class="data-title">Tools &amp; Languages</div>
            <div class="data-text">Unity, C#, Perforce, Hack'n'Plan</div>
        </div>
        <div>
            <div class="data-title">Roles</div>
            <div class="data-text">
            Gameplay Programmer </br>
            Game Designer
            </div>
        </div>
    </div>
</div>

<section class="project-section">
    <h3>Description</h3>
    <div class="project-description">
        Bikin' Ice is a couch PVP, where you can challenge up to 3 friends to fight for the most coins. Ride around on your bike while picking up items to steal coins from other players. May the best ice cream win!
        </br></br>
        Over the course of the semester, this project was developed where each of us were expected to work ~10 hours every week. During the first few weeks, we did brainstorming and created game design and tech documents. The next few weeks were spent prototyping before eventually getting into production and polish sprints.
    </div>
</section>

<section class="project-section">
    <h3>My Main Tasks</h3>
    <div class="project-task-100">
        <h4>Bike Physics Controller</h4>
        <div class="task-container">
            <div>
            The core of the controller consists of a Rigidbody attached to a sphere collider, to which forces are applied based on the visual direction of the player. This simplifies physics dramatically, and seperates the physics from the player visuals. </br>
            </br>
            To make controlling a bit easier, there are extra forces applied to slow down and avoid sliding or drifting. The drag and sideways forces are reduced during drift, making the surface feel more slippery.
            </div>
            <img src="/gif/bikinice_physics.gif" alt="bikinice physics" loading="lazy"/>
        </div>
    </div>
    <div class="project-task-100">
        <h4>Local Co-Op</h4>
        <div class="task-container">
            <div>
            Using Unity's Input System, I set up multiplayer controls by binding each controller to a specific input user. This makes sure that every controller only receives input from one gamepad.</br>
            </br>
            Correctly binding these controls turned out to be quite tricky as the default player input manager didn't quite cover the needed features. So instead, I wrote a system which is similar to how Unreal Engine handles multiplayer: each player has their own playercontroller which can possess a player, from there it updates the camera viewport and UI accordingly.
            </div>
            <img src="/gif/bikinice_coop.gif" alt="bikinice co-op" loading="lazy"/>
        </div>
    </div>
    <div class="project-task-100">
        <h4>Player Feedback</h4>
        <div class="task-container">
            <div>
            During the last few weeks, I spent most of my time adding support for SFX, VFX and general player feedback. The sound system implemented, covers both 2D audio as well as 3D audio with linear falloff based on the nearest camera. </br>
            </br>
            Additional feedback through gamepad vibration and camera shake are handled through the player controller, which keeps track of the highest priority and updates durations before applying the effect.
            </div>
            <img src="/gif/bikinice_feedback.gif" alt="bikinice physics" loading="lazy"/>
        </div>
    </div>
</section>

<div class="button-div">
    <a class="link-button" href="https://lukaverhelle.itch.io/bikinice" target="_blank" rel="noopener noreferrer">View on Itch</a>
</div>
</article>