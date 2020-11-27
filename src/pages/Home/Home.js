import Loader from 'components/Loader'
import React, { Suspense, useCallback, useEffect, useState } from 'react'
import BotttomScrollListener from 'react-bottom-scroll-listener'
import SuspenseResolver from 'utils/suspense-resolver'
import { HomeService } from 'services/api/home'
import useIsMounted from 'hooks/useIsMounted'

const InfinitePosts = SuspenseResolver('components/InfinitePosts')

const Home = () => {
  const [posts, setPosts] = useState([])
  const [page, setPage] = useState(0)
  const [hasNext, setHasNext] = useState(true)
  const isMounted = useIsMounted()

  const loadPosts = useCallback(async () => {
    if (!isMounted) return
    if (hasNext) {
      const { data, error } = await HomeService.index(page)

      if (error) return

      setPosts((prevBlogs) => prevBlogs.concat(data.blogs))
      setHasNext(() => data.hasNext)
    }
  }, [page, hasNext, isMounted])

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
