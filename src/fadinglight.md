---
layout: layout.njk
title: WouterDeMoor - Fading Light
---

<article class="project-page container">
<div class="project-page-head">
    <a href="/games">< Return to Games</a>
    <h2 class="project-title">Fading Light</h2>
</div>
<div class="project-intro">
    <iframe class="project-video"
    title="Fading Light - Gameplay Trailer"
    src="https://www.youtube.com/embed/otfrz9a2En8"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
    </iframe>
    <div class="project-data">
        <div>
            <div class="data-title">Project Size</div>
            <div class="data-text">7 days, 4 people</div>
        </div>
        <div>
            <div class="data-title">Tools &amp; Languages</div>
            <div class="data-text">Unreal Engine, Blueprints, GitHub</div>
        </div>
        <div>
            <div class="data-title">Roles</div>
            <div class="data-text">Gameplay &amp; AI Programmer </br> Game &amp; Sound Designer</div>
        </div>
    </div>
</div>

<section class="project-section">
    <h3>Project Summary</h3>
    <div class="project-description">
        Keep your light alive as you explore the dark forest looking for a way out. Escaping ends up being harder than you first expected, requiring multiple items scattered around the environment guarded by shades.</br></br>
        Our main goal was to create a hyperrealistic game, while exploring the latest UE5 technology: <a href="https://docs.unrealengine.com/5.0/en-US/lumen-global-illumination-and-reflections-in-unreal-engine/" target="_blank" rel="noopener noreferrer">Lumen</a> and <a href="https://docs.unrealengine.com/5.0/en-US/nanite-virtualized-geometry-in-unreal-engine/" target="_blank" rel="noopener noreferrer">Nanite</a>. Featuring realtime global illumination that is key to the gameplay loop and AI interacting with these lighting conditions.
    </div>
</section>

<section class="project-section">
    <h3>My Contribution</h3>
    <ul class="dot-list">
        <li>Torch mechanic</li>
        <li>Patrolling shade AI</li>
        <li>Immersive Sound System</li>
        <li>Interactables</li>
        <li>Player feedback</li>
        <li>Gameplay Testing</li>
        <li>VFX</li>
    </ul>
</section>

<section class="project-section">
    <h3>Implementation</h3>
    <div class="project-task-100 italic">Note: all gameplay logic is written using Blueprints.</div>
    <div class="project-task-100">
        <h4>Torch</h4>
        <div class="task-container">
            <div>
            The core mechanic is the torch: which is attached to a socket on the player's hand. The torch light decreases over time as you move away from safezones, running out of light causes the player to die. The further you move, the faster your light dims.</br>
            </br>
            Upon entering a safezone, light will be drained from the campfire and refilled into the torch decreasing the campfire safezone radius. A decal is projected on the ground to display remaining light.
            </div>
            <img src="/gif/fadinglight_torch.gif" alt="fadinglight torch" loading="lazy"/>
        </div>
    </div>
    <div class="project-task-100">
        <h4>Interactables</h4>
        <div class="task-container">
            <div>
            Using a custom trace channel, the player can interact with items and objects in range. These have some default values and events which made it easy to implement different variations, such as the bridge and item pickups.</br>
            </br>
            All items are kept track off through the GameState, making it simple for the rest of the gameplay to communicate with them if needed.
            </div>
            <img src="/img/fadinglight_interactables.png" alt="fadinglight interactables" loading="lazy"/>
        </div>
    </div>
    <div class="project-task-100">
        <h4>Roaming Shade AI</h4>
        <div class="task-container">
            <div>
            Since the gameplay lacked some tension I decided to add an AI using behavior tree and blackboard. This AI has a few behaviors:
            <ul class="dot-list">
                <li>Patrol the area using target points</li>
                <li>Alert and chase player</li>
                <li>Flee when attacked by player</li>
            </ul></br>
            To navigate the world, a navmesh is used in combination with the built in A* pathfinding.
            </div>
            <img src="/img/fadinglight_ai.png" alt="fadinglight AI" loading="lazy"/>
        </div>
    </div>
</section>

<section class="project-section">
    <h3>Credits</h3>
    <div class="project-credits">
        <a href="https://quixel.com/megascans/home" target="_blank" rel="noopener noreferrer">Environment Assets</a> by Quixel Megascans </br>
        <a href="https://sketchfab.com/3d-models/rigged-character-free-2faceb3d407647afaa57f618b5675dc9" target="_blank" rel="noopener noreferrer">Character</a> by BlendTek </br>
        <a href="https://www.mixamo.com/#/" target="_blank" rel="noopener noreferrer">Animations</a> from Mixamo </br>
        <a href="https://www.thedarkpiano.com/" target="_blank" rel="noopener noreferrer">Music</a> by Myuu </br>
        <a href="https://www.zapsplat.com/" target="_blank" rel="noopener noreferrer">Sounds</a> from Zapsplat </br>
        <a href="https://www.unrealengine.com/marketplace/en-US/product/realistic-starter-vfx-pack-vol" target="_blank" rel="noopener noreferrer">Fire VFX</a> by FX Cat UA </br>
        <a href="https://marketplace-website-node-launcher-prod.ol.epicgames.com/ue/marketplace/en-US/product/niagara-footstep-vfx" target="_blank" rel="noopener noreferrer">Footstep VFX</a> by Sidearm Studios </br>
        </br>
        Special thanks to my friends for helping out: Enzo Mannaert, Thomas Vansteelandt &amp; Isaac Sauer </br>
    </div>
</section>

<div class="button-div">
    <a class="link-button" href="https://eezehdev.itch.io/fading-light" target="_blank" rel="noopener noreferrer">View on Itch</a>
</div>
</article>