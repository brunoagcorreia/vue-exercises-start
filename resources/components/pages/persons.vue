<template>
    <div class="col-12">
        <h3>Persons Page</h3>
        <div  class="col-6">
            <MyPersons />
        </div>
        <div class="col-6">
            <MyPerson />
        </div>
    </div>
</template>

<script>
    import MyPersons from "../persons/persons"
    import MyPerson from "../persons/person"

    export default {
        name: "PersonsPage",
        components: {MyPersons, MyPerson}
    }
</script>
