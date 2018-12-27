<template>
  <div>
    <div id="content-box">
    </div>
  </div>
</template>

<script>
export default {
  name: 'contents',
  data() {
    return {}
  },
  mounted() {
    let data = ['# Markdown text goes in here', '## Chapter 1', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut laboreet dolore magna aliqua.',
    '## Chapter 2', `Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
    aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
    culpa qui officia deserunt mollit anim id est laborum.`, '**这是加粗的文字**', '*这是倾斜的文字*', '***这是斜体加粗的文字***', '~~这是加删除线的文字~~', '![blockchain](https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=702257389,1274025419&fm=27&gp=0.jpg "区块链")',
    '[百度](http://baidu.com)', '- 列表内容', '1.列表内容', '`create database hero;`']
    window.markdownFromText(data, 'content-box')
  }
}
</script>
