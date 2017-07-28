<template>
  <div class="hello">
    <h1>Hello world</h1>
    <github-input></github-input>
    <github-output></github-output>
  </div>
</template>

<script>
import GithubInput from './GithubInput'
import GithubOutput from './GithubOutput'
export default {
  name: 'hello',
    components: {
      'github-input': GithubInput,
      'github-output': GithubOutput,
    },
    data() {
      return {}
    },
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1{
  font-weight: normal;
}

</style>
