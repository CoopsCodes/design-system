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
		margin: 0;
	}
	h1,h2,h3,h4,h5,h6 {
		margin: 0;
	}
`;
