import AppUi from './AppUi'
import { AppProvider } from '../../customHooks/useContext'

const App = () => {
  return (
    <AppProvider>
      <AppUi />
    </AppProvider>
  )
}

export default App
