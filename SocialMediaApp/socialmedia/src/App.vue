<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/user">User</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style>
.wrapper
{
  max-width: 1000px;
  margin: 0 auto;
}
</style>
