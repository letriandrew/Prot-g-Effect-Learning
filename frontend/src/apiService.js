import axios from 'axios';


const API_URL = "http://localhost:8000" // probs better to use .env to store this

const apiService = axios.create({
    baseURL: API_URL,
    headers: {
        "Content-Type": "application/json",
    },
    withCredentials: true // added for when we get to the jwt usage with cookies
});

async function signUpUser(body){
    try {
        const response = await apiService.post('/users',{
            email: body.email,
            name: body.name,
            password: body.password
        })
        return response
    } catch (error) {
        console.error("Error during user sign up:", error);
        return error;
    }
}

async function signInUser(body){
    try {
        const response = await apiService.post('/auth/login',{
            email: body.email,
            password: body.password
        })
        return response
    } catch (error) {
        console.error("Error during user sign in:", error);
        return error;
    }
}

async function signOutUser(){
    try {
        const response = await apiService.get('/auth/logout')
        return response
    } catch (error) {
        console.error("Error during user sign out:", error);
        return error;
    }
}

async function verifyToken(){
    try {
        const response = await apiService.get('/auth/verifyToken')
        return response
    } catch (error) {
        console.error("Verification error:", error);
        return error;
    }
}

async function getStudySets(){
    try {
        const response = await apiService.get('/study-set/get-sets')
        return response
    } catch (error) {
        console.error("Error Retrieving study sets:", error);
        return error;
    }
}

async function handleQuestionComplete(new_id_list){
    try {
        const response = await apiService.patch('/question/handle-complete',{
            id_list: new_id_list
        })
        return response
    } catch (error) {
        console.error("Error updating question completion status:", error);
        return error;
    }
}

export {signUpUser, signInUser, signOutUser, verifyToken, getStudySets, handleQuestionComplete}