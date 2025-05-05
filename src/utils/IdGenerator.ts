/**
 * Generates a unique ID using a combination of timestamp and random values
 * @returns {string} A unique ID string
 */
export const generateUniqueId = (): string => {
  // Get current timestamp in milliseconds
  const timestamp = new Date().getTime();

  // Generate random component (hexadecimal string)
  const randomPart = Math.floor(Math.random() * 0x100000000).toString(16);

  // Combine timestamp and random values
  return `${timestamp}-${randomPart}`;
};
