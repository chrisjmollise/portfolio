<script>
  export default {
    name: 'Projects',
    data () {
        return {
            image1: require('@/assets/projectImages/StartUpNV-Preview.png'),
            image2: require('@/assets/projectImages/Portfolio-Preview.png'),
            image3: require('@/assets/projectImages/RockProject-Preview.png'),
            image4: require('@/assets/projectImages/XBot-Preview.png'),
            image5: require('@/assets/projectImages/Osiris-Preview.png'),
            image6: require('@/assets/projectImages/OGRE-Preview.png'),
            image7: require('@/assets/projectImages/UnityEngine-Preview.png'),
            image8: require('@/assets/projectImages/VR-Preview.png'),
            image9: require('@/assets/projectImages/Database-Preview.png'),
            image10: require('@/assets/projectImages/Sudoku-Preview.png')
        }
    }
  }
</script>

<template>
    <div class="main">
        <img
            src='../assets/mastheadImages/Projects-Masthead.png'
            alt="Image"
            class="bg fade-in"
        >
        <b-jumbotron class="home-jumbotron">
            <template v-slot:header>
                <div class="header">
                    Projects
                </div>
            </template>

            <template v-slot:lead>
                <hr class="my-4">
                <p class="container-text">
                    Showcase of a Variety of Technical and Creative Projects by Christopher Mollise
                </p>
                <hr class="my-4">
            </template>

            <div class="card-container">


                <!--SENIOR PROJECT-->


                <a href="https://landeaux.github.io/spawa-pweb/">
                    <b-card
                        no-body
                        class="overflow-hidden project-card"
                        style="max-width: 400px; cursor: pointer"
                        title-variant="card-title"
                    >
                        <b-row no-gutters>
                            <b-col md="6">
                                <b-card-img
                                    :src ="image1"
                                    alt="Image"
                                    class="rounded-0 card-image"
                                />
                            </b-col>
                            <b-col md="6">
                                <b-card-body title="StartUpNV Web Application">
                                    <b-card-text class="card-body-text">
                                        Senior project to create a professional website utilizing the VENOM web stack.
                                    </b-card-text>
                                </b-card-body>
                            </b-col>
                        </b-row>
                    </b-card>
                </a>


                <!--Portfolio Website-->


                <a @click="$router.push('/about')">
                    <b-card
                        no-body
                        class="overflow-hidden project-card"
                        style="max-width: 400px; cursor: pointer"
                        title-variant="card-title"
                    >
                        <b-row no-gutters>
                            <b-col md="6">
                                <b-card-img
                                    :src ="image2"
                                    alt="Image"
                                    class="rounded-0 card-image"
                                />
                            </b-col>
                            <b-col md="6">
                                <b-card-body title="Portfolio Website">
                                    <b-card-text class="card-body-text">
                                        Professional portfolio made with HTML/SASS/JS and Vue.JS.
                                    </b-card-text>
                                </b-card-body>
                            </b-col>
                        </b-row>
                    </b-card>
                </a>


                <!--ROCK PROJECT CARD-->


                <b-card
                        no-body
                        class="overflow-hidden project-card"
                        style="max-width: 400px; cursor: pointer"
                        title-variant="card-title"
                        v-b-modal.Rock-Modal
                >
                    <b-row no-gutters>
                        <b-col md="6">
                            <b-card-img
                                    :src ="image3"
                                    alt="Image"
                                    class="rounded-0 card-image"
                            />
                        </b-col>
                        <b-col md="6">
                            <b-card-body title="Automated Rock Fragmentation Size Analysis">
                                <b-card-text class="card-body-text">
                                    Unreal Engine project for UNR's Mining Automation and Robotics Lab.
                                </b-card-text>
                            </b-card-body>
                        </b-col>
                    </b-row>
                </b-card>

                <b-modal
                        id="Rock-Modal"
                        centered
                        title="Automated Rock Fragmentation Size Analysis"
                        hide-footer
                        size="xl"
                        scrollable
                        modal-class="project-modal"
                        header-text-variant="light"
                        body-text-variant="light"
                >
                    <youtube
                            video-id="ZLTuLDBbz-E"
                            player-width="100%"
                    />
                    <hr class="my-4">
                    <p class="modal-text">
                        Unreal Project created for UNR's Mining Automation and Robotics Lab.
                        The main purpose of this project is to create segmentation masks
                        for use in training a computer vision program. This program will find the size of
                        rock fragments for use in mining equipment. The project was created
                        with a series of technologies including an Artec Spider 3D scanner to
                        create realistic rock models and textures, Blender to create morph
                        targets to create varying data, and Unreal Engine to simulate the
                        different piles and create the masks. This project was an attempt
                        to understand the possible methods of creating data such that
                        more complicated iterations could be created for research.
                    </p>
                </b-modal>


                <!--X BOT GAME CARD-->


                <b-card
                    no-body
                    class="overflow-hidden project-card"
                    style="max-width: 400px; cursor: pointer"
                    title-variant="card-title"
                    v-b-modal.XBot-Modal
                >
                    <b-row no-gutters>
                        <b-col md="6">
                            <b-card-img
                                :src ="image4"
                                alt="Image"
                                class="rounded-0 card-image"
                            />
                        </b-col>
                        <b-col md="6">
                            <b-card-body title="Cross Bot">
                                <b-card-text class="card-body-text">
                                    Unity game created in 36 hours featuring custom assets and designs.
                                </b-card-text>
                            </b-card-body>
                        </b-col>
                    </b-row>
                </b-card>

                <b-modal
                    id="XBot-Modal"
                    centered
                    title="Cross Bot"
                    hide-footer
                    size="xl"
                    scrollable
                    modal-class="project-modal"
                    header-text-variant="light"
                    body-text-variant="light"
                >
                    <youtube
                        video-id="wKqx3ksq5Zg"
                        player-width="100%"
                    />
                    <hr class="my-4">
                    <p class="modal-text">
                        Unity project created for UNR's CS 381 Game Engine Architecture.
                         Produced in 36 hours, this project is a complete game
                        containing hand made assets including 3D models and textures as
                        well as UI and images. Projects makes use of royalty free sounds
                        and secondary assets.
                    </p>
                </b-modal>


                <!--OSIRIS GAME CARD-->


                <b-card
                    no-body
                    class="overflow-hidden project-card"
                    style="max-width: 400px; cursor: pointer"
                    title-variant="card-title"
                    v-b-modal.Osiris-Modal
                >
                    <b-row no-gutters>
                        <b-col md="6">
                            <b-card-img
                                :src ="image5"
                                alt="Image"
                                class="rounded-0 card-image"
                            />
                        </b-col>
                        <b-col md="6">
                            <b-card-body title="Osiris">
                                <b-card-text class="card-body-text">
                                    Unreal Engine game featuring hand-made custom made assets and level design.
                                </b-card-text>
                            </b-card-body>
                        </b-col>
                    </b-row>
                </b-card>

                <b-modal
                        id="Osiris-Modal"
                        centered
                        title="Osiris"
                        hide-footer
                        size="xl"
                        scrollable
                        modal-class="project-modal"
                        header-text-variant="light"
                        body-text-variant="light"
                >
                    <youtube
                            video-id="4wk7zRV4Ujo"
                            player-width="100%"
                    />
                    <hr class="my-4">
                    <p class="modal-text">
                        Unreal Project for UNR's CS 328 Game Design class. This game
                        features a simple game play loop with custom made environments
                        and level design. These assets make use of Unreal Engines material
                        editor and explores Unreal's blueprint system.
                    </p>
                </b-modal>


                <!--OGRE GAME ENGINE DEMO CARD-->


                <a href="https://github.com/chrisjmollise/Ogre-Game-Engine">
                <b-card
                    no-body
                    class="overflow-hidden project-card"
                    style="max-width: 400px; cursor: pointer"
                    title-variant="card-title"
                >
                    <b-row no-gutters>
                        <b-col md="6">
                            <b-card-img
                                :src ="image6"
                                alt="Image"
                                class="rounded-0 card-image"
                            />
                        </b-col>
                        <b-col md="6">
                            <b-card-body title="Game Engine Simulation - OGRE">
                                <b-card-text class="card-body-text">
                                    Game engine simulation made with OGRE and C++. Simulates major asset managers.
                                </b-card-text>
                            </b-card-body>
                        </b-col>
                    </b-row>
                </b-card>
                </a>

                <!--UNITY GAME ENGINE DEMO CARD-->


            <b-card
                    no-body
                    class="overflow-hidden project-card"
                    style="max-width: 400px; cursor: pointer"
                    title-variant="card-title"
                    v-b-modal.Simulation-Modal
            >
                <b-row no-gutters>
                    <b-col md="6">
                        <b-card-img
                                :src ="image7"
                                alt="Image"
                                class="rounded-0 card-image"
                        />
                    </b-col>
                    <b-col md="6">
                        <b-card-body title="Game Engine Simulation - Unity">
                            <b-card-text class="card-body-text">
                                Game engine simulation made with Unity and C#. Simulates major asset managers.
                            </b-card-text>
                        </b-card-body>
                    </b-col>
                </b-row>
            </b-card>

                <b-modal
                        id="Simulation-Modal"
                        centered
                        title="Game Engine Simulation - Unity"
                        hide-footer
                        size="xl"
                        scrollable
                        modal-class="project-modal"
                        header-text-variant="light"
                        body-text-variant="light"
                >
                    <youtube
                            video-id="19WcSKey7hw"
                            player-width="100%"
                    />
                    <hr class="my-4">
                    <p class="modal-text">
                        Unity project created for UNR's CS 381 Game Engine Architecture.
                        This program simulates multiple aspects of a game engine such as
                        the Input, Graphics, and Asset managers. This project explores
                        what a game engine does without using Unity's prebuilt
                        systems for physics and other management.
                    </p>
                </b-modal>

            <!--VR CAMPUS TOUR APPLICATION-->


            <b-card
                    no-body
                    class="overflow-hidden project-card"
                    style="max-width: 400px; cursor: pointer"
                    title-variant="card-title"
                    v-b-modal.VR-Modal
            >
                <b-row no-gutters>
                    <b-col md="6">
                        <b-card-img
                                :src ="image8"
                                alt="Image"
                                class="rounded-0 card-image"
                        />
                    </b-col>
                    <b-col md="6">
                        <b-card-body title="VR Campus Tour Application">
                            <b-card-text class="card-body-text">
                                Unity project investigating Google Cardboard VR and assistive technology.
                            </b-card-text>
                        </b-card-body>
                    </b-col>
                </b-row>
            </b-card>


                <b-modal
                        id="VR-Modal"
                        centered
                        title="VR Campus Tour Application"
                        hide-footer
                        size="xl"
                        scrollable
                        modal-class="project-modal"
                        header-text-variant="light"
                        body-text-variant="light"
                >
                    <youtube
                            video-id="yvh4Xa4pC4Q"
                            player-width="100%"
                    />
                    <hr class="my-4">
                    <p class="modal-text">
                        This projects goal was to understand how Unity can be used for
                        creating VR applications as well as understanding VR's use in
                        creating assistive technology. This program makes use of images
                        made using a 3D camera and uses them to create a tour of UNR's
                        campus. This project is a proof of concept that could be expanded
                        into a full campus tour. The main target of this project was for
                        students whose mobility may not allow a comprehensive tour of a
                        college campus or for students not able to visit the campus before
                        their education begins.
                    </p>
                </b-modal>

            <!--DATABASE PROJECT CARD-->

                <a href="https://github.com/chrisjmollise/database-simulation">
            <b-card
                    no-body
                    class="overflow-hidden project-card"
                    style="max-width: 400px; cursor: pointer"
                    title-variant="card-title"
            >
                <b-row no-gutters>
                    <b-col md="6">
                        <b-card-img
                                :src ="image9"
                                alt="Image"
                                class="rounded-0 card-image"
                        />
                    </b-col>
                    <b-col md="6">
                        <b-card-body title="Database Simulator Program">
                            <b-card-text class="card-body-text">
                                C++ project simulating aspects of SQL and relational databases.
                            </b-card-text>
                        </b-card-body>
                    </b-col>
                </b-row>
            </b-card>
                </a>


            <!--SUDOKU GAME SOLVER CARD-->

                <a href="https://github.com/chrisjmollise/sudoku-solver">
            <b-card
                    no-body
                    class="overflow-hidden project-card"
                    style="max-width: 400px; cursor: pointer"
                    title-variant="card-title"
            >
                <b-row no-gutters>
                    <b-col md="6">
                        <b-card-img
                                :src ="image10"
                                alt="Image"
                                class="rounded-0 card-image"
                        />
                    </b-col>
                    <b-col md="6">
                        <b-card-body title="Sudoku Game Solver">
                            <b-card-text class="card-body-text">
                                C++ project investigating data structures and algorithms for solving Sudoku puzzles.
                            </b-card-text>
                        </b-card-body>
                    </b-col>
                </b-row>
            </b-card>
                </a>
            </div>
        </b-jumbotron>
    </div>
