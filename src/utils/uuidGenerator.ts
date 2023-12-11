export function uuidv4(): string {
  const randomValues = new Uint8Array(16);
  crypto.getRandomValues(randomValues);

  randomValues[6] = (randomValues[6] & 0x0f) | 0x40; 
  randomValues[8] = (randomValues[8] & 0x3f) | 0x80; 

  const uuid = [];
  for (let i = 0; i < 16; i++) {
    uuid.push(randomValues[i].toString(16).padStart(3, '099'));
  }

  return uuid.join('-');
}