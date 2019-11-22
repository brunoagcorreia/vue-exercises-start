<template>
    <div class="container">
        <h3>Cars Page</h3>
        <div class="paginator">
            <jw-pagination
                :items="CarsData"
                :pageSize="15"
                @changePage="onChangePage"
            />
        </div>
        <div class="clearfix p-0 m-0">
            <div class="col-12 m-0 p-0 float-left">
                <MyCars :page-of-items="pageOfItems" />
            </div>
            <MyCarsModal />
        </div>
    </div>
</template>

<script>
    import JwPagination from "jw-vue-pagination"
    import CarsData from "../../data/cars"
    import MyCars from "../cars/cars"
    import MyCarsModal from "../cars/modal"

    export default {
        name: "CarsPage",
        components: {JwPagination, MyCars, MyCarsModal},
        data() {
            return {
                CarsData,
                pageOfItems: [],
            }
        },
        methods: {
            onChangePage(pageOfItems) {
                this.pageOfItems = pageOfItems;
            }
        }
    }
</script>
