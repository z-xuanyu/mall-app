
/** 
 * api接口的统一出口
 */

 //首页商品列表请求 
import homeData from "./homeData"
// 商品详细页
import detailData from "./detailData"
//推荐页面
import recommendData from "./recommendData"

export default {
  homeData,
  detailData,
  recommendData
};