<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld
  },
  created () {
    window.addEventListener('click', this.$publicFunction.debounce(this.printFn, 1000));
  },
  methods:{
    printFn(){
      let i=1
      console.log(i++)
    }
  }
}
</script>
