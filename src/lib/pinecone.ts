import { Pinecone } from '@pinecone-database/pinecone'

export const getPineconeClient = async () => {
  const client = new Pinecone()

  return client
}
