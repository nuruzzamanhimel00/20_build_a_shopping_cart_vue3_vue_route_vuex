<template>
  <div class="hello">
   <h1>Home Page</h1>
   <div class="product-summary-card row">
      <product-summary-card
        v-for="(value, key) in items" :key="key"
        :product="value"
        class="col-md-3"
      >
      
      </product-summary-card>
   </div>
  </div>
</template>

<script>
import items from '@/data/items.js'
import ProductSummaryCard from '@/components/ProductSummaryCard.vue'

export default {
  name:'HomeComp',
  data() {
    return {
       items: items,
    }
  },
  components:{
    ProductSummaryCard
  }
}
</script>

