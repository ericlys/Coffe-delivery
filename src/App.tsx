import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { ShoppingCartContextProvider } from './context/ShoppingCartContext'
import { Router } from './Router'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'

function App() {

  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <ShoppingCartContextProvider>
          <Router/>
        </ShoppingCartContextProvider>
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default App
