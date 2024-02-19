async function filters(req, res, next) {
  try {
    let { limit = 5, page = 1, orderBy = "_id", order = "desc" } = req.query

    parseInt(limit)
    parseInt(page)
    order = (order.toLowerCase() == 'asc') ? 1 : -1

    const content = [
      {
        data: await req.result.find()
          .sort({ [orderBy]: order })
          .skip((page - 1) * limit)
          .limit(limit)

      },
      {
        meta: [
          { limit, page }
        ]
      }
    ]
    res.status(200).json({ success: true, content })
  } catch (error) {
    next(error)
  }
}

export default filters