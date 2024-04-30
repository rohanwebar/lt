// function restrictAccess() {
//     var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
//     if (!isMobile) {
//         document.body.innerHTML = 'This content is only accessible on mobile devices.';
//         // Alternatively, redirect to another page
//         // window.location.href = "https://example.com/mobile-only";
//     }
// }

// window.onload = restrictAccess;


const showInfo = () => {
let y = 0;
const webButton = document.querySelector("#web-button");
 webButton.addEventListener("click", function (evt) {
window.location.href = "https://luminexa.in";
});
const instaButton = document.querySelector("#insta-button");
const facebookButton = document.querySelector("#facebook-button");
const whatsappButton = document.querySelector("#whatsapp-button");
const gmailButton = document.querySelector("#gmail-button");

// webButton.setAttribute("visible", true);
  instaButton.setAttribute("visible", true);
setTimeout(() => {
  facebookButton.setAttribute("visible", true);
}, 0);
setTimeout(() => {
  whatsappButton.setAttribute("visible", true);
}, 0);
setTimeout(() => {
  gmailButton.setAttribute("visible", true);
}, 0);
setTimeout(()=>{
  booknowButton.setAttribute("visible", true)
}, 0);



let currentTab = "";
// webButton.addEventListener("click", function (evt) {
//   window.location.href = "https://deviautomotives.in";
// });
instaButton.addEventListener("click", function (evt) {
  window.location.href = "https://www.instagram.com/_luminexa";
});
facebookButton.addEventListener("click", function (evt) {
  window.location.href = "https://www.facebook.com/arluminexa/";
});
whatsappButton.addEventListener("click", function (evt) {
  window.location.href = "https://wa.me/08660449970";
});
gmailButton.addEventListener("click", function (evt) {
  window.location.href =
    "https://google.in";
});




};

const showPortfolio = (done) => {
    
    const paintandquestPreviewButton = document.querySelector("#paintandquest-preview-button");
    
    const id = setInterval(() => {
        clearInterval(id);
            paintandquestPreviewButton.addEventListener('click', () => {
                paintandquestPreviewButton.setAttribute("visible", false);
                const testVideo = document.createElement("video");
                const canplayWebm = testVideo.canPlayType('video; codecs="vp8, vorbis"');
                if (canplayWebm == "") {
                    document.querySelector("#paintandquest-video-link").setAttribute("src", "#paintandquest-video-mp4");
                    document.querySelector("#paintandquest-video-mp4").play();
                } else {
                    document.querySelector("#paintandquest-video-link").setAttribute("src", "#paintandquest-video-webm");
                    document.querySelector("#paintandquest-video-webm").play();
                }
            });

    }, 10);
      if (done && typeof done === 'function') {
      done();
        }
}


AFRAME.registerComponent('mytarget', {
    init: function() {
        this.el.addEventListener('targetFound', event => {
            console.log("target found");
            showPortfolio(() => {
                setTimeout(() => {
                    showInfo();
                }, 0);
            });
        });
        this.el.addEventListener('targetLost', event => {
            console.log("target found");
        });
        //this.el.emit('targetFound');
    }
});