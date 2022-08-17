import HomeComp from '../components/HomeComp.vue'
import AboutComp from '../components/AboutComp.vue'
const routes = [
    { 
        path: '/', 
        component: HomeComp ,
        name:'home'
    },
    { 
        path: '/about', 
        component: AboutComp ,
        name:'about'
    },
   
  ];

export default routes;