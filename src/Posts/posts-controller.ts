import { Request, Response } from "express";
import {newPostsCollection} from "../db";

export const getAllPosts = async (req: Request, res: Response) => {
    const posts = await newPostsCollection.find({}).toArray();
    res.send(posts)
}

export const getPost = async (req: Request, res: Response) => {
    const title = req.params.title
    const post = await newPostsCollection.find({"title": {$regex: title}}).toArray()
    res.send(post)
}

export const setNewPost = async (req: Request, res: Response) => {
    const newPost = {
        id: +(new Date()),
        title: req.body.title,
        plot: req.body.plot,
    }
    const postResult = await newPostsCollection.insertOne(newPost)
    res.send(200)
}

export const deleteFromDbPost = async (req: Request, res: Response) => {
    const title = req.params.title
    const deleteResult = await newPostsCollection.deleteOne({"title": {$regex: title}})
    res.send(200)
}

export const changePosts = async (req: Request, res: Response) => {
    const title = req.body.title
    const newTitle = req.body.newTitle
    debugger
    const patchResult = await newPostsCollection.updateOne({"title": {$regex: title}}, {$set: {title: newTitle}})
    debugger
    res.send(200)
}