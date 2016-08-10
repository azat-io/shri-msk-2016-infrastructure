const helpers = {
  squareArea (s) {
    return s * s
  },
  rectangeArea (w, h) {
    return w * h
  },
  triangleArea (s1, s2, s3) {
    const sp = (parseInt(s1) + parseInt(s2) + parseInt(s3)) / 2
    return Math.round(Math.sqrt(sp * (sp - s1) * (sp - s2) * (sp - s3)) *
      100) / 100
  },
  circleArea (r) {
    return Math.round(Math.PI * r * 100) / 100
  }
}

module.exports = helpers
