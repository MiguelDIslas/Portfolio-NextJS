type Language = {
  /**
   * Name of the language
   */
  name: string;

  /**
   * Code of the language
   */
  code: string;
};

/**
 * Country Entity
 */
export interface Country {
  /**
   * Name of the country
   */
  name: string;

  /**
   * Dial code
   */
  dial_code: string;

  /**
   * Emoji of the country
   */
  emoji: string;

  /**
   * Code of the country
   */
  code: string;

  /**
   * Language of the country
   */
  language: Language;
}
