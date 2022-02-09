<template>
<form>
    <Header />
    <h3>Publication</h3>
    <div class="containerbox" v-for="index in counter" :key="index">
        <div>
            <div class="input">
                <input type="text" placeholder="Name" class="field" v-model="Publications.name" >
            </div>
            <div class="input">
                <input type="text" placeholder="Release data" class="field"  v-model="Publications.releaseDate">
            </div>
            <div class="input">
                <textarea placeholder="Summary"></textarea>
            </div>
        </div>

        <div>
            <div class="input">
                <input type="text" placeholder="Publisher" class="field" v-model="Publications.Publisher">
            </div>
            <div class="input">
                <input type="text" placeholder="URL" class="field" v-model="Publications.URL">
            </div>
        </div>

    </div>
    <button class="publications" @click.prevent=addinput> Add Publications</button>
</form>
</template>

<script>
import Header from "./Header.vue"

export default {
    name: "Publication",
    components: {

        Header,

    },
    data() {
        return {
            counter: 1,
            Publications:{
                name:"",
                releaseDate:"",
                Publisher:"",
                URL:"",


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

.publications {
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
