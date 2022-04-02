import { Request, Response } from "express";
import { deletePost, improvePosts, Posts } from "../db";

export const getAllPosts = (req: Request, res: Response) => {
    res.send(Posts)
}

export const getPost = (req: Request, res: Response) => {
    const id = req.params.id
    const post = Posts.find(post => post.id === Number(id))
    res.send(post)
}

export const setNewPost = (req: Request, res: Response) => {
    const newPost = {
        id: +(new Date()),
        title: req.body.title,
        plot: req.body.plot,
    }
    Posts.push(newPost)
    res.send(200)
}

export const deleteFromDbPost = (req: Request, res: Response) => {
    const id = req.params.id
    deletePost(Number(id))
    const arrayWithoutChosenPost = Posts.filter(post => post.id !== Number(id))
    res.send(arrayWithoutChosenPost)
}

export const changePosts = (req: Request, res: Response) => {
    const id = req.body.id
    const name = req.body.name
    const result = improvePosts(Number(id), name)
    res.send(result)
}