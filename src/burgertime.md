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
        - Create a 2D game engine using shown techniques (game loop, game design patterns, threading) </br>
        - Remake Burger Time using the engine</br>
        </br>
        Creating the engine was the most important part, while the recreation of this game was mostly to test the engine capabilities and to test problem solving skills. While working on the gameplay, I often found my engine to be lacking features I needed so it was quite a bit of back and forth. The project was implemented following the C++ Coding Standards as much as possible.
    </div>
</section>

<section class="project-section">
    <h3>Minigin Engine</h3>
    <div class="project-task-100">
        <h4>Game Loop</h4>
        <div class="task-container">
            <div>
            The core of a game loop is straightforward: in an infinite loop, update all gameobjects and render the visuals once each iteration. But this comes with a few issues: first of all, running an infinite loop will occupy a full thread without giving it much breathing room which results in a variable framerate. To lower thread workload, a fixed framerate can be used which is done by calculating the frame execution time and letting the thread sleep until the total time passed executes the frame time or optionally framerate can be smoothed by having an average fixed framerate based on execution time of last frames. For systems that need a fixed step, an extra while loop can be added which executes as long as the accumulated time exceeds the fixed timestep (also known as FixedUpdate, used for Networking and Physics).
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
            The implemented input systemn supports both keyboard and controller (using xinput). In order to check active controls, the input state needs to be checked. XInput makes this fairly easy, as it uses bitmasking allowing to easily check what is pressed, held or released on the current frame. To know which actions to execute, a container is needed which contains input bindings: which is a combination of the key/keycode, state (pressed, held, released) and the action. Each frame, all input bindings in the container will be checked and required actions are executed. The actions themselves, are implemented using the Command pattern which is essentially a class that contains an execute function that can be overriden together with some state data. Since the input works for windows only: pImpl was used, making it possible to replace the implementation without changing the abstract definition and usage of the system.
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
            To implement events, there needs to be a subject observer relationship. The subject needs to know who is observing, while the observer needs to be able to observe the subject. I chose for an easy implementation, where both Observer and Subject are base classes that can be derived from. The observer can then subscribe to any class that derives from subject, and listen for all the notifications. These notifications can be further filtered using an enum while data can be sent using a container class. One more issue exists: if the observer or subject gets destroyed the other needs to be aware. Luckily, in C++ this can easily be fixed by using weak pointers and checking if they are still valid.
            </div>
            <div class="image-subtext-container">
                <img src="/img/burgertime_observer.png" alt="burgertime observer" loading="lazy"/>
                Image from Game Programming Patterns, Robert Nystrom
            </div>
        </div>
    </div>
    <div class="project-task-100">
        <h4>Sound System</h4>
        <div class="task-container">
            <div>
            Using multithreading, the sound system will queue sounds and open channels without interferring or blocking the main game thread. This is needed because audio files can be fairly large in size and audio channels aren't opened instantly either.
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