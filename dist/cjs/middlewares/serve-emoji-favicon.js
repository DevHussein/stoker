"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

const serveEmojiFavicon = emoji => {
  return async (c, next) => {
    if (c.req.path === "/favicon.ico") {
      c.header("Content-Type", "image/svg+xml");
      return c.body(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><text y=".9em" x="-0.1em" font-size="90">${emoji}</text></svg>`);
    }
    return next();
  };
};
module.exports = serveEmojiFavicon;