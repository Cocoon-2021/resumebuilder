<template>
   <div class="main">
       <div v-show= "count===1">
            <ListResume/> 
             <input type="button" @click="next()" value="Add new" class="AddButton">
        </div>
       <div v-show= "count===2">
            <Basics/> 
             <input type="button" @click="next()" value="Next" class="NextButton">
        </div>
        <div v-show= "count===3">
            <Work/>
            <input type="button" @click="prev()" value="Previous" class="PreviousButton"> 
            <input type="button" @click="next()" value="Next" class="NextButton">
       </div>
       <div v-show= "count===4">
            <Education/>
            <input type="button" @click="prev()" value="Previous" class="PreviousButton"> 
            <input type="button" @click="next()" value="Next" class="NextButton">
       </div>
       <div v-show= "count===5">
            <Volunteer/>
            <input type="button" @click="prev()" value="Previous" class="PreviousButton"> 
            <input type="button" @click="next()" value="Next" class="NextButton">
       </div>
       
   </div>
   
    
</template>

<script>
    import ListResume from "./ListResume.vue"
    import Basics from "./Basics.vue"
    import Work from "./Work.vue"
    import Education from "./Education.vue"
    import Volunteer from "./Volunteer.vue"
    export default
        {
        name:'Home',
        components:{
            ListResume,
            Basics,
            Work,
            Education,
            Volunteer,
           

        },
        data(){
            return{
                count:1
            }
        },
        methods:{
            prev:function(){
                this.count--
            },
            next:function(){
                this.count++
            }
        }
    }
</script>





<style scoped>
.AddButton{
    
  margin-left:10px;
 
  width:7%;
  font-family: Arial, Helvetica, sans-serif;
  
}
.NextButton{
     width:7%;
    font-family: Arial, Helvetica, sans-serif;
}
.PreviousButton{
    width:7%;
    font-family: Arial, Helvetica, sans-serif;
    margin-top:5px;
    margin-left:5px;
}


</style>
