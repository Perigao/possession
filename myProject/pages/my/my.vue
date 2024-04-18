<template>
	<view class="my">
		<!-- 头像 -->
		<div class="header">
			<van-image round width="100" height="100" src="https://img.yzcdn.cn/vant/cat.jpeg" />
			<view class="name" style="margin-top: 20rpx;">何大歪</view>
		</div>
		<view style="height: 46rpx;background-color: #f8f8f8;"></view>
		<!-- 我的订单 -->
		<view class="list">
			<view class="order">我的订单</view>
			<view class="all" @click="goList()">查看全部</view>
		</view>
		<view style="height: 24rpx;background-color: #f8f8f8;"></view>
		<!-- 发货状态 -->
		<van-grid :border="false">
			<van-grid-item icon="balance-pay" text="待付款" :badge="myOrder.unPay" />
			<van-grid-item icon="logistics" text="待发货" :badge="myOrder.payed" />
			<van-grid-item icon="records-o" text="待收货" :badge="myOrder.consignment" />
			<van-grid-item icon="sign" text="已完成" :badge="myOrder.success" />
		</van-grid>
		<view style="height: 24rpx;background-color: #f8f8f8;"></view>
		<!-- 个人记录 -->
		<van-grid :border="false" column-num="3">
			<van-grid-item use-slot>
				2<br />我的收藏
			</van-grid-item>
			<van-grid-item use-slot>
				2<br />我的消息
			</van-grid-item>
			<van-grid-item use-slot>
				2<br />我的足迹
			</van-grid-item>
		</van-grid>
		<view style="height: 24rpx;background-color: #f8f8f8;"></view>
		<!-- 四个单元格 -->
		<van-cell title="分销中心" icon="cart-o" is-link :border="false"/>
		<van-cell title="领券中心" icon="coupon-o" is-link :border="false"/>
		<van-cell title="我的优惠券" icon="label-o" is-link :border="false"/>
		<van-cell title="收货地址" icon="location-o" is-link :border="false" @click="goAdress()"/>
		<!-- 退出登录 -->
		<div class="footer">
			<van-button type="danger" @click="loginOut()">退出登录</van-button>
		</div>
	</view>
</template>

<script>
	import {
		orderCount
	} from "@/api/order.js"
	export default {
		data() {
			return {
				myOrder: {},
			}
		},
		methods: {
			goList() {
				uni.navigateTo({
					url: '/pages/list/list'
				})
			},
			async init() {
				this.myOrder = await orderCount();
				console.log(this.myOrder)
			},
			goAdress(){
				uni.navigateTo({
					url:'/pages/adress/adress'
				})
			},
			loginOut(){
				uni.clearStorageSync();
				uni.redirectTo({
					url:'/pages/login/login'
				})
			}
		},
		onShow() {
			this.init();
		}
	}
</script>

<style lang="scss">
	.header {
		height: 380rpx;
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.list {
		height: 66rpx;
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 20rpx 0;
		margin: 0 16rpx;

		.all {
			color: #ccc;
		}
	}
	.footer{
		display: flex;
		justify-content: center;
		align-items: center;
		height: 240rpx;
	}
</style>