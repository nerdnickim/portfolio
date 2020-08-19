import React from "react";
import { ThemeProvider } from "styled-components";
import { HashRouter as Router } from "react-router-dom";
import Theme from "../Styles/Theme";
import GlobalStyles from "../Styles/GlobalStyles";
import styled from "styled-components";

import Slide from "./CardSlider";

const Wrapper = styled.div``;

function App() {
	return (
		<ThemeProvider theme={Theme}>
			<GlobalStyles />
			<Wrapper>
				<Router>
					<Slide />
				</Router>
			</Wrapper>
		</ThemeProvider>
	);
}

export default App;
