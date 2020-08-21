import React from "react";
import styled, { css } from "styled-components";
import { Github, Insta } from "../Components/Icons";
import Image from "../Components/Image";
import profilePhoto from "../photo/profilePhoto.jpg";
import backImage from "../photo/BackImage.jpeg";

const Wrapper = styled.div`
	width: 90%;
	height: 86%;
	display: flex;
	flex-direction: column;
	border-radius: 20px;
	background-color: #f2eded;
	box-shadow: grey 0px 0px 20px 11px;
`;

const Contain = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	padding: 0 30px;
	margin: 10px 20px;
`;

const Name = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
`;

const Span = styled.span`
	font-size: inherit;
`;

const Info = styled.div`
	height: 0;
	border: 1px solid black;
	border-radius: 10px;
	transition: height 0.4s;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	font-size: 18px;

	${Span} {
		line-height: 1.4;
		opacity: 0;
		text-align: center;
		&:first-child {
			margin-bottom: 10px;
		}
	}
`;

const Header = styled.header`
	padding: 10px 15px;
	letter-spacing: 0.2em;
`;

const LeftColumn = styled.div`
	position: relative;
	display: flex;
	flex-direction: column;
	width: 50%;
	justify-content: space-between;
`;

const H1 = styled.h1`
	font-size: 1.7em;
`;

const RightColumn = styled.div`
	position: relative;
	display: flex;
	flex-direction: column;
	width: 100%;
	align-items: center;
	${H1} {
		font-size: 2.4rem;
		font-weight: bolder;
	}
`;

const ContainHeader = styled.div`
	display: flex;
	flex-direction: column;
	padding: 20px 0;
	&:hover {
		${Name} {
			color: blue;
		}
		${Info} {
			height: 200px;
		}

		${Span} {
			opacity: 1;
			transition: opacity 0.3s 0.2s;
		}
	}
`;

const ContainBottom = styled.div`
	padding: 20px 0;
	margin-bottom: 40px;
`;

const IconsContain = styled.div`
	margin-bottom: 30px;
	display: flex;
	${Span} {
		opacity: 0;
		transition: opacity 0.4s linear;
		transform: skew(14deg, 1deg);
	}
`;

const GitHubContain = styled.div`
	display: flex;
	flex-direction: column;
	&:hover {
		${Span} {
			opacity: 1;
		}
		svg {
			fill: blue;
		}
	}
`;

const InstaContain = styled.div`
	display: flex;
	flex-direction: column;
	&:hover {
		${Span} {
			opacity: 1;
		}
		svg {
			fill: blue;
		}
	}
`;

const Tel = styled.span``;

const A = styled.a``;

const ClipContain = styled.div`
	width:35%;
	display: flex;
	flex-direction: column;
	margin-top:40px;
	&:hover {
		transform: rotateY(180deg);
	}
	transform-style: preserve-3d;
	transition: z-index 0.75s, transform 0.75s;
	z-index: 0
	perspective: 1000px

	&.flip {
		z-index:1;
	}
`;

const CardSlide = css`
	width: 100%;
	min-width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	backface-visibility: hidden;
`;

const ClipInner = styled.div`
	position: relative;
`;

const ClipFront = styled.div`
	${CardSlide}
	z-index:0;
`;

const ClipBack = styled.div`
	${CardSlide}
	position:absolute;
	top: 0;
	left: 0;
	transform: rotateY(-180deg);
	transition: all 0.75s linear;
	z-index: 1;
`;

const Profile = () => {
	return (
		<Wrapper>
			<Header>
				<H1>Profile</H1>
			</Header>
			<Contain>
				<LeftColumn>
					<ContainHeader>
						<Name>
							<Span>NAME: </Span>
							<H1>김의교</H1>
						</Name>
						<Info>
							<Span>친구를 도와주기 위해 시작하다가 흥미를 갖게 되었습니다</Span>
							<Span>
								긍정적이고 지속적으로 발전하는 사람이 되고자 끊임 없이 노력하는 개발자
							</Span>
						</Info>
					</ContainHeader>
					<ContainBottom>
						<IconsContain>
							<GitHubContain>
								<Span>GitHub</Span>
								<A href="https://github.com/nerdnickim" target="_blank">
									<Github size={36} />
								</A>
							</GitHubContain>
							<InstaContain>
								<Span>Insta</Span>
								<A href="https://www.instagram.com/nerd__nick/" target="_blank">
									<Insta size={36} />
								</A>
							</InstaContain>
						</IconsContain>
						<Span>Tel:</Span>
						<Tel>010-8709-1352</Tel>
					</ContainBottom>
				</LeftColumn>
				<RightColumn>
					<ContainHeader>
						<H1>개발자 Developer</H1>
					</ContainHeader>
					<ClipContain>
						<ClipInner>
							<ClipFront>
								<Image src={profilePhoto} />
							</ClipFront>
							<ClipBack>
								<Image src={backImage} />
							</ClipBack>
						</ClipInner>
					</ClipContain>
				</RightColumn>
			</Contain>
		</Wrapper>
	);
};

export default Profile;
