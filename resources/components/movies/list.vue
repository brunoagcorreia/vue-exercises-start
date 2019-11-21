<template>
        <div class="card-body">
            <table id="movies">
                <tr>
                    <th>ID</th>
                    <th>Title</th>
                    <th>Price</th>
                    <th> </th>
                </tr>
                <tr v-for="(item, index) in movies">
                    <td>{{index}} {{ item.id }}</td>
                    <td class="link"
                        data-toggle="modal"
                        @click="clickHandler(item)"
                    >{{ item.title }}</td>
                    <td>{{ item.price }}</td>
                    <td><button
                         class="btn-sm btn-danger"
                         @click="remove(index)"
                    >DELETE</button></td>
                </tr>
            </table>
        </div>
</template>

<script>
    import {EventBus} from "../../app"

    export default {
        name: "MyMovies",
        data() {
            return {
                movies: []
            }
        },
//        props: ['pageOfItems'],,
        created() {
            this.getList()
        },
        methods: {
            remove(index) {
                let movie = this.movies[index];
                let url = `/api/movie/` + movie.id;
                this.axios
                    .delete(url)
                    .then((response) => {
                        this.movies.splice(index, 1);
                    })
                    .catch(err => {
                        console.error(url + ": " + err);
                    });
            },
            getList() {
                let url = `/api/movie`;
                this.axios
                    .get(url)
                    .then((response) => {
                        console.info('response');
                        console.info(response);
                        this.movies = response.data;
                    })
                    .catch(err => {
                        console.error(url + ": " + err);
                    });
            },
            clickHandler(item) {
                // Send the event on a channel (click-movie) with a payload (person object.)
                EventBus.$emit('click-movie', item);
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
