<template>
    <div class="loginLayout">
        <img class="loginLayout_background" src="~/assets/img/background.jpg" alt="background">
        <!-- <nuxt-img class="homePage_background" src="/assets/img/background.jpg"/> -->
        <img class="rectangleDeco" src="~/assets/svg/login_rectangle.svg" alt="rectangle svg">
        <img class="formDeco" id="form1" src="~/assets/svg/index_form1.svg" alt="form decoration svg">
        <img class="formDeco" id="form2" src="~/assets/svg/index_form2.svg" alt="form decoration svg">
        <img class="formDeco" id="form3" src="~/assets/svg/index_form3.svg" alt="form decoration svg">
        <div class="loginLayout_content">
            <slot />
        </div>
        <div class="clear"></div>
    </div>
</template>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

html,body{
   margin: 0;
   padding: 0;
   color: $light;
   font-family: 'Poppins', sans-serif;
//    background-color: red;
   background-color: $dark;
  //  box-sizing: border-box;
}

.loginLayout{
    background-color: $dark;
    height: 100vh;
    // overflow: hidden;

    .loginLayout > .clear {
        clear: both;
        height: 0; overflow: hidden; /* Précaution pour IE 7 */
        }

    &_background{
        width: 100%;
        height: 30vh;
        object-fit: cover;
        object-position: 0% 60%;

        // @include horizontal{
        //     height: 20vh;
        // }
    }

    .rectangleDeco{
            position: absolute;
            z-index: 1;
            top: 7vh;
            left: 0;
            width: 100%;
            @include big-tablet{
                top: 20vh;
            }
            @include tablet{
                top: 22vh;
            }
            // @include horizontal{
            //     top: -15vh;
            // }
        }
    .formDeco{
        position: fixed;
        z-index: 50;

        &#form1{
            width: 8vw;
            top: 10vh;
            right: 0;
            position: absolute;
        }

        &#form2{
            width: 10vw;
            bottom: 0;
            right: 0;
        }

        &#form3{
            width: 10vw;
            bottom: 0;
            left: 0;
        }

        @include big-tablet{
            &#form1{
                top: 10vh;
                width: 15vw;
            }
            &#form2, &#form3{
                width: 15vw;
            }
        }
        @include phone-only{
            &#form1{
                top: 15vh;
                width: 20vw;
            }
            &#form2, &#form3{
                width: 30vw;
            }
        }
    }

    &_content{
        height: 67vh;
        position: relative;
        z-index: 2;
        padding: 16px;
        width: 66%;
        margin: auto;
        // overflow: auto;
        max-height: 70vh;

        @include big-tablet{
            width: 66%;
        }
        @include tablet{
            width: 80%;
        }
        @include phone-only{
            width: 100%;
        }
    }
}
</style>