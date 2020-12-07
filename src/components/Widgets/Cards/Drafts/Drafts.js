import React, { useCallback, useEffect, useState } from 'react'
import { Create } from '@material-ui/icons'
import useIsMounted from 'hooks/useIsMounted'
import TemplateCard from 'components/Widgets/TemplateCard'
import { BlogStatisticService } from 'services/api/statistics/blog'

const Drafts = () => {
  const isMounted = useIsMounted()
  const [drafts, setDrafts] = useState(0)

  const fetchDrafts = useCallback(async () => {
    if (!isMounted.current) return

    const { data, error = null } = await BlogStatisticService.index('draft')

    if (error) return

    setDrafts(() => data.total)
  }, [isMounted])

  useEffect(() => {
    fetchDrafts()
  }, [fetchDrafts])

  return <TemplateCard title="Total Drafts" content={drafts} icon={Create} />
}

export default Drafts
