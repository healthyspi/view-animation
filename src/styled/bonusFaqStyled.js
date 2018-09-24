import styled , { css , keyframes } from 'styled-components';

const sizes = {
	phone: 768,
	phone554:554,
	phone414:414,
	xphone:375,
	phone360:360,
    phone320:320,
}


const media = Object.keys(sizes).reduce((acc, label) =>{
	acc[label] = (...args) => css`
		@media (max-width: ${sizes[label] / 16}em) {
			${css(...args)}
		}
	`

	return acc
}, {});

export const FaqWrapper = styled.div`
	background-color: #fff;
	max-width: 768px;
	margin: 0 auto;

	.gotoTop{
        width: 130px;
        height: 130px;
        background-image: url(${props=>props.gotoTop});
        background-size: cover;
        position: fixed;
        right: 25px;
        bottom: 25px;
        font-size: 28px;
        color: #ffffff;
        text-align: center;
        line-height: 180px;
		z-index: 100;

        ${media.phone414`
            width: 20vw;
            height: 20vw;
            font-size: 18px;
            line-height: 120px;
        `}

        ${media.xphone`
            font-size: 16px;
            line-height: 105px;
        `}

        ${media.phone320`
            font-size: 14px;
            line-height: 89px;
        `}
    }

	.header{
        width: 768px;
        height: 79px;
        background-color: #000000;
        padding-top: 17px;
        box-sizing: border-box;
		position: fixed;
		z-index: 100;

        ${media.phone414`
            height: 60px;
			width: 100%;
        `}

		${media.xphone`
            height: 62px;
        `}

        .logo{
            background-image: url("../../static/lineBonusFaq/logo.png");
            width: 300px;
            height: 49px;
            background-size: cover;
            margin-left: 30px;

            ${media.phone414`
                width: 190px;
                height: 30px;
                margin-left: 20px;
            `}
        }
    }
	.spaceBox{
		height: 80px;

		${media.phone414`
			height: 60px;
        `}
	}

	.banner{
		max-width: 768px;
		background-image: url(${props=>props.faqMainImg});
		margin: auto;
		height: 1145px;
		background-size: cover;
		position: relative;

		${media.phone414`
            width: 100%;
			height: 612px;
        `}

		${media.xphone`
			height: 555px;
		`}
		${media.phone320`
			height: 475px;
		`}

		.mainBox{
		    width: 768px;
		    height: 865px;

			${media.phone414`
	            width: 100%;
				height: 460px;
	        `}

			${media.xphone`

				height: 415px;
			`}
			${media.phone320`
				height: 350px;
			`}
		}
		.mainText{
		  font-size: 40px;
		  font-weight: 600;
		  text-align: center;
		  color: #ffffff;

		  ${media.phone414`
			  font-size: 25px;
		  `}
		}

		.subText{
		  font-size: 58px;
		  font-weight: 600;
		  text-align: center;
		  color: #ffffff;

		  ${media.phone414`
			  font-size: 30px;
		  `}
		}
		.startWrap{
			#start01{
				position: absolute;
				top: 60px;
				width: 30px;
				left: 330px;
				${media.phone414`
					width: 16px;
					left: 170px;
					top: 40px;
	            `}
				${media.xphone`
					left: 145px;
					top: 32px;
	            `}
				${media.phone320`
					width: 14px;
					left: 130px;
					top: 25px;
	            `}
			}
			#start02{
				position: absolute;
			    top: 280px;
			    width: 30px;
			    left: 80px;

				${media.phone414`
					width: 16px;
					left: 50px;
					top: 150px;
	            `}
				${media.xphone`
					left: 45px;
					top: 129px;
	            `}
				${media.phone320`
					left: 33px;
				    top: 109px;
				    width: 14px;
	            `}
			}
			#start03{
				position: absolute;
				top: 530px;
				width: 30px;
				left: 210px;

				${media.phone414`
					width: 16px;
					top: 290px;
					left: 120px;
	            `}
				${media.xphone`
					top: 265px;
					left: 100px;
	            `}
				${media.phone320`
					left: 85px;
				    width: 14px;
				    top: 227px;
	            `}
			}
			#start04{
				position: absolute;
				top: 250px;
				width: 30px;
				right: 70px;

				${media.phone414`
					top: 130px;
					width: 16px;
					right: 30px;
	            `}
				${media.phone320`
					top: 114px;
				    width: 14px;
				    right: 18px;
	            `}
			}

			.slide-in {
				opacity:0;
			}
			.slide-in.active {
				opacity:1;
				transition: opacity .8s ease-in-out;
			}
		}

		#actionImg01{
			position: absolute;
			top: 100px;
			width: 210px;
			left: 45px;

			${media.phone414`
				top: 60px;
				width: 100px;
				left: 36px;
			`}

			${media.xphone`
				left: 17px;
			`}

			${media.phone320`
				top: 45px;
				width: 85px;
			`}
		}
		#actionImg02{
			position: absolute;
			right: 0px;
			top: 30px;
			width: 147px;

			${media.phone414`
				width: 75px;
				top: 20px;
			`}

			${media.phone320`
				width: 60px;
				top: 25px;
			`}
		}
		#actionImg03{
			position: absolute;
			right: 60px;
			top: 434px;
			width: 210px;

			${media.phone414`
				right: 30px;
				top: 235px;
				width: 105px;
			`}

			${media.xphone`
				top: 212px;
				width: 95px;
			`}
			${media.phone320`
				top: 182px;
				width: 85px;
				right: 25px;
			`}
		}


		.slide-in {
			opacity:0;
			transition:all .5s;
		}
		.align-right {
			float:right;
			margin-left:20px;
	    }
		.align-left {
			float:left;
			margin-right:20px;
		}

		.align-left.slide-in {
			transform:translateX(-30%) scale(0.95);
		}
		.align-right.slide-in {
	      	transform:translateX(30%) scale(0.95);
	    }
		.slide-in.active {
			opacity:1;
			transform:translateX(0%) scale(1);
		}
	}
	.step{
		.box{
			 width: 768px;
			 padding: 40px 0;

			 ${media.phone414`
 	            width: 100%;
 	        `}

			 ${media.xphone`
				padding: 20px 0;
	 		`}

			.num{
				width: 120px;
				height: 120px;
				margin: 0 auto;
				background-size: cover;

				${media.phone414`
					width: 90px;
	   				height: 90px;
			   `}

			   ${media.xphone`
				   width: 75px;
				   height: 75px;
			  `}
			}

			 .num.one{
				 background-image: url(${props=>props.pre01});
			 }
			 .num.two{
				 background-image: url(${props=>props.pre02});
			 }
			 .num.three{
				 background-image: url(${props=>props.pre03});
			 }
			 .num.fore{
				 background-image: url(${props=>props.pre04});
			 }
			 .text{
				height: 140px;
				font-size: 58px;
				font-weight: 500;
				line-height: 1.21;
				text-align: center;
				color: #000000;
				margin: 20px 0;

				${media.phone414`
					font-size: 27px;
					height: 68px;
					margin: 15px 0 7px;
	   	 		`}
				${media.phone320`
					font-size: 23px;
			   `}

				span{
					color: #e50081;
				}
			 }
			 .subText{
				height: 45px;
				font-size: 32px;
				font-weight: 500;
				text-align: center;
				color: #575757;

				${media.phone414`
					font-size: 18px;
					height: auto;
				`}

				span{
					color: #e50081;
				}
			 }
			 #imgOne{
				width: 460px;
				height: 260px;
				margin: 0 auto;
				display: block;

				${media.phone414`
					width: 64%;
				    height: 135px;
			   `}
			   ${media.phone320`
				   width: 75%;
			  `}
			 }

			#imgFore{
				width: 460px;
				height: 309px;
				margin: 0 auto;
				display: block;
				${media.phone414`
					width: 64%;
					height: 160px;
				`}
				${media.phone320`
				 	width: 75%;
				`}
			}
			.slide-in {
				opacity:0;
			}
			.slide-in.active {
				opacity:1;
				transition: opacity .8s ease-in-out;
			}
		}
	}
	.subStep{
		background-image: url("../../static/lineBonusFaq/bg-faq.png");
		background-size: cover;
		padding:160px 0;

		${media.phone414`
			padding: 20vw 0;
	   `}

		.title{
			height: 65px;
			font-size: 58px;
			font-weight: 600;
			line-height: 1.12;
			text-align: center;
			color: #000000;

			${media.phone414`
				font-size: 30px;
				height: auto;
		   `}
		}
		.subTitle{
			height: 45px;
			font-size: 32px;
			font-weight: 300;
			text-align: center;
			color: #000000;
			margin-top: 10px;

			${media.phone414`
				font-size: 18px;
				height: auto;
		   `}

			span{
				color: #e50081;
			}
		}
		#mainImg{
			width: 444px;
 			height: 284px;
			display: block;
			margin: 40px auto 0;

			${media.phone414`
				width: 67%;
				height: 160px;
				margin: 20px auto 0;
		   `}

			${media.xphone`
				width: 67%;
				height: 160px;
				margin: 20px auto 0;
		   `}
		   ${media.phone360`
				width: 74%;
				height: 169px;
		  `}
		  ${media.phone320`
				width: 235px;
				height: 149px;
		 `}
		}
		.slide-in {
			opacity:0;
		}
		.slide-in.active {
			opacity:1;
			transition: opacity .8s ease-in-out;
		}
	}
	.faqArea{
		 margin: 40px 0;

		.title{
			height: 65px;
			font-size: 52px;
			font-weight: 600;
			line-height: 1.25;
			text-align: center;
			color: #000000;
			margin-bottom: 40px;

			${media.phone414`
				height: auto;
				font-size: 30px;
		   `}
		}
		.wrap{
			width: 768px;
			${media.phone414`
	            width: 100%;
	        `}

			.question{
				width: 700px;
				height: auto;
				border: solid 1px #f2f2f2;
				display: flex;
				margin: 0 auto;
				align-items:center;
				padding: 20px 0;

				${media.phone414`
				   width: 90%;
			   `}

				.icon{
					font-size: 36px;
					color: #e50081;
					margin: 0 42px;
					color: #e50081;

					${media.phone414`
						font-size: 22px;
						margin: 0 15px;
				   `}
				}

				.text{
					font-size: 40px;
					font-weight: 600;
					color: #000000;
					width: 455px;
					${media.phone414`
						font-size: 22px;
						width: 260px;
				   `}
				   ${media.xphone`
					   width: 240px;
				  `}
				   ${media.phone320`
					  width: 200px;
				  `}
				}
				.arrow{
					width: 37px;
					height: 16px;
					background-image: url("../../static/lineBonusFaq/arrow.png");
    				margin-left: 45px;

					${media.phone414`
						margin-left: 7px;
						width: 32px;
						height: 11px;
					`}

					${media.phone360`
						margin-left: -5px;
					`}
					${media.phone320`
						width: 35px;
						height: 9px;
						margin-left: 0px;
					`}
				}
			}

			.answerBox{
				display:none
			}

			.answerBox.active{
				width: 700px;
				height: auto;
				background-color: #fafafa;
				display: flex;
				padding: 30px 0;
				margin: 0 auto;
				${media.phone414`
				   width: 90%;
				   padding: 15px 0;
			   `}

				.icon{
					font-size: 36px;
					font-weight: 600;
					text-align: center;
					color: #c5c5c5;
					margin: 0 42px;

					${media.phone414`
						font-size: 22px;
						margin: 0 16px;
				   `}
				}
				.text{
					width: 540px;
					height: auto;
					font-size: 32px;
					font-weight: 300;
					text-align: justify;
					color: #000000;

					${media.phone414`
						font-size: 16px;
						margin-right: 20px;
				   `}

					span{
						font-weight: 500;
						color: #e50081;
					}
				}
			}
		}
	}
	.footer{
        width: 100%;
        height: 97px;
        background-color: #000000;
        font-size: 24px;
        color: #ffffff;
        margin-top: 80px;
        text-align: center;
        line-height: 97px;

		${media.phone554`
			font-size: 17px;
		    height: 85px;
		    line-height: 85px;
        `}

        ${media.phone414`
            font-size: 14px;
            margin-top: 50px;
            height: 70px;
            line-height: 70px;
        `}

        ${media.phone414`
            height: 60px;
            line-height: 60px;
        `}

        ${media.phone414`
            font-size: 12px;
        `}
    }
`


