import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { GlobalStyle } from './styles/global'
import { ThemeProvider } from 'styled-components'
import theme from './styles/theme'
//import './index.css'
import { Footer } from './components/footer'
import { HeaderDesktop } from './components/header/headerDesktop'
import { CreatePrate } from './pages/CreatePrate'
import { UpdatePrate } from './pages/UploadPrate'
import { DetailsPrate } from './pages/DetailsPrate'
import { Home } from './pages/Home'
import { Carousels } from './components/carousels'
import { Routes } from './routes'
import { AuthenticatorProvider } from './hooks/authContext'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <AuthenticatorProvider>
        <Routes />
      </AuthenticatorProvider>
      <GlobalStyle />
    </ThemeProvider>
  </StrictMode>,
)
