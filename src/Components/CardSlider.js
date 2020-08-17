import React, { useState, useRef } from "react";
import styled from "styled-components";
import Main from "../Routes/Main";
import Profile from "../Routes/Profile";
import { Arrow } from "./Icons";
import Contact from "../Routes/Contact";
import { HashRouter as Router } from "react-router-dom";

const SlideContain = styled.div`
	width: 100vw;
	height: 100vh;
	overflow: hidden;
`;

const SlideWrapper = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	transition: all 0.3s linear;
	position: relative;
`;

const SlidePage = styled.div`
	display: flex;
	min-width: 100%;
	height: 100%;
	justify-content: center;
	align-items: center;
`;

const ArrowContain = styled.div`
	position: absolute;
	top: 45%;
	display: flex;
	width: 100%;
	justify-content: space-between;
	padding: 0 10px;
`;

const ArrowRight = styled.button`
	opacity: ${(props) => (props.state === props?.stateS?.childElementCount - 1 ? 0.3 : 1)};
`;

const ArrowLeft = styled.button`
	transform: rotate(180deg);
	opacity: ${(props) => (props.state === 0 ? 0.3 : 1)};
`;

const Slide = () => {
	const [state, setState] = useState(0);
	const ref = useRef(null);

	const leftHandle = (e) => {
		e.persist();
		e.preventDefault();
		if (state === 0) {
			return;
		} else {
			setState((prev) => prev - 1);
			ref.current.style.transform = `translateX(-${state - 1}00%)`;
		}
	};

	const rightHandle = (e) => {
		e.persist();
		e.preventDefault();
		if (state < ref.current.childElementCount - 1) {
			setState((prev) => prev + 1);
			ref.current.style.transform = `translateX(-${state + 1}00%)`;
		} else if (state < 0) {
			setState(0);
		}
	};

	return (
		<Router>
			<SlideContain>
				<SlideWrapper ref={ref}>
					<SlidePage>
						<Main />
					</SlidePage>
					<SlidePage>
						<Profile />
					</SlidePage>
					<SlidePage>
						<Contact />
					</SlidePage>
				</SlideWrapper>
				<ArrowContain>
					<ArrowLeft state={state} onClick={leftHandle}>
						<Arrow />
					</ArrowLeft>
					<ArrowRight state={state} stateS={ref?.current} onClick={rightHandle}>
						<Arrow />
					</ArrowRight>
				</ArrowContain>
			</SlideContain>
		</Router>
	);
};

export default Slide;