export const BonusListWrapper = styled.div`
	.searchBox{
		width: 90%;
		border-radius: 8px;
		background-color: #2b2b2b;
		margin: 0 auto;
		padding: 40px 40px;
    	box-sizing: border-box;

		${media.phone414`
			padding: 25px 25px;
		`}

		.titleWrap{
			display: flex;
			margin-bottom: 20px;

			${media.phone414`
				margin-bottom: 15px;
			`}

			.title{
				height: 46px;
				font-size: 36px;
				color: #ffffff;

				${media.phone414`
		            font-size: 22px;
					height: auto;
		        `}
			}
			img{
				width: 50px;
				height: 50px;

				${media.phone414`
					width: 30px;
					height: 30px;
		        `}
			}
		}
		.inputWrap{
			display:flex;
			flex-wrap: wrap;
			justify-content:space-between;
			position: relative;

			${media.phone414`
				width: 100%;
			`}

			.date{
				height: 102px;
				background-color: #3f3f3f;
				border: none;
				color: #9e9e9e;
				font-size: 40px;
    			width: 240px;
				text-align: center;

				${media.phone414`
					width: 110px;
					height: 55px;
					font-size: 20px;
				`}
				${media.xphone`
					width: 100px;
					font-size: 18px;
				`}
				${media.phone320`
					font-size: 20px;
					width: 80px;
					font-size: 16px;
				`}
			}

			.to{
				width: 35px;
				height: 48px;
				border-top: 2px solid #fff;
				margin-top: 55px;

				${media.phone414`
					height: 20px;
					margin-top: 30px;
					width: 25px;
				`}
				${media.xphone`
					width: 22px;
				`}
				${media.phone320`
					width: 20px;
				`}
			}
		}
		.submit{
			width: 100%;
			height: 102px;
			border-radius: 2px;
			background-color: #e7008c;
			color: #ffffff;
			font-size: 48px;
			text-align: center;
			line-height: 102px;
			margin-top: 30px;

			${media.phone414`
				height: 54px;
				font-size: 28px;
				line-height: 54px;
				margin-top: 20px;
			`}
			${media.xphone`
				font-size: 24px;
			`}
			${media.phone320`
				font-size: 20px;
			`}
		}
			color:#fff;
			font-weight:300;
			font-size:1rem;
		}
		
	}
`;


