import { useTargetInterval } from "./useTargetInterval"

export function isCurrentDomainLocalhost() {
    return Boolean(
        window?.location?.hostname === 'localhost' ||
        // [::1] is the IPv6 localhost address.
        window?.location?.hostname === '[::1]' ||
        // 127.0.0.1/8 are considered localhost for IPv4.
        // window?.location?.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/)
        window?.location?.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][\d]|[01]?[\d][\d]?)){3}$/)
    )
}

export const windowLocationReloadFunction = () => {
    window.location.reload()
}

export const serviceWorkerRegistrationAutoUpdateAction = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useTargetInterval(async () => {
        try {
            // Get the Registration for the Service Worker
            const serviceWorkerRegistration = await navigator?.serviceWorker?.getRegistration()
            if (serviceWorkerRegistration) {
                if (serviceWorkerRegistration.installing) {
                    await serviceWorkerRegistration.installing.onstatechange;
                }

                // Check if there is a New Version of the Service Worker Available
                await serviceWorkerRegistration.update()
            }
        } catch (error) {
            console.error('Error during service worker update:', error)
        }
    }, "swrauApplicationStorageKeyName", 90, 1000)

    /* setInterval(async () => {
        try {
            // Get the registration for the service worker.
            const serviceWorkerRegistration = await navigator.serviceWorker.getRegistration()

            if (serviceWorkerRegistration) {
                // Check if there is a new version of the service worker available.
                await serviceWorkerRegistration.update()
            }
        } catch (error) {
            console.error('Error during service worker update:', error)
        }
    }, 1 * 60 * 1000) */
}

export const isNullOrEmptyOrUndefinedFunc = (value: any) => {
    if (value === null || value === "" || value === undefined || typeof value === "undefined") {
        return true
    }
    return false
}

export const currentSystemDateTime = (days: any = null) => {
    let d = new Date(Date())
    if (isNullOrEmptyOrUndefinedFunc(days) === false) {
        d.setDate(d.getDate() + days)
    }
    d = new Date(`${`${d.getMonth() + 1}`.padStart(2, "0")}/${`${d.getDate()}`.padStart(2, "0")}/${d.getFullYear()} ${`${d.getHours()}`.padStart(2, "0")}:${`${d.getMinutes()}`.padStart(2, "0")}:${`${d.getSeconds()}`.padStart(2, "0")}`)
    return d
}

export const currentSystemUTCDateTime = (days: any = null) => {
    let d = new Date(Date())
    if (isNullOrEmptyOrUndefinedFunc(days) === false) {
        d.setDate(d.getDate() + days)
    }
    d = new Date(`${`${d.getUTCMonth() + 1}`.padStart(2, "0")}/${`${d.getUTCDate()}`.padStart(2, "0")}/${d.getUTCFullYear()} ${`${d.getUTCHours()}`.padStart(2, "0")}:${`${d.getUTCMinutes()}`.padStart(2, "0")}:${`${d.getUTCSeconds()}`.padStart(2, "0")}`)
    return d
}

export const getCurrentSystemDate = (days: any = null) => {
    let d = new Date(Date())
    if (isNullOrEmptyOrUndefinedFunc(days) === false) {
        d.setDate(d.getDate() + days)
    }
    d = new Date(`${`${d.getMonth() + 1}`.padStart(2, "0")}/${`${d.getDate()}`.padStart(2, "0")}/${d.getFullYear()}`)
    return d
}

export const getCurrentSystemUTCDate = (days: any = null) => {
    let d = new Date(Date())
    if (isNullOrEmptyOrUndefinedFunc(days) === false) {
        d.setDate(d.getDate() + days)
    }
    d = new Date(`${`${d.getUTCMonth() + 1}`.padStart(2, "0")}/${`${d.getUTCDate()}`.padStart(2, "0")}/${d.getUTCFullYear()}`)
    return d
}

export const getRandomString = (length: any) => {
    let result = ''
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
    const charactersLength = characters.length
    let i: number
    // eslint-disable-next-line no-plusplus
    for (i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength))
    }
    return result
}

export const windowClearCacheFunction = () => {
    window.caches.keys().then(list => {
        list.map(key => caches.delete(key))
        windowLocationReloadFunction()
    })
}