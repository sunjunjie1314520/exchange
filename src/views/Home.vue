<template>
	<div class="app">
		<div class="home-page">
			<div class="mui-scroll">
				<div class="wrapper">
					<div class="head">
						<div class="text">
							
						</div>
						<div class="home-user">
							<img src="../../src/static/img/bab103_77x77.jpg" alt="">
						</div>
						<div class="func">
							<div class="ico">
								买
							</div>
							<div class="ico">
								卖
							</div>
						</div>
					</div>
					<div class="banner">
						<img src="../../src/static/img/0fc7e1_690x335.jpg" alt="">
					</div>
					<div class="data">
						<div class="today">
							<div class="item">
								<div class="tit">
									均价(昨/今)
								</div>
								<div class="number">
									$ 1.42/1.23
								</div>
							</div>
							<div class="item">
								<div class="tit">
									最高(昨/今)
								</div>
								<div class="number">
									$ 1.50/1.50
								</div>
							</div>
							<div class="item">
								<div class="tit">
									当前底价
								</div>
								<div class="number">
									$ 0.29
								</div>
							</div>
						</div>
						<div class="deal">
							<div class="item">
								<div class="tit">
									买量(BFX)
								</div>
								<div class="number">
									10259046
								</div>
							</div>
							<div class="item">
								<div class="tit">
								成交(BFX)(昨/今)
								</div>
								<div class="number">
									1564365/632891
								</div>
							</div>
						</div>
					</div>
					<div class="search">
						<div class="ico">
							<img src="../../src/static/img/1d1714_30x30.jpg" alt="">
						</div>
						<div class="text">
							<input type="text" name="" id="" placeholder="请输入您要搜索的手机号">
							<button>搜索</button>
						</div>
					</div>
					<div class="details">
						<div class="tabs">
							<div class="item">
								<div class="txt">时间</div>
								<div class="sta">
									<div class="tops"></div>
									<div class="bots"></div>
								</div>
							</div>
							<div class="item">
								<div class="txt">单价</div>
								<div class="sta">
									<div class="tops"></div>
									<div class="bots"></div>
								</div>
							</div>
							<div class="item">
								<div class="txt">数量</div>
								<div class="sta">
									<div class="tops"></div>
									<div class="bots"></div>
								</div>
							</div>
						</div>
						<div class="list">
							<div class="item">
								<div class="user">
									<div class="text">
										<div class="imgs">
											<img src="../../src/static/img/b06202_64x64.png" alt="">
										</div>
										<div class="label">
											<div class="txt">
												155****8020
											</div>
											<div class="pays">
												<img src="../../src/static/img/469592_34x34.png" alt="">
											</div>
										</div>
									</div>
									<div class="price">
										<div class="tit">
											单价
										</div>
										<div class="num">
											$ 1.35
										</div>
									</div>
								</div>
								<div class="inform">
									<div class="text">
										<div class="p">
											数量 1000 BFX
										</div>
										<div class="P">
											最近7日成交3笔
										</div>
									</div>
									<div class="link">
										<button>出售</button>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
            <div class="menu-slide" v-if="show">
                <div class="menu-content">
                    <div class="id">
                        18665348631
                    </div>
                    <div class="assets">
                        <div class="item">
                            <div class="tits">
                                账户资产(BFX)
                            </div>
                            <div class="num">
                                0.00
                            </div>
                            <div class="func">
                                <div class="txt">
                                    冻结
                                </div>
                                <div class="ico">
                                    <img src="../../src/static/img/81730a_32x32.png" alt="">
                                </div>
                            </div>
                        </div>
                        <div class="item">
                            <div class="tits">
                                BDF <img src="../../src/static/img/371bdd_32x33.png" alt="">
                            </div>
                            <div class="num">
                                0.00
                            </div>
                        </div>
                    </div>
                    <div class="list">
                        <ul>
                            <li>
                                <div class="ico">
                                    <img src="../../src/static/img/a9d150_40x44.png" alt="">
                                </div>
                                <div class="text">
                                    菜单管理
                                </div>
                            </li>
                            <li>
                                <div class="ico">
                                    <img src="../../src/static/img/8fa11d_42x45.png" alt="">
                                </div>
                                <div class="text">
                                    设置
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
	</div>
</template>

<script>

export default {
	name: 'Home',
	data(){
		return {
			show: false,
		}
	},
	mounted(){
		this.mui(".home-page").scroll({
			scrollY: true, //是否竖向滚动
			scrollX: false, //是否横向滚动
			startX: 0, //初始化时滚动至x
			startY: 0, //初始化时滚动至y
			indicators: true, //是否显示滚动条
			deceleration: 0.0006, //阻尼系数,系数越小滑动越灵敏
			bounce: true //是否启用回弹
		})
	}
}
</script>