export const MenuWrapper = styled.div`
		width: 768px;
		background-color: #000000;
		top:${props=>props.hamburgerShow ?'78px':'-200px'};
		position:fixed;
		z-index:50;
		transition:.5s;

		${media.phone414`
			width: 100%;
			top:${props=>props.hamburgerShow ?'58px':'-200px'};
		`}


		.text{
			width: 70%;
			height: 100px;
			font-size: 36px;
			font-weight: 600;
			color: #ffffff;
			margin: 0 auto;
			line-height: 100px;
			text-align: center;

			${media.phone414`
				font-size: 24px;
				height: 80px;
				line-height: 80px;
			`}

		}

		.text:first-child{
			border-bottom: 3px solid white;
			${media.phone414`
				border-bottom: 3px solid white;
			`}

		}

`;

export const BonusWrapper = styled.div`
    background-color: #fff;
    max-width: 768px;
    margin: 0 auto;

    .search{
        width: 130px;
        height: 130px;
        background-image: url(${props=>props.search});
        background-size: cover;
        position: fixed;
        right: 25px;
        bottom: 25px;
        font-size: 28px;
        color: #ffffff;
        text-align: center;
        line-height: 180px;
		z-index: 10;

        ${media.phone414`
            width: 20vw;
            height: 20vw;
            font-size: 18px;
            line-height: 120px;
        `}

        ${media.xphone`
            font-size: 16px;
            line-height: 105px;
        `}

        ${media.phone320`
            font-size: 14px;
            line-height: 89px;
        `}
    }
    .header{
        width: 768px;
        height: 79px;
        background-color: #000000;
        padding-top: 17px;
        box-sizing: border-box;
		position: fixed;
		z-index: 100;

        ${media.phone414`
			width: 100%;
            height: 60px;
        `}
		${media.xphone`
            height: 62px;
        `}

        .logo{
            background-image: url("../../static/lineBonusFaq/logo.png");
            width: 300px;
            height: 49px;
            background-size: cover;
            margin-left: 30px;

            ${media.phone414`
                width: 190px;
                height: 30px;
                margin-left: 20px;
            `}
        }
    }
	.spaceBox{
		height: 80px;

		${media.phone414`
			height: 60px;
        `}
	}
    .banner{
        background-image: url(${props=>props.mainBg});
        width: 100%;
        height: auto;
        background-size: cover;
		position: relative;

        .img{
            height:796px;

			${media.phone554`
                height: 490px;
            `}

            ${media.phone414`
                height: 403px;
            `}

            ${media.xphone`
                height: 370px;
            `}

            ${media.phone320`
                height: 313px;
            `}
        }

		.startWrap{
			#start01{
				position: absolute;
				top: 60px;
				width: 30px;
				left: 330px;
				${media.phone414`
					width: 16px;
					left: 170px;
					top: 40px;
	            `}
				${media.xphone`
					left: 145px;
					top: 32px;
	            `}
				${media.phone320`
					width: 14px;
					left: 130px;
					top: 25px;
	            `}
			}
			#start02{
				position: absolute;
			    top: 280px;
			    width: 30px;
			    left: 80px;

				${media.phone414`
					width: 16px;
					left: 50px;
					top: 150px;
	            `}
				${media.xphone`
					left: 45px;
					top: 129px;
	            `}
				${media.phone320`
					left: 33px;
				    top: 109px;
				    width: 14px;
	            `}
			}
			#start03{
				position: absolute;
				top: 530px;
				width: 30px;
				left: 210px;

				${media.phone414`
					width: 16px;
					top: 290px;
					left: 120px;
	            `}
				${media.xphone`
					top: 265px;
					left: 100px;
	            `}
				${media.phone320`
					left: 85px;
				    width: 14px;
				    top: 227px;
	            `}
			}
			#start04{
				position: absolute;
				top: 250px;
				width: 30px;
				right: 70px;

				${media.phone414`
					top: 130px;
					width: 16px;
					right: 30px;
	            `}
				${media.phone320`
					top: 114px;
				    width: 14px;
				    right: 18px;
	            `}
			}

			.slide-in {
				opacity:0;
			}
			.slide-in.active {
				opacity:1;
				transition: opacity .8s ease-in-out;
			}
		}


		#actionImg01{
			position: absolute;
			top: 100px;
			width: 210px;
			left: 45px;

			${media.phone414`
				top: 60px;
				width: 100px;
				left: 36px;
            `}

			${media.xphone`
				left: 17px;
            `}

			${media.phone320`
				top: 45px;
				width: 85px;
			`}
		}
		#actionImg02{
			position: absolute;
			right: 0px;
			top: 30px;
			width: 147px;

			${media.phone414`
				width: 75px;
				top: 20px;
            `}

			${media.phone320`
				width: 60px;
				top: 25px;
			`}
		}
		#actionImg03{
			position: absolute;
			right: 60px;
			top: 434px;
			width: 210px;

			${media.phone414`
				right: 30px;
				top: 235px;
				width: 105px;
            `}

			${media.xphone`
				top: 212px;
				width: 95px;
            `}
			${media.phone320`
				top: 182px;
				width: 85px;
				right: 25px;
			`}
		}

		.slide-in {
			opacity:0;
			transition:all .5s;
		}
		.align-right {
			float:right;
			margin-left:20px;
	    }
		.align-left {
			float:left;
			margin-right:20px;
		}

		.align-left.slide-in {
			transform:translateX(-30%) scale(0.95);
		}
		.align-right.slide-in {
	      	transform:translateX(30%) scale(0.95);
	    }
		.slide-in.active {
			opacity:1;
			transform:translateX(0%) scale(1);
		}

        .contentWrap{
            color: #ffffff;
            width: 100%;

            .title{
                background: url(${props=>props.bgTitleWhite}) no-repeat  50% 95%;
                width: 100%;
                height: 180px;
                background-size: 17%;
                font-size: 26px;
                font-weight: 500;
                line-height: 288px;
                text-align: center;
                color: black;

				${media.phone554`
	                font-size: 20px;
					line-height: 302px;
	            `}

                ${media.phone414`
                    background-size: 22%;
                    height: 100px;
                    font-size: 16px;
                    line-height: 153px;
                `}
                ${media.xphone`
                    line-height: 156px;
                `}

				${media.phone360`
					height: 75px;
					line-height: 110px;
                `}

                ${media.phone320`
                    height: 68px;
                    line-height: 102px;
                    font-size: 14px;
                `}
            }
            .text{
                font-size: 40px;
                font-weight: 600;
                text-align: center;
                padding: 15px 0 5px;
                ${media.phone414`
                    font-size: 28px;
                    padding: 7px 0 0;
                `}
            }
            .subText{
                font-size: 58px;
                font-weight: 600;
                text-align: center;
                ${media.phone414`
                    font-size: 38px;
                `}
				${media.phone320`
					font-size: 32px;
                `}
            }
            #imgTicket{
				width: 368px;
				height: 180px;
				background-size: 50%;
				margin: 25px auto 70px;
				display: block;
				${media.phone554`
                    margin: 10px auto 20px;
                `}
                ${media.phone414`
					margin: 8px auto 20px;
					width: 254px;
					height: auto;
                `}
                ${media.xphone`
                	width: 235px;
					margin: 4px auto 15px;
                `}
                ${media.phone320`
					width: 202px;
                `}
            }
			.slide-in {
				opacity:0;
			}
			.slide-in.active {
				opacity:1;
				transition: opacity .8s ease-in-out;
			}
            .mainContent{
                height: 165px;
                border-top: 2px solid #fff;
                width: 78%;
                margin: 0 auto;
                font-size: 40px;
                font-weight: 600;
                text-align: center;
                padding-top: 30px;
                padding-bottom: 30px;
                border-bottom: 2px solid #fff;

				${media.phone554`
                    font-size: 29px;
					height: 120px;
                `}

                ${media.phone414`
                    font-size: 21px;
                    height: 88px;
                    padding-top: 22px;
                    padding-bottom: 22px;
                `}
                ${media.xphone`
                    font-size: 18px;
                    padding-top: 12px;
                    padding-bottom: 12px;
                    height: 78px;
                `}
                ${media.phone320`
                    font-size: 16px;
                    height: 66px;
                `}

                .pink{
                    color: #ff0090;
                }
            }
            .subContent{
                font-size: 26px;
                font-weight: 600;
                width: 78%;
                margin: 0 auto;
				${media.phone554`
                    font-size: 19px;
                `}

                ${media.phone414`
                    font-size: 13px;
					height: 158px;
                `}
                ${media.xphone`
                    width: 86%;
                `}
                ${media.phone320`
                    width: 92%;
                    font-size: 12px;
					height: 145px;
                `}
            }
        }
        .stepText{
            height: 100%;
            text-align: center;

            .stepbyStep{
                height: 1700px;

				${media.phone554`
    				height: 170vh;
				`}
                ${media.phone414`
                    height: 850px;
                `}
                ${media.xphone`
                    height: 768px;
                `}
				${media.phone360`
                    height: 725px;
                `}
                ${media.phone320`
                    height: 640px;
                `}
            }

            .mainText{
                font-size: 40px;
                font-weight: 600;
                text-align: center;
                color: #000000;
				${media.phone554`
                    font-size: 34px;
                `}
                ${media.phone414`
                    font-size: 22px;
					height: 26px;
                `}
                ${media.phone320`
                    font-size: 19px;
					height: 22px;
                `}
            }
            .subText{
                font-size: 32px;
                font-weight: 600;
                text-align: center;
                color: #575757;
				${media.phone554`
                    font-size: 26px;
                `}
                ${media.phone414`
                    font-size: 20px;
					height: 23px;
                `}
                ${media.phone320`
                    font-size: 18px;
					height: 21px;
                `}
            }
        }
    }
    .bonusArea{
		margin-top: 85px;

        ${media.phone320`
            margin-top: 45px;
        `}

        .top{
            background: url(${props=>props.bgMiddle}) no-repeat;
            width: 100%;
            height: 400px;
            background-size: cover;
            text-align: center;
            padding-top: 350px;

            ${media.phone414`
                height: 210px;
				padding-top: 200px;
            `}
            ${media.xphone`
                height: 220px;
                padding-top: 180px;
            `}
			${media.phone320`
                padding-top: 165px;
				height: 180px;
            `}

            .main{
                font-size: 40px;
                text-align: center;
                color: #000000;
                font-weight: bold;

                ${media.phone414`
                    font-size: 22px;
                `}
                ${media.phone320`
                    font-size: 18px;
                `}
            }
            .num{
                font-size: 160px;
                text-align: center;
                color: #e50081;
                font-weight: 700;

				${media.phone554`
                    font-size: 125px;
                `}

                ${media.phone414`
                    font-size: 90px;
                `}

                ${media.phone320`
                    font-size: 75px;
                `}

            }
            .point{
                font-size: 40px;
                text-align: center;
                color: #000000;
                font-weight: bold;

                ${media.phone414`
                    font-size: 22px;
                `}
                ${media.phone320`
                    font-size: 18px;
                `}
            }
        }
		.miniFilmWraper{
			#miniFilm01{
				position: absolute;
				top: 4100px;
				left: 330px;
				width: 90px;

				${media.phone414`
					top: 2280px;
				    left: 170px;
				    width: 40px;
                `}
				${media.xphone`
					top: 2100px;
                `}
				${media.phone320`
					top: 1755px;
				    width: 35px;
				    left: 136px;
                `}
			}
			#miniFilm02{
				position: absolute;
				top: 4200px;
				left: 50px;
				width: 90px;
				${media.phone414`
					top: 2321px;
					left: 31px;
					width: 40px;
                `}
				${media.xphone`
					top: 2150px;
                `}
				${media.phone320`
					top: 1810px;
				    width: 35px;
                `}
			}
			#miniFilm03{
				position: absolute;
				top: 4450px;
				width: 80px;
				right: 50px;
				${media.phone414`
					top: 2465px;
					width: 35px;
					right: 30px;
                `}
				${media.xphone`
					top: 2290px;
                `}
				${media.phone320`
					top: 1940px;
				    width: 30px;
                `}
			}

			.slide-in {
				opacity:0;
				transition:all .5s;
			}
			.bb-right {
				float:right;
				margin-left:20px;
		    }
			.bb-left {
				float:left;
				margin-right:20px;
			}

			.bb-left.slide-in {
				transform:translateX(-30%) scale(0.95);
			}
			.bb-right.slide-in {
		      	transform:translateX(30%) scale(0.95);
		    }
			.slide-in.active {
				opacity:1;
				transform:translateX(0%) scale(1);
			}
		}


        .content{
            background-color: #f2f2f2;
            width: 100%;
			height: 100%;

			.respondText{
				text-align: center;
				width: 80%;
				margin: 30px auto;
				height: auto;
			}
			.resultWrap{
				width: 90%;
				margin: 10px auto 10px;
				overflow:hidden;
			}
			.scroll{
				margin: 0 auto 10px;
				width: 40px;
				height: 40px;
				line-height: 40px;
				text-align: center;
			}
        }
    }
    .importantNote{
        margin-top: 75px;

        ${media.phone320`
            font-size: 70px;
        `}

        .text{
            font-size: 58px;
            font-weight: 600;
            line-height: 1.12;
            text-align: center;
            color: #000000;

            ${media.phone414`
                font-size: 38px;
            `}
            ${media.phone320`
                font-size: 28px;
            `}
        }
        .list{
            width: 80%;
            margin: 50px auto 0;
			padding-left: 30px;

            ${media.phone414`
                margin: 30px auto 0;
				padding-left: 20px;
            `}

            li{
                font-size: 26px;
                font-weight: 300;
                text-align: justify;
                color: #000000;
                padding-bottom: 10px;

                ${media.phone414`
                    font-size: 16px;
                `}
                ${media.phone320`
                    font-size: 14px;
                `}
            }
        }
    }
    .footer{
        width: 100%;
        height: 97px;
        background-color: #000000;
        font-size: 24px;
        color: #ffffff;
        margin-top: 80px;
        text-align: center;
        line-height: 97px;

		${media.phone554`
			font-size: 17px;
		    height: 85px;
		    line-height: 85px;
        `}

        ${media.phone414`
            font-size: 14px;
            margin-top: 50px;
            height: 70px;
            line-height: 70px;
        `}

        ${media.phone414`
            height: 60px;
            line-height: 60px;
        `}

        ${media.phone414`
            font-size: 12px;
        `}
    }
`;

