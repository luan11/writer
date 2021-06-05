import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}

	:root {
    --blue: #007bff;
    --indigo: #6610f2;
    --purple: #6f42c1;
    --pink: #e83e8c;
    --red: #dc3545;
    --orange: #fd7e14;
    --yellow: #ffc107;
    --green: #28a745;
    --teal: #20c997;
    --cyan: #17a2b8;
    --white: #fff;
    --gray: #6c757d;
    --gray-dark: #343a40;
    --primary: #007bff;
    --secondary: #6c757d;
    --success: #28a745;
    --info: #17a2b8;
    --warning: #ffc107;
    --danger: #dc3545;
    --light: #f8f9fa;
    --dark: #343a40;
	}

  body {
    font-family: 'Noto Serif JP', serif;
    background: var(--light);
    color: var(--dark);
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: 'Averia Serif Libre', cursive;
    color: #000;
  }

  a {
    text-decoration: none;
    color: var(--dark);
    transition: color .45s;

    &:hover {
      color: var(--indigo);
    }
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

  input,
  select,
  textarea,
  button {
    font-family: 'Noto Serif JP', serif;
    font-size: 0.95rem;
  }

  button {
    cursor: pointer;
  }

  .btn {
    border-radius: 4px;
    padding: 0.50rem 1rem;
    border: 0;
    background: var(--indigo);
    color: var(--light);
    font-weight: 600;
    line-height: 150%;
    transition: all .35s;

    &:hover {
      color: var(--light);
      background: var(--purple);
    }

    &.error {
      background: var(--red);

      &:hover {
        opacity: 0.85;
      }
    }

    &.success {
      background: var(--green);

      &:hover {
        opacity: 0.85;
      }
    }

    &:disabled {
      background: var(--gray);
      cursor: default;
    }
  }
`;

export default GlobalStyle;