import * as fs from 'node:fs/promises';
import { PATH_DB } from '../constants/contacts.js';

export const readContacts = async () => {
  const res = await fs.readFile(PATH_DB, 'utf8');
  return JSON.parse(res);
};
