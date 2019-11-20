<template>
<div class="container">
  <div class="row">
        <h5>Persons Page</h5>
        <div class="col">
            <MyPersons />
        </div>
        <div class="col">
            <MyPerson />
        </div>
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
