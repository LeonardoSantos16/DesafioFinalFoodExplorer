import React from 'react'
import ReactDOM from 'react-dom/client' 
import { GlobalStyle } from './styles/global'
import { ThemeProvider } from 'styled-components'
import theme from './styles/theme'
import { Routes } from './routes'
import { AuthenticatorProvider } from './hooks/authContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <AuthenticatorProvider>
        <Routes />
      </AuthenticatorProvider>
      <GlobalStyle />
    </ThemeProvider>
  </React.StrictMode>,
)
