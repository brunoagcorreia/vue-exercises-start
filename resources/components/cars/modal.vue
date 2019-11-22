<template>
    <!-- The Modal -->
    <div class="modal fade" id="myModal">
        <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-lg">
            <div class="modal-content">

                <!-- Modal Header -->
                <div class="modal-header">
                    <h4 class="modal-title">
                        <span v-html="car.model"></span>
                    </h4>
                    <button type="button" class="close" data-dismiss="modal">&times;</button>
                </div>

                <!-- Modal body -->
                <div class="modal-body">
                    <table class="table">
                        <tr>
                            <td>ID</td>
                            <td v-html="car.id"></td>
                        </tr>
                        <tr>
                            <td>Color</td>
                            <td v-html="car.color"></td>
                        </tr>
                        <tr>
                            <td>Quantity</td>
                            <td v-html="car.quantity"></td>
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
        name: "MyCarModal",
        data() {
            return {
                car: {
                    id: '',
                    model: '',
                    color: '',
                    quantity: 0,
                }
            }
        },
        mounted() {
            try {
                EventBus.$on('click-car', item => {
                    this.car = item;
                });
            } catch(err) {
                console.error(err)
            }
        },
        beforeDestroy () {
            EventBus.$off('click-car');
        }
    }
</script>

<style scoped>

</style>
