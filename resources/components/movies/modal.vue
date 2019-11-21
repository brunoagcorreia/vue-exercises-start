<template>
    <!-- The Modal -->
    <div class="modal fade" id="myModal">
        <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-lg">
            <div class="modal-content">

                <!-- Modal Header -->
                <div class="modal-header">
                    <h4 class="modal-title">
                        <span v-html="movie.title"></span>
                    </h4>
                    <button type="button" class="close" data-dismiss="modal">&times;</button>
                </div>

                <!-- Modal body -->
                <div class="modal-body">
                    <table class="table">
                        <tr>
                            <td>ID</td>
                            <td v-html="movie.id"></td>
                        </tr>
                        <tr>
                            <td>Author</td>
                            <td v-html="movie.author.fullname"></td>
                        </tr>
                        <tr>
                            <td>Price</td>
                            <td v-html="movie.price"></td>
                        </tr>
                    </table>
                </div>

                <!-- Modal footer -->
                <div class="modal-footer">
                    <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
                </div>

            </div>
        </div>
    </div>
</template>

<script>
    import {EventBus} from "../../app";

    export default {
        name: "MyMovieModal",
        data() {
            return {
                movie: {
                    id: '',
                    title: '',
                    price: '',
                    author: {
                        fullname: '',
                    }
                }
            }
        },
        mounted() {
            try {
                EventBus.$on('click-movie', item => {
                    this.movie = item;
                });
            } catch(err) {
            }
        },
        beforeDestroy () {
            EventBus.$off('click-person');
        }
    }
</script>

<style scoped>

</style>