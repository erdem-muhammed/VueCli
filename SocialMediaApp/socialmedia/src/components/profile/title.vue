<template>
    <div>
        <h3>First Name-Surname</h3>
        <span>Username</span>
    </div>
</template>
<script>
export default
{
    props:
    {
        fullname:
        {
            type: String,
            required: true
        },
        username:
        {
            type: String,
            required: true
        }
    }
}
</script>


<style scoped>
div
{
    background-color: #ccc;
    flex-grow: 1;
    border-radius: 20px;
    padding: 25px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
}
h3
{
    margin: 0 0 8px 0;
}
</style>