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
</style>