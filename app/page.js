import { createClient } from '../libs/supabase/server';
import WaitlistForm from '../components/WaitlistForm';
import LandingHeader from '../components/LandingHeader';
import FeatureHighlights from '../components/FeatureHighlights';
import LandingFooter from '../components/LandingFooter';
import { getSEOTags, renderSchemaTags } from "../libs/seo";

export const metadata = getSEOTags({
  title: "XStats - Track Your X Growth",
  description: "Sign up for early access to XStats, your comprehensive analytics platform for X!",
  canonicalUrlRelative: "/",
});

export default function Home() {
  async function handleSubmit(formData) {
    'use server'; // Server Directive for Server Actions
    const email = formData.get('email');
    const supabase = createClient();
    
    const { error } = await supabase
      .from('leads')
      .insert({ email });
    
    if (error) {
      console.error('Error:', error.message);
      return { success: false, message: error.message };
    }
    
    return { success: true, message: 'Thanks for joining the waitlist!' };
  }

  return (
    <>
    <LandingHeader />
    <main>
      <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-blue-50 to-white px-4 pt-16 pb-12">
        <div className="max-w-md w-full p-8 bg-white rounded-xl shadow-lg border border-gray-100">
          <h1 className="text-4xl font-bold text-center text-gray-800 mb-4">
            XStats
          </h1>
          <h2 className="text-xl font-medium text-center text-blue-600 mb-6">
            Track Your X Growth
          </h2>
          <p className="text-center text-gray-600 mb-8">
            Sign up for early access to XStats, your comprehensive analytics platform for X!
          </p>
          
          <WaitlistForm handleSubmit={handleSubmit} />
          
          <p className="text-center text-gray-500 text-sm mt-6">
            Be the first to know when we launch. No spam, ever.
          </p>
        </div>
      </div>
      
      <FeatureHighlights />
      <LandingFooter />
    </main>
    </>
  );
}
