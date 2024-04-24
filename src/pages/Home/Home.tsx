import styled from "styled-components";

import { usePosts } from "@/features/post/apis";
import { PostList, WriteButton } from "@/features/post/components";
import { Flex } from "@/shared/components/ui";

const Home = () => {
  const { posts } = usePosts();

  return (
    <>
      <Flex align="center" justify="space-between" style={{ margin: "2rem 0" }}>
        <Header>H0onnn's react blog</Header>

        <WriteButton href="/post/new">게시글 작성</WriteButton>
      </Flex>

      <PostList posts={posts} />
    </>
  );
};

export default Home;

const Header = styled.h1`
  font-size: 2.5rem;
  font-weight: bold;
`;
