# NextJS x Supabase Boilerplate

## Getting Started

### Environment variables

Create the enviroment variables with the following command  
```bash
cp .env.local.dist .env.local
```

Add your keys from your [Supabase](https://app.supabase.io/) project.

```dotenv
SUPABASE_URL=XXX
SUPABASE_STORAGE=XXX
SUPABASE_ANON_KEY=XXX
```

### Install packages

Install all required packages with following command:
```bash
yarn install
```

## Development
Run the development server:

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
