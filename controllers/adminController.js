let adminServices = require('../services/adminServices');
const responseMethod = require('../lib/constants/responses');

exports.register = register;
exports.login = login;
exports.forgotPassword = forgotPassword;
exports.checkPasswordResetLink = checkPasswordResetLink;
exports.resetPassword = resetPassword;
//Admin Profile Management Controller
exports.changePassword = changePassword;
exports.getProfile = getProfile;
exports.editProfile = editProfile;

function register(req, res) {
  Promise.coroutine(function* () {
    const registerResult = yield adminServices.registerAdmin(req.body);
    return registerResult
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
    loginResult = yield adminServices.loginViaPassword(loginData);
    return loginResult;
  })().then((data) => {
    return responseMethod.sendSuccess(res, null, null, data);
  }, (error) => {
    return responseMethod.sendFailure(res, error);
  });
}
function forgotPassword(req, res) {
  Promise.coroutine(function* () {
    result = yield adminServices.sendResetPasswordLink(req.body);
    return result;
  })().then((data) => {
    return responseMethod.sendSuccess(res, data);
  }, (error) => {
    return responseMethod.sendFailure(res, error);
  });
}
function checkPasswordResetLink(req, res) {
  Promise.coroutine(function* () {
    result = yield adminServices.checkPasswordResetLink(req, res);
    return result;
  })().then((data) => {
    return responseMethod.responseMessages.SUCCESS
  }, (error) => {
    return responseMethod.responseMessages.FAILURE
  });
}
function resetPassword(req, res) {
  Promise.coroutine(function* () {
    result = yield adminServices.resetPassswordByResetLink(req, res);
    return result;
  })().then((data) => {
    return responseMethod.responseMessages.SUCCESS
  }, (error) => {
    return responseMethod.responseMessages.FAILURE
  });
}
function changePassword(req, res) {
  Promise.coroutine(function* () {
    const jwtDecodedData = req.decoded;
    result = yield adminServices.changePassword(req.body, jwtDecodedData);
    return result;
  })().then((data) => {
    return responseMethod.sendSuccess(res, data);
  }, (error) => {
    return responseMethod.sendFailure(res, error);
  });
}
function getProfile(req, res) {
  Promise.coroutine(function* () {
    const jwtDecodedData = req.decoded;
    const result = yield adminServices.getProfile(jwtDecodedData);
    return result
  })().then((data) => {
    return responseMethod.sendSuccess(res, null, null, data);
  }, (error) => {
    return responseMethod.sendFailure(res, error);
  });
}
function editProfile(req, res) {
  Promise.coroutine(function* () {
    const jwtDecodedData = req.decoded;
    const result = yield adminServices.editProfile(req.body, jwtDecodedData);
    return result
  })().then((data) => {
    return responseMethod.sendSuccess(res, null, null, data);
  }, (error) => {
    return responseMethod.sendFailure(res, error);
  });
}
