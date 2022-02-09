<template>
<form>
    <Header />
    <h3>Reference</h3>
    <div class="containerbox" v-for="index in counter" :key="index">
        <div>
            <div class="input">
                <input type="text" placeholder="Name" class="field" v-model="Reference.name" v-on:change="validateinput()">
                <label>{{errorname}}</label>
            </div>

        </div>

        <div>
            <div class="input">
                <input type="text" placeholder="Project Reference" class="field" v-model="Reference.projectreference" v-on:change="validateinputs()">
                <label>{{errorinput}}</label>
            </div>
        </div>
    </div>
    <button class="reference" @click.prevent=addinput>Add Reference</button>
</form>
</template>

<script>
import Header from "./Header.vue"

export default {
    name: "Reference",
    components: {

        Header,

    },
    data() {
        return {
            counter: 1,
            Reference:{
                name:"",
                projectreference:""
            },
            errorinput:"",
            errorname:"",
        }

    },
    methods: {
        addinput() {
            this.counter = this.counter + 1

        }
    },
    validateinput() {
            if ((/^[a-zA-z] ?([a-zA-z]|[a-zA-z] )*[a-zA-z]$/.test(this.Reference.name))) {
                this.errorname = ""
            } else {
                this.errorname = "Please enter a valid input "
            }
        },
     validateinputs() {
            if ((/[a-z]+/.test(this.Reference.projectreference))) {
                this.errorinput = ""
            } else {
                this.errorinput = "Please enter a valid input "
            }
        }
}
</script>

<style scoped>
.field {

   
    width: 60%;
    height: 30px;
    margin-left: 250px;
    padding-top: 20px;
    border-bottom: 1px solid #1890ff;
    border-top:transparent;
    border-left:transparent;
    border-right:transparent;

}

.input {
    padding-top: 10px;
}

.containerbox {
    display: flex;
    flex-wrap: nowrap;

}

h3 {
    margin-left: -56%;
}

textarea {
   
    width: 60%;
    height: 30px;
    margin-left: 250px;
    padding-top: 20px;
    border-bottom: 1px solid #1890ff;
    border-top:transparent;
    border-left:transparent;
    border-right:transparent;
}

.reference {
    margin-left: -51%;
    margin-top: 2%;
    border-radius: 4px;
    background-color: rgb(5, 10, 92);
    border: none;
    color: #FFFFFF;
    font-size: 15px;
    height: 30px;
     width: 130px;
    transition: all 0.5s;
    cursor: pointer;

}
</style>
