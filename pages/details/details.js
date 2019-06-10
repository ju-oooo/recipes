// pages/details/details.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    details: null
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(params) {
    this._getRecipesDetails(params.id)
  },
  // 加载菜品详情数据
  _getRecipesDetails: function(id) {
    wx.showLoading({
      title: '加载中',
    })
    wx.request({
      url: app.globalData.URL + '/cuisine/details',
      data: {
        "id": id
      },
      header: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      method: 'POST',
      success: (res) => {
        let details = res.data.details;
        details.food_material = details.food_material.split("#");
        details.cooking_step = details.cooking_step.split("#");
        console.log(details);
        this.setData({
          'details': details,
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