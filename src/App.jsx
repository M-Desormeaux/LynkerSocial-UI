import { Route, Routes } from "react-router-dom";
import {
  Center,
  ContentWrapper,
  GlobalStyle,
  PaddedWrapper,
} from "./App.styles";
import { Lynk } from "./components/Lynk/Lynk";
import { Navbar } from "./components/Navbar/Navbar";

// Note for dynamic routes
// post.map(user => (<Link to={'/u/' + user.id}))

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Center>
        <ContentWrapper>
          <Navbar />
          <PaddedWrapper>
            <Routes>
              {/* <Route path="/" element={<Homepage />} /> */}
              <Route path="/" element={<p>Home</p>} />
              <Route path="/u/:id" element={<p>User Page</p>} />
              <Route path="/c/:id" element={<p>Community Page</p>} />
            </Routes>
            <Lynk />
          </PaddedWrapper>
        </ContentWrapper>
      </Center>
    </>
  );
};

export default App;
