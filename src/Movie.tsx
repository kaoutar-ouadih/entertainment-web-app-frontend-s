export interface Movie{
        id: number,
        title: string,
        thumbnail_trending_large: string,
        thumbnail_regular_large: string,
        year: number,
        category: {
          id: number,
          name: string
        },
        rating: string,
        bookmarked: boolean,
        trending: boolean
}