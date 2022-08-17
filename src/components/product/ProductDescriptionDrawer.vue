<template>
    <div>
    
        <div class="drawer-background" :class="{show:active}" @click.prevent="$emit('close-product-drower')" > </div>
        <div class="drawer" :class="{show:active}">
            <div class="drawer-close "   @click.prevent="$emit('close-product-drower')">
                X
            </div>
            <div class="product-details" v-if="product">
                <h1 class="text-center">{{product.name}}</h1>
                <p class="description">{{product.description}}</p>
                <h3 class="text-center">${{product.price.toFixed(2)}}</h3>
                <div class="cart-total">
                    <h3>Cart total</h3>
                    <h4>${{product_total}}</h4>
                </div>
                <div class="button">
                    <button class="remove btn btn-danger btn-sm">Remove</button>
                    &nbsp; 
                    <button class="add btn btn-success btn-sm">Add</button>
                </div>
            </div>

        </div>
    </div>
</template>

<script>
export default {
    props:['product','active'],
    data() {
        return {
            
        }
    },
    computed:{
        product_total(){
            return 56.5;
        }
    }
}
</script>

<style scoped>
    .drawer-background{
        width: 100%;
        height: 100vh;
        background: #524f4fad;
        position: fixed;
        left: 0;
        top: 0;
        right: 0;
        bottom: 0;
        z-index: 999;
        display: none;
        transition-property: display;
        transition-duration: .8s;
        transition-timing-function: ease-in-out;
    }
    .drawer-background.show{
        display:block;
    }
    .drawer{
            width: 50vw;
            background: #fff;
            z-index: 999;
            position: fixed;
            top: 0;
            bottom: 0;
            left: -50vw;
            padding: 30px;
            border: 5px solid #fff;
            border-radius: 5px;
            overflow-y: scroll;
            transition-property: left;
            transition-duration: .8s;
            transition-timing-function: ease-in-out;
    }
    .drawer.show{
        left:0px;
    }
    .drawer-close{
        border: 2px solid #ddd;
        width: 5%;
        padding: 5px;
        text-align: center;
        font-weight: bold;
        float: right;
    }
    .drawer-close:hover{
        background: #000;
        color: #fff;
    }
    .cart-total,.button{
        text-align: center;
    }
 
</style>