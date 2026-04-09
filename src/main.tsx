import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { ThemeProvider } from './providers/ThemeProvider.tsx'
import '@/utils/i18n.ts'

createRoot(document.getElementById('root')!).render(
    <ThemeProvider>
        <App />
    </ThemeProvider>
)
