'use client'

import { useState } from 'react'
import { uploadImage } from '@/lib/cloudflare'
import { Upload, X, Check } from 'lucide-react'

export default function ImageUploader() {
  const [file, setFile] = useState<File | null>(null)
  const [preview, setPreview] = useState<string | null>(null)
  const [uploading, setUploading] = useState(false)
  const [uploadedId, setUploadedId] = useState<string | null>(null)
  const [error, setError] = useState<string | null>(null)

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0]
    if (selectedFile) {
      setFile(selectedFile)
      setError(null)
      setUploadedId(null)
      
      // Create preview
      const reader = new FileReader()
      reader.onloadend = () => {
        setPreview(reader.result as string)
      }
      reader.readAsDataURL(selectedFile)
    }
  }

  const handleUpload = async () => {
    if (!file) return

    setUploading(true)
    setError(null)

    try {
      const imageId = await uploadImage(file)
      setUploadedId(imageId)
      
      // Here you would save the imageId to Firestore
      // Example: await addDoc(collection(db, 'gallery'), { imageId, category: 'hookah' })
      
      console.log('Uploaded successfully! Image ID:', imageId)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Upload failed')
      console.error('Upload error:', err)
    } finally {
      setUploading(false)
    }
  }

  const handleReset = () => {
    setFile(null)
    setPreview(null)
    setUploadedId(null)
    setError(null)
  }

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 max-w-md">
      <h3 className="text-2xl font-bold text-midnight mb-4">Upload Image</h3>
      
      {/* Upload Area */}
      {!preview ? (
        <label className="flex flex-col items-center justify-center w-full h-64 border-2 border-dashed border-teal/30 rounded-lg cursor-pointer hover:border-coral transition-colors">
          <div className="flex flex-col items-center justify-center pt-5 pb-6">
            <Upload className="w-12 h-12 text-teal/50 mb-3" />
            <p className="mb-2 text-sm text-midnight/70">
              <span className="font-semibold">Click to upload</span> or drag and drop
            </p>
            <p className="text-xs text-midnight/50">PNG, JPG, GIF up to 10MB</p>
          </div>
          <input
            type="file"
            className="hidden"
            accept="image/*"
            onChange={handleFileSelect}
          />
        </label>
      ) : (
        <div className="space-y-4">
          {/* Preview */}
          <div className="relative">
            <img
              src={preview}
              alt="Preview"
              className="w-full h-64 object-cover rounded-lg"
            />
            {!uploadedId && (
              <button
                onClick={handleReset}
                className="absolute top-2 right-2 p-2 bg-midnight/80 rounded-full hover:bg-midnight transition-colors"
              >
                <X className="text-sand" size={20} />
              </button>
            )}
          </div>

          {/* File info */}
          <div className="text-sm text-midnight/70">
            <p className="font-medium">{file?.name}</p>
            <p>{(file!.size / 1024 / 1024).toFixed(2)} MB</p>
          </div>

          {/* Upload button or success message */}
          {!uploadedId ? (
            <button
              onClick={handleUpload}
              disabled={uploading}
              className="w-full bg-coral hover:bg-coral/90 text-white py-3 rounded-lg font-medium transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {uploading ? (
                <>
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  Uploading...
                </>
              ) : (
                <>
                  <Upload size={20} />
                  Upload to Cloudflare
                </>
              )}
            </button>
          ) : (
            <div className="bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-lg flex items-center gap-2">
              <Check size={20} />
              <div>
                <p className="font-medium">Upload successful!</p>
                <p className="text-xs mt-1">Image ID: {uploadedId}</p>
              </div>
            </div>
          )}

          {/* Error message */}
          {error && (
            <div className="bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded-lg text-sm">
              {error}
            </div>
          )}

          {/* Reset button after success */}
          {uploadedId && (
            <button
              onClick={handleReset}
              className="w-full border-2 border-teal text-teal py-3 rounded-lg font-medium hover:bg-teal hover:text-white transition-all"
            >
              Upload Another
            </button>
          )}
        </div>
      )}
    </div>
  )
}
