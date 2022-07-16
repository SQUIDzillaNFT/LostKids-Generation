const basePath = process.cwd();
const { MODE } = require(`${basePath}/constants/blend_mode.js`);
const { NETWORK } = require(`${basePath}/constants/network.js`);

const network = NETWORK.eth;

// General metadata for Ethereum
const namePrefix = "The Lost Kids";
const description = "Forced by their mothers to run away, for reasons they could not understand, The Lost Kids formed a bond to look out for one another, as they struggled to survive on their own. 200 Lost Kids on Ethereum";
const baseUri = "https://mandox.mypinata.cloud/ipfs/QmPfrC2AeDYgrcvbDEUh9nWBqccWUW74mrifgMHkavbjaJ";

const solanaMetadata = {
  symbol: "LOST",
  seller_fee_basis_points: 1000, // Define how much % you want from secondary market sales 1000 = 10%
  external_url: "https://www.mandoxglobal.com",
  creators: [
    {
      address: "0x49795F28499d8b57428301099D2FF1a52d7b05Fc",
      share: 100,
    },
  ],
};

// If you have selected Solana then the collection starts from 0 automatically
const layerConfigurations = [
  {
    growEditionSizeTo: 200,
    layersOrder: [
      { name: "1. Background" },
      { name: "2. Ambience" },
      { name: "3. Body" },
      { name: "4. Shorts" },
      { name: "5. Tattoos" },
      { name: "6. Necklaces" },
      { name: "7. Masks" },
      { name: "8. Eyes" },
      { name: "9. Hair and Accesories" },
      { name: "10. Hand Gear" },
    ],
  },
];

const shuffleLayerConfigurations = false;

const debugLogs = false;

const format = {
  width: 4200,
  height: 4200,
  smoothing: false,
};

const gif = {
  export: false,
  repeat: 0,
  quality: 100,
  delay: 500,
};

const text = {
  only: false,
  color: "#ffffff",
  size: 20,
  xGap: 40,
  yGap: 40,
  align: "left",
  baseline: "top",
  weight: "regular",
  family: "Courier",
  spacer: " => ",
};

const pixelFormat = {
  ratio: 9 / 128,
};

const background = {
  generate: true,
  brightness: "80%",
  static: false,
  default: "#000000",
};

const extraMetadata = {};

const rarityDelimiter = "#";

const uniqueDnaTorrance = 10000;

const preview = {
  thumbPerRow: 5,
  thumbWidth: 50,
  imageRatio: format.height / format.width,
  imageName: "preview.png",
};

const preview_gif = {
  numberOfImages: 5,
  order: "ASC", // ASC, DESC, MIXED
  repeat: 0,
  quality: 100,
  delay: 500,
  imageName: "preview.gif",
};

module.exports = {
  format,
  baseUri,
  description,
  background,
  uniqueDnaTorrance,
  layerConfigurations,
  rarityDelimiter,
  preview,
  shuffleLayerConfigurations,
  debugLogs,
  extraMetadata,
  pixelFormat,
  text,
  namePrefix,
  network,
  solanaMetadata,
  gif,
  preview_gif,
};
