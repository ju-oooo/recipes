// pages/board/board.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    recipesList: null
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function() {

  },
  // 加载收藏数据
  _getRecipesList: function() {
    wx.showLoading({
      title: '加载中'
    });
    wx.request({
      url: app.globalData.URL + '/collect',
      data: {
        userId: app.globalData.userInfo.id
      },
      header: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      method: 'POST',
      success: (res) => {
        
        wx.hideLoading();
        if (res.data.code === 404) {
          wx.showToast({
            title: '暂无此数据',
            icon: 'none'
          });
          this.setData({
            'recipesList': null
          })
        } else {
          let recipesList = res.data.cuisineList;
          console.log(recipesList)
          this.setData({
            'recipesList': recipesList
          })
        }

      }
    });
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
    if (app.globalData.userInfo) {
      this._getRecipesList();
    } else {
      wx.showToast({
        title: '请登录',
        icon: 'none'
      })
      setTimeout(() => {
        wx.switchTab({
          url: '/pages/board/board'
        })
      }, 1500);
    }
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