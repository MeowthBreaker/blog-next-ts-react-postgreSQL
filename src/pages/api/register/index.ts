import type { NextApiRequest, NextApiResponse } from 'next';

import { Pool, QueryResult } from 'pg';

const pool = new Pool({
    user: process.env.DB_USERNAME,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port: Number(process.env.DB_PORT) || 5432,
});

export interface RegisterResponse {
    status: number;
    data?: string | null;
    isCorrectRegister: boolean;
}

export default function handler(req: NextApiRequest, res: NextApiResponse<RegisterResponse>) {
    // console.log(req.body);
    pool.query<RegisterResponse>(
        'SELECT * FROM users WHERE user_name = $1::text OR email = $2::text',
        [req.body.login, req.body.email]
    )
        .then(async (e) => {
            console.log(e.rows);
            if (e.rowCount === 0) {
                await confirmRegistration(req.body);

                res.status(200).json({ status: 200, isCorrectRegister: true });
            } else res.status(302).json({ status: 302, isCorrectRegister: false });
        })
        .catch((error) => {
            console.error(error);
            res.status(504).json({ status: 200, isCorrectRegister: false });
        });
}

const confirmRegistration = (data: any) => {
    return pool.query(
        'INSERT INTO users (user_name, name, surname, email, password, role, avatar_url, media) VALUES ($1::text, $2::text, $3::text, $4::text, $5::text, $6::role, $7::text, $8::text[])',
        [
            data.login,
            data.name || '',
            data.surname || '',
            data.email,
            data.password,
            'user',
            data.avatar || '',
            data.media || [],
        ]
    );
};
