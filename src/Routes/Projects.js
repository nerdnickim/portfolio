import React, { useEffect } from "react";
import styled from "styled-components";
import { Switch, Route, withRouter } from "react-router-dom";
import First from "./Projects/WorkFirst";
import InstaWebClone from "./Projects/WorkSecond";
import InstaAppClone from "./Projects/WorkThird";
import ThumbnNail from "../Components/Thumbnail";
import { photos } from "../dataContain";

const Wrapper = styled.div`
	width: 90%;
	height: 80%;
	border-radius: 20px;
	background-color: #f2eded;
	box-shadow: grey 0px 0px 20px 11px;
	z-index: 11;
`;

const Contain = styled.div`
	display: grid;
	grid-template-columns: repeat(3, minmax(100px, auto));
	column-gap: 20px;
	height: 100%;
	align-items: center;
	padding: 0 30px;
`;

const Projects = withRouter(({ location }) => {
	const arrow = document.getElementsByClassName("arrow");
	useEffect(() => {
		if (location.pathname === "/") {
			arrow[0].style.display = "flex";
		} else {
			arrow[0].style.display = "none";
		}
	});
	return (
		<Wrapper>
			<Contain>
				<ThumbnNail url={"/newWave"} name={"new wave"} thumb={photos.newWave[2].src} />
				<ThumbnNail
					url={"/webClone"}
					name={"instaWeb clone"}
					thumb={photos.instaWeb[4].src}
				/>
				<ThumbnNail
					url={"/appClone"}
					name={"instaApp clone"}
					thumb={photos.newWave[2].src}
				/>
			</Contain>
			<Switch>
				<Route path="/newWave" component={First} />
				<Route path="/webClone" component={InstaWebClone} />
				<Route path="/appClone" component={InstaAppClone} />
			</Switch>
		</Wrapper>
	);
});

export default Projects;
