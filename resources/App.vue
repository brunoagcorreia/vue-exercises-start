
<template>
    <div class="container">
        <Navi></Navi>
        <MyPersons />
        <MyPersonDeatail />
    </div>
</template>
<script>
    import MyPersons from "./components/persons/persons"
    export default {
        name: "App",
        components: {MyPersons}
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
