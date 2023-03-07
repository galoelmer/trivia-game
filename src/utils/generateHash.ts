import * as Crypto from "expo-crypto";

/**
 * Generate a hash from a string
 * @param value The string to generate the hash from
 * @returns The hash
 * @example
 * const hash = await generateHash('Hello World'); // 2ef7bde608ce5404e97d5f042f95f89f1c232871
 */
export const generateHash = async (value: string) => {
  const hash = await Crypto.digestStringAsync(
    Crypto.CryptoDigestAlgorithm.SHA1,
    value
  );

  return hash;
};
