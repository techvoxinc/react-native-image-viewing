/**
 * Copyright (c) JOB TODAY S.A. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

const { getDefaultConfig } = require("expo/metro-config");
const path = require("path");

const config = getDefaultConfig(__dirname);

config.resolver.extraNodeModules = new Proxy(
  {},
  {
    get: (target, name) => path.join(process.cwd(), `node_modules/${name}`),
  }
);

config.watchFolders = [path.resolve(__dirname, "../src")];

module.exports = config;
