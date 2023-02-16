// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

import { Pool } from 'pg';

const pool = new Pool({
    user: process.env.DB_USERNAME,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port: Number(process.env.DB_PORT) || 5432,
});

type Data = any[];

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
    pool.query<Data>('SELECT * FROM users').then((e) => res.status(200).json(e.rows));

    // res.status(200).json({ name: 'John Doe' });
}
