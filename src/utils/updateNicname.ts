'use server';

import { revalidatePath } from 'next/cache';

export const updatenickname = async (data: {
  id: string;
  nickname: string;
}) => {
  try {
    const response = await fetch(`${process.env.LOCAL_URL}/api/mypage`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const result = await response.json();
    revalidatePath(`users/${data.id}/detail`);
    return result;
    // console.log('Server Response:', result);
  } catch (error) {
    console.error('Error UserEdit:', error);
  }
};
