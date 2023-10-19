import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import * as serviceWorkerRegistration from './serviceWorkerRegistration'
import reportWebVitals from './reportWebVitals'
import { BrowserRouter } from 'react-router-dom'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
)

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.register({
  onUpdate: (registration) => {
    const waitingServiceWorker = registration.waiting
    if (waitingServiceWorker) {
      interface ServiceWorkerEvent extends Event {
        target: Partial<ServiceWorker> & EventTarget | null
      }

      waitingServiceWorker.addEventListener('statechange', (event: ServiceWorkerEvent) => {
        const worker = event.target as ServiceWorker
        // The new service worker has been activated
        if (worker.state === 'activated') {
          if (window.confirm('New version available! Ready to update?')) {
            window.location.reload()
          }
        }
      })

      waitingServiceWorker.postMessage({ type: 'SKIP_WAITING' })
    }
  }
})

if ('serviceWorker' in navigator) {
  navigator.serviceWorker
    .register('/service-worker.js')
    .then((registration) => {
      console.log('Service Worker registered with scope:', registration.scope);

      // Check if there's an active service worker and it has a controller
      if (registration.active && 'controller' in registration.active) {
        // Send a message to the service worker to trigger an update
        registration.update().then(() => {
          (registration.active as any).controller.postMessage({ action: 'update' });
        });
      }
    })
    .catch((error) => {
      console.error('Service Worker registration failed:', error);
    });
}



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()