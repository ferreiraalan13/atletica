import { Suspense } from "react";
import { IPostProps } from "../page";
import { PostInfo } from "./_components/post";

export default async function DetailPost({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const response = await fetch(`https://dummyjson.com/posts/${id}`);
  const data: IPostProps = await response.json();
  return (
    <div>
      <h1 className="text-4xl font-bold">Detalhes do post</h1>
      <Suspense fallback={<h1>Carregando...</h1>}>
        <PostInfo id={id} />
      </Suspense>
    </div>
  );
}
