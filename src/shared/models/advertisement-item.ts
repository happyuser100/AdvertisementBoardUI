export interface AdvertisementItem {
    id: string;
    place: string;
    adProperty: string;
    title: string;
    imageURL: string;
    description: string;
    iconUrl: string;
    personName: string;
    postDate: Date;
    isCommentsNumber: boolean;
    commentsNumber: number;
    isWriteComments: boolean;
}
