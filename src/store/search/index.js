import {reqGetSearchInfo} from "@/api";
//1. patch--书写自己的业务逻辑，也可以处理异步
const actions={
//     获取search模块数据
    async getSearchList({commit},params){
        // 至少传递一个参数，空对象
        // params形参：适当用户派发action的时候，第二个参数传递过来的，至少his一个空对象
        let result= await reqGetSearchInfo(params)
        if(result.code===200){
            commit('GETSEARCHLIST',result.data)
        }
        console.log(result)
    }
}
//2.commit--修改state的唯一手段
const mutations={
    GETSEARCHLIST(state,searchList){
        state.searchList=searchList
    }
}
// 3.mutate--state :存储数据
const state={
    // 初始状态为空对象
    searchList:{},
}
// 简化仓库数据
const getters={
//     当前形参state是当前仓库中的state并非大仓库中的state
    goodsList(state){
        // 如果searchList是空对象，则return的是undefined
        return state.searchList.goodsList || [] //假设没有网络时，返回的应该是空数组
    },
    trademarkList(state){
        return state.searchList.trademarkList
    },
    attrsList(state){
        return state.searchList.attrsList
    }
}

export default({
    namespaced:true,
    actions,mutations,state,getters
})