const config =  {
    API_LIST: {
        LIST_BANGUMI: 'http://localhost:2999/search', // return all bangumis
        HOT_BANGUMI: 'http://localhost:2999/search/死神',//return hotest bangumis XD
        // DAMAKU_URL: 'http://localhost:2999/api/',
        VIDEO_URL: 'http://localhost:2999/api',
        SEARCH_URL: 'http://localhost:2999/search/'
    },
    VIDEO_PLAYER: {
        SOURCE_HOST: "player.tv",
        REPLACE_HOST_LIST: [
            "1",
            "2",
            "3",
            "4"
        ]
    }
};

export default config;