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
    <h3>Project Summary</h3>
    <div class="project-task-100">
        <h4>Navigation using Influence Map</h4>
        <div class="task-container">
            <div>
            To navigate the world, I split up the map into a grid to be used as influence map. Each tile in the grid contains an importance score based on time since visited and items inside. The AI can then use this information to decide what tile nearby is the most important to scan, upon entering a new tile the score will be recalculated. While navigating through the environment, A* pathfinding is used on a 2D navmesh together with a few movement behaviors including: seek, flee and avoid to quickly find objects and dodge enemies.
            </div>
            <img src="/gif/survivalai_navigation.gif" alt="survivalai navigation" loading="lazy"/>
        </div>
    </div>
    <div class="project-task-100">
        <h4>AI Logic</h4>
        <div class="task-container">
            <div>
            Using a Behavior Tree, the AI can follow a list of priorities which it filters through based on the information in the blackboard. Blackboard information is updated each frame using the data available in the vision range, as well as some data set through different executed tasks. The behavior tree is built up from three possible nodes: selectors, sequences and conditionals. To give the AI more to work with, I set up an inventory and item memory system: which tracked all previously seen items in a container together with their values and sorted all the current items to only keep top priority ones and save inventory space when needed.
            </div>
            <img src="/gif/survivalai_logic.gif" alt="survivalai logic" loading="lazy"/>
        </div>
    </div>
</section>
</article>