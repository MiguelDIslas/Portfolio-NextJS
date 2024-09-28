/**
 * Portfolio entity
 */
export interface Portfolio {
  /**
   * Id
   */
  id: number;
  
  /**
   * Technology used
   */
  tech: string;

  /**
   * Image path
   */
  image: string;

  /**
   * Link for repository
   */
  githubLink?: string;

  /**
   * Link for production
   */
  productionLink?: string;

  /**
   * Title
   */
  title: string;

  /**
   * Text description
   */
  description: string;
}
