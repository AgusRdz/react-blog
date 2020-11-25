import React, { useCallback, useEffect, useState } from 'react'
import {
  Card,
  CardHeader,
  Divider,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow
} from '@material-ui/core'
import { BlogService } from 'services/api/blog'

const AllPosts = () => {
  const [blogs, setBlogs] = useState([])
  const [total, setTotal] = useState(0)
  const [page, setPage] = useState(0)
  const rowsPerPage = 10

  const fetchBlogs = useCallback(async () => {
    const { data, error } = await BlogService.index(page)
    if (error) {
      return console.log(error)
    }

    setBlogs(() => data.blogs)
    setTotal(() => data.total)
  }, [page])

  useEffect(() => {
    fetchBlogs()
  }, [fetchBlogs])

  const handleChangePage = (event, newPage) => setPage(() => newPage)

  return (
    <Card>
      <CardHeader title="Posts" />
      <Divider />
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell component="th">Title</TableCell>
              <TableCell component="th">Author</TableCell>
              <TableCell component="th">Status</TableCell>
              <TableCell component="th">Created At</TableCell>
              <TableCell component="th">Updated At</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {blogs.map(({ title, status, createdAt, updatedAt }, index) => (
              <TableRow key={index}>
                <TableCell component="td">{title}</TableCell>
                <TableCell component="td">Agus Rdz</TableCell>
                <TableCell component="td">{status}</TableCell>
                <TableCell component="td">{createdAt}</TableCell>
                <TableCell component="td">{updatedAt}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10]}
        component="div"
        count={total}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
      />
    </Card>
  )
}

export default AllPosts
