const { poolData } = require('../database/index')

// const getOrderById = async (req, res) => {
//   const id = req.params.id
//   const q = 'SELECT * FROM Order WHERE Order_id = id '

//   try {
//     const [rows] = await poolData.execute(q)
//     console.log(typeof JSON.parse(rows[0].images))
//   } catch (error) {}
// }
const getAllOrder = async (req, res) => {
  const q = "SELECT * FROM `order`" 
  try {
    const [rows] = await poolData.execute(q)
    res.status(200).json(rows)
  } catch (error) {
    res.status(500).json(error.message)
  }
}

const deleteOrder = async (req, res) => {
  try {
    const { id } = req.params;
    const [rows, fields] = await poolData.query(
      "DELETE FROM `order` WHERE `order`.Order_id =?",
      [id]
    );
    res.json({ data: rows });
  } catch (error) {
    console.log(error);
  }
};


const CreateOrder = async (req, res) => {
  try {
    const { user_id, total } = req.body;
    const orderDate = new Date(); // corrected variable name
console.log();
    const sql = 'INSERT INTO `Order` (Order_date, total_amount, User_id) VALUES (?, ?, ?)';
    const [rows, fields] = await poolData.query(sql, [orderDate, total, user_id]);

    res.json({
      success: true,
      data: rows,
    });
  } catch (error) {
    console.error('Error creating order:', error);
    res.status(500).json({
      success: false,
      error: 'Internal Server Error',
    });
  }
};



const EditOrder = async (req, res) => {
  try {
    const Orderdate = req.body.date
    let total=req.body.total
    let user_id=req.body.used_id
    const { id } = req.params.Order_id
    const sql = 'update Product set Order_date = ?,total_amount =?,User_id=?'
    const [rows, fields] = await poolData.query(sql, [Orderdate,total,user_id, id])
    res.json({
      data: rows,
    })
  } catch (error) {
    console.log(error)
  }
}
// const getOrderByUserid =async(req,res) =>{
// const user_id = req.params.User_id
//   const q = 'SELECT * FROM Order WHERE User_id=user_id '

//   try {
//     const [rows] = await poolData.execute(q)
//     console.log(typeof JSON.parse(rows[0].images))
//   } catch (error) {}
// }



module.exports = {  getAllOrder,CreateOrder,EditOrder,deleteOrder}
