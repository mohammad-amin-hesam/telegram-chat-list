import { ThemeProps } from "../../pages/_app";

export default (theme: ThemeProps) => {
	const { colors } = theme;

	return `
  body {
    margin: 0;
    padding: 0;
    direction: ltr;
    background: ${colors.primary};
    font-family: 'Nunito', sans-serif;
  }
  button::-moz-focus-inner {
    border: 0;
  }
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-size: 100%;
    font-family: 'Nunito', sans-serif;

    &::-webkit-scrollbar {
      width: 5px;
    }
    
    /* Track */
    &::-webkit-scrollbar-track {
      background: #f1f1f113;
    }
    
    /* Handle */
    &::-webkit-scrollbar-thumb {
      background: #88888850;
    }
    
    /* Handle on hover */
    &::-webkit-scrollbar-thumb:hover {
      background: #55555550;
    }
  }
  a {
    text-decoration: none;
  }
  button {
    background: #fff;
    border: none;
    outline: none;
    cursor: pointer;
	  font-family: IRANSans !important;
  }
  ul {
    list-style-type: none;
  }
  :focus,
  input {
    outline: none;
    border: 0;
  }
  input[type="number"]::-webkit-inner-spin-button,
  input[type="number"]::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  ::selection {
    background: #00d9ff2a;
    color: #636363;
    border-radius: 5px;
  }
  ::-moz-selection {
    background: #00d9ff2a;
    color: #636363;
    border-radius: 5px;
  }
  input {
    background-color: transparent;
  }

  .s-alert-box-inner {
    font-family: IRANSans !important;
  }

  @-webkit-keyframes autofill {
    0%,100% {
        color: #666;
        background: transparent;
      }
  }

  input:-webkit-autofill {
      -webkit-animation-delay: 1s; /* Safari support - any positive time runs instantly */
      -webkit-animation-name: autofill;
      -webkit-animation-fill-mode: both;
  }

  input:-internal-autofill-selected {
    -webkit-appearance: menulist-button;
    background-color: transparent !important;
    background-image: none !important;
    color: -internal-light-dark-color(black, white) !important;
  }

  input:-internal-autofill-selected {
    -webkit-appearance: menulist-button;
    background-color: transparent !important;
    background-image: none !important;
    color: -internal-light-dark-color(black, white) !important;
  }

  .centerContainer {
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    margin: 15px 0;
  }

  .infinitScroll {
    overflow-y: auto !important;
    overflow-x: hidden !important;
  }
`;
};
