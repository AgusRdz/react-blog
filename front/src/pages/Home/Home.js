import SuspenseLoader from 'components/SuspenseLoader/SuspenseLoader'
import React, { lazy, Suspense, useEffect, useState } from 'react'

import BotttomScrollListener from 'react-bottom-scroll-listener'
const InfinitePosts = lazy(async () => {
  await new Promise((resolve) => setTimeout(resolve, 2000))
  return import('components/InfinitePosts')
})

const DUMMY = [
  {
    id: 1,
    slug: 'blog-1',
    title: 'Blog 1',
    publishedBy: 'AgusRdz',
    publishedAt: new Date(),
    tags: ['tag1', 'tag2', 'tag3'],
    coverImage: 'https://picsum.photos/300/300',
    text:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras non leo et risus pulvinar aliquet a facilisis nisi. Morbi sit amet tellus mollis, dictum nulla molestie, volutpat nunc. Nunc volutpat, lectus eget euismod consequat, nisl ex aliquam turpis, ut dignissim magna nulla quis sem. Etiam nec erat tincidunt, tincidunt nibh in, dictum lectus. Cras egestas, odio id pretium varius, ante nulla dignissim erat, sodales tristique nisl erat tempor tellus. Quisque magna nisl, finibus id dolor sed, porttitor auctor dui. Nulla accumsan tristique dapibus. Nullam pulvinar eleifend lorem, non varius neque.'
  },
  {
    id: 2,
    slug: 'blog-2',
    title: 'Blog 2',
    publishedBy: 'AgusRdz',
    publishedAt: new Date(),
    tags: ['tag1', 'tag2', 'tag3'],
    coverImage: 'https://picsum.photos/200/100',
    text:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras non leo et risus pulvinar aliquet a facilisis nisi. Morbi sit amet tellus mollis, dictum nulla molestie, volutpat nunc. Nunc volutpat, lectus eget euismod consequat, nisl ex aliquam turpis, ut dignissim magna nulla quis sem. Etiam nec erat tincidunt, tincidunt nibh in, dictum lectus. Cras egestas, odio id pretium varius, ante nulla dignissim erat, sodales tristique nisl erat tempor tellus. Quisque magna nisl, finibus id dolor sed, porttitor auctor dui. Nulla accumsan tristique dapibus. Nullam pulvinar eleifend lorem, non varius neque.'
  },
  {
    id: 3,
    slug: 'blog-3',
    title: 'Blog 3',
    publishedBy: 'AgusRdz',
    publishedAt: new Date(),
    tags: ['tag1', 'tag2', 'tag3'],
    coverImage: 'https://picsum.photos/250/300',
    text:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras non leo et risus pulvinar aliquet a facilisis nisi. Morbi sit amet tellus mollis, dictum nulla molestie, volutpat nunc. Nunc volutpat, lectus eget euismod consequat, nisl ex aliquam turpis, ut dignissim magna nulla quis sem. Etiam nec erat tincidunt, tincidunt nibh in, dictum lectus. Cras egestas, odio id pretium varius, ante nulla dignissim erat, sodales tristique nisl erat tempor tellus. Quisque magna nisl, finibus id dolor sed, porttitor auctor dui. Nulla accumsan tristique dapibus. Nullam pulvinar eleifend lorem, non varius neque.'
  },
  {
    id: 4,
    slug: 'blog-4',
    title: 'Blog 4',
    publishedBy: 'AgusRdz',
    publishedAt: new Date(),
    tags: ['tag1', 'tag2', 'tag3'],
    coverImage: 'https://picsum.photos/400/300',
    text:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras non leo et risus pulvinar aliquet a facilisis nisi. Morbi sit amet tellus mollis, dictum nulla molestie, volutpat nunc. Nunc volutpat, lectus eget euismod consequat, nisl ex aliquam turpis, ut dignissim magna nulla quis sem. Etiam nec erat tincidunt, tincidunt nibh in, dictum lectus. Cras egestas, odio id pretium varius, ante nulla dignissim erat, sodales tristique nisl erat tempor tellus. Quisque magna nisl, finibus id dolor sed, porttitor auctor dui. Nulla accumsan tristique dapibus. Nullam pulvinar eleifend lorem, non varius neque.'
  },
  {
    id: 5,
    slug: 'blog-5',
    title: 'Blog 5',
    publishedBy: 'AgusRdz',
    publishedAt: new Date(),
    tags: ['tag1', 'tag2', 'tag3'],
    coverImage: 'https://picsum.photos/200/300',
    text:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras non leo et risus pulvinar aliquet a facilisis nisi. Morbi sit amet tellus mollis, dictum nulla molestie, volutpat nunc. Nunc volutpat, lectus eget euismod consequat, nisl ex aliquam turpis, ut dignissim magna nulla quis sem. Etiam nec erat tincidunt, tincidunt nibh in, dictum lectus. Cras egestas, odio id pretium varius, ante nulla dignissim erat, sodales tristique nisl erat tempor tellus. Quisque magna nisl, finibus id dolor sed, porttitor auctor dui. Nulla accumsan tristique dapibus. Nullam pulvinar eleifend lorem, non varius neque.'
  },
  {
    id: 6,
    slug: 'blog-6',
    title: 'Blog 6',
    publishedBy: 'AgusRdz',
    publishedAt: new Date(),
    tags: ['tag1', 'tag2', 'tag3'],
    coverImage: 'https://picsum.photos/300/300',
    text:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras non leo et risus pulvinar aliquet a facilisis nisi. Morbi sit amet tellus mollis, dictum nulla molestie, volutpat nunc. Nunc volutpat, lectus eget euismod consequat, nisl ex aliquam turpis, ut dignissim magna nulla quis sem. Etiam nec erat tincidunt, tincidunt nibh in, dictum lectus. Cras egestas, odio id pretium varius, ante nulla dignissim erat, sodales tristique nisl erat tempor tellus. Quisque magna nisl, finibus id dolor sed, porttitor auctor dui. Nulla accumsan tristique dapibus. Nullam pulvinar eleifend lorem, non varius neque.'
  },
  {
    id: 7,
    slug: 'blog-7',
    title: 'Blog 7',
    publishedBy: 'AgusRdz',
    publishedAt: new Date(),
    tags: ['tag1', 'tag2', 'tag3'],
    coverImage: 'https://picsum.photos/200/100',
    text:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras non leo et risus pulvinar aliquet a facilisis nisi. Morbi sit amet tellus mollis, dictum nulla molestie, volutpat nunc. Nunc volutpat, lectus eget euismod consequat, nisl ex aliquam turpis, ut dignissim magna nulla quis sem. Etiam nec erat tincidunt, tincidunt nibh in, dictum lectus. Cras egestas, odio id pretium varius, ante nulla dignissim erat, sodales tristique nisl erat tempor tellus. Quisque magna nisl, finibus id dolor sed, porttitor auctor dui. Nulla accumsan tristique dapibus. Nullam pulvinar eleifend lorem, non varius neque.'
  },
  {
    id: 8,
    slug: 'blog-8',
    title: 'Blog 8',
    publishedBy: 'AgusRdz',
    publishedAt: new Date(),
    tags: ['tag1', 'tag2', 'tag3'],
    coverImage: 'https://picsum.photos/250/300',
    text:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras non leo et risus pulvinar aliquet a facilisis nisi. Morbi sit amet tellus mollis, dictum nulla molestie, volutpat nunc. Nunc volutpat, lectus eget euismod consequat, nisl ex aliquam turpis, ut dignissim magna nulla quis sem. Etiam nec erat tincidunt, tincidunt nibh in, dictum lectus. Cras egestas, odio id pretium varius, ante nulla dignissim erat, sodales tristique nisl erat tempor tellus. Quisque magna nisl, finibus id dolor sed, porttitor auctor dui. Nulla accumsan tristique dapibus. Nullam pulvinar eleifend lorem, non varius neque.'
  },
  {
    id: 9,
    slug: 'blog-9',
    title: 'Blog 9',
    publishedBy: 'AgusRdz',
    publishedAt: new Date(),
    tags: ['tag1', 'tag2', 'tag3'],
    coverImage: 'https://picsum.photos/400/300',
    text:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras non leo et risus pulvinar aliquet a facilisis nisi. Morbi sit amet tellus mollis, dictum nulla molestie, volutpat nunc. Nunc volutpat, lectus eget euismod consequat, nisl ex aliquam turpis, ut dignissim magna nulla quis sem. Etiam nec erat tincidunt, tincidunt nibh in, dictum lectus. Cras egestas, odio id pretium varius, ante nulla dignissim erat, sodales tristique nisl erat tempor tellus. Quisque magna nisl, finibus id dolor sed, porttitor auctor dui. Nulla accumsan tristique dapibus. Nullam pulvinar eleifend lorem, non varius neque.'
  },
  {
    id: 10,
    slug: 'blog-10',
    title: 'Blog 10',
    publishedBy: 'AgusRdz',
    publishedAt: new Date(),
    tags: ['tag1', 'tag2', 'tag3'],
    coverImage: 'https://picsum.photos/200/300',
    text:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras non leo et risus pulvinar aliquet a facilisis nisi. Morbi sit amet tellus mollis, dictum nulla molestie, volutpat nunc. Nunc volutpat, lectus eget euismod consequat, nisl ex aliquam turpis, ut dignissim magna nulla quis sem. Etiam nec erat tincidunt, tincidunt nibh in, dictum lectus. Cras egestas, odio id pretium varius, ante nulla dignissim erat, sodales tristique nisl erat tempor tellus. Quisque magna nisl, finibus id dolor sed, porttitor auctor dui. Nulla accumsan tristique dapibus. Nullam pulvinar eleifend lorem, non varius neque.'
  },
  {
    id: 11,
    slug: 'blog-11',
    title: 'Blog 11',
    publishedBy: 'AgusRdz',
    publishedAt: new Date(),
    tags: ['tag1', 'tag2', 'tag3'],
    coverImage: 'https://picsum.photos/300/300',
    text:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras non leo et risus pulvinar aliquet a facilisis nisi. Morbi sit amet tellus mollis, dictum nulla molestie, volutpat nunc. Nunc volutpat, lectus eget euismod consequat, nisl ex aliquam turpis, ut dignissim magna nulla quis sem. Etiam nec erat tincidunt, tincidunt nibh in, dictum lectus. Cras egestas, odio id pretium varius, ante nulla dignissim erat, sodales tristique nisl erat tempor tellus. Quisque magna nisl, finibus id dolor sed, porttitor auctor dui. Nulla accumsan tristique dapibus. Nullam pulvinar eleifend lorem, non varius neque.'
  },
  {
    id: 12,
    slug: 'blog-12',
    title: 'Blog 12',
    publishedBy: 'AgusRdz',
    publishedAt: new Date(),
    tags: ['tag1', 'tag2', 'tag3'],
    coverImage: 'https://picsum.photos/200/100',
    text:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras non leo et risus pulvinar aliquet a facilisis nisi. Morbi sit amet tellus mollis, dictum nulla molestie, volutpat nunc. Nunc volutpat, lectus eget euismod consequat, nisl ex aliquam turpis, ut dignissim magna nulla quis sem. Etiam nec erat tincidunt, tincidunt nibh in, dictum lectus. Cras egestas, odio id pretium varius, ante nulla dignissim erat, sodales tristique nisl erat tempor tellus. Quisque magna nisl, finibus id dolor sed, porttitor auctor dui. Nulla accumsan tristique dapibus. Nullam pulvinar eleifend lorem, non varius neque.'
  },
  {
    id: 13,
    slug: 'blog-13',
    title: 'Blog 13',
    publishedBy: 'AgusRdz',
    publishedAt: new Date(),
    tags: ['tag1', 'tag2', 'tag3'],
    coverImage: 'https://picsum.photos/250/300',
    text:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras non leo et risus pulvinar aliquet a facilisis nisi. Morbi sit amet tellus mollis, dictum nulla molestie, volutpat nunc. Nunc volutpat, lectus eget euismod consequat, nisl ex aliquam turpis, ut dignissim magna nulla quis sem. Etiam nec erat tincidunt, tincidunt nibh in, dictum lectus. Cras egestas, odio id pretium varius, ante nulla dignissim erat, sodales tristique nisl erat tempor tellus. Quisque magna nisl, finibus id dolor sed, porttitor auctor dui. Nulla accumsan tristique dapibus. Nullam pulvinar eleifend lorem, non varius neque.'
  },
  {
    id: 14,
    slug: 'blog-14',
    title: 'Blog 14',
    publishedBy: 'AgusRdz',
    publishedAt: new Date(),
    tags: ['tag1', 'tag2', 'tag3'],
    coverImage: 'https://picsum.photos/400/300',
    text:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras non leo et risus pulvinar aliquet a facilisis nisi. Morbi sit amet tellus mollis, dictum nulla molestie, volutpat nunc. Nunc volutpat, lectus eget euismod consequat, nisl ex aliquam turpis, ut dignissim magna nulla quis sem. Etiam nec erat tincidunt, tincidunt nibh in, dictum lectus. Cras egestas, odio id pretium varius, ante nulla dignissim erat, sodales tristique nisl erat tempor tellus. Quisque magna nisl, finibus id dolor sed, porttitor auctor dui. Nulla accumsan tristique dapibus. Nullam pulvinar eleifend lorem, non varius neque.'
  },
  {
    id: 15,
    slug: 'blog-15',
    title: 'Blog 15',
    publishedBy: 'AgusRdz',
    publishedAt: new Date(),
    tags: ['tag1', 'tag2', 'tag3'],
    coverImage: 'https://picsum.photos/200/300',
    text:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras non leo et risus pulvinar aliquet a facilisis nisi. Morbi sit amet tellus mollis, dictum nulla molestie, volutpat nunc. Nunc volutpat, lectus eget euismod consequat, nisl ex aliquam turpis, ut dignissim magna nulla quis sem. Etiam nec erat tincidunt, tincidunt nibh in, dictum lectus. Cras egestas, odio id pretium varius, ante nulla dignissim erat, sodales tristique nisl erat tempor tellus. Quisque magna nisl, finibus id dolor sed, porttitor auctor dui. Nulla accumsan tristique dapibus. Nullam pulvinar eleifend lorem, non varius neque.'
  }
]

