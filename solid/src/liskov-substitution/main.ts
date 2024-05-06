import { HashtagePost, MentionPost, Post } from "./post";

function doPost(postStartsWith: string) {
    let post;
    if (postStartsWith === '#') {
        post = new HashtagePost();
        console.log(post.createPost());
    }
    else if (postStartsWith === '@') {
        post = new MentionPost();
        console.log(post.createPost());
    }
    else {
        post = new Post();
        console.log(post.createPost());
    }
}

doPost('#');
doPost('@');
doPost('start');