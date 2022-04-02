"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const bloggers_controller_1 = require("./Bloggers/bloggers-controller");
const posts_controller_1 = require("./Posts/posts-controller");
// @ts-ignore
const router = new express_1.default();
// эндпоинты по блоггерам
router.get('/hs_01/api/bloggers', bloggers_controller_1.getAllBloggers);
router.post('/hs_01/api/bloggers', bloggers_controller_1.setNewBlogger);
router.get('/hs_01/api/bloggers/:id', bloggers_controller_1.getBlogger);
router.put('/hs_01/api/bloggers/:id', bloggers_controller_1.changeBloggers);
router.delete('/hs_01/api/bloggers/:id', bloggers_controller_1.deleteBlogger);
// эндпоинты по постам
router.get('/hs_01/api/posts', posts_controller_1.getAllPosts);
router.post('/hs_01/api/posts', posts_controller_1.setNewPost);
router.get('/hs_01/api/posts/:id', posts_controller_1.getPost);
router.put('/hs_01/api/posts/:id', posts_controller_1.changePosts);
router.delete('/hs_01/api/posts/:id', posts_controller_1.deleteFromDbPost);
exports.default = router;
