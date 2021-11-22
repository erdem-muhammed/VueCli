<template>
  <div id="app">
  

    <router-view/>
  </div>
</template>

<script>
// eslint-disable-next-line no-unused-vars
import header from "./components/header.vue";
export default {

}

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
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
