import React, { Component } from 'react';
import axios from 'axios';
import '../style/list_page_1.scss'
import {
  NavLink
} from 'react-router-dom';

class List_page_1 extends Component{
	constructor(props) {
		super(props)
		this.state = {
			header : [],
			items1 : "",
			items2 : "",
			items3 : "",
			items4 : "",
			items5 : "",
			items6 : "",
			items7 : "",
			arr_right : []
		}
		this.goto = this.goto.bind(this);
	}
	goto(fid,did,sid) {
		console.log(this);
		this.props.history.push("/detail/" + fid + "/" + did + "/" + sid);
	}
	getFilms() {
		axios.get("/api/product/category")
		.then((res)=>{
			this.state.items1 = res.data.data.label[0]
			this.state.items2 = res.data.data.label[1]
			this.state.items3 = res.data.data.label[2]
			this.state.items4 = res.data.data.label[3]
			this.state.items5 = res.data.data.label[4]
			this.state.items6 = res.data.data.label[5]
			this.state.items7 = res.data.data.label[6]
			this.state.items8 = res.data.data.label[7]
			this.setState({
				header : res.data.data.category,
				items1 : this.state.items1,
				items2 : this.state.items2,
				items3 : this.state.items3,
				items4 : this.state.items4,
				items5 : this.state.items5,
				items6 : this.state.items6,
				items7 : this.state.items7,
				arr_right : res.data.data.label
			})
		})
	}
	componentDidMount() {
		this.getFilms()
	}
	render(){
		return(
			<div className="page1">
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
					<div className="sec_top">
						<ul>
						{
							this.state.header.map((item,index)=>{
								return(
									<li key={item.id}>
										<NavLink to="/list2">
											<p><img src={item.img}/></p>
											<p>{item.name}</p>
										</NavLink>
									</li>
								)
							})
						}
							
						</ul>
					</div>
					<div className="sec_list">	
						<div className="list_left">
							<ul>
								<li className="tiao_1">
									{this.state.items1.name}
								</li>
								<li className="tiao_2">
									{this.state.items2.name}
								</li>
								<li className="tiao_3">
									{this.state.items3.name}
								</li>
								<li className="tiao_4">
									{this.state.items4.name}
								</li>
								<li className="tiao_5">
									{this.state.items5.name}
								</li>
								<li className="tiao_6">
									{this.state.items6.name}
								</li>
								<li className="tiao_7">
									{this.state.items7.name}
								</li>
							</ul>
						</div>
						<div className="list_right">
						{
							this.state.arr_right.map((item,index)=>{
								return(
									<div className="list_rig" key={item.id}>
										<h2>
											{item.name}
										</h2>
										<div>						
											<ul>	
											{
												item.values.map((ite,inde)=>{
													return(
														<li key={ite.id}>
															<NavLink onClick={()=>this.goto(ite.name,ite.id,ite.attr_id)}>
																<span></span>
																<span>{ite.name}</span>
																<img src={ite.img} />
															</NavLink>
														</li>
													)
												})
											}		
											</ul>
										</div>	
									</div>
								)
							})
						}
						</div>
					</div>
					
				</section>	
				<footer>
				<ul id="foot">
					<li>
						<NavLink exact activeClassName="active" to="/">
							<i className="iconfont icon-shouye"></i>
							<span>首页 </span>
						</NavLink>
					</li>
					<li>
						<NavLink activeClassName="active" to="/list">
							<i className="iconfont icon-fenlei"></i>
							<span>分类</span>
						</NavLink>
					</li>
					<li>
						<a href="###">
							<i className="iconfont icon-iconset0316"></i>
							<span>购物车</span>
						</a>
					</li>
					<li>
						<a href="###">
							<i className="iconfont icon-home"></i>
							<span>我的</span>
						</a>
					</li>
				</ul>
			</footer> 
			</div>	
		)
	}
}

export default List_page_1;
