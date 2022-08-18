<template>
    <div>
        <h1>Carts component</h1>
        <!-- {{ getCartItems }} -->
        <div class="row">
            <div class="col-md-4" v-for="(product, key) in getCartItems" :key="key">
                <div class="card  m-1 text-center" >
                    <div class="card-body">
                        <h5 class="card-title">{{product.name}}</h5>
                        <h6 class="card-subtitle mb-2 text-muted"><b>Total cost:</b> ${{ product_price(product) }}</h6>
                        <p class="card-text"> {{description(product.description)}}</p>
                        <h3>In cart:- {{ product.quantity }}</h3>
                
                    </div>
                </div>
            </div>
            
        </div>
        <cart-summary-payment-cart />
        
    </div>
</template>
<script>
import CartSummaryPaymentCart from '@/components/cart/CartSummaryPaymentCart.vue'
import {mapGetters} from 'vuex'
export default {
    data() {
        return {
            
        }
    },
    computed:{
        ...mapGetters(['getCartItems']),
    },
    methods:{
        description(description){
            return description.substring(0,150);
        },
        product_price(product){
            return product.quantity * product.price;
        }
    },
    components:{
        CartSummaryPaymentCart
    }
}
</script>