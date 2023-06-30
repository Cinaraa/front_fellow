import React from 'react'
import ReactDOM from 'react-dom/client'
import Routing from './routing'
import AuthProvider from '../auth/AuthProvider'
import PlayersProvider from '../game/global/PlayersProvider'
import OwnersProvider from '../game/global/OwnersProvider'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <PlayersProvider>
        <OwnersProvider>
          <Routing />
        </OwnersProvider>
      </PlayersProvider>
    </AuthProvider>
  </React.StrictMode>,
)
