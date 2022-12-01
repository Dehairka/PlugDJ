<template>
    <div class="roomPage">
        <!-- <h2>Room id : {{$route.params.id}}</h2> -->
        <div class="roomPage_content">
            <div class="player">
                player
            </div>
            <RoomNav class="nav"></RoomNav>
        </div>
        <RoomTchat class="roomPage_tchat"></RoomTchat>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.roomPage{
        height: 92.4vh;
        // padding: 16px;
        display: flex;
        width: 100%;

        @include big-tablet{
            flex-direction: column;
            height: 100%;
        }

        &_content{
            display: flex;
            flex-direction: column;
            // justify-content: space-between;
            flex: 1;
            // background-color: green;
            .player{
                height: 100vh;
                // background-color: yellow;
            }
            .nav{
                height: 10vh;
                border-top: 2px solid $light;
            }
        }
        &_tchat{
            min-width: 400px;
            max-width: 400px;
            height: 92.3vh;
            border-left: 2px solid $light;
        }
}
</style>