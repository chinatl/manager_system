<template>
	<div class="login-wrap">
	<div class="waveWrapper waveAnimation">
		<div class="waveWrapperInner bgTop">
			<div class="wave waveTop" style="background-image: url('/static/img/wave-top.png')"></div>
		</div>
		<div class="waveWrapperInner bgMiddle">
			<div class="wave waveMiddle" style="background-image: url('/static/img/wave-mid.png')"></div>
		</div>
		<div class="waveWrapperInner bgBottom">
			<div class="wave waveBottom" style="background-image: url('/static/img/wave-bot.png')"></div>
		</div>
		<!-- <img src="/static/img/dolphin.png" alt="" id="img">-->
	</div>
	<div class="ms-login">
		<div class="ms-title logo">国寿企业家成长管理系统<img :src="logo" alt="">
		</div>
		<el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="80px" class="demo-ruleForm">
			<el-form-item label="登录工号" prop="username">
				<el-input v-model="ruleForm.username" placeholder="username"></el-input>
			</el-form-item>
			<el-form-item prop="password" label="账户密码">
				<el-input type="password" placeholder="password" v-model="ruleForm.password" @keyup.enter.native="submitForm('ruleForm')"></el-input>
			</el-form-item>
			<p style="font-size:14px;color:#999;padding:0;margin:-10px 20px 10px 80px">欢迎登陆！</p>
			<div class="login-btn">
				<el-button type="primary" @click="submitForm('ruleForm')">{{loginTip}}</el-button>
			</div>
		</el-form>
	</div>
</div>
</template>

<script>
	import md5 from 'js-md5';
	// import xFetch from 'xfetch'
	import Logo from '../../assets/clic.png';
	export default {
		data: function() {
			return {
				logo: '',
				ruleForm: {
					username: '',
					password: ''
				},
				loginTip: '登录',
				rules: {
					username: [{
						required: true,
						message: '请输入用户名',
						trigger: 'blur'
					}],
					password: [{
						required: true,
						message: '请输入密码',
						trigger: 'blur'
					}]
				}
			}
		},
		created() {
			this.logo = Logo;
		},
		methods: {
			submitForm(formName) {
				const self = this;
				this.loginTip = '登陆中';
				var flag = true;
				setTimeout(() => {
					this.loginTip = '登陆失败，请重新登录';
					flag = true
				}, 3000)
				self.$refs[formName].validate((valid) => {
					if (valid && flag) {
						self.$axios({
								url: this.pathUrl + "/eck/test/users/validate",
								method: 'post',
								headers: {
									'Content-Type': 'application/json',
									'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiIxNjEwMjAwNiIsInN5cyI6ImRzcyIsImV4cCI6MTUxMzY0NzE3MjY2M30.lhLJL6cijqJnfiz1I4KY439HSX8EE6z2V5cBYXAIlSk'
								},
								data: JSON.stringify({
									id: self.ruleForm.username,
									password: md5(self.ruleForm.password)
								})
							})
							.then(function(res) {
								var data = res.data;
								if (data.errcode == 0) {
									localStorage.setItem('ms_username', data.user.name);
									localStorage.setItem('ms_token', data.accessToken);
									localStorage.setItem('uuuname', data.user.id);
									self.$router.push({
										path: '/JYPX1_01'
									})
								} else if (data.errcode == 1) {
									alert('密码错误')
								}
							})
							.catch(function(err) {
								console.log(err);
							})
					} else {
						console.log('error submit!!');
						return false;
					}
				});
			}
		}
	}

</script>

<style scoped>
/*	#img {
		position:absolute;
		bottom: 0;
		z-index: 10;
		animation: swiper 10s;
	}
	@keyframes swiper {
		0% {
			transform: translateX(0) rotate(0deg)
		}
		50% {
			transform: translateX(150px) rotate(45deg)
		}
		100% {
			transform: translateX(200px) rotate(60deg) translateY(-20PX)
		}
	}*/
	.login-wrap {
		position: relative;
		width: 100%;
		height: 100%;
		background-color: transparent
	}
	
	.ms-title {
		position: absolute;
		top: -20%;
		left: 0;
		width: 100%;
		text-align: center;
		font-size: 30px;
		color: #fff;
	}
	
	.ms-login {
		position: absolute;
		left: 50%;
		top: 50%;
		padding: 40px;
		border-radius: 5px;
		background: #fff;
		-webkit-transform: translate(-50%, -50%);
		-ms-transform: translate(-50%, -50%);
		-o-transform: translate(-50%, -50%);
		transform: translate(-50%, -50%);
	}
	
	.login-btn {
		text-align: center;
	}
	
	.login-btn button {
		width: 100%;
		height: 36px;
	}
	
	@keyframes move_wave {
		0% {
			transform: translateX(0) translateZ(0) scaleY(1)
		}
		50% {
			transform: translateX(-25%) translateZ(0) scaleY(0.55)
		}
		100% {
			transform: translateX(-50%) translateZ(0) scaleY(1)
		}
	}
	
	.waveWrapper {
		overflow: hidden;
		position: absolute;
		left: 0;
		right: 0;
		bottom: 0;
		top: 0;
		margin: auto;
		z-index: -1
	}
	.waveWrapperInner {
		position: absolute;
		width: 100%;
		overflow: hidden;
		height: 100%;
		bottom: -1px;
		background-image: linear-gradient(to top, #27273c 15%, skyblue 100%);
/*
		background-color: blue;
		background-color: #86377b;
		background-color: #27273c;
*/
	}
	.bgTop {
		z-index: 15;
		opacity: 0.5;
	}
	.bgMiddle {
		z-index: 10;
		opacity: 0.75;
	}
	.bgBottom {
		z-index: 5;
	}
	.wave {
		position: absolute;
		left: 0;
		width: 200%;
		height: 100%;
		background-repeat: repeat no-repeat;
		background-position: 0 bottom;
		transform-origin: center bottom;
	}
	.waveTop {
		background-size: 50% 100px;
	}
	.waveAnimation .waveTop {
		animation: move-wave 3s;
		-webkit-animation: move-wave 3s;
		-webkit-animation-delay: 1s;
		animation-delay: 1s;
	}
	.waveMiddle {
		background-size: 50% 120px;
	}
	.waveAnimation .waveMiddle {
		animation: move_wave 10s linear infinite;
	}
	.waveBottom {
		background-size: 50% 100px;
	}
	.waveAnimation .waveBottom {
		animation: move_wave 15s linear infinite;
	}
	.logo {
		
	}
	.logo > img{
		position: absolute;
		left: 0;
		top: 0;
		transform: translateX(-100%)
	}

</style>
