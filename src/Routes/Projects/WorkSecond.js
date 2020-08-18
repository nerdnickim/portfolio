import React from "react";
import styled from "styled-components";
import ExitComponent from "../../Components/ExitComponent";

const Wrapper = styled.div`
	width: 100%;
	height: 100%;
	position: absolute;
	top: 0;
	left: 200%;
	background-color: rgba(0, 0, 0, 0.5);
	z-index: 20;
`;

const ExitContain = styled.div`
	position: absolute;
	top: 20px;
	right: 10px;
`;

const Contain = styled.div``;

const InstaWebClone = () => {
	return (
		<Wrapper>
			<ExitContain>
				<ExitComponent />
			</ExitContain>
			<Contain>
				<span>InstaWebClone</span>
			</Contain>
		</Wrapper>
	);
};

export default InstaWebClone;
