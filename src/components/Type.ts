export interface Post {
    id: number,
    text: string,
    image: string,
    created_at: string,
    updated_at: string,
    comments: Comment[],
}

export interface Comment {
    id: number,
    text: string,
    created_at: string,
    updated_at: string,
}
