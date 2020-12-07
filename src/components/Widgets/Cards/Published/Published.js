import React, { useCallback, useEffect, useState } from 'react'
import { Done } from '@material-ui/icons'
import TemplateCard from 'components/Widgets/TemplateCard'
import useIsMounted from 'hooks/useIsMounted'
import { BlogStatisticService } from 'services/api/statistics/blog'

const Published = () => {
  const isMounted = useIsMounted()
  const [published, setPublished] = useState(0)

  const fetchPublished = useCallback(async () => {
    if (!isMounted.current) return

    const { data, error = null } = await BlogStatisticService.index('published')

    if (error) return

    setPublished(() => data.total)
  }, [isMounted])

  useEffect(() => {
    fetchPublished()
  }, [fetchPublished])

  return (
    <TemplateCard title="Total Published" content={published} icon={Done} />
  )
}

export default Published
