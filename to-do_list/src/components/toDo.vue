<template>
    <div class="container wrapper">
        <div class="inputs">
            <input type="text" id="taskInput" placeholder="Enter a task">
            <button @click="add">Add</button>
            <div id="warning"></div>
        </div>
        <div class="list">
            <ul>
                <li v-for="(item, index) in items" v-bind:key="index" @click="erase" :class="{ active: show ===index }">
                    {{ item }}
                </li>
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
    },
    methods: {
        add()
        {//new task push to items array 
            let input = document.getElementById("taskInput");
            if(input.value != "")
            {
                this.items.push(input.value);
                input.value = "";
            }
            else//if input.value is empty, then warning must be showed!!
            {
                document.getElementById("warning").innerHTML = "Please enter a task!!"
            }
        },
        erase() //delete the item from the list
        {
            
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
#warning
{
    margin-top: 10px;
    margin-left: 10px;
    color: red;
}
</style>