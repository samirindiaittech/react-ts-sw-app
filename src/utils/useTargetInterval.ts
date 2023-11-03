import { useCallback, useEffect, useRef } from "react"

interface IUseTargetInterval {
    (callback: () => void, applicationStorageKeyName: string, targetInterval: number, interval: number): void
}

export const useTargetInterval: IUseTargetInterval = (callback, applicationStorageKeyName, targetInterval, interval) => {
    const savedCallback = useRef<number | undefined>()

    const targetIntervalFunction = useCallback((timeInterval: number): void => {
        savedCallback.current = window.setInterval(() => {
            if (timeInterval > 0) {
                localStorage.setItem(applicationStorageKeyName, timeInterval.toString())
                timeInterval -= 1
            }
            else {
                localStorage.setItem(applicationStorageKeyName, targetInterval.toString())
                if (savedCallback.current) {
                    window.clearInterval(savedCallback.current)
                }
                callback()
                targetIntervalFunction(targetInterval)
            }
        }, interval)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    useEffect(() => {
        let timeInterval = targetInterval
        const timeLeft = localStorage.getItem(applicationStorageKeyName)
        if (Number(timeLeft) === 0 || !timeLeft) {
            localStorage.setItem(applicationStorageKeyName, targetInterval.toString())
        }
        else {
            timeInterval = Number(timeLeft)
        }

        targetIntervalFunction(timeInterval)

        return () => {
            if (savedCallback.current) {
                window.clearInterval(savedCallback.current)
            }
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [applicationStorageKeyName, targetInterval])
}