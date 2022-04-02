// Блоггеры
export let Bloggers = [
    {id: 1, name: 'Blogger A'},
    {id: 2, name: 'Blogger B'},
    {id: 3, name: 'Blogger C'},
    {id: 4, name: 'Blogger D'},
    {id: 5, name: 'Blogger E'},
]

export function deleteVideos(id: number) {
    Bloggers = Bloggers.filter(blogger => blogger.id !== id)
    return Bloggers
}

export function improveVideos(id: number, name: string) {
    Bloggers = Bloggers.map(blogger => ({...blogger, name: blogger.id === id ? name : blogger.name}))
    return Bloggers
}

// Посты
export let Posts = [
    {id: 1, title: 'Post A', plot: 'First plot'},
    {id: 2, title: 'Post B', plot: 'Second plot'},
    {id: 3, title: 'Post C', plot: 'Third plot'},
    {id: 4, title: 'Post D', plot: 'Fourth plot'},
    {id: 5, title: 'Post E', plot: 'Fifth plot'},
]

export function deletePost(id: number) {
    Posts = Posts.filter(post => post.id !== id)
    return Posts
}

export function improvePosts(id: number, title: string) {
    Posts = Posts.map(post => ({...post, title: post.id === id ? title : post.title}))
    return Posts
}