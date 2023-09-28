export interface Article {
    id: string;
    webTitle: string;
    webUrl: string;
    sectionName: string;
    webPublicationDate: string;
    fields: {
      thumbnail: string;
    }
}