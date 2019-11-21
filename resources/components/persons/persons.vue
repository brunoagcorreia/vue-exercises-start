<template>
        <div class="card-body">
            <table id="persons">
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Email</th>
                </tr>
                <tr v-for="item in pageOfItems">
                    <td>{{ item.id }}</td>
                    <td class="link"
                        data-toggle="modal"
                        @click="clickHandler(item)"
                    >{{ item.firstname }} {{ item.lastname }}</td>
                    <td>{{ item.email }}</td>
                </tr>
            </table>
        </div>
</template>

<script>
    import {EventBus} from "../../app"

    export default {
        name: "MyPersons",
        props: ['pageOfItems'],
        methods: {
            clickHandler(item) {
                // Send the event on a channel (click-person) with a payload (person object.)
                EventBus.$emit('click-person', item);
                $("#myModal").modal();
            },
        }
    }
</script>
<style scoped>
    .link {
        text-decoration: underline;
        color: #005cbf;
        cursor: pointer;
    }
</style>
