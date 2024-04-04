const observer = new IntersectionObserver((entries)=>
{
    entries.forEach((entry)=>
    {
        console.log(entry)
        if(entry.isIntersecting)
        {
            entry.target.classList.add('show');
        }
        else
        {
            entry.target.classList.remove('show');
        }
    });
});

const hiddenElements=document.querySelectorAll('.hidden');
hiddenElements.forEach((e1)=>observer.observe(e1));


const fonts = [
    'Kirang Haerang',
    'Indie Flower',
    'Rye',
     'Amatic SC',
    'Bangers',
    'Fredericka the Great'
  ];
  
  const letters = document.querySelectorAll('.letter');
  
  let count=0;
  
  const rollIntro = () => {
    letters.forEach(letter => {
      
    let randomFontIndex = Math.floor(Math.random() * fonts.length);
      let randomFont = fonts[randomFontIndex];
    
   letter.style.fontFamily=randomFont;
  });
  }
  
  let introAnimation = setInterval(function() {
    rollIntro();
    if(count>1500)
      clearInterval(introAnimation);
    count++;
  },350);