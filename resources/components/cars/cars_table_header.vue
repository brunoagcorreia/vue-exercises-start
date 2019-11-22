<template>
    <tr>
        <th v-for="column in columns">{{column | ucFirst }}</th>
        <th colspan="2">&nbsp;</th>
    </tr>
</template>

<script>
    export default {
        name: "CarsTableHeader",
        props: ['columns'],
        filters: {
            ucFirst: function(v) {
                return v.substr(0,1).toUpperCase() + v.substr(1);
            }
        }
    }
</script>
<style scoped>
</style>
