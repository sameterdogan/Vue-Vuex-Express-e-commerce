<template>

    <div class='row'>
        <div class='col-12 text-center'>
            <Button @click='previousPage' v-if='pagination.start=!0' class='btn btn-sm pagination-button'><i
                class='bi bi-arrow-left-short'></i> Previous Page
            </Button>
            <span class='mx-2'></span>
            <Button @click='nextPage' class='btn btn-sm pagination-button'>Next Page <i
                class='bi bi-arrow-right-short'></i></Button>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    name: 'ProductPagination',
    created() {
        console.log(this.pagination)
    },
    computed: {
        ...mapGetters({ pagination: 'getPagination' }),
    },
    methods: {
        nextPage() {
            this.pagination.start += this.pagination.limit
            this.$store.commit("CHANGE_PAGINATION",this.pagination)
            this.$store.dispatch("initProducts")
        },
        previousPage() {
            this.pagination.start -= this.pagination.limit
            this.$store.commit("CHANGE_PAGINATION",this.pagination)
            this.$store.dispatch("initProducts")
        },
    },
}
</script>

<style scoped>
.pagination-button {
    color: #0077C1;
    border: solid #0077C1 1px;
    transition: all .5s;
    width: 15%;
    height: 31px;
}

.pagination-button:hover {
    background-color: #0077C1;
    color: white;
}

</style>