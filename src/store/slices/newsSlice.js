import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

import Articles from '../../services/Articles'

export const getAllArticles = createAsyncThunk('news/getAllArticles',
  async (arg, { getState }) => {
    const { articles } = getState().news

    const allArticles = await Articles.getAll(articles['all news']?.length || 0)

    return { 'all news': [...(articles['all news'] || []), ...allArticles] }
  }
)

export const getAllArticlesCount = createAsyncThunk('news/getAllArticlesCount',
  async () => {
    const allArticlesCount = await Articles.getAllCount()

    return { 'all news': allArticlesCount }
  }
)

export const getTopicArticles = createAsyncThunk('news/getTopicArticles',
  async (topic, { getState }) => {
    const { articles } = getState().news

    const topicArticles = await Articles.getTopic(topic, articles[topic]?.length || 0)

    return { [topic]: [...(articles[topic] || []), ...topicArticles] }
  }
)

export const getTopicArticlesCount = createAsyncThunk('news/getTopicArticlesCount',
  async (topic) => {
    const topicArticlesCount = await Articles.getTopicCount(topic)

    return { [topic]: topicArticlesCount }
  }
)

export const sync = createAsyncThunk('news/sync',
  async (arg, { rejectWithValue }) => {
    try {
      await Articles.sync()
    } catch(err) {
      rejectWithValue(err)
    }
  }
)

export const newsSlice = createSlice({
  name: 'news',
  initialState: {
    activeTab: null,
    articles: {},
    count: {},
    synching: false,
    tabs: ['all news', ...Articles.topics],
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
    [getAllArticlesCount.fulfilled]: (state, action) => {
      state.count = { ...state.count, ...action.payload }
    },
    [getTopicArticles.fulfilled]: (state, action) => {
      state.articles = { ...state.articles, ...action.payload }
    },
    [getTopicArticlesCount.fulfilled]: (state, action) => {
      state.count = { ...state.count, ...action.payload }
    },
    [sync.pending]: (state) => {
      state.synching = true
    },
    [sync.fulfilled]: (state) => {
      state.synching = false
    },
    [sync.reject]: (state) => {
      state.synching = false
    },
  },
})

export const { changeActiveTab } = newsSlice.actions

export const selectActiveTab = state => state.news.activeTab
export const selectArticles = state => state.news.articles
export const selectCount = state => state.news.count
export const selectSynching = state => state.news.synching
export const selectTabs = state => state.news.tabs

export default newsSlice.reducer
