'use client'

import { useState } from 'react'

interface NewsletterFormProps {
  variant?: 'default' | 'large'
}

export default function NewsletterForm({ variant = 'default' }: NewsletterFormProps) {
  const [email, setEmail] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setIsSubmitted(true)
      // Here you would typically send the email to your newsletter service
      console.log('Newsletter signup:', email)
      setTimeout(() => {
        setIsSubmitted(false)
        setEmail('')
      }, 3000)
    }
  }

  if (variant === 'large') {
    return (
      <form onSubmit={handleSubmit} suppressHydrationWarning>
        <input 
          type="email" 
          placeholder="Your email" 
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          suppressHydrationWarning
          style={{ 
            width: '100%', 
            padding: '15px 20px', 
            border: '2px solid #ddd', 
            borderRadius: '8px', 
            fontSize: '1rem', 
            background: '#fff', 
            color: '#5F5F5F',
            marginBottom: '15px'
          }}
        />
        <button 
          type="submit" 
          disabled={isSubmitted}
          suppressHydrationWarning
          style={{
            background: isSubmitted ? '#4CAF50' : '#B75528',
            color: '#fff',
            border: 'none',
            padding: '15px 30px',
            borderRadius: '8px',
            fontWeight: '600',
            textTransform: 'uppercase',
            letterSpacing: '1px',
            cursor: isSubmitted ? 'default' : 'pointer',
            transition: 'background-color 0.3s',
            width: '100%'
          }}
        >
          {isSubmitted ? '✓ Subscribed!' : 'Subscribe'}
        </button>
      </form>
    )
  }

  return (
    <form onSubmit={handleSubmit} suppressHydrationWarning>
      <input 
        type="email" 
        placeholder="Your email" 
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        suppressHydrationWarning
        style={{ 
          width: '100%', 
          padding: '10px', 
          borderRadius: '4px', 
          border: '1px solid #555', 
          background: '#444', 
          color: 'white',
          marginBottom: '10px'
        }}
      />
      <button 
        type="submit" 
        disabled={isSubmitted}
        suppressHydrationWarning
        style={{
          background: isSubmitted ? '#4CAF50' : '#B75528',
          color: '#fff',
          border: 'none',
          padding: '10px 20px',
          borderRadius: '4px',
          fontWeight: '600',
          fontSize: '0.8rem',
          textTransform: 'uppercase',
          letterSpacing: '1px',
          cursor: isSubmitted ? 'default' : 'pointer',
          transition: 'background-color 0.3s',
          width: '100%'
        }}
      >
        {isSubmitted ? '✓ Subscribed!' : 'Subscribe'}
      </button>
    </form>
  )
} 