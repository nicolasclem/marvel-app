import { ThemeProvider } from "@mui/material/styles";
import AppRouter from "./routers/AppRouter";
import theme from "./theme/themeConfig";




function App() {
  return (
    <div >
      <ThemeProvider  theme={theme}>
        <AppRouter />
       </ThemeProvider>
    </div>
  );
}

export default App;
