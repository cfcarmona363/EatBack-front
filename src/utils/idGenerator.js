function generateRandomId(text) {
  const currentDate = new Date().toISOString();

  const concatenatedString = currentDate;

  let hash = 0;
  for (let i = 0; i < concatenatedString.length; i++) {
    const char = concatenatedString.charCodeAt(i);
    hash = (hash << 5) - hash + char;
    hash |= 0;
  }

  const uniqueId = Math.abs(hash).toString(16);

  return uniqueId;
}

export default generateRandomId;
