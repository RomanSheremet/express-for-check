import {changePosts, deleteFromDbPost, getAllPosts, getPost, setNewPost} from "./posts-controller";
import {app} from "../../index";

export const connectPostsToRouter = () => {
    app.get('/hs_01/api/posts', getAllPosts)
    app.post('/hs_01/api/posts', setNewPost)
    app.get('/hs_01/api/posts/:title', getPost)
    app.put('/hs_01/api/posts', changePosts)
    app.delete('/hs_01/api/posts/:title', deleteFromDbPost)
}
