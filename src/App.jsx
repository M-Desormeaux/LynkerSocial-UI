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
import { HomePage } from "./pages/HomePage";
import { UserPage } from "./pages/UserPage";

// Note for dynamic routes
// post.map(user => (<Link to={'/u/' + user.id}))

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
              <Route path="/u/:id" element={<UserPage />} />
              <Route path="/c/:id" element={<CommunityPage />} />
            </Routes>
          </PaddedWrapper>
        </ContentWrapper>
      </Center>
    </AuthProvider>
  );
};

export default App;
