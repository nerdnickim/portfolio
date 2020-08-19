import React, { useState } from "react";
import styled from "styled-components";
import { Arrow } from "./Icons";

const ArrowRight = styled.button`
	opacity: ${(props) => (props.state === props?.stateS?.childElementCount - 1 ? 0.3 : 1)};
	z-index: 19;
`;

const ArrowLeft = styled.button`
	transform: rotate(180deg);
	opacity: ${(props) => (props.state === 0 ? 0.3 : 1)};
	z-index: 19;
`;

export default ({ refs }) => {
	const [state, setState] = useState(0);

	const leftHandle = (e) => {
		e.persist();
		e.preventDefault();
		if (state === 0) {
			return;
		} else {
			setState((prev) => prev - 1);
			refs.current.style.transform = `translateX(-${state - 1}00%)`;
		}
	};

	const rightHandle = (e) => {
		e.persist();
		e.preventDefault();
		if (state < refs.current.childElementCount - 1) {
			setState((prev) => prev + 1);
			refs.current.style.transform = `translateX(-${state + 1}00%)`;
		} else if (state < 0) {
			setState(0);
		}
	};

	return (
		<>
			<ArrowLeft state={state} onClick={leftHandle}>
				<Arrow size={48} />
			</ArrowLeft>
			<ArrowRight state={state} stateS={refs?.current} onClick={rightHandle}>
				<Arrow size={48} />
			</ArrowRight>
		</>
	);
};
