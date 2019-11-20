<template>
    <div class="row col-12">
        <table id="persons">
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
            </tr>
            <tr v-for="item in persons">
                <td>{{ item.id}}</td>
                <td>{{ item.firstname }} {{ item.lastname }}</td>
                <td>{{ item.email }}</td>
            </tr>
        </table>
    </div>
</template>

<script>
    import PersonsData from "../data/persons"

    export default {
        name: "MyPersons",
        data () {
            return {
                persons: PersonsData,
            }
        },
    }
</script>
