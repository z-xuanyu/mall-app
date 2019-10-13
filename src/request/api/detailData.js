/**
 * 商品详细页数据请求
 */
import axios from "../http"

const detailData = {
    // 详细页面数据
    goodsData(id,params){
        return axios.get(
          `/99api/detail?apikey=C3B20706341F6390F227115655C32AFE&itemid=${id}`,{
              params:params
          }
        )
    }
}
export default detailData