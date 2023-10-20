// import { useTargetInterval } from "./useTargetInterval"

export const serviceWorkerRegistrationAutoUpdateAction = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    /* useTargetInterval(async () => {
        try {
            // Get the Registration for the Service Worker
            const serviceWorkerRegistration = await navigator?.serviceWorker?.getRegistration()
            if (serviceWorkerRegistration) {
                // Check if there is a New Version of the Service Worker Available
                await serviceWorkerRegistration.update()
            }
        } catch (error) {
            console.error('Error during service worker update:', error);
        }
    }, "swrauApplicationStorageKeyName", 60, 1000) */

    setInterval(async () => {
        try {
            // Get the registration for the service worker.
            const serviceWorkerRegistration = await navigator.serviceWorker.getRegistration();

            if (serviceWorkerRegistration) {
                // Check if there is a new version of the service worker available.
                console.log("Hello Mr. Y", serviceWorkerRegistration);
                await serviceWorkerRegistration.update();
            }
        } catch (error) {
            console.error('Error during service worker update:', error);
        }
    }, 1 * 60 * 1000)
}