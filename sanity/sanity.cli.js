import {defineCliConfig} from 'sanity/cli'

export default defineCliConfig({
  project: {
    basePath: '/studio'
  },
  api: {
    projectId: '9prc89n2',
    dataset: 'production'
  }
})
