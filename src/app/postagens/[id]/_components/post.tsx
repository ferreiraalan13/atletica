import { IPostProps } from "../../page";

export async function PostInfo({ id }: { id: string }) {
  await new Promise((resolve) => setTimeout(resolve, 4000));
  const response = await fetch(`https://dummyjson.com/posts/${id}`);
  const data: IPostProps = await response.json();
  return (
    <div className="bg-white shadow-lg rounded-2xl p-6 border border-gray-200 hover:shadow-xl transition-all">
      <h2 className="text-xl font-bold text-blue-700 mb-2">{data.title}</h2>
      <p className="text-gray-600 mb-4 line-clamp-3">{data.body}</p>

      <div className="flex flex-wrap gap-2 mb-4">
        {data.tags.map((tag, index) => (
          <span
            key={index}
            className="bg-blue-100 text-blue-700 text-xs font-semibold px-2 py-1 rounded-full"
          >
            #{tag}
          </span>
        ))}
      </div>

      <div className="flex items-center justify-between text-sm text-gray-500">
        <span>👍 {data.reactions.likes}</span>
        <span>👎 {data.reactions.dislikes}</span>
        <span>👁️ {data.views} views</span>
      </div>
    </div>
  );
}
