<template>
    <div class="container wrapper">
        <div class="inputs">
            <input type="text" placeholder="Enter a task">
            <button>ADD</button>
        </div>
        <div class="toDos">
            <ul>
                <li></li>
            </ul>
        </div>

    </div>
</template>


<script>
export default {
    
}
</script>

<style scoped>
.container{
    height: 400px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.4)  ; 
    background-color: white;
    border-radius: 8px;
    padding: 30px 50px;
}

</style>