<template>
  <div class="home">
    <body id="page-top">
    <!-- Masthead -->
    <header class="masthead">
      <div class="container h-100">
        <div class="row h-100 align-items-center justify-content-center text-center">
          <div class="col-lg-10 align-self-end">
            <h1 class="text-uppercase text-white font-weight-bold">Christopher Mollise</h1>
            <hr class="divider my-4">
          </div>
          <div class="col-lg-8 align-self-baseline">
            <p class="text-white-75 font-weight-light mb-5"> Programmer and Makerspace Professional
              <br>Computer Science Student at University
              of Nevada, Reno. <br> Makerspace Technician at the Delamare Library</p>
            <a class="btn btn-primary btn-xl js-scroll-trigger" href="/resume">Resume</a>
            <a class="btn btn-primary btn-xl js-scroll-trigger" href="/projects">Projects</a>
            <a class="btn btn-primary btn-xl js-scroll-trigger" href="/about">Contact</a>
            <i class="fab fa-github"></i>
          </div>
        </div>
      </div>
    </header>

    <!-- Footer -->
    <footer class="bg-light py-5">
      <div class="container">
        <div class="small text-center text-muted">Website by Christopher Mollise</div>
      </div>
    </footer>

    </body>
  </div>
</template>

<script>
export default {
  name: 'home',
};
</script>

<style scoped lang="scss">
  @import "src/assets/css/creative";
  .home {
    margin-top: 60px;
  }
  @media screen and (max-width: 759px) {
    .home {
      margin-top: 0px;
      margin-left: 60px;
    }
  }
</style>
