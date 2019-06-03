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
      {
        id: 1083,
        title: '意大利章鱼土豆沙拉',
        description: '可以当正餐吃的沙拉~食材丰富且相当有饱腹感！',
        img_url: 'http://shipu.qn.youyizhidao.com/jianfeishipu/shala/2.jpg?imageView2/2/w/200/h/200/interlace/0/q/90',
        food_materialL: '',
        cooking_step: '',
      },
      {
        id: 1083,
        title: '橄榄油鸡蛋沙拉',
        description: '低脂高蛋白的健康早餐~',
        img_url: 'http://shipu.qn.youyizhidao.com/jianfeishipu/shala/3.jpg?imageView2/2/w/200/h/200/interlace/0/q/90',
        food_materialL: '',
        cooking_step: '',
      },
      {
        id: 1083,
        title: '泰式青木瓜虾沙拉',
        description: '不同于西式沙拉清淡的口味，有辣味的沙拉让人眼前一亮，而且辣椒也是有助于减肥的哟！',
        img_url: 'http://shipu.qn.youyizhidao.com/jianfeishipu/shala/5.jpg?imageView2/2/w/200/h/200/interlace/0/q/90',
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
  imageError: function(e) {
    console.log('image3发生error事件，携带值为', e.detail.errMsg)
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

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