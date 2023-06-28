import { EventData } from "./interfaces";

export const getTopics = async (): Promise<EventData[]> => {
  const res = await fetch("/api/now");
  const { topics } = await res.json();
  return topics;
};
