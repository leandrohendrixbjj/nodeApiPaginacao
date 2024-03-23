export default async (req, res, next) => {
  try {
    let {
      limit,
      page,
      orderBy,
      order
    } = req.query

    const content = [
      {
        data: await req.result.find()
          .sort({ [orderBy]: order })
          .skip((page - 1) * limit)
          .limit(limit)

      },
      {
        meta: [
          { limit, page, orderBy, order }
        ]
      }
    ]
    res.status(200).json({ success: true, content })
  } catch (error) {
    next(error)
  }
}
