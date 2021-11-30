<template>

<div class="wrapper main">
     <h1>Shopping List</h1>  
    <toDo></toDo>
</div>

</template>

<script>
//import topMenu from "../components/header.vue";
import toDo from "../components/toDo.vue";
export default {
    name: 'shoppingList',
    components: {
        toDo
    }
};
</script>

<style>

</style>