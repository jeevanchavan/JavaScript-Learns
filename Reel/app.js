const reels = [
  {
    username: "tech_vibes",
    likeCount: 1200,
    isLiked: false,
    commentCount: 45,
    caption: "New setup day 💻✨",
    video: "videos/video1.mp4",
    userprofile: "https://picsum.photos/seed/u1/100",
    shareCount: 12,
    isFollowed: true
  },
  {
    username: "travel_with_me",
    likeCount: 5400,
    isLiked: true,
    commentCount: 120,
    caption: "Sunset hits different 🌅",
    video: "./videos/video2.mp4",
    userprofile: "https://picsum.photos/seed/u2/100",
    shareCount: 89,
    isFollowed: false
  },
  {
    username: "foodie_fun",
    likeCount: 2100,
    isLiked: false,
    commentCount: 30,
    caption: "Street food is love 😋",
    video: "./videos/video3.mp4",
    userprofile: "https://picsum.photos/seed/u3/100",
    shareCount: 22,
    isFollowed: false
  },
  {
    username: "gym_boost",
    likeCount: 980,
    isLiked: true,
    commentCount: 18,
    caption: "No pain, no gain 💪",
    video: "./videos/video4.mp4",
    userprofile: "https://picsum.photos/seed/u4/100",
    shareCount: 7,
    isFollowed: true
  },
  {
    username: "art_by_mia",
    likeCount: 3100,
    isLiked: false,
    commentCount: 64,
    caption: "Small sketch today ✍️",
    video: "./videos/video5.mp4",
    userprofile: "https://picsum.photos/seed/u5/100",
    shareCount: 15,
    isFollowed: false
  },
  {
    username: "daily_quotes",
    likeCount: 15000,
    isLiked: true,
    commentCount: 260,
    caption: "Keep going. You’re closer than you think. ✨",
    video: "./videos/video6.mp4",
    userprofile: "https://picsum.photos/seed/u6/100",
    shareCount: 300,
    isFollowed: true
  },
  {
    username: "coder_zone",
    likeCount: 870,
    isLiked: false,
    commentCount: 12,
    caption: "Trying new UI ideas today 🔥",
    video: "./videos/video7.mp4",
    userprofile: "https://picsum.photos/seed/u7/100",
    shareCount: 4,
    isFollowed: true
  },
  {
    username: "pet_world",
    likeCount: 4500,
    isLiked: true,
    commentCount: 140,
    caption: "Cutest dog ever 🐶❤️",
    video: "./videos/video8.mp4",
    userprofile: "https://picsum.photos/seed/u8/100",
    shareCount: 50,
    isFollowed: false
  },
  {
    username: "street_photography",
    likeCount: 2600,
    isLiked: false,
    commentCount: 33,
    caption: "City lights at night 📸",
    video: "./videos/video9.mp4",
    userprofile: "https://picsum.photos/seed/u9/100",
    shareCount: 18,
    isFollowed: false
  },
  {
    username: "funny_moments",
    likeCount: 6700,
    isLiked: true,
    commentCount: 200,
    caption: "Bro fell down 💀🤣",
    video: "./videos/video10.mp4",
    userprofile: "https://picsum.photos/seed/u10/100",
    shareCount: 70,
    isFollowed: true
  }
];


let sum = ''
reels.forEach(function(val){
    sum = sum + `<div class="reel">
                    <video autoplay loop muted src="${val.video}"></video>
                    <div class="bottom">
                    <div class="user">
                        <img src="${val.userprofile}" alt="">
                        <h4>${val.username}</h4>
                        <button>${val.isFollowed?'Unfollow':'Follow'}</button>
                    </div>
                    <h3>${val.caption}</h3>
                </div>
                <div class="right">
                    <div class="like">
                        <h4 class="like-icon">${val.isLiked?'<i class="ri-heart-fill filled"></i>':'<i class="ri-heart-line"></i>'}</h4>
                        <h6>${val.likeCount}</h6>
                    </div>
                    <div class="comment">
                        <h4 class="comment-icon"><i class="ri-chat-3-line"></i></h4>
                        <h6>${val.commentCount}</h6>
                    </div>
                    <div class="share">
                        <h4 class="share-icon"><i class="ri-share-forward-line"></i></h4>
                        <h6>${val.shareCount}</h6>
                    </div>
                    <div class="menu">
                        <h4 class="menu-icon"><i class="ri-more-2-line"></i></h4>
                    </div>
                </div>
                </div>`
    
})

let allReels = document.querySelector('.all-reels')
allReels.innerHTML = sum
