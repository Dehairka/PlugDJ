<template>
    <div class="defaultLayout">
          <nav class="defaultLayout_nav">
               <div class="title pointer" @click="goToPage('/rooms')">
                    <h1>Plug.DJ</h1>
               </div>
               <!-- <ul class="content">
                 <li v-for="(link, index) in 5" :key="index">
                    <img src="~/assets/svg/home.svg" alt="icon nav">
                    <nuxt-link to="/">Home</nuxt-link>
                 </li>   
               </ul> -->
               <div class="account pointer" @click="goToPage('/')">
                    <img src="~/assets/svg/peoples.svg" alt="account icon">
               </div>
          </nav>
          <div class="defaultLayout_content">
               <slot />
          </div>
    </div>
</template>

<script>
export default {
     methods:{
          goToPage(path){
            this.$router.push(path);
          }
     }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

html,body{
   margin: 0;
   padding: 0;
   color: $light;
   font-family: 'Poppins', sans-serif;
  //  box-sizing: border-box;
//   font-size: 0.5vw;
}

.defaultLayout{
     background-color: $dark;
     // height: 100vh;

     &_nav{
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 16px;
          border-bottom: 1px solid $light;
          position: relative;
          .title{
               display: flex;
               // justify-content: center;
               // min-width: 200px;
               h1{
                    font-size: 2em;
               }
          }
          .content{
               display: flex;
               align-items: center;
               flex: 1;
               li{
                    display: flex;
                    align-items: center;
                    color: $light;
                    margin-right: 16px;
                    img{
                         width: 30px;
                         margin-right: 8px;
                    }
                    a{
                         color: $white;
                    }
               }
          }
          .account{
               display: flex;
               align-items: center;
               img{
                    width: 30px;
               }
          }
     }

     &_content{
          height: 100%;
     }
}
</style>