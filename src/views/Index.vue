<template>
     <div>
          <div class="left">
          <List></List>
          </div>
         <div>
          <router-view></router-view>
          </div>
    </div>
</template>
<script>
import List from "../components/List.vue";
import Detail from "../components/Detail.vue";
export default {
        components: { List,Detail },

}
</script>
<style lang="">
    
</style>