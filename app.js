//app.js
App({
  onLaunch: function () {
    //调用API从本地缓存中获取数据
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
  },
  getUserInfo:function(cb){
    var that = this
    if(this.globalData.userInfo){
      typeof cb == "function" && cb(this.globalData.userInfo)
    }else{
      //调用登录接口
      wx.login({
        success: function (data) {
          wx.setStorageSync('code', data.code);
          typeof cb == "function" && cb(that.globalData.userInfo)
          // wx.getUserInfo({
          //   success: function (res) {
          //     that.globalData.userInfo = res.userInfo
          //     console.log(that.globalData.userInfo);
          //     typeof cb == "function" && cb(that.globalData.userInfo)
          //   }
          // })
        }
      })
    }
  },
  authorize:function(){
    wx.getSetting({
        success(res) {
            if (!res.authSetting['scope.record']) {
                wx.authorize({
                    scope: 'scope.record',
                    success(cb) {
                        typeof cb == "function" && cb(that.globalData.userInfo)
                    }
                })
            }
        }
    })
  },
  globalData:{
    userInfo:null
  }
})