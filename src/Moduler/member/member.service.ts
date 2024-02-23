import { TupdatePayload } from "./member.interface"
import { managerModel, sellerModel, superAdminModel } from "./member.model"

const getAllSuperAdminIntoDB = async () => {
    const result = await superAdminModel.find({});
    return result;
}
const getAllManagerIntoDB = async () => {
    const result = await managerModel.find({});
    return result;
}
const getAllSellerIntoDB = async () => {
    const result = await sellerModel.find({});
    return result;
}


const getASuperAdminIntoDB = async (id: string) => {
    const result = await superAdminModel.findById(id);
    return result;
}
const getAManagerIntoDB = async (id: string) => {
    const result = await managerModel.findById(id);
    return result;
}
const getASellerIntoDB = async (id: string) => {
    const result = await sellerModel.findById(id);
    return result;
}


const updateSuperAdminIntoDB = async (payload: TupdatePayload, id: string) => {
    const result = await superAdminModel.findByIdAndUpdate(id, payload);
    return result;
}
const updateManagerIntoDB = async (payload: TupdatePayload, id: string) => {
    const result = await managerModel.findByIdAndUpdate(id, payload);
    return result;
}
const updateSellerIntoDB = async (payload: TupdatePayload, id: string) => {
    const result = await sellerModel.findByIdAndUpdate(id, payload);
    return result;
}


const deleteSuperAdminIntoDB = async (id: string) => {
    const result = await superAdminModel.findByIdAndDelete(id);
    return result;
}
const deleteManagerIntoDB = async (id: string) => {
    const result = await managerModel.findByIdAndDelete(id);
    return result;
}
const deleteSellerIntoDB = async (id: string) => {
    const result = await sellerModel.findByIdAndDelete(id);
    return result;
}

export const memberService = {
    getAllManagerIntoDB,
    getAllSellerIntoDB,
    getAllSuperAdminIntoDB,
    getAManagerIntoDB,
    getASellerIntoDB,
    getASuperAdminIntoDB,
    updateManagerIntoDB,
    updateSuperAdminIntoDB,
    updateSellerIntoDB,
    deleteManagerIntoDB,
    deleteSuperAdminIntoDB,
    deleteSellerIntoDB
}