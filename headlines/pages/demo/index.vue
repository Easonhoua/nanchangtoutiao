<template>
	<view class="page bigdata">
		<!-- <view class="tab header-tab">
			<view class="item"><text>要闻</text></view>
			<view class="item"><text>联播</text></view>
			<view class="item"><text>问政</text></view>
			<view class="item"><text>赣商</text></view>
			<view class="item active"><text>大数据</text><text class="line"></text></view>
			<view class="item"><text>红谷滩</text></view>
			<image class="arrow-down" src="../../static/img/common/arrow_down@3x.png"></image>
		</view> -->
		<view class="header-tab-con">
			<view class="slidebox">
				<swiper class="screen-swiper" :class="dotStyle?'square-dot':'round-dot'" :indicator-dots="true" :circular="true"
				 :autoplay="true" interval="5000" duration="500">
					<swiper-item v-for="(item,index) in swiperList" :key="index">
						<image :src="item.url" mode="aspectFill" v-if="item.type=='image'"></image>
						<video :src="item.url" autoplay loop muted :show-play-btn="false" :controls="false" objectFit="cover" v-if="item.type=='video'"></video>
					</swiper-item>
				</swiper>
			</view>
			<!-- 轮播图结束 -->
			<view class="panel">
				<view class="title">推荐机构</view>
				<view class="panel-con">
					<view class="home-icon">
						<view class="item">
							<view class="iconbox">
								<image class="icon" src="../../static/img/home/home_icon1@3x.png"></image>
							</view>
							<view class="txt">南昌市国资委</view>
						</view>
						<view class="item">
							<view class="iconbox">
								<image class="icon" src="../../static/img/home/home_icon2@3x.png"></image>
							</view>
							<view class="txt">南昌市政</view>
						</view>
						<view class="item">
							<view class="iconbox">
								<image class="icon" src="../../static/img/home/home_icon3@3x.png"></image>
							</view>
							<view class="txt">南昌城投</view>
						</view>
						<view class="item">
							<view class="iconbox">
								<image class="icon" src="../../static/img/home/home_icon4@3x.png"></image>
							</view>
							<view class="txt">南昌城投</view>
						</view>
						<view class="item">
							<view class="iconbox">
								<image class="icon" src="../../static/img/home/home_icon5@3x.png"></image>
							</view>
							<view class="txt">南昌市旅游局</view>
						</view>
						<view class="item">
							<view class="iconbox">
								<image class="icon" src="../../static/img/home/home_icon6@3x.png"></image>
							</view>
							<view class="txt">轨道公司</view>
						</view>
						<view class="item">
							<view class="iconbox">
								<image class="icon" src="../../static/img/home/home_icon7@3x.png"></image>
							</view>
							<view class="txt">南昌日报社</view>
						</view>
						<view class="item">
							<view class="iconbox">
								<image class="icon" src="../../static/img/home/home_icon8@3x.png"></image>
							</view>
							<view class="txt">南昌电视台</view>
						</view>
					</view>
				</view>
			</view>
			<!-- 推荐结构结束 -->
			<view class="panel">
				<view class="title" style="padding-top:0;">会议</view>
				<view class="panel-con">
					<view class="meeting">
						<view class="item">
							<view class="imgbox">
								<image class="img" src="../../static/img/home/h_img@3x.png"></image>
							</view>
							<view class="txt">
								<view class="item-title">创新中国领袖创新中国领袖创新中国领袖</view>
								<view class="item-time">
									<text>2020年5月20日</text>
									<text>中国 · 上海</text>
								</view>
							</view>
						</view>
						<view class="item">
							<view class="imgbox">
								<image class="img" src="../../static/img/home/h_img@3x.png"></image>
							</view>
							<view class="txt">
								<view class="item-title">创新中国领袖创新中国领袖创新中国领袖</view>
								<view class="item-time">
									<text>2020年5月20日</text>
									<text>中国 · 上海</text>
								</view>
							</view>
						</view>
						<view class="item">
							<view class="imgbox">
								<image class="img" src="../../static/img/home/h_img@3x.png"></image>
							</view>
							<view class="txt">
								<view class="item-title">创新中国领袖创新中国领袖创新中国领袖</view>
								<view class="item-time">
									<text>2020年5月20日</text>
									<text>中国 · 上海</text>
								</view>
							</view>
						</view>
						<view class="item">
							<view class="imgbox">
								<image class="img" src="../../static/img/home/h_img@3x.png"></image>
							</view>
							<view class="txt">
								<view class="item-title">创新中国领袖创新中国领袖创新中国领袖</view>
								<view class="item-time">
									<text>2020年5月20日</text>
									<text>中国 · 上海</text>
								</view>
							</view>
						</view>
					</view>
				</view>
			</view><!-- 会议结束 -->
		</view><!-- 大数据页面结束 -->
		
		<view class="header-tab-con">
			<view class="banner1">
				<image class="img" src="../../static/img/home/y_banner@3x.png"></image>
			</view>
			<view class="notice">
				<view class="title">联播·<text class="red">政务信息</text></view>
				<view class="notice-con">
					<text class="time">07:32</text>
					<view class="txt">
                      <text class="bold">【税收政策添动力 复工复产加速跑】</text> 用活大数据、退税大提速、 办税“不见面”税收政策添动力 复工复产加速跑
                    </view>
				</view>
			</view>
			<view class="yw-listbox">
				<view class="list line-bottom">
						<view class="title">吴晓军书记首次主持召开市委常委会会议，研究 部署了这些重点工作</view>
						<view class="tagbox">
							<text class="label">头条</text>
							<text class="source">南昌日报 20分钟前</text>
						</view>
						<view class="sub-list">
							<view class="sub-title">吴晓军书记首次主持召开市委常委会会议</view>
							<view class="sub-source">新华社·江西分社 30分钟前</view>
						</view>
						<view class="sub-list">
							<view class="sub-title">吴晓军书记首次主持召开市委常委会会议</view>
							<view class="sub-source">新华社·江西分社 30分钟前</view>
						</view>
						<view class="sub-list">
							<view class="sub-title">吴晓军书记首次主持召开市委常委会会议</view>
							<view class="sub-source">新华社·江西分社 30分钟前</view>
						</view>
				</view><!-- 一个头条结束 -->
				<view class="list line-bottom">
						<view class="title">吴晓军书记首次主持召开市委常委会会议，研究 部署了这些重点工作</view>
						<view class="tagbox">
							<text class="label">头条</text>
							<text class="source">南昌日报 20分钟前</text>
						</view>
						<view class="sub-list">
							<view class="sub-title">吴晓军书记首次主持召开市委常委会会议</view>
							<view class="sub-source">新华社·江西分社 30分钟前</view>
						</view>
				</view>
				<view class="list line-bottom">
						<view class="title">吴晓军书记首次主持召开市委常委会会议，研究 部署了这些重点工作</view>
						<view class="tagbox">
							<text class="label">头条</text>
							<text class="source">南昌日报 20分钟前</text>
						</view>
						<view class="sub-list">
							<view class="sub-title">吴晓军书记首次主持召开市委常委会会议</view>
							<view class="sub-source">新华社·江西分社 30分钟前</view>
						</view>
				</view>
				<view class="list list-original line-bottom">
					<view class="left">
						<view class="title">江西推出20项措施纵深推进“放管服” 改革</view>
						<view class="list-original-con">
							全面推广使用“赣通码”、推进涉企服务“掌上办理”、 全面开展政务服务“好差评”全面推广使用“赣通码”、推进涉企服务“掌上办理”、 全面开展政务服务“好差评”
						</view>
						<view class="tagbox">
							<text class="label">原创</text>
							<text class="source">南昌新闻网 1天前 拷贝</text>
						</view>
					</view>
					<view class="imgbox">
						<image class="img" src="../../static/img/home/y_img@3x.png"></image>
					</view>
				</view>
				<!-- 一个原创结束 -->
				
				<view class="list list-original line-bottom">
					<view class="left">
						<view class="title">江西推出20项措施纵深推进“放管服” 改革</view>
						<view class="list-original-con">
							全面推广使用“赣通码”、推进涉企服务“掌上办理”、 全面开展政务服务“好差评”…… 
						</view>
						<view class="tagbox">
							<text class="label">原创</text>
							<text class="source">南昌新闻网 1天前 拷贝</text>
						</view>
					</view>
					<view class="imgbox">
						<image class="img" src="../../static/img/home/y_img@3x.png"></image>
					</view>
				</view>
				<view class="list list-original line-bottom">
					<view class="left">
						<view class="title">江西推出20项措施纵深推进“放管服” 改革</view>
						<view class="list-original-con">
							全面推广使用“赣通码”、推进涉企服务“掌上办理”、 全面开展政务服务“好差评”…… 
						</view>
						<view class="tagbox">
							<text class="label">原创</text>
							<text class="source">南昌新闻网 1天前 拷贝</text>
						</view>
					</view>
					<view class="imgbox">
						<image class="img" src="../../static/img/home/y_img@3x.png"></image>
					</view>
				</view>
				<view class="list list-original line-bottom">
					<view class="left">
						<view class="title">江西推出20项措施纵深推进“放管服” 改革</view>
						<view class="list-original-con">
							全面推广使用“赣通码”、推进涉企服务“掌上办理”、 全面开展政务服务“好差评”…… 
						</view>
						<view class="tagbox">
							<text class="label">原创</text>
							<text class="source">南昌新闻网 1天前 拷贝</text>
						</view>
					</view>
					<view class="imgbox">
						<image class="img" src="../../static/img/home/y_img@3x.png"></image>
					</view>
				</view>
			</view>
		</view><!-- 要闻页面结束 -->
		
		<view class="header-tab-con hookup">
			<view class="banner1">
				<image class="img" src="../../static/img/home/y_banner@3x.png"></image>
			</view>
			<view class="subtab">
				<view class="item active">全部</view>
				<view class="item">解读</view>
				<view class="item">加红</view>
				<view class="item">推送</view>
				<view class="item">公告</view>
			</view>
			<view class="notice">
				<view class="notice-con">
					<text class="time" style="width:100%;">2020年3月31日　周二</text>
				</view>
			</view>
			<view class="listbox">
				<view class="list line-bottom">
					<view class="txt"><text class="bold"><text class="red">07 : 52</text>【赣深铁路顺利完成柳城制梁场首榀箱梁架设 作业】</text> 3月30日上午9时整，在中铁二十五局高沙坝 大桥施工现场，作业人员经过</view>
					<view class="tagbox">
						<text class="label">赣深铁路</text>
						<text class="label">大桥施工现场</text>
					</view>
					<view class="statistics">
						<view class="item">287764 阅读</view>
						<view class="item">
							<image class="icon" src="../../static/img/common/l_sc@3x.png"></image>
							<text>10</text>
						</view>
						<view class="item">
							<image class="icon" src="../../static/img/common/l_pl@3x.png"></image>
							<text>8888</text>
						</view>
						<view class="item">
							<image class="icon" src="../../static/img/common/l_fx@3x.png"></image>
							<text>355</text>
						</view>
					</view>
				</view>
				<view class="list line-bottom">
					<view class="txt"><text class="bold"><text class="red">07 : 52</text>【赣深铁路顺利完成柳城制梁场首榀箱梁架设 作业】</text> 3月30日上午9时整，在中铁二十五局高沙坝 大桥施工现场，作业人员经过</view>
					<view class="tagbox">
						<text class="label">赣深铁路</text>
						<text class="label">大桥施工现场</text>
					</view>
					<view class="statistics">
						<view class="item">287764 阅读</view>
						<view class="item">
							<image class="icon" src="../../static/img/common/l_sc@3x.png"></image>
							<text>10</text>
						</view>
						<view class="item">
							<image class="icon" src="../../static/img/common/l_pl@3x.png"></image>
							<text>8888</text>
						</view>
						<view class="item">
							<image class="icon" src="../../static/img/common/l_fx@3x.png"></image>
							<text>355</text>
						</view>
					</view>
				</view>
				<view class="list line-bottom">
					<view class="txt red"><text class="bold"><text class="red">07 : 52</text>【赣深铁路顺利完成柳城制梁场首榀箱梁架设 作业】</text> 3月30日上午9时整，在中铁二十五局高沙坝 大桥施工现场，作业人员经过</view>
					<view class="tagbox">
						<text class="label">赣深铁路</text>
						<text class="label">大桥施工现场</text>
					</view>
					<view class="statistics">
						<view class="item">287764 阅读</view>
						<view class="item">
							<image class="icon" src="../../static/img/common/l_sc@3x.png"></image>
							<text>10</text>
						</view>
						<view class="item">
							<image class="icon" src="../../static/img/common/l_pl@3x.png"></image>
							<text>8888</text>
						</view>
						<view class="item">
							<image class="icon" src="../../static/img/common/l_fx@3x.png"></image>
							<text>355</text>
						</view>
					</view>
				</view>
			</view>
		</view><!-- 联播页面结束 -->
		<view class="header-tab-con inquire">
			<view class="banner1">
				<image class="img" src="../../static/img/home/wz_banner@3x.png"></image>
			</view>
			<view class="line20"></view>
			<view class="sub-mainicon">
				<view class="iconbox">
					<image class="icon" src="../../static/img/home/wz_icon1@3x.png"></image>
					<view class="txt">投诉建议</view>
				</view>
				<view class="iconbox">
					<image class="icon" src="../../static/img/home/wz_icon2@3x.png"></image>
					<view class="txt">服务评价</view>
				</view>
				<view class="iconbox">
					<image class="icon" src="../../static/img/home/wz_icon3@3x.png"></image>
					<view class="txt">政务指数</view>
				</view>
				<view class="iconbox">
					<image class="icon" src="../../static/img/home/wz_icon4@3x.png"></image>
					<view class="txt">网络问政</view>
				</view>
			</view>
			<view class="line20"></view>
			<view class="service">
				<view class="title">民生服务</view>
				<view class="service-con">
					<view class="item">
						<image class="icon" src="../../static/img/home/wz_s_icon1@3x.png"></image>
					</view>
					<view class="item">
						<image class="icon" src="../../static/img/home/wz_s_icon1@3x.png"></image>
					</view>
					<view class="item">
						<image class="icon" src="../../static/img/home/wz_s_icon1@3x.png"></image>
					</view>
				</view>
			</view>
			<view class="line20"></view>
			<view class="listbox">
				<view class="list line-bottom">
					<view class="lefttxt">
						<view class="title">[投诉]天祥大道与紫阳大道交汇处道路多坑长时间未修理</view>
						<view class="source">
							<view class="user">
								<image class="logo" src="../../static/img/home/home_icon7@3x.png"></image>
								<view class="txt">admin</view>
							</view>
							<text class="time">1小时前</text>
						</view>
					</view>
					<view class="imgbox">
						<image class="img" src="../../static/img/home/wz_img1@3x.png"></image>
					</view>
				</view>
				<view class="list line-bottom">
					<view class="lefttxt">
						<view class="title">[投诉]天祥大道与紫阳大道交汇处道路多坑长时间未修理</view>
						<view class="source">
							<view class="user">
								<image class="logo" src="../../static/img/home/home_icon7@3x.png"></image>
								<view class="txt">admin</view>
							</view>
							<text class="time">1小时前</text>
						</view>
					</view>
					<view class="imgbox">
						<image class="img" src="../../static/img/home/wz_img1@3x.png"></image>
					</view>
				</view>
				<view class="list line-bottom">
					<view class="lefttxt">
						<view class="title">[投诉]天祥大道与紫阳大道交汇处道路多坑长时间未修理</view>
						<view class="source">
							<view class="user">
								<image class="logo" src="../../static/img/home/home_icon7@3x.png"></image>
								<view class="txt">admin</view>
							</view>
							<text class="time">1小时前</text>
						</view>
					</view>
					<view class="imgbox">
						<image class="img" src="../../static/img/home/wz_img1@3x.png"></image>
					</view>
				</view>
				<view class="list line-bottom">
					<view class="lefttxt">
						<view class="title">[投诉]天祥大道与紫阳大道交汇处道路多坑长时间未修理</view>
						<view class="source">
							<view class="user">
								<image class="logo" src="../../static/img/home/home_icon7@3x.png"></image>
								<view class="txt">admin</view>
							</view>
							<text class="time">1小时前</text>
						</view>
					</view>
					<view class="imgbox">
						<image class="img" src="../../static/img/home/wz_img1@3x.png"></image>
					</view>
				</view>
				<view class="list line-bottom">
					<view class="lefttxt">
						<view class="title">[投诉]天祥大道与紫阳大道交汇处道路多坑长时间未修理</view>
						<view class="source">
							<view class="user">
								<image class="logo" src="../../static/img/home/home_icon7@3x.png"></image>
								<view class="txt">admin</view>
							</view>
							<text class="time">1小时前</text>
						</view>
					</view>
					<view class="imgbox">
						<image class="img" src="../../static/img/home/wz_img1@3x.png"></image>
					</view>
				</view>
				<view class="list line-bottom">
					<view class="lefttxt">
						<view class="title">[投诉]天祥大道与紫阳大道交汇处道路多坑长时间未修理</view>
						<view class="source">
							<view class="user">
								<image class="logo" src="../../static/img/home/home_icon7@3x.png"></image>
								<view class="txt">admin</view>
							</view>
							<text class="time">1小时前</text>
						</view>
					</view>
					<view class="imgbox">
						<image class="img" src="../../static/img/home/wz_img1@3x.png"></image>
					</view>
				</view>
			</view>
		</view><!-- 问政页面结束 -->
		<view class="header-tab-con hookup business">
			<view class="slidebox" style="padding:24rpx;box-sizing: border-box;margib-bottom:0;height:312rpx">
				<swiper class="screen-swiper" :class="dotStyle?'square-dot':'round-dot'" :indicator-dots="true" :circular="true"
				 :autoplay="true" interval="5000" duration="500">
					<swiper-item v-for="(item,index) in swiperList" :key="index">
						<image :src="item.url" mode="aspectFill" v-if="item.type=='image'"></image>
						<video :src="item.url" autoplay loop muted :show-play-btn="false" :controls="false" objectFit="cover" v-if="item.type=='video'"></video>
					</swiper-item>
				</swiper>
			</view>
			<view class="notice">
				<view class="notice-bd">
					<text class="block red">赣商联盟</text>
					<text class="txt">赣商联盟捐赠600余万元防疫物资</text>
				</view>
				<text class="more">·查看更多</text>
			</view>
			<view class="yw-listbox">
				<view class="list list-original line-bottom">
					<view class="left">
						<view class="title">南昌市20条“硬核”举措助推农业农村经济发展</view>
						<view class="tagbox">
							<text class="source">南昌新闻 · 2小时前</text>
						</view>
					</view>
					<view class="imgbox2">
						<image class="img" src="../../static/img/home/y_img@3x.png"></image>
					</view>
				</view><!-- 一个原创结束 -->
				<view class="list list-original line-bottom">
					<view class="left">
						<view class="title">南昌市20条“硬核”举措助推农业农村经济发展</view>
						<view class="tagbox">
							<text class="source">南昌新闻 · 2小时前</text>
						</view>
					</view>
					<view class="imgbox2">
						<image class="img" src="../../static/img/home/y_img@3x.png"></image>
					</view>
				</view>
				<view class="important-notice line-bottom">
					<view class="title">
						<text class="txt">南昌这个区发布重要公告!</text>
						<image class="icon-arrow" src="../../static/img/user/user_arrow_r@3x.png"></image>
					</view>
					<view class="imgbox">
						<image class="img" src="../../static/img/home/gs_img2@3x.png" mode="widthFix"></image>
						<view class="tag">
							南昌新闻 · 2小时前
						</view>
					</view>
				</view>
				<view class="list list-original line-bottom">
					<view class="left">
						<view class="title">南昌市20条“硬核”举措助推农业农村经济发展</view>
						<view class="tagbox">
							<text class="source">南昌新闻 · 2小时前</text>
						</view>
					</view>
					<view class="imgbox2">
						<image class="img" src="../../static/img/home/y_img@3x.png"></image>
					</view>
				</view>
				<view class="list list-original line-bottom">
					<view class="left">
						<view class="title">南昌市20条“硬核”举措助推农业农村经济发展</view>
						<view class="tagbox">
							<text class="source">南昌新闻 · 2小时前</text>
						</view>
					</view>
					<view class="imgbox2">
						<image class="img" src="../../static/img/home/y_img@3x.png"></image>
					</view>
				</view>
				<view class="list list-original line-bottom">
					<view class="left">
						<view class="title">南昌市20条“硬核”举措助推农业农村经济发展</view>
						<view class="tagbox">
							<text class="source">南昌新闻 · 2小时前</text>
						</view>
					</view>
					<view class="imgbox2">
						<image class="img" src="../../static/img/home/y_img@3x.png"></image>
					</view>
				</view>
				<view class="list list-original line-bottom">
					<view class="left">
						<view class="title">南昌市20条“硬核”举措助推农业农村经济发展</view>
						<view class="tagbox">
							<text class="source">南昌新闻 · 2小时前</text>
						</view>
					</view>
					<view class="imgbox2">
						<image class="img" src="../../static/img/home/y_img@3x.png"></image>
					</view>
				</view>
			</view>
		</view><!-- 赣商页面结束 -->
                            
	</view>
