// pages/login/login.js
Page({
  // 获取更新input值
  inputedit: function(e) {
    console.log(e)
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
  _login: function() {
    console.log(this.data.username)
    console.log(this.data.password)
  },
  /**
   * 页面的初始数据
   */
  data: {
    username: '',
    password: ''
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