<template>
<form v-on:submit.prevent="onSubmit">
  <input type="text" v-model="username" placeholder="Enter a github username here" />
  <button type="submit">Go!</button>
</form>
</template>

<script>
import bus from '../bus'
export default {
  name: 'GithubInput',
  methods:{
      onSubmit(event){
          if(this.username && this.username!==''){
            bus.$emit('new-username', this.username) 
          } 
      }
  },
  data() {
    return {
      username: '',
    }
  },
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1{
  font-weight: normal;
}

</style>
