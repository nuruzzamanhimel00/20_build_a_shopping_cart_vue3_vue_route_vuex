import { createStore } from 'vuex'
import AppStorage from '@/storage/AppStorage.js'

// Create a new store instance.
const store = createStore({
  state :{
   cart:[],
  },
  getters:{
    productQuantity: state => product =>{
      let item =  state.cart.find( crt => crt.id === product.id );
      if(item){
        return item.quantity;
      }else{
        return null;
      }
    }
  },
  mutations: {
    addTOCart(state, payload){
      let item = state.cart.find((crt) => crt.id === payload.id );
      if(item){
        item.quantity++;
      }else{
        state.cart.push({
          id: payload.id, quantity: 1
        });
      }
      AppStorage.addCartIntoLocalStorage(state.cart);
      // console.log(state.cart);
    },
    removeToCart(state, product){
      let item = state.cart.find( crt => crt.id === product.id );
      if(item){
        if(item.quantity > 1 ){
          item.quantity--;
          AppStorage.addCartIntoLocalStorage(state.cart);
        }else{
          state.cart = state.cart.filter( crt => crt.id != product.id );
          // console.log(item);
          AppStorage.addCartIntoLocalStorage(state.cart);
        }
      }
    },
    updateCartFromLocalStorage(state){
      const cart = AppStorage.getCartFromLocalStorage();
      if(cart){
        state.cart = cart;
      }
    }
  },
  actions:{

  }
});

export default store;