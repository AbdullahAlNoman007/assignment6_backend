import httpStatus from "http-status"
import AppError from "../Error/AppError"
import catchAsync from "../utility/trycatch"
import jwt, { JwtPayload } from 'jsonwebtoken'
import config from "../config"
import { userModel } from "../Moduler/user/user.model"
import { TUserRole } from "../Moduler/user/user.interface"
import { USER_ROLE } from "../Moduler/user/user.const"
import { managerModel, sellerModel, superAdminModel } from "../Moduler/member/member.model"

const auth = (...requiredRoles: TUserRole[]) => {
    return catchAsync(async (req, res, next) => {
        const token = req.headers.authorization;
        let decoded;

        if (!token) {
            throw new AppError(httpStatus.UNAUTHORIZED, "You do not have the necessary permissions to access this resource.")
        }
        try {
            decoded = jwt.verify(token, config.token_secret as string) as JwtPayload
        } catch (error) {
            throw new AppError(httpStatus.UNAUTHORIZED, "Token is expired");
        }


        const { id, role } = decoded

        const isUserExists = await userModel.findById(id)
        if (!isUserExists) {
            throw new AppError(httpStatus.BAD_REQUEST, "User doesn't exists!")
        }

        if (role === USER_ROLE.superAdmin) {
            const member = await superAdminModel.findOne({ user: isUserExists._id })
            if (!member) {
                throw new AppError(httpStatus.BAD_REQUEST, "Member doesn't exists!")
            }
        }
        else if (role === USER_ROLE.manager) {
            const member = await managerModel.findOne({ user: isUserExists._id })
            if (!member) {
                throw new AppError(httpStatus.BAD_REQUEST, "Member doesn't exists!")
            }
        }
        else if (role === USER_ROLE.seller) {
            const member = await sellerModel.findOne({ user: isUserExists._id })
            if (!member) {
                throw new AppError(httpStatus.BAD_REQUEST, "Member doesn't exists!")
            }
        }

        if (requiredRoles && !requiredRoles.includes(role)) {
            throw new AppError(
                httpStatus.UNAUTHORIZED,
                'You are not authorized!',
            );
        }

        req.user = decoded as JwtPayload
        next()
    })
}

export default auth
