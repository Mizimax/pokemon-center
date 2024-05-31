export const fetchCards = async (
  page: number,
  query: string = "",
  filters: { type?: string; rarity?: string; set?: string } = {}
): Promise<any> => {
  const queryParams = [];
  if (query) queryParams.push(`name:${query}*`);
  if (filters.type) queryParams.push(`types:${filters.type}`);
  if (filters.rarity) queryParams.push(`rarity:${filters.rarity}`);
  if (filters.set) queryParams.push(`set.id:${filters.set}`);

  const response = await fetch(
    `https://api.pokemontcg.io/v2/cards?page=${page}&pageSize=20&q=${queryParams.join(
      " "
    )}`
  );
  const data = await response.json();
  return data;
};
