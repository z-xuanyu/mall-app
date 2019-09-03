<template>
  <!-- 用户拼单组件 -->
  <div class="single">
    <!-- 拼单组件标题 -->
    <div class="single-title">
      <span>78人在拼单，可直接参与</span>
      <span class="more">查看更多></span>
    </div>
    <!-- 拼单详情信息轮播 -->
    <van-swipe :autoplay="3000" vertical indicator-color="white" style="height: 3.2rem;">
      <van-swipe-item v-for="(item,index) in 5" :key="index">
        <div class="single-info" v-for="(item,index) in 2" :key="index" @click="handleSingleShow">
          <!-- 用户信息 -->
          <div class="user-info">
            <div class="user-avatar">
              <img
                src="http://t20img.yangkeduo.com/a/d2bae3aed1e4d01f3d312b755f960faae5f18be4-1546343854?imageMogr2/thumbnail/100x"
              />
            </div>
            <div class="user-name">不想告诉你</div>
          </div>
          <!-- 拼单时间与按钮 -->
          <div class="single-centent">
            <!-- 拼单时间 -->
            <div class="single-time">
              <div class="single-np">
                还差
                <span>1人</span>
                拼成
              </div>
              <div class="single-countdown">
                <span>剩余</span>
                <van-count-down millisecond :time="time" format="HH:mm:ss:SSS" />
              </div>
            </div>
            <!-- 拼单按钮 -->
            <div class="single-btn">
              <van-button type="danger" size="small">去拼单</van-button>
            </div>
          </div>
        </div>
      </van-swipe-item>
    </van-swipe>
    <!-- 拼单信息的弹出隐藏 -->
    <van-popup v-model="singleShow" :round="true">
      <div class="single-info-wrapper">
        <!-- 拼单弹出层标题 -->
        <div class="title">
          参加
          <span>为明天奋斗田永</span>的拼单
        </div>
        <!-- 拼单弹出层倒计时 -->
        <div class="countdown">
          <span>
            仅剩
            <em>1</em>个名额，
          </span>
          <van-count-down millisecond :time="time" format="HH:mm:ss:SSS" />
          <span>后结束</span>
        </div>
        <!-- 拼单弹出层用户头像 -->
        <div class="user-avatar">
          <div class="active">
            <img
              src="http://t20img.yangkeduo.com/a/380f108851722f76f0a880b794d1ba8e219978fa-1554808325?imageMogr2/thumbnail/100x"
            />
            <div class="tag">拼主</div>
          </div>
          <div class="default"></div>
        </div>
        <!-- 拼单弹出层按钮 -->
        <div class="btn">
            <van-button type="danger" block round >参与拼单</van-button>
        </div>
      </div>
    </van-popup>
  </div>
