<script>
    export default {
        name: 'About',
    }
</script>

<template>
    <div class="main">
        <img src='../assets/About-Masthead.png' class="bg fade-in">
        <b-jumbotron class="home-jumbotron">
            <template v-slot:header>
                <div class="header"> About </div>
            </template>

            <template v-slot:lead>
                <hr class="my-4">
                <p class="container-text">
                    Information about implementation and utilized technologies. For additional information
                    <router-link :to="{ path: 'contact' }" class="link">contact</router-link>
                    Christopher.
                </p>
                <hr class="my-4">
            </template>

            <div class="description-text">
                <p class="para-separator">
                    Website produced using HTML/SASS/JS and Vue.JS
                </p>
                <p class="para-separator">
                    Website layout utilizes Vue Bootstrap and Bootstrap Styling
                </p>
                <p class="para-separator">
                    Special Thanks to Adam Landis For Additional Help
                </p>
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
        transform: scaleX(-1)
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
    .container-text
        font-size: 75%
        font-family: SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace
        color: #DDD
        padding: 0
        margin: 0
    .description-text
        font-size: 120%
        color: #DDD
    .para-separator
        margin-top: 5vh
    .email
        color: lightgrey
        text-shadow: white
        text-align: center
        font-size: 100%
        margin-top: 20px
    .link
        color: darkgray
        outline: black 1px
    @media only screen and (max-width: 690px)
        .horizontal-buttons
            display: none
    @media only screen and (min-width: 690px)
        .vertical-buttons
            display: none
</style>