</template>

<script>
	export default {
		data() {
			return {
				cardCur: 0,
				swiperList: [{
					id: 0,
					type: 'image',
					url: '../../static/img/home/banner@3x.png'
				}, {
					id: 1,
					type: 'image',
					url: '../../static/img/home/banner@3x.png',
				}, {
					id: 2,
					type: 'image',
					url: '../../static/img/home/banner@3x.png'
				}, {
					id: 3,
					type: 'image',
					url: '../../static/img/home/banner@3x.png'
				}, {
					id: 4,
					type: 'image',
					url: '../../static/img/home/banner@3x.png'
				}, {
					id: 5,
					type: 'image',
					url: '../../static/img/home/banner@3x.png'
				}, {
					id: 6,
					type: 'image',
					url: '../../static/img/home/banner@3x.png'
				}],
				dotStyle: false,
				towerStart: 0,
				direction: ''
			};
		},
		onLoad() {
			this.TowerSwiper('swiperList');
			// 初始化towerSwiper 传已有的数组名即可
		},
		methods: {
			DotStyle(e) {
				this.dotStyle = e.detail.value
			},
			// cardSwiper
			cardSwiper(e) {
				this.cardCur = e.detail.current
			},
			// towerSwiper
			// 初始化towerSwiper
			TowerSwiper(name) {
				let list = this[name];
				for (let i = 0; i < list.length; i++) {
					list[i].zIndex = parseInt(list.length / 2) + 1 - Math.abs(i - parseInt(list.length / 2))
					list[i].mLeft = i - parseInt(list.length / 2)
				}
				this.swiperList = list
			},

			// towerSwiper触摸开始
			TowerStart(e) {
				this.towerStart = e.touches[0].pageX
			},

			// towerSwiper计算方向
			TowerMove(e) {
				this.direction = e.touches[0].pageX - this.towerStart > 0 ? 'right' : 'left'
			},

			// towerSwiper计算滚动
			TowerEnd(e) {
				let direction = this.direction;
				let list = this.swiperList;
				if (direction == 'right') {
					let mLeft = list[0].mLeft;
					let zIndex = list[0].zIndex;
					for (let i = 1; i < this.swiperList.length; i++) {
						this.swiperList[i - 1].mLeft = this.swiperList[i].mLeft
						this.swiperList[i - 1].zIndex = this.swiperList[i].zIndex
					}
					this.swiperList[list.length - 1].mLeft = mLeft;
					this.swiperList[list.length - 1].zIndex = zIndex;
				} else {
					let mLeft = list[list.length - 1].mLeft;
					let zIndex = list[list.length - 1].zIndex;
					for (let i = this.swiperList.length - 1; i > 0; i--) {
						this.swiperList[i].mLeft = this.swiperList[i - 1].mLeft
						this.swiperList[i].zIndex = this.swiperList[i - 1].zIndex
					}
					this.swiperList[0].mLeft = mLeft;
					this.swiperList[0].zIndex = zIndex;
				}
				this.direction = ""
				this.swiperList = this.swiperList
			},
		}
	}
</script>

<style lang="scss">
	@import "../../common/css/common.scss";
	@import "../../common/css/other.scss";
</style>
