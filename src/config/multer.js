import multer from 'multer'
import crypto from 'crypto'
import { extname, resolve } from 'path'

export default {
  storage: multer.diskStorage({
    destination: resolve(__dirname, ''),
    filename: '',
  })
}