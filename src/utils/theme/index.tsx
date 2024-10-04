import {ThemeProvider} from "styled-components";
import {Props} from "./Theme.props";
import {createGlobalStyle} from "styled-components";
import {Reset} from "./reset";
import {theme} from "./theme";

const GlobalStyle = createGlobalStyle`
  ${Reset}
`

const Theme = ({children}: Props): JSX.Element => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  );
}

export default Theme;
