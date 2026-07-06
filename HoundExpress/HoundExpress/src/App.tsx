import { ThemeProvider } from 'styled-components'
import { GlobalStyles } from './Theme/GlobalThemes'
import { Route, Routes } from 'react-router-dom'
import Theme from './Theme/theme'
import PantallaInicio from './components/PantallaInicio'
import PantallaRegistro from './components/PantallaRegistro/Registro'
import PantallaPanelEstados from './components/PantallaPanelEstados/PanelEstados'
import PantallaPanelListaGuias from './components/PantallaListaGuias/PanelListaGuias'

function App() {

  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyles/>
        <Routes>
          <Route path='/' element={<PantallaInicio/>}></Route>
          <Route path='/registro' element={<PantallaRegistro/>}></Route>
          <Route path='/panel-estados' element={<PantallaPanelEstados/>}></Route>
          <Route path='/lista-guias' element={<PantallaPanelListaGuias/>}></Route>
        </Routes>
    </ThemeProvider>
  )
}

export default App;
