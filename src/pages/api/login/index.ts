import type { NextApiRequest, NextApiResponse } from 'next';

import { Pool } from 'pg';

import * as jwt from 'jsonwebtoken';

import { NextResponse } from 'next/server';

const pool = new Pool({
    user: process.env.DB_USERNAME,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port: Number(process.env.DB_PORT) || 5432,
});

export interface AuthResponse {
    status: number;
    data?: string | null;
    isCorrectAuth: boolean;
}

export const getAuthToken = (id: number, role: string) => {
    const payload = {
        id,
        role,
    };

    return jwt.sign(payload, process.env.SECRET_KEY!, { expiresIn: '2h' });
};

export default function handler(req: NextApiRequest, res: NextApiResponse<AuthResponse>) {
    pool.query<AuthResponse>(
        'SELECT * FROM users WHERE user_name = $1::text AND password = $2::text',
        [req.body.login, req.body.password]
    )
        .then((e) => {
            if (e.rowCount > 0) {
                // @ts-ignore
                const token = getAuthToken(e?.rows[0]?.user_id, e.rows[0]?.role);
                res.setHeader('jwt', token);

                res.status(200).json({ status: 200, isCorrectAuth: true });
            } else {
                res.status(401).json({
                    status: 401,
                    isCorrectAuth: false,
                });
            }
        })
        .catch((e) => {
            console.log(e);
            res.status(504).json({ status: 504, isCorrectAuth: false });
        });
}
