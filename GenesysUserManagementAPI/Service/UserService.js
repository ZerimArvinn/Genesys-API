const { Mongoose } = require('mongoose');
const User = require('../database/Models/UserModel')

module.exports.createUser = async (serviceData) => {
    // TODO -- Hash the password to make it more secure before creating user
    try {
        let user = new User({
            name: serviceData.name,
            email: serviceData.email,
            password: serviceData.password,
            lastLogin: Date.now()
        })
        return await user.save();
    } catch (error) {
        throw new Error(error);
    }
}

module.exports.getAllUsers = async () => {
    // TODO -- Implement feature to skip and limit the amount of results per request
    try {
        let users = await User.find({});
        return users;
    } catch (error) {
        throw new Error(error);
    }
}

module.exports.getUserById = async ({id}) => {
    try {
        let user = await User.findById(id);
        if(!user){
            throw new Error("User not found");
        }
        else{
            console.log(user)
            return user;
        }
    } catch (error) {
        throw new Error(error);
    }
}

module.exports.updateUser = async ({id, editInfo}) => {
    // TODO implement schemas to make sure that edit info follows proper structure e.g. {name: has to be a string etc}

    try {
        let user = await User.findOneAndUpdate({_id: id},
            editInfo,
            {new: true}
            );
        return("User Updated: ", user);
    } catch (error) {
        throw new Error(error);
    }
}

module.exports.deleteUser = async ({id}) => {
    try {
        let user = await User.findByIdAndDelete(id)
        return("User Deleted Successfully");
    } catch (error) {
        throw new Error(error);
    }
}

module.exports.logIn = async ({email, password}) => {
    // TODO -- Implement encrypting and decrypting passwords, add authentication token
    // console.log(password)
    // console.log(email);
    try {
        let user = await User.findOne({email});
        console.log(user)
        if(!user){
            return("User not found");
        }
        console.log(Date.now());
        // if passwords match, login
        if(user.password == password){
            user.update({lastLogin: Date.now()});
            console.log("in update");
            return ("User Logged in");
        }
        else{
            return("Password incorrect");
        }
    } catch (error) {
        throw new Error(error);
    }
}




