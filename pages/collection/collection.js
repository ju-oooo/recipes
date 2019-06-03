// pages/board/board.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

    recipesList: [
      {
        id: 1083,
        title: '牛油果沙拉1',
        description: '超级健康的一款沙拉，纯素食但是营养全面哦~',
        img_url: 'http://shipu.qn.youyizhidao.com/jianfeishipu/shala/1.jpg?imageView2/2/w/200/h/200/interlace/0/q/90',
        food_materialL: '',
        cooking_step: '',
      },
    ]
    // array: [{
    //   mode: 'scaleToFill',
    //   //text: 'scaleToFill：不保持纵横比缩放图片，使图片完全适应'
    // }],
    // src: 'http://shipu.qn.youyizhidao.com/jianfeishipu/shala/1.jpg?imageView2/2/w/200/h/200/interlace/0/q/90'
  },
  imageError: function (e) {
    console.log('image3发生error事件，携带值为', e.detail.errMsg)
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})