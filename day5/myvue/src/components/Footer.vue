<template>
  <div class="Footer">
    <wv-tabbar fixed>
      <wv-tabbar-item
        v-for="(item,index) in Menus"
        @click="tabclick(index,item.href)"
        :key="index"
        v-bind:is-on="item.ison?true:false">
        <span slot="icon" style="display: inline-block; position: relative;">
          <img class="weui-tabbar__icon" :src="item.icon" slot="icon" />
          <wv-badge
            style="position: absolute;top: -2px;right: -13px;"
            v-if="item.num>0">{{item.num}}</wv-badge>
        </span>
        {{item.name}}
      </wv-tabbar-item>
    </wv-tabbar>
  </div>
</template>
<script>
// const icon = "/img/logo.82b9c7a5.png";
export default {
    data () {
        return {
              Menus: [
          { name: '首页', href: "/", icon:require("../assets/1215334.png"), ison: true ,num:0 },
          { name: '列表', href: "/list", icon:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIUAAABoCAQAAAB1CfvrAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QAAKqNIzIAAAAJcEhZcwAA6mAAAOpgAYTJ3nYAAAAHdElNRQfiDBMOOjuOOB8OAAAAEGNhTnYAAACsAAAAqgAAABoAAAAhzStnugAAAfJJREFUeNrt3DFKA0EYxfGnBC+QVgtvoegRRAQJHsAbWNroBRT0GIqF6AHsDNp4A4vYCtoaMBYyH2yzmZkNzOyX/y9VICbfPvZBZiIjAQASrDSebemk9EALMdZl+h8NGs82NCp9FeWslh6gHkRhiMIQhSEKQxSGKAxRGKIwRGGIwjTXIBPdlh5oIcalBwAAAAAAZBpp5uJxk3Px7FcYojBEYYjCEIUhCkMUhigMURiiMERhiMI0/29zXdulB1qIDz2XHgEAAAAA2vVrOda2zBrqc5EfVfsPhW0/AE600+3i/exXrOtJ512ux08U0kBnuteQKP7t6S23KN6i6FAUf1FkF8VjFFJWUbxGkVEUv1EkF8VzFFJSUbxHkVAU/1FEF2UZopA6ffXqn/mLuWm3NUp/xK1tH/LXKP0Ru9DvvJivX/yuh/uipG0CuS5K6o6Y46Kkbw/+6KD00HVE8asrrZUeuoYovnRYeuA6onjRZulxa4jCcTHSonBdjJQoWovRPOCl9vM2s87RtKgudKppbBR+z9v81rHu2l8yiHunnnvVkd7nvcj1skSSNNO1ducH4f+uiChG4DuKqGIEfgsSXYzA612RUIzAZxRJxQj8FSS5GIG3uyKjGIGvKLKKEfgpSHYxgn6dt9l2jua+HkuPBwBL5Q+lAhPE7X7NSQAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAxOC0xMi0xOVQxNDo1ODo1OSswODowMK/OhesAAAAldEVYdGRhdGU6bW9kaWZ5ADIwMTgtMTItMTlUMTQ6NTg6NTkrMDg6MDDekz1XAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAAABJRU5ErkJggg==", 
          ison: false,num:0 },
          { name: '购物车', href: "/cart", icon:require("../assets/1229112.png"), ison: false ,num:1 },
          { name: '我', href: "/My", icon:require("../assets/1198581.png"), ison: false,num:0 }
        ]
        }
    },
    methods:{
        tabclick(idx,r) {
        this.Menus.forEach(function(item){
            item.ison = false;
        })
        this.Menus[idx].ison = true;
        this.$router.history.push(r);
        }
    },
     created () {
      let path = this.$router.history.current.path;
       this.Menus.forEach(function(item){
         if(path == item.href){
            item.ison = true;
         }else{
            item.ison = false;
         }
        })
    },
    watch: {
      '$route'(val){
         this.Menus.forEach(function(item){
            if(val.fullPath == item.href){
                item.ison = true;
            }else{
                item.ison = false;
            }
        })
      }
    }
}
</script>