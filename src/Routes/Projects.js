import React, { useEffect } from "react";
import styled from "styled-components";
import { Switch, Route, withRouter } from "react-router-dom";
import First from "./Projects/WorkFirst";
import InstaWebClone from "./Projects/WorkSecond";
import InstaAppClone from "./Projects/WorkThird";
import ThumbnNail from "../Components/Thumbnail";
import { photos } from "../dataContain";

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	width: 90%;
	height: 86%;
	border-radius: 20px;
	background-color: #f2eded;
	box-shadow: grey 0px 0px 20px 11px;
	z-index: 11;
`;

const Header = styled.header`
	padding: 10px 15px;
`;

const H1 = styled.h1`
	font-size: 2em;
`;

const Contain = styled.div`
	display: grid;
	grid-template-columns: 2fr 1fr;
	column-gap: 20px;
	height: 100%;
	justify-items: center;
	padding: 0 30px;
`;

const WebContain = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	width: 80%;
	height: 100%;
	overflow-y: scroll;
	padding: 0 30px;
`;

const Web = styled.div`
	width: 100%;
	height: 100%;
	margin: 10px 0;
	display: flex;
`;

const AppContain = styled.div`
	display: flex;
	flex-direction: row;
	width: 100%;
	overflow-x: scroll;
	padding: 0 30px;
	margin-right: 50px;
`;

const App = styled.div`
	width: 100%;
	height: 100%;
	padding: 10px 0;
	display: flex;
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
			<Header>
				<H1>Projects</H1>
			</Header>
			<Contain>
				<WebContain>
					<Web>
						<ThumbnNail
							url={"/newWave"}
							name={"new wave"}
							thumb={photos.newWave[2].src}
						/>
					</Web>
					<Web>
						<ThumbnNail
							url={"/webClone"}
							name={"instaWeb clone"}
							thumb={photos.instaWeb[4].src}
						/>
					</Web>
				</WebContain>
				<AppContain>
					<App>
						<ThumbnNail
							url={"/appClone"}
							name={"instaApp clone"}
							thumb={photos.instaApp[3].src}
						/>
					</App>
				</AppContain>
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
