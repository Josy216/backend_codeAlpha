import express from 'express';
const router = express.Router();
import { install } from '../controllers/install.js';
import { register } from '../controllers/register.js';
import { login } from '../controllers/login.js';
import { DeleteUser } from '../controllers/Reset.js';
import { addproducts, deleteProduct, getProductById, getproducts, updateProduct } from '../controllers/addproducts.js';

router.get('/install', install);
router.post('/register', register);
router.post('/login', login);
router.delete('/login/:id', DeleteUser);

// Product routes
router.post('/products', addproducts);
router.get('/products', getproducts); // Get all products
router.get('/products/:id', getProductById); // Get single product
router.put('/products/:id', updateProduct); // Update product
router.delete('/products/:id', deleteProduct); // Delete product

export { router };