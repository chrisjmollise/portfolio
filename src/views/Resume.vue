<script>
    export default {
        name: 'About',
    }
</script>

<template>
    <div class="main">
        <img src='../assets/mastheadImages/Resume-Masthead.png' class="bg fade-in">
        <b-jumbotron class="home-jumbotron">
            <template v-slot:header>
                <div class="header"> Resume </div>
            </template>

            <template v-slot:lead>
                <hr class="my-4">
                <p class="container-text">
                    Christopher's resume can be downloaded below. For additional information
                    <router-link :to="{ path: 'contact' }" class="link">contact</router-link>
                    Christopher.
                </p>
                <hr class="my-4">
            </template>

            <a class="description-text link" href="/Resume.pdf"
                       download> Download Resume
            </a>

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
        filter: brightness(30%)
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
    .para-separator
        margin-top: 5vh
    .email
        color: white
        text-shadow: white
        text-align: center
        font-size: 100%
        margin-top: 20px
    .link
        color: white
        text-shadow: 1px 1px 3px black
    @media only screen and (max-width: 690px)
        .horizontal-buttons
            display: none
    @media only screen and (min-width: 690px)
        .vertical-buttons
            display: none
</style>