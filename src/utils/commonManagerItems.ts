import { useTargetInterval } from "./useTargetInterval"

export const serviceWorkerRegistrationAutoUpdateAction = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useTargetInterval(async () => {
        try {
            // Get the Registration for the Service Worker
            console.log("test")
            const serviceWorkerRegistration = await navigator?.serviceWorker?.getRegistration()
            if (serviceWorkerRegistration) {
                // Check if there is a New Version of the Service Worker Available
                await serviceWorkerRegistration.update()
            }
        } catch (error) {
            console.error('Error during service worker update:', error);
        }
    }, "swrauApplicationStorageKeyName", 60, 1000)
}