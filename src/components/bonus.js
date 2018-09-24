import React from 'react';
import {Link} from 'react-router-dom'
import { HamburgerBtn, BonusWrapper, BonusListWrapper,MenuWrapper } from '../styled/bonusFaqStyled'


import tip from "../static/tip.png";
import star from "../static/start.png";
import film from "../static/film.png";
import money from "../static/money.png";
import moneyR from "../static/money-right.png";
import miniFilm01 from "../static/miniFilm01.png";
import miniFilm02 from "../static/miniFilm02.png";
import miniFilm03 from "../static/miniFilm03.png";
import search from "../static/search.png";
import ticket from "../static/ticket.png";
import mainBg from "../static/main-bg.png";
import bgTitleWhite from "../static/bg-title-white.png";
import bgMiddle from "../static/bg-middle.png";


class Bonus extends React.Component {

	constructor(props){
		super(props);
		this.scrollToTop = this.scrollToTop.bind(this);
		// this.checkToken = this.checkToken.bind(this);
		// this.noToken = this.noToken.bind(this);
		// this.getMemberPointsList = this.getMemberPointsList.bind(this);
		// this.webCodeGetToken = this.webCodeGetToken.bind(this);
		// this.searchClick = this.searchClick.bind(this);
		// this.getMemberPoints = this.getMemberPoints.bind(this);
		// this.phoneScrollFetch = this.phoneScrollFetch.bind(this);
		// this.getDayNum = this.getDayNum.bind(this);
		// this.startOnChange = this.startOnChange.bind(this);
		// this.endOnChange = this.endOnChange.bind(this);
		this.searchPoint = this.searchPoint.bind(this);
		this.hamburger = this.hamburger.bind(this);
		this.debounce = this.debounce.bind(this);

		this.state = {
			visible:false,
			isLoadingImg:false,
			isEmpty:false,
			isError:false,
			isResult:true,
			isList:false,
			isScrollLoading:false,
			start: '',//API用
			end:'',//API用
			startDate:null,//套件用
			endDate:null,//套件用
			total:1,
			nowIndex:1,
			isScrollEmpty:false,
			location:'http://localhost:3000',
			memberPointListRWD:[],
			memberPointList:'',
			memberPoint:'',
			hamburgerShow:false
		}
	}

    componentDidMount(){

		window.addEventListener('scroll', this.debounce);

		this.scrollToTop(1);
		this.setState({
			location:window.location.host
		},()=>{
			document.getElementById("picker").readOnly = true;
			document.getElementById("picker1").readOnly = true;
		})

	}

	debounce(){
		let wait = 20, immediate = true;

		const sliderImages = document.querySelectorAll('.slide-in');

		let func = ()=>{
			sliderImages.forEach(sliderImage => {
				// half way through the image
				const slideInAt = (window.scrollY + window.innerHeight) - sliderImage.height / 2;
				// bottom of the image
				const imageBottom = sliderImage.offsetTop + sliderImage.height;
				const isHalfShown = slideInAt > sliderImage.offsetTop;
				const isNotScrolledPast = window.scrollY < imageBottom;
				if (isHalfShown && isNotScrolledPast) {
					sliderImage.classList.add('active');
				} else {
					sliderImage.classList.remove('active');
				}
			});
		}

		var timeout;
		var context = this, args = arguments;
		var later = function() {
			timeout = null;
			if (!immediate){
				func.apply(context, args);
			}
		};
		var callNow = immediate && !timeout;
		clearTimeout(timeout);
		timeout = setTimeout(later, wait);
		if (callNow){
			func.apply(context, args);
		}
	}


	scrollToTop(scrollDuration) {
		var scrollStep = -window.scrollY / (scrollDuration / 15),
        scrollInterval = setInterval(function(){
	        if ( window.scrollY != 0 ) {
	            window.scrollBy( 0, scrollStep );
	        }
	        else clearInterval(scrollInterval);
	    },15);
	}


	searchPoint(){
		console.log("v");
		document.querySelector(".main").scrollIntoView({block: "start", behavior: "smooth"});
	}

	hamburger(){
		document.querySelector('.hamburger').classList.toggle('active');
		this.setState({
			hamburgerShow:!this.state.hamburgerShow,
		});
	}


