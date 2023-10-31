import {
  useEffect,
  useState
} from 'react'

import { Modal } from 'react-bootstrap'

import { useIdleTimer } from 'react-idle-timer'

const IdleTimer: React.FC = (): JSX.Element => {
  const promptBeforeIdle = 5_000
  const timeout = 30_000 + promptBeforeIdle
  const [state, setState] = useState<string>('Active')
  const [event, setEvent] = useState<string>('Event')
  const [remaining, setRemaining] = useState<number>(timeout)
  const [open, setOpen] = useState<boolean>(false)

  const onAction = (event?: Event) => {
    setEvent(event?.type ?? 'Event')
  }

  const onIdle = () => {
    setState('Idle')
    setOpen(false)
  }

  const onActive = () => {
    setState('Active')
    setOpen(false)
  }

  const onPrompt = () => {
    setState('Prompted')
    setOpen(true)
  }

  const {
    getRemainingTime,
    activate
  } = useIdleTimer({
    onAction,
    onIdle,
    onActive,
    onPrompt,
    timeout,
    promptBeforeIdle,
    throttle: 500
  })

  useEffect(() => {
    const interval = setInterval(() => {
      setRemaining(Math.ceil(getRemainingTime() / 1000))
    }, 500)

    return () => {
      clearInterval(interval)
    }
  }, [getRemainingTime])

  const handleStillHere = () => {
    activate()
  }

  const timeTillPrompt = Math.max(remaining - promptBeforeIdle / 1000, 0)
  const seconds = timeTillPrompt > 1 ? 'seconds' : 'second'

  return (
    <>
      <p>Last Event: {event}</p>
      <p>Current State: {state}</p>
      {timeTillPrompt > 0 && (
        <p>
          {timeTillPrompt} {seconds} until prompt
        </p>
      )}
      <Modal
        show={open}
        aria-labelledby="contained-modal-title-vcenter"
        centered
        className="cls-modal-update ideltimer"
        aria-label="idle timer"
      >
        <div className="modal-body text-center update-content">
          <p>Logging out in {remaining} seconds</p>
        </div>
        <div className="modal-footer">
          <button
            type="button"
            className="btn btn-color-dg btn-close-1"
            data-bs-dismiss="modal"
            aria-label="I am still here"
            onClick={handleStillHere}
          >
            I am still here
          </button>
        </div>
      </Modal>
    </>
  )
}

export default IdleTimer