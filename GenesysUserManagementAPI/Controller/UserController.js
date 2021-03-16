const express = require('express');
const userService = require('../Service/UserService');

module.exports.createUser = async (req, res) => {
    // TODO - return correct status codes and message if request succeeded, otherwise return error status code and message
    // implement feature in which users can't sign up with the same email if it is already in the database

    try {
        const serviceResponse = await userService.createUser(req.body);
        return res.send("Created User");
    } catch(error){
        return(error);
    }
}

module.exports.viewUsers = async (req, res) => {
    // TODO - return correct status codes and message if request succeeded, otherwise return error status code and message

    try {
        const serviceResponse = await userService.getAllUsers(req.query);
        return res.send(serviceResponse);
    } catch(error){
        return(error);
    }
}

module.exports.getUserById = async (req, res) => {
    // TODO - return correct status codes and message if request succeeded, otherwise return error status code and message
    try {
        const serviceResponse = await userService.getUserById(req.params);
        return res.send(serviceResponse);
    } catch(error){
        return(error);
    }
}

module.exports.updateUser = async (req, res) => {
    // TODO - return correct status codes and message if request succeeded, otherwise return error status code and message
    try {
        const serviceResponse = await userService.updateUser({
            id: req.params.id,
            editInfo: req.body
        });
        return res.send(serviceResponse);
    } catch(error){
        return(error);
    }
}

module.exports.deleteUser = async (req, res) => {
    // TODO - return correct status codes and message if request succeeded, otherwise return error status code and message
    try {
        const serviceResponse = await userService.deleteUser(req.params);
        return res.send(serviceResponse);
    } catch(error){
        return(error);
    }
}

module.exports.logIn = async (req, res) => {
    // TODO - return correct status codes and message if request succeeded, otherwise return error status code and message
    console.log("here");
    try {
        const serviceResponse = await userService.logIn(req.body);
        return res.send(serviceResponse);
    } catch(error){
        return(error);
    }
}




