import { EventData, Metadata } from "./interfaces";

export const getTopics = async (): Promise<EventData[]> => {
  const res = await fetch("/api/now");
  const { topics } = await res.json();
  return topics;
};

export const getMetadata = async (address: string): Promise<Metadata> => {
  const res = await fetch(`/api/token/${address}`);
  const { metadata } = await res.json();
  return metadata;
};
