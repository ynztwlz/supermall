<template>
  <div class="nav-bar">
    <div class="left"><slot name="left"></slot></div>
    <div class="center"><slot name="center"></slot></div>
    <div class="right"><slot name="right"></slot></div>
  </div>
</template>

<script>
export default {
  name: "NavBar"
}
</script>

<style scoped>
.nav-bar {
  display: flex;
  /*一般导航栏高度44px，或者64px*/
  /*当内部有内容时直接使用line-height即可，就不用定义height了*/
  /*height: 44px;*/
  line-height: 44px;
  text-align: center;
  box-shadow: 0 1px 1px rgba(100, 100, 100, 0.1);
}

.left, .right {
  width: 60px;
}

.center {
  /*左右两遍宽度固定，只剩中间这个，另flex:1则会将剩下的沾满*/
  flex: 1;
}
</style>
