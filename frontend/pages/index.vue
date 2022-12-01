<template>
    <div class="homePage">
            <div class="homePage_description">
                <h1>Plug.DJ</h1>
                <p>Plug.DJ is the best music streaming app to enjoy great music. Play any song of your favorite artist, album or playlist in high quality. Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, ipsam sequi dolore voluptas minus quia deserunt praesentium eos iure quo modi.</p>
            </div>
            <div class="homePage_login">
                <input @click="goToPage('/register')" class="btn" type="button" value="Sign Up">
                <input @click="goToPage('/login')" class="btn btn--outline" type="button" value="Sign In">
            </div>
            <div class="gapBottom"></div>
    </div>
</template>

<script>
definePageMeta({
  layout: "login",
})

export default {
    methods: {
        goToPage(path){
            this.$router.push(path);
        }
    }
}
</script>

<style lang="scss" scoped>
.homePage{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        text-align: center;
        height: 100%;
        background-color: $dark;
        // overflow-y: auto;
        // overflow-x: hidden;
        &_description{
        }
        &_login{
            width: 100%;
            display: flex;

            input{
                flex: 1;
                margin: 8px;
            }

            @include tablet{
                flex-direction: column;
            }
        }
        .gapBottom{
            content: "";
        }
}
</style>