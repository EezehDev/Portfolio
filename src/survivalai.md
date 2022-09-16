---
layout: layout.njk
title: WouterDeMoor - Survival AI
---

<article class="project-page container">
<div class="project-page-head">
    <a href="/academic">< Return to Academics</a>
    <h2 class="project-title">Survival AI</h2>
</div>
<div class="project-intro">
    <iframe class="project-video"
    title="Gameplay Programming - Survival AI"
    src="https://www.youtube.com/embed/LCP1br3KekM"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
    </iframe>
    <div class="project-data">
        <div>
            <div class="data-title">Project Size</div>
            <div class="data-text">~40 hours</div>
        </div>
        <div>
            <div class="data-title">Tools &amp; Languages</div>
            <div class="data-text">C++</div>
        </div>
        <div>
            <div class="data-title">Topics</div>
            <div class="data-text">
            Gameplay Programming </br>
            AI &amp; Navigation
            </div>
        </div>
    </div>
</div>

<section class="project-section">
    <h3>Assignment</h3>
    <div class="project-description">
        Using the seen topics, we were tasked to write the best AI for an agent in a survival game scenario. The AI is only given information about what is inside the vision cone. By gathering items it can stay alive and defend itself, while trying to achieve the best highscore.
        </br></br>
        This was one of my favorite projects, as it was essentially combining the interesting topics with a game. It was also a great learning experience to further understand how to use behavior trees and blackboards in combination with tasks to drive an AI.
    </div>
</section>

<section class="project-section">
    <h3>Project Features</h3>
    <ul class="dot-list">
        <li>A* Pathfinding</li>
        <li>Behavior Tree &amp; Blackboard</li>
        <li>Influence Maps</li>
        <li>C++ Algortihms</li>
    </ul>
</section>

<section class="project-section">
    <h3>Project Summary</h3>
    <div class="project-task-100">
        <h4>Navigation using Influence Map</h4>
        <div class="task-container">
            <div>
            To navigate the world, I split up the map into a grid to be used as influence map.</br>
            </br>
            Each tile in the grid contains:</br>
            <ul class="dot-list">
                <li>Time since last visit</li>
                <li>Items inside</li>
            </ul></br>
            The AI can then use this information to decide what tile nearby is the most important to scan, upon entering a new tile the score will be recalculated.
            </div>
            <img src="/gif/survivalai_navigation.gif" alt="survivalai navigation" loading="lazy"/>
        </div>
    </div>
    <div class="project-task-100">
        <h4>AI Logic</h4>
        <div class="task-container">
            <div>
            Using a Behavior Tree, the AI can follow a list of priorities which it filters through based on the information in the blackboard. Blackboard information is updated each frame using the data available in the vision range, as well as some data set through different executed tasks.</br>
            </br>
            The behavior tree is built up from three possible nodes:
            <ol class="number-list">
                <li>Selectors</li>
                <li>Sequences</li>
                <li>Conditionals</li>
            </ol></br>
            To further improve the AI: I set up an inventory and item memory system which keeps track of all previously seen items and sorts all the equipped items to save inventory space when needed.
            </div>
            <img src="/gif/survivalai_logic.gif" alt="survivalai logic" loading="lazy"/>
        </div>
    </div>
</section>
</article>