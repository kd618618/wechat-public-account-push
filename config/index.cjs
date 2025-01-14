/* eslint-disable */

/**
 * 此项目配置为方便新人使用，已缩减至最简配置。
 * 如若想使用更多功能，请查考文档中的 【3. config参数说明】 
 * 自行添加属性，以支持更多个性化功能
 */
const USER_CONFIG = {

  // 使用微信测试号：公众号APP_ID
  APP_ID: 'wxe7b6eb2b63eb66a3',

  // 使用微信测试号：公众号APP_SECRET
  APP_SECRET: '6e19f8d28a4c837765f5efe7903988b0',
 
  PROVINCE: '陕西',
  CITY: '西安',

  USERS: [
    {
      // 想要发送的人的名字
      name: '老公',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'oRjRd5ovGezDOXuig1MwQ5T89tAA',
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: 'JREMC5GI4id1Jpgw6ced66X41mCNZS2ggBP2GAhAK1Y',
      // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
      horoscopeDate: '12-03',
      festivals: [
        // 注意：此条配置日期为阴历日期，因为`type`中 “生日” 之前有 * 符号
        { type: '*生日', name: '老公', year: '2001', date: '12-03'},
        { type: '*生日', name: '老婆', year: '2002', date: '06-02'},
        { type: '节日', name: '恋爱纪念日', year: '2019', date: '04-02'},
      ],
      FESTIVALS_LIMIT:3,
      
      // 我们在一起已经有xxxx天了的配置
      customizedDateList: [
        // 在一起的日子
        { keyword: 'love_day', date: '2019-04-02' },
      ],
      
      LITERARY_PREFERENCE:""
    },
  ],


  // 【推送完成提醒】模板id, 用来看自己有没有发送成功的那个模板
  CALLBACK_TEMPLATE_ID: 'JREMC5GI4id1Jpgw6ced66X41mCNZS2ggBP2GAhAK1Y',

  CALLBACK_USERS: [
    {
      name: '自己',
      // 使用微信测试号：自己的微信id，扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'oRjRd5u-wnVE0RuSAPe00JKbJi80',
    }
  ],

}

module.exports = USER_CONFIG

