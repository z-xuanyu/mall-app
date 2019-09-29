<template>
	<div class="personal">
		<!-- 头部 -->
		<div class="personal-top">
			<!-- nav -->
			<div class="personal-top-nav" :class="{ navbarfixed: navbarfixed }" ref="navbar">
				<van-icon info="1" name="chat-o" color="#fff" size="22px" class="mr-15" @click="handleNews" />
				<van-icon name="setting-o" color="#fff" size="22px" />
			</div>
			<!-- 用户头像 登录信息-->
			<div class="user-info">
				<div class="avatar mr-10"><img src="../../assets/images/face.jpg" alt="用户头像" /></div>
				<div class="user-name">
					<div class="name">游客0415</div>
					<div class="reg">点击昵称跳转登录/注册页</div>
				</div>
				<div class="qr-code"><van-icon name="qr-invalid" color="#7b6335"></van-icon></div>
			</div>
		</div>
		<div class="personal-body">
			<!-- 开通会员 -->
			<div class="member">
				<div class="member-left">
					<img src="../../assets/images/VIP.png" alt="VIP会员" />
					<span>开通VIP会员</span>
				</div>
				<div class="member-right">会员特权</div>
			</div>
			<!-- 钱包以下的item -->
			<div class="personal-list">
				<!-- 钱包，优惠卷，积分 -->
				<div class="wallet">
					<van-grid :column-num="3">
						<van-grid-item>
							<span>128.8</span>
							<span>余额</span>
						</van-grid-item>
						<van-grid-item>
							<span>0</span>
							<span>优惠卷</span>
						</van-grid-item>
						<van-grid-item>
							<span>20</span>
							<span>积分</span>
						</van-grid-item>
					</van-grid>
				</div>
				<!-- 用户订单 -->
				<div class="order">
					<van-grid :column-num="4">
						<van-grid-item>
							<van-icon name="orders-o" color="#fa436a" />
							<span>全部订单</span>
						</van-grid-item>
						<van-grid-item>
							<van-icon name="balance-list-o" color="#fa436a" />
							<span>待付款</span>
						</van-grid-item>
						<van-grid-item>
							<van-icon name="logistics" color="#fa436a" />
							<span>待收货</span>
						</van-grid-item>
						<van-grid-item>
							<van-icon name="refund-o" color="#fa436a" />
							<span>退货/售后</span>
						</van-grid-item>
					</van-grid>
				</div>
				<!-- 列表item -->
				<div class="list-item-wrapper">
					<list-item icontext="我的钱包" righttext="您的会员还有3天过期"><van-icon name="gold-coin" color="rgb(224, 116, 114)" /></list-item>
					<list-item icontext="地址管理" @click="handleAddress"><van-icon name="location" color="rgb(95, 205, 162)" /></list-item>
					<list-item icontext="分享" righttext="邀请好友赢10万大礼"><van-icon name="share" color="rgb(151, 137, 247)" /></list-item>
					<list-item icontext="晒单" righttext="晒单抢红包"><van-icon name="chat" color="rgb(238, 136, 59)" /></list-item>
					<list-item icontext="我的收藏"><van-icon name="star" color="rgb(84, 180, 239)" /></list-item>
					<list-item icontext="设置"><van-icon name="setting-o" color="rgb(224, 116, 114)" /></list-item>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
import ListItem from '../../components/comom/ListItem';
export default {
	name: 'Personal',
	components: {
		ListItem
	},
	data() {
		return {
			navbarfixed: true //导航吸顶
		};
	},
	methods: {
		handleAddress() {
			this.$router.push('/address');
		},
		handleNews() {
			this.$router.push('/personal/news');
		}
	}
};
</script>
<style lang="less" scoped>
// 公共样式
.mr-5 {
	margin-right: 5px;
}
.mr-10 {
	margin-right: 10px;
}
.mr-15 {
	margin-right: 15px;
}
.navbarfixed {
	position: fixed;
	top: 0;
	right: 0;
	left: 0;
}
.personal {
	// 顶部
	.personal-top {
		padding: 0 15px;
		padding-top: 50px;
		background-color: #43ab92;
		height: 136px;
		.personal-top-nav {
			height: 50px;
			display: flex;
			justify-content: flex-end;
			align-items: center;
			padding: 0 15px;
		}
		.user-info {
			display: flex;
			justify-content: space-between;
			align-items: center;
			height: 80px;
			// 用户头像
			.avatar {
				width: 75px;
				height: 75px;
				img {
					width: 100%;
					border-radius: 50%;
				}
			}
			// 用户信息
			.user-name {
				color: #fff;
				flex: 1;
				.name {
					font-size: 18px;
					margin-bottom: 5px;
					font-weight: 700;
				}
				.reg {
					font-size: 14px;
					color: #eee;
				}
			}
			// 二维码
			.qr-code {
				width: 37px;
				height: 37px;
				border-radius: 50%;
				background: linear-gradient(to left, #fbbb37 0%, #fcf0d0 105%);
				display: flex;
				justify-content: center;
				align-items: center;
			}
		}
	}
	// 中间部分
	.personal-body {
		position: relative;
		padding: 0 15px;
		// VIP会员
		.member {
			position: absolute;
			top: -30px;
			right: 15px;
			left: 15px;
			display: flex;
			justify-content: space-between;
			align-items: center;
			padding: 15px 4%;
			background: linear-gradient(to left, #dea96d 0%, #f6d59b 100%);
			border-radius: 7px;
			.member-left {
				img {
					width: 30px;
					height: 30px;
				}
				span {
					font-size: 15px;
					color: #796335;
				}
			}
			.member-right {
				color: #fcf0d0;
				font-size: 13px;
			}
		}
		// 钱包一下的item
		.personal-list {
			padding: 40px 0;
			//  钱包，优惠卷，积分
			.wallet {
				border-radius: 10px;
				overflow: hidden;
				span {
					&:first-child {
						font-size: 16px;
						color: #303133;
					}
					&:last-child {
						font-size: 12px;
						margin-top: 5px;
						color: #75787d;
					}
				}
			}
			//订单
			.order {
				margin-top: 10px;
				border-radius: 10px;
				overflow: hidden;
				span {
					font-size: 12px;
					color: #303133;
					margin-top: 5px;
				}
			}
			.list-item-wrapper {
				margin-top: 10px;
				border-radius: 10px;
				padding-bottom: 20px;
				overflow: hidden;
			}
		}
	}
}
</style>
