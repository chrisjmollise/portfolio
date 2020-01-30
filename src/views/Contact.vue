<template>
  <div class="contact">
    <body id="page-top">
    <!-- Masthead -->
    <header class="masthead">
      <div class="container h-100">
        <div class="row h-100 align-items-center justify-content-center text-center">
          <div class="col-lg-10 align-self-end">
            <h1 class="text-uppercase text-white font-weight-bold">Work In Progress...</h1>
            <hr class="divider my-4">
          </div>
          <div class="col-lg-8 align-self-baseline">
            <p class="text-white-75 font-weight-light mb-5"> This page is a work in progress. <br>
              From this page users will be receive additional contact information. <br> You can
              contact Christopher Mollise at: <br>
              <a href="mailto:chrisjmollise.com?Subject=Website%Inquiry" target="_top">
                chrisjmollise@gmail.com</a></p>
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
  name: 'contact',
};
</script>

<style scoped lang="scss">
  @import "src/assets/css/creative";
  .contact {
    margin-top: 60px;
  }
  @media screen and (max-width: 759px) {
    .contact {
      margin-top: 0px;
      margin-left: 60px;
    }
  }
</style>
