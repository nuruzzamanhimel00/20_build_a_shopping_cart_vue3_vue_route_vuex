<template>
  <div class="hello">
   <h1>Home Page</h1>
   <div class="product-summary-card row">

      <product-summary-card
        v-for="(value, key) in items" :key="key"
        :product="value"
        class="col-md-4"
        @view-product="onViewProduct($event)"
      >
      
      </product-summary-card>

   </div>

     <product-description-drawer
      :product="product"
      :active="active.product_drawer"
      @close-product-drower="onCloseProductDrower"
      />

  </div>
</template>

<script>
import items from '@/data/items.js'
import ProductSummaryCard from '@/components/product/ProductSummaryCard.vue'
import ProductDescriptionDrawer from '@/components/product/ProductDescriptionDrawer.vue'

export default {
  name:'HomeComp',
  data() {
    return {
       items: items,
       product:null,
       active:{
        product_drawer: false
       }
    }
  },
  components:{
    ProductSummaryCard,
    ProductDescriptionDrawer
  },
  methods:{
    onViewProduct(event){
      this.product= event;
      this.active.product_drawer= true;
      // console.log(this.product);
    },
    onCloseProductDrower(){
      this.active.product_drawer= false;
    }
  }
}
</script>

