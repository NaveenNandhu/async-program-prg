function print_memes(memes) {
  let meme_url = [];
  //console.log(memes);

  for (i = 0; i < memes.length; i++) {
    meme_url[i] = memes[i]["url"];
  }

  let random_number = Math.random() * memes.length;
  let img_tag = document.querySelector(".meme-image");

  img_tag.src = meme_url[Math.floor(random_number)];
}

async function getMemes() {
  let responseMemes = await fetch("https://api.imgflip.com/get_memes");
  if (responseMemes.status != 200) {
    alert("Something Went Wrong");
  } else {
    let joke = await responseMemes.json();
    print_memes(joke.data.memes);
  }
}
