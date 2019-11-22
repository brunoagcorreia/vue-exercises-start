<template>
        <div class="card-body">
            <table id="movies" class="table table-striped col-12">
                <tr>
                    <th>ID</th>
                    <th>Title</th>
                    <th>Price</th>
                    <th> </th>
                </tr>
                <tr v-for="(item, index) in pageOfItems">
                    <td>{{ item.id }}</td>
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
        props: ['pageOfItems'],
        methods: {
            remove(index) {
                let movie = this.pageOfItems[index];
                let url = `/api/movie/` + movie.id;
                this.axios
                    .delete(url)
                    .then((response) => {
                        this.pageOfItems.splice(index, 1);
                    })
                    .catch(err => {
                        console.error(url + ": " + err);
                    });
            },
            clickHandler(item) {
                try {
                    // Send the event on a channel (click-movie) with a payload (movie object.)
                    EventBus.$emit('click-movie', item);
                    $("#myModal").modal();
                } catch(err) {
                    console.error(err);
                }
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
