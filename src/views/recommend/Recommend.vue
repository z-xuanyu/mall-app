<template>
	<div class="recommend">
		<div class="product-list">
			<van-grid :border="false" :column-num="2">
				<van-grid-item class="product-item" @click="goDetail(item.goodsId)" v-for="(item, index) in productlistdata" :key="index">
					<div class="product-img"><img v-lazy="item.imgUrl" /></div>
					<div class="product-info">
						<div class="product-name">{{ item.title }}</div>
						<div class="shipping">极速退款</div>
						<div class="product-price">
							<i>¥</i>
							<em>{{ item.price }}</em>
							<span>{{ item.sales }}</span>
						</div>
						<van-button type="danger" size="mini" class="buy">发现</van-button>
					</div>
				</van-grid-item>
			</van-grid>
		</div>
		<!-- tabbar -->
		<tabbar></tabbar>
	</div>
</template>
<script>
import Tabbar from '@/components/comom/Tabbar';
export default {
	name: 'Recommend',
	components: {
		Tabbar
	},
	data() {
		return {
			active: 1,
			productlistdata: [] 
		};
	},
	created() {
		this.getRecommendData();
	},
	methods: {
		//获取推荐列表页商品数据
		getRecommendData() {
			this.$axios('api/barrow/query', {
				params: {
					app_name: 'rectab_sim_gyl',
					support_types: '0_1',
					offset: 100,
					count: 40
				}
			}).then(({ data: { data } }) => {
				let productlistdata = [];

				data.forEach(item => {
					productlistdata.push({
						title: item.goods_name,
						imgUrl: item.hd_thumb_url,
						price: item.price / 100,
						sales: item.sales_tip,
						goodsId: item.goods_id
					});
				});
				this.productlistdata = productlistdata;
			});
		},
		// 商品路由跳转
		goDetail(goodsId) {
			this.$router.push({
				name: 'detail',
				query: {
					goods_Id: goodsId
				}
			});
		}
	}
};
</script>
<style lang="less" scoped>
.product-list /deep/ .van-grid-item__content--center {
	padding: 0;
	background-color: #fff;
	width: 99%;
}
.product-list {
	.product-item {
		padding: 0;
		height: 265px;
		margin-top: 2px;
		position: relative;
		.product-img {
			position: absolute;
			top: 0;
			left: 0;
			right: 0;
			height: 186px;
			width: 100%;
			img {
				width: 100%;
			}
		}
		.product-info {
			position: absolute;
			bottom: 0;
			left: 0;
			right: 0;
			padding: 6px 8px 7px;
			.product-name {
				max-height: 18px;
				font-size: 13px;
				line-height: 18px;
				overflow: hidden;
			}
			.shipping {
				margin-top: 4px;
				line-height: 14px;
				font-size: 11px;
				color: rgb(255, 87, 6);
			}
			.product-price {
				margin-top: 4px;
				height: 24px;
				display: flex;
				align-items: center;
				i {
					color: #e02e24;
					margin-right: 1px;
					font-size: 12px;
				}
				em {
					color: #e02e24;
					font-weight: 500;
					font-size: 18px;
				}
				span {
					margin-left: 4px;
					color: #9c9c9c;
					font-size: 12px;
				}
			}
			.buy {
				position: absolute;
				right: 0;
				bottom: 5px;
				border-radius: 10px 0 0 10px;
			}
		}
	}
}
</style>
