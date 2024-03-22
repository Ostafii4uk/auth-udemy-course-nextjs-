import { MongoClient } from 'mongodb'

export async function connectToDatabase() {
  const client = await MongoClient.connect(
    'mongodb+srv://Ostafii4uk240178:Ostafii4uk240178@cluster0.kudvezz.mongodb.net/auth?retryWrites=true&w=majority'
  )

  return client
}