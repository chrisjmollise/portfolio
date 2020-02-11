<template>
  <div class="main">
    <head>
      <title>Christopher Mollise</title>
    </head>
    <body>
    <header>
      <div class = "hero">
        <h1>Work In Progress...</h1>
        <p>This page is a work in progress.
          <br>From this page users can access a digital recreation of my resume.
          <br> A copy of my resume as a pdf can be downloaded below.
          <br><br> </p>
        <a class="btn btn-resume-one" href="/Resume.pdf"
           download> Download Resume</a>
      </div>
    </header>
    </body>
  </div>
</template>

<script>
export default {
  name: 'resume',
};
</script>

<style scoped lang="scss">
  @import "src/assets/css/mycss";
  header {
    background-image: linear-gradient(rgba(0, 0, 0, 0.5)), url("../assets/img/Resume-Masthead.png");
  }
</style>
