import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import  GlobalStyles from './styles/global'
import { ThemeProvider } from 'styled-components'
import theme from './styles/theme'
//import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
    </ThemeProvider>
  </StrictMode>,
)
