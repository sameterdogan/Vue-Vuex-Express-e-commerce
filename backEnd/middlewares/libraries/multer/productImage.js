import multer from "multer"
import appRootPath from "app-root-path"
import path from  "path"
import uniqId from "uniqid"
const rootDir=appRootPath.path

const storage=multer.diskStorage({
    destination:function (req,file,cb){
        console.log(rootDir)
        console.log(file)
        cb(null,path.join(rootDir,"/assets/images/productImages"))
    },
    filename:function (req,file,cb){
        console.log(file.mimetype)
       const extension =file.mimetype.split("/")[1]
        req.productImage=`image_${uniqId(new Date().toISOString().replace(/[\/\\:]/g,"_"))}.${extension}`
        cb(null,req.productImage)
    }
})

export default multer({storage})
