import * as React from "react"
import { graphql } from "gatsby"
import { useAssetsMap } from "../hooks/use-assets-map"

const IndexPage = ({ data }) => {
  const assets = useAssetsMap()
  console.log(assets)

  return (
    <main className="w-screen h-screen bg-black">
      <h1>Hej1</h1>
      <video 
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay={true} loop={true} playinline="true" muted={true} preload="none">
        <source src={assets.main_video} type="video/webm" />
        <source src={assets.main_video2} type="video/mp4" />
      </video>
      <h1>Hej2</h1>
    </main>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>

