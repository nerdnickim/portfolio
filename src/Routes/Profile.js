import React from "react";
import styled, { css } from "styled-components";
import { Github, Insta } from "../Components/Icons";
import Image from "../Components/Image";
import profilePhoto from "../photo/profilePhoto.jpg";
import { useState } from "react";

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
`;

const Header = styled.header`
	padding: 10px 15px;
`;

const RightColumn = styled.div`
	position: relative;
	display: flex;
	flex-direction: column;
	width: 50%;
`;

const LeftColumn = styled.div`
	position: relative;
	display: flex;
	flex-direction: column;
`;

const ContainHeader = styled.div`
	display: flex;
	align-items: center;
`;

const H1 = styled.h1``;

const IconsContain = styled.div``;

const Tel = styled.span``;

const A = styled.a``;

const Span = styled.span``;

const ClipContain = styled.div`

	display: flex;
	flex-direction: column;
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
	const [state, seState] = useState(false);
	return (
		<Wrapper>
			<Header>
				<Span>Profile</Span>
			</Header>
			<Contain>
				<RightColumn>
					<ContainHeader>
						<H1>NAME: </H1>
						<Span>김의교</Span>
					</ContainHeader>
					<IconsContain>
						<A href="https://github.com/nerdnickim" target="_blank">
							<Github size={36} />
						</A>
						<A href="https://www.instagram.com/nerd__nick/" target="_blank">
							<Insta size={36} />
						</A>
					</IconsContain>
					<Tel>010-8709-1352</Tel>
				</RightColumn>
				<LeftColumn>
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
				</LeftColumn>
			</Contain>
		</Wrapper>
	);
};

export default Profile;
