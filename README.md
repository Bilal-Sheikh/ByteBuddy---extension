This is a [Plasmo extension](https://docs.plasmo.com/) project bootstrapped with [`plasmo init`](https://www.npmjs.com/package/plasmo).


## DEMO

https://github.com/Bilal-Sheikh/ByteBuddy---extension/assets/85779794/4a175986-6158-4165-990b-13fdd73c83f3


## Getting Started
- Clone the repo :
  ```bash
  git clone https://github.com/Bilal-Sheikh/ByteBuddy---extension.git
  ```
- Install dependencies:
  ```bash
  yarn install
  # or
  npm install
  ```
- Run the development server:
  
  ```bash
  yarn dev
  # or
  npm run dev
  ```
- Follow the below instructions or follow this [https://docs.plasmo.com/framework](https://docs.plasmo.com/framework#loading-the-extension-in-chrome)

Open your browser and load the appropriate development build. For example, if you are developing for the Chrome browser using manifest v3, use: `build/chrome-mv3-dev`.

You can start editing the popup by modifying `popup.tsx`. It should auto-update as you make changes. To add an options page, simply add a `options.tsx` file to the root of the project, with a react component default exported. Likewise, to add a content page, add a `content.ts` file to the root of the project, importing some module and do some logic, then reload the extension on your browser.

For further guidance, [visit our Documentation](https://docs.plasmo.com/)

## Making production build

Run the following:

```bash
yarn build
# or
npm run build
```

This should create a production bundle for your extension, ready to be zipped and published to the stores.

## Submit to the webstores

The easiest way to deploy your Plasmo extension is to use the built-in [bpp](https://bpp.browser.market) GitHub action. Prior to using this action however, make sure to build your extension and upload the first version to the store to establish the basic credentials. Then, simply follow [this setup instruction](https://docs.plasmo.com/framework/workflows/submit) and you should be on your way for automated submission!
