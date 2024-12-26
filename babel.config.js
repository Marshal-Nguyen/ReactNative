module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
  };
};
//dịch typescrip sang Javascrip
//tự động chèn import React from 'react' nên ko cần import
