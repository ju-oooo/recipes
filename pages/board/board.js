// pages/board/board.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    recipesList: [],
    count: 20,
    pageNum: 1
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    this._getRecipesList();
  },
  // 加在首页数据
  _getRecipesList: function() {
    wx.showLoading({
      title: '加载中',
    })
    wx.request({
      url: 'http://127.233.2.40:5159/cuisine',
      data: {
        "count": this.data.count,
        "pageNum": this.data.pageNum,

      },
      header: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      method: 'POST',
      success: (res) => {
        let recipesList = this.data.recipesList.concat(res.data.cuisineList);
        this.setData({
          'recipesList': recipesList,
          'pageNum': ++this.data.pageNum
        })
        wx.hideLoading();
      }
    })
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
    console.log(1232312)
    this.setData({
      'pageNum': 1
    });
    this._getRecipesList();
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {
    this._getRecipesList();
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})