import type { NextApiRequest, NextApiResponse } from 'next';
import { NEWS } from 'config/constants';

const { BASE_URL, API_KEY } = NEWS;

export async function fetchArticles() {
  const url = `${BASE_URL}${API_KEY}`;
  const response = await fetch(url);
  if (response.ok) {
    const data = await response.json();
    return data.articles;
  } else {
    throw new Error(response.statusText);
  }
}

export default async function handler(_: NextApiRequest, res: NextApiResponse) {
  try {
    const data = await fetchArticles();
    res.status(200).json(data);
  } catch (error) {
    let message = 'Unknown Error';
    if (error instanceof Error) message = error.message;
    res.status(500).json({ message });
  }
}
