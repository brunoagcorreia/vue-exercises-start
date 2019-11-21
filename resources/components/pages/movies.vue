<template>
    <div>
        <div>
            <h3>Movies Page</h3>
        </div>
        <div class="clearfix p-0 m-0">
            <div class="col-12 m-0 p-0 float-left">
                <MyMovies />
            </div>
            <MyMovieModal />
        </div>
    </div>
</template>

<script>
    import MyMovies from "../movies/list"
    import MyMovieModal from "../movies/modal"

    export default {
        name: "MoviesPage",
        components: {MyMovies, MyMovieModal},

    }
</script>
