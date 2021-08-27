import styled from "styled-components";
import { Button, Typography } from "@material-ui/core";

export const MoviesDataWrapper = styled.div`
  display: flex;
  margin: 15px;
  justify-content: center;
`;

export const TypographyStyle = styled(Typography)`
  &.type {
    margin-bottom: 30px;
    margin-top: 20px;
    font-family: comic Neue;
    font-weight: bold;
    font-size: 25px;
  }
`;
export const NominateButtonStyle = styled(Button)`
  &.button-style {
    font-family: comic Neue;
    color: #6f8c6b;
    font-size: 15px;
    font-weight: bold;
    border: 0.4px solid lightgrey;
    border-left: none;
    border-bottom: none;
    border-right: none;
    text-decoration: underline;
    :hover {
      background-color: #e3e3e3;
      transition: 0.8s;
    }
  }
`;
