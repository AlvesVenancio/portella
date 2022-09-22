Resolução erro ViewPropTypes foi removido do React Native

O que foi aplicado:
em node_modules/react-native/index.js, substituido os deprecated prop types

```js
  // Deprecated Prop Types
  get ColorPropType(): $FlowFixMe {
    return require("deprecated-react-native-prop-types").ColorPropType
  },
  get EdgeInsetsPropType(): $FlowFixMe {
    return require("deprecated-react-native-prop-types").EdgeInsetsPropType
  },
  get PointPropType(): $FlowFixMe {
    return require("deprecated-react-native-prop-types").PointPropType
  },
  get ViewPropTypes(): $FlowFixMe {
    return require("deprecated-react-native-prop-types").ViewPropTypes
  },
```

O sistema esta utilizando dotenv para armazenamento de API KEYS. Para o correto funcionamento com 
typescript a cada atualização feita nos nomes de variaves de ambiente no arquivo .env inclua ou 
retire a exportação da chave desejado no arquivo src/types/index.d.ts na declaracao do @env
```js
  declare module '@env' {
    export const NOME_DA_CHAVE: string;
  }
```