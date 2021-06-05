import { useState } from 'react';

import { AiOutlineHeart, AiFillHeart, AiOutlineLike, AiFillLike, AiOutlineCalendar } from 'react-icons/ai';
import { FaRegUserCircle } from 'react-icons/fa';

import api from './../../services/api';

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

export function Post({ id, content, createdAt, likes, loves, author }: PostProps) {
  const [loading, setLoading] = useState(false);
  const [likesCount, setLikesCount] = useState(likes.count);
  const [liked, setLiked] = useState(likes.reacted);
  const [lovesCount, setLovesCount] = useState(loves.count);
  const [loved, setLoved] = useState(loves.reacted);

  async function handleLove() {
    setLoading(true);

    try {
      const reaction = !loved;

      await api.post('/reaction', {
        feedId: id,
        love: reaction,
        like: liked
      });

      setLoved(reaction);

      if (reaction) {
        setLovesCount(lovesCount + 1);
      } else {
        setLovesCount(lovesCount - 1);
      }

      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  }

  async function handleLike() {
    setLoading(true);

    try {
      const reaction = !liked;

      await api.post('/reaction', {
        feedId: id,
        like: reaction,
        love: loved
      });

      setLiked(reaction);

      if (reaction) {
        setLikesCount(likesCount + 1);
      } else {
        setLikesCount(likesCount - 1);
      }

      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  }

  return (
    <Container className={loading ? 'loading' : ''}>
      <CreatedAt><AiOutlineCalendar />{createdAt}</CreatedAt>
      <Content>{content}</Content>
      <Author><FaRegUserCircle />{author}</Author>
      <Reactions>
        <ReactButton
          type="button"
          onClick={handleLove}
        >
          {
            loved
              ? <AiFillHeart />
              : <AiOutlineHeart />
          }
          {lovesCount}
        </ReactButton>

        <ReactButton
          type="button"
          onClick={handleLike}
        >
          {
            liked
              ? <AiFillLike />
              : <AiOutlineLike />
          }
          {likesCount}
        </ReactButton>
      </Reactions>
    </Container>
  );
};