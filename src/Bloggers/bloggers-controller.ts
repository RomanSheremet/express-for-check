import {Request, Response} from "express";
import {deleteVideos, improveVideos, Bloggers} from "../db";

export const getAllBloggers = (req: Request, res: Response) => {
    console.log("bloggers")
    res.send(Bloggers)
}

export const getBlogger = (req: Request, res: Response) => {
    const id = req.params.id
    const blogger = Bloggers.find(blogger => blogger.id === Number(id))
    res.send(blogger)
}

export const setNewBlogger = (req: Request, res: Response) => {
    const newBlogger = {
        id: +(new Date()),
        name: req.body.name,
    }
    Bloggers.push(newBlogger)
    res.send(200)
}

export const deleteBlogger = (req: Request, res: Response) => {
    const id = req.params.id
    deleteVideos(Number(id))
    const arrayWithoutChosenBlogger = Bloggers.filter(blogger => blogger.id !== Number(id))
    res.send(arrayWithoutChosenBlogger)
}

export const changeBloggers = (req: Request, res: Response) => {
    const id = req.body.id
    const name = req.body.name
    const result = improveVideos(Number(id), name)
    res.send(result)
}