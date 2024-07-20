import { createGlobalStyle } from "./styled-components";

export const GlobalStyleNotification = createGlobalStyle`
  .Toastify__toast--success,
  .Toastify__toast--error,
  .Toastify__toast--info {
    background-color: ${(props) => props.theme.colors.white["1000"]};
  }

  .Toastify__toast {
    min-width: 400px;
    padding: 24px 64px;
    color: ${(props) => props.theme.colors.black["1000"]};
    border-radius: ${(props) => props.theme.radii[3]}px;
    box-shadow: ${(props) => props.theme.shadows[5]};
  }

  .Toastify__toast-container {
    width: auto;
  }

  .Toastify__toast-body {
    flex: 1 0 auto;
    font-size: 14px;
    line-height: 1.57;
    white-space: pre-line;
    width: fit-content;
  }

  .Toastify__close-button {
    position: absolute;
    top: 16px;
    right: 16px;
    padding: 2px 6px;
    color: ${(props) => props.theme.colors.black["1000"]};
    font-size: 11px;
    background-color: ${(props) => props.theme.colors.grey["1000"]};
    border-radius: ${(props) => props.theme.radii[6]};
    opacity: 100%;
  }

  .Toastify__toast--success::before,
  .Toastify__toast--info::before {
    content: '';
    position: absolute;
    top: 32px;
    left: 34px;
    z-index: 2;
    display: inline-block;
    width: 7px;
    height: 3px;
    border-bottom: ${(props) => props.theme.borders[2]};
    border-left: ${(props) => props.theme.borders[2]};
    transform: rotate(-45deg);
  }

  .Toastify__toast--success::after,
  .Toastify__toast--info::after {
    content: '';
    position: absolute;
    top: 26px;
    left: 30px;
    z-index: 1;
    display: inline-block;
    width: 18px;
    height: 18px;
    background-color: ${(props) => props.theme.colors.green["300"]};
    border-radius: ${(props) => props.theme.radii[6]};
    transform: rotate(-45deg);
  }

  .Toastify__toast--error::after {
    content: '✖︎';
    position: absolute;
    top: 25px;
    left: 30px;
    z-index: 1;
    display: inline-block;
    width: 16px;
    height: 16px;
    padding-top: 4px;
    padding-left: 5px;
    color: ${(props) => props.theme.colors.white["1000"]};
    font-size: 13px;
    background-color: ${(props) => props.theme.colors.red["500"]};
    border-radius: ${(props) => props.theme.radii[6]};
  }
`;