const Home = () => {
  const [posts, setPosts] = useState([])
  useEffect(() => {
    setPosts(() => DUMMY)
  }, [])

  const handleOnBottom = () => {
    const more = [
      {
        id: new Date().getTime(),
        slug: 'blog-16',
        title: new Date().getTime(),
        publishedBy: 'AgusRdz',
        publishedAt: new Date(),
        tags: ['tag1', 'tag2', 'tag3'],
        coverImage: 'https://picsum.photos/300/300',
        text:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras non leo et risus pulvinar aliquet a facilisis nisi. Morbi sit amet tellus mollis, dictum nulla molestie, volutpat nunc. Nunc volutpat, lectus eget euismod consequat, nisl ex aliquam turpis, ut dignissim magna nulla quis sem. Etiam nec erat tincidunt, tincidunt nibh in, dictum lectus. Cras egestas, odio id pretium varius, ante nulla dignissim erat, sodales tristique nisl erat tempor tellus. Quisque magna nisl, finibus id dolor sed, porttitor auctor dui. Nulla accumsan tristique dapibus. Nullam pulvinar eleifend lorem, non varius neque.'
      }
    ]
    const newPosts = posts.concat(more)
    setPosts(() => newPosts)
  }
  return (
    <BotttomScrollListener onBottom={handleOnBottom}>
      <Suspense fallback={<SuspenseLoader />}>
        <InfinitePosts posts={posts} />
      </Suspense>
    </BotttomScrollListener>
  )
}

export default Home
