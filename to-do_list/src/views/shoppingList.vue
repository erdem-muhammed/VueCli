<template>
<div>
    <topMenu></topMenu>
<div class="wrapper main">
     <h1>Shopping List</h1>  
    <toDo></toDo>
</div>

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