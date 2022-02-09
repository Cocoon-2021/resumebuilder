import Vue from 'vue'
import Vuex from 'vuex'



Vue.use(Vuex)
export default ({

  state:{
    Basics:[{
      name: "",
      imageUrl: "",
      phone: "",
      summary: "",
      label: "",
      email: "",
      url: "",
    }],
    Location:[{
      address: "",
      city: "",
      region: "",
      postalCode: "",
      countryCode: "",
    }]
    

  },
  mutations:{
    setbasicsName(state,value){
      state.Basics.name=value
    },
    setbasicsImageUrl(state,value){
      state.Basics.imageUrl=value
    },
    setbasicsPhone(state,value){
      state.Basics.phone=value
    },
    setbasicsSummary(state,value){
      state.Basics.summary=value
    },
    setbasicsLabel(state,value){
      state.Basics.label=value
    },
    setbasicsEmail(state,value){
      state.Basics.email=value
    },
    setbasicsUrl(state,value){
      state.Basics.url=value
    },
    //------------------Location----------------------//
    setLocationaddress(state,value){
      state.Location.address=value
    },
    setLocationcity(state,value){
      state.Location.city=value
    },
    setLocationRegion(state,value){
      state.Location.region=value
    },
    setLocationPostalCode(state,value){
      state.Location.postalCode=value
    },
    setLocationCountrycode(state,value){
      state.Location.countryCode=value
    }

  }
})

// /* eslint-disable no-new */
// const store = new Vuex.Store({
//   plugins: [createPersistedState()],
//   modules: {
//   }
// })

// export default store
