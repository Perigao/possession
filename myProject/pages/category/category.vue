<template>
	<view class="category">
		<!-- 搜索框 -->
		<van-search :value="value" placeholder="请输入搜索关键词" />
		<!-- 左侧导航栏 -->
		<van-tree-select
		  class="leftNav"
		  :items="categoryList"
		  :main-active-index="active"
		  @click-nav="selectMain"
		>
			<template #content>
				<image :src="categoryList[active].pic" class="imageBanner"></image>
				<van-card
				  v-for="(item,index) in pageProdList" :key="index"
				  @click.native="goDetail(item)"
				  :num="item.totalStocks"
				  :price="item.price"
				  :desc="item.brief"
				  :title="item.prodName"
				  :thumb="item.pic"
				></van-card>
			</template>
		</van-tree-select>
	</view>
</template>

<script>
	import { categoryInfo, pageProd } from '@/api/type.js'
	export default {
		data() {
			return {
				active: 0,
				categoryList:[],
				pageProdList:[],
				value:"",
			}
		},
		methods: {
			selectMain(event){
				this.active=event.detail.index;
				this.getList(this.active);
				console.log(this.pageProdList,'pageProdList')
			},
			getList(event){
				let index=event?event:this.active;
				pageProd({
					categoryId:this.categoryList[index].categoryId
				}).then(res=>{
					this.pageProdList=res.records;
					// console.log(res,"商品列表");
				});
			},
			goDetail(event){
				console.log(event,"事件");
				uni.navigateTo({
					url:`/pages/detail/detail?id=${event.prodId}`
				})
			}
			// async categotyNav(){
			// 	let that = this;
			// 	that.categoryList = await categoryInfo();
			// 	console.log(that.categoryList,"categoryList");
			// },
			// async pageProdShow(){
			// 	let that = this;
			// 	that.pageProdList = await pageProd({categoryId:that.active});
			// 	// console.log(that.pageProdList,"pageProdList");
			// }
		},
		async onLoad() {
			// this.categotyNav();
			// this.pageProdShow();
			this.categoryList = await categoryInfo();
			console.log(this.categoryList,"categoryList");
			this.categoryList.map((item) => {
				item.text = item.categoryName;
			})
			this.getList();
		},

	}
</script>

<style>
		
	.imageBanner{
		height: 180rpx;
		width: 100%;
	},
	
	.van-tree-select__content{
		flex: 3 !important;
	}
	
</style>