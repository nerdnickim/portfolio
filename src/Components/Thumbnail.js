import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Name = styled.h1`
	color: #716d6d;
	font-size: 1.8rem;
	letter-spacing: 2px;
	padding: 8px 0;
	transition: color 0.3s ease-out, transform 0.3s ease-out;
`;

const Links = styled(Link)`
	&:before {
		content: "";
		position: absolute;
		top: 0;
		left: 0;
		background: linear-gradient(0deg, #0000001f, transparent);
		background-size: cover;
		width: 100%;
		height: 100%;
		transition: all 0.8s;
	}

	position: relative;
	width: 100%;
	height: 100%;
	&:hover {
		box-shadow: 7px 8px black;

		${Name} {
			color: #365ce8;
			transform: scale(1.2);
		}
	}
	transition: box-shadow 0.5s;
`;

const Div = styled.div`
	padding: 10px 10px;
	border: 1px solid;
	background-image: url(${(props) => props.thumb});
	background-size: cover;
	background-position: center center;
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: flex-end;
`;

const ThumbnNail = ({ url, name, thumb }) => (
	<Links to={url}>
		<Div thumb={thumb}>
			<Name>{name}</Name>
		</Div>
	</Links>
);

export default ThumbnNail;

ThumbnNail.propTypes = {
	url: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	thumb: PropTypes.string.isRequired,
};
