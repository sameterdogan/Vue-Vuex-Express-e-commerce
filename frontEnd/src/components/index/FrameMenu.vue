<template>

   <div class="FRAME-MENU">
   <div class="container-fluid">
       <ul class="menu-links">
         <li class="menu-links-item">
           <router-link
               to="/"
               tag="a"
               class="menu-links-item-a"
           >
             HOME
           </router-link>
         </li>
         <li class="menu-links-item">
           <router-link
               to="/about"
               tag="a"
               class="menu-links-item-a"
           >
             ABOUT
           </router-link>
         </li>
         <li class="menu-links-item">
           <router-link
               to="/concat"
               tag="a"
               class="menu-links-item-a"
           >
             CONCAT US
           </router-link>
         </li>
         <li class="menu-links-item">
           <router-link
               to="/registry"
               tag="a"
               class="menu-links-item-a"
           >
             GIF REGISTRY
           </router-link>
         </li>
         <li class="menu-links-item">
           <router-link
               to="/blog"
               tag="a"
               class="menu-links-item-a"
           >
             BLOG
           </router-link>
         </li>
       </ul>
   </div>


    </div>

</template>

<script>
export default {
  name: "FrameMenu"
}
</script>

<style scoped>
  .FRAME-MENU{
    background-color: #0177C1;
    color: white;
  }
  .menu-links{
    display: flex;
    justify-content: center;
    list-style-type: none;
    margin: 0;
  }
  .menu-links-item{
    padding: .8rem;
    font-weight: bold;
  }
  .menu-links-item-a{
    padding: .8rem;
    color: white;
    text-decoration: none;
  }
  .menu-links-item-a:hover{
    cursor: pointer;
    color: #BFDDEF;
    transition: all .5s;
  }
  @media screen and (max-width: 768px) {
      .FRAME-MENU {
          display: none;
      }
  }

</style>
