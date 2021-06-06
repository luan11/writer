import { useEffect, useRef, useState } from 'react';

import { HiOutlineChevronUp } from 'react-icons/hi';

import api from './../../services/api';

import useEventListener from './../../hooks/useEventListener';

import { Loader, Container, Title, ScrollToTopButton } from './styles';

import { Post, PostProps } from './../../components/Post';

type PostAuthor = {
  id: number;
  username: string;
}

type PostData = {
  id: number;
  content: string;
  createdAt: string;
  likes: number;
  activeUserLikedIt: number;
  loves: number;
  activeUserLovedIt: number;
  author: PostAuthor;
}

export function Posts() {
  const [posts, setPosts] = useState<PostProps[]>([]);
  const [allPosts, setAllPosts] = useState<PostProps[]>([]);
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(false);

  const perPage = 9;

  useEffect(() => {
    setLoading(true);

    api.get<PostData[]>('/feeds')
      .then(response => {
        const posts = response.data.map(({
          id,
          content,
          createdAt,
          likes,
          activeUserLikedIt,
          loves,
          activeUserLovedIt,
          author
        }) => {
          const createdAtDate = new Date(createdAt);

          return {
            id,
            content,
            createdAt: createdAtDate.toLocaleDateString(),
            likes: {
              count: likes,
              reacted: activeUserLikedIt > 0
            },
            loves: {
              count: loves,
              reacted: activeUserLovedIt > 0
            },
            author: author.username,
          }
        });

        setAllPosts(posts);
        setPosts(posts.slice(0, perPage));

        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  function loadMorePosts() {
    const nextPage = page + perPage;

    const nextPosts = allPosts.slice(nextPage, nextPage + perPage);

    setPosts([...posts, ...nextPosts]);
    setPage(nextPage);
  }

  const scrollTopButtonRef = useRef<HTMLButtonElement>(null);

  function onScroll() {
    const button = scrollTopButtonRef.current;

    const scrolled = window.scrollY;

    if (button) {
      if (scrolled > 0) {
        button.classList.add('active');
      } else {
        button.classList.remove('active');
      }
    }
  }

  useEventListener('scroll', onScroll);

  const isAbleToLoadMore = page + perPage < allPosts.length;

  return (
    <>
      {
        loading
          ? <Loader data-testid="loader"><span></span></Loader>
          : <div className="container">
            {
              posts.length > 0 &&
              <>
                <Container>
                  {
                    posts.map(post => {
                      return <Post key={post.id} {...post} />;
                    })
                  }
                </Container>

                <button
                  type="submit"
                  className={`btn ${isAbleToLoadMore ? 'load-more' : ''}`}
                  disabled={!isAbleToLoadMore}
                  onClick={loadMorePosts}
                >
                  Carregar mais posts
                </button>

                <ScrollToTopButton
                  ref={scrollTopButtonRef}
                  type="button"
                  onClick={() => window.scrollTo(0, 0)}
                >
                  <HiOutlineChevronUp />
                </ScrollToTopButton>
              </>
            }
            {
              posts.length === 0 &&
              <Title>Nenhum post encontrado...</Title>
            }
          </div>
      }
    </>
  );
}