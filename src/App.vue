<template>
  <div>
    <nav-comp></nav-comp>
     <router-view></router-view>

    <product-description-drawer/>
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
  components: {
    NavComp
  }
}
</script>

<style >

</style>
