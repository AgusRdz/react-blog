import React, { useCallback, useEffect, useState } from 'react'
import {
  Button,
  Card,
  CardHeader,
  Divider,
  Link,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow
} from '@material-ui/core'
import { BlogService } from 'services/api/blog'
import { useHistory } from 'react-router'
import { Create } from '@material-ui/icons'
import useIsMounted from 'hooks/useIsMounted'

const AllPosts = () => {
  const isMounted = useIsMounted()
  const history = useHistory()
  const [blogs, setBlogs] = useState([])
  const [total, setTotal] = useState(0)
  const [page, setPage] = useState(0)
  const rowsPerPage = 10

  const fetchBlogs = useCallback(async () => {
    if (!isMounted.current) return
    const { data, error } = await BlogService.index(page)
    if (error) {
      return console.log(error)
    }

    setBlogs(() => data.blogs)
    setTotal(() => data.total)
  }, [page, isMounted])

  useEffect(() => {
    fetchBlogs()
  }, [fetchBlogs])

  const handleChangePage = (event, newPage) => setPage(() => newPage)

  const handleCreate = () => history.push('/dashboard/posts/create')

  const handleEdit = (id, slug) => () => {
    history.push({
      state: {
        id
      },
      pathname: `/dashboard/posts/edit/${slug}`
    })
  }

  return (
    <Card>
      <CardHeader
        title="Posts"
        action={
          <Button
            color="primary"
            variant="contained"
            onClick={handleCreate}
            startIcon={<Create />}
          >
            Create
          </Button>
        }
      />
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
            {blogs.map(
              ({ _id, title, status, createdAt, updatedAt, slug }, index) => (
                <TableRow key={index}>
                  <TableCell component="td">
                    <Link
                      variant="body1"
                      color="inherit"
                      to="#"
                      onClick={handleEdit(_id, slug)}
                    >
                      {title}
                    </Link>
                  </TableCell>
                  <TableCell component="td">Agus Rdz</TableCell>
                  <TableCell component="td">{status}</TableCell>
                  <TableCell component="td">{createdAt}</TableCell>
                  <TableCell component="td">{updatedAt}</TableCell>
                </TableRow>
              )
            )}
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
