<template>
  <div id="app">
      <topMenu></topMenu>

    <router-view/>
  </div>
</template>

<script>
// eslint-disable-next-line no-unused-vars
import topMenu from "./components/header.vue";
export default {
  name: 'app',
  components: {
    topMenu
  }
};

</script>


<style>
*{
  box-sizing: border-box;
}
body{
  height: 100vh;
  margin: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
}

</style>
