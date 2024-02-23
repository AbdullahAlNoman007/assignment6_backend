import { Tproduct } from "./product.interface";
import { productModel } from "./product.model";

const createProductIntoDB = async (payload: Tproduct) => {
    const result = await productModel.create(payload)
    return result;
}

const getAllProductFromDB = async () => {
    const result = await productModel.find({})
    return result
}
const getAProductFromDB = async (payload: string) => {
    const result = await productModel.findById(payload)
    return result
}
const deleteProductFromDB = async (payload: { id: string[] }) => {
    const result = await productModel.deleteMany({ _id: { $in: payload.id } })
    return result
}
const updateProductFromDB = async (id: string, payload: Partial<Tproduct>) => {

    const result = await productModel.findByIdAndUpdate(id, payload, { upsert: true })
    return result
}
const getProductFromDB = async (query: Record<string, unknown>) => {

    const { price } = query

    const page = Number(query?.page) || 1;
    const limit = Number(query?.limit) || 10;
    const skip = (page - 1) * limit;



    const lowPrice = Number((price as string)?.split("-")[0] || 0)
    const highPrice = Number((price as string)?.split("-")[1] || 1000000000000000)

    const priceQuery = productModel.find({ price: { $gte: lowPrice, $lte: highPrice } })

    const phoneSearchFields = ['model', 'brand', 'name']
    const queryObj = { ...query }

    let searchTerm = ''
    if (query?.searchTerm) {
        searchTerm = query?.searchTerm as string
    }

    const searchQuery = priceQuery.find({
        $or: phoneSearchFields.map((field) => ({
            [field]: { $regex: searchTerm, $options: 'i' }
        }))
    })

    const excludeFields = ['searchTerm', 'price', 'name', 'releaseDate', 'limit', 'page']
    excludeFields.forEach(el => delete queryObj[el])

    const filterQuery = searchQuery.find(queryObj)

    const result = await filterQuery.skip(skip).limit(limit)
    const total = await productModel.countDocuments()
    const meta = {
        total
    }


    return { meta, result }


}

export const productSerivce = {
    createProductIntoDB,
    getAllProductFromDB,
    deleteProductFromDB,
    updateProductFromDB,
    getProductFromDB,
    getAProductFromDB
}