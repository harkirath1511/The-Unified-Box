import { asyncHandler } from "../utils/asyncHandler.js";
import {auth} from '../utils/better-auth.js'



const manualRegister = asyncHandler(async (req, res) => {
    
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
        return res.status(400).json({
            success: false,
            message: "All fields are required"
        });
    }

    const result = await auth.api.signUpEmail({
        body : {
            name,
            email,
            password
        }
    });

    if(result.error){
        return res.status(400).json({message: result.error.message});
    }

    return res
    .status(201)
    .json({success: true, message: "User registered successfully", data: result.data});

});

const googleSignup = asyncHandler(async (req, res) => {

    const result = await auth.api.signInSocial({
        body : {
        provider : 'google',
        redirectTo : 'http://localhost:5173/auth/callback'
        }
    });
    
    if(result.error){
        return res.status(400).json({message: result.error.message});
    }   

    return res
    .status(200)
    .json({success: true, message: "Google sign-in initiated", data: result});

});

// const handleGoogleCallback = asyncHandler(async (req, res) => {
//     const result = await auth.api.callbackOAuth({
//         body : {
//             provider : 'google',
//             code : req.query.code,
//             state : req.query.state,
//         }
//     });

//     if(result.error){
//         return res.status(400).json({message: result.error.message});
//     }   

//     return res
//     .status(200)
//     .json({success: true, message: "Google sign-in successful", data: result});

// });


export {
    manualRegister,
    googleSignup,
    
}

