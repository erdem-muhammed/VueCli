<template>
    <div class="container wrapper">
        <h2>Welcome</h2>
        <div class="loginContainer">
            <input placeholder="Username" id="uName">
            <input placeholder="Password" id="pw" type="password">
            <button>Login</button>
        </div>
    </div>
</template>




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
}
.loginContainer>button:hover
{
    background-color: white;
    color: black;
    border: 1px solid black;
    font-weight: bolder;
}
</style>