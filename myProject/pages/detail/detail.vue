<template>
	<view class="detail">
		<!-- 轮播图 -->
		<view class="uni-margin-wrap">
			<swiper class="swiper" circular :indicator-dots="indicatorDots" autoplay="true" interval="2500"
				indicatorDots="true" duration="500">
				<swiper-item v-for="(item,index) in reProductList.imgs" :key="index">
					<image :src="item" mode="" class="oneofImg"></image>
				</swiper-item>
			</swiper>
		</view>
		<van-divider borderColor="#dfdfdf"></van-divider>
		<!-- 商品信息 -->
		<view class="" style="margin: 12px 10px;">
			<van-row>
				<van-col span="18">
					<view class="prodLeft">
						<view class="plTop">
							{{productList.prodName}}
						</view>
						<view class="plBottom">
							{{productList.brief}}
						</view>
					</view>
				</van-col>
				<van-col span="6">
					<view class="prodRight" @click="addCollection">
						<van-icon name="like-o" v-if="isCollection" />
						<van-icon name="like" v-if="!isCollection" />
						<text style="margin-left: 20rpx;">收藏</text>
					</view>
				</van-col>
			</van-row>
			<view class="prodPrice">
				￥{{productList.price}}
			</view>
		</view>
		<view style="height: 66rpx;background-color: #ebebeb;"></view>
		<!-- 已选 -->
		<view class="choose" @click="showShowPartTwo">
			<view class="left">
				已选：
				<text>{{defaultStr.skuName}}</text>
			</view>
			<view class="right">
				<van-icon name="ellipsis" />
			</view>
		</view>
		<!-- 已选 动作面板 -->
		<van-action-sheet :show="showPartTwo" @click-overlay="onCloseTwo">
			<view class="show_main">
				<view class="space" style="height: 36rpx;"></view>
				<!-- 商品信息 -->
				<van-card :num="confirm.orderItem.prodCount" 
				:price="defaultStr.price? defaultStr.price:prodData.price" 
				:desc="productList.brief"
					:title="defaultStr.skuName? defaultStr.skuName:prodData.prodName" 
					:thumb="defaultStr.pic? defaultStr.pic:prodData.pic">
					<template #footer>
						<view>
							<van-stepper :value="confirm.orderItem.prodCount" @change="onChange" />
						</view>
					</template>
				</van-card>
				<!-- 商品选项 -->
				<view class="choice">
					<view class="main" v-for="(item,index) in tags" :key="index">
						{{item.label}}
						<view class="box">
							<view class="word" v-for="(item1,index1) in item.options" :key="index1"
								:class="{'prop_select':selectedTag[item.label]===item1.value?true:false}"
								@click="selectTag(item.label,item1.value)">
								{{item1.value}}
							</view>
						</view>
					</view>
				</view>
				<!-- 结单按钮 -->
				<view class="show_button" :disabled="defaultStr.skuName?false:true">
					<van-button :disabled="defaultStr.skuName?false:true" color="#f00" block>确定</van-button>
				</view>
			</view>
		</van-action-sheet>
		<view style="height: 66rpx;background-color: #ebebeb;"></view>
		<!-- 评论 -->
		<view class="comm">
			<!-- <view class="goodComm">
				<view class="left">
					评价：
					<text>好评{{}}</text>
				</view>
				<view class="right">
					<text>共{{}}条</text>
					<van-icon name="arrow" />
				</view>
			</view> -->
			<!-- 好评 -->
			<van-cell-group>
				<van-cell value="共0条" is-link>
					<template #title>
						<view>评价：<text>好评{{common.positiveRating}}%</text></view>
					</template>
				</van-cell>
			</van-cell-group>
			<view class="commType">
				<van-tag type="warning">全部{{common.number}}</van-tag>
				<van-tag type="warning">好评{{common.praiseNumber}}</van-tag>
				<van-tag type="warning">中评{{common.secondaryNumber}}</van-tag>
				<van-tag type="warning">差评{{common.negativeNumber}}</van-tag>
				<van-tag type="warning">有图{{common.picNumber}}</van-tag>
			</view>
		</view>
		<!-- 内容页 -->
		<view v-html="formatHtml(prodData.content)"></view>
		<!-- 立即购买 动作面板 -->
		<van-action-sheet :show="showPartOne" @click-overlay="onClose">
			<view class="show_main">
				<view class="space" style="height: 36rpx;"></view>
				<!-- 商品信息 -->
				<van-card :num="confirm.orderItem.prodCount"
				:price="defaultStr.price? defaultStr.price:prodData.price" 
				:desc="productList.brief"
					:title="defaultStr.skuName? defaultStr.skuName:prodData.prodName" 
					:thumb="defaultStr.pic? defaultStr.pic:prodData.pic">
					<template #footer>
						<view>
							<van-stepper :value="confirm.orderItem.prodCount" @change="onChange" />
						</view>
					</template>
				</van-card>
				<!-- 商品选项 -->
				<view class="choice">
					<view class="main" v-for="(item,index) in tags" :key="index">
						{{item.label}}
						<view class="box">
							<!-- 判断当前选中tag在哪个标签下 对比是否被选中 如果是才渲染特殊样式 -->
							<view class="word" v-for="(item1,index1) in item.options" :key="index1"
								:class="{'prop_select':selectedTag[item.label]===item1.value?true:false}"
								@click="selectTag(item.label,item1.value)">
								{{item1.value}}
							</view>
						</view>
					</view>
				</view>
				<!-- 结单按钮 -->
				<view class="show_button">
					<!-- <button style="flex: 1;background-color: #c3c3c3;border-radius: 0%;color: #fff;">加入购物车</button> -->
					<van-button class="left" :disabled="defaultStr.price?false:true" color="#c3c3c3">加入购物车</van-button>
					<van-button class="right" :disabled="defaultStr.price?false:true" color="#f00">立即购买</van-button>
				</view>
			</view>
		</van-action-sheet>
		<!-- 商品导航 -->
		<van-goods-action>
			<van-goods-action-icon icon="cart-o" text="购物车" @click="onClickIcon" />
			<van-goods-action-icon icon="shop-o" text="店铺" />
			<van-goods-action-button text="立即购买" @click="onClickButton" />
		</van-goods-action>
	</view>
