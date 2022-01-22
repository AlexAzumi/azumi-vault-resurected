export interface Project {
  /**
   * Complete title of the project
   */
  title: string;

  /**
   * Description of the project
   */
  description: string;

  /**
   * URI of the project banner
   */
  imageURL: string;

  /**
   * URL of the project
   */
  url?: string;
}
