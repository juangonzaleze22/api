import { Router } from 'express';
import * as productsController from '../controllers/products.controller';
import  {authJwt} from '../middlewares';

const router = Router();

router.post('/', [authJwt.verifyToken, authJwt.isAdmin ], productsController.createProdurcts)

router.get('/', productsController.getProducts)

router.get('/:productId', productsController.getProductsById)

router.put('/:productId', [authJwt.verifyToken, authJwt.isAdmin ], productsController.updateProductsById)

router.delete('/:productId', productsController.deleteProductsById)


export default router;