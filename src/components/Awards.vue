<template>
<form>
    <Header />
    <h3>Awards</h3>
    <div class="containerbox" v-for="index in counter" :key="index">
        <div>
            <div class="input">
                <input type="text" placeholder="Title" class="field">
            </div>
            <div class="input">
                <input type="text" placeholder="Awarder" class="field">
            </div>
            <div class="input">
                <textarea placeholder="Summary"> </textarea>
            </div>
        </div>

        <div>
            <div class="input">
                <input type="text" placeholder="Date" class="field" onfocus="(this.type='date')">
            </div>
        </div>

    </div>
    <button class="Awards" @click.prevent=addinput>Add Awards</button>
</form>
</template>

<script>
import Header from "./Header.vue"

export default {
    name: "Page2",
    components: {

        Header,

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

.Awards {
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
