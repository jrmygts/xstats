'use client';

import { useState } from 'react';
import { useFormStatus } from 'react-dom';

function SubmitButton() {
  const { pending } = useFormStatus();
  
  return (
    <button
      type="submit"
      disabled={pending}
      className="w-full p-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-medium text-lg disabled:opacity-70"
    >
      {pending ? 'Submitting...' : 'Join the Waitlist'}
    </button>
  );
}

export default function WaitlistForm({ handleSubmit }) {
  const [formState, setFormState] = useState({ submitted: false, message: '' });
  
  async function onSubmit(formData) {
    const result = await handleSubmit(formData);
    
    setFormState({
      submitted: true,
      success: result.success,
      message: result.message
    });
  }
  
  if (formState.submitted && formState.success) {
    return (
      <div className="p-6 bg-green-50 rounded-lg border border-green-100">
        <h3 className="text-xl font-semibold text-green-700 text-center mb-2">
          Thanks for joining the waitlist!
        </h3>
        <p className="text-center text-green-600">
          {"We'll notify you when XStats is ready."}
        </p>
      </div>
    );
  }
  
  return (
    <form action={onSubmit} className="space-y-5">
      {formState.submitted && !formState.success && (
        <div className="p-3 bg-red-50 rounded-lg text-red-600 text-sm">
          {formState.message || 'Something went wrong. Please try again.'}
        </div>
      )}
      
      <div>
        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          required
          className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700"
        />
      </div>
      
      <SubmitButton />
    </form>
  );
}
