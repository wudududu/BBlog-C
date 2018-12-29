<template>
  <div>
    <div v-for="item in lists" :key="item.title" class="content-list-box">
      <h1>{{ item.title }}</h1>
      <span>{{ item.time }}</span>
      <ul>
        <li v-for="kid in item.skeleton" :key="kid"><h3>{{ kid }}</h3></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'local',
  data() {
    return {
      lists: [{
        title: 'ajflkajf',
        skeleton: ['first', 'second', 'third'],
        time: '2018-12-28'
      }, {
        title: '你好志华',
        skeleton: ['放假阿卡丽', '法法', '耳短发'],
        time: '2018-12-28'
      }]
    }
  }
}
</script>
<style lang="scss" scoped>
.content-list-box {
  margin-bottom: 20px;
  box-shadow: 2px 2px #f1f1f1;
  ul {
    text-align: left
  }
  &:hover {
    box-shadow: 4px 4px #f1f1f8;
  }
}
</style>
