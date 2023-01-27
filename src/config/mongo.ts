import 'dotenv/config';
import { connect } from 'mongoose';

async function dbConnect(): Promise<void> {
    const DB_URL = <string>process.env.DB_URI;
    await connect(DB_URL);
}

export default dbConnect;