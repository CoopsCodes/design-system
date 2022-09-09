import { createGlobalStyle } from "styled-components";
import { fonts } from "./Typography";
import { normalize } from "polished";

export const GlobalStyles = createGlobalStyle`
	${normalize()}
	html {
		font-size: 16px;
		box-sizing: border-box;
	}

	*, *:before, *:after {
		box-sizing: inherit;
	}

	body {
		margin: 0;
		font-family: ${fonts.main};
	}

	main {
		width: 90%;
		margin: 0 auto;
	}
`;