//HamburgerBtn
export const HamburgerBtn = styled.div`
	display:none;
	position:fixed;
	cursor:pointer;
	top:10px;
	right:1%;
	width:36px;
	height:36px;
	z-index:200;
	display:none;

	 
	${media.phone`
		display:block;
		top: ${props=>props.lineToday ?'22px':'7px'};
		right: ${props=>props.lineToday ?'10px':'1%'};
	`};
	${media.phone414`
		top: ${props=>props.lineToday ?'12px':'7px'};
		right:1%;`
	};
	${media.xphone`
		top: ${props=>props.lineToday ?'12px':'10px'};
		right:1%;`
	};

	.hamburger{
		font-size: 25px;
  		display: inline-block;
		width: 0.9em;
		height: .07em;
		padding: 0;
		cursor: pointer;
		transition: transform .3s ease-in-out;
		vertical-align: middle;
		background: transparent;

		${media.xphone`height:1px;`};

		&:before,&:after{
			content:" ";
		}

		&:before,.icon,&:after {
			display: block;
			width: 0.9em;
			height: .06em;
			margin: 0 0 .3em;
			transition: transform .3s ease-in-out;
			background: #fff;

			${media.xphone`height:1px;`};
		}

	}
	.active{
		&:before,.icon,&:after {
			background: #fff;
		}
	}
	.hamburger.hamburger-plus.active{
		.icon{
		  	transform: scale(0);
		}
		&:before{
			transform: translateY(.35em) rotate(135deg);
			${media.xphone`transform: translateY(.3em) rotate(135deg);`};
		}
		&:after{
			transform: translateY(-.37em) rotate(45deg);
			${media.xphone`height:1px;`};
		}

	}
`;
