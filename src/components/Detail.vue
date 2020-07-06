<template>
  <div class="box1">

      <list style="float:left"></list>
      <div class="box2">
        <Head></Head>
        <div class="box3">
      <ul class="right" v-for="(item,index) in detail "  :key="index">
      <img :src="item.coverImgUrl">
      <li>{{item.name}}</li>
      
    </ul>
      </div>
  </div>
  </div>
</template>
<script>
import Head from "../layout/Head.vue";
import List from "./List.vue";

export default {
  components:{Head,List},
  data() {
    return {
      detail: []
    };
  },
  
  created() {
    axios
      .post(
        "https://showme.myhope365.com/api/shop/shopGoods/open/list"  )
      .then(res => {
          this.detail = res.data.rows;
      });
  },
  watch: {
    $route(){
        const id = new FormData();
        id.append("categoryId",this.$route.query.id);
        axios .post("https://showme.myhope365.com/api/shop/shopGoods/open/list",id) .then(res => {
        this.detail = res.data.rows;
      });
    }
  },
};
</script>
<style scoped>
* {
  margin: 0;
}
head {
  height: 20px;
  display: block;
}
.box2 {
  text-align: center;
}
.box3 {
  display: flex;
  flex-wrap: wrap;
}
ul {
  list-style: none;
}
ul img {
  width: 300px;
  height: 300px;
}
li {
  flex-shrink: 1;
}
</style>