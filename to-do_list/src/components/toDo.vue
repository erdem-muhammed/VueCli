<template>
    <div class="container wrapper">
        <div class="inputs">
            <input type="text" id="taskInput" placeholder="Enter a task">
            <button @click="add">Add</button>
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
    data() {
        return{
        items: [],
        }
    }
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
.container .inputs input{
    width: 400px;
    margin-right: 50px;
    padding: 12px 20px;
    border-radius: 8px;
    border: 2px solid #aaa;
    outline: none;
}
.container .inputs button
{
    padding: 12px 56px;
    border-radius: 8px;
    border: none;
    background-color: #009ee3;
    color: white;
    font-weight: bold;
    cursor: pointer;
}
</style>