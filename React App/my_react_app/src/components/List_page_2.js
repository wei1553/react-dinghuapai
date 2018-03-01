import React, { Component } from 'react';
import axios from 'axios';
import '../style/list_page_2.scss'
import {
  Link
} from 'react-router-dom';


class List_page_2 extends Component{
	constructor(props) {
		super(props)
		this.state = {
			hua : "",
			list : [],
			items : [],
			showFlag : false,
			qie : false,
			tiao : "",
			tiao1 : "",
			tiao2 : "",
			tiao3 : ""
		}
		this.getFilms = this.getFilms.bind(this)
	}
	hideMenu = (showFlag) => {
		this.refs.Menu.setAttribute("class","show")
	}
	showMenu = () =>{
		this.refs.Menu.setAttribute("class","menu")
	}
	qie_1 = (qie) =>{
		setTimeout(()=>{
			if(this.state.qie == false){
				this.refs.qie_1.setAttribute("class","list_2")
				this.refs.qie_3.removeAttribute("class","list_2")
				this.refs.qie_2.removeAttribute("class","list_2")
				this.refs.qie_4.removeAttribute("class","list_2")
				this.refs.qie_4.removeAttribute("class","list_2")
			}
			this.setState({
				tiao1 : "def-desc",
				tiao : "",
				tiao2 : "",
				tiao3 : ""
			})
			this.getFilms(this.state.tiao1)
		},10)	
	}
	qie_2 = (qie) =>{
		setTimeout(()=>{
			if(this.state.qie == false){
				this.refs.qie_2.setAttribute("class","list_2")
				this.refs.qie_3.removeAttribute("class","list_2")
				this.refs.qie_4.removeAttribute("class","list_2")
				this.refs.qie_1.removeAttribute("class","list_2")
				this.refs.qie_1.removeAttribute("class","list_3")
			}
			this.setState({
				tiao2 : "price-asc",
				tiao : "",
				tiao1 : "",
				tiao3 : ""
			})
			this.getFilms(this.state.tiao2)
		},10)	
	}
	qie_3 = (qie) =>{
		setTimeout(()=>{
			if(this.state.qie == false){
				this.refs.qie_3.setAttribute("class","list_2")
				this.refs.qie_2.removeAttribute("class","list_2")
				this.refs.qie_1.removeAttribute("class","list_2")
				this.refs.qie_4.removeAttribute("class","list_2")
				this.refs.qie_1.removeAttribute("class","list_3")
			}
			this.setState({
				tiao3 : "sale-desc",
				tiao : "",
				tiao1 : "",
				tiao2 : ""
			})
			this.getFilms(this.state.tiao3)
		},10)
	}
	qie_4 = (qie) =>{
		setTimeout(()=>{
			if(this.state.qie == false){
				this.refs.qie_4.setAttribute("class","list_2")
				this.refs.qie_3.removeAttribute("class","list_2")
				this.refs.qie_2.removeAttribute("class","list_2")
				this.refs.qie_1.removeAttribute("class","list_2")
				this.refs.qie_1.removeAttribute("class","list_3")
			}
			this.setState({
				tiao : "new-desc",
				tiao1 : "",
				tiao2 : "",
				tiao3 : ""
			})
			this.getFilms(this.state.tiao)
		},10)	
	}
	getFilms() {
		var Id = this.props.match.params.did;
		var Attr = this.props.match.params.sid;
		var tiao = this.state.tiao;
		var tiao1 = this.state.tiao1;
		var tiao2 = this.state.tiao2;
		var tiao3 = this.state.tiao3;
		axios.get(`/api/product/goods-list?state=goodsList&page=1&cid=1029&filter=${Id}_${Attr}&sort=${tiao}${tiao3}${tiao1}${tiao2}`)
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
							<a href="javascript:;" className="list_1 list_3" ref="qie_1"  onClick={this.qie_1}>
								默认
							</a>
							<a href="javascript:;" className="list_1"  onClick={this.qie_2}  ref="qie_2">
								价格
								<span className="iconfont icon-jiantou"></span>
							</a>
							<a href="javascript:;" className="list_1"  ref="qie_3" onClick={this.qie_3}>
								销量
								<span className="iconfont icon-jiantou"></span>
							</a>
							<a href="javascript:;" className="list_1"  ref="qie_4" onClick={this.qie_4}>
								最新
								<span className="iconfont icon-jiantou"></span>
							</a>
							<a href="javascript:;" className="list_1" ref="list_2" onClick={this.hideMenu}>
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
										<Link to={"/main" + "/" + item.id}>
											<img src={item.img}/>
											<p>{item.title}</p>
											<p>￥{item.price}</p>
										</Link>
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
					<nav className="menu" ref="Menu" onClick={this.showMenu}>
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