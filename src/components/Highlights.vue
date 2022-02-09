<template>
<div>
    <form>
        <div class="container" >
            <div class="leftsection" v-for="index in counter" :key="index">
                <div class="field">
                    <input type="text" placeholder="Highlights" class="style" >
                </div>
            </div>
            
        </div>
        <input type="button" class="HighlightsButton" @click.prevent="addinput()" value="Add Highlights"/>
    </form>
</div>
</template>

<script>
export default
{
  name:"Course",
      data(){
        return{
            counter:1
         }
    
    },
    methods:{
        addinput(){
            this.counter =this.counter+1

        }
    }
      
            
}

 


</script>

<style scoped>
.container {
  
    margin-left:35%;
}
.leftsection{
    margin-left:20px;

}



.style{
    height:26px;
    border-top:transparent;
    border-left:transparent;
    border-right:transparent;
    margin-left:-82px;

}
textarea{
    border-top:transparent;
    border-left:transparent;
    border-right:transparent;
}
.HighlightsButton{
    margin-left:-73px;
    margin-top:22px;
}
</style>

