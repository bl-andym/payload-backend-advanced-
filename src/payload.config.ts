import path from 'path'

import { mongooseAdapter } from '@payloadcms/db-mongodb'
import { webpackBundler } from '@payloadcms/bundler-webpack'
import { buildConfig } from 'payload/config'

import Users from './collections/Users'
import { Pages } from './collections/Pages'
import { Media } from './collections/Media'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import { BlogPosts } from './collections/BlogPosts'
import { PageTemplates } from './collections/pageTemplates/PageTemplates'

export default buildConfig({
  admin: {
    user: Users.slug,
    bundler: webpackBundler(),
    webpack: (config) => {
      // Modify the Webpack configuration
      // Add support for .jsx extensions:
      config.resolve.extensions.push('.jsx');

      // Return the modified Webpack config
      return config;
    },
  },
  editor: lexicalEditor({}),
  collections: [
    Users,
    Pages,
    Media,
    BlogPosts,// works in the browser!
    PageTemplates,
  ],
  typescript: {
    outputFile: path.resolve(__dirname, 'payload-types.ts'),
  },
  graphQL: {
    schemaOutputFile: path.resolve(__dirname, 'generated-schema.graphql'),
  },
  plugins: [],
  db: mongooseAdapter({
    url: process.env.DATABASE_URI,
  }),
})
