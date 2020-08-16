import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
	width: 90%;
	height: 80%;
	background-color: #f2eded;
	box-shadow: grey 0px 0px 20px 11px;
`;

const Main = () => {
	return (
		<Wrapper>
			<span>Main</span>
		</Wrapper>
	);
};

export default Main;
