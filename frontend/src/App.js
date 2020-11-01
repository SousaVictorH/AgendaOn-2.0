import Routes from "./Routes"

import styled from "styled-components";
import GlobalStyle from "./global";

function App() {
  return (
    <AppComponent>
      <GlobalStyle/>
      <Routes/>
    </AppComponent>
  );
}

export default App;

const AppComponent = styled.div`
  height: 100%;
  width: 100%;
`;