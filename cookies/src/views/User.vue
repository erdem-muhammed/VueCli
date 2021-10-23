<template>
    <div class="container wrapper">
       <div v-if="step==1">
        <h2>Welcome</h2>
        <div class="loginContainer">
            <input placeholder="Username" id="uName" v-model="uName">
            <input placeholder="Password" id="pw" type="password" v-model="pass">
            <button @click="login" :class="btn_class" :disabled="btn_disabled">
                <span>Login</span>
            </button>
            <div :class="report_class">
                {{ report }}
            </div>
        </div>
       </div> 

       <div v-else-if="step==2">
            <Shop />
       </div>
    </div>
</template>


<script>
// eslint-disable-next-line no-unused-vars
import Cookies from 'js-cookie';
// eslint-disable-next-line no-unused-vars
import Shop from "../components/Shop.vue";

export default {
    created()
    {
        if(Cookies.get("logged_in") == "1")
            this.step = 2;
    },
    mounted()
    {
        if(this.step == 1)
            document.getElementById("uNAme").focus();
    },
    components:
    {
        Shop
    },
    data()
    {
        return{
            uName: "",
            pass: "",
            step: 1,
            name: "ERDEM",
            report: "Invalid login data! Please try again.",
            report_class: "report hidden",
            btn_class: "",
            btn_text_op: 1,
            btn_disabled: false
        }
    },
    methods:
    {
        login()
        {
            this.btn_class = "loading";
            this.btn_disabled = true;

            fetch("http://localhost/login.php?username=" + this.uName + "&password=" + this.pass)
            .then(answer => answer.text())
            .then(answer =>
            {
                if(answer == "1");
                {
                    Cookies.set("logged_in", "1");
                    this.step = 2;
                }
                /*else if(answer == "0") 
                {
                    this.report_class = "report";
                    setTimeout(() => { this.report_class = "report hidden"}, 3000)
                }*/
                /*else
                {
                    //Server-ERROR
                }*/
            })
            .catch(() =>
            {

            })
            .finally(() =>
            {
                this.btn_class = "";
                this.btn_disabled = false;
            });  
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
.loading>span
{
    opacity: 0;
}
.loading::after
{
    content: "";
    position: absolute;
    width: 16px;
    height: 16px;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    border: 4px solid transparent;
    border-top-color: #ffffff;
    border-radius: 50%;
    animation: btn-animation 1s ease infinite;
}
@keyframes btn-animation
{
  from
  {
    transform: rotate(0turn);
  }

  to
  {
    transform: rotate(1turn);
  }
}
</style>


