<template>
  <div id="app">
    <div id="nav" class="wrapper">
      <router-link to="/">Home</router-link> |
      <router-link to="/user/max_muster40">Max Muster's Profil visit</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style>
.wrapper
{
  max-width: 1000px;
  margin: 0 auto;
  padding: 10px;
}
</style>
