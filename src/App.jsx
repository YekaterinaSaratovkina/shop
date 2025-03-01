import { RouterProvider } from "react-router-dom"
import router from "./constants/routes"
import { createTheme, ThemeProvider } from "@mui/material"

function App() {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#6E6C78",
      },
      secondary: {
        main: "#3B3A3D",
      },
      error: {
        main: "#8B7AAB"
      },
      info: {
        main: "#27263D",
      },
    },
  })
  return (
    <ThemeProvider theme={theme}>
      <RouterProvider router={router}>
      </RouterProvider>
    </ThemeProvider>
  )
}

export default App
/*
  git add .
  git commit -m ""
  git push origin main
*/