<template>
  <div>
     <nav-bar/>
    <main class="main">
      <slot/>
    </main>
  </div>
</template>

<script>
import NavBar from "@/components/admin/NavBar";
export default {
  name: "Default",
  components: {NavBar}
}
</script>

<style scoped>
.main{
      background-color: #1a2b34;
}
</style>
