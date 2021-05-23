import {
    filterQueryMethod,
    sortQueryMethod,
    paginationQueryMethod,
} from '../../helpers/query/queryMethods'
import ProductModel from '../../models/product'
import CategoryModel from '../../models/category'

export default async (req, res, next) => {
    try {
        let category = await CategoryModel.findOne(
            {
                slugCategory: req.params.slugCategory,
            },
            { _id: 1 }
        )

        let searchCount, defaultCount
        let query = ProductModel.find({ category:category._id })
        const filterKeys = ['gender', 'color', 'name', 'price']
        const filterObject = filterQueryMethod(filterKeys, query, req) //search query
        if (filterObject.filter) {
            filterObject.filter['category'] = category._id
            searchCount = await ProductModel.countDocuments(filterObject.filter)
            console.log(searchCount+"asdasda")
        } else {
            defaultCount = await ProductModel.find().countDocuments({
                category: req.params.category,
            })
            console.log(defaultCount+"asdasdas")
        }

        query = filterObject.query
        query = sortQueryMethod(req, query)
        const paginationObject = paginationQueryMethod(
            searchCount || defaultCount,
            req,
            query
        )
        query = paginationObject.query
        req.getProductsByCategoryQuery = query
        req.isEndIndex = paginationObject.isEndIndex
        next()
    } catch (err) {
        next(err)
    }
}
