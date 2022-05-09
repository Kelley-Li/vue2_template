// 下载流文件
const download_stream_files = function (res){
  // 切割出文件名
  const fileNameEncode = res.headers['content-disposition'].split('filename=')[1]
  // 解码
  const fileName = decodeURIComponent(fileNameEncode)
  // 设置type类型
  const blob = new Blob([res.data], {
    type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet; application/octet-stream'
  })
  const fileUrl = window.URL.createObjectURL(blob)
  a.href = fileUrl
  console.log('url', fileUrl)

  a.setAttribute('download', fileName)
  a.style.display = 'none'
  a.click()
  a.remove()
}

export default download_stream_files
