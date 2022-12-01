<template>
    <div class="room pointer">
        <div class="room_content">
            <h3><NuxtLink to="/rooms/idOfRoom">My Room</NuxtLink></h3>
            <p class="description">Description of the room</p>
            <span class="access">Link Only</span>
            <div class="creator">
                <img src="~/assets/svg/peoples.svg" alt="creator icon">
                <span>Dehairka</span>
            </div>
            <div class="peoples">
                <img src="~/assets/svg/peoples.svg" alt="peoples icon">
                <span>6</span>
            </div>
        </div>
        <img class="background" src="~/assets/img/background.jpg" alt="background of the room">
    </div>
</template>

<style lang="scss" scoped>
.room{
    position: relative;
    z-index: 3;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    border: 2px solid transparent;
    transition: border 0.4s;

    &:hover{
        border: 2px solid $primary;
    }
    
    &_content{
        background-color: rgba($color: $black, $alpha: 0.6);
        padding: 16px;
        border-radius: 16px;
        h3{}
        .description{}
        .access{
            color: $primary;
        }
        .creator, .peoples{
            display: flex;
            img{
                width: 20px;
                margin-right: 8px;
            }
        }
    }
    .background{
        position: absolute;
        z-index: -1;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 16px;
    }
}
</style>