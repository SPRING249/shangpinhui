//API同意管理
import requests from "@/api/request";
// 三级联动接口：http://gmall-h5-api.atguigu.cn/api/product/getBaseCategoryList
import mockAjax from "@/api/ajaxMock";
export const reqCategoryList=()=>{
//     发请求:axios发请求返回的结果是Promise对象
   return  requests({url:'product/getBaseCategoryList',method:'get'})
}

// 获取轮播图banners数据
export const reqBannersList = () => mockAjax.get('/banners')
// 获取floors数据
export const reqFloorsList = () => mockAjax.get('/floors')

//获取搜索模块数据--请求post 带参数
// 当前这个接口，给服务器传递默认参数params，至少是一个空对象
export const reqGetSearchInfo=(params)=>requests({url:"/list",method:'post',data:params})
