<template>
  <div class="app">
    <content>
      <p>Time: {{ now }}</p>
      <p> isGem: {{ isGem }} </p>
      <p>Page Title: {{ gemInfo.title }}</p>
    </content>
    <button @click="readInfo"> Refresh Info </button>
  </div>
</template>
<script>
  export default {
    name: 'App',
    data: () => ({
      now: new Date(),
      isGem: false,
      gemInfo: {}
    }),
    created () {
      setInterval(() => {
        this.now = new Date()
      }, 1000)

      // this.checkIfGem()
      this.readInfo()
    },
    methods: {
      readInfo () {
        this.$run(function () {
          const el = document.createElement('script')
          el.innerHTML = ` console.log(window.app)`
          el.onload = () => {
            document.body.removeChild(el)
          }
          document.body.appendChild(el)
          return document.title
        }).then((result) => {
          this.$set(this.gemInfo, 'title', result)
        })
      },
      checkIfGem () {
        this.$run(function () {
          return (window.app.$children[0].$options.name)
        }).then(result => {
          console.log(result)
          this.isGem = !!result
        })
      }
    }
  }
</script>
<style scoped>
  .app {
    padding: 10px;
  }
</style>
