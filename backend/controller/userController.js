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
// @desc logout user
// @route POST /api/users/logout
// @access Public
const logoutUser = asyncHandler(async (req,res)=>{
    res.status(200).json({message :'User Logged Out'})
}
)
// @desc get user profile
// @route GET /api/users/profile
// @access Private
const getUserProfile = asyncHandler(async (req,res)=>{
    res.status(200).json({message :'User Profile'})
}
)
// @desc update user profile
// @route PUT /api/users/profile
// @access Private
const updateUserProfile = asyncHandler(async (req,res)=>{
    res.status(200).json({message :'User Profile Updated'})
}
)
export { authUser, registerUser, logoutUser, getUserProfile, updateUserProfile }