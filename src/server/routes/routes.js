import express from 'express'
import userController from '../controllers/userController'
import authController from '../controllers/authController'
import businessController from '../controllers/businessController'
import productController from '../controllers/productController'
import orderController from'../controllers/orderController'

const router = express.Router()

// router.get('/', (req, res)=>{
//    res.send('Server is up and running')
//    res.send(productController.read)
// })
// router.route('/').get(productController.FeaturedItems, productController.getProducts, productController.listCategories, productController.listLatest, productController.read)
/**
 * User Routes
 */
router.post('/api/signup', userController.signUp)
router.post('/api/v1/auth/login', authController.signin)
router.get('/api/auth/user/:userId', authController.requireSignin, authController.hasAuthorization, authController.grantAccess('readAny','profile'), userController.getUser)
router.get('/api/auth/users', authController.requireSignin,  authController.grantAccess('readAny', 'profile'),  userController.getUsers)
router.put('/api/auth/user/:userId', authController.requireSignin, authController.hasAuthorization, authController.grantAccess('updateAny','profile'), userController.updateUser)
router.delete('/api/auth/user/:userId', authController.requireSignin, authController.hasAuthorization, authController.grantAccess('deleteAny','profile'), userController.deleteUser)
router.route('/api/auth/auth/signout').get(userController.signOut)
router.param('userId', userController.getUser)
// End of User Routes
/**
 * Company/ Business Routes
 */
router.post('/api/register/business', businessController.createBusiness )
router.get('/api/businesses',  authController.requireSignin, authController.hasAuthorization, authController.grantAccess('readAny', 'business'), businessController.getBusinesses)
router.get('/api/business/:businessId',  authController.requireSignin, authController.grantAccess('readAny', 'business'), businessController.getBusiness,)
router.put('/api/business/:businessId', authController.requireSignin, authController.grantAccess('updateAny', 'business'), businessController.updateBusiness)
router.delete('/api/business/:businessId', businessController.deleteBusiness, authController.requireSignin)

/**
 * Product Routes
 * list, create, update and delete routes here....
 */
router.route('/api/new/product')
      .post(authController.requireSignin, authController.grantAccess('create','product'), productController.createProduct)
router.route('/api/products')
      .get(productController.list)
router.route('/api/product/:productId')
      .get( productController.read)
router.route('/api/product/:productId')
      .put(authController.requireSignin, authController.grantAccess('deleteAny','product'), productController.updateProduct)
router.route('/api/product/:productId')
      .delete( authController.requireSignin, productController.deleteProduct)
router.route('/api/products/by/:businessId')
      .post(authController.requireSignin, productController.createProduct)
      .get(productController.listByBusiness)
router.route('/api/products/latest')
      .get(productController.listLatest)
router.route('/api/products/related/:productId')
      .get(productController.listRelated)
router.route('/api/products/categories')
      .get(productController.listCategories)
router.route('/api/product/image/:productId')
      .get(productController.photo, productController.defaultPhoto)
router.route('/api/product/defaultPhoto')
      .get(productController.defaultPhoto)
router.route('/api/product/:businessId/:productId')
      .put(authController.requireSignin, productController.updateProduct)
      .delete(authController.requireSignin, productController.deleteProduct)
router.param('businessId', businessController.getBusiness)
router.param('productId', productController.getProductById)

/**
 * Order Routes
 */
router.route('/api/create/new/orders/:userId')
.post(authController.requireSignin, productController.decreaseQuantity, orderController.createOrder )
router.route('/api/orders/business/:businessId')
.get(authController.requireSignin, orderController.listByShop)
export default router;