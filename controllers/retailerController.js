let retailerServices = require('../services/retailerServices');
const responseMethod = require('../lib/constants/responses');

exports.register = register;
exports.login = login;
exports.logout = logout;
exports.forgotPassword = forgotPassword;
exports.checkPasswordResetLink = checkPasswordResetLink;
exports.resetPassword = resetPassword;

function register(req, res) {
  Promise.coroutine(function* () {
    const retailerDetails = yield retailerServices.register(req.body);
    return retailerDetails
  })().then((data) => {
    return responseMethod.sendSuccess(res, null, null, data);
  }, (error) => {
    return responseMethod.sendFailure(res, error);
  });
}

function login(req, res) {
  Promise.coroutine(function* () {
    const loginData = {};
    loginData.email = req.body.email;
    loginData.password = req.body.password;
    loginData.deviceType = req.body.deviceType || null;
    loginData.deviceToken = req.body.deviceToken ||null ;
    loginResult = yield retailerServices.loginViaPassword(loginData);
    return loginResult;
  })().then((data) => {
    return responseMethod.sendSuccess(res, null, null, data);
  }, (error) => {
    return responseMethod.sendFailure(res, error);
  });
}

function forgotPassword(req, res) {
  Promise.coroutine(function* () {
    result = yield retailerServices.sendResetPasswordLink(req.body);
    return result;
  })().then((data) => {
    return responseMethod.sendSuccess(res, data);
  }, (error) => {
    return responseMethod.sendFailure(res, error);
  });
}

function logout(req, res) {
  Promise.coroutine(function* () {
    const jwtDecodedData = req.decoded;
    result = yield retailerServices.logout(jwtDecodedData);
    return result;
  })().then((data) => {
    return responseMethod.sendSuccess(res, data);
  }, (error) => {
    return responseMethod.sendFailure(res, error);
  });
}

function checkPasswordResetLink(req, res) {
  Promise.coroutine(function* () {
    result = yield retailerServices.checkPasswordResetLink(req, res);
    return result;
  })().then((data) => {
    return responseMethod.responseMessages.SUCCESS
  }, (error) => {
    return responseMethod.responseMessages.FAILURE
  });
}

function resetPassword(req, res) {
  Promise.coroutine(function* () {
    result = yield retailerServices.resetPassswordByResetLink(req, res);
    return result;
  })().then((data) => {
    return responseMethod.responseMessages.SUCCESS
  }, (error) => {
    return responseMethod.responseMessages.FAILURE
  });
}

