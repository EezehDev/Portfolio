---
layout: layout.njk
title: WouterDeMoor - Burger Time
---

<article class="project-page container">
<div class="project-page-head">
    <a href="/academic">< Return to Academics</a>
    <h2 class="project-title">Burger Time Remake</h2>
</div>
<div class="project-intro">
    <iframe class="project-video"
    title="BurgerTime - Gameplay"
    src="https://www.youtube.com/embed/SEvyhN2z5WI"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
    </iframe>
    <div class="project-data">
        <div>
            <div class="data-title">Project Size</div>
            <div class="data-text">~80 hours</div>
        </div>
        <div>
            <div class="data-title">Tools &amp; Languages</div>
            <div class="data-text">C++, Visual Studio</div>
        </div>
        <div>
            <div class="data-title">Topics</div>
            <div class="data-text">
            Engine Programming </br>
            Programming Patterns
            </div>
        </div>
    </div>
</div>

<section class="project-section">
    <h3>Assignment</h3>
    <div class="project-description">
        The assignment was split into two parts: </br>
        <ul class="dot-list margin-top-small">
            <li>Create a 2D game engine using shown techniques (game loop, game design patterns, threading) </li>
            <li>Remake Burger Time using the engine</li>
        </ul>   
        </br>
        Creating the engine was the most important part, while the recreation of this game was mostly to test the engine capabilities and to test problem solving skills. While working on the gameplay, I often found my engine to be lacking features I needed so it was quite a bit of back and forth. The project was implemented following the C++ Coding Standards as much as possible.
    </div>
</section>

<section class="project-section">
    <h3>Engine Features</h3>
    <ul class="dot-list">
        <li>Game Loop (Update, FixedUpdate, Render &amp; Input)</li>
        <li>SceneGraph with GameObjects and Components</li>
        <li>2D SDL Renderer with depth sorting</li>
        <li>Input Manager using Command and pImpl</li>
        <li>Multithreaded Sound System</li>
        <li>Observer &amp; Event Queue</li>
        <li>Prefabs</li>
    </ul>
</section>

<section class="project-section">
    <h3>Implementation</h3>
    <div class="project-task-100">
        <h4>Game Loop</h4>
        <div class="task-container">
            <div>
            The core gameloop is an infinite loop with following steps:
            <ol class="number-list">
                <li>Calculate frame time</li>
                <li>Update all GameObjects and their Children / Components</li>
                <li>Render visuals to game window</li>
            </ol> </br>
            To make sure our main thread does not run all the time, we can implement a fixed or smooth framerate by using the frame time and sleeping for a short time between each iteration.</br>
            </br>
            One more important thing to keep in mind is physics and networking, these should run on a fixed interval. To implement this, simply add another loop which runs while the accumulated time exceeds a fixed timestep.
            </div>
            <div class="image-subtext-container">
                <img src="/img/burgertime_gameloop.png" alt="burgertime game loop" loading="lazy"/>
                Image from Game Programming Patterns, Robert Nystrom
            </div>
        </div>
    </div>
    <div class="project-task-100">
        <h4>Input System using pImpl</h4>
        <div class="task-container">
            <div>
            By comparing the previous controller and keyboard states it is possible to know which key is pressed, released or held this frame. </br>
            </br>
            Next, a few steps are needed to set up bindings:
            <ol class="number-list">
                <li>Create a container with keycode, keystate and command</li>
                <li>Compare container with keyboard and controller state</li>
                <li>Execute the commands</li>
            </ol> </br>
            For input actions command classes are used, as they offer an abstract interface for the input system while also being able to hold state data if needed.</br>
            </br>
            The implementation of the input system itself makes use of pImpl, allowing for changes to the implementation and underlying systems without changing the interface.
            </div>
            <div class="image-subtext-container">
                <img src="/img/burgertime_inputsystem.png" alt="burgertime inputsystem" loading="lazy"/>
                Image from Game Programming Patterns, Robert Nystrom
            </div>
        </div>
    </div>
    <div class="project-task-100">
        <h4>Subject &amp; Observer</h4>
        <div class="task-container">
            <div>
            To implement events, there needs to be a subject observer relationship. The subject needs to know who is observing, while the observer needs to be able to observe the subject. </br>
            </br>
            I chose for an easy implementation, where both Observer and Subject are base classes that can be derived from. The observer can then subscribe to any class that derives from subject, and listen for any notifications sent by the Subject.
            </div>
            <div class="image-subtext-container">
                <img src="/img/burgertime_observer.png" alt="burgertime observer" loading="lazy"/>
                Image from Game Programming Patterns, Robert Nystrom
            </div>
        </div>
    </div>
</section>

<section class="project-section">
    <h3>Useful Resources</h3>
    <div class="project-credits">
        <a href="https://isocpp.org/wiki/faq/coding-standards" target="_blank" rel="noopener noreferrer">C++ Coding Standards 1st edition (2005)</a> by Andrei Alexandrescu and Herb Sutter</br>
        <a href="https://gameprogrammingpatterns.com/" target="_blank" rel="noopener noreferrer">Game Programming Patterns</a></br>
    </div>
</section>
</article>