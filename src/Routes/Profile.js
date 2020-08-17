import React from "react";
import styled, { css } from "styled-components";
import { Github, Insta } from "../Components/Icons";
import Image from "../Components/Image";
import profilePhoto from "../photo/profilePhoto.jpg";

const Wrapper = styled.div`
	width: 90%;
	height: 80%;
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

const Info = styled.div`
	width: 300px;
	height: 0;
	background-color: blue;
	transition: height 0.4s;
`;

const Header = styled.header`
	padding: 10px 15px;
`;

const LeftColumn = styled.div`
	position: relative;
	display: flex;
	flex-direction: column;
	width: 50%;
	justify-content: space-between;
`;

const H1 = styled.h1`
	font-size: 2em;
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

const Span = styled.span``;

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
						<Info>dadfadf</Info>
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
						<H1>Front-end</H1>
					</ContainHeader>
					<ClipContain>
						<ClipInner>
							<ClipFront>
								<Image src={profilePhoto} />
							</ClipFront>
							<ClipBack>
								<Image
									src={
										"https://instagram.frec8-1.fna.fbcdn.net/v/t51.2885-19/44884218_345707102882519_2446069589734326272_n.jpg?_nc_ht=instagram.frec8-1.fna.fbcdn.net&_nc_ohc=d3zLaxzyOPwAX-e2feP&oh=c914c496e6245a8544d04fe967666a2f&oe=5F62C68F&ig_cache_key=YW5vbnltb3VzX3Byb2ZpbGVfcGlj.2"
									}
								/>
							</ClipBack>
						</ClipInner>
					</ClipContain>
				</RightColumn>
			</Contain>
		</Wrapper>
	);
};

export default Profile;
