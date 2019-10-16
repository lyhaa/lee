<template>
  <div class="Home" style="padding-bottom:51px" ref="wrapper">
    <wv-header title="今日头条" :fixed="true" background-color="red">
      <div class="btn-back" slot="left">
        <i class="iconfont" style="display: inline-block;
    width: 6vw;">
          <img src="../assets/1222280.png" alt width="100%" />
        </i>
      </div>
      <div class="btn-menu" slot="right">
        <i class="iconfont icon-menu" style="display: inline-block;
    width: 6vw;">
          <img src="../assets/1223096.png" alt width="100%" />
        </i>
      </div>
    </wv-header>
    <wv-panel title="今日热点">
      <wv-media-box
        v-for="(item,index) in data.data"
        :key="index"
        :thumb="item.imgurl.length>0?item.imgurl[0].url:thumb"
        :title="item.title"
        :description="item.abstract"
      ></wv-media-box>
      <wv-cell title="查看更多" is-link slot="ft" @click="loader_ged"></wv-cell>
    </wv-panel>
    <wv-button
      type="default"
      :plain="true"
      style="width: 10%;
          position: fixed;
          right: 0;
          bottom: 80px;
          padding: 0;
          line-height: 30px;
          "
          @click="HDB"
    >回顶</wv-button>
  </div>
</template>
<script>
export default {
  name: "Home",
  data() {
    return {
      name: "",
      thumb: require("../assets/logo.png"),
      description: "",
      data: "",
      num: 0,
      scll: 0
    };
  },
  created: async function() {
    this.data = await this.axios.get("http://127.0.0.1:3000/tou", {
      params: { num: this.num }
    });
    //  console.log(this.$refs.wrapper.scrollTop)
  },
  methods: {
    onHeaderClick() {
      console.log(678);
    },
    loader_ged: async function() {
      this.num += 20;
      let arr = await this.axios.get("http://127.0.0.1:3000/tou", {
        params: { num: this.num }
      });
      this.data.data = [...this.data.data, ...arr.data];
    },
    HDB(){
      document.body.scrollTop = 0;
    }
  },
  activated() {
    // console.log(this.$store.state)
  },
  mounted() {},
  beforeRouteEnter(to, from, next) {
    next(vm => {
      document.body.scrollTop = vm.$store.state.scrollTopYY;
    });
  },
  beforeRouteLeave(to, from, next) {
    this.$store.commit("increment", document.body.scrollTop);
    next();
  }
};
</script>
<style lang="scss" scoped>
</style>