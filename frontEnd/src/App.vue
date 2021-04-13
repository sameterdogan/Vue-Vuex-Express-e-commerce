<template>
  <div id="app">
    <component :is="layout">
          <message/>
      <router-view></router-view>
    </component>
  </div>
</template>

<script>
import Message from '@/components/message'
const defaultLayout="default"
export default {
  name: 'App',
      components: { Message },
      computed:{
    layout(){
      return (this.$route.meta.layout || defaultLayout)+ "-layout"
    }
  }
}
</script>

<style lang="css" >
@import "assets/css/responsive.css";
@import "assets/css/index.css";



</style>
