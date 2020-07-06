<template>
    <div class="background">
        <div class="main">
          <button>账号</button>
          <input type="text">
          <br>
          <button>密码</button>
          <input type="text">
          <br>
           <button @click="login">登录</button>
            </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            
        }
    },
    methods: {
        login(){
            this.$router.push("/index")
        }
    },
    
}
</script>
<style scoped >
.background {
  background-image: url("../assets/image/timg.jpg");
  background-repeat: no-repeat;
  background-size: 100%;
  position: fixed;
  height: 100%;
  top:0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
}
</style>