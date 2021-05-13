<template>
<div>
    <div class='container'>
        <div class='row'>
            <div class='col-3'>
                <side-bar/>
            </div>
            <div class='col-9'>
                <orders/>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import SideBar from '@/components/index/profile/Sidebar'
import Orders from '@/pages/index/profile/Orders'
export default {
    name: 'Profile',
    components: { Orders, SideBar },
}
</script>

<style scoped>

</style>