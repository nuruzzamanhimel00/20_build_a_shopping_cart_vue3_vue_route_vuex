import { createStore } from 'vuex'
import AppStorage from '@/storage/AppStorage.js'

// Create a new store instance.
const store = createStore({
  state :{
   cart:[],
   itemsData:[],
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
    addTOCart(state, product){
      let  cartItem = state.cart.find((crt) => crt.id === product.id );
      if( cartItem){
         cartItem.quantity++;
      }else{
        state.cart.push({
          id: product.id, quantity: 1
        });
      }
      AppStorage.addCartIntoLocalStorage(state.cart);

      let  item = state.itemsData.find((item) => item.id === product.id );
      if( item){
         item.quantity++;
      }else{
        state.itemsData.push({
          ...product, quantity: 1
        });
      }
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

      let itemdata = state.itemsData.find( itmData => itmData.id === product.id );
      if(itemdata){
        if(itemdata.quantity > 1 ){
          itemdata.quantity--;

        }else{
          state.itemsData = state.itemsData.filter( itmData => itmData.id != product.id );
        }
      }
      // console.log(state.itemsData);
    },
    updateCartFromLocalStorage(state, items){
      const cart = AppStorage.getCartFromLocalStorage();
      if(cart){
        state.cart = cart;
        let cartId = [];
        for (let key in state.cart) {
          cartId.push(state.cart[key].id)
        }
        for (let itemsData of items) {
          for (let cartData of state.cart) {
            if(cartData.id == itemsData.id){
                state.itemsData.push({
                  ...itemsData, ...cartData
                });
            }
          }
        }
        
        // console.log(state.itemsData);
        
      }

    }
  },
  actions:{

  }
});

export default store;