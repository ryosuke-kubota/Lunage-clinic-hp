# 画像フォルダ構成

このフォルダには、ルナージュクリニックのWebサイトで使用する画像ファイルを格納します。

## フォルダ構成

- **hero/** - トップページのヒーローセクション用画像
- **menu/** - メニューページの施術画像
- **gallery/** - ビフォーアフター画像、施術例
- **icons/** - アイコン、ロゴ画像
- **testimonials/** - お客様の声に関連する画像

## 使用方法

Next.jsでは、`public`フォルダ内の画像は以下のように参照できます：

```jsx
// 例：ヒーロー画像の使用
<Image src="/images/hero/main-hero.jpg" alt="メイン画像" width={800} height={600} />

// 例：メニュー画像の使用
<Image src="/images/menu/facial-treatment.jpg" alt="フェイシャル施術" width={400} height={300} />
```

## 推奨画像形式

- **形式**: WebP, JPEG, PNG
- **サイズ**: 適切な圧縮を行い、ファイルサイズを最適化
- **命名規則**: 英数字とハイフンを使用（例：main-hero.jpg, facial-treatment-01.webp）