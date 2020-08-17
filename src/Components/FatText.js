import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Wrapper = styled.div``;

const Span = styled.span``;

const FatText = ({ text }) => (
	<Wrapper>
		<Span>{text}</Span>
	</Wrapper>
);

FatText.propTypes = {
	text: PropTypes.string.isRequired,
};

export default FatText;
