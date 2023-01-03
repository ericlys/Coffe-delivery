import { BrowserRouter } from 'react-router-dom'
import { Slide, ToastContainer } from 'react-toastify'
import { ThemeProvider } from 'styled-components'
import { ShoppingCartContextProvider } from './context/ShoppingCartContext'
import { Router } from './Router'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'
import 'react-toastify/dist/ReactToastify.css'

function App() {

  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <ShoppingCartContextProvider>
          <ToastContainer
            position="top-right"
            autoClose={1500}
            closeOnClick
            pauseOnFocusLoss={false}
            draggable={false}
            transition={Slide}
          />
          <Router/>
        </ShoppingCartContextProvider>
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default App
