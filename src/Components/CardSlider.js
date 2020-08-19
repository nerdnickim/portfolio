import React, { useRef } from "react";
import styled from "styled-components";
import Main from "../Routes/Main";
import Profile from "../Routes/Profile";
import Projects from "../Routes/Projects";

import SlideArrow from "./SlideArrow";

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
	z-index: 10;
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

const Slide = () => {
	const ref = useRef(null);

	return (
		<SlideContain>
			<SlideWrapper ref={ref}>
				<SlidePage>
					<Main />
				</SlidePage>
				<SlidePage>
					<Profile />
				</SlidePage>
				<SlidePage>
					<Projects />
				</SlidePage>
			</SlideWrapper>
			<ArrowContain className="arrow">
				<SlideArrow refs={ref} />
			</ArrowContain>
		</SlideContain>
	);
};

export default Slide;
