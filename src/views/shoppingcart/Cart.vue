<template>
	<div class="cart">
		<div class="cart-content" v-if="isLoadingShow">
			<!-- 购物车导航栏 -->
			<van-nav-bar class="cart-navbar" title="购物车" fixed left-arrow border @click-left="onClickLeft" />
			<!-- 购物车商品 -->
			<div class="goods-item">
				<van-card v-for="(item, index) in goodsData" :key="index" :num="item.num" :price="item.price" :desc="item.desc" :title="item.title" :thumb="item.thumb">
					<div slot="tags">
						<van-tag plain type="danger">标签</van-tag>
						<van-tag plain type="danger">标签</van-tag>
					</div>
					<div slot="footer">
						<van-button size="small" round type="default" @click="handleCancelOrder(index)">取消订单</van-button>
						<van-button size="small" round type="danger" @click="handlePay">去支付</van-button>
					</div>
				</van-card>
			</div>
		</div>
		<!-- 购物车loading -->
		<div class="loading-img" v-else>
			<img src="../../assets/images/emptyCart.jpg" alt="购物车" />
			<div class="tips">
				空空如也
				<span @click="handleLinkto">{{ tipsText }}&gt;</span>
			</div>
		</div>
		<!--取消订单 反馈弹出  -->
		<van-action-sheet v-model="cancelOrderShow">
			<div class="title">
				<p class="reason">请选择原因</p>
				<p class="tips">订单一旦取消，无法恢复，优惠券将原路返还</p>
			</div>
			<van-radio-group v-model="reasonRadio">
				<van-cell-group>
					<van-cell title="收货地址填写错了" clickable @click="reasonRadio = '1'"><van-radio slot="right-icon" name="1" checked-color="#e02e24" /></van-cell>
					<van-cell title="忘记支付密码/余额不足" clickable @click="reasonRadio = '2'"><van-radio slot="right-icon" name="2" checked-color="#e02e24" /></van-cell>
					<van-cell title="无法正常支付" clickable @click="reasonRadio = '3'"><van-radio slot="right-icon" name="3" checked-color="#e02e24" /></van-cell>
					<van-cell title="不想买了" clickable @click="reasonRadio = '4'"><van-radio slot="right-icon" name="4" checked-color="#e02e24" /></van-cell>
					<van-cell title="其他原因" clickable @click="reasonRadio = '5'"><van-radio slot="right-icon" name="5" checked-color="#e02e24" /></van-cell>
				</van-cell-group>
			</van-radio-group>
			<van-button type="danger" @click="submitBtn" block>提交</van-button>
		</van-action-sheet>
		<!-- 支付弹出 -->
		<van-action-sheet v-model="payShow" title="选择支付方式">
			<van-cell title="微信支付" icon="wechat">
				<!-- 使用 right-icon 插槽来自定义右侧图标 -->
				<van-icon slot="right-icon" name="success" color="#58595b" style="line-height: inherit;" />
			</van-cell>
			<van-cell title="支付宝" icon="alipay">
				<!-- 使用 right-icon 插槽来自定义右侧图标 -->
				<van-icon slot="right-icon" name="success" color="#58595b" style="line-height: inherit;" />
			</van-cell>
			<van-button type="danger" block>立即支付</van-button>
		</van-action-sheet>
	</div>
</template>
<script>
export default {
	name: 'Cart',
	data() {
		return {
			allCartChecked: false,
			tipsText: '去登录',
			cancelOrderShow: false, //取消订单弹出层
			reasonRadio: '', //取消订单反馈信息
			payShow: false, //订单支付弹出层
			goodsData: [
				{
					title: '心逸40包/30包本色抽纸面巾纸纸抽卫生纸巾家用餐巾纸家庭装整箱',
					desc: '30包【实惠装 240张/包】',
					thumb: '//t00img.yangkeduo.com/goods/images/2019-08-28/0d724d02-f524-4191-b27d-6d4f4d83236b.jpg?imageMogr2/sharpen/1%7CimageView2/2/w/234/q/70/format/webp',
					price: '19.9',
					num: '2'
				},
				{
					title: '心逸40包/30包本色抽纸面巾纸纸抽卫生纸巾家用餐巾纸家庭装整箱',
					desc: '30包【实惠装 240张/包】',
					thumb: '//t00img.yangkeduo.com/goods/images/2019-08-28/0d724d02-f524-4191-b27d-6d4f4d83236b.jpg?imageMogr2/sharpen/1%7CimageView2/2/w/234/q/70/format/webp',
					price: '19.9',
					num: '2'
				}
			], //购物车数据
			Actionst: [
				{
					name: '收货地址填写错了',
					color: '#151516',
					className: 'duihao'
				},
				{
					name: '忘记支付密码/余额不足',
					color: '#151516'
				},
				{
					name: '无法正常支付',
					color: '#151516'
				},
				{
					name: '不想买了',
					color: '#151516'
				},
				{
					name: '其他原因',
					color: '#151516'
				}
			]
		};
	},
	created() {
		localStorage.mall_app ? (this.tipsText = '去逛逛') : (this.tipsText = '去登陆');
	},
	methods: {
		//顶部nav 后退
		onClickLeft() {
			this.$router.go(-1);
		},
		// 未登录或者购物车没有商品时路由跳转
		handleLinkto() {
			if (localStorage.mall_app) {
				this.$router.push('/recommend');
			} else {
				this.$router.push('/login');
			}
		},
		// 订单取消
		handleCancelOrder(index) {
			this.cancelOrderShow = true;
			localStorage.setItem('cartIndex', index);
		},
		//订单取消反馈信息提交按钮
		submitBtn() {
			const index = localStorage.cartIndex;
			this.$toast('取消成功');
			this.cancelOrderShow = false;
			this.goodsData.splice(index, 1);
		},
		//订单支付
		handlePay() {
			this.payShow = true;
		}
	},
	computed: {
		// 未登录或者没有没有商品订单
		isLoadingShow() {
			return localStorage.mall_app && this.goodsData.length > 0 ? true : false;
		}
	}
};
</script>
<style lang="less" scoped>
.cart {
	// 取消订单反馈信息
	.title {
		text-align: center;
		margin-top: 15px;
		.reason {
			font-size: 17px;
			color: #151516;
		}
		.tips {
			color: #58595b;
			font-size: 13px;
			margin-top: 5px;
			margin-bottom: 5px;
		}
	}
	background-color: #fff;
	height: 100%;
	width: 100%;
	position: absolute;
	top: 0;
	right: 0;
	left: 0;
	bottom: 0;
	.loading-img {
		position: absolute;
		width: 120px;
		height: 120px;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		img {
			width: 100%;
		}
		.tips {
			margin-top: 10px;
			color: #c0c4cc;
			font-size: 13px;
			text-align: center;
			span {
				color: #fa436a;
			}
		}
	}
	.cart-navbar {
		background-color: #52de97;
		.van-nav-bar__arrow {
			color: #fff;
		}
		.van-nav-bar__title {
			color: #fff;
		}
	}
	.goods-item {
		margin: 55px 0 90px;
	}
}
</style>
