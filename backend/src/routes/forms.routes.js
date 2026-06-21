import { randomUUID } from 'node:crypto'
import { mkdirSync } from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { Router } from 'express'
import multer from 'multer'
import {
  submitCareerForm,
  submitContactForm,
  submitNewsletterForm,
} from '../controllers/forms.controller.js'

const router = Router()
const currentDirectory = path.dirname(fileURLToPath(import.meta.url))
const resumesDirectory = path.resolve(currentDirectory, '../../uploads/resumes')

mkdirSync(resumesDirectory, { recursive: true })

const resumeUpload = multer({
  storage: multer.diskStorage({
    destination: resumesDirectory,
    filename: (_request, file, callback) => {
      callback(null, `${randomUUID()}${path.extname(file.originalname).toLowerCase()}`)
    },
  }),
  limits: {
    fileSize: 5 * 1024 * 1024,
    files: 1,
  },
  fileFilter: (_request, file, callback) => {
    const isPdf =
      file.mimetype === 'application/pdf' &&
      path.extname(file.originalname).toLowerCase() === '.pdf'

    if (!isPdf) {
      callback(new multer.MulterError('LIMIT_UNEXPECTED_FILE', 'resume'))
      return
    }

    callback(null, true)
  },
})

function handleResumeUpload(request, response, next) {
  resumeUpload.single('resume')(request, response, error => {
    if (error) {
      response.status(400).json({
        success: false,
        message: 'Invalid resume file. Please upload a PDF up to 5MB.',
      })
      return
    }

    next()
  })
}

router.post('/contact', submitContactForm)
router.post('/career', handleResumeUpload, submitCareerForm)
router.post('/newsletter', submitNewsletterForm)

export default router
