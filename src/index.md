---
layout: layout.njk
title: EezehDev - Home
---

<section class="introduction container">
    <h2 class="introduction-title">Hello and welcome! &#128075;</h2>
    <div class="introduction-text">I'm <em>Wouter De Moor</em>, a game developer who loves to both design and create gameplay and tools for games.</div>
    <div class="introduction-contact">Want to get in touch? Feel free to mail me: <a href="mailto:wouter.demoor@live.be" class="introduction-mail">wouter.demoor@live.be</a></div>
</section>

<section class="skills container">
    <h2>Skills</h2>
    <div class="skills-grid">
        <div class="skill-div">
            <h3>Languages</h3>
            <ul class="skill-list">
                <li>C#</li>
                <li>C++</li>
                <li>HLSL</li>
                <li>JavaScript &amp; HTML</li>
                <li>CSS &amp; Sass</li>
            </ul>
        </div>
        <div class="skill-div">
            <h3>Engines & APIs</h3>
            <ul class="skill-list">
                <li>Unreal Engine 4 &amp; 5</li>
                <li>Unity 3D</li>
                <li>DirectX</li>
            </ul>
        </div>
        <div class="skill-div">
            <h3>Tools</h3>
            <ul class="skill-list">
                <li>Visual Studio</li>
                <li>Git(Hub)</li>
                <li>Perforce</li>
                <li>HacknPlan</li>
                <li>Blender</li>
            </ul>
        </div>
    </div>
</section>

<section class="highlights container">
    <h2>Highlighted games</h2>
    <div class="project-grid container">
        {% projectcard "Oogies Spacepark", "2021", "Epic MegaJam submission, where I worked in blueprints to develop the interaction and sound system.", "https://enzomannaert.itch.io/oogies-spacepark", "/img/oogiesspacepark.png" %}
        {% projectcard "Volcano Brawl", "2022", "Game jam project made in 4 days using Unity3D and C#. Helped create the core game loop, shaders written in ShaderGraph, overall QA and project setup.", "https://gwalraet.itch.io/volcano-brawl", "/img/volcano.png" %}
        {% projectcard "Press R", "2021", "Kenney Jam submission, a fun little platformer made together with a friend in Unity C#.", "https://eezehdev.itch.io/pressr", "/img/pressr.png" %}
    </div>
    <div class="viewall">
        <a href="/games">View all games</a>
    </div>
    <h2>Academic projects</h2>
    <div class="project-grid container">
        {% projectcardvideo "Bomberman", "2022", "Custom DirectX C++ engine. Worked on the main DirectX render logic, gameplay in C++ and shaders in HLSL (post-processing, particles, sprites, etc.)", "https://www.youtube.com/watch?v=7mh5uRZ0Lmc" %}
        {% projectcard "Bikin Ice", "2022", "Group project together with 4 other students, created the core game systems for a fun co-op game in Unity C#.", "https://lukaverhelle.itch.io/bikinice", "/img/bikinice.png" %}
        {% projectcardvideo "Burger Time", "2022", "Developed in my self made engine using C++/SDL. Wrote the core engine logic and full gameplay loop/system, featuring Co-op and PvP gamemodes.", "https://www.youtube.com/watch?v=SEvyhN2z5WI" %}
    </div>
    <div class="viewall">
        <a href="/academic">View all academics</a>
    </div>
</section>