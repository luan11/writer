import styled from 'styled-components';

export const Loader = styled.div`
  position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	z-index: 99;
	background-color: rgba(0, 0, 0, 0.65);
	display: flex;
	justify-content: center;
	align-items: center;
	cursor: progress;

  >span {
    position: relative;
		display: block;
		width: 64px;
		height: 64px;
		border: 4px solid var(--purple);
		border-radius: 50%;

		&::after {
			content: '';
			position: absolute;
			top: -4px;
			left: -4px;
			width: calc(100% + 4px);
			height: calc(100% + 4px);
			background-color: transparent;
			border-left: 4px solid var(--indigo);
			border-top: 4px solid var(--indigo);
			border-radius: 100%;
			animation: load infinite 1s linear;
		}
  }
`;

export const Container = styled.section`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 1.5rem;
  row-gap: 1.5rem;

  @media (max-width: 991px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 480px) {
    grid-template-columns: repeat(1, 1fr);
  }

  +button {
    display: table;
    margin: 2rem auto 0;
  }
`;

export const Title = styled.h2`
  text-align: center;
`;