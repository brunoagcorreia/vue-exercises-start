<template>
    <table class="table">
        <tr>
            <td>ID</td>
            <td v-html="person.id"></td>
        </tr>
        <tr>
            <td>Firstname</td>
            <td v-html="person.firstname">Paul</td>
        </tr>
        <tr>
            <td>Lastname</td>
            <td v-html="person.lastname"></td>
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
</template>

<script>
    import {EventBus} from "../../app";

    export default {
        name: "MyPerson",
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
    .avatar {
        display: inline-flex;
        float: left;
        margin: 0 0.5rem 0.5rem 0;
    }
    .txt {
        text-align: justify;
    }
</style>
