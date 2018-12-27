<template>
  <div>
    <div id="header">
      <span>BBlog</span>
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'layout',
  data() {
    return {

    }
  }
}
</script>
<style lang="scss" scoped>
#header {
  width: 100%;
  height: 60px;
  box-shadow: 0px 2px #f1f1f1
}
</style>
