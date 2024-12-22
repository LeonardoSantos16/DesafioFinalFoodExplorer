import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { GlobalStyle } from './styles/global'
import { ThemeProvider } from 'styled-components'
import theme from './styles/theme'
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
