var posts=["post/cb994cc2.html","post/88e9940c.html","post/1298a7c1.html","post/b839680.html","post/2b91d0c2.html","post/d50a.html","post/d4952d95.html","post/fda1d3f1.html","post/94202af9.html","post/d72de3fb.html","post/a931e1e4.html","post/74bd4bda.html","post/79c2723a.html","post/ae230a75.html"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };var friend_link_list=[{"name":"Hexo","link":"https://hexo.io/zh-tw/","avatar":"https://d33wubrfki0l68.cloudfront.net/6657ba50e702d84afb32fe846bed54fba1a77add/827ae/logo.svg","descr":"快速、简单且强大的网站框架"},{"name":"anzhiyu主题","link":"https://blog.anheyu.com/","avatar":"https://npm.elemecdn.com/anzhiyu-blog-static@1.0.4/img/avatar.jpg","descr":"生活明朗，万物可爱","siteshot":"https://npm.elemecdn.com/anzhiyu-theme-static@1.1.6/img/blog.anheyu.com.jpg"},{"name":"SCFCの博客","link":"https://blog.scfc.top/","avatar":"https://blog.scfc.top/favicon.png","descr":"我们与您同行!","siteshot":"https://blog.scfc.top/img/blog.png","color":"vip","tag":"本站主人"},{"name":"朽丘秋雨","link":"https://koxiuqiu.cn/","avatar":"https://cdn.koxiuqiu.cn/koxiuqiu/img/klcdm_big.webp","descr":"一定会和喜欢的人在夏日夜晚牵手慢步"},{"name":"云团子的博客","link":"https://blog.cutetuan.cn/","avatar":"https://www.yuncheng.fun/static/webAvatar/11727945933180571.png","descr":"欸，是谁家的小可爱？"},{"name":"無名小栈","link":"https://blog.imsyy.top/","avatar":"https://pic.imgdb.cn/item/65bc52b0871b83018a06699d.png","siteshot":"https://pic.imgdb.cn/item/65dc47009f345e8d030b65ba.png","descr":"分享技术与科技生活"},{"name":"可爱的苏苏吖","link":"https://blog.0om.top/","avatar":"https://thirdqq.qlogo.cn/g?b=qq&nk=3894502734&s=640","descr":"风很温柔 花很浪漫 你很特别 我很喜欢"},{"name":"洋洋Blog","link":"https://yangy.co/","avatar":"https://yangy.co/upload/logo.png","descr":"洋洋的小小Blog"},{"name":"幽默的小刘吖","link":"https://blog.lzchi.top/","avatar":"https://z6666.zhuxu.asia/LightPicture/2024/11/c553b4769eaa1a8e.png","descr":"每天分享不一样的知识内容"},{"name":"安知鱼","link":"https://blog.anheyu.com/","avatar":"https://npm.elemecdn.com/anzhiyu-blog-static@1.0.4/img/avatar.jpg","descr":"生活明朗，万物可爱","siteshot":"https://npm.elemecdn.com/anzhiyu-theme-static@1.1.6/img/blog.anheyu.com.jpg","color":"vip","tag":"主题作者"},{"name":"青桔气球","link":"https://blog.qjqq.cn/","avatar":"https://q2.qlogo.cn/headimg_dl?dst_uin=1645253&spec=640","descr":"分享网络安全与科技生活","siteshot":"https://q2.qlogo.cn/headimg_dl?dst_uin=1645253&spec=640"},{"name":"张洪Heo","link":"https://blog.zhheo.com/","avatar":"https://bu.dusays.com/2022/12/28/63ac2812183aa.png","descr":"分享设计与科技生活","siteshot":"https://bu.dusays.com/2024/07/16/6695ebc5158dc.jpg"},{"name":"清羽飞扬","link":"https://blog.liushen.fun/","avatar":"https://blog.liushen.fun/info/avatar.ico","descr":"柳影曳曳，清酒孤灯，扬笔撒墨，心境如霜","siteshot":"https://blog.liushen.fun/info/siteshot.jpg"},{"name":"Imz","link":"https://blog.imz.me/","avatar":"https://blog.imz.me/img/avatar.webp","descr":"仰望星空，脚踏实地。","siteshot":"https://pic.imgdb.cn/item/66eed947f21886ccc089a02b.png"},{"name":"唐志远","link":"https://fe32.top/","avatar":"https://bu.dusays.com/2022/05/02/626f92e193879.jpg","desc":"古今之成大事者，不惟有超世之才，亦必有坚忍不拔之志","siteshot":"https://bu.dusays.com/2023/07/16/64b400bf8e546.jpg"},{"name":"梦爱吃鱼","link":"https://blog.bsgun.cn/","avatar":"https://oss-cdn.bsgun.cn/logo/avatar.256.png","descr":"但愿日子清静抬头遇见的满是柔情"},{"name":"Mo的记事簿","link":"https://blog.xiowo.net/","avatar":"https://blog.xiowo.net/img/avatar.png","descr":"万年鸽王，哈哈OvO","siteshot":"https://bu.dusays.com/2024/11/09/672f779669ef8.jpg"},{"name":"云驰互联","link":"https://cloud.zyidc.net/aff/MWWVNOGU","avatar":"https://imgse.koxiuqiu.cc/xT9R9p.png","descr":"IDC,低价","link_list.tag":"推荐","recommend":true},{"name":"土云","link":"https://cloud.soilcloud.cn/","avatar":"https://cloud.soilcloud.cn/upload/889.png","descr":"提供企业一站式产品与服务","link_list.tag":"推荐","recommend":true}];
    var refreshNum = 1;
    function friendChainRandomTransmission() {
      const randomIndex = Math.floor(Math.random() * friend_link_list.length);
      const { name, link } = friend_link_list.splice(randomIndex, 1)[0];
      Snackbar.show({
        text:
          "点击前往按钮进入随机一个友链，不保证跳转网站的安全性和可用性。本次随机到的是本站友链：「" + name + "」",
        duration: 8000,
        pos: "top-center",
        actionText: "前往",
        onActionClick: function (element) {
          element.style.opacity = 0;
          window.open(link, "_blank");
        },
      });
    }
    function addFriendLinksInFooter() {
      var footerRandomFriendsBtn = document.getElementById("footer-random-friends-btn");
      if(!footerRandomFriendsBtn) return;
      footerRandomFriendsBtn.style.opacity = "0.2";
      footerRandomFriendsBtn.style.transitionDuration = "0.3s";
      footerRandomFriendsBtn.style.transform = "rotate(" + 360 * refreshNum++ + "deg)";
      const finalLinkList = [];
  
      let count = 0;

      while (friend_link_list.length && count < 3) {
        const randomIndex = Math.floor(Math.random() * friend_link_list.length);
        const { name, link, avatar } = friend_link_list.splice(randomIndex, 1)[0];
  
        finalLinkList.push({
          name,
          link,
          avatar,
        });
        count++;
      }
  
      let html = finalLinkList
        .map(({ name, link }) => {
          const returnInfo = "<a class='footer-item' href='" + link + "' target='_blank' rel='noopener nofollow'>" + name + "</a>"
          return returnInfo;
        })
        .join("");
  
      html += "<a class='footer-item' href='/link/'>更多</a>";

      document.getElementById("friend-links-in-footer").innerHTML = html;

      setTimeout(()=>{
        footerRandomFriendsBtn.style.opacity = "1";
      }, 300)
    };