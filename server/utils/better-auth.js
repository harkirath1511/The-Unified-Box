import { PrismaClient } from "@prisma/client";
import {prismaAdapter} from 'better-auth/adapters/prisma'
import {betterAuth} from 'better-auth';

const prisma = new PrismaClient();

const auth = betterAuth({

    database: prismaAdapter(prisma, {
        provider: "postgresql",
        models: {
            user: {
                model: "User",
                fields: {
                    id: "id",
                    name: "name",
                    email: "email",    
                    password: "password",
                    image: "image",
                    emailVerified: "emailVerified",  
                }
            },
            account: {
                model: "Account"
            },
            session: {
                model: "Session"
            },
           verification: {
             model: "Verification",
              fields: {
                id: "id",
                identifier: "identifier",
                token: "token",
                expires: "expiresAt",
                createdAt: "createdAt",
                updatedAt: "updatedAt"
    }
}
        },
        
    }),
    emailAndPassword: {
        enabled: true,
        requireEmailVerification: false,
        minimumPasswordLength: 6
    },
    socialProviders: {
        google: {
            prompt: 'select_account',
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET
        }
    },
    secret: process.env.BETTER_AUTH_SECRET || "your-secret-key",
    baseURL: "http://localhost:3000",
    basePath: '/api/auth',
    trustedOrigins: ["http://localhost:5173"]
});

export {auth}
