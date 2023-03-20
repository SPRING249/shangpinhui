<template>
  <!-- 商品分类导航 -->
  <div class="type-nav">
    <div class="container">
      <!--事件委托-->
      <div @mouseleave="leaveIndex" @mouseenter="enterShow">
        <h2 class="all">全部商品分类</h2>
        <!--过渡动画-->
        <transition name="sort">
        <!--三级联动-->
        <!--search页面三级联动显示与隐藏-->
        <div class="sort" v-show="show">
          <div class="all-sort-list2" @click="goSearch($event)">
            <div class="item"
                 v-for="(c1,index) in categoryList.slice(0,16)"
                 :key="c1.categoryId"
                 :class="{cur:currentIndex==index}">
              <h3 @mouseenter="changeIndex(index)" >
                <a :data-categoryName="c1.categoryName"
                    :data-category1Id="c1.categoryId">{{ c1.categoryName }}</a>
              </h3>
              <!--二三级分类显示与隐藏-->
              <div class="item-list clearfix"
                   :style="{display:currentIndex==index?'block':'none'}">
                <div class="subitem"
                     v-for="(c2,index) in c1.categoryChild"
                     :key="c2.categoryId">
                  <dl class="fore">
                    <dt>
                      <a :data-categoryName="c2.categoryName"
                         :data-category2Id="c2.categoryId">{{c2.categoryName}}</a>
                    </dt>
                    <dd>
                      <em v-for="(c3,index) in c2.categoryChild" :key="c3.categoryId">
                        <a :data-categoryName="c2.categoryName"
                           :data-category3Id="c3.categoryId">{{c3.categoryName}}</a>
                      </em>
                    </dd>
                  </dl>
                </div>
              </div>
            </div>

          </div>
        </div>
        </transition>
      </div>

      <nav class="nav">
        <a href="###">服装城</a>
        <a href="###">美妆馆</a>
        <a href="###">尚品汇超市</a>
        <a href="###">全球购</a>
        <a href="###">闪购</a>
        <a href="###">团购</a>
        <a href="###">有趣</a>
        <a href="###">秒杀</a>
      </nav>
    </div>
  </div>

</template>

<script>
import {mapState} from "vuex";
import {throttle} from "lodash";
export default {
  name: "TypeNav",
  data(){
    return{
    //   存储鼠标移到哪一个一级分类
      currentIndex:-1,
      show:true,
    }
  },
  computed:{
    ...mapState({
      // 右侧需要的是一个函数，当时用这个计算属性的时候，右侧函数会立即执行一次
      // 注入一个参数state，即为大仓库中的数据
      categoryList:(state)=>{
        return state.home.categoryList
      }
    })
  },
  methods:{
    // 鼠标进入修改响应式数据currentIndex属性
    // changeIndex(index){
    //   this.currentIndex=index
    //   // console.log(index)
    //
    // },
    // 节流：在规定的时间范围内不会重复触发回调，只有大于这个时间间隔才会触发回调，把频繁触发变为少量触发
    changeIndex:throttle(function (index) {
      this.currentIndex=index
    }),
    // 一级分类鼠标移除的事件回顾
    leaveIndex(){
    //  鼠标移除currentIndex变为-1
      this.currentIndex=-1
      if(this.$route.path != '/home'){
        this.show=false
      }
    },
    // 进行路由跳转的方法
    goSearch(event){
      // 最好的解决方案：事件委派+编程式导航  :事件委派需要解决的问题：1.确定a标签  2.获取参数
      // 1.自定义属性
      let element=event.target
      // 获取节点的自定义属性
      console.log(element.dataset)
      let {categoryname,category1id,category2id,category3id}=element.dataset// 解构赋值不能有大写
    //   区分一级二级三级分类的a标签
      if(categoryname){
        const location={name:'search'}  //   整理路由跳转的参数
        let query={categoryName:categoryname}
        if(category1id){
          query.category1Id=category1id
        }else if(category2id){
          query.category2Id=category2id
        }else {
          query.category3Id=category3id
        }
        // 如果路由跳转的时候带有params参数
        if(this.$route.params){
          location.params=this.$route.params
        }
        location.query=query
        // 路由跳转
        this.$router.push(location)
      }
    },
  //   展示分类
    enterShow(){
      if(this.$route.path!='/home'){
        this.show=true
      }

    },

  }
}
</script>

<style lang="less" scoped>
.type-nav {
  border-bottom: 2px solid #e1251b;
}
 .type-nav .container {
  width: 1200px;
  margin: 0 auto;
  display: flex;
  position: relative;
}
.type-nav .container .all {
  width: 210px;
  height: 45px;
  background-color: #e1251b;
  line-height: 45px;
  text-align: center;
  color: #fff;
  font-size: 14px;
  font-weight: bold;
}
.type-nav .container .nav a {
  height: 45px;
  margin: 0 22px;
  line-height: 45px;
  font-size: 16px;
  color: #333;
}
.type-nav .container .sort {
  left: 0;
  top: 45px;
  width: 210px;
  height: 461px;
  position: absolute;
  background: #fafafa;
  z-index: 999;
}
.type-nav .container .sort .all-sort-list2 .item h3 {
  line-height: 30px;
  font-size: 14px;
  font-weight: 400;
  overflow: hidden;
  padding: 0 20px;
  margin: 0;
}
.type-nav .container .sort .all-sort-list2 .item h3 a {
  color: #333;
}
.type-nav .container .sort .all-sort-list2 .cur{
  background-color: #e1251b;
}
.type-nav .container .sort .all-sort-list2 .item .item-list {
  display: none;
  position: absolute;
  width: 734px;
  min-height: 460px;
  background: #f7f7f7;
  left: 210px;
  border: 1px solid #ddd;
  top: 0;
  z-index: 9999 !important;
}
.type-nav .container .sort .all-sort-list2 .item .item-list .subitem {
  float: left;
  width: 650px;
  padding: 0 4px 0 8px;
}
.type-nav .container .sort .all-sort-list2 .item .item-list .subitem dl {
  border-top: 1px solid #eee;
  padding: 6px 0;
  overflow: hidden;
  zoom: 1;
}
.type-nav .container .sort .all-sort-list2 .item .item-list .subitem dl.fore {
  border-top: 0;
}
.type-nav .container .sort .all-sort-list2 .item .item-list .subitem dl dt {
  float: left;
  width: 54px;
  line-height: 22px;
  text-align: right;
  padding: 3px 6px 0 0;
  font-weight: 700;
}
.type-nav .container .sort .all-sort-list2 .item .item-list .subitem dl dd {
  float: left;
  width: 415px;
  padding: 3px 0 0;
  overflow: hidden;
}
.type-nav .container .sort .all-sort-list2 .item .item-list .subitem dl dd em {
  float: left;
  height: 14px;
  line-height: 14px;
  padding: 0 8px;
  margin-top: 5px;
  border-left: 1px solid #ccc;
}
//过渡动画
//进入开始状态
.sort-enter{
  height: 0px !important;
}
//进入结束状态
.sort-enter-to{
  height: 460px !important;
}
//定义动画时间速率
.sort-enter-active{
  transition: all .5s linear !important;
}
//.type-nav .container .sort .all-sort-list2 .item:hover .item-list {
//  display: block;
//}
</style>