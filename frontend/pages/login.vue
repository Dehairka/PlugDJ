<template>
    <div class="loginPage">
        <div class="loginPage_title">
          <NuxtLink to="/" class="title">
          <img src="~/assets/svg/arrow-left.svg" alt="backButton Icon">
          <h2>Back</h2>
        </NuxtLink>
        </div>
      <div class="content">
        <div class="content_form">
          <h1>Welcome back!</h1>
          <form  @submit.prevent="goToPage('/rooms')">
            <!-- <label for="name">Name</label>
            <input type="text" name="name" id="name"> -->
            <label for="email">Email</label>
            <input type="text" name="email" id="email">
            <label for="password">Password</label>
            <input type="password" name="password" id="password">
            <input class="btn submit" type="submit" value="Sign In">
          </form>
        </div>
        <div class="content_or">
              <div class="divider"></div>
              <h2>OR</h2>
              <div class="divider"></div>
        </div>
        <div class="content_authProvider">
          <span>Sign in with</span>
          <div class="providers">
            <input disabled class="btn" type="button" value="G">
            <input disabled class="btn" type="button" value="T">
            <input disabled class="btn" type="button" value="F">
          </div>
          <span>Don't have a account? <NuxtLink class="graded" to="/register">Sign Up</NuxtLink></span>
        </div>
      </div>
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
.loginPage{
  height: 100%;
  .title{
    display: flex;
    align-items: center;
    color: $light;
    img{
      width: 30px;
      margin-right: 16px;
    }
  }

  .content{
    display: inline-flex;
    width: 100%;
    height: 100%;
    margin: auto;
    justify-content: space-between;
    align-items: center;
    // padding: 16px;

    @include big-tablet{
      flex-direction: column;
      justify-content: flex-end;
    }

    &_form{
    display: flex;
    flex-direction: column;
    justify-content: center;
    flex: 1;
    // padding: 16px;
    height: 100%;
    width: 100%;

    form{
      display: flex;
      flex-direction: column;

      label{
        margin-top: 16px;
        font-weight: 600;
      }
      input{
        background-color: transparent;
        outline: none;
        border: 2px solid $primary;
        padding: 8px;
        border-radius: 16px;
        color: $light;
        width: 100%;
        box-sizing: border-box;
        font-weight: 600;
      }
      .submit{
        margin-top: 16px;
      }
    }
  }

  &_or{
    // flex: 1;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 16px;
    .divider{
      content: '';
      height: 100%;
      width: 2px;
      background-color: rgba($color: $light, $alpha: 0.8);
    }

    @include big-tablet{
      flex-direction: row;
      justify-content: space-between;
      width: 100%;
      margin: 16px 0;
      height: auto;

      .divider{
        width: 100%;
        height: 2px;
      }
      h2{
        padding: 0 16px;
      }
    }
  }
  &_authProvider{
    // flex: 1;
    height: 100%;
    min-width: 260px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;

    span:nth-of-type(1){
      padding-bottom: 16px;
    }
    span:nth-of-type(2){
      padding-top: 16px;
    }
    .providers{
      display: flex;
      justify-content: space-between;

      .btn{
        border-radius: 8px;
      }
    }
    a{
      display: inline-flex;
      flex-direction: column;

      &:hover::after{
        background: $white;
      }
    }
    a::after{
      content: "";
      width: 100%;
      height: 1px;
      background: linear-gradient(90deg, rgba(244,107,69,1) 0%, rgba(238,168,73,1) 80%);
      position: relative;
      top: -5px;
    }

    @include big-tablet{
      justify-content: flex-start;
    }
  }
  }
    
}
</style>