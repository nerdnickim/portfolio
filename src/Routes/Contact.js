import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
	width: 90%;
	height: 80%;
	border-radius: 20px;
	background-color: #f2eded;
	box-shadow: grey 0px 0px 20px 11px;
`;

const Contact = () => {
	return (
		<Wrapper>
			<span>Contact</span>
		</Wrapper>
	);
};

export default Contact;
