<template>
    <tbody>
        <tr v-for="item in pageOfItems"
            :title="(item.quantity < minLimit) ? 'Bitte nachbestellen!' : ''"
            :class="{'danger' : (item.quantity < minLimit) }"
            :key="item.id"
        >
            <td>{{ item.id }}</td>
            <td class="link"
                data-toggle="modal"
                @click="clickHandler(item)"
            >{{ item.model }}</td>
            <td>{{ item.quantity }}</td>
            <td :style="setStyle(item.color)"><br></td>
            <td><button class="btn btn-primary" @click="item.quantity++">+</button></td>
            <td><button class="btn btn-primary" @click="item.quantity--">-</button></td>
        </tr>
    </tbody>
</template>

<script>
    import {EventBus} from "../../app"

    export default {
        name: "CarsTableBody",
        props: ['pageOfItems','minLimit'],
        methods: {
            setStyle(color) {
                return 'background-color: ' + color;
            },
            clickHandler(item) {
                EventBus.$emit('click-car', item);
                $("#myModal").modal();
            },
        }
    }
</script>
<style scoped>
    .table .danger,
    .table .danger td.link
    {
        color: #fff;
        background-color: red;
        font-weight: bold;
    }
    .link {
        color: #0069d9;
        text-decoration: underline;
        font-weight: bold;
        cursor: pointer;
    }
</style>
