<template>
  <div class="main">
    <el-container>
      <el-main>
        <img src="http://localhost:3000/public/images/lockJS.png" alt="" />
      </el-main>
      <el-aside width="600px">Aside</el-aside>
    </el-container>
    <!-- <el-table :data="list" style="width: 100%">
      <el-table-column prop="id" label="日期" width="180"> </el-table-column>
      <el-table-column prop="title" label="姓名" width="180"> </el-table-column>
      <el-table-column prop="body" label="地址"> </el-table-column>
    </el-table> -->
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

export default {
  //import引入的组件需要注入到对象中才能使用
  components: {},
  data() {
    //这里存放数据
    return {
      list: [],
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    // 请求测试
    getall() {
      this.$get(`/getposts`).then((res) => {
        console.log(res);
        if (res.code === "0000") {
          this.$message({
            message: "接口调用成功了",
            type: "success",
          });
          this.list = res.data;
        } else {
          this.$message.error(res.msg || "获取失败");
        }
      });
    },
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {
    this.getall();
  },
  beforeCreate() {}, //生命周期 - 创建之前
  beforeMount() {}, //生命周期 - 挂载之前
  beforeUpdate() {}, //生命周期 - 更新之前
  updated() {}, //生命周期 - 更新之后
  beforeDestroy() {}, //生命周期 - 销毁之前
  destroyed() {}, //生命周期 - 销毁完成
  activated() {}, //如果页面有keep-alive缓存功能，这个函数会触发
};
</script>
<style scoped lang="less">
.el-main {
  height: 1000px;
  padding: 0;
  img {
    width: 100%;
    height: 100%;
  }
}
</style>