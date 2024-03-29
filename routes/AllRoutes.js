const routes = require("express").Router();

routes.use("/api/city", (require("../controllers/CityController")));
routes.use("/api/country", (require("../controllers/CountryController")));
routes.use("/api/signup", (require("../controllers/SignupController")));
routes.use("/api/auth", (require("../controllers/AuthController")));
routes.use("/api/user-profile", (require("../controllers/UserProfileController")));
routes.use("/api/admin-auth", (require("../controllers/AdminAuthController")))
routes.use("/api/category", (require("../controllers/CategoryController")))
routes.use("/api/subcategory", (require("../controllers/SubCategoryController")))

module.exports = routes;