</template>

<style scoped lang="sass">
    @import url('https://fonts.googleapis.com/css2?family=PT+Mono&display=swap')
    .bg
        position: fixed
        top: 0
        bottom: 0
        left: 0
        right: 0
        min-width: 100%
        min-height: 100%
        margin: auto
        overflow: auto
        filter: brightness(40%)
    .fade-in
        opacity: 1
        animation-name: fadeInOpacity
        animation-iteration-count: 1
        animation-timing-function: ease-in
        animation-duration: 0.5s
    @keyframes fadeInOpacity
        0%
            opacity: 0
        100%
            opacity: 1
    .home-jumbotron
        position: absolute
        margin: 5% 10% 10% 10%
        width: 80%
        background-color: rgba(100,100,100,0.7)
        border-radius: 20px
    .card-container
        display: flex
        flex-wrap: wrap
        justify-content: center
    .card-body-text
        font-size: 80%
        font-family: SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace
        color: rgb(42, 44, 44)
        padding: 0
        margin: 15% 0 0
        text-align: justify-all
    .project-card
        margin: 10px 10px 10px 10px
        border-radius: 10px
        background-color: rgba(200,200,200,0.8)
        box-shadow: 1px 1px 10px black
    .card-title
        color: rgb(42, 44, 44)
        text-transform: uppercase
        font-size: 17px
        font-family: 'PT Mono', monospace
    .my-4
        background-color: #DDD
        margin: 0
        padding: 0
    .card-image
        height: 200px
        width: 100%
        filter: brightness(85%)
    .header
        color: #DDD
        text-transform: uppercase
        font-size: 4vw
        font-family: 'PT Mono', monospace
        text-shadow: 1px 1px 3px black
    .container-text
        font-size: 75%
        font-family: SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace
        color: #DDD
        padding: 0
        margin: 0
        text-shadow: 1px 1px 3px black
    .description-text
        font-size: 120%
        color: #DDD
        text-shadow: 1px 1px 3px black
    .home-btn
        background-color: rgba(0,0,0,0.5)
        border-radius: 0.4rem
        border: 1px solid white
        color: white
        font-family: SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace
        width: 12vw
        height: 2.5em
        font-size: 100%
    .home-vert-btn
        width: 90%
        height: 2.5em
        font-size: 2.5vw
        margin-bottom: 1vh
    .home-btn:hover
        background-color: #444
        transition: all 0.4s ease-in
    .para-separator
        margin-top: 5vh
    /deep/ .project-modal  > .modal-dialog > .modal-content
        border-radius: 15px
        background-color: rgba(150,150,150,0.9)
        font-family: SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace
        text-shadow: 1px 1px 2px black
    @media only screen and (max-width: 690px)
        .horizontal-buttons
            display: none
    @media only screen and (min-width: 690px)
        .vertical-buttons
            display: none
    @media only screen and (min-width: 770px)
        .project-card
            height: 200px
    a
        text-decoration: none
    .modal-text
        text-align: justify-all
        text-shadow: 3px 3px 10px black
</style>