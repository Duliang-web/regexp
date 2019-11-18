<template>
  <div class="regexp">
    <el-form
      ref="form"
      :model="form"
      label-width="180px">
      <el-form-item label="后缀配置">
        <el-checkbox-group v-model="form.suffix">
          <el-checkbox
            label="g"
            name="type">
            全局匹配
          </el-checkbox>
          <el-checkbox
            label="i"
            name="type">
            不区分大小写
          </el-checkbox>
          <el-checkbox
            label="m"
            name="type">
            多行模式
          </el-checkbox>
        </el-checkbox-group>
      </el-form-item>
      <el-form-item label="匹配字符串开头">
        <el-switch v-model="form.start"/>
      </el-form-item>
      <el-form-item label="匹配字符串结尾">
        <el-switch v-model="form.end"/>
      </el-form-item>
      <el-form-item label="第一个子表达式字符类型">
        <el-select
          v-model="form.type1"
          placeholder="请选择类型">
          <el-option
            label="任意字符"
            value="."/>
          <el-option
            label="数字"
            value="\d"/>
          <el-option
            label="非数字"
            value="\D"/>
          <el-option
            label="字母、数字、下划线"
            value="\w"/>
          <el-option
            label="非字母、数字、下划线"
            value="\W"/>
          <el-option
            label="其它"
            value="other"/>
        </el-select>
      </el-form-item>
      <el-form-item
        v-if="form.type1 === 'other'"
        label="第一个子表达式字符">
        <el-input v-model="form.char1"/>
      </el-form-item>
    </el-form>
    <div class="result">
      <p>输出的正则表达式为：</p>
      <div class="content">
        {{ regexp }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: '',
  data () {
    return {
      form: {
        suffix: [],
        start: false,
        end: false,
        type1: '',
        char1: ''
      }
    }
  },
  components: {},
  computed: {
    regexp () {
      let regexp = ''
      regexp += '/'
      if (this.form.start) regexp += '^'
      // 子表达式一
      if ((this.form.type1 && this.form.type1 !== 'other') || this.form.char1) regexp += '('
      if (this.form.type1 === 'other') {
        regexp += this.form.char1
      } else {
        regexp += this.form.type1
      }
      if ((this.form.type1 && this.form.type1 !== 'other') || this.form.char1) regexp += ')'

      if (this.form.end) regexp += '$'
      regexp += '/'
      regexp += this.form.suffix.join('')
      return regexp
    }
  },
  mounted () {},
  methods: {}
}
</script>

<style lang='scss' scoped>
.regexp {
  .el-form {
    width:600px;
  }
  .result {
    width:600px;
    margin-left:50px;
  }
}
</style>
