import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import  { GlobalStyle } from './styles/global'
import { ThemeProvider } from 'styled-components'
import theme from './styles/theme'
//import './index.css'
import { Footer } from './components/footer'
import { HeaderDesktop } from './components/header/headerDesktop'
import './styles/fonts'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <HeaderDesktop />
      <Footer />
      <GlobalStyle />
    </ThemeProvider>
  </StrictMode>,
)
