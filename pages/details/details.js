// pages/details/details.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    details: null,
    star: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(params) {
    if (!app.globalData.userInfo) {
      this._getRecipesDetails(params.id, null);
    } else {
      this._getRecipesDetails(params.id, app.globalData.userInfo.id);
    }
  },
  // 加载菜品详情数据
  _getRecipesDetails: function(id, userId) {
    wx.showLoading({
      title: '加载中',
    })
    wx.request({
      url: app.globalData.URL + '/cuisine/details',
      data: {
        "id": id,
        "userId": userId
      },
      header: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      method: 'POST',
      success: (res) => {
        console.log(res.data);
        let details = res.data.details;
        details.food_material = details.food_material.split("#");
        details.cooking_step = details.cooking_step.split("#");
        this.setData({
          'details': details,
        })
        console.log(res.data.star)
        // 检测是否存在于我的收藏
        if (res.data.star) {
          this.setData({
            'star': res.data.star,
          })
        }
        wx.hideLoading();
      }
    })
  },

  // 改变收藏
  _changeCollect: function() {
    if (!app.globalData.userInfo) {
      wx.showToast({
        title: '请登录',
        icon: 'none'
      });
      return;
    }
    let url = app.globalData.URL;
    let message;
    console.log(!this.data.star)
    if (!this.data.star) {
      url += '/collect/insert';
      message = "添加"
    } else {
      url += '/collect/delete';
      message = "取消"
    }
    console.log(this.data.details.id, app.globalData.userInfo.id)
    wx.request({
      url: url,
      data: {
        "cuisineId": this.data.details.id,
        "userId": app.globalData.userInfo.id
      },
      header: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      method: 'POST',
      success: (res) => {
        this.setData({
          'star': !this.data.star,
        })
        console.log(res.data);
        let data = res.data;
        if (data.code === 200) {
          wx.showToast({
            title: message + '成功',
            icon: 'none'
          });
        } else {
          wx.showToast({
            title: message + '失败',
            icon: 'none'
          });
        }
      }
    });
  },
  // 用户所有列表 并更新入全局
  _selectCollect: function() {
    wx.showLoading({
      title: '注册中...',
      icon: 'loading'
    });
    wx.request({
      url: app.globalData.URL + 'collect/',
      data: {
        "userId": app.globalData.userInfo.id
      },
      header: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      method: 'POST',
      success: (res) => {
        wx.hideLoading();
        let data = res.data;
        if (data.code === 200) {
          wx.showToast({
            title: '操作成功',
            icon: 'success',
            duration: 2000
          });
        } else {
          wx.showToast({
            title: '操作失败',
            icon: 'success',
            duration: 2000
          });
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