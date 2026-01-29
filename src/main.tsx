import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import 'bootstrap/dist/css/bootstrap.min.css'

import GradientBlinds from './components/GradientBlinds.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <div className="position-relative w-100 vh-100 overflow-hidden">
      {/* Fondo fijo con GradientBlinds */}
      <div className="position-fixed top-0 start-0 w-100 h-100" style={{ zIndex: 0 }}>
        <GradientBlinds
          gradientColors={['#FF9FFC', '#5227FF']}
          angle={0}
          noise={0.3}
          blindCount={12}
          blindMinWidth={50}
          spotlightRadius={0.5}
          spotlightSoftness={1}
          spotlightOpacity={1}
          mouseDampening={0.15}
          distortAmount={0}
          shineDirection="left"
          mixBlendMode="lighten"
        />
      </div>
      
      {/* Contenido de tu app encima del fondo */}
      <div className="position-relative" style={{ zIndex: 1 }}>
        <div className="container-fluid">
          <App />
        </div>
      </div>
    </div>
  </StrictMode>,
)