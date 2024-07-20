import { getCategories, getStatuses } from "src/api/index";

export const getStatusesReguest = async () => {
  const { data, status } = await getStatuses();

  return { data, status };
};

export const getCategoriesReguest = async () => {
  const { data, status } = await getCategories();

  return { data, status };
};
