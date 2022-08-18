<template>
  <div>
    <nav-comp></nav-comp>
     <router-view></router-view>
     
  </div>
</template>

<script>
import NavComp from '@/components/NavComp.vue'
import items from '@/data/items.js'

export default {
  name: 'App',
  data() {
    return {
      items: items
    }
  },
  created(){
    this.$store.commit('updateCartFromLocalStorage',this.items);
  },
  components: {
    NavComp
  }
}
</script>

<style >

</style>
