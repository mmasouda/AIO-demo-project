export interface IItem {
    gameIdentity: {
        gameInfoId: number;
        gameName: string;
        gameUrl: string;
        gameChannel: string;
        socketNameSpace: string;
    },
    fullName: string;
    thumbnail: string;
    providerName: string;
    rtpDes: number;
    iconThreeFour: string;
    betco34: string;
    online: number;
    providerIcon: string;
    providerIconWhite: string;
    isRestricted: number;
    categoryName: string;
    rateScore: number;
    rateNum: number;
    retrieveId: string;
    onlineUsers: number;
    tags: string[];
    corner: null;
    wagerPercentAge: number;
    translatedTags: object;
    disabled: boolean
};