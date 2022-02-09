<template>
<div>
    <h3 class="Profiles">Profiles</h3>
        <div class="container" v-for="(Profile, k) in Profiles" :key="k">
            <div class="leftsection">
                <div class="field">
                    <input type='text' placeholder='Network' class="style" v-model="Profile.network" tabindex="12" >
                </div>
                <div class="field">
                    <input type='text' placeholder='URL' class="style"  v-model="Profile.URL" v-on:change="validateURL()" tabindex="13">
                    <span><br>{{validurl}}</span>
                </div>
            </div>
        
            <div class="rightsection">
                <div class="field">
                    <input type='text' placeholder='Username' class="style" v-model="Profile.username" tabindex="14">
                </div>
            </div>
            
        </div>
        <input type="button" class="ProfilesButton" @click.prevent="addProfile()" value="Add Profiles"/>
</div>
</template>

<script>

export default {
    name:"Profiles",
      data(){
        return{
            Profiles: [{
                network: "",
                URL: "",
                username: "",
            }],
            validurl: ''
         }
    
    },
    methods:{
        addProfile(){

            
            this.Profiles.push({
                network: "",
                URL: "",
                username: "",
            })
        },
        validateURL(){
         if ((/^(?:([A-Za-z]+):)?(\/{0,3})([0-9.\-A-Za-z]+)(?::(\d+))?(?:\/([^?#]*))?(?:\?([^#]*))?(?:#(.*))?$/.test(this.Profiles.URL))) {
                this.validurl = ""
            } 
        else {
                this.validurl= "Please enter a valid URL "
            }

    }
    }
      
            
}
</script>

<style scoped>
.container {
    display: flex;
    flex-wrap: nowrap;
    margin-left:35%;
}
.leftsection{
    margin-left:20px;
}
.rightsection{
    margin-left:26px;
    
}

.Profiles{
     font-family: Arial, Helvetica, sans-serif;
     margin-left:-21%;
}
.style{
    height:26px;
    border-top:transparent;
    border-left:transparent;
    border-right:transparent;

}

.ProfilesButton{
    margin-left:-256px;
    margin-top:29px;
}
.field{
    margin-top:px;
}
</style>
