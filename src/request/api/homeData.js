/**
 * 首页商品列表数据请求
 */
import axios from "../http"
import base from "./base"

const homeData = {
  // 首页nav导航
  navData() {},
  //首页banner轮播图
  bannerData() {
    return axios.get(`${base.fastmock}/home/banner`)
  },
  // 首页icons图标导航数据
  iconsData() {
    return axios.get(`${base.fastmock}/home/icon-nav`)
  },
  //首页商品列表数据
  goodsData(params) {
    return axios.get(`/api/alexa/goods/hub`,{
      params:params
    });
  }
};
export default homeData;