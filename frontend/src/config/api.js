const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000'

export const API_ENDPOINTS = {
  contact: `${API_BASE_URL}/api/forms/contact`,
  career: `${API_BASE_URL}/api/forms/career`,
  newsletter: `${API_BASE_URL}/api/forms/newsletter`,
}
