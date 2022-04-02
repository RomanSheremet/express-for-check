"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.changePosts = exports.deleteFromDbPost = exports.setNewPost = exports.getPost = exports.getAllPosts = void 0;
const db_1 = require("../db");
const getAllPosts = (req, res) => {
    res.send(db_1.Posts);
};
exports.getAllPosts = getAllPosts;
const getPost = (req, res) => {
    const id = req.params.id;
    const post = db_1.Posts.find(post => post.id === Number(id));
    res.send(post);
};
exports.getPost = getPost;
const setNewPost = (req, res) => {
    const newPost = {
        id: +(new Date()),
        title: req.body.title,
        plot: req.body.plot,
    };
    db_1.Posts.push(newPost);
    res.send(200);
};
exports.setNewPost = setNewPost;
const deleteFromDbPost = (req, res) => {
    const id = req.params.id;
    (0, db_1.deletePost)(Number(id));
    const arrayWithoutChosenPost = db_1.Posts.filter(post => post.id !== Number(id));
    res.send(arrayWithoutChosenPost);
};
exports.deleteFromDbPost = deleteFromDbPost;
const changePosts = (req, res) => {
    const id = req.body.id;
    const name = req.body.name;
    const result = (0, db_1.improvePosts)(Number(id), name);
    res.send(result);
};
exports.changePosts = changePosts;
