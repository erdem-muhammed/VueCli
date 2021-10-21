<template>
    <div class="container wrapper">
       <div v-if="step==1">
        <h2>Welcome</h2>
        <div class="loginContainer">
            <input placeholder="Username" id="uName" v-model="uName">
            <input placeholder="Password" id="pw" type="password" v-model="pass">
            <button @click="login">Login</button>
            <div :class="report_class">
                {{ report }}
            </div>
        </div>
       </div> 

       <div v-else-if="step==2">
           Welcome {{ Name }}

           <div class="products">
               <button></button>
               <button></button>
               <button></button>
           </div>

           <div class="shoppingCart">
               <h3>Cart</h3>
               
           </div>
       </div>

    </div>
</template>


<script>
// eslint-disable-next-line no-unused-vars
import Cookies from 'js-cookie';
export default {
    data()
    {
        return{
            uName: "",
            pass: "",
            step: 1,
            name: "",
            report: "Invalid login data! Please try again.",
            report_class: "report hidden",
        }
    },
    methods:
    {
        login()
        {
            if(this.uName == "admin" && this.pass == "123456")
            {
                Cookies.set("logged_in", "1");
                this.step = 2;
            }
            else
            {
                this.report_class = "report";
                this.pass = "";
                document.getElementById("pw").focus();
                
                setTimeout(() => { this.report_class = "report hidden"}, 3000)
            }
        }
    }
}
</script>

<style scoped>
.container
{
    padding: 80px;
}
.container h2
{
    margin: 0 0 15px 0;
}
.loginContainer
{
    width: 350px;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    position: relative;
}
.loginContainer>input
{
    margin-bottom: 15px;
    padding: 8px 12px;
    border: none;
    border-bottom: 1px solid #aaa;
    outline: none;
}
.loginContainer>button
{
    margin-top: 10px;
    border: none;
    padding: 12px;
    outline: none;
    background-color: #111;
    color: white;
    font-weight: bold;
    cursor: pointer;
    border-radius: 8px;
    transition: 0.3s;
}
.loginContainer>button:hover
{
    background-color: white;
    color: black;
    border: 1px solid black;
    font-weight: bolder;
}

 .report
    {
        background-color: white;
        border-radius: 8px;
        padding: 12px;
        -webkit-box-shadow: 0px 0px 14px 3px rgba(0,0,0,0.15); 
        box-shadow: 0px 0px 14px 3px rgba(0,0,0,0.15);
        font-size: 0.8em;

        position: absolute;
        bottom: -60px;
        opacity: 1;

        transition: opacity 0.5s;
        border-left: 11px solid rgb(187, 0, 0);
    }
     .report.hidden
    {
        opacity: 0;
    }

</style>


