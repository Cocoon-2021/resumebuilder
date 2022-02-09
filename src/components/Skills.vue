<template>
<form>
    <Header />
    <h3>Skills</h3>
    <div class="containerbox" v-for="index in counter" :key="index">
        <div>
            <div class="input">
                <input type="text" placeholder="Name" class="field" v-model="Skills.name" v-on:change="validateName()">
                <label>{{errorname}}</label>
            </div>
            <div class="input">
                <Keyword_Page2 />
            </div>
        </div>

        <div>
            <div class="input">
                <select class="select">
                    <option> Beginner</option>
                    <option>Intermediate</option>
                    <option>Master</option>
                </select>
            </div>
        </div>

    </div>
    <button class="Skills" @click.prevent=addinput>Add Skills</button>
</form>
</template>

<script>
import Header from "./Header.vue"
import Keyword_Page2 from './Keyword.vue'

export default {
    name: "Page7",
    components: {

        Header,
        Keyword_Page2,

    },
    data() {
        return {
            counter: 1,
            Skills:{
                name:"",
        
            },
            errorname:"",
        }

    },
    methods: {
        addinput() {
            this.counter = this.counter + 1

        },
        validateName(){

          if ((/^[a-zA-z] ?([a-zA-z]|[a-zA-z] )*[a-zA-z]$/.test(this.Skills.name))) {
                this.errorname = ""
            } 
            else {
                this.errorname= "Please enter a valid name "
            }
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

.Skills {
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
.select {
    
    width: 60%;
    height: 10%;
    margin-left: 250px;
    padding-top: 20px;
    border-bottom: 1px solid #1890ff;
    border-top:transparent;
    border-left:transparent;
    border-right:transparent;
}

</style>
