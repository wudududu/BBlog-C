<template>
  <div id="container">
    <el-form ref="login" :model="login" :rules="rules" style="width: 300px" label-position="left" size="medium" label-width="70px">
      <el-form-item label="用户名:" prop="name">
        <el-input v-model="login.name"></el-input>
      </el-form-item>
      <el-form-item label="密码:" prop="password">
        <el-input type="password" v-model="login.password"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click.native.prevent="onSubmit">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<style lang="scss" scoped>
#container {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%)
}
</style>

<script>
import { login } from '../utils/request.js'
export default {
  name: 'login',
  data() {
    return {
      login: {
        name: '',
        password: ''
      },
      rules: {
        name: [{required: true, message: '请输入用户名', trigger: 'blur'}],
        password: [{required: true, message: '请输入用户名', trigger: 'blur'}]
      }
    }
  },
  methods: {
    onSubmit() {
      this.$refs.login.validate((v) => {
        if (v) {
          login({nickname: this.login.name, password: this.login.password})
          .then(res => {
            this.$message({
              type: 'success',
              message: '登录成功'
            })
            this.$router.push('/local')
          })
          .catch(err => console.log(err))
        } else {
          this.$message.error('请填入正确信息')
        }
      })
    }
  }
}
</script>
