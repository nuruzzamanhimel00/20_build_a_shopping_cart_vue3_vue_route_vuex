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
  components: {
    NavComp
  }
}
</script>

<style>

</style>
