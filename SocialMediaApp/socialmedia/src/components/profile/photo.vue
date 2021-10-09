<template>
    <div :style="style">
      
    </div>
</template>


<style scoped>
div
{
    width: 200px;
    height: 200px;
    border-radius: 50%;
    background-color: #ccc;
    margin-right: 35px;
    background-position: center;
    background-size: cover;
}  
</style>

<script>
export default
{
    props:
    {
        photoSource: String
    },
    computed:
    {
        style()
        {
            if(this.photoSource != "")
            {
                return "background-image: url(" + this.photoSource + ")";
            }

            return "";
        }
    }
}
</script>
