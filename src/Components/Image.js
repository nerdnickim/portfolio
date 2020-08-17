import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Wrapper = styled.div``;

const Img = styled.img`
	width: 100%;
	height: 100%;
`;

const Image = ({ src }) => (
	<Wrapper>
		<Img src={src} />
	</Wrapper>
);

Image.propTypes = {
	src: PropTypes.string.isRequired,
};

export default Image;
