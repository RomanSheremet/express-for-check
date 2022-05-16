// Блоггеры
import {MongoClient} from "mongodb";

export let Bloggers = [
    {id: 1, name: 'Blogger A'},
    {id: 2, name: 'Blogger B'},
    {id: 3, name: 'Blogger C'},
    {id: 4, name: 'Blogger D'},
    {id: 5, name: 'Blogger E'},
]

export function deleteVideos(id: number) {
    Bloggers = Bloggers.filter(blogger => blogger.id !== id)
    return Bloggers
}

export function improveVideos(id: number, name: string) {
    Bloggers = Bloggers.map(blogger => ({...blogger, name: blogger.id === id ? name : blogger.name}))
    return Bloggers
}

// Соединение с базой данных

const mongoUri = process.env.monngoURI || 'mongodb://localhost:27017'

const client = new MongoClient(mongoUri)

const postsDb = client.db("posts")

export const newPostsCollection = postsDb.collection("some_new_posts")

export const userCollection = postsDb.collection("users")

export async function runDb() {
    try {
        await client.connect()
        await client.db('posts').command({ping: 1})
        console.log("connection successful")
    } catch (e) {
        await client.close()
        console.log("connection failed")
    }
}