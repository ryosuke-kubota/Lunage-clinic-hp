/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: "",
  images: {
    unoptimized: false,
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    domains: [
      "source.unsplash.com",
      "images.unsplash.com",
      "ext.same-assets.com",
      "ugc.same-assets.com",
    ],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "source.unsplash.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "ext.same-assets.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "ugc.same-assets.com",
        pathname: "/**",
      },
    ],
  },
  // パフォーマンス最適化
  experimental: {
    optimizePackageImports: ['framer-motion', 'lucide-react'],
    optimizeCss: true,
    cssChunking: 'loose',
  },
  // 圧縮設定
  compress: true,
  // 静的ファイルの最適化
  poweredByHeader: false,
  // CSS最適化
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  // ヘッダー設定でキャッシュ最適化
  async headers() {
    return [
      {
        source: '/_next/static/css/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/_next/static/js/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },
  // Webpack設定でCSS最適化
  webpack: (config, { dev, isServer }) => {
    if (!dev && !isServer) {
      // CSS分割の最適化 - より細かく分割してブロッキングを軽減
      config.optimization.splitChunks = {
        ...config.optimization.splitChunks,
        cacheGroups: {
          ...config.optimization.splitChunks.cacheGroups,
          // Critical CSS用
          criticalStyles: {
            name: 'critical-styles',
            test: /critical\.css$/,
            chunks: 'all',
            enforce: true,
            priority: 30,
          },
          // 基本スタイル用
          baseStyles: {
            name: 'base-styles',
            test: /globals\.css$/,
            chunks: 'all',
            enforce: true,
            priority: 20,
          },
          // その他のCSS
          styles: {
            name: 'styles',
            test: /\.(css|scss|sass)$/,
            chunks: 'all',
            enforce: true,
            priority: 10,
            minSize: 0,
          },
        },
      };
      
      // CSS最適化プラグインの設定
      const MiniCssExtractPlugin = config.plugins.find(
        plugin => plugin.constructor.name === 'MiniCssExtractPlugin'
      );
      
      if (MiniCssExtractPlugin) {
        MiniCssExtractPlugin.options = {
          ...MiniCssExtractPlugin.options,
          ignoreOrder: true,
          insert: function(linkTag) {
            // CSS を非同期で読み込む
            linkTag.rel = 'preload';
            linkTag.as = 'style';
            linkTag.onload = function() {
              this.rel = 'stylesheet';
            };
            document.head.appendChild(linkTag);
          }
        };
      }
    }
    
    return config;
  },
};

export default nextConfig;
