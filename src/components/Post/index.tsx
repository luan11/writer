import { AiOutlineHeart, AiFillHeart, AiOutlineLike, AiFillLike, AiOutlineCalendar } from 'react-icons/ai';
import { FaRegUserCircle } from 'react-icons/fa';

import {
  Container,
  CreatedAt,
  Content,
  Author,
  Reactions,
  ReactButton
} from './styles';

type Reaction = {
  count: number;
  reacted: boolean;
}

export type PostProps = {
  id: number;
  content: string;
  createdAt: string;
  likes: Reaction;
  loves: Reaction;
  author: string;
}

export function Post({ content, createdAt, likes, loves, author }: PostProps) {
  return (
    <Container>
      <CreatedAt><AiOutlineCalendar />{createdAt}</CreatedAt>
      <Content>{content}</Content>
      <Author><FaRegUserCircle />{author}</Author>
      <Reactions>
        <ReactButton
          type="button"
        >
          {
            loves.reacted
              ? <AiFillHeart />
              : <AiOutlineHeart />
          }
          {loves.count}
        </ReactButton>

        <ReactButton
          type="button"
        >
          {
            likes.reacted
              ? <AiFillLike />
              : <AiOutlineLike />
          }
          {likes.count}
        </ReactButton>
      </Reactions>
    </Container>
  );
};