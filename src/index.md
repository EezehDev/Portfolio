---
layout: layout.njk
title: WouterDeMoor - Home
---

<section class="introduction container">
    <em>Game development student looking for an end-of-study internship.</em>
    <div class="introduction-text"></br></br>Mainly focus on action, combat systems and topdown gameplay using Unity or Unreal Engine, open for new challenges and opportunities!
    <div class="introduction-contact">Want to talk? Reach out to: <a href="mailto:wouter.demoor@live.be" class="introduction-mail">wouter.demoor@live.be</a></div>
</section>

<section class="highlights container">
    <h2>Game Jams</h2>
    <div class="projectcard-grid container">
        {% projectcard "Fading Light", "2022", "Adventure game made in UE5 using next gen features. Expanded my knowledge on Lumen, Nanite, AI and much more.", "/fadinglight", "fadinglight" %}
        {% projectcard "Oogies Spacepark", "2021", "Epic MegaJam submission created with 4 friends, where I worked in blueprints to develop the interaction and sound system.", "/oogiesspacepark", "oogiesspacepark" %}
        {% projectcard "Volcano Brawl", "2022", "Game jam project made using Unity3D and C#. Helped create the core game loop, shaders written in ShaderGraph, overall QA and project setup.", "/volcanobrawl", "volcano" %}
    </div>
    <div class="viewall">
        <a href="/games">View all games</a>
    </div>
    <h2>Academic projects</h2>
    <div class="projectcard-grid container">
        {% projectcard "Bomberman", "2022", "Custom DirectX C++ engine and Bomberman remake. Implementing DirectX render logic and pipeline, gameplay written in C++ and shaders in HLSL.", "/bomberman", "bomberman" %}
        {% projectcard "Bikin Ice", "2022", "Group project together with 4 other students, testing our project management and teamwork skills while developing a fun co-op game.", "/bikinice", "bikinice" %}
        {% projectcard "Burger Time", "2022", "Burger Time remake using my self made engine powered by C++/SDL. Gameplay implemented using programming design patterns (command, prototype, state, ...).", "/burgertime", "burgertime" %}
    </div>
    <div class="viewall">
        <a href="/academic">View all academics</a>
    </div>
</section>