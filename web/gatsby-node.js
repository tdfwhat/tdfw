const { createRemoteFileNode } = require("gatsby-source-filesystem")

exports.onCreateNode = async ({
  node,
  actions: { createNode },
  createNodeId,
  getCache,
}) => {
  const allowedMimeTypes = ["image/webp", "video/webm", "video/mp4"]
  if (!allowedMimeTypes.includes(node.mimeType)) {
    return
  }

  await createRemoteFileNode({
    url: node.url, // string that points to the URL of the image
    parentNodeId: node.id, // id of the parent node of the fileNode you are going to create
    createNode, // helper function in gatsby-node to generate the node
    createNodeId, // helper function in gatsby-node to generate the node id
    getCache,
  })
}
