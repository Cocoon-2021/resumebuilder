<template>
<div>
    <h1>List Resumes</h1>
    <div class="Container">
        <table> 
            <!-----Table to list all resume---->
            <tr>
                <th>Resume ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Action</th> 
            </tr>
            <tr v-for="item in list" v-bind:key="item.id">
                <td>{{item.resumeId}}</td>
                <td>{{item.basics.resumerName}}</td>
                <td>{{item.basics.resumerEmail}}</td>
                <td>
                    <span>
                        <router-link to="/Edit"><button class="Editbutton">Edit</button></router-link>
                        <button class="Removebutton" v-on:click="deleteUser(item.resumeId)">Remove</button>
                    </span>
                </td>
            </tr>
        </table>
    </div>
</div>
</template>



<script>
import vue from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios'
vue.use(VueAxios, axios)
//Script to display details using API
export default {
    name: "Home",
    data() {
        return {
            list: undefined
        }
    },
    mounted() {
        vue.axios.get("http://c574-202-191-65-218.ngrok.io/resume")
            .then((result) => {
                this.list = result.data
                console.warn(result.data)
            })
    },
// function to delete data from API
    methods:{
        getData(){
            this.axios.get("https://aa05a186-50d2-4c7c-b9e8-84c29628ff56.mock.pstmn.io/resume").then((result)=>{
            console.warn(result)
            this.list=result.data
            })

        },
        deleteUser(id){
            this.axios.delete("https://aa05a186-50d2-4c7c-b9e8-84c29628ff56.mock.pstmn.io/resume"+this.resumeId).then((result)=>{
            console.warn(result)
            this.getData();
            })
        }
    }
 
}
</script>



<style>

.Createbutton{
  margin-left:246px;
  margin-top:10px;
  width:12%;
  font-family: Arial, Helvetica, sans-serif;
  
}
.Editbutton{
  margin-left:15px;
  font-family: Arial, Helvetica, sans-serif;
}
.Removebutton{
  margin-left:15px;
  font-family: Arial, Helvetica, sans-serif;
}
table {
    text-align: center;
}

h1 {
    text-align: center;
}
.Container{
  margin: auto;
  width: 50%;
  border: rgba(4, 4, 83, 0.534);
  padding: 10px;
}
table{
 
  margin-left: auto;
  margin-right: auto;
  font-family: Arial, Helvetica, sans-serif;
  border-collapse: collapse;
  width: 100%;

}
td, th {
  border: 1px solid #ddd;
  padding: 8px;
}

tr:nth-child(even){background-color: #f2f2f2;}

tr:hover {background-color: #ddd;}

 th {
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: center;
  background-color: rgb(5,10,92);;
  color: white;
}
.list{
    font-size:20px;
    font-family: Arial, Helvetica, sans-serif;
}
h1{
    font-family: Arial, Helvetica, sans-serif;
    color: rgb(5,10,92); 
}
</style>
