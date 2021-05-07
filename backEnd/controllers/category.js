import CategoryModel from '../models/category'
import categorySchema from '../helpers/joi/categorySchema'
import CustomError from '../helpers/error/CustomError'

export const getCategories = async (req, res, next) => {
    const categories = await CategoryModel.find().lean()
    res.status(200).json({
        success: true,
        message: 'All categories successfully listed.',
        categories,
    })
}
export const getByIdCategory = async (req, res, next) => {
    try {
        const category = await CategoryModel.findById(req.params.categoryId)
        if (!category) return next(new CustomError('Category not found', 404))
        res.status(200).json({
            success: true,
            message: 'Category successfully brought.',
            category,
        })
    } catch (err) {
        next(err)
    }
}

export const addCategory = async (req, res, next) => {
    try {
        const newCategory = await CategoryModel.create({ ...req.body })
        res.status(201).json({
            success: true,
            message: 'The category has been successfully added',
            newCategory,
        })
    } catch (err) {
        next(err)
    }
}

export const editCategory = async (req, res, next) => {
    try {
        let editCategory = await CategoryModel.findOne({
            _id: req.params.categoryId,
        })
        if (!editCategory)
            return next(new CustomError('category not found !', 404))
        editCategory.category = req.body.category
        editCategory = await editCategory.save()
        res.status(200).json({
            success: true,
            message: 'the category has been successfully updated.',
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
        message: 'the category has been successfully deleted.',
    })
}
