class AppStorage{
    addCartIntoLocalStorage(cart){
        localStorage.setItem('cart',JSON.stringify(cart));
    }
    
    getCartFromLocalStorage(){
        return JSON.parse(localStorage.getItem('cart'));
    }
}
export default new AppStorage;