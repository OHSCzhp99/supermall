import { request } from "./request";

//获取轮播图的数据
export function getHomeMultidata() {
    return request({
        url: '/home/multidata'
    })
}

//可以传多个参数，type是那3个类型，page是页数
export function getHomeGoods(type,page) {
    return request({
        url: '/home/data',
        params:{
            type,
            page
        }
    })
}