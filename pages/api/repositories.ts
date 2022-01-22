import axios from 'axios';
import { NextApiResponse } from 'next';

import { Repository } from '../interfaces/repository';

import { REPOSITORIES_URL } from '../constants/app.constants';

/**
 * Returns repositories
 */
export default async (request: NextApiResponse, response: NextApiResponse) => {
  try {
    // Get data
    const repositories = await axios.get<Repository[]>(REPOSITORIES_URL);
    // Return response
    response.statusCode = 200;
    response.json(repositories.data.filter(item => item.fork === false));
  } catch (error) {
    // Return error response
    response.statusCode = 500;
    response.json(error);
  }
};
