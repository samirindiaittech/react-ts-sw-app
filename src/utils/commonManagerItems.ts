import { useTargetInterval } from "./useTargetInterval"

export const serviceWorkerRegistrationAutoUpdateAction = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useTargetInterval(async () => {
        try {
            console.log("Sir majama")
            // Get the Registration for the Service Worker
            const serviceWorkerRegistration = await navigator?.serviceWorker?.getRegistration()
            if (serviceWorkerRegistration) {
                // Check if there is a New Version of the Service Worker Available
                console.log("Hello Mr. Sir", serviceWorkerRegistration)
                await serviceWorkerRegistration.update()
            }
        } catch (error) {
            console.error('Error during service worker update:', error)
        }
    }, "swrauApplicationStorageKeyName", 30, 1000)

    /* setInterval(async () => {
        try {
            console.log("Sir")
            // Get the registration for the service worker.
            const serviceWorkerRegistration = await navigator.serviceWorker.getRegistration()

            if (serviceWorkerRegistration) {
                // Check if there is a new version of the service worker available.
                console.log("Hello Mr. S", serviceWorkerRegistration)
                await serviceWorkerRegistration.update()
            }
        } catch (error) {
            console.error('Error during service worker update:', error)
        }
    }, 1 * 60 * 1000) */
}