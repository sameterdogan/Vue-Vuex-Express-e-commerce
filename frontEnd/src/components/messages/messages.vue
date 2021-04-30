<template>
    <div class='messages-wrapper'>
       <message v-for='message in messages' :key='message.id' :message='message'/>
    </div>
</template>

<script>
import Message from '@/components/messages/message'
import { mapGetters } from 'vuex'
export default {
    name: 'messages',
    components: { Message },
    computed:{
        ...mapGetters({messages:"getMessages"})
    }
}
</script>

<style scoped>
.messages-wrapper{
    z-index: 10;
    background-color: transparent;
    position: fixed;
    bottom: 30px;
    right: 30px;
    max-width: 400px;
    min-width: 200px;
}
</style>