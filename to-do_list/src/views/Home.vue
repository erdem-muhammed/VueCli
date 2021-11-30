<template>
<div class="wrapper main">
    <topMenu></topMenu>
    <toDo></toDo>
</div>
</template>

<script>
// @ is an alias to /src


import topMenu from "../components/header.vue";
import toDo from "../components/toDo.vue";
export default {
    name: 'home',
    components: {
        topMenu,
        toDo
    }
    
}
</script>
