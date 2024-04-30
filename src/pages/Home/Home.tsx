import { usePostContext } from "@/context";
import { PostList, WriteButton } from "@/features/post/components";
import { Flex } from "@/shared/components/ui";
import { NoneDataFallback } from "@/shared/components/fallback";

const Home = () => {
  const { posts } = usePostContext();

  return (
    <>
      <Flex align="center" justify="flex-end" style={{ margin: "2rem 0" }}>
        <WriteButton href="/post/new">새 글 작성</WriteButton>
      </Flex>

      {posts.length > 0 ? <PostList posts={posts} /> : <NoneDataFallback />}
    </>
  );
};

export default Home;
