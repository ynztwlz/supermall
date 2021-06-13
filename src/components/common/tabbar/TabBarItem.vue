<template>
  <div class="tab-bar-item" @click="itemClick">
    <div v-if="!isShow"><slot name="slot-icon"></slot></div>
    <div v-else><slot name="slot-icon-active"></slot></div>
<!--    <div v-bind:class="{active: isShow}"v-bind:class="{active: isShow}"><slot name="slot-text"></slot></div>-->
    <div :style="activeStyle"><slot name="slot-text"></slot></div>
  </div>
</template>

<script>
export default {
  name: "TabBarItem",
  props: {
    path: String,
    activeColor: {
      type: String,
      default: 'red'
    }
  },
  data(){
    return {
      // isShow: true
    }
  },
  computed: {
    isShow(){
      return this.$route.path.indexOf(this.path) !== -1
    },
    activeStyle(){
      return this.isShow ? {color: this.activeColor} : {}
    }
  },
  methods: {
    itemClick(){
      this.$router.replace(this.path)
      // console.log('btn click');
      // console.log(this.path)
      // this.router.replace()
    }
  }
}
</script>

<style scoped>
  .active {
    color: red;
  }

  .tab-bar-item {
    height: 49px;
    flex: 1;
    text-align: center;
    font-size: 14px;
  }

  .tab-bar-item img {
    width: 24px;
    height: 24px;
    margin-top: 3px;
    /*消除图片下面的3px*/
    vertical-align: middle;
    margin-bottom: 2px;
  }
</style>
