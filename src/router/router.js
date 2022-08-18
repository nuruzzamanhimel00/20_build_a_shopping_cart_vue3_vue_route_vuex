import HomeComp from '../components/HomeComp.vue'
import AboutComp from '../components/AboutComp.vue'
import CartsComp from '../components/cart/cartComp.vue'
const routes = [
    { 
        path: '/', 
        component: HomeComp ,
        name:'home'
    },
    { 
        path: '/carts', 
        component: CartsComp,
        name:'carts'
    },
    { 
        path: '/about', 
        component: AboutComp ,
        name:'about'
    },
   
  ];

export default routes;