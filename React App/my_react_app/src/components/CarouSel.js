import React, { Component } from 'react';
import '../style/App.scss';
import '../style/reset.css';
import '../style/iconfont.css';
import '../style/iconfont2.css';
import axios from 'axios';
import { Carousel, WhiteSpace, WingBlank } from 'antd-mobile';
import {
  BrowserRouter as Router,
  Route,
  NavLink
} from 'react-router-dom';

class CarouSel extends Component {
	constructor(props) {
		super(props)
		this.getFilms = this.getFilms.bind(this)
		this.state = {
			arr_top : [],
			swipe : [],
			arr_top1: [],
			arr : {},
			arr_top3 : [],
			arr_top4 : {},
			arr_top4_2 : [],
			arr_top5 : []
		}
	}
	getFilms() {
		axios.get('/api/home/index')
		.then((res)=>{
			this.state.arr = res.data.data.special
			this.state.arr_top4 = res.data.data.article
			this.setState({
				arr_top : res.data.data.lively1,
				swipe : res.data.data.ad.items,
				arr_top1 : res.data.data.lively2,
				arr : this.state.arr,
				arr_top3 : res.data.data.floor,
				arr_top4 : this.state.arr_top4,
				arr_top4_2 : res.data.data.article.waparticle,
				arr_top5 : res.data.data.comments.data
			})
		})
	}
	componentDidMount() {
		this.getFilms()	
	}
 	 render() {	
		return(		  	
			<div id="app">
			<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no"/>
			 
				<header>
						<div className="loadingDiv"></div>
						<div className="bd">
							<a href="###">
							</a>
						</div>
						<span className="ipt">
							<i className="iconfont icon-fangdajing"></i>
							<input type="text"  placeholder="请输入关键词"/>
						</span>
					<div className="kefu">
				  	<a href="###">
				   	在线客服
				   </a>
					</div>
				</header>
			
				
				<div id="sec">
	        <Carousel
	          autoplay={true}
	          infinite={true}
	          selectedIndex={1}
	          beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
	          afterChange={index => console.log('slide to', index)}
	        >
	          {this.state.swipe.map((item,index) => { 
	          	return(
	            <a key={item.id}>
	              <img
	                src={item.pic}
	                alt=""
	                style={{ width: '100%', verticalAlign: 'top' }}
	              />
	            </a>
	           )
	          })}
	        </Carousel>
	        
					<div className="hotList">
				    <div className="hotContent">
				    {
				    	this.state.arr_top.map((item,index)=>{
				    		return(
				    			<div className="item" key={item.id}>
						           	 <img src={item.index_img} />
						           	 <div className="text ellips">
						           	 		{item.name}
						           	 </div>             
					        </div>
				    		)
				    	})    
					  }      
				    </div>
				 </div>
				 <div className="index-promo">
	        <div className="list">
	        {
	        	this.state.arr_top1.map((item,index)=>{
	        		return(
	        			<div className="col" key={item.name}>
										<a href="###">
		                    <div className="tit">{item.name}</div>
		                    <div className="figure">
		    										<img src={item.index_img} alt="" />
		                    </div>
		                </a>              
		            </div>
	        		)	        		
	        	})
	        }   
	   	  		<div className="col col-count">
	                <div className="figure">
	       						<img src={this.state.arr.img}/>
	                </div>
	                <div className="info">
	                    <div className="name">
	                        <div className="ellips">森请密码</div>
	                    </div>
	                    <div className="price">￥858</div>
	                </div>
	                <div className="bar">
	                    <div className="bar-tip">限时特惠(<span>9.0</span>)折</div>
	                </div>                
	   				</div>  
	    	  </div>
		    </div>
				
				<div className="index-pdt ui-box" >
					<section>
					{
						this.state.arr_top3.map((item,index)=>{
							return(
						<div key={item.id}>
							<div className="box-hd mui-clearfix">
				                <div className="tit fl">
				                	<i className="iconfont icon-fenlei"></i>
				                	{item.wap_name}
				                </div>
			                <a href="###" className="more fr" >
			                	更多+
			                </a>
			            </div>
			            <ul className="plist mui-row">
							 	     	{
							 	     		item.attribute.map((ite,inde)=>{
							 	     			return(
							 	     				<li className="mui-col-xs-6" key={ite.id}>
								 	     				<a href="###" className="link">
										 	     			<div className="figure">
								 	     							<img src={ite.items.img} />
										 	     			</div>
										 	     			<div className="cnt">
				                            <div className="name">{ite.items.title}</div>
				                            <div className="bottom">
				                                <div className="price">￥{ite.items.price}</div>            
				                            </div>
				                        </div>
										 	     		</a>
								 	     			</li>
							 	     			)
							 	     		})
							 	     	}  		
			 	     			</ul>
			 	     		</div>	
							)
						})
					}
		 	     
			 	    </section>
				</div>
				
				
				<div className="ui-cells">
			    <div className="box-hd mui-clearfix">
			      <div className="tit fl">
			    		<i className="iconfont icon-fenlei"></i>
			    		{this.state.arr_top4.name}
			      </div>
			    	<a href="###" className="more fr" >
			        	更多+
			    	</a>
			    </div>	
			    <ul>
		    		{
		    			this.state.arr_top4_2.map((item,index)=>{
		    				return(
		    					<li key={item.id}>
			    					<span>
			    						{item.title}
			    					</span>
			    					<i>&gt;</i>
		    					</li>
		    				)
		    			})
		    		}
			    </ul>
			  </div>
				
				<div className="index-category ui-box">
				   	<div className="box-hd mui-clearfix">
				   	  <div className="tit fl">
				    		<i className="iconfont icon-fenlei"></i>
				    		评论列表
				    	</div>
				        <a href="###" className="more fr" >
				        		更多+
				        </a>
				    </div>
				      <div className="ui-border-t">
				         	<div className="evaluate-list ui-list">
				         		{
				         			this.state.arr_top5.map((ite,index)=>{
				         				return(
		         						<div className="item" key={ite.id}>
		         								<div className="figure-box">
							                   	 	<div className="figure">
							                    	<a href="###">
							                    		<img src={ite.items.img} alt="" />
							                    	</a>
					                				</div>
					        					</div>
							                <div className="flex-col cnt">
							                    <div className="name">
							                    	<a href="###">
							                    		{ite.items.title}
							                    	</a>
							                    </div>
							                    <div className="info">
							                        <div className="ui-star value-4">
							                            <div className="inner"></div>
							                        </div>
							                        <div className="time">
							                        	2018-01-29 09:19:14
							                        </div>
							                    </div>
							                    <div className="post">
																			{ite.content}                        
							                    </div>
							                </div>
							             </div>   
				         				)
				         			})
				         		}      
				            
				         	</div>
				    	</div>
				  </div>
				
					<div className="ft-service ui-border-t mui-row">
				    <div className="mui-col-xs-6 col col-1">
				    	<span className="ico"></span>
				    	<div className="label">新鲜花材</div>
						</div>
				    <div className="mui-col-xs-6 col col-2">
				    	<span className="ico"></span>
				    	<div className="label">诚信可靠</div>
				    </div>
				    <div className="mui-col-xs-6 col col-3">
				    	<span className="ico"></span>
				    	<div className="label">1-3小时送花</div>
				    </div>
				    <div className="mui-col-xs-6 col col-4">
				    	<span className="ico"></span>
				    	<div className="label">200%退赔承诺</div>
				    </div>
					</div>
				
					<div className="wap-footer ui-box">
						<div className="bar">
					        <a href="###" className="item">登录</a>
					        <a href="###" className="item">注册</a>
					        <a href="###" className="item">购物车</a>
					        <button className="item">返回顶部</button>
					 	</div>
					    <div className="hotline ui-border-t">
					        <i className="iconfont icon-dianhua"></i> 24小时订花热线：
					        <span className="tel">400-992-2020</span>
					    </div>
					    <div className="ft ui-border-t">
					        <div className="links">
					            <a href="###">关于订花派</a>
					            <a href="###">订单查询</a>
					            <a href="###">在线补款</a>
					            <a href="###">客服</a>
					        </div>
					    </div>
						<div className="ft ui-border-t">
					        <div className="links">
					            <a href="http://www.dinghuapai.cn/?type=pc">电脑版</a>
					            <span>|</span>
					            <a href="http://www.dinghuapai.cn/?type=wap">触屏版</a>
					        </div>
					        <div className="copyright">Copyright© 2009-2017 订花派 版权所有</div>
					    </div>
					</div>
			</div>
			 
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

export default CarouSel;


