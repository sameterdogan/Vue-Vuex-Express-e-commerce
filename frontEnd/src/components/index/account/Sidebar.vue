<template>
    <div>
        <h4>My Account</h4>
        <div class='sidebar'>
            <ul class='sidebar-list'>
                <li v-for='sidebarItem in sidebarList' :key='sidebarItem.name' class='sidebar-list-item'>
                    <router-link
                        :to='{name:sidebarItem.routerName}'
                    >
                        <span :style='{color:sidebarItem.color}' class='sidebar-list-item-name'>{{ sidebarItem.name
                            }}</span>
                    </router-link>
                    <i :class='sidebarItem.icon' :style='{color:sidebarItem.color}' class='sidebar-list-item-icon'></i>
                    <i :style='{color:sidebarItem.color}'
                       class='bi bi-arrow-right-short sidebar-list-item-right-arrow'></i>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name: 'SideBar',
    created() {
        console.log(this.$route.name)
        switch (this.$route.name) {
            case 'account':
                this.sidebarList[0].color = '#0077C1'
                break
            case 'order-detail':
                this.sidebarList[0].color = '#0077c1'
                break
            case 'my-user-information':
                this.sidebarList[1].color = '#0077C1'
                break
            case 'account-address':
                this.sidebarList[2].color = '#0077C1'
                break
        }
    },
    data() {
        return {
            sidebarList: [
                { name: 'Orders', icon: 'bi bi-box-seam', routerName: 'account', color: '#999' },
                {
                    name: 'My user information',
                    icon: 'bi bi-person-fill',
                    routerName: 'my-user-information',
                    color: '#999',
                },
                { name: 'Address', icon: 'bi bi-geo-alt-fill', routerName: 'account-address', color: '#999' },
            ],
        }
    },
}
</script>

<style scoped>
.click-color {
    color: #0077C1 !important;
}

.sidebar-list {
    list-style: none;
    padding: 0;
}

.sidebar-list-item {
    margin: .5rem 0;
    padding: .5rem 0;
    border-bottom: 1px solid #e6e6e6;
    color: #1b1b1b;
}

.sidebar-list-item a:active {
    color: #0077C1;
}

.sidebar-list-item-right-arrow {
    float: right;
}

.sidebar-list-item-icon {
    color: #999;
    font-size: 14px;
    margin-right: 1rem;
    float: left;
}

.sidebar-list-item a {
    color: #999;
    text-decoration: none;
    padding: 1rem;
}

.sidebar-list-item:hover {
    color: #0077C1;
}

.sidebar-list-item:hover .sidebar-list-item-icon, a {
    color: #0077C1;
}

.sidebar-list-item:hover a {
    color: #0077C1;
}


</style>