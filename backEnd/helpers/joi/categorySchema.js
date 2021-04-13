import joi from "joi"

export default joi.object({
   category:joi.string().trim().min(2).max(40).rule({message:"Kategori en az 2 en fazla 40 karakterden oluşmalı."})
})


