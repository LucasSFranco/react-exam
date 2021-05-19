import { configureStore } from '@reduxjs/toolkit'

import newsReducer from '@/store/slices/newsSlice'

export default configureStore({
  reducer: { news: newsReducer },
})
