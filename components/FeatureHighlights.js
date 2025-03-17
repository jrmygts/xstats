'use client';

const features = [
  {
    name: 'Growth Analysis',
    description: 'Track your follower growth over time with detailed charts.',
    icon: '📈',
  },
  {
    name: 'Engagement Metrics',
    description: 'Measure engagement with your content through likes, retweets, and replies.',
    icon: '📊',
  },
  {
    name: 'Competitor Insights',
    description: 'Compare your stats with other X users to benchmark your performance.',
    icon: '👥',
  },
  {
    name: 'Content Strategy',
    description: 'Get AI-powered recommendations to optimize your content strategy.',
    icon: '🚀',
  },
];

export default function FeatureHighlights() {
  return (
    <div className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center mb-12">
          <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">Features</h2>
          <p className="mt-2 text-3xl leading-8 font-bold tracking-tight text-gray-900 sm:text-4xl">
            Analytics that help you grow
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            XStats provides you with comprehensive tools to understand your X performance and grow your audience.
          </p>
        </div>

        <div className="mt-10">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            {features.map((feature) => (
              <div key={feature.name} className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white text-xl">
                    {feature.icon}
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-gray-900">{feature.name}</p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
