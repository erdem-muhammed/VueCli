<template>
    <header>
        <div class="wrapper">
            <div class="menu">
                <div id="logo">
                    <h1>My Website</h1>
                </div>
                <div id="nav">
                    <router-link to="/">To-Do's</router-link> 
                    <router-link to="/shoppingList">Shopping List</router-link>
                </div>
            </div>
        </div>
    </header>
</template>

<script>
export default {

}
</script>

<style>
header
{
    background-color: #111;
}
.wrapper
{
    max-width: 1000px;
    margin: 0 auto;
}
.menu
{
    display: flex;
    justify-content: space-between;
}

</style>