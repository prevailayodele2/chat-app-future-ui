// routes
import Router from "./routes";
// theme
import './App.css'
import ThemeProvider from './theme';
// components
import ThemeSettings from './Components/settings';

function App() {
  return (
    <ThemeProvider>
      <ThemeSettings>
        <Router />
      </ThemeSettings>
    </ThemeProvider>
  );
}

export default App;
