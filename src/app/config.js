const config =  {
    API_LIST: {
        LIST_BANGUMI: 'https://vapi.nvme0n1p.dev/search', // return all bangumis
        HOT_BANGUMI: 'https://vapi.nvme0n1p.dev/search/死神',//return hotest bangumis XD
        // DAMAKU_URL: 'http://localhost:2999/api/',
        VIDEO_URL: 'https://vapi.nvme0n1p.dev/api',
        SEARCH_URL: 'https://vapi.nvme0n1p.dev/search/'
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