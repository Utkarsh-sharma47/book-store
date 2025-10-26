import express from 'express';
import {getBook } from '../controller/book.controller.js'; 

const router = express.Router();
router.get('/', getBooks);
export default router;