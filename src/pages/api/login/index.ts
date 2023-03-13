import type { NextApiRequest, NextApiResponse } from 'next';

import { Pool } from 'pg';

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

export default function handler(req: NextApiRequest, res: NextApiResponse<AuthResponse>) {
    pool.query<AuthResponse>(
        'SELECT * FROM users WHERE user_name = $1::text AND password = $2::text',
        [req.query.login, req.query.password]
    )
        .then((e) => {
            if (e.rowCount > 0) {
                res.status(200).json({ status: 200, isCorrectAuth: true });
            } else {
                res.status(200).json({
                    status: 401,
                    isCorrectAuth: false,
                    data: 'Wrong login/password',
                });
            }
        })
        .catch(() => {
            res.status(504).json({ status: 504, isCorrectAuth: false });
        });
}
