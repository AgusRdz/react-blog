import React, { useCallback, useEffect, useState } from 'react'
import { LibraryBooks } from '@material-ui/icons'
import { BlogStatisticService } from 'services/api/statistics/blog'
import useIsMounted from 'hooks/useIsMounted'
import TemplateCard from 'components/Widgets/TemplateCard'

const Total = () => {
  const isMounted = useIsMounted()
  const [total, setTotal] = useState(0)

  const fetchTotal = useCallback(async () => {
    if (!isMounted.current) return

    const { data, error = null } = await BlogStatisticService.index()

    if (error) return

    setTotal(() => data.total)
  }, [isMounted])

  useEffect(() => {
    fetchTotal()
  }, [fetchTotal])

  return <TemplateCard title="Total" content={total} icon={LibraryBooks} />
}

export default Total
