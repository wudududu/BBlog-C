<template>
  <div>
    <div id="header">
      <span>BBlog</span>
    </div>
    <div id="parent-box">
      <div id="child-box">
        <router-view />
      </div>
    </div>
    <footer>

    </footer>
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
#parent-box {
  margin-top: 20px;
  padding: 20px;
  text-align: center;
}
@media screen and (min-width: 800px) {
  #child-box {
    width: 760px
  }
}
@media screen and (max-width: 800px){
  #child-box {
    width: calc(100% - 40px)
  }
}
#child-box {
  display: inline-block;
  text-align: left;
}
footer {

}
</style>
