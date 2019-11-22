<template>
    <div class="row col-12">
        <table class="car">
            <tr v-for="(key,val) in car">
                <td>{{ key }}</td>
                <td>{{ val }} </td>
            </tr>
        </table>
    </div>
</template>

<script>
    export default {
        name: "CarsDetail",
        props: ['car'],
    }
</script>
<style scoped>
</style>
