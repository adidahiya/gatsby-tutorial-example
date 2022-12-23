const sharp = require("sharp");

// HACKHACK(@adidahiya): encountered a weird segmentation fault when trying to build Gatsby 5
// sites in any compatible version of Node.js (v18 or v19) on my MacBook Pro (Intel, 2019).
// Stumbled acros this blog post which suggested that SIMD instructions in the `sharp` image
// processing library may be the problem, and it seems like turning them off does fix the issue.
// See https://florian.ec/blog/gatsby-build-netlify-segmentation-fault/
sharp.cache(false);
sharp.simd(false);
