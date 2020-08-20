import React, { useEffect, useRef } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
	width: 90%;
	height: 86%;
	background-color: #f2eded;
	box-shadow: grey 0px 0px 20px 11px;
	display: flex;
	align-items: center;
	justify-content: center;
	border-radius: 20px;
`;

const Contain = styled.div`
	position: relative;
	width: 90%;
	height: 80%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	letter-spacing: 2px;
	font-size: 16px;
`;

const FirstLine = styled.div`
	display: flex;
	opacity: 0;
	margin-bottom: 20px;
	align-items: center;
	transition: all 1s linear;
`;

const SecondLine = styled.div`
	display: flex;
	opacity: 0;
	transition: all 1s linear;
`;

const H1 = styled.h1`
	font-size: revert;
	font-weight: bolder;
	letter-spacing: 5px;
`;

const Span = styled.span``;

const Main = () => {
	const first = useRef(null);
	const second = useRef(null);

	const fontShowHandle = () => {
		first.current.style.opacity = "1";
		setTimeout(() => {
			second.current.style.opacity = "1";
		}, 1200);
	};

	useEffect(() => fontShowHandle());
	return (
		<Wrapper>
			<Contain>
				<FirstLine ref={first}>
					<H1>김의교</H1>
					<Span>의 포트폴리오</Span>
				</FirstLine>
				<SecondLine ref={second}>
					<Span>화살표를 클릭 해주세요</Span>
				</SecondLine>
			</Contain>
		</Wrapper>
	);
};

export default Main;
