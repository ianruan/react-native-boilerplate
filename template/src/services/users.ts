import { userSchema } from '@/types/schemas/user';

import { instance } from './instance';

export const fetchOne = async (id: number) => {
  const response = await instance.get(`users/${id}`).json();
  return userSchema.parse(response);
};
