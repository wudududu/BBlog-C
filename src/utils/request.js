import axios from 'axios'
import qs from 'qs'

axios.defaults.baseURL = 'http://localhost:8080'
axios.defaults.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
axios.defaults.timeout = 5000

// 登录
function login (data) {
  console.log(data)
  return axios.post('/login', qs.stringify(data))
}

// 获取文章列表
function getArticleList (params) {
  return axios.get(`/getArticleList`, {params})
}

// 获取文章详情
function getArticle (id) {
  return axios.get('/getArticle/' + id)
}
export { getArticleList, getArticle, login }
