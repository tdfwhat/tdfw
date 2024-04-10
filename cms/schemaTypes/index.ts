export const schemaTypes = [
  {
    title: "Main",
    name: "main",
    type: "document",
    __experimental_formPreviewTitle: false,
    preview: {
      prepare() {
        return { title: "Main" }
      }
    },
    fields: [
      {
        title: "Title",
        name: "title",
        type: "string"
      },
      {
        title: 'Video',
        name: 'video',
        type: 'file',
      },
      {
        title: 'Video2',
        name: 'video2',
        type: 'file',
      },
      {
        title: 'Image',
        name: 'image',
        type: 'file',
      }
    ]
  }  
]
