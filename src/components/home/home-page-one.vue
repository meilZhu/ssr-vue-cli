<template>
	<transition appear appear-class='page-one-enter' appear-active-class='page-one-active'>
		<div class="home-page-one">
	    	<div class="home-inner-page">
	    		<transition appear appear-class='title-enter' appear-active-class='title-active'>
		    		<img class="home-title" src='../../assets/img/home/title.png'/>
		    	</transition>
		    	<transition appear appear-class='info-enter' appear-active-class='info-active'>
		    		<span class='get-more-info'>了解更多</span>
		    	</transition>
		    	<img src="../../assets/img/home/arrow-down.png" alt="" class="go-down" @click='jumpComponent(1)'/>
	    	</div>
	    	<div class="home-page-tab-contain">
	    		<ul class="home-page-tab flex">
		    		<li class="page-tab-list">系统解决方案</li>
		    		<li class="page-tab-list">咨询服务</li>
		    		<li class="page-tab-list">外包服务</li>
		    	</ul>
			</div>
	    </div>
	</transition>
</template>

<script>
	export default {
		name: 'HomePageOne',
		data () {
			return {
				
			}
		},
		created() {
			
		},
		methods: {
			jumpComponent(index) {
				this.$emit('jumpComponent', index)
			}
		}
	}
</script>

<style lang='scss' scoped>
    .page-one-enter {
    	background-size: 120% 120%;
    	/*opacity: 0;*/
    }
    .page-one-active {
    	transition: all 1s;
    }
    .home-page-one {
    	background: url(../../assets/img/home/one-banner.png) no-repeat ;
        background-position: center;
        background-size: 100% 100%;
    	width: 100%;
    	height: 100%;
    	min-width: 1582px;
    	position: relative;
    	.home-inner-page {
    		width: 1582px;
    		margin: 0 auto;
    		height: 100%;
    		position: relative;
    		.title-enter {
    			opacity: 0;
    			transform: translateX(-150px);
    		}
    		.title-active {
    			transition: all 1s;
    		}
    		.home-title {
	    		width: 662px;
	    		height: 59px;
	    		position: absolute;
	    		top: 45%;
	    		right:170px;
	    	}
	    	.info-enter {
	    		opacity: .1;
	    		transform: scale(0);
	    	}
	    	.info-active {
	    		transition: all 1s;
	    	}
	    	.get-more-info {
	    		display: inline-block;
	    		width: 189px;
	    		height: 65px;
	    		border: 2px solid rgba(255,255,255,1);
	    		font-size: 32px;
	    		line-height: 65px;
	    		color: #fff;
	    		text-align: center;
	    		position: absolute;
	    		top: 57%;
	    		right: 414px;
	    		cursor: pointer;
	    	}
	    	.go-down {
	    		width: 47px;
	    		height: 26px;
	    		position: absolute;
	    		left: 50%;
	    		margin-left: -23px;
	    		bottom: 140px;
	    		cursor: pointer;
	    	}
    	}
    	.home-page-tab-contain {
    		width: 100%;
    		background: rgba(255,255,255,.29);
    		height: 92px;
    		position: absolute;
			left: 0;
			bottom: 0;
    		.home-page-tab {
    			width: 1582px;
    			height: 100%;
    			margin: 0 auto;
    			justify-content: space-between;
    			align-items: center;
    			color: #fff;
    			font-size: 30px;
    			.page-tab-list {
    				padding-left: 16px;
    				position: relative;
    			}
    			.page-tab-list::before {
    				display: inline-block;
    				width:0;
    				height:30px;
    				content: '';
    				border-left: 1px #fff solid;
    				position: absolute;
    				top:7px;
    				left:0;
    			}
    		}
    	}
    }
</style>