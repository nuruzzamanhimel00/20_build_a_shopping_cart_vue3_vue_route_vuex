<template>
  <div>
    <nav-comp></nav-comp>
     <router-view></router-view>
     
  </div>
</template>

<script>
import NavComp from '@/components/NavComp.vue'

export default {
  name: 'App',
  data() {
    return {
     
    }
  },
  created(){
    this.$store.commit('updateCartFromLocalStorage');
  },
  components: {
    NavComp
  }
}
</script>

<style >

</style>
