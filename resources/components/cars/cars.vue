
<template>
    <div class="row col-12">
        <CarsTable :page-of-items="pageOfItems" :min-limit="minLimit" />
    </div>
</template>

<script>
    import CarsData from "../../data/cars"
    import CarsTable from "./cars_table";

    export default {
        name: "Cars",
        components: {CarsTable},
        props: ['pageOfItems'],
        data () {
            return {
                CarsData,
                minLimit: 5,
            }
        },
    }
</script>
