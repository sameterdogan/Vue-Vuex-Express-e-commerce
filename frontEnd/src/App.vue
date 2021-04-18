<template>
    <div id='app'>

        <component :is='layout'>
            <component :is='quickView.component' :slugProduct='quickView.slugProduct'></component>
            <message />
            <router-view></router-view>

        </component>

    </div>
</template>

<script>
import Message from '@/components/message'

const defaultLayout = 'default'
export default {
    name: 'App',
    components: { Message },
    data() {
        return {
            quickView:{
                component:"",
                slugProduct:""
            }
        }
    },
    created() {
        this.$root.$on('quickView', componentInfo => {
            console.log("bilgiler geldi")
            console.log(componentInfo)
              this.quickView=componentInfo
        })
    },
    computed: {
        layout() {
            return (this.$route.meta.layout || defaultLayout) + '-layout'
        },
    },
}
</script>

<style lang='css'>
@import "assets/css/responsive.css";
@import "assets/css/index.css";


</style>
