import { defineDocumentType, makeSource } from "contentlayer/source-files"

const Post = defineDocumentType(() => ({
  name: "Post",
  filePathPattern: `**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: {
      type: "string",
      description: "The title of the post",
      required: true,
    },
    date: {
      type: "date",
      description: "The date of the post",
      required: true,
    },
    image: {
      type: "string",
      required: true,
    },
  },
  computedFields: {
    url: {
      type: "string",
      resolve: (doc) => `/posts/${doc._raw.flattenedPath}`,
    },
    readingTime: {
      type: "number",
      resolve: (doc) => {
        const content = String(doc.body.raw)
        const wordsPerMinute = 200
        const numberOfWords = content.split(/\s/g).length
        const minutes = numberOfWords / wordsPerMinute
        return Math.ceil(minutes)
      },
    },
  },
}))

export default makeSource({
  contentDirPath: "./src/content/posts",
  documentTypes: [Post],
})
