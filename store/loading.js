import React from 'react'
import useGlobalHook from 'use-global-hook';
import * as actions from '~/actions/loadingActions'

const initialState = {
  isLoading: false,
  status: 'Loading...'
}

const useLoading = useGlobalHook(React, initialState, actions)

export default useLoading
