<template>
    <div class="wrapper">
        <div class="top">
            <Photo />
            <Title />
        </div>
            <Posts />
    </div>
</template>

<script>
import Photo from "../components/profile/photo.vue"
import Title from "../components/profile/title.vue"
import Posts from "../components/profile/post.vue"

export default 
{
  components: 
  {
    Photo,
    Title,
    Posts
  }
} 
</script>

<style scoped>
.top
{
    display: flex;
    margin-bottom: 35px;
}
</style>