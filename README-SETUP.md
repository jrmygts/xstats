# XStats Setup Instructions

## Supabase Setup

To set up the necessary database for XStats, follow these steps:

1. Log in to your Supabase account and access the project dashboard.

2. Go to the SQL Editor and run the following query to create the `leads` table:

```sql
-- Create a leads table to store email sign-ups
CREATE TABLE leads (
  id SERIAL PRIMARY KEY,
  email TEXT NOT NULL UNIQUE,
  created_at TIMESTAMPTZ DEFAULT now() NOT NULL
);

-- Set up Row Level Security (RLS)
ALTER TABLE leads ENABLE ROW LEVEL SECURITY;

-- Create policies
CREATE POLICY "Allow insert for all users" ON leads
  FOR INSERT TO authenticated, anon
  WITH CHECK (true);

CREATE POLICY "Allow select for authenticated users only" ON leads
  FOR SELECT TO authenticated
  USING (true);
```

3. Verify the table was created by going to the "Table Editor" section in Supabase.

## Environment Variables

Make sure your `.env.local` file includes these variables:

```
NEXT_PUBLIC_SUPABASE_URL='your-supabase-url'
NEXT_PUBLIC_SUPABASE_ANON_KEY='your-supabase-anon-key'
SUPABASE_SERVICE_ROLE_KEY='your-supabase-service-role-key'
```

## Development

To run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) to see the result.

## Deployment

Deploy to Vercel:

1. Push your code to GitHub.
2. Connect your GitHub repository to Vercel.
3. Add the environment variables in the Vercel dashboard.
4. Deploy!
