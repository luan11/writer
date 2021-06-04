import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}

	:root {
		
	}

  body {
    font-family: 'Noto Serif JP', serif;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: 'Averia Serif Libre', cursive;
  }

	.container {
		width: 100%;
		margin: 0 auto;

		@media (min-width: 576px) {
			width: 540px;
		}

		@media (min-width: 768px) {
			width: 720px;
		}

		@media (min-width: 992px) {
			width: 960px;
		}

		@media (min-width: 1200px) {
			width: 1140px;
		}

		@media (min-width: 1400px) {
			width: 1320px;
		}
	}
`;

export default GlobalStyle;