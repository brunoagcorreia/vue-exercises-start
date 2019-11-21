<template>
    <!-- The Modal -->
    <div class="modal fade" id="myModal">
        <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-lg">
            <div class="modal-content">

                <!-- Modal Header -->
                <div class="modal-header">
                    <h4 class="modal-title">
                        <span v-html="person.firstname"></span>
                        <span class="ml-1" v-html="person.lastname"></span>
                    </h4>
                    <button type="button" class="close" data-dismiss="modal">&times;</button>
                </div>

                <!-- Modal body -->
                <div class="modal-body">
                    <table class="table">
                        <tr>
                            <td>ID</td>
                            <td v-html="person.id"></td>
                        </tr>
                        <tr>
                            <td>Email</td>
                            <td v-html="person.email"></td>
                        </tr>
                        <tr>
                            <td>Job</td>
                            <td v-html="person.job"></td>
                        </tr>
                        <tr>
                            <td>Birstday</td>
                            <td>{{ person.dob | toLocalDate }}</td>
                        </tr>
                        <tr>
                            <td colspan="2">
                                <p class="txt">
                                    <img class="avatar" :src="person.avatar" :alt="person.firstname" :title="person.firstname" />
                                    {{ person.text }}
                                </p>
                            </td>
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
        name: "MyPersonModal",
        data() {
            return {
                person: {
                    id: '',
                    firstname: '',
                    lastname: '',
                    email: '',
                    dob: '',
                    job: '',
                }
            }
        },
        mounted() {
            try {
                EventBus.$on('click-person', item => {
                    this.person = item;
                });
            } catch(err) {
            }
        },
        filters: {
            toLocalDate: function (val) {
                return !!val ? (new Date(val)).toLocaleDateString(): "";
            }
        },
        beforeDestroy () {
            EventBus.$off('click-person');
        }
    }
</script>

<style scoped>

</style>