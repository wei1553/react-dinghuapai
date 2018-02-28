import React, { Component } from 'react';
import axios from 'axios';
import '../style/list_page_2.scss'

class List_page_2 extends Component{
	constructor(props) {
		super(props)
		this.state = {
			hua : "",
			list : [],
			items : []
		}
		this.getFilms = this.getFilms.bind(this)
	}
	getFilms() {
		var Id = this.props.match.params.did;
		var Attr = this.props.match.params.sid;
		axios.get(`/api/product/goods-list?state=goodsList&page=1&cid=1029&filter=${Id}_${Attr}&sort=`)
		.then((res)=>{
			console.log(res)
			this.state.hua = res.data.data.category
			this.setState({
				hua : this.state.hua,
				list : res.data.data.goodsList.data,
				items : res.data.data.attulist
			})
		})
	}
	componentDidMount() {
		this.getFilms()
	}
	render() {
		return(
			<div className="page2">
				<header>
					<div className="top">
						<span className="iconfont icon-fangdajing">
						</span>
						<input type="text" name="" id="" value="" placeholder="请输入关键字"/>
					</div>
					<a className="iconfont icon-gouwuche">	
					</a>
				</header>
				<section>
					<div className="main_top">
						<p>
							当前分类&nbsp;:&nbsp;{this.state.hua.name}
						</p>
						<p>
							已选择&nbsp;:&nbsp;
							<a>
								{this.props.match.params.fid}x
							</a>	
						</p>
					</div>
					<div className="main_mid">
						<p>
							<a href="javascript:;" className="list_1" style={{background: "#ca0e25", color: "#fff"}}>
								默认
							</a>
							<a href="javascript:;" className="list_1">
								价格
								<span className="iconfont icon-jiantou"></span>
							</a>
							<a href="javascript:;" className="list_1">
								销量
								<span className="iconfont icon-jiantou"></span>
							</a>
							<a href="javascript:;" className="list_1">
								最新
								<span className="iconfont icon-jiantou"></span>
							</a>
							<a href="javascript:;" className="list_1">
								鲜花分类
								<span className="iconfont icon-funnel">
									
								</span>
							</a>
						</p>	
					</div> 
					<div className="main_bot" id="container">
						<ul>
						{
							this.state.list.map((item,index)=>{
								return(
									<li key={item.id}>
										<a href="###">
											<img src={item.img}/>
											<p>{item.title}</p>
											<p>￥{item.price}</p>
										</a>
									</li>
								)
							})
						}
							
						</ul>
					</div>
					<aside>
						<p className="iconfont icon-QQ"></p>
						<p className="iconfont icon-icon-test-copy"></p>
					</aside>
					<nav className="menu">
						<div className="list_tit">					
							<div className="tit_top">
								<p>筛选</p>
							</div>
							<div className="tit_main">
								{
									this.state.items.map((item,index)=>{
										return(
											<div className="main_list" key={item.id}>
												<p>
													{item.name}
												</p>
												<span>
													全部
												</span>
												{
													item.attr_vaues.map((ite,inde)=>{
														return(
															<span key={ite.id}>
																{ite.name}
															</span>
														)
													})
												}
												
											</div>	
										)
									})
								}
									
							</div>	
						</div>
					</nav>
			
				</section>
			</div>	
		)
	}
}

export default List_page_2;