import asyncHandler from 'express-async-handler'
// @desc Auth user/set token
// @route POST /api/users/login
// @access Public
const authUser = asyncHandler(async (req, res) => {
    res.status(200).json({message :'User Authenticated'})
})

// @desc Register a new user
// @route POST /api/user
// @access Public
const registerUser = asyncHandler(async (req,res)=>{
    res.status(200).json({message :'User Registered'})
})

export { authUser }