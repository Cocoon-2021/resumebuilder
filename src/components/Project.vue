<template>
<form>
    <Header />
    <h3>Project</h3>
    <div class="containerbox" v-for="index in counter" :key="index">
        <div>
            <div class="input">
                <input type="text" placeholder="Name" class="field" v-model="Project.name">
            </div>
            <div class="input">
                <textarea placeholder="Description"></textarea>
            </div>
            <div class="input">
                <Highlights_Page2 />
            </div>
            <div class="input">
                <Keyword_Page2 />
            </div>
            <div class="input">
                <input type="text" placeholder="Start date" class="field " v-model="Project.Startdate" onfocus="(this.type='date')">
            </div>
            <div class="input">
                <input type="text" placeholder="URL" class="field" v-model="Project.URL">
            </div>
            <div class="input">
                <input type="Entry" placeholder="Entry" class="field" v-model="Project.Entry">
            </div>
        </div>

        <div>
            <div class="input">
                <input type="text" placeholder="End date" class="field"  v-model="Project.Enddate" onfocus="(this.type='date')" >
            </div>
            <div class="input">
                <input type="text" placeholder="Type" class="field" v-model="Project.Type">
            </div>

        </div>
    </div>
    <button class="project" @click.prevent=addinput>Add Project</button>

</form>
</template>

<script>
import Header from "./Header.vue"
import Highlights_Page2 from "./Highlights.vue"
import Keyword_Page2 from "./Keyword.vue"

export default {
    name: "Project",
    components: {

        Header,
        Highlights_Page2,
        Keyword_Page2,

    },
    data() {
        return {
            counter: 1,
            Project:{
                Name:"",
                Description:"",
                Highlights:"",
                Keyword:"",
                Startdate:"",
                URL:"",
                Entry:"",
                Enddate:"",
                Type:"",
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

.containerbox {
    display: flex;
    flex-wrap: nowrap;

}

.input {
    margin-top: 10px;
    padding-top: 10px;
}

h3 {
    margin-left: -56%;
}

textarea {
    padding-top: 20px;
    width: 60%;
    height: 30px;
    margin-left: 250px;
    padding-top: 20px;
    border-bottom: 1px solid #1890ff;
    border-top:transparent;
    border-left:transparent;
    border-right:transparent;
}

.project {
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
