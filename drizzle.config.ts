import { defineConfig } from 'drizzle-kit'


export default defineConfig({
    schema: './utils/schema.ts',
    dialect: 'postgresql',
    dbCredentials: {
      url:'postgresql://demo_owner:HPl09nrLSJgY@ep-dry-bush-a5lmdmhy.us-east-2.aws.neon.tech/ai-interview-mocker?sslmode=require'
    },
    verbose: true,
    strict: true
  })
