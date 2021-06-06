export const postPropsMock = {
  id: 0,
  content: 'My content',
  createdAt: new Date().toLocaleDateString(),
  likes: {
    count: 0,
    reacted: false
  },
  loves: {
    count: 0,
    reacted: false
  },
  author: 'John Doe'
};