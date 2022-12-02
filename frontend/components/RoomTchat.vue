<template>
    <div class="tchat">
        <div class="tchat_nav">
            nav of tchat
        </div>
        <div class="tchat_content">
            <!-- <pre>{{messages}}</pre> -->
            <div v-for="(message, index) in messages" :key="index" class="message message--me">
                <div class="content">
                    <span>{{message.author}}</span>
                    <p>{{message.message}}</p>
                </div>
                <div class="infos">
                    <div class="options pointer">
                        <img src="~/assets/svg/arrow-left.svg" alt="options icon">
                    </div>
                    <span class="date">{{message.date.getHours()}}:{{message.date.getMinutes()}}</span>
                </div>
            </div>
        </div>
        <div class="tchat_inputs">
            <!-- <input class="message" placeholder="Type a message..." type="text" name="text" id="text"> -->
            <textarea @keyup.enter="sendMessage()" class="message" v-model="message" placeholder="Type a message..." name="message" id="message" cols="40" rows="10"></textarea>
            <input @click="sendMessage()" class="btn send" type="button" value="Send">
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            message: '',
            messages: []
        }
    },
    methods:{
        sendMessage(){
            const newMessage = {
                author: 'Dehairka',
                message: this.message,
                date: new Date
            }
            this.messages.push(newMessage);
            this.message = '';
        }
    }
}
</script>

<style lang="scss">
.tchat{
    &_nav{
        height: 8%;
        // background-color: green;
    }
    &_content{
        height: 83%;
        padding: 8px;
        display: flex;
        flex-direction: column;
        .message{
            background-color: rgba($color: $black, $alpha: 0.6);
            backdrop-filter: blur(16px);
            margin-bottom: 2px;
            display: flex;
            width: fit-content;
            border-radius: 16px;

            &:hover{
                .infos .options{
                    opacity: 1;
                }
            }

            &--me{
                background-color: rgba($color: $primary, $alpha: 0.6);
                align-self: flex-end;
            }
            .content{
                padding: 8px;
                display: flex;
                flex-direction: column;
                span{
                    color: $primary;
                    font-weight: 600;
                }
            }
            .infos{
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                align-items: flex-end;
                .options{
                    border-top-right-radius: 16px;
                    border-bottom-left-radius: 16px;
                    background-color: rgba($color: $black, $alpha: 0.6);
                    width: 30px;
                    height: 30px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    opacity: 0;
                    transition: opacity 0.2s;
                    img{
                        width: 15px;
                    }
                }
                .date{
                    color: rgba($color: $light, $alpha: 0.6);
                    padding: 4px;
                }
            }
        }
    }
    &_inputs{
        height: 9%;
        // background-color: green;
        display: flex;
        border-top: 1px solid $light;
        .message{
            height: 100%;
            flex: 1;
            outline: none;
            border: none;
            padding: 8px;
            resize: none;
            background-color: transparent;
            color: $light;
        }
        .send{
            border-radius: 0;
        }
    }
}
</style>