import { CustomButton } from "@/components/button";
import Link from "next/link";
import React from "react";

interface IResponseProps {
  posts: IPostProps[];
  total: number;
  skip: number;
  limit: number;
}

export interface IPostProps {
  id: number;
  title: string;
  body: string;
  tags: string[];
  reactions: Reactions;
  views: number;
  userId: number;
}

interface Reactions {
  likes: number;
  dislikes: number;
}

export default async function Postagens() {
  const response = await fetch("https://dummyjson.com/posts", {
    cache: "force-cache",
    next: {
      revalidate: 10,
    },
  });
  const data: IResponseProps = await response.json();

  return (
    <>
      <div className="ml-10">
        <form className="flex gap-2">
          <input
            className="border border-gray-200 p2"
            type="text"
            placeholder="ID do usuario"
          />
          <button type="submit" className="bg-blue-500 text-white p-2 ">
            Buscar usuario
          </button>
        </form>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
        {data?.posts?.map((post) => (
          <div
            key={post.id}
            className="bg-white shadow-lg rounded-2xl p-6 border border-gray-200 hover:shadow-xl transition-all"
          >
            <h2 className="text-xl font-bold text-blue-700 mb-2">
              {post.title}
            </h2>
            <p className="text-gray-600 mb-4 line-clamp-3">{post.body}</p>
            <Link href={`/postagens/${post.id}`}>Navegar</Link>

            <div className="flex flex-wrap gap-2 mb-4">
              {post.tags.map((tag, index) => (
                <span
                  key={index}
                  className="bg-blue-100 text-blue-700 text-xs font-semibold px-2 py-1 rounded-full"
                >
                  #{tag}
                </span>
              ))}
            </div>

            <div className="flex items-center justify-between text-sm text-gray-500">
              <span>👍 {post.reactions.likes}</span>
              <span>👎 {post.reactions.dislikes}</span>
              <span>👁️ {post.views} views</span>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
