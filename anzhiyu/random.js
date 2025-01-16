var posts=["2024/08/24/土云数据/","2025/01/16/送台服务器/","2024/12/29/无锡是2025春晚分会场之一/","2024/07/31/朋友居然被拷打了？！/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };var friend_link_list=[{"name":"Hexo","link":"https://hexo.io/zh-tw/","avatar":"https://d33wubrfki0l68.cloudfront.net/6657ba50e702d84afb32fe846bed54fba1a77add/827ae/logo.svg","descr":"快速、简单且强大的网站框架"},{"name":"anzhiyu主题","link":"https://blog.anheyu.com/","avatar":"https://npm.elemecdn.com/anzhiyu-blog-static@1.0.4/img/avatar.jpg","descr":"生活明朗，万物可爱","siteshot":"https://npm.elemecdn.com/anzhiyu-theme-static@1.1.6/img/blog.anheyu.com.jpg"},{"name":"星前月下（博客无内容）","link":"https://www.星.fun","avatar":"https://q.qlogo.cn/g?b=qq&nk=2949368068&s=640","descr":"原神崩铁绝区零三修","siteshot":"https://preview.cloud.189.cn/image/imageAction?param=9B03818B733B001550B3970C22C871067CFC0E094BF4B6E3E8CAC27117D994EE86605D9E09E62991614E0AD5FA98F5FEA96EC622C7C9400D179891A90A18D16C8E6F5F5EF8022F6DFDFD9B285E2A35A48EB51E3E342E452B9DCEBD7ECE67FE8429B4016E6D272B4AB0AA3E2B82B224E0BF52DB00","color":"vip","tag":"朋友"},{"name":"安知鱼","link":"https://blog.anheyu.com/","avatar":"https://npm.elemecdn.com/anzhiyu-blog-static@1.0.4/img/avatar.jpg","descr":"生活明朗，万物可爱","siteshot":"https://npm.elemecdn.com/anzhiyu-theme-static@1.1.6/img/blog.anheyu.com.jpg","color":"vip","tag":"主题作者"},{"name":"土云","link":"https://cloud.soilcloud.cn/","avatar":"https://cloud.soilcloud.cn/upload/889.png","descr":"提供企业一站式产品与服务","link_list.tag":"推荐","recommend":true},{"name":"LedCDN","link":"https://cdn.ledcdn.com/","avatar":"https://preview.cloud.189.cn/image/imageAction?param=3E10085375F3C81EED7D76C7C287A1C4872871790D0CDF1F3558F1DFEF5F1D412387513D12F6D7EE71EA27829420317EC9FDFCC263B5C3251738041996A2FB13209A7F118AAF6333BD61D18F59B761025B7B46D318BD2B38E1014091B4DE3A12EA56E06CB61C499E10092F7C75117B81376A5F64","descr":"公益CDN服务商","link_list.tag":"推荐","recommend":true}];
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