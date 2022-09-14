---
layout: layout.njk
title: WouterDeMoor - Fading Light
---

<article class="project-page container">
<h2 class="project-title">Fading Light</h2>
<div class="project-intro">
    <iframe class="project-video"
    title="Fading Light - Gameplay Trailer"
    src="https://www.youtube.com/embed/otfrz9a2En8"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
    </iframe>
    <div class="project-data">
        <div>
            <div class="data-title">Project Duration</div>
            <div class="data-text">7 days during 2022 Epic MegaJam</div>
        </div>
        <div>
            <div class="data-title">Team Size</div>
            <div class="data-text">4</div>
        </div>
        <div>
            <div class="data-title">Roles</div>
            <div class="data-text">Gameplay &amp; AI Programmer </br> Game &amp; Sound Designer</div>
        </div>
    </div>
</div>

<section class="project-section">
    <h3>Description</h3>
    <div class="project-description">
        Keep your light alive as you explore the dark forest looking for a way out. Escaping ends up being harder than you first expected, requiring multiple items scattered around the environment guarded by shades. </br></br>
        The main goal of this project was to create a hyperrealistic game, while exploring the latest UE5 technology: <a href="https://docs.unrealengine.com/5.0/en-US/lumen-global-illumination-and-reflections-in-unreal-engine/">Lumen</a> and <a href="https://docs.unrealengine.com/5.0/en-US/nanite-virtualized-geometry-in-unreal-engine/">Nanite</a>. Featuring realtime global illumination that is key to the gameplay loop and AI interacting with these lighting conditions.
    </div>
</section>

<section class="project-section">
    <h3>My Contributions</h3>
    <div class="project-task-100 italic">Note: all gameplay logic is written using Blueprints.</div>
    <div class="project-task-100">
        <h4>Torch</h4>
        <div class="task-container">
            <div>
            The core mechanic is the torch, which is attached to a socket and uses realtime light and with a attenuation radius decreasing over time as you move away from safezones, upon losing all light the player dies. Based on a multiplier, the player starts loses light faster as they travel further from safezones. Upon entering a safezone, light will be drained from the campfire and refilled into the torch decreasing the campfire safezone radius. For extra visual player feedback, a decal is projected onto the ground which scales with the light radius. VFX and SFX are also linked to the remaining charge percentage, and become less obvious as the player's torch dims.
            </div>
            <img src="/gif/fadinglight_torch.gif" alt="fadinglight torch" loading="lazy"/>
        </div>
    </div>
    <div class="project-task-100">
        <h4>Interactables</h4>
        <div class="task-container">
            <div>
            Using a custom trace channel, the player can interact with items and objects in range. These have some default values and events which made it easy to implement different variations, such as the bridge and item pickups. All items are kept track off through the GameState, making it simple for the rest of the gameplay to communicate with them if needed. The UI displaying the items is completly dynamic, updating with each item pickup.
            </div>
            <img></img>
        </div>
    </div>
    <div class="project-task-100">
        <h4>Roaming Shade AI</h4>
        <div class="task-container">
            <div>
            Until now, the gameplay didn't really have much interaction: so I decided to add an AI that patrols along a path back and forth a path defined by multiple target points navigating on the navmesh based on the information set through the blackboard. Each time it nears the target patrol point, the information will be updated. To make the AI see the player, it has a vision range. When the player enters this vision the AI will switch active state and new data is passed into the blackboard. If the player fails to get to a safezone within a short timeframe, the AI will switch to the chasing state. While chasing, the AI finds the shortest path towards the current player using A*. While chasing the AI is vulernable and can be scared away using the torch attack which sends an animation notify. Succesfully chasing it away will cause a respawn over time, at a random patrol point. Failing to chase it away and letting the AI overlap causes it to despawn and decreases some of the players light.
            </div>
            <img></img>
        </div>
    </div>
</section>

<section class="project-section">
    <h3>Credits</h3>
    <div class="project-credits">
        <a href="https://quixel.com/megascans/home">Environment Assets</a> by Quixel Megascans </br>
        <a href="https://sketchfab.com/3d-models/rigged-character-free-2faceb3d407647afaa57f618b5675dc9">Character</a> by BlendTek </br>
        <a href="https://www.mixamo.com/#/">Animations</a> from Mixamo </br>
        <a href="https://www.thedarkpiano.com/">Music</a> by Myuu </br>
        <a href="https://www.zapsplat.com/">Sounds</a> from Zapsplat </br>
        <a href="https://www.unrealengine.com/marketplace/en-US/product/realistic-starter-vfx-pack-vol">Fire VFX</a> by FX Cat UA </br>
        <a href="https://marketplace-website-node-launcher-prod.ol.epicgames.com/ue/marketplace/en-US/product/niagara-footstep-vfx">Footstep VFX</a> by Sidearm Studios </br>
        </br>
        Special thanks to my team members: Enzo Mannaert, Thomas Vansteelandt &amp; Isaac Sauer </br>
    </div>
</section>

<div class="button-div">
    <a class="link-button" href="https://eezehdev.itch.io/fading-light" target="_blank" rel="noopener noreferrer">View on Itch</a>
</div>
</article>