</template>

<script>
	import {
		prodInfo,
		isCollection,
		prodComm,
		confirm
	} from '@/api/detail.js'
	import {
		formatHtml
	} from '@/utils/util.js'
	export default {
		data() {
			return {
				// 轮播列表
				// prodInfoList: [],
				// 重新渲染轮播图
				reProductList:[],
				// 商品列表
				productList: [],
				// 该商品是否收藏
				isCollection: false,
				// 默认已选
				defaultStr: {},
				// 评论
				prodCommList: [],
				common: {
					negativeNumber: 0, //差评数
					number: 0, //评论数
					picNumber: 0, //带图评论数
					positiveRating: 0, //好评率
					praiseNumber: 0, //好评数
					secondaryNumber: 0, //中评数
				},
				// 接收content
				prodData: [],
				// 动作面板默认隐藏
				showPartOne: false,
				showPartTwo: false,
				tags: [], //将init的propObject转成数组
				// 结单
				confirm: {
					basketIds: [],
					orderItem: {
						prodId: 0,
						skuId: 0,
						prodCount: 1,
						shopId: 0,
						distributionCardNo: ""
					},
					addrId: 0,
					userChangeCoupon: 0,
					couponIds: []
				},
				selectedTag: {},
				skuList: [],
			}
		},
		async onLoad(options) {
			// console.log(options,'id');
			let result = await prodInfo({
				prodId: options.id
			});
			result.imgs=result.imgs.split(",")
			this.reProductList=result;
			this.productList = result;
			// 收藏
			isCollection({
				prodId:options.id
			}).then(res=>{
				this.isCollection=res;

			})
			// 默认已选
			this.init(result.skuList);
			// 评论
			this.prodCommList = prodComm({
				prodId: options.id
			});
			this.common = this.prodCommList.data;
			// 内容图模块
			this.prodData = result;
			// 
			this.skuList = result.skuList;

		},
		methods: {
			addCollection() {
				this.isCollection = !this.isCollection;
			},
			init(main) {
				// console.log(main,"skulist")
				const properties = [];
				// 接收处理完的数据
				const propObject = {};
				// 
				let defaultArr = [];
				// 拆分skulist数组
				for (var i = 0; i < main.length; i++) {
					properties.push(main[i].properties);
					// console.log(properties+"properties"+i);

				}
				for (var i = 0; i < properties.length; i++) { //每种商品
					let propArr = properties[i];
					let propStr = properties[i].split(";");
					if (defaultArr.length === 0) {
						defaultArr = propStr;
					}
					this.defaultStr = main[i];
					// console.log(this.defaultStr,'defaultStr')
					for (var j = 0; j < propStr.length; j++) {
						const valueArr = propStr[j];
						const valueStr = valueArr.split(":");
						if (!propObject[valueStr[0]]) {
							propObject[valueStr[0]] = new Set();
						}
						propObject[valueStr[0]].add(valueStr[1]);
						// 将处理后的对象变成可以使用map的可枚举数组
						this.tags = Object.entries(propObject).map(([key, values]) => {
							return {
								label: key,
								options: Array.from(values).map(item => {
									return {
										value: item
									}
								})
							}
						})
						// 初始化默认选中第一项
						for (let x = defaultArr.length - 1; x >= 0; x--) {
							let valueString = defaultArr[x];
							let valueArray = valueString.split(":");
							this.$set(this.selectedTag, valueArray[0], valueArray[1])
						}
					}
				}
			},
			formatHtml(t) {
				return formatHtml(t);
			},
			onClickIcon() {
				uni.switchTab({
					url: "/pages/car/car"
				})
			},
			onClickButton() {
				this.showPartOne = true;
			},
			showShowPartTwo() {
				this.showPartTwo = true;
			},
			onClose() {
				this.showPartOne = false;
			},
			onCloseTwo() {
				this.showPartTwo = false;
			},
			onChange(event) {
				this.confirm.orderItem.prodCount = event.detail;
			},
			selectTag(propTitle, propValue) {
				this.$set(this.selectedTag, propTitle, propValue);
				// 联通已选部分
				let str = "";
				for (let item in this.selectedTag) {
					// console.log(item,"item")
					str = item + ":" + this.selectedTag[item] + ";" + str;
					let str1 = str.substring(0, str.length - 1); //拼接回skulist里原本的格式
					// console.log(str,"str");
					for (var i = 0; i < this.skuList.length; i++) {
						if (this.skuList[i].properties === str1) {
							this.defaultStr = this.skuList[i];
							return;
						}
					}
				}
			}
		}
	}
