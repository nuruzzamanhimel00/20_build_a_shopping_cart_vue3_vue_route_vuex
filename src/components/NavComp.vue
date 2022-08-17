<template>
    <div>
        <div class="nav-section my-3">
            <ul class="nav justify-content-center">
            <li class="nav-item">
                <router-link :to="{ name:'home'}" class="nav-link"  active-class="active">Home</router-link>
            </li>
            <li class="nav-item">
                <router-link :to="{ name:'about'}" class="nav-link"  active-class="active">About</router-link>
            </li>
            </ul>
            
        </div>
    </div>
</template>
<style scoped>
    .active.exact-active{
        background: green;
        color: #fff;
        font-weight: bold;
    }
</style>