/* eslint-disable @typescript-eslint/no-unused-vars */
import { NextFunction, Request, Response } from "express"
import { catchAsync } from "../../utils/catchAsync"

const createDivision = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
//     const user = await UserServices.createUser(req.body)
//     sendResponse(res, {
//         success: true,
//         statusCode: httpStatus.CREATED,
//         message: "User Created Successfully",
//         data: user,
//     })
console.log(req,res)
})


export const DivisionControllers = {
    createDivision,

}