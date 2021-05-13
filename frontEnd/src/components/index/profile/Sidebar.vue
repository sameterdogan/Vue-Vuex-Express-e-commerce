<template>
<div>
    <h4>My Account</h4>
    <div class='sidebar'>
     <ul class='sidebar-list'>
         <li v-for='sidebarItem in sidebarList' :key='sidebarItem.name' class='sidebar-list-item'>
             <i :class='sidebarItem.icon' class='sidebar-list-item-icon'></i>
             <span class='sidebar-list-item-name'>{{sidebarItem.name}}</span>
             <i class="bi bi-arrow-right-short sidebar-list-item-right-arrow"></i>

         </li>
     </ul>
    </div>
</div>
</template>

<script>
export default {
    name: 'SideBar',
    data(){
        return{
            sidebarList:[{name:"Orders",icon:"bi bi-box-seam"},{name:"My user information",icon:"bi bi-person-fill"}]
        }
    }
}
</script>

<style scoped>
.sidebar-list{
    list-style: none;
    padding: 0;
}
.sidebar-list-item{
    margin:.5rem 0;
    padding: .5rem 0;
    border-bottom: 1px solid #e6e6e6;
    color: #1b1b1b;
    cursor: pointer;
}
.sidebar-list-item:hover{
    color:#0077C1 ;
}
.sidebar-list-item:hover .sidebar-list-item-icon{
    color:#0077C1 ;
}
.sidebar-list-item-icon{
    color: #999;
    font-size: 14px;
    margin-right:1rem ;
}
.sidebar-list-item-right-arrow{
    float: right;
}
</style>