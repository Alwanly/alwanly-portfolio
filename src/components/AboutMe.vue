<template>
  <div id="header" class="container-fluid p-5">
    <div id="card" class="row justify-content-center mt-5">
      <div class="col-sm-4">
        <img src="../assets/Alwan.png" alt="Alwan" class="img-profile" />
      </div>
      <div class="col-sm-4 text-left description-container">
        <p class="font-weight-bold">Hello, I'm</p>
        <h3 class="font-weight-bold">Alwan Alyafi Mulyawan</h3>
        <p>
          I’m passionate about Software Engineering and building great products
          that make people’s lives easier. I have experience in backend
          development especially using Nodejs, Expressjs, and Laravel. For
          frontend development, I usually use Vuejs. I also have experience in
          managing database systems such as MySQL and MongoDB.
        </p>
        <a
          href="https://www.linkedin.com/in/alwanly/"
          class="btn btn-link text-dark"
        >
          <b-icon icon="linkedin"></b-icon>
        </a>
        <a href="https://github.com/Alwanly/" class="btn btn-link text-dark">
          <b-icon icon="github"></b-icon>
        </a>
        <a href="https://twitter.com/Alwanley" class="btn btn-link text-dark">
          <b-icon icon="twitter"></b-icon>
        </a>
        <a
          href="https://www.instagram.com/alwanly/"
          class="btn btn-link text-dark"
        >
          <b-icon icon="instagram"></b-icon>
        </a>
        <a
          href="https://www.facebook.com/alwan.mulyawan"
          class="btn btn-link text-dark"
        >
          <b-icon icon="facebook"></b-icon>
        </a>
        <hr />
        <a
          href="https://mail.google.com/mail/u/0/?view=cm&amp;fs=1&amp;tf=1&amp;to=dev.alwanly@gmail.com"
          class="btn btn-info mr-3"
          target="_blank"
        >
          Hire Me
        </a>
        <a
          href="https://www.linkedin.com/in/alwanly/"
          class="btn btn-outline-info"
          target="_blank"
        >
          Portfolio
        </a>
      </div>
    </div>
  </div>
</template>
<script>
export default {  
  name: "About-Me",
  created() {
    document.title = "Alwanly-Protfolio";
  },
};
</script>

<style scoped>
#header {
  min-height: 100vh;
}
.img-profile {
  vertical-align: middle;
  width: 400px;
  height: 400px;
  border-radius: 50%;
}
</style>