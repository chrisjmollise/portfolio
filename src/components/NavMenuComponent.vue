<script>
    export default {
        name: "NavMenuComponent",
        props: ['navLinks'],
        methods: {
            routerIcon(path){
                this.$router.push(path);
            },
        },
    }
</script>

<template>
    <div>
        <div class = "top-bar">
            <b-navbar
                type="dark"
                fixed="top"
                class="nav-bar"
            >
                <img
                    src="../assets/Logo.svg"
                    alt="../assets/Logo.svg"
                    height="45px"
                    width="60px"
                />
                <b-navbar-nav>
                    <b-nav-item
                        v-for="(link,index) in navLinks"
                        :key = "index"
                        @mouseenter="$event.currentTarget.style.background = '#444'"
                        @mouseleave="$event.currentTarget.style.background = '#333'"
                        @click="routerIcon(link.path)"
                        class = "nav-separator"
                    >
                        <b-icon
                           :icon="link.icon"
                           class = "nav-item"
                        />
                        <p class = "nav-item">
                            {{ link.text }}
                        </p>
                    </b-nav-item>
                </b-navbar-nav>
            </b-navbar>
        </div>
        <div class = "side-bar">
            <b-navbar
                type="dark"
                fixed="top"
                class="nav-bar"
            >
                <div v-b-toggle.sidebar>
                    <img
                            src="../assets/Logo.svg"
                            alt="../assets/Logo.svg"
                            height="45px"
                            width="60px"
                    >
                    <b-icon
                            icon="chevron-bar-up"
                            class = "nav-item chevron when-closed"
                    />
                    <b-icon
                            icon="chevron-bar-down"
                            class = "nav-item chevron when-open"
                    />
                </div>
            </b-navbar>
            <b-sidebar
                id="sidebar"
                aria-labelledby="sidebar"
                no-header
                bg-variant="dark"
                class="side-nav-bar"
                backdrop
                shadow="true"
            >
                <b-nav vertical
                class = "top-separator">
                    <b-nav-item
                        v-for="(link,index) in navLinks"
                        :key = "index"
                        @mouseenter="$event.currentTarget.style.background = '#444'"
                        @mouseleave="$event.currentTarget.style.background ='#343a40'"
                        @click="routerIcon(link.path)"
                        class = "side-nav-separator"
                    >
                        <b-icon
                            :icon="link.icon"
                            class = "nav-item"
                        />
                        <p class = "nav-item">
                            {{ link.text }}
                        </p>
                    </b-nav-item>
                </b-nav>
            </b-sidebar>
        </div>
    </div>
</template>

<style scoped lang="sass">
    @media only screen and (max-width: 690px)
        .top-bar
            display: none
    @media only screen and (min-width: 690px)
        .side-bar
            display: none
    .nav-bar
        background-color: #333 !important
    .nav-item
        color: #DDD
        display: inline
    .nav-separator
        margin-left: 23px
    .side-nav-bar
        z-index: 1
    .side-nav-separator
        margin-top: 18px
    .top-separator
        margin-top: 50px
    .chevron
        position: absolute
        margin-left: -38px
        margin-top: 33px
    .collapsed > .when-open,
    .not-collapsed > .when-closed
        display: none
</style>