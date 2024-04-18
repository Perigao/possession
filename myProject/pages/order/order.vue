<template>
	<view class="order">
		<!-- 默认地址 -->
		<van-cell icon="contact-o" is-link>
			<template #title>
				<view class="top">姓名：{{defaultArr===""?"":addressList[0].receiver+" "+addressList[0].mobile}}</view>
				<view class="bottom van-ellipsis" style="width: 500rpx;">地址：{{defaultArr===""?"展示默认地址":defaultArr}}
				</view>
			</template>
		</van-cell>
		<!-- 商品信息 -->
		<view v-for="(item,index) in shopCart.shopCartOrders" :key="index" style="margin:0 32rpx;">
			<view v-for="(item1,index1) in item.shopCartItemDiscounts[0].shopCartItems" :key="index1">
				<view class="shopName" style="margin: 20rpx 0;font-weight: bold;">
					{{item.shopName}}
				</view>
				<van-card :num="item1.prodCount" :price="item1.price" :desc="item1.skuName" :title="item1.prodName"
					:thumb="item1.pic">
					<template #footer>
						<view>
							<van-stepper :value="item1.prodCount" disabled style="margin-top: 6rpx;" />
							<view class="free" style="margin: 10rpx 0;">
								邮费：<text>{{item.transfee}}</text>
							</view>
						</view>
					</template>
				</van-card>
			</view>
		</view>
		<!-- 订单备注 -->
		<van-cell title="订单备注" value="请输入订单信息" :label="item.remarks" :border="false" />
		<!-- 优惠券 -->
		<van-cell title="优惠券" is-link value="暂无可用" :border="false" class="sale" />
		<view style="height: 46rpx;background-color: #f8f8f8;"></view>
		<!-- 订单信息 -->
		<van-cell title="总金额" :border="false">
			<template #default>
				<view>￥{{shopCart.total}}</view>
			</template>
		</van-cell>
		<!-- 优惠金额 -->
		<van-cell title="优惠金额" :value="shopCart.orderReduce" :border="false" />
		<!-- 商品总数 -->
		<van-cell title="商品总数" :value="shopCart.totalCount" :border="false" />
		<!-- 支付金额 -->
		<van-cell title="支付金额" :border="false">
			<template #default>
				<view style="color: #f00;">合计：￥{{shopCart.actualTotal}}</view>
			</template>
		</van-cell>
		<view class="space" style="height: 84rpx;"></view>
		<!-- 提交按钮 -->
		<van-submit-bar :price="shopCart.actualTotal*100" button-text="提交订单" @submit="onSubmit" />
	</view>
</template>

<script>
	import {
		prodInfo
	} from '@/api/adress.js'
	import {
		confirm,
		submit,
		pay
	} from '@/api/order.js'
	export default {
		data() {
			return {
				addressList: [],
				defaultArr: "",
				shopCart: [],
				shopMain:{
					orderShopParam: [{
						shopId: 0,
						remarks: ""
					}]
				}

			}
		},
		onShow() {
			this.confirm = JSON.parse(uni.getStorageSync("confirm"));
			this.getAdress();
			this.getCard();
		},
		methods: {
			async getAdress() {
				this.addressList = await prodInfo();
				// console.log(this.addressList,'result');
				for (const key in this.addressList) {
					if (Object.hasOwnProperty.call(this.addressList, key)) {
						if (this.addressList[key].commonAddr === 1) {
							// console.log(this.addressList[key]);
							// const result = this.addressList[key];
							this.defaultArr = result.province + "" + result.city + "" + result.area + "" + result.addr;
						}
					}
				}
			},
			async getCard() {
				let result = await confirm(this.confirm);
				// console.log(result,"result");
				result.shopCartOrders.map(item => item.remarks = "");
				this.shopCart = result;
				console.log(this.shopCart, "shopCart")
			},
			async onSubmit() {
				let cardInfo=this.shopCart.shopCartOrders;
				for(var i=0;i<cardInfo.length;i++){
					this.shopMain.orderShopParam.push({
						shopId:cardInfo[i].shopId,
						remarks:cardInfo[i].remarks
					})
				}
				let result = await submit(this.shopMain);
				console.log(result,'result submit');
				let shopList = await pay({
					orderNumbers:result.orderNumbers,
					payType:1
				})
				uni.showModal({
					title:"支付成功",
					content:"恭喜您完成支付！",
					success:()=>{
						uni.switchTab({
							url:"/pages/my/my"
						})
					}
				})
			}
		}
	}
</script>

<style lang="less">
	.van-cell__left-icon-wrap {
		margin-top: 27rpx;
		padding-right: 20rpx;
	}

	.van-icon-arrow {
		margin-top: 48rpx;
	}

	.sale {
		.van-icon-arrow {
			margin-top: 0;
		}
	}
</style>