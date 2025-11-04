// Helper functions for Cloudflare Images integration

export interface CloudflareImageUploadResponse {
  uploadURL: string
  id: string
}

/**
 * Request a direct upload URL from your server
 * Server must have Cloudflare API credentials
 */
export async function requestUploadUrl(): Promise<CloudflareImageUploadResponse> {
  const response = await fetch('/api/create-image-upload', {
    method: 'POST',
  })

  if (!response.ok) {
    throw new Error('Failed to request upload URL')
  }

  return response.json()
}

/**
 * Upload a file to Cloudflare using the direct upload URL
 */
export async function uploadToCloudflare(
  file: File,
  uploadURL: string
): Promise<string> {
  const formData = new FormData()
  formData.append('file', file)

  const response = await fetch(uploadURL, {
    method: 'POST',
    body: formData,
  })

  if (!response.ok) {
    throw new Error('Failed to upload to Cloudflare')
  }

  const data = await response.json()
  return data.result.id
}

/**
 * Generate Cloudflare Image delivery URL with transforms
 * @param imageId - Cloudflare image ID
 * @param variant - Optional variant name (e.g., 'public', 'thumbnail')
 * @param accountHash - Your Cloudflare account hash
 */
export function getImageUrl(
  imageId: string,
  accountHash: string,
  variant: string = 'public'
): string {
  return `https://imagedelivery.net/${accountHash}/${imageId}/${variant}`
}

/**
 * Complete upload flow: request URL, upload file, return image ID
 */
export async function uploadImage(file: File): Promise<string> {
  const { uploadURL, id } = await requestUploadUrl()
  await uploadToCloudflare(file, uploadURL)
  return id
}
