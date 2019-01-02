<template>
  <div>
    <div v-for="item in lists" :key="item.title" :data-article="item._id" class="content-list-box" @click="gotoArticle($event)">
      <h2 :data-article="item._id">{{ item.title }}</h2>
      <span :data-article="item._id">{{ item.time }}</span>
      <ul :data-article="item._id">
        <li v-for="kid in item.skeleton" :key="kid" :data-article="item._id"><span>{{ kid }}</span></li>
      </ul>
    </div>
  </div>
</template>

<script>
import {getArticleList} from '../utils/request.js'
export default {
  name: 'local',
  created() {
    // 拉取文章列表
    getArticleList({page: 1, limit: 2}).then(res => {
      const re = /^(#{2})\s(.*)$/
      let arr = [] // 保存2、3级标题内容
      res.data.forEach(i => {
        let tt = new Date(i.time)
        i.time = tt.getFullYear() + '/' + tt.getMonth() + '/' + tt.getDate() + '  ' + tt.getHours() + ':' + tt.getMinutes() + ':' + tt.getSeconds()
        i.skeleton.forEach(j => {
          if (re.exec(j)) arr.push(re.exec(j)[2])
        })
        i.skeleton = arr
      })
      this.lists = res.data
    })
  },
  methods: {
    // 转到文章详情
    gotoArticle(e) {
      console.log(e.target.getAttribute('data-article'))
      this.$router.push('/content/' + e.target.getAttribute('data-article'))
    }
  },
  data() {
    return {
      lists: []
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
