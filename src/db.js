"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.improvePosts = exports.deletePost = exports.Posts = exports.improveVideos = exports.deleteVideos = exports.Bloggers = void 0;
// Блоггеры
exports.Bloggers = [
    { id: 1, name: 'Blogger A' },
    { id: 2, name: 'Blogger B' },
    { id: 3, name: 'Blogger C' },
    { id: 4, name: 'Blogger D' },
    { id: 5, name: 'Blogger E' },
];
function deleteVideos(id) {
    exports.Bloggers = exports.Bloggers.filter(blogger => blogger.id !== id);
    return exports.Bloggers;
}
exports.deleteVideos = deleteVideos;
function improveVideos(id, name) {
    exports.Bloggers = exports.Bloggers.map(blogger => (Object.assign(Object.assign({}, blogger), { name: blogger.id === id ? name : blogger.name })));
    return exports.Bloggers;
}
exports.improveVideos = improveVideos;
// Посты
exports.Posts = [
    { id: 1, title: 'Post A', plot: 'First plot' },
    { id: 2, title: 'Post B', plot: 'Second plot' },
    { id: 3, title: 'Post C', plot: 'Third plot' },
    { id: 4, title: 'Post D', plot: 'Fourth plot' },
    { id: 5, title: 'Post E', plot: 'Fifth plot' },
];
function deletePost(id) {
    exports.Posts = exports.Posts.filter(post => post.id !== id);
    return exports.Posts;
}
exports.deletePost = deletePost;
function improvePosts(id, title) {
    exports.Posts = exports.Posts.map(post => (Object.assign(Object.assign({}, post), { title: post.id === id ? title : post.title })));
    return exports.Posts;
}
exports.improvePosts = improvePosts;
