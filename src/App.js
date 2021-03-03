import './App.css';
import TopBar from "./topBar"
import MainScreen from "./mainScreen"
import BottomBar from "./bottomBar"
import Box from "@material-ui/core/Box"


function App() {
  return (
    <Box className="App" display="flex" flexDirection="column">
      <Box className="Top-Menu">
        <TopBar></TopBar>
      </Box>
      <Box className="Main-Screen" flexGrow={1} alignSelf="stretch">
        <MainScreen></MainScreen>
      </Box>
      <Box className="Bottom-Menu">
        <BottomBar></BottomBar>
      </Box>
    </Box>
  );
}

export default App;
