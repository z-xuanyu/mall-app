/*
 * 推荐页面的数据请求
 */
import axios from "../http"

const recommendData = {
    //推荐页 商品列表请求
    goodsListData(params){
        return axios.get("/api/barrow/query",{
            params:params
        });
    }
    // 其他
}

export default recommendData