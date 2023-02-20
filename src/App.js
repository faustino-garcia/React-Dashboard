import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { Routes, Route } from "react-router-dom";
import Topbar from "./scenes/global/Topbar.jsx";
import Sidebar from "./scenes/global/Sidebar.jsx";
import Dashboard from "./scenes/dashboard";
import Team from "./scenes/team";
import Invoices from "./scenes/invoices";
import Contacts from "./scenes/contacts";
import Form from "./scenes/form";
// import Bar from "./scenes/bar";
// import Line from "./scenes/line";
// import Pie from "./scenes/pie";
// import Faq from "./scenes/faq";
// import Geography from "./scenes/geography";
// import Calendar from "./scenes/calendar";



function App() {
  const [theme, colorMode] = useMode();
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <Sidebar />
          <main className="content">
            <Topbar />
            <Routes>
              <Route path="/" element={<Dashboard/>} />
              <Route path="/team" element={<Team/>} />
              <Route path="/contacts" element={<Contacts/>} />
              <Route path="/invoices" element={<Invoices/>} />
              <Route path="/form" element={<Form/>} />
              {/* <Route path="/bar" element={<Bar/>} /> */}
              {/* <Route path="/line" element={<Line/>} /> */}
              {/* <Route path="/pie" element={<Pie/>} /> */}
              {/* <Route path="/faq" element={<Faq/>} /> */}
              {/* <Route path="/geography" element={<Geography/>} /> */}
              {/* <Route path="/calendar" element={<Calendar/>} /> */}
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
