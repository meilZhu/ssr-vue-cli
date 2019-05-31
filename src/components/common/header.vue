<template>
	<div class="header"  :class='headerType === "themeColor"? "theme-color": headerType === "positionThemeColor"? "position-theme-color": headerType === "positionDarkColor"? "position-dark-color": ""'>
	    <div class="inner-header flex">
	        <img src="../../assets/img/home/logo.png" alt="" class="logo" />
	        <ul class="tab flex">
	        	<li class="tab-list"><router-link class='tab-un-active' to='/home'>首页</router-link></li>
	        	<li class="tab-list"><router-link class='tab-un-active' to='/login'>产品介绍</router-link></li>
	        	<li class="tab-list"><router-link class='tab-un-active' to='/us'>关于我们</router-link></li>
	        	<li class="tab-list"><router-link class='tab-un-active' to='/concetion'>联系我们</router-link></li>
	        </ul>
	    </div>
	</div>
</template>

<script>
	export default {
		name: 'HeaderVue',
		data () {
			return {
				
			}
		},
		props: {
			headerType: {
				type: String,
				default: 'theme-color'
			}
		},
		methods: {

		}
	}
</script>

<style lang='scss' scoped>
    .header {
    	width: 100%;
    	min-width: 1582px;
    	height: 70px;
        background: rgba(255,255,255,.29);
        .inner-header {
        	width: 1582px;
        	height: 100%;
        	margin: 0 auto;
        	justify-content: space-between;
        	align-items: center;
        	.logo {
        		width: 184px;
        		height:49px;
        		cursor: pointer;
        	}
        	.tab {
        		height: 100%;
        		align-items: center;
        		.tab-list {
        			height: 100%;
        			margin-left: 82px;
        			font-size: 26px;
        			cursor: pointer;
        			.tab-un-active {
        				display: inline-block;
        				height: 100%;
        			    line-height: 70px;
        			    color: #fff;
        			}
        			.tab-active {
	        			color: #00AAE8;
	        			border-bottom: 7px #00AAE8 solid;
	        		}
        		}
        		
        	}
        }
    }
    .theme-color {
    	background: rgba(255,255,255,.29);
    }
    .position-theme-color {
    	position: absolute;
		top:0;
		left: 0;
		z-index:10;
		background: rgba(255,255,255,.29);
    }
    .position-dark-color {
    	position: absolute;
		top:0;
		left: 0;
		z-index:10;
		background: rgba(125,125,125,.5);
    }
</style>