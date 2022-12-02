<template>
    <nav>
        <div class="listening">
            <span>Playing :</span>
            <div class="song">
                <h3>PSY - GANGNAM STYLE (강남스타일) M/V</h3>
                <span>By <strong>Dehairka</strong></span>
            </div>
        </div>
        <div class="nextPlaying">
            <span>Next Playing :</span>
            <div class="song">
                <h3>Dead Or Alive - You Spin Me Round (Like a Record) (Official Video)</h3>
                <span>description of the song</span>
            </div>
        </div>
        <div class="historic pointer">
            <img src="~/assets/svg/share.svg" alt="Historic Icon">
        </div>
        <input class="btn joinQueue" type="button" value="Join Queue">
    </nav>
</template>

<script>
export default {
    
}
</script>

<style lang="scss" scoped>
nav{
    display: flex;
    justify-content: space-between;
    .song{
        padding: 0 8px;
        // white-space: nowrap;
        // text-overflow: ellipsis;
        width: 100%;
        font-size: 0.7vw;
        h3,span{
            width: 100%;
            overflow: hidden;
            display: -webkit-box;
            -webkit-line-clamp: 1;
            -webkit-box-orient: vertical;
        }
    }
    .listening{
        padding: 0 8px;
        flex: 1;
        display: flex;
        flex-direction: column;
        // min-width: 200px;
        // max-width: 400px;
    }
    .nextPlaying{
        padding: 0 8px;
        flex: 1;
        border-left: 1px solid $light;
        display: flex;
        flex-direction: column;
        // min-width: 200px;
        // max-width: 400px;
    }
    .historic{
        min-width: 80px;
        display: flex;
        justify-content: center;
        align-items: center;
        
    }
    .joinQueue{
        border-radius: 0;
        height: 100%;
    }
}
</style>