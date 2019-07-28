<template>
  <div class="home">
    <h1>Current twitter count</h1>
    <h2>Trump: {{twitterData.trump}}</h2>
    <h2>Boris: {{twitterData.boris}}</h2>
    <h2>Iran: {{twitterData.iran}}</h2>
    <h2>Bitcoin: {{twitterData.bitcoin}}</h2>
    <h2>Crypto: {{twitterData.crypto}}</h2>
    <h2>Ethereum: {{twitterData.ethereum}}</h2>
  </div>
</template>

<script>
// @ is an alias to /src
import { mapState } from 'vuex'
export default {
  name: 'home',
  data(){
    return{

    }
  },
  computed:{
    ...mapState(['twitterData'])
  }
};
</script>
