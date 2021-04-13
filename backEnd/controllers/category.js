import CategoryModel from '../models/category'
import categorySchema from '../helpers/joi/categorySchema'
import CustomError from '../helpers/error/CustomError'

export const getCategories = async (req, res, next) => {
      const categories = await CategoryModel.find().lean()
      res.status(200).json({
            success: true,
            message: 'Bütün katagoriler başarılı bir şekilde listelendi.',
            categories,
      })
}

export const getByIdCategory = async (req, res, next) => {
      const category = await CategoryModel.findById(req.params.categoryId)
      res.status(200).json({
            success: true,
            message: 'Kategori getirme işlemi başarılı.',
            category,
      })
}

export const addCategory = async (req, res, next) => {
      try {
            await categorySchema.validateAsync({ ...req.body })
            const newCategory = await CategoryModel.create({ ...req.body })

            res.status(201).json({
                  success: true,
                  message: 'kategori başarılı bir şekilde eklendi',
                  newCategory,
            })
      } catch (err) {
            next(err)
      }
}

export const editCategory = async (req, res, next) => {
      try {
            await categorySchema.validateAsync({ ...req.body })
            let editCategory = await CategoryModel.findOne({
                  _id: req.params.categoryId,
            })
            if (!editCategory)
                  return next(new CustomError('category not found !', 404))
            editCategory.category = req.body.category
            editCategory = await editCategory.save()
            res.status(200).json({
                  success: true,
                  message: 'Kategori başarılı bir şekilde güncellendi.',
                  editCategory,
            })
      } catch (err) {
            next(err)
      }
}

export const deleteCategory = async (req, res, next) => {
      await CategoryModel.findByIdAndDelete(req.params.categoryId)
      res.status(200).json({
            success: true,
            message: 'Kategori başarılı bir şekilde silindi.',
      })
}
