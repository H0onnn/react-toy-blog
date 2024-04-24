import styled from "styled-components";

import { Link } from "react-router-dom";
import { Card, Flex, Tag } from "@/shared/components/ui";
import { THEMES, text_hidden, full_img_cover } from "@/shared/styles";
import { Post } from "../../types";

export const PostCard = (props: Post) => {
  const { id, title, content, imgSrc, createdAt } = props;

  return (
    <Link to={`/post/${id}`}>
      <Card
        $shadow={true}
        justify="space-between"
        style={{
          minHeight: "30rem",
          maxHeight: "30rem",
        }}
      >
        <ImageBox>
          {imgSrc ? (
            <img src={imgSrc} alt={title} />
          ) : (
            <img src="https://via.placeholder.com/800x450" alt="placeholder" />
          )}
        </ImageBox>

        <ContentsBox direction="column" gap={15} style={{ marginTop: "14rem" }}>
          <h2>{title}</h2>
          <p>{content}</p>
        </ContentsBox>

        <Tag>{`🕒 ${createdAt.split("T")[0]}`}</Tag>
      </Card>
    </Link>
  );
};

const ImageBox = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 45%;
  overflow: hidden;
  border-top-left-radius: 1.2rem;
  border-top-right-radius: 1.2rem;

  img {
    ${full_img_cover}
  }
`;

const ContentsBox = styled(Flex)`
  & > h2 {
    font-size: 2rem;
    font-weight: 600;
    color: ${THEMES.black};
    ${text_hidden}
  }

  & > p {
    font-size: 1.6rem;
    color: ${THEMES.darkgray};

    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
`;
