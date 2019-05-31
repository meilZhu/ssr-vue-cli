<template>
	<div class="home">
		<HeaderVue :headerType='headerType'></HeaderVue>
	    <HomePageOne 
	    	@jumpComponent= 'jumpComponent'
	    	v-if='tabIndex === 0'>
	    </HomePageOne>
	    <HomePageTwo
	    	v-if='tabIndex === 1'>
	    </HomePageTwo>
	    <ul class="page-tab" :class='tabIndex === 1? "page-tab-dark": ""' >
	    	<li class="tab-list" :class='tabIndex === 0? "tab-active-list": ""' @click.stop='changeTab(0)'></li>
	    	<li class="tab-list" :class='tabIndex === 1? "tab-active-list": ""' @click.stop='changeTab(1)'></li>
	    	<li class="tab-list" :class='tabIndex === 2? "tab-active-list": ""' @click.stop='changeTab(2)'></li>
	    	<li class="tab-list" :class='tabIndex === 3? "tab-active-list": ""' @click.stop='changeTab(3)'></li>
	    </ul>
	</div>
</template>

<script>
	const HomePageOne = () => import(/*webpackChunkName: 'home_part_one'*/'@/components/home/home-page-one')
	const HomePageTwo = () => import(/*webpackChunkName: 'home_part_two'*/'@/components/home/home-page-two')
	export default {
		name: 'home',
		data () {
			return {
				headerType: 'positionDarkColor',
				tabIndex: 1,
			}
		},
		components: {
			HomePageOne,
			HomePageTwo,
		},
		methods: {
			changeTab(index) {
				this.tabIndex= index
				if (index === 1) this.headerType= 'positionDarkColor'
				else this.headerType= 'positionThemeColor'
			},
			jumpComponent(index) {
				this.tabIndex= index
				if (index === 1) this.headerType= 'positionDarkColor'
				else this.headerType= 'positionThemeColor'
			}
		}
	}
</script>

<style lang='scss' scoped>
	.home {
		position: fixed;
		top: 0;
		left: 0;
		bottom: 0;
		width: 100%;
		overflow: auto;
		.page-tab {
			width:20px;
			height: 100px;
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			align-items: center;
			position: fixed;
			top: 50%;
			margin-top: -50px;
			right:95px;
			.tab-list {
				width:6px;
				height: 6px;
				border-radius: 50%;
				background: rgba(255,255,255,1);
				cursor: pointer;
			}
			.tab-active-list {
				width: 14px;
				height: 14px;
			}
		}
		.page-tab-dark {
			.tab-list {
				background: rgba(125,125,125,.5)
			}
		}
	}
</style>