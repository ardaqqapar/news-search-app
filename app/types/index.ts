export interface Article {
    id: string;
    webTitle: string;
    // Add other properties as needed
    // For example:
    webUrl: string;
    sectionName: string;
    webPublicationDate: string;
    fields: {
      thumbnail: string;
    }
    // ... and so on
  }