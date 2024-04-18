<template>
	<view class="home">
		<!-- 搜索框 -->
		<van-search placeholder="请输入搜索关键词" />
		<!-- banner图 -->
		<view class="banner">
			<swiper class="swiper" circular :indicator-dots="indicatorDots" :autoplay="autoplay" :interval="interval"
				:duration="duration">
				<swiper-item v-for="(item,index) in bannerList " :key="index">
					<image :src="item.imgUrl" class="img"></image>
				</swiper-item>
			</swiper>
		</view>

		<!-- 推荐列表 -->
		<van-grid>
			<van-grid-item icon="new-arrival-o" text="新品推荐" />
			<van-grid-item icon="clock-o" text="限时特惠" />
			<van-grid-item icon="hot-o" text="每日疯抢" />
			<van-grid-item icon="coupon-o" text="领优惠券" />
		</van-grid>

		<!-- 通知 -->
		<van-notice-bar left-icon="volume-o" :scrollable="false">
			<swiper class="noticeSwiper" vertical="true" circular :indicator-dots="indicatorDots" :autoplay="3000"
				:interval="2000" :duration="duration">
				<swiper-item v-for="(item,index) in noticeList " :key="index">
					<view>{{item.title}}</view>
				</swiper-item>
			</swiper>
		</van-notice-bar>
		<!-- 列表渲染 -->
		<view class="productList">
			<view class="productContent" v-for="(item,index) in productList" :key="index">
				<view class="listTop">
					<view class="partTitle">
						{{item.title}}
					</view>
					<view class="selectMore">
						查看更多
					</view>
				</view>
				<view class="listContent">
					<view class="partContent" v-for="(item,index) in item.productDtoList" :key="index">
						<img :src="item.pic"class="pictures" @click="goToDetail(item)"/>
						<view class="prodName">
							{{item.prodName}}
						</view>
						<view class="price">
							{{item.price}}
						</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import { banner } from "../../api/home.js"
	import { notice } from "../../api/home.js"
	import { product } from "../../api/home.js"
	import { proById } from "../../api/home.js"
	export default {
		data() {
			return {
				bannerList: [],
				noticeList: [],
				productList: [],
				indicatorDots: true,
				autoplay: true,
				interval: 2000,
				duration: 500,
				shopId:1
			}
		},
		methods: {
			async bannerData() {
				let that = this;
				const res = await banner()
				that.bannerList = res
			},
			goToDetail(event){
				uni.navigateTo({
					url:`/pages/details/details?id=${event.prodId}`
				})
			}
		},
		onLoad() {
			this.bannerData();
			notice().then(res => {
				this.noticeList = res.records;
			});
			product().then(res =>{
				this.productList = res;
				// console.log(this.productList)
			});
		}

		// onLoad(){
		// 	banner().then(res => {
		// 		this.bannerList = res;
		// 	})
		// }
	}
</script>

<style>
	.img {
		width: 100%;
	}

	.noticeSwiper {
		width: 668rpx;
	}

	.prodName{
		height: 51rpx;
	    overflow: hidden;	
	}

	.productList{
		width: 100%;
	}
	
	.productContent{
		width: 100%;
		margin-top: 20rpx
	}
	
	.pictures{
		width: 202rpx;
		height: 192rpx;
		border-radius:5%;
	}
	
	.listTop{
		width: 100%;
		height: 55rpx;
		display: flex;
		flex-direction: wrap;
	}
	
	.partTitle{
		flex: 9;
	}
	
	.selectMore{
		flex:2;
		font-size: 16rpx;
		color: gray;
		margin-top: 10rpx;
	}
	
	.listContent{
		width: 100%;
		height: 500rpx;
		display: flex;
		flex-wrap: wrap;
		margin-top: -90rpx;
		margin-bottom: 245rpx;
	}
	
	.partContent{
		width:calc(33.33% - 20px);
		height: 201rpx;
	    margin-left: 27rpx;
	    font-size: 20rpx;
		margin-bottom: 20rpx;
		margin-top: 100rpx;
	}
	
	.price{
		color: red;
		font: 21rpx;
	}
	/* van-grid-item{
		width: 30rpx;
		height: 30rpx;
	} */
	
</style>