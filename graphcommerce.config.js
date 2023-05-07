/**
 * Docs: https://graphcommerce.org/docs/framework/config
 *
 * @type {import('@graphcommerce/next-config/src/generated/config').GraphCommerceConfig}
 */
const config = {
  hygraphEndpoint: 'https://eu-central-1-shared-euc1-02.cdn.hygraph.com/content/clhdbz1h12rev01t79917e12f/master',
  magentoEndpoint: 'https://shop.vjun.io/graphql',
  canonicalBaseUrl: 'https://vjunion-shop.vercel.app',
  storefront: [{ locale: 'en', magentoStoreCode: 'en_US' }],
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'assets.example.com',
        port: '',
        pathname: '/account123/**',
      },
    ],
  },
}




module.exports = config
