import { unlink } from 'node:fs/promises'
import { appendFormRow } from '../services/googleSheets.service.js'

const SUCCESS_RESPONSE = {
  success: true,
  message: 'Form submitted successfully',
}

function clean(value) {
  return typeof value === 'string' ? value.trim() : ''
}

function getMissingFields(data, requiredFields) {
  return requiredFields.filter(field => !clean(data[field]))
}

function sendValidationError(response, fields) {
  return response.status(400).json({
    success: false,
    message: 'Missing required fields',
    fields,
  })
}

function getUploadedFileUrl(request) {
  if (!request.file) {
    return clean(request.body.resumeLink)
  }

  return `${request.protocol}://${request.get('host')}/uploads/resumes/${request.file.filename}`
}

async function removeUploadedFile(file) {
  if (!file) {
    return
  }

  try {
    await unlink(file.path)
  } catch (error) {
    console.error('Unable to remove uploaded resume:', error)
  }
}

export async function submitContactForm(request, response) {
  const requiredFields = ['name', 'email', 'mobile', 'country', 'service', 'budget']
  const missingFields = getMissingFields(request.body, requiredFields)

  if (missingFields.length > 0) {
    return sendValidationError(response, missingFields)
  }

  try {
    await appendFormRow('contact', [
      new Date().toISOString(),
      clean(request.body.name),
      clean(request.body.email),
      clean(request.body.mobile),
      clean(request.body.country),
      clean(request.body.service),
      clean(request.body.budget),
      clean(request.body.message),
    ])

    return response.status(201).json(SUCCESS_RESPONSE)
  } catch (error) {
    console.error('Contact form submission failed:', error)
    return response.status(500).json({
      success: false,
      message: 'Something went wrong',
    })
  }
}

export async function submitCareerForm(request, response) {
  const requiredFields = ['name', 'email', 'mobile', 'position', 'experience']
  const missingFields = getMissingFields(request.body, requiredFields)

  if (missingFields.length > 0) {
    await removeUploadedFile(request.file)
    return sendValidationError(response, missingFields)
  }

  try {
    await appendFormRow('career', [
      new Date().toISOString(),
      clean(request.body.name),
      clean(request.body.email),
      clean(request.body.mobile),
      clean(request.body.position),
      clean(request.body.experience),
      clean(request.body.location),
      clean(request.body.portfolio),
      getUploadedFileUrl(request),
      clean(request.body.message),
    ])

    return response.status(201).json(SUCCESS_RESPONSE)
  } catch (error) {
    await removeUploadedFile(request.file)
    console.error('Career form submission failed:', error)
    return response.status(500).json({
      success: false,
      message: 'Something went wrong',
    })
  }
}

export async function submitNewsletterForm(request, response) {
  const missingFields = getMissingFields(request.body, ['email'])

  if (missingFields.length > 0) {
    return sendValidationError(response, missingFields)
  }

  try {
    await appendFormRow('newsletter', [
      new Date().toISOString(),
      clean(request.body.email),
    ])

    return response.status(201).json(SUCCESS_RESPONSE)
  } catch (error) {
    console.error('Newsletter form submission failed:', error)
    return response.status(500).json({
      success: false,
      message: 'Something went wrong',
    })
  }
}
