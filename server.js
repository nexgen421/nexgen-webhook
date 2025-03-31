const express = require('express');
const { sequelize } = require('./models');
const webhookRoutes = require('./routes/webhookRoutes');

const app = express();
app.use(express.json());

// Routes
app.use('/webhook', webhookRoutes);
app.get('/',(req,res)=>{
  res.status(200).json({messgae:"Hello World"})
})
// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, async () => {
  try {
    await sequelize.sync();
    console.log(`Server is running on port ${PORT}`);
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
});
