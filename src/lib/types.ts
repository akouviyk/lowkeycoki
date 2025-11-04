// Firestore Type Definitions and Helper Functions

import { Timestamp } from 'firebase/firestore'

// Menu Item
export interface MenuItem {
  id?: string
  name: string
  description: string
  price: number
  imageId?: string // Cloudflare image ID
  category: 'signature' | 'classic' | 'premium'
  tags: string[]
  popular: boolean
  available: boolean
  createdAt: Timestamp
  updatedAt: Timestamp
}

// Event
export interface Event {
  id?: string
  title: string
  description: string
  dj: string
  startAt: Timestamp
  endAt: Timestamp
  capacity: number
  ticketsSold: number
  imageId?: string // Cloudflare image ID
  price?: number
  status: 'upcoming' | 'ongoing' | 'completed' | 'cancelled'
  tags: string[]
  createdAt: Timestamp
  updatedAt: Timestamp
}

// Reservation
export interface Reservation {
  id?: string
  userId?: string
  name: string
  email: string
  phone: string
  date: Timestamp
  time: string
  partySize: number
  notes?: string
  status: 'pending' | 'confirmed' | 'cancelled' | 'completed'
  depositPaid: boolean
  depositAmount?: number
  stripePaymentId?: string
  createdAt: Timestamp
  updatedAt: Timestamp
}

// User
export interface User {
  id?: string
  uid: string
  displayName?: string
  email: string
  phone?: string
  photoURL?: string
  roles: ('admin' | 'staff' | 'customer')[]
  reservations?: string[] // Array of reservation IDs
  createdAt: Timestamp
  updatedAt: Timestamp
}

// Gallery Image
export interface GalleryImage {
  id?: string
  imageId: string // Cloudflare image ID
  category: 'hookah' | 'sunset' | 'events' | 'beach' | 'food' | 'drinks'
  caption?: string
  alt: string
  featured: boolean
  order: number
  uploadedBy?: string // User ID
  createdAt: Timestamp
}

// Private Event Inquiry
export interface EventInquiry {
  id?: string
  name: string
  email: string
  phone: string
  eventType: string
  message: string
  status: 'new' | 'contacted' | 'quoted' | 'booked' | 'declined'
  estimatedGuests?: number
  preferredDate?: Timestamp
  budget?: string
  createdAt: Timestamp
  updatedAt: Timestamp
}

// Site Settings
export interface SiteSettings {
  id: 'site' // Always use 'site' as the document ID
  businessName: string
  phone: string
  email: string
  address: {
    street: string
    city: string
    state: string
    zip: string
    country: string
  }
  hours: {
    [key: string]: { // Day of week
      open: string
      close: string
      closed: boolean
    }
  }
  socialMedia: {
    instagram?: string
    facebook?: string
    twitter?: string
  }
  features: {
    reservationsEnabled: boolean
    eventsEnabled: boolean
    galleryEnabled: boolean
    depositsRequired: boolean
  }
  updatedAt: Timestamp
}

// Helper function to convert Firestore data
export function convertTimestamps<T>(data: any): T {
  const converted: any = { ...data }
  
  Object.keys(converted).forEach(key => {
    if (converted[key] && typeof converted[key].toDate === 'function') {
      converted[key] = converted[key].toDate()
    }
  })
  
  return converted as T
}

// Example usage in components:
/*
import { collection, addDoc, getDocs, query, where } from 'firebase/firestore'
import { db } from '@/lib/firebase'
import { MenuItem, Event, Reservation } from '@/lib/types'

// Add a menu item
const addMenuItem = async (item: Omit<MenuItem, 'id' | 'createdAt' | 'updatedAt'>) => {
  const docRef = await addDoc(collection(db, 'menus'), {
    ...item,
    createdAt: Timestamp.now(),
    updatedAt: Timestamp.now(),
  })
  return docRef.id
}

// Get all events
const getEvents = async () => {
  const q = query(collection(db, 'events'), where('status', '==', 'upcoming'))
  const snapshot = await getDocs(q)
  return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as Event))
}

// Create reservation
const createReservation = async (reservation: Omit<Reservation, 'id' | 'createdAt' | 'updatedAt'>) => {
  const docRef = await addDoc(collection(db, 'reservations'), {
    ...reservation,
    status: 'pending',
    depositPaid: false,
    createdAt: Timestamp.now(),
    updatedAt: Timestamp.now(),
  })
  return docRef.id
}
*/
