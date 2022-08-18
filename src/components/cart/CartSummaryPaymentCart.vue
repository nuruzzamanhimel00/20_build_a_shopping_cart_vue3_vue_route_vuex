<template>
    <div>
        <div class="card">
            <div class="card-body">
                <h1>Cart total:---{{cartTottal}}</h1>
                <button class="btn btn-success">Pay by the credit card</button>
            </div>
        </div>
    </div>
</template>
<script>
import {mapGetters} from 'vuex'
export default {
    data() {
        return {
            
        }
    },
    computed:{
        ...mapGetters(['cartTottal']),
    }
}
</script>