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
            A horror game isn't the same without a solid sound system, so an important part was to add sounds when the player moves. This was done using a combination of line traces and the movement status of the player, in order to change the volume and sound type for each step or jump or shrub the player passes through. To give the player some feedback on how close the monster is, the heartrate sound will play faster and louder as the monster moves closer and slowly fade away when it becomes safe. Last but not least all these noises the player makes while moving interact with the AI making your actions have real consequences. To add a bit more horror vibes, there are a few jump scares and noises from the machines inside the theme park.
            </div>
            <img src="/gif/oogiesspacepark_sounds.gif" alt="oogies spacepark sounds" loading="lazy"/>
        </div>
    </div>
    <div class="project-task-100">
        <h4>AI Senses</h4>
        <div class="task-container">
            <div>
            In order to have the monster react properly to it's environment and the player's actions, AI perception had to be implemented. This is done by adding the AI Perception component with two senses configured: one for the sight and one for hearing. By doing this, we can listen to certain perception events to change the data used by the monster and guide it's behavior. The rest of the logic is implemented using a behavior tree, which uses the perception information to make up a sequence of actions. For example when the player makes a sound, the behavior tree receives the data from the perception component and checks these values before deciding to move towards this location or ignore it.
            </div>
            <img src="/img/oogiesspacepark_ai.png" alt="oogies spacepark ai" loading="lazy"/>
        </div>
    </div>
    <div class="project-task-100">
        <h4>Interactions</h4>
        <div class="task-container">
            <div>
            As a main way of countering the monster, the player is equipped with a camera. In order to make sure the player can see the monster I used a combination of camera view frustum and line traces, which tell the monster if it should flee or not. On top of this, a post processing effect fades in together with some HUD to give player feedback. The camera can be reloaded using memory card items found on the ground, in a similar way to how guns work in other games: while reloading, the camera is unusable and the capacity is refreshed once completed. Finally based on the list of items picked up, the player can succesfully interact with levers which start certain events.
            </div>
            <img src="/gif/oogiesspacepark_camera.gif" alt="oogies spacepark camera" loading="lazy"/>
        </div>
    </div>
    <div class="project-task-100">
        <h4>Environment</h4>
        <div class="task-container">
            <div>
            Since we had quite a large environment, I helped out a bit by painting some of the terrain and trying out SpeedTree to create foliage. By playing around with some of the presets and modifying the nodes, I was able to create trees and bushes to decorate the level. Finally, we had to set up and bake lighting. The environment receives most of it's light through the dense atmospheric fog in combination with some spot lights, which creates these light rays that can be tweaked by changing the volumetric scattering intensity.
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