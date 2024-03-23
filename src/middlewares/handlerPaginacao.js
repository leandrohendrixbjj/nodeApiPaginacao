export default (req, res, next) => {
  let {
    limit,
    page,
    orderBy = '_id',
    order = 'asc'
  } = req.query

  req.query.limit = setData(limit)
  req.query.page = setData(page)
  req.query.orderBy = setOrderBy(req, orderBy)
  req.query.order = setOrder(order)

  next()
}

function setData(value) {
  if (!value) return 1
  return parseInt(value)
}

function setOrderBy(req, value) {
  const columns = Object.keys(req.result.schema.obj)
  const data = columns.find(column => column == value)  
  return value
}

function setOrder(value) {
  return (value.toLowerCase() == 'desc') ? 1 : -1
}