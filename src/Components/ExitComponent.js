import React from "react";
import styled, { keyframes } from "styled-components";
import { Exit } from "./Icons";
import { withRouter } from "react-router-dom";

const keyframs = keyframes`
 0%{
	transform: rotate(-1.8deg);
 }

 100%{
	transform: rotate(1.8deg);
 }
`;

const ExitContain = styled.div`
	cursor: pointer;
	fill: white;
	&:hover {
		fill: blue;
		animation: 0.1s ${keyframs} infinite;
	}
	transition: fill 0.3s ease;
	display: flex;
	align-items: center;
	justify-content: center;
`;

const ExitComponent = withRouter(({ history }) => {
	const backHandle = () => {
		history.goBack("/");
	};

	return (
		<ExitContain onClick={backHandle}>
			<Exit size={48} />
		</ExitContain>
	);
});

export default ExitComponent;
