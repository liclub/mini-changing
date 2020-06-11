Page({
	data:{
		webUrl:""
	},
	onLoad:function(option){
		console.log(option.url);
		this.data.webUrl = option.url;
		this.setData({
			webUrl:option.url
		})
	}
})