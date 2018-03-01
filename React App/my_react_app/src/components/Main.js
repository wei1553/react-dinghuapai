import React , {Component} from 'react';
import '../style/main.scss';
import axios from 'axios';
import {
  NavLink
} from 'react-router-dom';
import { Carousel, WhiteSpace, WingBlank } from 'antd-mobile';


class Main extends Component{
	constructor(props) {
		super(props)
		this.state = {
			banner : []
		}
	}
	getFilms() {
		var Id = this.props.match.params.fid;
		axios.get(`/api/product/index?id=${Id}`)
		.then((res)=>{
			console.log(res)
			this.setState({
				banner : res.data.data.detail.images
			})
		})
	}
	componentDidMount() {
		this.getFilms()
	}
	render() {
		return(
			<div id="main">
				<header>
					<NavLink to="/list" className="goBack">&lt;</NavLink>
					<div>商品详情</div>
					<NavLink to="/list">导航</NavLink>
				</header>
				<section>
					<div className="banner">
					
						<Carousel
						  dots={true}
				          autoplay={false}
				          infinite
				          selectedIndex={1}
				          beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
				          afterChange={index => console.log('slide to', index)}
				        >
						{
							this.state.banner.map((item,index)=>{
								return(
									<div key={index}>
										
										<img src={item}  alt=""
                style={{ width: '100%', verticalAlign: 'top' }} />
									</div>
									
								)
							})
							
						}
							</Carousel>
						
					</div>
				</section>
				<footer></footer>
			</div>
		)
	}
}


export default Main;