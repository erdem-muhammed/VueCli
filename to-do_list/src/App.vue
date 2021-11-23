<template>
  <div id="app">
    <topMenu></topMenu>
    <div class="wrapper main">
         <h1>To-Do List</h1>  
    </div>
    <toDo></toDo>
    <router-view/>
  </div>
</template>

<script>
// eslint-disable-next-line no-unused-vars
import topMenu from "./components/header.vue";
import toDo from "./components/toDo.vue";
export default {
  name: 'app',
  components: {
    topMenu,
    toDo
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
  background-color: rgb(221, 221, 221);
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
}
.wrapper
{
  max-width: 1000px;
  margin: 0 auto;
}
.main{
  padding: 50px 0;
}
.main h1::after{
  content: "";
  display: block;
  border: 2px solid #009ee3;
  width: 120px;
}
</style>
