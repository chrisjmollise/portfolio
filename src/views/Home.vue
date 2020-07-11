<script>
  export default {
    name: 'Home',
  }
</script>

<template>
    <div class="main">
        <b-jumbotron class="home-jumbotron">
            <template v-slot:header>
                <div class="header"> Christopher Mollise </div>
            </template>

            <template v-slot:lead>
                <hr class="my-4">
                <b-container class="container-text">
                    <b-row>
                        <b-col> Developer </b-col>
                        <b-col> Programmer </b-col>
                        <b-col> Designer </b-col>
                    </b-row>
                </b-container>
                <hr class="my-4">
            </template>

            <div class="description-text">
                <p>
                    Software Developer Experienced in Object-Oriented Programming and Game Development with a Passion for Creating Innovative Software Solutions
                </p>
                <p class="para-separator">
                    Graduate from University of Nevada, Reno
                </p>
                <p class="para-separator">
                    Bachelor of Computer Science and Engineering
                </p>
            </div>

            <hr class="my-4">

            <b-container class="horizontal-buttons">
                <b-row>
                    <b-col><b-button class="home-btn" to="resume">Resume</b-button></b-col>
                    <b-col><b-button class="home-btn" to="projects">Projects</b-button></b-col>
                    <b-col><b-button class="home-btn" to="contact">Contact</b-button></b-col>
                </b-row>
            </b-container>
            <div class="vertical-buttons">
                <b-button class="home-btn home-vert-btn" to="resume">Resume</b-button>
                <b-button class="home-btn home-vert-btn" to="projects">Projects</b-button>
                <b-button class="home-btn home-vert-btn" to="contact">Contact</b-button>
            </div>

        </b-jumbotron>
    </div>
</template>

<style scoped lang="sass">
    @import url('https://fonts.googleapis.com/css2?family=PT+Mono&display=swap')
    .home-jumbotron
        position: absolute
        margin: 5% 20% 10% 20%
        width: 60%
        background-color: rgba(100,100,100,0.7)
        border-radius: 20px
    .my-4
        background-color: #DDD
        margin: 0
        padding: 0
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
        box-shadow: 2px 2px 5px black
    .home-vert-btn
        width: 90%
        height: 2.5em
        font-size: 2.5vw
        margin-bottom: 1vh
        box-shadow: 2px 2px 5px black
    .home-btn:hover
        background-color: #444
        transition: all 0.4s ease-in
    .para-separator
        margin-top: 5vh
    @media only screen and (max-width: 690px)
        .horizontal-buttons
            display: none
    @media only screen and (min-width: 690px)
        .vertical-buttons
            display: none
</style>