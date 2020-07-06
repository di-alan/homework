<template>
  <div class="left-list">
    <ul >
      <li v-for="(item,index) in list " :key="index" :class="index==aa?'active':''"  @click="click(index)">
        <router-link :to="'/index?id='+item.categoryId">{{item.name}}</router-link>
      </li>
    </ul>
  </div>
</template>
<script>

export default {

  data() {
    return {
      list: [],
      aa:""
    }
  },
  methods: {
     click(index){
         this.aa=index;

     }
  },
  created() {
    axios.post("https://showme.myhope365.com/api/shop/shopCategory/open/list") .then(res => {   
          this.list = res.data.rows; 
      });
  },
  
};
</script>
<style scoped>
    *{
    margin: 0;
    padding: 0;
}
.left-list {
  float: left;
}
ul {
  list-style: none;
  background-color: black;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 150px;
  align-items: center;
}
img {
  float: left;
  width: 32px;
  height: 32px;
}
span {
  float: left;
  height: 32px;
  margin: 0 0 0 12px;
  color: #fff;
  font-weight: 600;
  font-size: 18px;
  line-height: 32px;
  vertical-align: middle;
}
li {
    width: 100%;
    text-align: center;
    margin-top: 2px;
  height: 60px;
  line-height: 60px;
  color: aliceblue;
}
.active {
    background-color: lightgreen;
}
ul li:hover {
    background-color: aqua;
    cursor: pointer;
}      
</style>