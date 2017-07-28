<template>
<div v-if="data">
  <h4>{{ data.name }}</h4>
  <p>{{ data.company }}</p>
  <p>Number of repos: {{ data.public_repos }}</p>
</div>
</template>

<script>
export default {
  name: 'GithubUserData',
  props: ['data'],
  data() {
    return {}
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
