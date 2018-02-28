import React, { Component } from 'react';
import axios from 'axios';
import '../style/list_page_2.scss'

class List_page_2 extends Component{
	constructor(props) {
		super(props)
		this.state = {
			hua : []
		}
		this.getFilms = this.getFilms.bind(this)
	}
	getFilms() {
		var Id = this.props.match.params.did;
		var Attr = this.props.match.params.sid;
		axios.get(`/api/product/goods-list?state=goodsList&page=1&cid=1029&filter=${Attr}_${Id}&sort=`)
		.then((res)=>{
			this.state.hua = res.data.data.category;
			this.setState({
				hua : res.data.data.goodsList.data
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
							当前分类&nbsp;:&nbsp;{this.state.hua}
						</p>
						<p>
							已选择&nbsp;:&nbsp;
							<a>
								{this.props.match.params.fid}x
							</a>	
						</p>
					</div>
					
				</section>
			</div>	
		)
	}
}

export default List_page_2;