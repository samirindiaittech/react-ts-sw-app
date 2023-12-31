import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

import './index.css'

import App from './App'

import * as serviceWorkerRegistration from './serviceWorkerRegistration'

import reportWebVitals from './reportWebVitals'

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
let serviceWorkerRefreshing: boolean = false
serviceWorkerRegistration.register({
  onUpdate: (registration) => {
    const waitingServiceWorker = registration.waiting
    if (waitingServiceWorker) {
      waitingServiceWorker.addEventListener('statechange', (event) => {
        const worker = event.target as ServiceWorker
        // The new service worker has been activated
        if (worker.state === 'activated') {
          if (serviceWorkerRefreshing) {
            return
          }
          serviceWorkerRefreshing = true
          window.location.reload()
        }
      })

      waitingServiceWorker.postMessage({ type: 'SKIP_WAITING' })
    }
  }
})

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()