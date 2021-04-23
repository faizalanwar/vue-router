<template>
<img alt="Vue logo" src="./assets/logo.png">
  <Navbar :idMenu="idMenu" :key="idMenu" />  
  <router-view @id-menu="setMenu($event)" />
</template>

<script>
import Navbar from '@/components/Navbar'
import { ref } from 'vue'

export default {
  name: 'App',
  components: {
    Navbar    
  },
  setup(){
    const idMenu = ref(1);

    function setMenu(id)
    {
      idMenu.value = id;
    }

    return {
      setMenu,
      idMenu,
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
