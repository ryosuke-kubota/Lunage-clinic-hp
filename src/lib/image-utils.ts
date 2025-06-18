/**
 * GitHub Pages用の画像パスを生成する関数
 */
export function getImagePath(imagePath: string): string {
  // 開発環境では通常のパスを返す
  if (process.env.NODE_ENV !== 'production') {
    return imagePath;
  }
  
  // 本番環境（GitHub Pages）では basePath を追加
  const basePath = '/runaju-clinic';
  
  // 既にbasePathが含まれている場合は重複を避ける
  if (imagePath.startsWith(basePath)) {
    return imagePath;
  }
  
  // 先頭の / を削除してから basePath を追加
  const cleanPath = imagePath.startsWith('/') ? imagePath.slice(1) : imagePath;
  return `${basePath}/${cleanPath}`;
}