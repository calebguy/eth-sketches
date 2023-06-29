export const convertBase64ToString = (base64: string) => {
  const base64Data = base64.split(",")[1];
  const bindaryData = Buffer.from(base64Data, "base64");
  const json = bindaryData.toString("utf-8");
  return json;
};
