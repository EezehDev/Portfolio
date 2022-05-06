---
layout: layout.njk
title: EezehDev - Home
---

<section class="introduction container">
    <h2 class="introduction-title">Hello and welcome! &#58398;</h2>
    <div class="introduction-text">I'm <em>Wouter De Moor</em>, a game developer who loves to both design and create gameplay and tools for games.</div>
    <div class="introduction-contact">Want to get in touch? <a href="/contact">Contact me</a>!</div>
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
                <li>Unity 2D &amp; 3D</li>
                <li>DirectX</li>
            </ul>
        </div>
        <div class="skill-div">
            <h3>Tools</h3>
            <ul class="skill-list">
                <li>Visual Studio</li>
                <li>GitHub</li>
                <li>Perforce</li>
                <li>HacknPlan</li>
                <li>Trello</li>
            </ul>
        </div>
    </div>
</section>

<section class="highlights container">
    <h2>Highlighted projects</h2>
    <div class="project-grid container">
        {% projectcard "Oogies Spacepark", "UE4 BP &Iota; September 2021", "https://enzomannaert.itch.io/oogies-spacepark", "/img/oogiesspacepark.png" %}
        {% projectcard "Volcano Brawl", "Unity C# &Iota; April 2022", "https://gwalraet.itch.io/volcano-brawl", "/img/volcano.png" %}
        {% projectcard "Press R", "Unity C# &Iota; August 2021", "https://eezehdev.itch.io/pressr", "/img/pressr.png" %}
    </div>
</section>