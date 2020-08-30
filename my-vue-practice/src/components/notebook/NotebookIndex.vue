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
          <el-table-column prop="time" label="時間" width="70"></el-table-column>
          <el-table-column v-for="cn in columnNames" :key="cn" :label="cn" width="60"></el-table-column>
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
      columnNames: ["111", "222", "333", "444"],
      value1: new Date(),
      value: new Date(),
      tableData: [
          {time: '07 : 00'},
          {time: '-'},
          {time: '07 : 30'},
          {time: '-'},
          {time: '08 : 00'},
          {time: '-'},
          {time: '08 : 30'},
          {time: '-'},
          {time: '09 : 00'},
          {time: '-'},
          {time: '09 : 30'},
          {time: '-'},
          {time: '10 : 00'},
          {time: '-'},
          {time: '10 : 30'},
          {time: '-'},
          {time: '11 : 00'},
      ]
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

.el-calendar__title{
    font-size: 35px;
}

.el-table td{
    padding: 0;
}
</style>