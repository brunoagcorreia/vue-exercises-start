<template>
    <div class="container">
        <h5>Persons Page</h5>
        <div class="paginator">
            <jw-pagination
                :items="PersonsData"
                :pageSize="15"
                @changePage="onChangePage"
            />
        </div>
        <div class="clearfix p-0 m-0">
            <div class="col-12 m-0 p-0 float-left">
                <MyPersons :page-of-items="pageOfItems" />
            </div>
            <MyPersonModal />
        </div>
    </div>
</template>

<script>
    import PersonsData from "../../data/persons"
    import MyPersons from "../persons/persons"
    import MyPersonModal from "../persons/person-modal"
    import JwPagination from "jw-vue-pagination"

    export default {
        name: "PersonsPage",
        components: {MyPersons, MyPersonModal, JwPagination},
        data () {
            return {
                PersonsData,
                pageOfItems: []
            }
        },
        methods: {
            onChangePage(pageOfItems) {
                this.pageOfItems = pageOfItems;
            }
        }
    }
</script>
