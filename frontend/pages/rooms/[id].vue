<template>
    <div class="roomPage">
        <!-- <h2>Room id : {{$route.params.id}}</h2> -->
        <div class="roomPage_content">
            <div class="player">
                <YouTube
                class="player--youtube"
                src="https://www.youtube.com/watch?v=jNQXAC9IVRw"
                ref="youtube"
                width="100%"
                height="100%"
                :vars="youtubeOptions" />
            </div>
            <RoomNav class="nav"></RoomNav>
        </div>
        <RoomTchat class="roomPage_tchat"></RoomTchat>
    </div>
</template>

<script>
export default {
    data(){
        return{
            youtubeOptions: {
                autoplay: false,
                controls: 0
            }
        }
    }
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
                height: 100%;
                // background-color: yellow;
                .player--youtube{
                    width: 100%;
                    height: 100%;
                }
            }
            .nav{
                // height: 8.4vh;
                border-top: 1px solid $light;
            }
        }
        &_tchat{
            width: 25%;
            height: 100%;
            border-left: 1px solid $light;
        }
}
</style>