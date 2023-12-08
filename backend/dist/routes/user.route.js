"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_controller_1 = require("../controllers/user.controller");
const login_controller_1 = require("../controllers/login.controller");
const router = (0, express_1.Router)();
router.post('/registro/user', user_controller_1.userController.create);
router.post('/login/user', login_controller_1.loginController.login);
exports.default = router;
//# sourceMappingURL=user.route.js.map