<template>
	<view>
		<u-button @click="getUserLocation">获取位置</u-button>
		<u-button @click="getInfo">获取信息</u-button>
	</view>
</template>

<script>
export default {
	data() {
		return {
			
		};
	},
	methods: {
		getUserLocation() {
			uni.getLocation({
				type: 'wgs84',
				success: (res) => {
					console.log(res.latitude, res.longitude)
					// 调用高德地图API，根据经纬度获取地址
					uni.request({
						url: 'https://restapi.amap.com/v3/geocode/regeo',
						data: {
							key: '你的高德地图API密钥',
							location: `${res.latitude},${res.longitude}`
						},
						success: (res) => {
							console.log(res.data)
						},
						fail: (err) => {
							console.log(err)
						}
					})
				}
			})
		},
		async getInfo() {
			try {
				const res = await uni.request({
					url: 'https://hsjapi.ynhuashengjin.com/biz/api/tagValue/list?enabled=true',
					method: 'GET',
					header: {
						'Content-Type': 'application/json'
					}
				})
				console.log(res)
			} catch (err) {
				console.log(err)
			}
		}

	}
};
</script>