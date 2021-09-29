<template>
  <div id="app">
    <header>
    <div class="wrapper">
       <div class="logo">
          <img src="./assets/logo.png" alt="">
       </div>
       <div id="nav">
          <router-link to="/">Home</router-link>
          <router-link to="/about">About</router-link>
          <router-link to="/contact">Contact</router-link>
       </div>
    </div>


    </header>
    <main>
      <router-view/>
    </main>

    <footer>
      Copyright © 2021 - ERDEM GmbH
    </footer>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
body
{
  margin: 0;
}
.wrapper
{
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 25pax;
}

#nav {
  padding: 30px;
}
header
{
  background-color: #ccc;
}
header .wrapper
{
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.logo>img
{
  height: 50px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
  margin-left: 10px;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

footer
{
  padding: 0 25px;
  background-color: #eee;
}
</style>
