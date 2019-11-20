
<template>
    <div class="container">
        <Navigation />
        <br />
        <transition name="fade">
            <router-view></router-view>
        </transition>
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
