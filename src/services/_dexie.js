import Dexie from 'dexie'

const db = new Dexie('react-news-portal')

db.version(1).stores({
  articles: 'id, topic, uri'
})

db.open()

export default db