</template>
<script>
export default {
  name: "Single",
  data() {
    return {
      singleShow: false, //拼单弹出信息
      time: 86400000 //拼单倒计时时间
    };
  },
  methods: {
    handleSingleShow() {
      //拼单信息的弹出事件
      this.singleShow = true;
    }
  }
};
</script>
<style lang="less" scoped>
.single {
  background-color: #fff;
  //   拼单的标题
  &-title {
    border-bottom: 1px solid #f2f2f2;
    padding: 5px 10px;
    height: 38px;
    font-size: 15px;
    display: flex;
    justify-content: space-between;
    color: #151516;
    align-items: center;
    .more {
      color: #9c9c9c;
      font-size: 13px;
    }
  }
  // 拼单的详细信息
  &-info {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    .user-info {
      display: flex;
      align-items: center;
      .user-avatar {
        width: 38px;
        height: 38px;
        padding: 0 10px;
        img {
          width: 100%;
          border-radius: 50%;
        }
      }
      .user-name {
        font-size: 15px;
        color: #151516;
      }
    }
    .single-centent {
      display: flex;
      justify-content: space-between;
      align-items: center;
      .single-time {
        margin-right: 5px;
        .single-np {
          font-size: 13px;
          color: #151516;
          text-align: center;
          span {
            color: red;
          }
        }
      }
      .single-countdown {
        display: flex;
        font-size: 13px;
        align-items: center;
        color: #58595b;
        margin-top: 2px;
        margin-right: 5px;
      }
    }
  }
  //  拼单弹出层容器
  .single-info-wrapper {
    padding-top: 29px;
    width: 290px;
    height: 200px;
    // 拼单弹出层的标题
    .title {
      text-align: center;
      color: #000;
      font-size: 19px;
      span {
        display: inline-block;
        max-width: 100px;
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
        vertical-align: bottom;
        text-align: left;
      }
    }
    // 拼单弹出内容的倒计时
    .countdown {
      display: flex;
      margin-top: 8px;
      font-size: 14px;
      color: #58595b;
      justify-content: center;
      align-items: center;
      em {
        color: red;
      }
    }
    // 拼单弹出层用户头像信息
    .user-avatar {
      padding: 17px 20px 20px;
      height: 50px;
      box-sizing: content-box;
      text-align: center;
      display: flex;
      justify-content: center;
      .active {
        width: 50px;
        height: 50px;
        margin-right: 10px;
        position: relative;
        img {
          width: 100%;
          border-radius: 50%;
        }
        .tag {
          width: 38px;
          height: 18px;
          line-height: 18px;
          border-radius: 10px;
          border: 1px solid #fff;
          background-color: #ffab33;
          font-size: 11px;
          color: #9f7200;
          text-align: center;
          position: absolute;
          top: -5px;
          left: -5px;
        }
      }
      .default {
        width: 50px;
        height: 50px;
        border: 1px dashed #ccc;
        background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAAiCAYAAAC0nUK+AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6OTJBN0YyNkY5NDg5MTFFNzg1NEZCRTk4NDU1MjQxNDAiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6OTJBN0YyNzA5NDg5MTFFNzg1NEZCRTk4NDU1MjQxNDAiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo5MkE3RjI2RDk0ODkxMUU3ODU0RkJFOTg0NTUyNDE0MCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo5MkE3RjI2RTk0ODkxMUU3ODU0RkJFOTg0NTUyNDE0MCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pqid0H4AAAGwSURBVHjatJbtbcIwEIaDxQB0g7ABCAaADZoJSDaACVomaJkg6QRlA8x/EBmBEbIBvFddEHJ9tlOnr3QySszjy30lg0TQ6XSaYFnBaF1YtmjYEVbNZrOrjTEQoB8CUBIdVJiHKAP8juXSEZzw/sv5fM6tngNcYsmTeGV4gv0DDjBBy6QfNbAphUgBPOIYS6I4FrAl7IXXT8d+4r3RjyFszRdsqgk2n88bI3kaTn1hPQj/fSWHFJebGD8D/BCu08E7yXskd0HwVNhQAXD1xLdy3VSOe7vYzCpO2K8k8mOH1LcTnnH5PKvwUZ862VqOKEWt2MMpbAPbwsa4pgPA344qq6yzJdDjgwNMURjD80b9A3hJYF+1mOA8EFyLIzfS49o5zy3gEY/htAs4NCxrB7iWwO3g8mnlmJaP5HVt/1aS14U01ILgiLfU3rWv0TqVouWFnETB2Tvbox+j4ayNJST7EHhoE6VtYs1Y3263OLhLLvgwsPVL/qxrk5n5yjCkFFOeKRPj7XPoI6G5MKwmjh6IrvOkD8+bP94LglcCRId8Hfg69Od9yIdoti1/MXh1F2AA1kyfY3KATNcAAAAASUVORK5CYII=)
          no-repeat;
        background-position: 50%;
        border-radius: 50%;
      }
    }
    // 拼单弹出层按钮
    .btn{
        padding: 0 20px 20px;
    }
  }
}
</style>