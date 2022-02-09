<template>
<form>
    <Header />
    <h3 class="Basics">Basics</h3>
    <div class="container">
        <!----------Left section of Basics---------------------------->
        <div class="leftsection">
            <div class="field">
                <input type="text" placeholder="Name" v-on:change="validateName()" v-model="Basics.name"  tabindex="1">
                <span><br>{{validname}}</span>
            </div>
            <div class="field">
                <input type="text" placeholder="Image URL" v-model="Basics.imageURL" v-on:change="validateURL()" tabindex="3">
                <span><br>{{validURL}}</span>
            </div>
            <div class="field">
                <input type="text" placeholder="Phone"  v-model="Basics.phone" v-on:change="validatenumber()" tabindex="5">
                <span><br>{{validphone}}</span>
            </div>
            <div class="summary">
                <textarea placeholder="Summary" tabindex="6" v-model="Basics.summary" ></textarea>
            </div>
        </div>
        <!----------Right section of Basics---------------------------->
        <div class="rightsection">
            <div class="field">

            </div>
            <div class="field">
                <input type="text" placeholder="E-mail" v-model="Basics.email" v-on:change="validateEmail()" tabindex=2>
                <span><br>{{validemail}}</span>
            </div>

            <div class="field">
                <input type="text" placeholder="URL" v-model="Basics.URL" tabindex="4">
            </div>

        </div>
    </div>
    <h3 class="Location">Location</h3>
    <!----------Left section of Location---------------------------->
    <div class="container">
        <div class="leftsection">
            <div class="field">
                <input type="text" placeholder="Address" v-model="Locations.address"  v-on:change="validateAddress()" tabindex="7">
                <span><br>{{validaddress}}</span>
            </div>
            <div class="field">
                <input type="text" placeholder="City" v-model="Locations.city" tabindex=9>
            </div>
            <div class="field">
                <input type="text" placeholder="Region" v-model="Locations.region" tabindex="11">
            </div>
        </div>
        <!----------Right section of Location---------------------------->
        <div class="rightsection">
            <div class="field">
                <input type="text" placeholder="Postal code" v-model="Locations.postalCode" v-on:change="validatePostalCode()" tabindex=8>
                <span><br>{{validpostalcode}}</span>
            </div>
            <div class="field">
                <input type="text" placeholder="Country" v-model="Locations.countryCode" tabindex=10>
            </div>

        </div>
    </div>
    <!---------- section of Profiles---------------------------->
    <div>
        <Profiles />
    </div>

</form>
</template>

<script>
import Header from "./Header.vue"
import Profiles from "./Profiles.vue"

export default {
    name: "Basic",
    components: {
        Header,
        Profiles,

    },
    props: {
        Basic: Array
    },

    data() {
        return {

            counter: 1,
            Basics: {
                name: "",
                imageURL: "",
                phone: "",
                summary: "",
                label: "",
                email: "",
                URL: "",
            },
            Locations: {
                address: "",
                city: "",
                region: "",
                postalCode: "",
                countryCode: "",
            },
            validemail: "",
            validphone: "",
            validname: "",
            validURL: "",
            validaddress: "",
            validpostalcode:""
        }
    },
   computed:{
       name:{
         set(){
             this.$store.state.Basics.name
         },
         get(value){
             this.$store.commit('setbasicsname',value)
         }
       }
   },
   
   //Validations for input fields
    methods: {
       

        validateEmail() {

            if ((/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/).test(this.Basics.email)) {
                console.log("function")
                this.validemail = " "

            } else {
                console.log("elsefunction")
                this.validemail = "Please enter a valid email"

            }

        },


        validatenumber() {

            if ((/^\(?\d{3}\)?[-. ]?\d{3}[-. ]?\d{4}$/.test(this.Basics.phone))) {
                this.validphone = ""
                console.log("iffunction")
            } else {
                this.validphone = "Please enter a valid phone no."
                console.log("elsefunction")
            }

        },

        validateAddress() {

            if ((/^[a-zA-Z]{2,10}$/.test(this.Locations.address))) {
                this.validaddress = " "

            } else {
                this.validaddress = "Please enter a valid address "
            }

        },
        validatePostalCode() {

            if ((/^[a-zA-Z]{2,10}$/.test(this.Locations.postalCode))) {
                this.validpostalcode = " "

            } else {
                this.validpostalcode= "Please enter a valid postal code "
            }

        },

    },

    

}
</script>

<style scoped>
.container {
    display: flex;
    flex-wrap: nowrap;
    margin-left: 35%;
}

.leftsection {
    margin-left: 10px;
}

.rightsection {
    margin-left: 10px;

}

.field {
    margin: 10px;

}

textarea {
    margin-left: 2px;
}

.Basics {
    font-family: Arial, Helvetica, sans-serif;
    margin-left: -22%;
}

.Location {
    font-family: Arial, Helvetica, sans-serif;
    margin-left: -21%;

}

.Profiles {
    font-family: Arial, Helvetica, sans-serif;
    margin-left: -21%;
}

input {
    height: 22px;
    border-top: transparent;
    border-left: transparent;
    border-right: transparent;

}

textarea {
    border-top: transparent;
    border-left: transparent;
    border-right: transparent;
}

.ProfilesButton {
    margin-left: 460px;
}

span {
    font-size: small;
    color: red;
}
</style>
