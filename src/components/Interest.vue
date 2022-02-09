<template>
<form>
    <Header />
    <h3>Interest</h3>
    <div class="containerbox" v-for="index in counter" :key="index">
        <div>
            <div class="input">
                <input type="text" placeholder="Name" class="field">
            </div>
            <div class="input">
                <Keyword_Page2 />
            </div>
        </div>

    </div>
    <button class="interest" @click.prevent=addinput>Add Interest</button>
</form>
</template>

<script>
import Header from "./Header.vue"
import Keyword_Page2 from "./Keyword.vue"

export default {
    name: "Interest",
    components: {

        Header,
        Keyword_Page2,

    },
    data() {
        return {
            counter: 1
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
    border-bottom: 1px solid #1890ff;
    border-top:transparent;
    border-left:transparent;
    border-right:transparent;
    width: 60%;
    height: 30px;
    margin-left: 250px;
    padding-top: 20px;

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
    padding-top: 20px;
    width: 60%;
    height: 30px;
    margin-left: 250px;
    padding-top: 20px;
}

.interest {
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
