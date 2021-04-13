<template>
  <div>
     <frame-menu/>
     <Header/>
     <nav-bar/>
    <main class="main">
      <slot/>
    </main>
  </div>
</template>

<script>
import FrameMenu from "@/components/index/FrameMenu";
import Header from "@/components/index/Header";
import NavBar from "@/components/index/NavBar";

export default {
  name: "default",
  components: {Header, FrameMenu,NavBar}
}
</script>

<style scoped>

</style>
