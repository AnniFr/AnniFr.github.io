const openPopup = () => {
    document.getElementById('overlay').style.display = 'block';
    document.getElementById('popbox').style.display = 'block';
    let popuptext = document.getElementById('ptext');
    let eleID = event.target.id;

    switch(eleID) {
        case 'haiku':
            popuptext.innerHTML = 'This was a group project with the aim of generating random text. The code aims to generate reasonably logical sentences with the correct number of syllables.';
            document.getElementById('sitelink').href = './Haiku-Generator/index.html';
            break;
        case 'bluebee':
            popuptext.innerHTML = 'The aim of this project was to use flex to create a homepage for a company. I decided to base this on my own Etsy shop.';
            document.getElementById('sitelink').href = './BlueBumbleBee/index.html';
            break;
        case 'club':
            popuptext.innerHTML = 'The aim was to create a responsive site for a fictional club that would adapt to different screen sizes.';
            document.getElementById('sitelink').href = './Ramblers-site/index.html';
            break;
        case 'hat':
            popuptext.innerHTML = 'This project involved creating a simple node.js game that works in the terminal. I added extra features such as hard mode and some colour customisation.';
            document.getElementById('go').innerHTML = 'GitHub Repository';
            document.getElementById('sitelink').href = 'https://github.com/AnniFr/Find-your-hat';
            break;
        default:
            popuptext.innerHTML = 'Add project description.';

        
    }

    const overlay = document.getElementById('overlay');
    overlay.addEventListener('click', closePopup);
}

const closePopup = () => {
    document.getElementById('overlay').style.display = '';
    document.getElementById('popbox').style.display = '';
    document.getElementById('go').innerHTML = 'Go to site';
}

//adds event listener to each item with class project
const projects = document.getElementsByClassName('project');
for(let i = 0; i < projects.length; i++) {
    projects[i].addEventListener('click', openPopup);
}

//makes button close popup and remove overlay
const btn = document.getElementById('closeButton');
btn.addEventListener('click', closePopup);


