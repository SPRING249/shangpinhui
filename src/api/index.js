//API同意管理
import requests from "@/api/request";
// 三级联动接口：http://gmall-h5-api.atguigu.cn/api/product/getBaseCategoryList

export const reqCategoryList=()=>{
//     发请求:axios发请求返回的结果是Promise对象
   return  requests({url:'product/getBaseCategoryList',method:'get'})
}

