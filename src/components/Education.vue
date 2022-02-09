<template>
<form>
    <Header />
    <h3 class="Education">Education</h3>

    <div class="container"  v-for="(Education, k) in Education" :key="k">
        <!--------------Left section of Work------------------------->
        <div class="leftsection">
            <div class="field">
                <input type="text" placeholder="Institution" v-model="Education.Institution"  class="style" tabindex="1" >
              
            </div>
            <div class="field">
                <input type="text" placeholder="Area" v-model="Education.Area" class="style" tabindex="3" >
            </div>
            <div class="field">
                <input type="text" placeholder="Start date" v-model="Education.Startdate" class="style" tabindex="5" onfocus="(this.type='date')"  >
            </div>
              <div class="field">
                <input type="text" placeholder="Score" v-model="Education.Score" class="style" tabindex="7"  >
            </div>
            <div>
                <Course />
            </div>

        </div>
        <!--------------Right section of Work------------------------->
        <div class="rightsection">
            <div class="field">
                <input type="text" placeholder="URL" v-model="Education.URL" tabindex="2" class="style" v-on:change="validateURL()">
                <span><br>{{validURL}}</span>
            </div>
            <div class="field">
                <input type="text" placeholder="Study type " v-model="Education.Studytype" class="style" tabindex="4" >
            </div>
             <div class="field">
                <input type="text" placeholder="End date" v-model="Education.Enddate" class="style" tabindex="6"  onfocus="(this.type='date')">
                
            </div>
        </div>
    </div>
     <input type="button" class="EducationButton" @click.prevent="addEducation()" value="Add Education"/>
</form>
</template>

<script>
import Course from "./Course.vue"
import Header from "./Header.vue"



export default {
    name: "Education",
    components: {

        Header,
        Course,

    },
    data() {
        return {
         
            Education: [{
                Institution: "",
                Area: "",
                Startdate: "",
                Score: "",
                Course: "",
                URL: "",
                Studytype: "",
                Enddate: "",
               
            }],
        
            validURL:"",
        }
    
      
    },
    // Validation for input fields
    methods: {
        
        addEducation(){
            
            this.Education.push({
                Institution: "",
                Area: "",
                Startdate: "",
                Score: "",
                Course: "",
                URL: "",
                Studytype: "",
                Enddate: "",
            })

        },

        validateURL() {
            console.log("function")

           if ((/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&//=]*)/g).test(this.Education[0].URL))  {
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

.Education {
    font-family: Arial, Helvetica, sans-serif;

    margin-left: -20%;
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

.EducationButton {
    margin-left:-243px;
    margin-top:9px;
}



span{
   font-size:small;
   color:red;
}

</style>