<template>
    <div v-bind="$attrs">
        <div class="card my-2 text-center">
            <div class="card-body">
                <h5 class="card-title">{{product.name}}</h5>
                <h6 class="card-subtitle mb-2 text-muted">${{product.price.toFixed(2)}}</h6>
                <p class="card-text"> {{description}}</p>
                <a href="#" class="card-link btn btn-primary" @click.prevent="onViewProduct(product)">view product</a>
         
            </div>
        </div>
    </div>
</template>

<script>
export default {
    inheritAttrs: false,
    name:'ProductSummaryCard',
    props:['product'],
    data() {
        return {
            
        }
    },
    computed:{
        description(){
            return this.product.description.substring(0,150);
        }
    },
    methods:{
        onViewProduct(product){
            this.$emit('view-product',product);
        }
    }
}
</script>