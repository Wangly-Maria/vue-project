
<template>
	<div class="talion-view">
		<div class="header-bar">
			<span class="close-talion" @click='closeTalion'>关闭</span>
			<form class="search" onsubmit="return false">
				<input 
					type="serach" 
					name="query" 
					v-model.trim.lazy="queryStr"
					@keyup.enter="goSearch()">
			</form>
		</div>
	</div>
	<ul class="has-header">
		<li>
			<div>
	          <a href="#" target="_blank">
	            <strong style="color: rgb(35, 132, 232);">电影</strong>
	            <span>影院热映</span>
	          </a>
	          <a href="#" target="_blank">
	            <strong style="color: rgb(230, 70, 126);">同城</strong>
	            <span>周末活动</span>
	          </a>
	          <a href="#" target="_blank">
	            <strong style="color: rgb(159, 120, 96);">阅读</strong>
	            <span>电子书</span>
	          </a>
	          <a href="#" target="_blank">
	            <strong style="color: rgb(225, 100, 77);">东西</strong>
	            <span>心爱之物</span>
	          </a>
	        </div>
		</li>
		<li>
	        <div>
	          <a href="#" target="_blank">
	            <strong style="color: rgb(159, 120, 96);">图书</strong>
	            <span>畅销排行</span>
	          </a>
	          <a href="#" target="_blank">
	            <strong style="color: rgb(244, 143, 46);">音乐</strong>
	            <span>新碟榜</span>
	          </a>
	          <a href="#" target="_blank">
	            <strong style="color: rgb(89, 108, 221);">应用</strong>
	            <span>玩手机</span>
	          </a>
	          <a href="#" target="_blank">
	            <strong style="color: rgb(66, 189, 86);">市集</strong>
	            <span>购买原创</span>
	          </a>
	        </div>
	    </li>
	    <li>
	        <div>
	          <a href="#" target="_blank">
	            <strong style="color: rgb(159, 120, 96);">图书</strong>
	            <span>畅销排行</span>
	          </a>
	          <a href="#" target="_blank">
	            <strong style="color: rgb(244, 143, 46);">音乐</strong>
	            <span>新碟榜</span>
	          </a>
	          <a href="#" target="_blank">
	            <strong style="color: rgb(89, 108, 221);">应用</strong>
	            <span>玩手机</span>
	          </a>
	          <a href="#" target="_blank">
	            <strong style="color: rgb(66, 189, 86);">市集</strong>
	            <span>购买原创</span>
	          </a>
	        </div>
	    </li>
	</ul>
	<sub-nav mold="navBottom"></sub-nav>
</template>
<script>
import SubNav from '../components/SubNav'
export default {
	name: 'talion-view',
	components: { SubNav },
	data (){
		return {
			queryStr: ''
		}
	},
	methods: {
		closeTalion:function(){
			this.$emit('closeTalion');
		},
		goSearch:function(){
			this.$emit('closeTalion');
			this.$router.push({
				name: 'SearchView',
				params: {
					q: this.queryStr
				}
			})
		}
	}
}
</script>