  	render () {
		if(this.state.isLoadingImg){
			return(
				<div>12</div>
			)
		}else if(this.state.isResult){
			return(

			<div>
				<BonusWrapper search={search} mainBg={mainBg} bgTitleWhite={bgTitleWhite} bgMiddle={bgMiddle}>
					<HamburgerBtn onClick={this.hamburger} lineToday={true}>
						<div id="hamburger" className="hamburger hamburger-plus">
							<div className="icon"></div>
						</div>
					</HamburgerBtn>

					<MenuWrapper hamburgerShow={this.state.hamburgerShow}>
						<Link to='/'>
							<div className="text">電影紅利查詢</div>
						</Link>
						<Link to='/faq'>
							<div className="text">票務FAQ</div>
						</Link>
					</MenuWrapper>

					<div className="search" onClick={this.searchPoint}>查點數</div>
					<div className="header">
						<div className="logo"></div>
					</div>
					<div className="spaceBox"></div>
					<div className="banner">
						<div className="img"></div>
						<div className="startWrap">
							<img src={star} id="start01" className="slide-in"/>
							<img src={star} id="start02" className="slide-in"/>
							<img src={star} id="start03" className="slide-in"/>
							<img src={star} id="start04" className="slide-in"/>
							<img src={film} id="actionImg02" className="slide-in"/>
						</div>
						<img src={money} id="actionImg01" className="align-left slide-in"/>
						<img src={moneyR} id="actionImg03" className="align-right slide-in"/>
						<div className="contentWrap">
							<div className="title">電影紅利</div>
							<div className="text">LINE TODAY</div>
							<div className="subText">獨享購票優惠</div>
							<img src={ticket} id="imgTicket" className="slide-in"></img>
							<div className="mainContent">
								<span>於LINE TODAY 電影消費1元累1點</span><br/>
								<span>聰明消費 電影購票立即省</span><br/>
								<span>累滿</span><span className="pink">500點</span><span>訂票 每張最高</span><span className="pink">省90元</span>
							</div>
							<div className="subContent">
								<ul>
									<li>凡電影紅利累積滿500點，即可用獨享優惠價訂購1張電影票，累積滿1,000點可訂購2張…依此類推,每人每次購買張數以6張為限。</li>
									<li>於訂票流程選擇付款方式『會員紅利優惠』訂票即可享會員優惠價，每張票最高可省90元。</li>
								</ul>
							</div>
						</div>
						<div className="stepText">
							<div className="stepbyStep"></div>
							<span className="mainText">消費1元累1點，累點超迅速!</span><br/>
							<span className="subText">*累計點數以實際刷卡金額計算</span><br/>
							<span className="subText">＊訂票手續費恕不列入計算</span>
						</div>
					</div>
					<div className="bonusArea">
						<div className="top">
							<span className="main">我的電影紅利點數</span><br/>
							<span className="num">123</span><br/>
							<span className="point">點</span>
						</div>
						<div className="miniFilmWraper">
							<img src={miniFilm01} id="miniFilm01" className="bb-left slide-in"/>
							<img src={miniFilm02} id="miniFilm02" className="bb-left slide-in"/>
							<img src={miniFilm03} id="miniFilm03" className="bb-right slide-in"/>
						</div>

						<div className="content">
							<BonusListWrapper part={this.props.part}>
								<div className="searchBox">
									<div className="titleWrap">
										<div className="title">紅利點數</div>
										<img src={tip}/>
										<div className="tip" style={{display:"none"}}>＊若您的票券為參與活，逾期即無法延長使用。敬請見諒!!</div>
									</div>
									<div className="inputWrap">

										<input id="picker" placeholder={"查詢日期"}
											selected={this.state.endDate}
											onChange={this.endOnChange}
											className="date"
											showYearDropdown
											showMonthDropdown
											dateFormatCalendar="MMMM"
											scrollableYearDropdown
											yearDropdownItemNumber={5}
											placeholderText="查詢日期"
											onKeyDown={e => e.preventDefault()}

										/>

										<div className="to"></div>

										<input id="picker1" placeholder={"查詢日期"}
											selected={this.state.startDate}
											onChange={this.startOnChange}
											className="date"
											showYearDropdown
											showMonthDropdown
											dateFormatCalendar="MMMM"
											scrollableYearDropdown
											yearDropdownItemNumber={5}
											placeholderText="查詢日期"
											onKeyDown={e => e.preventDefault()}

										/>

										<div className="submit" onClick={this.searchClick}>查詢</div>
									</div>
								</div>
							</BonusListWrapper>
							{	this.state.isEmpty?<div className="respondText">此區間沒有紅利點紀錄</div>:null}
							{  	this.state.isList?
								<div className="resultWrap">
									{/* <MemberBonusDetail result={this.state.memberPointList} rwdResult={this.state.memberPointListRWD} /> */}
								</div>
							:null}
							{
			    				this.state.isScrollEmpty ?
			    				null
			    				:
			    				<div className="scroll">
				    				{/* { this.state.isScrollLoading ? <IoLoadA className="load"/> : <IoMore  className="icon"/>} */}
				    			</div>
			    			}
						</div>

					</div>
					<div className="importantNote">
						<div className="text">電影紅利</div>
						<div className="text">使用注意事項</div>
						<ol className="list">
							<li> 電影紅利點數是無償取得的有價贈品；不得贈予與轉售，或進行與使用規則無關的行為。</li>
							<li> 使用免費優惠券序號恕不得累計電影紅利點數。</li>
							<li> 電影紅利點數依實際訂票頁面所顯示之自付額計算(訂票手續費恕不累計)。線上退票/取消訂單時，該筆消費所獲得的會員紅利會自動扣除或退點；影城現場退票（含部分及全退）皆不另外給點、退點，按原線上訂購的之自付金額計算。</li>
							<li> 消費所累積之電影紅利點數，統一於電影開演後1天自動入點至會員帳戶。</li>
							<li> 會員所累積之電影紅利將於紅利入帳日的次年12/31到期，期滿將無法使用。例如:2018/1/1~2018/12/31期間所入帳之點數，將全部於2019/12/31到期。</li>
							<li> 由於登入方式不同，於LINE TODAY消費所累計之電影紅利，恕不得要求與原ez訂員帳號累計之紅利合併。</li>
							<li> 天災或其他不可抗力因素，致使電影紅利資料流失時，本公司不負補償之責。</li>
							<li> 其他有關電影紅利未盡事宜，依ez訂網站公告為準。本公司保留得隨時修正、暫停、或終止本回饋辦法的權利，並於變動前公佈於ez訂網站相關頁面。</li>
						</ol>
					</div>
					<div className="footer">© 2018 富爾特科技股份有限公司 版權所有。轉載必究</div>
				</BonusWrapper>
			</div>
			)
		}else if(this.state.isError){
			return(
				<div>錯誤</div>
			)
		}
	}
}


export default Bonus;
