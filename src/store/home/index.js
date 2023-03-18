//1. patch--书写自己的业务逻辑，也可以处理异步
import {reqCategoryList} from "@/api";

const actions={
//     通过api里面的接口函数，向服务器发送请求，获取数据
    async categoryList({commit}) {
        let result = await reqCategoryList()
        if (result.code === 200) {
            commit('CATEGORYLIST', result.data)
        }
        console.log(result)
    }
}
//2.commit--修改state的唯一手段
const mutations={
    CATEGORYLIST(state,categoryList){
        state.categoryList=categoryList
    }
}
// 3.mutate--state :存储数据
const state={
    categoryList:[],
}
// 简化仓库数据
const getters={}

export default({
    namespaced:true,
    actions,mutations,state,getters
})