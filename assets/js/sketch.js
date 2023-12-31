myData = ``
let img, 
myFont = [];
myFonts = 10 //total number of files on font folder
imgNum = 1
fontNum = 0
pageNum = 1
xaxis=20
yaxis=20
fontsize=30
w=700
linespacing=30
function preload() {
    fontLoad();
    loadPage();
}

function setup(){
    canvas = createCanvas(750,1000)
    canvas.parent('contributing')
    rectMode(CORNER);
}

function draw(){
    image(img, 0, 0, width, height)
    textFont(myFont[fontNum]);
    textSize(fontsize)
    fill('#264180')
    if(linespacing){
        textLeading(linespacing);
    }
    data = "\n"+myData
    text(data, xaxis, yaxis, w, 900);
}

function fontLoad(){
    for(var i = 0; i < myFonts; i++){
        myFont.push(loadFont('fonts/font ('+str(i)+').ttf'));
    }
}

function changeFont(){
    fontNum += 1;
    fontNum %= myFonts
}

function loadPage(){
    img = loadImage('pages/page (2).jpg');
}

function runOnLoad(){
    var fileupload = document.getElementById("pageUploader");
    var button = document.getElementById("btnPageUpload");
    button.onclick = function () {
        fileupload.click();
    };
    fileupload.onchange = function () {
        console.log("page Uploader Triggered.")
        var reader = new FileReader();
        reader.readAsDataURL(fileupload.files[0]);
        reader.onload = function (e) {
            img = loadImage(e.target.result);
        }
    };

    var fontupload = document.getElementById("fontUploader");
    button = document.getElementById("btnFontUpload");
    button.onclick = function () {
        fontupload.click();
    };
    fontupload.onchange = function () {
        console.log("font Uploader Triggered.")
        var reader = new FileReader();
        reader.readAsDataURL(fontupload.files[0]);
        reader.onload = function (e) {
            myFont.push(loadFont(e.target.result))
            myFonts += 1
            fontNum = myFonts - 1
        }
    };

}

gsap.from("#m1",{
    scrollTrigger : {
      scrub: true
    },
    y: 100,
  })
  gsap.from("#m2",{
    scrollTrigger : {
      scrub: true
    },
    y: 50,
  })
  gsap.from("#t2",{
    scrollTrigger : {
      scrub: true
    },
    x: -50,
  })
  gsap.from("#t1",{
    scrollTrigger : {
      scrub: true
    },
    x: 50,
  })
  gsap.from("#man",{
    scrollTrigger : {
      scrub: true
    },
    x: -250,
  })
  gsap.from("#plants",{
    scrollTrigger : {
      scrub: true
    },
    x: -50,
  })
  gsap.from("#text",{
    scrollTrigger : {
      scrub: true
    },
    x: 600,
  })
