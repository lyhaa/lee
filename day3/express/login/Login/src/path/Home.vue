<template>
  <div id="login">
    <div class="alert alert-info" role="alert" v-if="isok">登陆成功</div>
    <div class="alert alert-danger" role="alert" v-if="isok2">登录失败</div>
    <div class="form-signin">
      <div class="form-label-group">
        <input
          type="text"
          id="inputEmail"
          class="form-control"
          placeholder="Email address"
          required
          autofocus
          v-model="username"
        />
        <label for="inputEmail">账号</label>
      </div>

      <div class="form-label-group">
        <input
          type="password"
          id="inputPassword"
          class="form-control"
          placeholder="Password"
          required
          v-model="psw"
        />
        <label for="inputPassword">密码</label>
      </div>
      <button class="btn btn-lg btn-primary btn-block" @click="gain" >登录</button>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      username:'',
      psw:'',
      isok:!1,
      isok2:!1
    };
  },
  methods:{
    gain() {
      if (this.username&&this.psw&&this.username.length>=6&&this.psw.length>=6) {
          this.axios.post("http://127.0.0.1:5555/login",{
            username:this.username,
            psw:this.psw
          })
          .then((data)=>{
            if(data.data == "登录成功"){
              this.isok = !0;
              var tim = setTimeout(() => {
                this.isok = !1;
                clearTimeout(tim);
              }, 1500);
            }else{
              this.isok2 = !0;
              var tim = setTimeout(() => {
                this.isok2 = !1;
                clearTimeout(tim);
              }, 1500);
            }
          }).catch((err)=>{
              console.log(err);
          })
          this.username = "";
          this.psw = "";
      }else{
        alert("请填好资料");
      }
    }
  }
};
</script>
<style lang="scss" scoped>
#login {
  width: 500px;
  margin: 0 auto;
}
</style>