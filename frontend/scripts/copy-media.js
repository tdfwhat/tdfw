import axios from 'axios';
import fs from 'fs';
import { createClient } from '@sanity/client'

const client = createClient({
  projectId: 'o8bcoztu',
  dataset: 'production',
  useCdn: true, 
  apiVersion: '2023-05-03', 
})

const query = `
  *[_id == "main"][0] {
    image {
      asset->
    },
    video {
      asset->
    },
    video2 {
      asset->
    }
  }
`

const sanityResponse = await client.fetch(query)
// console.log({...sanityResponse})

const sanityAssets = Object.entries(sanityResponse).map(([key, value]) => {
  const source = `main-${key}`
  return { source, ...value.asset };
});
// console.log(sanityAssets)

await Promise.all(sanityAssets.map(async (data) => {
  const response = await axios.get(data.url, { responseType: 'stream' });
  const path = `src/public/media/${data.source}.${data.extension}`;
  response.data.pipe(fs.createWriteStream(path));
  console.log(`File downloaded at ${path}`)
}));
