<!--练习日历用  -->
<template>
  <div>
    <el-row>
      <el-col :span="4">
        <div class="block">
          <h3>ここから日にちを選択</h3>
          <el-date-picker v-model="value1" type="date" placeholder="ここから日にちを選択"></el-date-picker>
          <el-calendar v-model="value"></el-calendar>
        </div>
      </el-col>
      <el-col :span="20">
        <el-table :data="tableData" border style="width: 100%" height="100%">
          <el-table-column prop="date" label="時間" width="50"></el-table-column>
          <el-table-column v-for="n in 20" :key="n.id" label="回線1" width="60"></el-table-column>
          <el-table-column prop="name" label="回線1" width="50"></el-table-column>
          <el-table-column prop="name" label="回線2" width="50"></el-table-column>
          <el-table-column prop="name" label="回線3" width="50"></el-table-column>
          <el-table-column prop="name" label="回線4" width="50"></el-table-column>
          <el-table-column prop="name" label="回線5" width="50"></el-table-column>
          <el-table-column prop="name" label="回線6" width="50"></el-table-column>
          <el-table-column prop="name" label="回線7" width="50"></el-table-column>
          <el-table-column prop="name" label="回線8" width="50"></el-table-column>
          <el-table-column prop="name" label="回線9" width="50"></el-table-column>
          <el-table-column prop="name" label="回線10" width="50"></el-table-column>
          <el-table-column prop="name" label="回線11" width="50"></el-table-column>
          <el-table-column prop="name" label="回線12" width="50"></el-table-column>
          <el-table-column prop="name" label="回線13" width="50"></el-table-column>
          <el-table-column prop="name" label="回線14" width="50"></el-table-column>
          <el-table-column prop="name" label="回線15" width="50"></el-table-column>
          <el-table-column prop="name" label="回線16" width="50"></el-table-column>
          <el-table-column prop="name" label="回線17" width="50"></el-table-column>
          <el-table-column prop="name" label="回線18" width="50"></el-table-column>
          <el-table-column prop="name" label="回線19" width="50"></el-table-column>
          <el-table-column prop="name" label="回線20" width="50"></el-table-column>
        </el-table>
      </el-col>
    </el-row>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

export default {
  name: "AppNotebook",
  //import引入的组件需要注入到对象中才能使用
  components: {},
  data() {
    //这里存放数据
    return {
      columnNumber: 20,
      value1: new Date(),
      value: new Date(),
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {},
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {},
  beforeCreate() {}, //生命周期 - 创建之前
  beforeMount() {}, //生命周期 - 挂载之前
  beforeUpdate() {}, //生命周期 - 更新之前
  updated() {}, //生命周期 - 更新之后
  beforeDestroy() {}, //生命周期 - 销毁之前
  destroyed() {}, //生命周期 - 销毁完成
  activated() {}, //如果页面有keep-alive缓存功能，这个函数会触发
};
</script>

<style>
.el-calendar-table .el-calendar-day {
  height: 30px;
  font-size: 14px;
}
</style>