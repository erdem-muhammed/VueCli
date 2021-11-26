<template>
<div class="wrapper main">
    <topMenu></topMenu>
    <toDo></toDo>
</div>
</template>

<script>
import topMenu from "../components/header.vue";
import toDo from "../components/toDo.vue";
export default {
    name: 'shoppingList',
    components: {
        topMenu,
        toDo
    }
    
}
</script>