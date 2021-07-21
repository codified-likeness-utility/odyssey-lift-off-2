const resolvers = {

    Query: {
        // Returns an array of tracks that will be used to populate the homepage grid of our web client
        tracksForHome: (_, __, { dataSources }) => {
            return dataSources.trackAPI.getTracksForHome()
        },
        // Get a single track by id, for the Track Page
        track: (_, { id }, { dataSources }) => {
            dataSources.trackAPI.getTrack(id)
        }
    },
    Track: {
        author: ({ authorId }, _, { dataSources }) => {
            return dataSources.trackAPI.getAuthor(authorId)
        },
        modules: ({id}, _, {dataSources}) => {
            return dataSources.trackAPI.getTrackModules(id)
        }
    }

}

module.exports = resolvers