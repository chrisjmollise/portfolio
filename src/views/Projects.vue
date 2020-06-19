<script>
  export default {
    name: 'Projects',
    data () {
        return {
            image1: require('@/assets/XBot Preview Image.png')
        }
    }
  }
</script>

<template>
    <div class="main">
        <img src='../assets/Projects-Masthead.png' class="bg fade-in">
        <b-jumbotron class="home-jumbotron">
            <template v-slot:header>
                <div class="header"> Projects </div>
            </template>

            <template v-slot:lead>
                <hr class="my-4">
                <p class="container-text">
                    Showcase of a Variety of Technical and Creative Projects by Christopher Mollise
                </p>
                <hr class="my-4">
            </template>

            <div class="card-container">
            <b-card no-body class="overflow-hidden project-card" style="max-width: 400px;" title-variant="card-title">
                <b-row no-gutters>
                    <b-col md="6">
                        <b-card-img :src='image1' alt="Image" class="rounded-0 card-image"/>
                    </b-col>
                    <b-col md="6">
                        <b-card-body title="X Bot">
                            <b-card-text class="card-body-text">
                                A Unity game made in 36 hours. Utilizes custom made assets and images.
                            </b-card-text>
                        </b-card-body>
                    </b-col>
                </b-row>
            </b-card>

            <b-card no-body class="overflow-hidden project-card" style="max-width: 400px;" title-variant="card-title">
                <b-row no-gutters>
                    <b-col md="6">
                        <b-card-img src="https://picsum.photos/400/400/?image=20" alt="Image" class="rounded-0 card-image"/>
                    </b-col>
                    <b-col md="6">
                        <b-card-body title="Horizontal Card">
                            <b-card-text class="card-body-text">
                                This is a wider card with supporting text as a natural lead-in to additional content.
                            This content is a little bit longer.
                            </b-card-text>
                        </b-card-body>
                    </b-col>
                </b-row>
            </b-card>

                <b-card no-body class="overflow-hidden project-card" style="max-width: 400px;" title-variant="card-title">
                    <b-row no-gutters>
                        <b-col md="6">
                            <b-card-img src="https://picsum.photos/400/400/?image=20" alt="Image" class="rounded-0 card-image"/>
                        </b-col>
                        <b-col md="6">
                            <b-card-body title="Horizontal Card">
                                <b-card-text class="card-body-text">
                                    This is a wider card with supporting text as a natural lead-in to additional content.
                                    This content is a little bit longer.
                                </b-card-text>
                            </b-card-body>
                        </b-col>
                    </b-row>
                </b-card>
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
        font-size: 90%
        font-family: SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace
        color: rgb(42, 44, 44)
        padding: 0
        margin: 15% 0 0
    .project-card
        margin: 10px 10px 10px 10px
        border-radius: 10px
        background-color: rgba(200,200,200,0.8)
    .card-title
        color: rgb(42, 44, 44)
        text-transform: uppercase
        font-size: 20px
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
    .container-text
        font-size: 75%
        font-family: SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace
        color: #DDD
        padding: 0
        margin: 0
    .description-text
        font-size: 120%
        color: #DDD
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
    @media only screen and (max-width: 690px)
        .horizontal-buttons
            display: none
    @media only screen and (min-width: 690px)
        .vertical-buttons
            display: none
    @media only screen and (min-width: 770px)
        .project-card
            height: 200px
</style>