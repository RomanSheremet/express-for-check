import {changeBloggers, deleteBlogger, getAllBloggers, getBlogger, setNewBlogger} from "./bloggers-controller";
import {app} from "../../index";

// эндпоинты по блоггерам
app.get('/hs_01/api/bloggers', getAllBloggers)
app.post('/hs_01/api/bloggers', setNewBlogger)
app.get('/hs_01/api/bloggers/:id', getBlogger)
app.put('/hs_01/api/bloggers/:id', changeBloggers)
app.delete('/hs_01/api/bloggers/:id', deleteBlogger)