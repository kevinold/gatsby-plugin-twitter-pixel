# gatsby-plugin-twitter-pixel

Easily add Twitter Pixel to your Gatsby site. At this time, 'PageView' events is triggered via onRouteUpdate.

## Install
`npm install --save gatsby-plugin-twitter-pixel`

## How to use

```javascript
// In your gatsby-config.js
plugins: [
  {
    resolve: `gatsby-plugin-twitter-pixel`,
    options: {
      pixelId: 'pixel id here',
    },
  },
]
```

# Credit

Thanks to https://github.com/gabeskipio/gatsby-plugin-facebook-pixel for a great base for this plugin!
