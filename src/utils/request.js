import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:8080'
axios.defaults.headers['Content-Type'] = 'application/x-www-form-urlencoded, form-data, utf-8'
axios.defaults.timeout = 5000

// 获取文章列表
function getArticleList (params) {
  return axios.get(`/getArticleList`, {params})
}

// 获取文章详情
function getArticle (id) {
  return axios.get('/getArticle/' + id)
}
export { getArticleList, getArticle }
