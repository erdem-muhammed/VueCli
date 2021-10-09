<template>
    <div class="wrapper">
        <div class="top">
            <Photo />
            <Title :username= "$route.params.username" :fullname="fullname" />
        </div>
            <Posts />
    </div>
    
</template>

<script>
const users =
[
    { id: 0, username: "max_muster40", fullname: "Max Mustermann", email: "user@gmail.com"},
    { id: 1, username: "beauty_lena", fullname: "Lena Schmidt", email: "user@gmail.com"},
    { id: 2, username: "serios_sam", fullname: "Sam Schmitz", email: "user@gmail.com"},
    { id: 3, username: "Johnny_Bravo", fullname: "Johnny Bravo", email: "user@gmail.com"},
    { id: 4, username: "Adler_Tim", fullname: "Tim Adler", email: "user@gmail.com"},
    { id: 5, username: "Endless", fullname: "Charlotte Krüger", email: "user@gmail.com"},
]
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
  },
  computed:
  {
    fullname()
    {
        const u = this.$route.params.username;
        
        for(let user of users)
        {
            if(user.username == u)
            {
                return user.fullname;
            }
        }
        return "(user not found)";
    }
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