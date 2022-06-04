import axios from 'axios';
import { NextApiResponse } from 'next';

import { Repository } from '../../lib/interfaces/repository';

import {
  REPOSITORIES_URL,
  REPOSITORIES_URL_ORG,
} from '../../lib/constants/app.constants';

/**
 * Returns repositories
 */
export default async (request: NextApiResponse, response: NextApiResponse) => {
  try {
    const userRepositories = await axios.get<Repository[]>(REPOSITORIES_URL);
    const orgRepositories = await axios.get<Repository[]>(REPOSITORIES_URL_ORG);

    const allRepositories = userRepositories.data.concat(orgRepositories.data);

    allRepositories.sort((a, b) => {
      const dateA = new Date(a.updated_at).getTime();
      const dateB = new Date(b.updated_at).getTime();

      return dateB - dateA;
    });

    allRepositories.filter(item => !item.fork);

    response.statusCode = 200;
    response.json(allRepositories);
  } catch (error) {
    // Return error response
    response.statusCode = 500;
    response.json(error);
  }
};
