import jwt from 'jsonwebtoken';
import { NextApiResponse } from 'next';
import { NextApiRequestCookies } from 'next/dist/server/api-utils';
import { IncomingMessage } from 'http';
import { Pool } from 'pg';

const pool = new Pool({
    user: process.env.DB_USERNAME,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port: Number(process.env.DB_PORT) || 5432,
});

export function clearUser(res: NextApiResponse) {
    res.setHeader('Set-Cookie', 0);
}

export async function userFromRequest(req: IncomingMessage & { cookies: NextApiRequestCookies }) {
    const token = req.cookies;

    if (!token.jwt) return undefined;

    try {
        const user = jwt.verify(token.jwt, process.env.SECRET_KEY!);

        pool.query('SELECT * FROM users WHERE user_id $1::text', [(user as any).id]).then((e) => {
            if (e.rowCount === 0) return undefined;

            return e.rows[0];
        });
    } catch (e) {
        console.log(e);
    }
}
