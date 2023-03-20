//API同意管理
import requests from "@/api/request";
// 三级联动接口：http://gmall-h5-api.atguigu.cn/api/product/getBaseCategoryList
import mockAjax from "@/api/ajaxMock";
export const reqCategoryList=()=>{
//     发请求:axios发请求返回的结果是Promise对象
   return  requests({url:'product/getBaseCategoryList',method:'get'})
}

// 获取轮播图数据
export const reqBannersList = () => mockAjax.get('/banners')
// 获取楼层数据
export const reqFloorsList = () => mockAjax.get('/floors')
