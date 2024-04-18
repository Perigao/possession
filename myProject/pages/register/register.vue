<template>
	<view class="register">
		<image class="avatar" src="/static/avatar.png"></image>
		<view class="input">
			<!-- 用户名 -->
			<van-field userName="userName" label="用户名" placeholder="请输入用户名" @change="getName"/>
			<!-- 用户密码 -->
			<van-field label="密码" passWord="passWord" placeholder="请输入密码" @change="getPassword"/>
		</view>
		<view class="btn">
			<van-button type="danger" @click="goRegister">注册</van-button>
		</view>
	</view>
</template>

<script>
	import { toRegister } from "../../api/login.js"
	import { encrypto } from "../../utils/cryptojs.js"
	export default {
		data() {
			return {
				userName: '',
				passWord:''
			}
		},
		onLoad() {
	
		},
		methods: {
			getName(event){
				this.userName = event.detail;
			},
			getPassword(event){
				this.passWord = event.detail;
			},
			async goRegister(){
				const result = await toRegister({
					userName:this.userName,
					passWord:encrypto(this.passWord)
				})
				if(result){
					uni.navigateTo({
						url:"/pages/login/login"
					})
				}
			}
			// goRegister() {
			// 	toRegister({
			// 		userName: this.userName,
			// 		passWord: encrypto(this.passWord)
			// 	}).then(res => {
			// 		uni.navigateTo({
			// 			url:"/pages/login/login"
			// 		})
			// 	})
			// }
		}
	}
</script>

<style>
	.register{
		width: 100%;
		box-sizing: border-box
	},
	
	.avatar {
		width: 350rpx;
		height: 350rpx;
		margin: 200rpx 200rpx 10rpx;
	},
	
	.input {
		margin-left: 27rpx;
		margin-top: 23rpx;
		width: 100%;
	},
	
	.btn{
		width: 98%;
		margin: 0 auto;
	},
	
	.van-button--normal {
	    font-size: var(--button-normal-font-size,14px);
	    padding: 0 ;
		width: 95%;
		margin-left: 24rpx;
	},
	
	.goToRegister{
		color: blue;
		margin-left: 454rpx;
		margin-top: 25rpx;
	}
	
</style>