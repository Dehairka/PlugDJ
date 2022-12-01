<template>
    <div class="roomsPage">
        <div class="roomsPage_yourRoom">
            <h2>My Rooms</h2>
            <div class="content">
                <Room />
            </div>
        </div>
        <div class="roomsPage_Rooms">
            <h2>Rooms</h2>
            <div class="content">
                <Room class="room" v-for="(room, index) in 20" :key="index"/>
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.roomsPage{
        height: 100%;
        // background-color: red;
        padding: 16px;

        &_yourRoom, &_Rooms{
            h2{
                padding: 16px;
            }
            .content{
                display: flex;
                flex-wrap: wrap;
                justify-content: space-between;

                .room{
                    margin: 8px;
                    min-width: 250px;
                    max-width: 300px;
                    // min-height: 400px;
                    width: 20%;
                    height: 400px;
                    border-radius: 16px;

                    @include big-tablet{
                        width: 30%;
                    }
                    @include tablet{
                        width: 100%;
                        max-width: inherit;
                    }
                }
            }
        }
}
</style>