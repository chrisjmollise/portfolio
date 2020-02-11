<template>
  <div class="main">
    <head>
      <title>Christopher Mollise</title>
    </head>
    <body>
      <header>
        <div class = "hero">
          <h1>Christopher Mollise</h1>
          <p>Programmer and Makerspace Professional
            <br>Computer Science Student at University
            of Nevada, Reno.
            <br> Makerspace Technician at the Delamare Library</p>
            <div class = "button">
              <router-link :to="'/resume'">
                <a class = "btn btn-home-one">Resume</a>
              </router-link>
              <router-link :to="'/projects'">
                <a class = "btn btn-home-two">Projects</a>
              </router-link>
              <router-link :to="'/contact'">
                <a class = "btn btn-home-three">Contact</a>
              </router-link>
            </div>
        </div>
       </header>
    </body>
  </div>
</template>

<script>
export default {
  name: 'home',
};
</script>

<style scoped lang="scss">
  @import "src/assets/css/mycss";
  header {
    background-image: linear-gradient(rgba(0, 0, 0, 0.5)), url("../assets/img/Home-Masthead.png");
  }
</style>
