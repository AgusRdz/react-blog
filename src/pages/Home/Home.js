import Loader from 'components/Loader'
import React, { Suspense, useCallback, useEffect, useState } from 'react'
import BotttomScrollListener from 'react-bottom-scroll-listener'
import SuspenseResolver from 'utils/suspense-resolver'
import { HomeService } from 'services/api/home'

const InfinitePosts = SuspenseResolver('components/InfinitePosts')

const Home = () => {
  const [posts, setPosts] = useState([])
  const [page, setPage] = useState(0)
  const [hasNext, setHasNext] = useState(true)

  const loadPosts = useCallback(async () => {
    if (hasNext) {
      const { data, error } = await HomeService.index(page)

      if (error) {
        console.log({ error })
        return
      }

      setPosts((prevBlogs) => prevBlogs.concat(data.blogs))
      setHasNext(() => data.hasNext)
    }
  }, [page, hasNext])

  useEffect(() => {
    loadPosts()
  }, [loadPosts])

  const handleOnBottom = () => {
    if (hasNext) {
      setPage((prevPage) => (prevPage = prevPage + 1))
    }
  }

  return (
    <BotttomScrollListener onBottom={handleOnBottom}>
      <Suspense fallback={<Loader />}>
        <InfinitePosts posts={posts} />
      </Suspense>
    </BotttomScrollListener>
  )
}

export default Home
