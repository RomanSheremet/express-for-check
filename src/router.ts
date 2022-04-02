import Router from 'express'
import {changeBloggers, deleteBlogger, getAllBloggers, getBlogger, setNewBlogger} from "./Bloggers/bloggers-controller";
import {changePosts, deleteFromDbPost, getAllPosts, getPost, setNewPost} from "./Posts/posts-controller";

// @ts-ignore
const router = new Router()

// эндпоинты по блоггерам
router.get('/hs_01/api/bloggers', getAllBloggers)
router.post('/hs_01/api/bloggers', setNewBlogger)
router.get('/hs_01/api/bloggers/:id', getBlogger)
router.put('/hs_01/api/bloggers/:id', changeBloggers)
router.delete('/hs_01/api/bloggers/:id', deleteBlogger)

// эндпоинты по постам
router.get('/hs_01/api/posts', getAllPosts)
router.post('/hs_01/api/posts', setNewPost)
router.get('/hs_01/api/posts/:id', getPost)
router.put('/hs_01/api/posts/:id', changePosts)
router.delete('/hs_01/api/posts/:id', deleteFromDbPost)

export default router