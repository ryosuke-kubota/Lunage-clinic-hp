import { redirect } from "next/navigation";

// ページを一時的に非表示（リダイレクト）にしています
// 復元する場合はこのリダイレクトを削除し、元のコンポーネントのコメントアウトを解除してください

export default function CompanyPage() {
  redirect("/");

  /* 元のページコンテンツ（復元用）
  return (
    <main className="min-h-screen bg-[#faf3ef]">
      <Header />
      ...
      <Footer />
    </main>
  );
  */
}