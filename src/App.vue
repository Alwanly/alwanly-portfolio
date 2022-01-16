<template>  
<div id="app">
  <aboutme />
  </div>
</template>

<script>
import Aboutme from "./components/AboutMe.vue";

export default {
  name: "App",
  components: {
    Aboutme,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: rgb(233, 229, 229);  
}
</style>
