<template>
    <div>
      <router-view></router-view>
    </div>
</template>
<script>

import List from "./components/List.vue";
import Detail from "./components/Detail.vue";
import Login from "./components/Login.vue";
export default {
    components:{
        List,Detail,Login
    }
}
</script>
<style lang="less">
    
</style>