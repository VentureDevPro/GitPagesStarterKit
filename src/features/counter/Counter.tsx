// import type { RootState } from '../../store'
import { useSelector } from 'react-redux'
import { useAppDispatch } from '../../store'
import { getTestURLDataSelector, getCounterSelector } from '../../store/selectors'
import { sessionActions } from '../../store/reducers'

export function Counter() {
  const dispatch = useAppDispatch()
  // selectors
  const count = useSelector(getCounterSelector)
  // async selectors
  const data = useSelector(getTestURLDataSelector)
  console.log({ data })

  return (
    <div>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(sessionActions.changeCounterNumber('increment'))}
        >
          Increment
        </button>
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(sessionActions.changeCounterNumber('decrement'))}
        >
          Decrement
        </button>
      </div>
      <p>
        Click me to fire the test API call
      </p>
    </div>
  )
}