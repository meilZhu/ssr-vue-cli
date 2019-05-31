<template>
	<div class="home-page-two">
		<div class="home-inner-two">
		    <h1 class="page-title">产品<span class="light-title">中心</span><span class="small-title">Product center</span></h1>
		    <ul class="page-content flex">
		        <transition name='list-one'>
		            <li class="page-content-list">
			        	<img src="../../assets/img/home/demo.png" alt="" class='page-list-img'/>
			        	<div class="page-list-contain">
			        	    <h2 class="list-contain-title">生产调度</h2>
			        	    <div class="list-contain-desc">根据客户订单的产品量与交期，依据当前工厂的工艺、根据客户订单的产品量与交期，依据当前工厂的工艺、BOM...</div>
			        	    <span class="list-contain-detail">查看详情</span>
			        	</div>
			        </li>
		        </transition>
		        <transition name='list-two'>
			        <li class="page-content-list">
			        	<img src="../../assets/img/home/demo.png" alt="" class='page-list-img'/>
			        	<div class="page-list-contain">
			        	    <h2 class="list-contain-title">生产调度</h2>
			        	    <div class="list-contain-desc">根据客户订单的产品量与交期，依据当前工厂的工艺、根据客户订单的产品量与交期，依据当前工厂的工艺、BOM...</div>
			        	    <span class="list-contain-detail">查看详情</span>
			        	</div>
			        </li>
		        </transition>
		        <transition name='list-last'>
			        <li class="page-content-list">
			        	<img src="../../assets/img/home/demo.png" alt="" class='page-list-img'/>
			        	<div class="page-list-contain">
			        	    <h2 class="list-contain-title">生产调度</h2>
			        	    <div class="list-contain-desc">根据客户订单的产品量与交期，依据当前工厂的工艺、根据客户订单的产品量与交期，依据当前工厂的工艺、BOM...</div>
			        	    <span class="list-contain-detail">查看详情</span>
			        	</div>
			        </li>	
		        </transition>
		    </ul>
		    <span class="get-more-info">查看更多</span>
		    <img src="../../assets/img/home/arrow-down.png" alt="" class="go-down" @click='jumpComponent(1)'/>
		</div>
	</div>
</template>

<script>
	export default	{
		name: 'HomePageTwo',
		data () {
			return {
				
			}
		},
		methods: {
			
		}
	}
</script>

<style lang='scss' scoped>
    .home-page-two {
    	width: 100%;
    	height: 100%;
    	min-width: 1582px;
    	background: #EDEDED;
    	.home-inner-two {
    		width:1582px;
    		height:100%;
    		padding-top:110px;
    		margin:0 auto;
    		.page-title {
    			font-size: 36px;
	    		color:#1E1E1E;
	    		font-weight: bold;
	    		.light-title {
	    			color:#696969;
	    			margin-right: 12px;
	    		}
	    		.small-title {
	    			color: #808080;
	    			font-size: 24px;
	    		}
    		}
    		.page-content {
    			width: 1582px;
    			height:520px;
    			margin-top:80px;
    			justify-content: space-between;
    			.page-content-list {
    				width: 435px;
    				height: 100%;
    				background: #fff;
    				.page-list-img {
    					width: 100%;
    					height: 313px;
    				}
    				.page-list-contain {
    					width: 100%;
    					height: 207px;
    					padding: 0 32px;
    					.list-contain-title {
    						margin: 18px 0;
    						font-size: 26px;
    						color:#444444;
    					}
    					.list-contain-desc {
    						display:-webkit-box;
    						width:100%;
    						overflow: hidden;
    						text-overflow: ellipsis;
                            -webkit-box-orient: vertical;
                            -webkit-line-clamp: 2;
                            color: #8C8C8C;
                            font-size: 24px;
                            line-height: 28px;
    					}
    					.list-contain-detail {
    						display: inline-block;
    						width: 126px;
    						height: 39px;
    						border: 1px #00AAE8 solid;
    						margin-top: 18px;
    						text-align: center;
    						line-height: 39px;
    						color: #00AAE8;
    						font-size: 22px;
    					}
    				}
    			}
    		}
    		.get-more-info {
    			display: block;
    			width: 146px;
    			height: 38px;
    			text-align: center;
    			line-height: 38px;
    			margin: 50px auto 0;
    			border: 1px solid rgba(142,142,142,1);
    			font-size: 24px;
    			color: #4C4C4C;
    		}
    		.go-down {
	    		width: 47px;
	    		height: 26px;
	    		margin: 30px auto 0;
	    	}
    	}
    }
</style>