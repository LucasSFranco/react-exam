import Dexie from 'dexie'

const db = new Dexie(process.env.REACT_APP_DATABASE || 'react-news-portal')

db.version(1).stores({
  articles: 'id, topic, uri'
})

db.open()

export default db
