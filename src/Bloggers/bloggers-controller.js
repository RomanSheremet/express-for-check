"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.changeBloggers = exports.deleteBlogger = exports.setNewBlogger = exports.getBlogger = exports.getAllBloggers = void 0;
const db_1 = require("../db");
const getAllBloggers = (req, res) => {
    res.send(db_1.Bloggers);
};
exports.getAllBloggers = getAllBloggers;
const getBlogger = (req, res) => {
    const id = req.params.id;
    const blogger = db_1.Bloggers.find(blogger => blogger.id === Number(id));
    res.send(blogger);
};
exports.getBlogger = getBlogger;
const setNewBlogger = (req, res) => {
    const newBlogger = {
        id: +(new Date()),
        name: req.body.name,
    };
    db_1.Bloggers.push(newBlogger);
    res.send(200);
};
exports.setNewBlogger = setNewBlogger;
const deleteBlogger = (req, res) => {
    const id = req.params.id;
    (0, db_1.deleteVideos)(Number(id));
    const arrayWithoutChosenBlogger = db_1.Bloggers.filter(blogger => blogger.id !== Number(id));
    res.send(arrayWithoutChosenBlogger);
};
exports.deleteBlogger = deleteBlogger;
const changeBloggers = (req, res) => {
    const id = req.body.id;
    const name = req.body.name;
    const result = (0, db_1.improveVideos)(Number(id), name);
    res.send(result);
};
exports.changeBloggers = changeBloggers;
