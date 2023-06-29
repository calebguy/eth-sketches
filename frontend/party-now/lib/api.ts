import { GetNowResponse } from "./interfaces";

export const getTopics = async (): Promise<GetNowResponse> => {
  const res = await fetch("/api/now");
  const { data } = await res.json();
  return data;
};
