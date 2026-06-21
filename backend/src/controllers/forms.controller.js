import { unlink } from 'node:fs/promises'
import { sendFormAlert } from '../services/email.service.js'
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

async function sendAlertSafely(formType, data) {
  try {
    const result = await sendFormAlert(formType, data)

    if (result.sent) {
      console.log(`${formType} email alert sent successfully`)
    }
  } catch (error) {
    console.error(`${formType} email alert failed:`, error.message)
  }
}

export async function submitContactForm(request, response) {
  const requiredFields = ['name', 'email', 'mobile', 'country', 'service', 'budget']
  const missingFields = getMissingFields(request.body, requiredFields)

  if (missingFields.length > 0) {
    return sendValidationError(response, missingFields)
  }

  try {
    const timestamp = new Date().toISOString()
    const contactData = {
      timestamp,
      name: clean(request.body.name),
      email: clean(request.body.email),
      mobile: clean(request.body.mobile),
      country: clean(request.body.country),
      service: clean(request.body.service),
      budget: clean(request.body.budget),
      message: clean(request.body.message),
    }

    await appendFormRow('contact', [
      contactData.timestamp,
      contactData.name,
      contactData.email,
      contactData.mobile,
      contactData.country,
      contactData.service,
      contactData.budget,
      contactData.message,
    ])

    await sendAlertSafely('contact', contactData)

    return response.status(201).json(SUCCESS_RESPONSE)
  } catch (error) {
    console.error('Contact form submission failed:', error.message)
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
    const timestamp = new Date().toISOString()
    const careerData = {
      timestamp,
      name: clean(request.body.name),
      email: clean(request.body.email),
      mobile: clean(request.body.mobile),
      position: clean(request.body.position),
      experience: clean(request.body.experience),
      location: clean(request.body.location),
      portfolio: clean(request.body.portfolio),
      resumeLink: getUploadedFileUrl(request),
      message: clean(request.body.message),
    }

    await appendFormRow('career', [
      careerData.timestamp,
      careerData.name,
      careerData.email,
      careerData.mobile,
      careerData.position,
      careerData.experience,
      careerData.location,
      careerData.portfolio,
      careerData.resumeLink,
      careerData.message,
    ])

    await sendAlertSafely('career', careerData)

    return response.status(201).json(SUCCESS_RESPONSE)
  } catch (error) {
    await removeUploadedFile(request.file)
    console.error('Career form submission failed:', error.message)
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
    const newsletterData = {
      timestamp: new Date().toISOString(),
      email: clean(request.body.email),
    }

    await appendFormRow('newsletter', [
      newsletterData.timestamp,
      newsletterData.email,
    ])

    await sendAlertSafely('newsletter', newsletterData)

    return response.status(201).json(SUCCESS_RESPONSE)
  } catch (error) {
    console.error('Newsletter form submission failed:', error.message)
    return response.status(500).json({
      success: false,
      message: 'Something went wrong',
    })
  }
}
