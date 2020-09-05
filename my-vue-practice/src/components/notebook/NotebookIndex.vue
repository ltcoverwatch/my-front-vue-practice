<!--练习日历用  -->
<template slot-scope>
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
        <el-table
          :data="tableData"
          border
          :span-method="mySpanMethod"
          style="width: 100%"
          height="100%"
          id="mytable"
          :cell-style="myCellStyle"
          :cell-class-name="cellClassName"
        >
          <el-table-column prop="time" label="時間" width="70"></el-table-column>
          <el-table-column v-for="cn in columnNames" :key="cn" :label="cn" width="60">
            <template slot-scope="item" v-if="haveMeetingOrNot(item.column.index, item.row.index)">
              <el-popover
                
                placement="right-start"
                width="60"
                trigger="hover"
                content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。"
              >
                <span slot="reference">click</span>
              </el-popover>
            </template>
          </el-table-column>
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
      haveMeeting: false,
      columnNames: [
        "111",
        "222",
        "333",
        "444",
        "555",
        "66666",
        "777",
        "888",
        "999",
        "1010",
        "1111",
        "1212",
        "1313",
        "1414",
        "1515",
        "1616",
        "1717",
        "1818",
        "1919",
        "2020",
      ],
      value1: new Date(),
      value: new Date(),
      tableData: [
        {
          time: "07 : 00",
        },
        { time: "-" },
        { time: "07 : 30" },
        { time: "-" },
        { time: "08 : 00" },
        { time: "-" },
        { time: "08 : 30" },
        { time: "-" },
        { time: "09 : 00" },
        { time: "-" },
        { time: "09 : 30" },
        { time: "-" },
        { time: "10 : 00" },
        { time: "-" },
        { time: "10 : 30" },
        { time: "-" },
        { time: "11 : 00" },
        { time: "-" },
        { time: "11 : 30" },
        { time: "-" },
        { time: "12 : 00" },
        { time: "-" },
        { time: "12 : 30" },
        { time: "-" },
        { time: "13 : 00" },
        { time: "-" },
        { time: "13 : 30" },
        { time: "-" },
        { time: "14 : 00" },
        { time: "-" },
        { time: "14 : 30" },
        { time: "-" },
        { time: "15 : 00" },
        { time: "-" },
        { time: "15 : 30" },
        { time: "-" },
        { time: "16 : 00" },
        { time: "-" },
        { time: "16 : 30" },
        { time: "-" },
        { time: "17 : 00" },
        { time: "-" },
        { time: "17 : 30" },
        { time: "-" },
        { time: "18 : 00" },
        { time: "-" },
        { time: "18 : 30" },
        { time: "-" },
        { time: "19 : 00" },
        { time: "-" },
        { time: "19 : 30" },
        { time: "-" },
        { time: "20 : 00" },
        { time: "-" },
        { time: "20 : 30" },
        { time: "-" },
        { time: "21 : 00" },
        { time: "-" },
        { time: "21 : 30" },
        { time: "-" },
        { time: "22 : 00" },

      ],

      budgetList: [], //表格
      spanArr: [
        [1, 1, 2],
        [1, 4, 3],
        [2, 7, 3],
        [2, 0, 2],
        [4, 0, 8],
        [3, 7, 9],
        [11, 8, 2],
        [20, 7, 9],
      ],
      position: 0, //用于存储相同项的开始index
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    cellClassName({ row, column, rowIndex, columnIndex }) {
      row.index = rowIndex;
      column.index = columnIndex;
    },
    haveMeetingOrNot(columnIndex, rowIndex) {
      for (let i = 0; i < this.spanArr.length; i++) {
        if (
          columnIndex === this.spanArr[i][0] &&
          rowIndex === this.spanArr[i][1]
        ) {
          return true;
        }
      }
      return false;
    },
    mySpanMethod({ row, column, rowIndex, columnIndex }) {
      for (let i = 0; i < this.spanArr.length; i++) {
        //console.log(this.spanArr[i]);
        if (columnIndex === this.spanArr[i][0]) {
          if (rowIndex === this.spanArr[i][1]) {
            return {
              rowspan: this.spanArr[i][2],
              colspan: 1,
            };
          } else if (
            rowIndex > this.spanArr[i][1] &&
            rowIndex < this.spanArr[i][1] + this.spanArr[i][2]
          ) {
            return {
              rowspan: 0, //隐藏单元格，否则会错位，必须写
              colspan: 0,
            };
          }
        }
      }
    },
    myCellStyle({ row, column, rowIndex, columnIndex }) {
      for (let i = 0; i < this.spanArr.length; i++) {
        if (
          columnIndex === this.spanArr[i][0] &&
          rowIndex === this.spanArr[i][1]
        ) {
          return {
            background: "green",
          };
        }
      }
    },
    myMouseEnter({ row, column, cell, event }) {},
    cellClick: function (row, column, cell, event) {
      // console.log(row, column, cell, event);
      // var index = $(cell).index();
      this.forecastTime = parseFloat(column.label);
      this.size = parseFloat(row.size);
      // console.log(index, this.forecastTime);
      this.rowIndex = row.index;
      this.columnIndex = column.index;
    },
    getCellIndex: function ({ row, column, rowIndex, columnIndex }) {
      row.index = rowIndex;
      column.index = columnIndex;
    },
    setCellStyle: function ({ row, column, rowIndex, columnIndex }) {
      if (rowIndex === this.rowIndex && columnIndex === this.columnIndex) {
        return { "background-color": "#009221" };
      }
    },
  },
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
#mytable .el-table,
.el-table thead {
  color: #000;
}
.el-table td,
.el-table th.is-leaf,
.el-table--border,
.el-table--group {
  border-color: grey;
  font-size: 12px;
}
.el-table--border::after,
.el-table--group::after,
.el-table::before {
  background-color: grey;
}
.el-table .cell{
  line-height: 12px;
}
.el-calendar-table .el-calendar-day {
  height: 30px;
  font-size: 14px;
}

.el-calendar__title {
  font-size: 35px;
}

.el-table td {
  padding: 0;
}
</style>