<template>
    <div class="row col-12">
        <div class="row col-12">
            <strong>Total quantity:</strong> <span :class="totalClass">{{ total }}</span>
        </div>
        <div class="row col-12">
            <table class="table table-striped cars">
                <CarsTableHeader :columns="columns" />
                <CarsTableBody :page-of-items="pageOfItems" :min-limit="minLimit" />
            </table>
        </div>
    </div>
</template>

<script>
    import CarsTableHeader from "./cars_table_header"
    import CarsTableBody from "./cars_table_body"

    export default {
        name: "CarsTable",
        components: {
            CarsTableHeader,
            CarsTableBody
        },
        props: ['pageOfItems','minLimit'],
        data () {
            return {
                totalClass: 'normal',
                columns: ['ID','Model','Quantity','Color'],
            }
        },
        computed: {
            total() {
                return this.$props.pageOfItems.reduce((acc, el) => {
                    return acc + el.quantity
                }, 0)
            },
        },
        watch: {
            total(val) {
                if(val < 10) {
                    this.totalClass = 'red';
                } else {
                    this.totalClass = 'normal';
                }
            },
        },
    }
</script>
<style scoped>
    .red {
        color: red;
    }
    .bgRed {
        color: #fff;
        background-color: red;
    }
</style>
