<script>
  import NavMenuComponent from './components/NavMenuComponent.vue';

  export default {
    name: 'App',
    components: {
      NavMenuComponent,
    },
    data: () => ({
        prevHeight: 0,
        navLinks: [
        {
            text: 'Home',
            path: '/',
            icon: 'house-door-fill',
        },
        {
            text: 'Resume',
            path: '/resume',
            icon: 'briefcase-fill',
        },
        {
            text: 'Projects',
            path: '/projects',
            icon: 'collection-fill',
        },
        {
            text: 'Contact',
            path: '/contact',
            icon: 'chat-square-fill',
        },
        {
            text: 'About',
            path: '/about',
            icon: 'info-circle-fill',
        },],
      }),
      methods: {
          beforeLeave(element) {
              this.prevHeight = getComputedStyle(element).height;
          },
          enter(element) {
              const { height } = getComputedStyle(element);

              element.style.height = this.prevHeight;

              setTimeout(() => {
                  element.style.height = height;
              });
          },
          afterEnter(element) {
              element.style.height = 'auto';
          },
      },
  }
</script>

<template>
  <div id="app">
    <NavMenuComponent
        :nav-links="navLinks"
    />
    <main class="App__main">
        <transition
            name="fade"
            mode="out-in"
            @beforeLeave="beforeLeave"
            @enter="enter"
            @afterEnter="afterEnter"
        >
            <router-view/>
        </transition>
    </main>
  </div>
</template>

<style lang = sass>
    @import url('https://fonts.googleapis.com/css2?family=Archivo+Black&display=swap')
    html
        background: linear-gradient( rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7) ), url("./assets/Home-Masthead.png") no-repeat center center fixed
        -webkit-background-size: cover
        -moz-background-size: cover
        -o-background-size: cover
        background-size: cover
    #app
        font-family: Avenir, Helvetica, Arial, 'Archivo Black', sans-serif
        -webkit-font-smoothing: antialiased
        -moz-osx-font-smoothing: grayscale
        text-align: center
        color: #2c3e50
        margin-top: 60px
    .fade-enter-active, .fade-leave-active
        transition-duration: 0.3s
        transition-property: height, opacity
        transition-timing-function: ease
        overflow: hidden
    .fade-enter, .fade-leave-active
        opacity: 0

</style>
