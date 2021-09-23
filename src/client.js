import sanityClient from '@sanity/client'

export default sanityClient({
    projectId: "jy9nlhu2",
    dataset: "production",
    apiVersion: '2021-08-31',
    useCdn: true
})