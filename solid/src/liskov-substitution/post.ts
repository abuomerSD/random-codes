export class Post {
    createPost(): string {
        return 'Post';
    }
}

export class HashtagePost extends Post {
    createPost(): string {
        return 'Hashtage Post'
    }
}

export class MentionPost extends Post {
    createPost(): string {
        return 'Mention Post'
    }
}