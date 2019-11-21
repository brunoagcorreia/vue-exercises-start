<template>
        <div class="card-body">
            <table id="movies">
                <tr>
                    <th>ID</th>
                    <th>Title</th>
                    <th>Price</th>
                </tr>
                <tr v-for="item in movies">
                    <td>{{ item.id }}</td>
                    <td class="link"
                        data-toggle="modal"
                        @click="clickHandler(item)"
                    >{{ item.title }}</td>
                    <td>{{ item.price }}</td>
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
