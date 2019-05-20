export const setProcessing = (store, payload) => {
  store.setState({ isLoading: payload })
  if (payload) return

  store.setState({ status: 'Loading...' })

  if (typeof(window) !== 'undefined' && typeof(window.loadingStatus) !== 'undefined')
    window.loadingStatus = 'Loading...'
};

export const setStatus = (store, payload) => {
  store.setState({ status: payload })
};
