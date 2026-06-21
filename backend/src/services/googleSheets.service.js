import { getGoogleSheetsClient } from '../config/googleSheets.js'
import { existsSync, readFileSync } from 'node:fs'
import path from 'node:path'

const SHEET_RANGES = {
  contact: "'Contact Requests'!A:H",
  career: "'Career Applications'!A:J",
  newsletter: "'Newsletter Subscribers'!A:B",
}

export async function appendFormRow(formType, values) {
  const spreadsheetId = process.env.GOOGLE_SHEET_ID
  const range = SHEET_RANGES[formType]
  const credentialsPath = process.env.GOOGLE_APPLICATION_CREDENTIALS
  const resolvedCredentialsPath = credentialsPath
    ? path.resolve(process.cwd(), credentialsPath)
    : ''
  const credentialsExist = Boolean(
    resolvedCredentialsPath && existsSync(resolvedCredentialsPath),
  )
  let clientEmail = ''

  if (credentialsExist) {
    try {
      const credentials = JSON.parse(readFileSync(resolvedCredentialsPath, 'utf8'))
      clientEmail = credentials.client_email || ''
    } catch (error) {
      clientEmail = `Unable to read client_email: ${error.message}`
    }
  }

  console.log('Google Sheets append debug:', {
    processCwd: process.cwd(),
    spreadsheetIdLength: spreadsheetId?.length || 0,
    spreadsheetId,
    resolvedCredentialsPath,
    credentialsExist,
    clientEmail,
    range,
  })

  if (!spreadsheetId) {
    throw new Error('GOOGLE_SHEET_ID is not configured')
  }

  if (!range) {
    throw new Error(`Unsupported form type: ${formType}`)
  }

  const sheets = getGoogleSheetsClient()

  await sheets.spreadsheets.values.append({
    spreadsheetId,
    range,
    valueInputOption: 'USER_ENTERED',
    insertDataOption: 'INSERT_ROWS',
    requestBody: {
      values: [values],
    },
  })
}
