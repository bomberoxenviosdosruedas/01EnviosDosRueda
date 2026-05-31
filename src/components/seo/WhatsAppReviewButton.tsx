'use client'

import React from 'react'
import { MessageCircle } from 'lucide-react'

export const WhatsAppReviewButton = () => {
  const phoneNumber = '542236602699'
  const message = 'Hola! Necesito hacer una consulta sobre los envíos.'

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactar por WhatsApp"
      className="fixed bottom-6 right-6 z-40 p-4 bg-primary hover:bg-primary/90 text-white rounded-full shadow-2xl transition-all duration-300 md:bottom-8 md:right-8"
      title="Contacto por WhatsApp"
    >
      <MessageCircle size={28} />
    </a>
  )
}
