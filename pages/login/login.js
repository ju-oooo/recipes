// pages/login/login.js
const app = getApp();
Page({
  // 获取更新input值
  inputedit: function(e) {
    let _this = this;
    let dataset = e.currentTarget.dataset;
    let name = dataset.name;
    let value = e.detail.value;
    _this.data[name] = value
    this.setData({
      name: _this.data[name]
    })
  },
  // 执行登录方法
  _login: function(e) {
    let username = this.data.username
    let password = this.data.password
    if (!username || !password) {
      wx.showToast({
        title: '用户名或密码格式有误',
        icon: 'none'
      });
      return;
    }
    wx.showLoading({
      title: '正在登陆'
    });
    wx.request({
      url: app.globalData.URL + '/user/login',
      data: {
        "phone": username,
        "password": password
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
            title: '登陆成功',
            icon: 'success',
            duration: 2000
          });
          app.globalData.userInfo = data.result;
          wx.switchTab({
            url: '../personal/personal'
          });
        } else {
          wx.showToast({
            title: '用户名或密码有误',
            icon: 'none',
            duration: 2000
          });
        }

      }
    });
  },
  /**
   * 页面的初始数据
   */
  data: {
    username: '18329776240',
    password: '1234567890'
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