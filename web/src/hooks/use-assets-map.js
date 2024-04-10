import { useStaticQuery, graphql } from "gatsby"

function staticUrls(sanitySources, localSources) {
  const staticUrlMap = {};

  for (const key in sanitySources) {
    const assetId = sanitySources[key];
    const asset = localSources.find(node => node.name === assetId);
    if (asset) {
      staticUrlMap[key] = asset.publicURL;
    }
  }

  return staticUrlMap;
}

export const useAssetsMap = () => {
  const { sanityMain, allFile  } = useStaticQuery(graphql`
    {
      sanityMain {
        image {
          asset {
            assetId
          }
        }
        video {
          asset {
            assetId
          }
        }
        video2 {
          asset {
            assetId
          }
        }
      }
      allFile {
        nodes {
          publicURL
          name
        }
      }
    }
  `)

  const sanitySources = {
    main_image: sanityMain.image.asset.assetId,
    main_video: sanityMain.video.asset.assetId,
    main_video2: sanityMain.video2.asset.assetId
  }

  const urls = staticUrls(sanitySources, allFile.nodes)

  return urls;
}
