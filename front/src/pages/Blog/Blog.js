import SuspenseLoader from 'components/SuspenseLoader'
import React, { Suspense, useEffect, useState } from 'react'
import SuspenseResolver from 'utils/suspense-resolver'
const BlogContent = SuspenseResolver('components/BlogContent')

const Blog = ({ match }) => {
  const [slug, setSlug] = useState(null)

  useEffect(() => {
    setSlug(() => match.params.slug)
  }, [match.params.slug])

  return (
    <Suspense fallback={<SuspenseLoader />}>
      <BlogContent slug={slug} />
    </Suspense>
  )
}

export default Blog
