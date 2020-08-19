import React, { useState, useEffect } from "react";
import styled from "styled-components";
import ExitComponent from "../../Components/ExitComponent";
import { photos } from "../../PhotosContain";
import Image from "../../Components/Image";
import FatText from "../../Components/FatText";
import { Arrow } from "../../Components/Icons";

const Wrapper = styled.div`
	width: 100%;
	height: 100%;
	position: absolute;
	top: 0;
	left: 200%;
	background-color: ${(props) => props.theme.projectBg};
	z-index: 20;
	display: flex;
	align-items: center;
	justify-content: center;
`;

const ExitContain = styled.div`
	position: absolute;
	top: 20px;
	right: 10px;
`;

const Contain = styled.div`
	width: 90%;
	height: 80%;
	display: flex;
	flex-direction: column;
`;

//In Contain

const Header = styled.header`
	padding: 16px 0;
	position: relative;
`;

const Body = styled.div`
	width: 100%;
	display: flex;
	flex-direction: row;
	margin-bottom: 10px;
`;

const Info = styled.div`
	color: white;
`;

//In Body

const MainView = styled.div`
	width: 60%;
`;

const SkillInfo = styled.div`
	width: 40%;
	display: flex;
	flex-direction: column;
	align-items: center;
`;

// In Header

const ListContain = styled.div`
	position: relative;
	width: 100%;
	display: flex;
	flex-direction: row;
`;

const Ul = styled.ul`
	display: flex;
	overflow: scroll;
	width: 88%;
	border: 1px solid #e4e0e0;
	padding: 10px 4px;
	border-radius: 10px;
`;

const Li = styled.li`
	max-width: 200px;
	max-height: 120px;
	margin: 6px 10px;
	cursor: pointer;
	opacity: ${(props) => (props.foc === true ? 0.3 : 1)};
	box-shadow: ${(props) => (props.foc === true ? `7px 8px black` : "")};
	&:hover {
		box-shadow: 7px 8px black;
	}
	transition: box-shadow 0.3s;
`;

const ArrowContain = styled.div`
	display: flex;
`;

const Left = styled.button`
	transform: rotate(180deg);
	display: flex;
	justify-content: center;
	align-items: center;
	opacity: ${(props) => (props.state === 1 ? 0.3 : 1)};
`;

const Right = styled.button`
	display: flex;
	justify-content: center;
	align-items: center;
	opacity: ${(props) => (props.state === true ? 0.3 : 1)};
`;

// In MainView
const MainImage = styled.div``;

// In SkillView

const Skills = styled.div`
	display: flex;
`;

//Public

const H1 = styled.h1`
	color: #4865ee;
	font-size: 2rem;
	margin: 10px 20px;
`;

const Button = styled.button`
	width: 100%;
`;

const Span = styled.span`
	font-size: 18px;
`;

const First = () => {
	const [state, setState] = useState({ uri: "", id: 0 });

	const viewHandle = (e, { id }) => {
		e.persist();
		e.preventDefault();

		if (e.target.src === undefined) {
			return;
		} else {
			setState((prev) => ({ ...prev, uri: e.target.src, id }));
			console.log(e.target.src);
		}
	};

	const rightHandle = (e) => {
		e.persist();
		e.preventDefault();
		const liTarget = e?.target?.offsetParent?.childNodes[0];

		if (liTarget.children.length > state.id) {
			setState((prev) => ({ ...prev, id: state.id + 1 }));

			liTarget.childNodes.forEach((i) =>
				i.id === JSON.stringify(state.id + 1)
					? setState((prev) => ({ ...prev, uri: i.children[0].lastChild.lastChild.src }))
					: null
			);
		}
	};

	const leftHandle = (e) => {
		e.persist();
		e.preventDefault();

		const liTarget = e?.target?.offsetParent?.childNodes[0];

		if (state.id === 1) {
			return;
		} else {
			setState((prev) => ({ ...prev, id: state.id - 1 }));

			liTarget.childNodes.forEach((i) =>
				i.id === JSON.stringify(state.id - 1)
					? setState((prev) => ({ ...prev, uri: i.children[0].lastChild.lastChild.src }))
					: null
			);
		}
	};

	useEffect(() => {
		setState((prev) => ({
			...prev,
			uri: photos.newWave[0].src,
			id: photos.newWave[0].id,
		}));
	}, []);

	return (
		<Wrapper>
			<ExitContain>
				<ExitComponent />
			</ExitContain>
			<Contain>
				<Header>
					<ListContain>
						<Ul>
							{photos.newWave.map((u) => (
								<Li key={u.name} id={u.id} foc={u.id === state.id ? true : false}>
									<Button onClick={(e) => viewHandle(e, { id: u.id })}>
										<Image src={u.src} />
									</Button>
								</Li>
							))}
						</Ul>
						<ArrowContain>
							<Left onClick={leftHandle} state={state.id}>
								<Arrow size={24} />
							</Left>
							<Right
								onClick={rightHandle}
								state={state.id === photos.newWave.length ? true : false}
							>
								<Arrow size={24} />
							</Right>
						</ArrowContain>
					</ListContain>
				</Header>
				<Body>
					<MainView>
						<MainImage>
							<Image src={state.uri} />
						</MainImage>
					</MainView>
					<SkillInfo>
						<H1>Skills</H1>
						<Skills>
							<FatText text="Javascript" />
							<FatText text="jQuery" />
						</Skills>
					</SkillInfo>
				</Body>
				<Info>
					<Span>adfadfasf</Span>
				</Info>
			</Contain>
		</Wrapper>
	);
};

export default First;
