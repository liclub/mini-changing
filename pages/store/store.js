var app = getApp();
Page({
  data:{
    storeName:"",
    zanCount:20,
    chooseColor:["rgb(28, 169, 255)","#7F8389","#7F8389","#7F8389","#7F8389","#7F8389"],
    productList:[],
    allProduct:[],
    headImg:"../../images/ic_avatar_male.png"
  },
   // <image bindtap="chooseHead" class="head-img" src="{{headImg}}"></image>
   // <view class="zanCount">点赞{{zanCount}}</view>
  onReady:function(){
    var that = this;
    var head = {"function": "store","method": "myStoreHome"};
    var reqData = {"storeCode": "rUu4FztvlTof8k5YqBwu","state": "1"};
    wx.request({
      url: 'http://test1.95590.cn/bdgetway/mobile',
      data: {
         "head": head ,
         "data": reqData
      },
      header: {
          'content-type': 'application/json'
      },
      method:'POST',
      success: function(res) {
        var pList = res.data.data.allList;
        for(var i = 0 ; i <pList.length;i++){
          pList[i].productImgUrl = "../../images/"+pList[i].productImgUrl.split("/")[pList[i].productImgUrl.split("/").length-1];
        }
        that.data.productList = pList;
        that.data.allProduct = pList;
        that.setData({
          productList:that.data.productList
        });
        console.log(res.data)
      }
    })

    // //获取用户信息
    // app.getUserInfo(function(res){
    //   that.data.headImg = res.avatarUrl;
    //   that.data.storeName = res.nickName+"的门店";
    //   that.setData({
    //     headImg:res.avatarUrl,
    //     storeName:that.data.storeName
    //   });
    // })
  },
  tapType:function(e){
  	var  chooseColor1 = ["#7F8389","#7F8389","#7F8389","#7F8389","#7F8389","#7F8389"]
  	var idx = e.currentTarget.dataset.idx;
  	chooseColor1[idx] = "rgb(28, 169, 255)";
   
    var type = e.currentTarget.dataset.val;
    var activeList = [];
    if(type=="0"){
      activeList = this.data.allProduct;
    }else{
       for(var i = 0 ; i<this.data.allProduct.length;i++){
          var t = this.data.allProduct[i];
          if(t.productType == type){
            activeList.push(t);
          }
        }
    }
    this.data.productList = activeList;
    this.setData({
      chooseColor:chooseColor1,
      productList:activeList
    });
    
  },
  chooseHead:function(){
    var that= this;
    wx.chooseImage({
      count: 1, // 默认9
      sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
      sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
      success: function (res) {
        // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
        var tempFilePaths = res.tempFilePaths;
        that.data.headImg = tempFilePaths;
        that.setData({
          headImg:tempFilePaths
        });
      }
    })
  }
})