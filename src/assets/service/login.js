import SectionRight from '@/components/SectionRight.vue';
// import '@/assets/service/hash.js';

import {
  VALIDAR_LOGIN,
} from "../service/endpoints.js";


const axios = require('axios').default;
export default {

  name: 'App',
  data (){
    return{
      name:'',
      password: '',
      email: '',
      utcTimeStamp: '',
      signature: '',
      actual: '',
      firma: '',
    }
  },
  mounted() {

    // let actual = new Date();
    // let PUBLIC_KEY = "VBNfgfTYrt5666FGHFG6FGH65GHFGHF656g";
    // let PRIVATE_KEY = "DGDFGDbnbnTRTEfg67hgyTYRTY56gfhdR6";
    // let utcTimeStamp =  actual.toISOString();

    // PRIVATE_KEY+','+PUBLIC_KEY +','+ utcTimeStamp;

    axios
    .post(VALIDAR_LOGIN)
    .then(response => {
     console.log("response", response);
   })

  },
  components: {
    SectionRight
  }
}