</script>

<style lang="less">
	.uni-margin-wrap {
		swiper {
			width: 100%;
			height: 600rpx;

			image {
				width: 100%;
				height: 100%;
			}
		}
	}

	.prodLeft {
		.plTop {
			font-size: 36rpx;
		}

		.plBottom {
			font-size: 24rpx;
			margin: 10rpx 0;
		}
	}

	.prodPrice {
		font-size: 36rpx;
		color: #f00;
	}

	.choose {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin: 12px 10px;
	}

	.comm {
		.goodComm {
			// padding: 12px 10px;
			display: flex;
			justify-content: space-between;
		}

		.commType {
			width: 100%;
			height: 100rpx;
			display: flex;
			justify-content: space-around;
			align-items: center;

			.van-tag--warning {
				padding: 14rpx 20rpx;
				text-align: center;
			}
		}
	}

	.choice {
		margin: 20rpx;

		.main {
			.box {
				display: flex;

				.word {
					color: #f00;
					padding: 10rpx 20rpx;
					border: 1px solid #f00;
					font-size: 26rpx;
					margin: 20rpx 20rpx 20rpx 0;
				}
			}
		}
	}

	.show_button {
		width: 100%;

		.left {
			button {
				width: 50vw;
			}
		}

		.right {
			button {
				width: 50vw;
			}
		}
	}

	.prop_select {
		color: #fff !important;
		background-color: #f00 !important;
	}
</style>