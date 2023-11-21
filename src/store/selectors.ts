import { createSelector } from "reselect"
import { IState } from "./reducers"

import { createAsyncSelectorResults } from "async-selector-kit"

// API
const TEST_URL = 'http://localhost:8000/test'

// typing 
// export intercafe 

// selectors
export const sessionState = (state: IState) => state.session
export const testResultsSelector = createSelector(sessionState, session => session.testURLData)
export const getCounterSelector = createSelector(sessionState, session => session.buttonClickCount)

// fetch URL
const getTestURLDataFetch = async () => {
  const response = await fetch(TEST_URL)
  if (!response.ok) {
    console.error('custom error: ', { response })
  }
  const json = (await response.json()) as any
  console.log({ json })
  return json
}

// async selectors
export const [getTestURLDataSelector] = createAsyncSelectorResults(
  {
    async: async () => {
      const response = (await getTestURLDataFetch()) as any
      return response``
    },
    id: 'getTestURLData',
    defaultValue: null,
  },
  []  // what to monitor, when these values change, it will make the call automatically
)
