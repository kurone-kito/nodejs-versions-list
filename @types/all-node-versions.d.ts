declare module 'all-node-versions' {
  interface AllNodeVersionsMajor {
    /**
     * Latest version for that major release,
     * as a `major.minor.patch` string.
     */
    latest: string;
    /**
     * LTS name, lowercased. `undefined` if the major release is not LTS.
     */
    lts?: string;
    /** Major version number. `0` for old releases `0.*.*`. */
    major: number;
  }
  interface AllNodeVersionsOptions {
    /**
     * The list of available Node.js versions is cached
     * for one hour by default. If the fetch option is:
     *
     * - `true`: the cache will not be used
     * - `false`: the cache will be used even if it's older than one hour
     */
    fetch?: boolean;
    /**
     * Base URL to fetch the list of available Node.js versions. Can be
     * customized (for example `https://npm.taobao.org/mirrors/node`).
     *
     * The following environment variables can also be used: `NODE_MIRROR`,
     * `NVM_NODEJS_ORG_MIRROR`, `N_NODE_MIRROR` or `NODIST_NODE_MIRROR`.
     * @default `https://nodejs.org/dist`
     */
    mirror?: string;
  }
  interface AllNodeVersionsReturns {
    /**
     * List of Node.js major releases sorted from the most to the
     * least recent. Each major release has the following properties.
     */
    majors: AllNodeVersionsMajor[];
    /**
     * List of available Node.js versions sorted from the most to the
     * least recent. Each version is a `major.minor.patch` string.
     */
    versions: string[];
  }

  /**
   * List all available Node.js versions.
   *
   * Sorted from the most to the least recent. Includes major release and LTS information.
   */
  const AllNodeVersions: (
    options?: AllNodeVersionsOptions
  ) => Promise<AllNodeVersionsReturns>;
  export = AllNodeVersions;
}
