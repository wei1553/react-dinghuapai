import React , {Component} from 'react';
import '../style/main.scss';
import axios from 'axios';
import {
  NavLink
} from 'react-router-dom';
import { Carousel, WhiteSpace, WingBlank, Stepper ,Tabs} from 'antd-mobile';
import { StickyContainer, Sticky } from 'react-sticky';




function renderTabBar(props) {
  return (<Sticky>
    {({ style }) => <div style={{ ...style, zIndex: 1 }}><Tabs.DefaultTabBar {...props} /></div>}
  </Sticky>);
}
const tabs = [
  { title: '商品详情' },
  { title: '用户评价' },
  { title: '鲜花问答' },
];
class Main extends Component{
	constructor(props) {
		super(props)
		this.state = {
			banner : [],
			biao : "",
			Id : "",
			paiJia : "",
			mobile_price : "",
			lisheng : "",
			val: 1,
      val1: 1,
      cai : "",
      bao : "",
      hua : "",
      shuo : "",
      description : "",
      heji : ""
		}
		this.heJi = this.heJi.bind(this)
	}

	 onChange = (val) => {
    // console.log(val);
    this.setState({ val });
  }
  onChange1 = (val1) => {
    // console.log(val);
    this.setState({ val1 });
  }
	getFilms() {
		var Id = this.props.match.params.fid;
		axios.get(`/api/product/index?id=${Id}`)
		.then((res)=>{
			//console.log(res)
			this.setState({
				banner : res.data.data.detail.images,
				biao : res.data.data.detail.title,
				Id : res.data.data.detail.id,
				paiJia : res.data.data.price_name,
				mobile_price : res.data.data.detail.mobile_price,
				lisheng : res.data.data.detail.lisheng,
				cai : res.data.data.detail.material,
				bao : res.data.data.detail.package,
				hua : res.data.data.detail.flower_means,
				shuo : res.data.data.detail.other_notes,
				description : res.data.data.detail.description
			})
		})
	}
	heJi = (mobile_price)=> {
		var heji = document.getElementsByClassName("am-stepper-input")[0];
		var jia = document.getElementsByClassName("am-stepper-handler-up")[0];
		var jian = document.getElementsByClassName("am-stepper-handler-down")[0];
		var zong = document.getElementsByClassName("zong")[0]
		mobile_price = this.state.mobile_price
		jia.onclick = function() {
			zong.innerText= mobile_price * heji.value
		}
		jian.onclick = function() {
			zong.innerText = mobile_price * heji.value
		}
	}
	componentDidMount() {
		this.getFilms()	
	}
	componentDidUpdate() {
		this.heJi()
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
					<div className="main_sec">
						<div className="main_sec_div1"> 
							<p>
								<span>{this.state.biao}</span>
								<i>编号:{this.state.Id}</i>
							</p>
							<p>
								<span>{this.state.paiJia}</span>
								<span>￥{this.state.mobile_price}</span>
								<span>手机专享价</span>
								<span>已省{this.state.lisheng}元</span>
							</p>
						</div>
						<div className="bor">						
						</div>
						
							<div className="shuLiang">
									<span>数量:</span>
			            <Stepper
			              
			              showNumber
			              min={1}
			              value={this.state.val}
			              onChange={this.onChange}
			            />
			        </div>
			       
					</div>
					
					<div>
				    <WhiteSpace />
				    <StickyContainer>
				      <Tabs tabs={tabs}
				        initalPage={'t2'}
				        renderTabBar={renderTabBar}
				      >
				        <div className="shangPin">
				          <div classNmae="shang_list">
				          	<p>
				          		<span>材料:</span>
				          		<span>{this.state.cai}</span>
				          	</p>
				          	<p>
				          		<span>包装:</span>
				          		<span>{this.state.bao}</span>
				          	</p>
				          	<p>
				          		<span>花语:</span>
				          		<span>{this.state.hua}</span>
				          	</p>
				          	<p>
				          		<span>附送:</span>
				          		<span>免费附送精美贺卡，代写您的祝福。（您下单时可填写留言栏)</span>
				          	</p>
				          	<p>
				          		<span>配送:</span>
				          		<span>全国（可配送至全国1000多城市，市区免配送费）</span>
				          	</p>
				          	<p>
				          		<span>说明:</span>
				          		<span>{this.state.shuo}</span>
				          	</p>
				          </div>
				          <div pic_data>
				          	<img src={this.state.description.slice(13,61)} style={{width:"100%"}}/>
				          	<img src={this.state.description.slice(112,160)} style={{width:"100%"}}/>
				          	<img src="/uploads/store/04.jpg" style={{width:"100%"}}/>
				          	<img src="/uploads/store/05.jpg" style={{width:"100%"}}/>
				          	<img src="/uploads/store/06.jpg" style={{width:"100%"}}/>
				          	<img src="/uploads/store/07.jpg" style={{width:"100%"}}/>
				          	<img src="/uploads/store/09.jpg" style={{width:"100%"}}/>
				          </div>
				        </div>
				        <div className="yongHu">
				          
				        </div>
				        <div className="xianHua">
				          Content of third tab
				        </div>
				      </Tabs>
				    </StickyContainer>
				    <WhiteSpace />
				  </div>
				</section>
				<footer>
					<div>
						<span>合计:</span><i className="zong">{this.state.mobile_price}</i><span>元</span>
					</div>
					<div>
						<span>加入购物车</span>
						<a href="###">立即购买</a>
					</div>
						
				</footer>
			</div>
		)
	}
}


export default Main;