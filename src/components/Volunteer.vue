<template>
<form>
    <Header />
    <h3 class="Work">Volunteer</h3>

    <div class="container"  v-for="(Work, k) in Work" :key="k">
        <!--------------Left section of Work------------------------->
        <div class="leftsection">
            <div class="field">
                <input type="text" placeholder="Organization" v-model="Work.name" tabindex="1" class="style">
            </div>
            <div class="field">
                 <input type="text" placeholder="URL" v-model="Work.URL" v-on:change="validateURL()" tabindex="1" class="style">
                <span><br>{{validURL}}</span>
            </div> 
            <div class="field">
                <input type="End date" placeholder="Position" v-model="Work.position" tabindex="4" class="style">
            </div>
            
            <div class="field">
                <textarea placeholder="Summary" v-model="Work.summary" tabindex="8" class="style"></textarea>
            </div>
            <div>
                <Highlights />
            </div>
           
        </div>
        <!--------------Right section of Work------------------------->
        <div class="rightsection">
            <div class="field">
                <input type="text" placeholder="Position" v-model="Work.location" tabindex="2" class="style">
            </div>
           
            <div class="field">
                <input type="text" placeholder="End date" v-model="Work.enddate" class="enddate" tabindex="7" onfocus="(this.type='date')">
            </div>

        </div>
    </div>
    <input type="button" class="WorkButton" @click="addWork()" value="Add Work" />

</form>
</template>

<script>

import Header from "./Header.vue"
import Highlights from './Highlights.vue'


export default {
    name: "Work",
    components: {

        Header,
        Highlights,
       

    },
    data() {
        return {
         
            Work: [{
                name: "",
                description: "",
                position: "",
                startDate: "",
                summary: "",
                location: "",
                URL: "",
                enddate: "",
                Highlights: "",
                Keyword: "",
            }],
            validname: "",
            validstartdate: "",
            validURL: "",
        }
      
    },
    methods: {
        
        addWork(){
            
            this.Work.push({
                name: "",
                description:"",
                position: "",
                startDate: "",
                summary:"",
                location:"",
                URL:"",
                enddate:"",
                Highlights:"",
                keyword:"",

            })
        },

      
         validateURL() {

           if ((/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&//=]*)/g.test(this.Work[0].URL)))  {
                this.validURL = ""
            } else {
                this.validURL = "Please enter a valid URL"
            }
        },
      
    }
}
</script>

<style scoped>
.container {
    display: flex;
    flex-wrap: nowrap;
    margin-left: 35%;
}

.leftsection {
    margin-left: 5px;
}

.rightsection {
    margin-left: 5px;

}

.field {
    margin: 10px;

}

textarea {
    margin-left: 10px;
}

.Work {
    font-family: Arial, Helvetica, sans-serif;
    margin-left: -24%;
}

.style {
    height: 20px;
    border-top: transparent;
    border-left: transparent;
    border-right: transparent;

}

textarea {
    border-top: transparent;
    border-left: transparent;
    border-right: transparent;
    margin-left: 2px;
    
}

.ProfilesButton {
    margin-left: 460px;
}

.KeywordButton {
    margin-left: -100px;
}

.HighlightsButton {
    margin-left: -100px;
}

.WorkButton {
    margin-left: -251px;
    margin-top: 12px;
    width:7%;
    font-family: Arial, Helvetica, sans-serif;
}
.enddate{
    margin-top:1px;
   
    border-top: transparent;
    border-left: transparent;
    border-right: transparent;
}
.url{
    margin-top:49px;
   
    border-top: transparent;
    border-left: transparent;
    border-right: transparent;
}
span{
   font-size:small;
   color:red;
}

</style>
