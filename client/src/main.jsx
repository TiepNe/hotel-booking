import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {BrowserRouter} from 'react-router-dom'
import { ClerkProvider } from '@clerk/clerk-react'
import { viVN } from "@clerk/localizations";
import { AppProvider } from './context/AppContext.jsx'

// Nhập Publishable Key
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY
if (!PUBLISHABLE_KEY) {
  throw new Error('Thêm Clerk Publishable Key vào tệp .env')
}

createRoot(document.getElementById('root')).render(
  <ClerkProvider publishableKey={PUBLISHABLE_KEY} localization={viVN}>
    <BrowserRouter>
    <AppProvider>
      <App />
    </AppProvider>
    </BrowserRouter>
  </ClerkProvider>,
)
