
<template>
    <div class="row main">
        <div class="container-fluid">
            <Navigation />
        </div>

    </div>
</template>
<script>

    import Navigation from "./components/navigation"
//    import MyPersons from "./components/persons/persons"
//    import MyPerson from "./components/persons/person"

    export default {
        name: "App",
        components: {Navigation}
    }
</script>

<style>
    .fade-enter-active, .fade-leave-active {
        transition: opacity .5s
    }
    .fade-enter, .fade-leave-active {
        opacity: 0
    }
</style>
