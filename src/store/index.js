import { configureStore } from '@reduxjs/toolkit'

import appReducer from '@/store/slices/appSlice'

export default configureStore({
  reducer: {
    app: appReducer,
  },
})