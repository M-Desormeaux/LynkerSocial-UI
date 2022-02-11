import { Route, Routes } from "react-router-dom";
import {
  Center,
  ContentWrapper,
  GlobalStyle,
  PaddedWrapper,
} from "./App.styles";
import { Navbar } from "./components/Navbar/Navbar";
import { AuthProvider } from "./context/AuthContext";
import { CommunityPage } from "./pages/CommunityPage";
import { HomePage } from "./pages/Homepage";
import { UserPage } from "./pages/UserPage";

const App = () => {
  return (
    <AuthProvider>
      <GlobalStyle />
      <Center>
        <ContentWrapper>
          <Navbar />
          <PaddedWrapper>
            <Routes>
              {/* <Route path="/" element={<Homepage />} /> */}
              <Route path="/" element={<HomePage />} />
              <Route path="/u/" element={<UserPage />} />
              <Route path="/c/" element={<CommunityPage />} />
            </Routes>
          </PaddedWrapper>
        </ContentWrapper>
      </Center>
    </AuthProvider>
  );
};

export default App;
