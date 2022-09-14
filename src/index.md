---
layout: layout.njk
title: WouterDeMoor - Home
---

<section class="introduction container">
    <h2 class="introduction-title">Hello and welcome &#128075;</h2>
    <div class="introduction-text"><em>Wouter De Moor</em> here, aspiring gameplay programmer and designer. Excited to learn all about game development and ready for the challenges ahead!</div>
    <div class="introduction-contact">Want to talk? Let's get in touch: <a href="mailto:wouter.demoor@live.be" class="introduction-mail">wouter.demoor@live.be</a></div>
</section>

<section class="skills container">
    <h2>Skills</h2>
    <div class="skills-grid">
        <div class="skill-div">
            <h3>Languages</h3>
            <ul class="skill-list">
                <li>C++</li>
                <li>C#</li>
                <li>HLSL</li>
                <li>SQL</li>
                <li>HTML &amp; CSS</li>
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
    <div class="projectcard-grid container">
        {% projectcard "Fading Light", "2022 (7 days)", "Adventure game made in UE5 using next gen features. Expanded my knowledge on Lumen, Nanite, AI and much more.", "https://eezehdev.itch.io/fading-light", "fadinglight" %}
        {% projectcard "Oogies Spacepark", "2021 (7 days)", "Epic MegaJam submission created with 4 friends, where I worked in blueprints to develop the interaction and sound system.", "https://enzomannaert.itch.io/oogies-spacepark", "oogiesspacepark" %}
        {% projectcard "Volcano Brawl", "2022 (4 days)", "Game jam project made using Unity3D and C#. Helped create the core game loop, shaders written in ShaderGraph, overall QA and project setup.", "https://gwalraet.itch.io/volcano-brawl", "volcano" %}
    </div>
    <div class="viewall">
        <a href="/games">View all games</a>
    </div>
    <h2>Academic projects</h2>
    <div class="projectcard-grid container">
        {% projectcard "Bomberman", "2022 (3 weeks)", "Custom DirectX C++ engine and Bomberman remake. Implementing DirectX render logic and pipeline, gameplay written in C++ and shaders in HLSL.", "https://www.youtube.com/watch?v=7mh5uRZ0Lmc", "bomberman" %}
        {% projectcard "Bikin Ice", "2022 (12 days)", "Group project together with 4 other students, testing our project management and teamwork skills while developing a fun co-op game.", "https://lukaverhelle.itch.io/bikinice", "bikinice" %}
        {% projectcard "Burger Time", "2022 (3 weeks)", "Burger Time remake using my self made engine powered by C++/SDL. Gameplay implemented using programming design patterns (command, prototype, state, ...).", "https://www.youtube.com/watch?v=SEvyhN2z5WI", "burgertime" %}
    </div>
    <div class="viewall">
        <a href="/academic">View all academics</a>
    </div>
</section>