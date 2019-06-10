// pages/board/board.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    recipesList: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function() {
    wx.login({

    })
    this._getRecipesList();
  },
  // 加在首页数据
  _getRecipesList: function() {
    wx.showLoading({
      title: '加载中'
    });
    wx.request({
      url: app.globalData.URL +'/collect',
      data: {
        userId: 1001
      },
      header: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      method: 'POST',
      success: (res) => {
        // console.log(wx.globalData.userInfo)
       
        if (res.data.code === 404) {
          wx.showToast({
            title: '暂无此数据',
            icon: 'none'
          })

        } else {
          let recipesList = res.data.cuisineList;
          this.setData({
            'recipesList': recipesList
          })
        }
        wx.hideLoading();
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