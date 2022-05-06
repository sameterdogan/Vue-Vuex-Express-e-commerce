<template>
    <div id='app'>

        <component :is='layout'>
            <component :is='quickView.component' :productId='quickView.productId'></component>
            <messages/>
            <router-view></router-view>
        </component>

    </div>
</template>

<script>
import Messages from '@/components/messages/messages'
const defaultLayout = 'default'
export default {
    name: 'App',
    components: { Messages },
    data() {
        return {
            quickView:{
                component:"",
                productId:""
            }
        }
    },
    created() {
        this.$root.$on('quickView', componentInfo => {
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