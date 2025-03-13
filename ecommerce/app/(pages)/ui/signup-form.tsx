'use client'

import { signup } from "@/app/actions/register"
import { useActionState } from 'react'

export default function SignupForm() {
  const [state, action, pending] = useActionState(signup, undefined)

  return (
    <form action={action} className="max-w-md mx-auto bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-center text-gray-800 dark:text-white">Create Account</h2>

      <div className="mb-4">
        <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Name</label>
        <input
          id="name"
          name="name"
          placeholder="Your full name"
          className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
        />
        {state?.errors?.name && <p className="mt-1 text-sm text-red-500">{state.errors.name}</p>}
      </div>

      <div className="mb-4">
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Email</label>
        <input
          id="email"
          name="email"
          type="email"
          placeholder="your.email@example.com"
          className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
        />
        {state?.errors?.email && <p className="mt-1 text-sm text-red-500">{state.errors.email}</p>}
      </div>

      <div className="mb-6">
        <label htmlFor="password" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Password</label>
        <input
          id="password"
          name="password"
          type="password"
          className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
        />
        {state?.errors?.password && (
          <div className="mt-2 p-3 bg-red-50 dark:bg-red-900/20 rounded border border-red-100 dark:border-red-800">
            <p className="text-sm font-medium text-red-800 dark:text-red-400">Password must:</p>
            <ul className="mt-1 ml-4 list-disc text-sm text-red-700 dark:text-red-400">
              {state.errors.password.map((error) => (
                <li key={error}>{error}</li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <button
        disabled={pending}
        type="submit"
        className="w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white font-medium rounded-md shadow-sm transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
      >
        {pending ? 'Signing up...' : 'Sign Up'}
      </button>
    </form>
  )
}