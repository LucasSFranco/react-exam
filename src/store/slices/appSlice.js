import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

import Articles from '@/services/Articles'

export const getAllArticlesCount = createAsyncThunk('app/getAllArticlesCount',
  async () => {
    const allArticlesCount = await Articles.getAllCount()

    return { 'all news': allArticlesCount }
  }
)

export const getTopicArticlesCount = createAsyncThunk('app/getTopicArticlesCount',
  async (topic) => {
    const topicArticlesCount = await Articles.getTopicCount(topic)

    return { [topic]: topicArticlesCount }
  }
)

export const getAllArticles = createAsyncThunk('app/getAllArticles',
  async (args, { getState }) => {
    const { articles } = getState().app

    const allArticles = await Articles.getAll(articles?.['all news']?.length || 0)

    return { 'all news': [...(articles?.['all news'] || []), ...allArticles] }
  }
)

export const getArticlesByTopic = createAsyncThunk('app/getArticlesByTopic',
  async (topic, { getState }) => {
    const { articles } = getState().app

    const topicArticles = await Articles.getBy(topic, articles?.[topic]?.length || 0)

    return { [topic]: [...(articles?.[topic] || []), ...topicArticles] }
  }
)

export const appSlice = createSlice({
  name: 'app',
  initialState: {
    tabs: ['all news', ...Articles.topics],
    activeTab: 'all news',
    articles: {},
    count: {},
  },
  reducers: {
    changeActiveTab: (state, action) => {
      state.activeTab = action.payload
    },
  },
  extraReducers: {
    [getAllArticles.fulfilled]: (state, action) => {
      state.articles = { ...state.articles, ...action.payload }
    },
    [getArticlesByTopic.fulfilled]: (state, action) => {
      state.articles = { ...state.articles, ...action.payload }
    },
    [getAllArticlesCount.fulfilled]: (state, action) => {
      state.count = { ...state.count, ...action.payload }
    },
    [getTopicArticlesCount.fulfilled]: (state, action) => {
      state.count = { ...state.count, ...action.payload }
    },
  }
})

export const { changeActiveTab } = appSlice.actions

export const selectCount = state => state.app.count
export const selectTabs = state => state.app.tabs
export const selectActiveTab = state => state.app.activeTab
export const selectArticles = state => state.app.articles

export default appSlice.reducer
