<template>
  <div class="app">
    <h2> Tiger Assistant </h2>
    <content> Time: {{ now }} </content>
  </div>
</template>
<script>
  export default {
    name: 'App',
    data: () => ({
      now: new Date()
    }),
    created () {
      setInterval(() => {
        this.now = new Date()
      }, 1000)
    }
  }
</script>
