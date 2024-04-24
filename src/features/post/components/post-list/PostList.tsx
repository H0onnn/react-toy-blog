import styled from "styled-components";
import { PostCard } from "./PostCard";
import { Post } from "../../types";

interface Props {
  posts: Post[];
}

export const PostList = ({ posts }: Props) => {
  return (
    <Container>
      {posts.map((post) => (
        <PostCard
          key={post.id}
          id={post.id}
          imgSrc={post.imgSrc}
          title={post.title}
          content={post.content}
          createdAt={post.createdAt}
        />
      ))}
    </Container>
  );
};

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;
