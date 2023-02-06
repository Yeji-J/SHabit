import apiRequest from '../../utils/apiRequest';
import { header } from '..';

export const postData = async (
  email: string,
  data: Array<string>,
): Promise<boolean> => {
  const { Authorization } = header();
  return await apiRequest
    .post(`/api/v1/statistics/${email}`, [...data], {
      headers: { Authorization, 'Content-Type': 'application/json' },
    })
    .then(() => Promise.resolve(true))
    .catch(() => Promise.reject(false));
};