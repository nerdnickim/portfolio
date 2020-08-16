import React from "react";
import { ThemeProvider } from "styled-components";
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
				<Slide />
			</Wrapper>
		</ThemeProvider>
	);
}

export default App;
