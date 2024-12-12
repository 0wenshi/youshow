const express = require('express');
const { Op } = require('sequelize');
const Event = require('../models/Events');

const router = express.Router();

// 获取指定月份的事件
router.get('/:year/:month', async (req, res) => {
  const { year, month } = req.params;

  try {
    const monthPadded = month.padStart(2, '0'); // 确保月份是两位数
    const lastDay = new Date(year, month, 0).getDate(); // 获取该月的最后一天

    const events = await Event.findAll({
      where: {
        event_date: {
          // 修改为正确的列名
          [Op.between]: [
            `${year}-${monthPadded}-01`,
            `${year}-${monthPadded}-${lastDay}`,
          ],
        },
      },
    });

    // 格式化返回的数据
    const formattedEvents = events.map((event) => ({
      id: event.id,
      title: event.title,
      description: event.description,
      date: event.event_date,
      start_time: event.start_time,
      end_time: event.end_time,
      location: event.location,
      price: event.price,
    }));

    res.json(formattedEvents);
  } catch (error) {
    console.error('Error fetching events:', error.message);
    res.status(500).json({
      message: 'An unexpected error occurred. Please try again later.',
    });
  }
});

module.exports = router;
