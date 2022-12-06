import { override } from 'customize-cra';
import { aliasDangerous, configPaths } from 'react-app-rewire-alias/lib/aliasDangerous';

export default {
  webpack: override(aliasDangerous(configPaths('./tsconfig.paths.json'))),
};
