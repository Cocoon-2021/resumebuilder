<template>
<form>
    <Header />
    <h3>Languages</h3>
    <div class="containerbox" v-for="index in counter" :key="index">
        <div>
            <div class="input">
                <input type="text" placeholder="Languages" class="field" v-model="Languages.languages">
            </div>

            <div class="input">
                <Keyword_Page2 />
            </div>

        </div>

        <div>
            <div class="input">
                <select class="select">
                    <option> Elementary Proficiency</option>
                    <option>Limited Proficiency</option>
                    <option>Professional Proficiency</option>
                </select>
            </div>
        </div>

    </div>
    <button class="languages" @click.prevent=addinput>Add Languages</button>
</form>
</template>

<script>
import Header from "./Header.vue"
import Keyword_Page2 from './Keyword.vue'

export default {
    name: "Languages",
    components: {

        Header,
        Keyword_Page2,

    },
    data() {
        return {
            counter: 1,
            Languages:{
                languages:""
            }
        }

    },
    methods: {
        addinput() {
            this.counter = this.counter + 1

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

.input {
    margin-top: 10px;
}

h3 {
    margin-left: -56%;
}

textarea {
    border-bottom: 1px solid #1890ff;
    border-top:transparent;
    border-left:transparent;
    border-right:transparent;
    width: 60%;
    height: 30px;
    margin-left: 250px;
    padding-top: 20px;
}

.languages {

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
