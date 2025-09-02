const message = `I don’t even know if you’ll ever read this.\nBut if you do… I just want you to know, I still think about you sometimes.\nI tried. I cared. But the universe just never gave ME enough space to become “us.”\nI gave you everything — all my effort, all my love — but in the end, you still didn’t choose me.\n You kept choosing someone else, while I was just the person you turned to when you were bored, the one you used to pour out your feelings to… and honestly, I’m just so tired.\nTq and goodbye.`;

function showLetter() {
  document.getElementById("introText").style.opacity = 0;
  document.querySelector(".btn").style.display = "none";

  setTimeout(() => {
    const letterBox = document.getElementById("letterBox");
    const typedText = document.getElementById("typedText");
    letterBox.style.display = "block";
    let i = 0;

    function typeWriter() {
      if (i < message.length) {
        typedText.innerHTML += message.charAt(i);
        i++;
        setTimeout(typeWriter, 30);
      }
    }

    typeWriter();
  }, 600);

}
