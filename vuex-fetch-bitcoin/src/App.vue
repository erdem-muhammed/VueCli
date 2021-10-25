<template>
  <div id="app">
  Current Bitcoin Rate:
  <ul>
    <li>
      {{ c.rate }}  {{ c.name }}
    </li>
  </ul>

  Current EUR: <span> {{ euroRate.rate }} </span>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
