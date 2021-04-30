 export const headersCheckToken=(req)=>{

    return req.headers.authorization && req.headers.authorization.startsWith("Bearer:")
 }

 export const contentToken=(req)=>{
    return req.headers.authorization.split(" ")[1]
 }
