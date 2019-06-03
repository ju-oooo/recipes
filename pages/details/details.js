// pages/details/details.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    details: [{
      id: 1083,
      title: '牛油果沙拉1',
      description: '超级健康的一款沙拉，纯素食但是营养全面哦~',
      img_url: 'http://shipu.qn.youyizhidao.com/jianfeishipu/shala/1.jpg?imageView2/2/w/200/h/200/interlace/0/q/90',
      food_materialL: '牛油果半个#圣女果3个#黄瓜半根#黑橄榄3颗#奇亚籽一把#生菜2片#洋葱小半个#黄椒1/4个#杏仁一把#西梅干适量',
      cooking_step: '1/3 将各种蔬菜洗净切好。#2/3 牛油果酱做法：半个牛油果，两勺原味无糖酸奶，一勺橄榄油，柠檬汁少许，然后盐视个人口味咸淡适量添加，黑胡椒适量一起放搅拌机打匀即可。#3/3 蔬菜撒上奇亚籽，把牛油果酱浇上去即可',
    }]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    let temp = this.data.details;
    temp[0].food_materialL = temp[0].food_materialL.split("#");
    temp[0].cooking_step=temp[0].cooking_step.split("#");
    this.setData({ 'details': temp });
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})