
<template>
    <div class="container">
        <Navigation />
        <transition name="fade" mode="out-in">
            <router-view class="py-2"></router-view>
        </transition>
    </div>
</template>
<script>

    import Navigation from "./components/navigation"

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
