export interface Repository {
  /**
   * Short name of the repository
   */
  name: string;

  /**
   * Full name of the repository
   */
  full_name: string;

  /**
   * GitHub link
   */
  html_url: string;

  /**
   * Description of the repository
   */
  description: string;

  /**
   * Whether the repository is forked or not
   */
  fork: boolean;

  /**
   * Date of the last update of the repository
   */
  updated_at: string;

  /**
   * Number of stars of the repository
   */
  stargazers_count: number;
}
