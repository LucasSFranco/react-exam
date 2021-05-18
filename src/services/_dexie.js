import Dexie from 'dexie'

const db = new Dexie('news-portal')

db.version(5).stores({
  articles: 'id, topic, uri'
})

db.open()

export default db
