/**
 * 首页商品列表数据请求
 */
import axios from "../http"
// import base from "./base"

const homeData = {
  // 首页nav导航
  navData() {},
  //首页banner轮播图
  bannerData() {},
  // 首页icons 数据
  iconsData() {},
  //首页商品列表数据
  goodsData(params) {
    return axios.get(`/api/alexa/goods/hub`, {
      params: params
    });
  }
};
export default homeData;